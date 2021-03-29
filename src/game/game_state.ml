
open Ecs
open System_defs
open Component_defs
type room = { 
  index : int;
  id: Entity.t;
  ennemies : Entity.t list;
  value : int array array;
  doors : (bool*int) array;
}

type t = {
  player : Entity.t;
  mutable isPlaying : bool;
  currentRoom : room;
  map : room array;
  doors_entity : Entity.t array;
  walls_entity : Entity.t array;
}

type t_interface = {
  vie_entity : Entity.t array;
  background : Entity.t;
  pos : Vector.t;
}

type t_player_state = {
  mutable health : int;
}


let interface = ref {
  vie_entity = [||];
  background = Entity.dummy;
  pos = {x=20.;y=60.};
}



let player_state = ref {
  health = 3;
}

let state = ref {
  player = Entity.dummy;
  isPlaying = true;
  currentRoom = {id=Entity.dummy;ennemies=[];index=(-1);value=[||];doors=[||]};
  map = [||];
  doors_entity = [|Entity.dummy;Entity.dummy;Entity.dummy;Entity.dummy|];
  walls_entity = [|Entity.dummy;Entity.dummy;Entity.dummy;Entity.dummy|];
}

let set_state b = !state.isPlaying <- b

let get_player () = !state.player
let get_status ()= !state.isPlaying

let disable_heart e =
  Draw_S.unregister e;
  ()

let enable_heart e =
  Draw_S.register e;
  ()


let update_health () = 
  Array.iteri (fun i e -> if (i > (!player_state.health-1)) then disable_heart e else enable_heart e) !interface.vie_entity;
  if !player_state.health == 0 then !state.isPlaying <- false


let door_f n =
  match n with 
  0 -> 2
  |1 -> 3
  |2 -> 0
  |3 -> 1
  |_ -> -1

let random_door room =
  Random.self_init ();
  let list = ref []in
     for i = 0 to (Array.length room.doors)-1 do
      let door = Array.get room.doors i in
      if (fst door == false) then list := i::(!list);
     done;
    List.nth !list (Random.int (List.length !list))

let path m = 

  let rec path_aux map room =
    let door = random_door room in
    match map with 
    |[] -> []
    |[x] -> 
      Array.set room.doors door  (true,x.index);
      Array.set x.doors (door_f door) (true,room.index);
      room::[x]
    | x::tail -> 
        Array.set room.doors door  (true,x.index);
        Array.set x.doors (door_f door) (true,room.index);
        room::(path_aux tail x) 

  in
  path_aux (List.tl m) (List.hd m) 

  let collisionEnnemy _ennemy e =
    let name = Name.get e in
      if (String.compare name "player") == 0 then begin
        let vf = InvunerableFrame.get e in
        if vf == 0 then begin
          !player_state.health <- !player_state.health-1;
          update_health ();
          InvunerableFrame.set e 65;
        end;
      end

(*
let rec creation_ennemiesA dangerosite ennemies player_img =
  if dangerosite > 0 then begin
    let menace = Random.int dangerosite in
    match menace with
    |1 -> creation_ennemiesA (dangerosite-1) ((Ball.create 300. 400. player_img)::ennemies) player_img
    |2 -> if Random.bool () then creation_ennemiesA (dangerosite-2) ((Gobelin.create 300. 400. player_img)::ennemies) player_img
                           else creation_ennemiesA (dangerosite-2) ((Trappeur.create 300. 400. 0. 100. player_img)::ennemies) player_img
    |_ -> creation_ennemiesA dangerosite ennemies player_img
    end
  else
    ennemies

let creation_ennemies niveau ennemies player_img =
  Random.self_init ();
  let dangerosite = Random.int (niveau+3) in
  creation_ennemiesA dangerosite ennemies player_img
*)  
  
  let generate_map d p n player_img=
  let map = List.init n (fun e -> 
    let entity = Map.create "map" 0. 80. p d 40 in
    let e1 = Gobelin.create 200. 200. player_img in
    let e2 = Ball.create 300. 400. player_img in
    let e3 = Trappeur.create 600. 160. 0. 100. player_img in
    let e4 = Mine.create 120. 180. in
    let ennemies = [e1;e2;e3;e4] in
    (*let ennemies = creation_ennemies 1 [] player_img in*)
    List.iter (fun e -> CollisionResolver.set e collisionEnnemy) ennemies;
    {id=entity;ennemies=ennemies;index=e;value=d;doors=(Array.init 4 (fun _e -> (false,-1)))} 
    )in
    Array.of_list (path map)
  
