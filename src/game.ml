

let frameStart = ref 0.0
let frameEnd = ref 0.0
let frameCount = ref 0
let frameTimer = ref 0.0
let fps = 60.0
let frameDelay = 1. /. fps
let player_img = Gfx.load_image("src/img/charSheet.png")
let gobelin_img = Gfx.load_image("src/img/gobelinSheet.png")
let heart_img = Gfx.load_image("src/img/heart.png")
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
Gfx.debug (Format.asprintf " end");
System.reset_all ();
 false 
 
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
                funs := ll;
                true
              end

let run () =  
  let m = chain_functions [load_graphics;init_game;play_game;end_game]in
  Gfx.main_loop m

               
              