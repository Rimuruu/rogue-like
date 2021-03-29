
open Component_defs
let frameStart = ref 0.0
let frameEnd = ref 0.0
let frameCount = ref 0
let frameTimer = ref 0.0
let fps = 60.0
let frameDelay = 1. /. fps
let player_img = Gfx.load_image("src/img/charSheet.png")
let gobelin_img = Gfx.load_image("src/img/gobelinSheet.png")
let heart_img = Gfx.load_image("src/img/heart.png")
let go_img = Gfx.load_image("src/img/GameOverScreen.png")
(* *)
let init_game _dt = 
  System.init_all ();
  Gfx.debug (Format.asprintf " init");
  
  let player = Player.create "player" 80. 240. player_img in
 
  Input_handler.register_command (KeyDown "z") (fun () -> Player.move_up player);
  Input_handler.register_command (KeyDown "s") (fun () -> Player.move_down player);
  Input_handler.register_command (KeyDown "q") (fun () -> Player.move_left player);
  Input_handler.register_command (KeyDown "d") (fun () -> Player.move_right player);
  Input_handler.register_command (KeyUp "z") (fun () -> Player.stop "up" player);
  Input_handler.register_command (KeyUp "s") (fun () -> Player.stop "down" player);
  Input_handler.register_command (KeyUp "q") (fun () -> Player.stop "left" player);
  Input_handler.register_command (KeyUp "d") (fun () -> Player.stop "right" player);
  Input_handler.set_key "up" false;
  Input_handler.set_key "down" false;
  Input_handler.set_key "left" false;
  Input_handler.set_key "right" false;
  let map = Game_state.generate_map Global.map Global.palette 5 gobelin_img in
  (*Murs du haut*)
  Game_state.enable_wall (Wall.create 40. 120. 360 40);
  Game_state.enable_wall (Wall.create 440. 120. 320 40);
  (*Murs du bas*)
  Game_state.enable_wall (Wall.create 40. 560. 360 40);
  Game_state.enable_wall (Wall.create 440. 560. 320 40);
  (*Murs de gauche*)
  Game_state.enable_wall (Wall.create 40. 160. 40 160);
  Game_state.enable_wall (Wall.create 40. 360. 40 200);
  (*Murs de droite*)
  Game_state.enable_wall (Wall.create 720. 160. 40 160);
  Game_state.enable_wall (Wall.create 720. 360. 40 200);
  
  Game_state.init player map heart_img;
  false

let play_game dt =
  (* Update all systems *)
  frameStart := Sys.time ();
  System.update_all dt;
  frameEnd := (Sys.time ()) -. !frameStart;
  while !frameEnd < frameDelay do frameEnd := (Sys.time ()) -. !frameStart; done;
  frameTimer := !frameTimer +. !frameEnd;
  incr frameCount;
  if !frameTimer >= 1.0 then begin Gfx.debug (Format.asprintf "fps : %d" !frameCount); frameTimer := 0.;frameCount:=0; end;
  if (not(Game_state.get_status ())) then false
  else true

let end_game _dt =
System.reset_all ();
Input_handler.reset_all ();
Input_handler.register_command (KeyUp "r") (fun () -> Game_state.set_state true);
let _go_entity = GoScreen.create 0. 0. go_img in
false 
 
let reset_game dt =
  
Gfx.debug (Format.asprintf "reset");
System.update_all dt;
if (Game_state.get_status ()) then begin System.reset_all (); reset_all ();Input_handler.reset_all (); false end
else true 
 

let load_graphics _dt = 
  if ((Gfx.image_ready player_img)&&(Gfx.image_ready heart_img)&&(Gfx.image_ready gobelin_img)) then false
  else true

let chain_functions f_list = 
  let funs = ref f_list in
  fun dt -> match !funs with
            [] -> false
            | f :: ll -> 
              if f dt then
                true
              else begin
                funs := ll@[f];
                true
              end

let run () =  
  let m = chain_functions [load_graphics;init_game;play_game;end_game;reset_game]in
  Gfx.main_loop m

               
              