let disable_door e =
  Draw_S.unregister e;
  Collision_S.unregister e;
  ()

let enable_door e =
  Draw_S.register e;
  Collision_S.register e;
  ()

let enable_wall e =
  Draw_S.register e;
  Collision_S.register e;
  ()
      
let disable_wall e =
  Draw_S.unregister e;
  Collision_S.unregister e;
  ()

    let change_door () =
  let d = !state.currentRoom.doors in
  let d_e = !state.doors_entity in
  let w_e = !state.walls_entity in
  for i = 0 to 3 do
  if (fst (Array.get d i)) then begin
    enable_door (Array.get d_e i);
    disable_wall (Array.get w_e i);
    end
  else begin 
    disable_door (Array.get d_e i);
    enable_wall (Array.get w_e i);
    end
  done

let get_door name = 
if (String.compare name "left")==0 then (Array.get !state.currentRoom.doors 0)
else if (String.compare name "top")==0 then (Array.get !state.currentRoom.doors 1)
else if (String.compare name "right")==0 then(Array.get !state.currentRoom.doors 2)
else if (String.compare name "bottom")==0 then(Array.get !state.currentRoom.doors 3)
else (false,1)

let load_ennemie e =
  Collision_S.register e;
  Control_S.register e;
  Draw_S.register e;
  Move_S.register e

let unload_ennemie e =
  Collision_S.unregister e;
  Control_S.unregister e;
  Draw_S.unregister e;
  Move_S.unregister e
        
let change_room e =
  let name = Name.get e in
  let r = snd (get_door name) in
  let room = (Array.get !state.map r)in
  let old_room = !state.currentRoom in
  state := { !state with currentRoom = room;};
  List.iter (fun e -> unload_ennemie e) old_room.ennemies;
  List.iter (fun e -> load_ennemie e) room.ennemies;
  change_door ()        

let collision door e = 
  let name = Name.get e in
  if (String.compare name "player") == 0 then begin
    change_room door;
    Position.set e (Teleport.get door);
    (*Velocity.set e Vector.zero;*)
  end
  



    let init pe1 map heart_img=
      let doorsInit = [|(Door.create "left" 40. 320. 660. 320.);(Door.create "top" 400. 120. 400. 500.);(Door.create "right" 720. 320. 100. 320.);(Door.create "bottom" 400. 560. 400. 180.) |]in
      let wallsInit = [|(Wall.create 40. 320. 40 40);(Wall.create 400. 120. 40 40);(Wall.create 720. 320. 40 40);(Wall.create 400. 560. 40 40)|] in
      Array.iter (fun e -> CollisionResolver.set e collision) doorsInit;
      state := { isPlaying = true; player = pe1; map = map;currentRoom=(Array.get map 0);doors_entity = doorsInit;walls_entity = wallsInit};
      Draw_S.register !state.currentRoom.id;
      List.iter (fun e -> load_ennemie e) !state.currentRoom.ennemies;
      player_state := {health =3};
      interface := {!interface with vie_entity = (Array.init 5 (fun e -> Heart.create ((20.*.(float_of_int e))+.20.) 20. heart_img));background = (Background.create 0. 0.)};
      update_health ();
      
      change_door ()

    






