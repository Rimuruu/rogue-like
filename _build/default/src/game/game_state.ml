
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
  
  isPlaying : bool;
  currentRoom : room;
  map : room array;
  doors_entity : Entity.t array;
}

let state = ref {
  player = Entity.dummy;
  isPlaying = true;
  currentRoom = {id=Entity.dummy;ennemies=[];index=(-1);value=[||];doors=[||]};
  map = [||];
  doors_entity = [|Entity.dummy;Entity.dummy;Entity.dummy;Entity.dummy|];
}



let get_player () = !state.player
let get_status ()= !state.isPlaying


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
      for i = 0 to (Array.length room.doors)-1 do
        let b,ind = Array.get room.doors i in
        Gfx.debug (Format.asprintf "index %d door  %d %b"room.index  ind b);
       done;
      for i = 0 to (Array.length x.doors)-1 do
        let b,ind = Array.get x.doors i in
        Gfx.debug (Format.asprintf "index %d door  %d %b"x.index  ind b);
       done;
      room::[x]
    | x::tail -> 
        Array.set room.doors door  (true,x.index);
        Array.set x.doors (door_f door) (true,room.index);
        for i = 0 to (Array.length room.doors)-1 do
          let b,ind = Array.get room.doors i in
          Gfx.debug (Format.asprintf "index %d door %d %b" room.index ind b);
         done;
        room::(path_aux tail x) 

  in
  path_aux (List.tl m) (List.hd m) 

  let generate_map d p n player_img=
  let map = List.init n (fun e -> 
    let entity = Map.create "map" 0. 80. p d 40 in
    let e1 = Enemy.create "ennemy" 200. 240. 0. 100. player_img in
    let ennemies = [e1] in
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

    let change_door () =
      let d = !state.currentRoom.doors in
      let d_e = !state.doors_entity in
      for i = 0 to 3 do
        if (fst (Array.get d i)) then enable_door (Array.get d_e i)
        else disable_door (Array.get d_e i)
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
        Gfx.debug (Format.asprintf "play %d %d" r (Array.length !state.map));
        state := { !state with currentRoom = room;};
        List.iter (fun e -> unload_ennemie e) old_room.ennemies;
        List.iter (fun e -> load_ennemie e) room.ennemies;
        change_door ()        
    
  let collision door e = 
    let name = Name.get e in
    if (String.compare name "player") == 0 then begin
      change_room door;
      Position.set e (Teleport.get door);
      Velocity.set e Vector.zero;
    end

    let init pe1 map=
      let doorsInit = [|(Door.create "left" 40. 320. 660. 320.);(Door.create "top" 400. 120. 400. 500.);(Door.create "right" 720. 320. 100. 320.);(Door.create "bottom" 400. 560. 400. 180.) |]in
      Array.iter (fun e -> CollisionResolver.set e collision) doorsInit;
      state := { !state with player = pe1; map = map;currentRoom=(Array.get map 0);doors_entity = doorsInit};
      Draw_S.register !state.currentRoom.id;
      List.iter (fun e -> load_ennemie e) !state.currentRoom.ennemies;
      change_door ()

    






