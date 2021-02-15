let player_img = Gfx.load_image("src/img/charSheet.png")
(* *)
let init_game _dt = 
  System.init_all ();
  Gfx.debug (Format.asprintf " init");
  
  let player = Player.create "player" 50. 50. player_img in
  Input_handler.register_command (KeyDown "z") (fun () -> Player.move_up player);
  Input_handler.register_command (KeyDown "s") (fun () -> Player.move_down player);
  Input_handler.register_command (KeyDown "q") (fun () -> Player.move_left player);
  Input_handler.register_command (KeyDown "d") (fun () -> Player.move_right player);
  Input_handler.register_command (KeyUp "z") (fun () -> Player.stop player);
  Input_handler.register_command (KeyUp "s") (fun () -> Player.stop player);
  Input_handler.register_command (KeyUp "q") (fun () -> Player.stop player);
  Input_handler.register_command (KeyUp "d") (fun () -> Player.stop player);
  Game_state.init player;

  
  false

let play_game dt =
  (* Update all systems *)
  Gfx.debug (Format.asprintf " play");
  System.update_all dt;
  if (not(Game_state.get_status ())) then false
  else true

let end_game _dt =
Gfx.debug (Format.asprintf " end");
 false 
 
let load_graphics _dt = 
  if ((Gfx.image_ready player_img)) then false
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

              
let t () = 
  let m = chain_functions [load_graphics;init_game;play_game;end_game]in
  Gfx.main_loop m



let () =
  t ()