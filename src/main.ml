

let player =
  Player.create "player" 50. 50.


let () =
  Input_handler.register_command (KeyDown "z") (fun () -> Player.move_up player);
  Input_handler.register_command (KeyDown "s") (fun () -> Player.move_down player);
  Input_handler.register_command (KeyDown "q") (fun () -> Player.move_left player);
  Input_handler.register_command (KeyDown "d") (fun () -> Player.move_right player);
  Input_handler.register_command (KeyUp "z") (fun () -> Player.stop player);
  Input_handler.register_command (KeyUp "s") (fun () -> Player.stop player);
  Input_handler.register_command (KeyUp "q") (fun () -> Player.stop player);
  Input_handler.register_command (KeyUp "d") (fun () -> Player.stop player);

  Game_state.init player 

(* *)
let init () = System.init_all ()

let frames = ref 0
let time = ref 0.0
let update dt =
  if !frames mod 600 == 0 then begin
    let t = dt -. !time in
    Gfx.debug (Format.asprintf "%f fps" (1000. *. float !frames /. t));
    time := dt;
    frames := 0
  end;
  incr frames;
  (* Update all systems *)
  System.update_all dt;
  (* Repeat indefinitely *)
  true

let update_loop () = Gfx.main_loop update

let () =
  init ();
  update_loop ()
