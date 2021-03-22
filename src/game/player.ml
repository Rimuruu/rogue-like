open Component_defs
open System_defs
open Ecs


let create name x y img=
  let e = Entity.create () in
  let anim = Texture.create_animation img 3 4 160 160 40 40 in
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = 40; height=40 };
  Name.set e name;
  Surface.set e anim;
  Texture.create_idle "front_walk" (0,3) anim;
  Texture.create_idle "right_walk" (3,6) anim;
  Texture.create_idle "back_walk" (6,9) anim;
  Texture.create_idle "left_walk" (9,12) anim;
  Texture.play_idle anim "front_walk";
  Priority.set e 2;
  InvunerableFrame.set e 0;
  (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Draw_S.register e;
  Move_S.register e;
  Logic_S.register e;
  e

let reset e x y = 

  Position.set e { x = x; y = y }



let move_up e =
  let isPushed = Input_handler.get_key "up" in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Gfx.debug (Format.asprintf "pressed");
    Input_handler.set_key "up" true;
    Texture.play_idle anim "back_walk";
    Velocity.set e { x = 0.0; y = -200.0 }
  end
  
let move_down e =
  let isPushed = Input_handler.get_key "down" in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Gfx.debug (Format.asprintf "pressed");
    Input_handler.set_key "down" true;
  Texture.play_idle anim "front_walk";
    Velocity.set e { x = 0.0; y = 200.0 }
  end

let move_right e =
  let isPushed = Input_handler.get_key "right" in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Gfx.debug (Format.asprintf "pressed");
    Input_handler.set_key "right" true;
  Texture.play_idle anim "right_walk";
    Velocity.set e { x = 200.0; y = 0.0 }
  end
  
let move_left e =
  let isPushed = Input_handler.get_key "left" in
  if not(isPushed) then begin
    let anim = Surface.get e in
    Gfx.debug (Format.asprintf "pressed");
    Input_handler.set_key "left" true;
  Texture.play_idle anim "left_walk";
    Velocity.set e { x = -200.0; y = 0.0 }
  end

let stop key e =
  Input_handler.set_key key false;
  Velocity.set e Vector.zero
  