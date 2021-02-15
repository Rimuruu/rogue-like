open Component_defs
open System_defs



let create name x y img=
  let e = Entity.create () in
  let anim = Texture.create_animation img 3 4 160 160 80 80 in
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = 80; height=80 };
  Name.set e name;
  Surface.set e anim;
  Texture.create_idle "front_walk" (0,3) anim;
  Texture.create_idle "right_walk" (3,6) anim;
  Texture.create_idle "back_walk" (6,9) anim;
  Texture.create_idle "left_walk" (9,12) anim;
  Texture.play_idle anim "front_walk";

  (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Draw_S.register e;
  Move_S.register e;
  e

let reset e x y = 

  Position.set e { x = x; y = y }

let move_up e =
  let anim = Surface.get e in
    Texture.play_idle anim "back_walk";
    Velocity.set e { x = 0.0; y = -200.0 }
  
let move_down e =
  let anim = Surface.get e in
  Texture.play_idle anim "front_walk";
    Velocity.set e { x = 0.0; y = 200.0 }

let move_right e =
  let anim = Surface.get e in
  Texture.play_idle anim "right_walk";
    Velocity.set e { x = 200.0; y = 0.0 }
  
let move_left e =
  let anim = Surface.get e in
  Texture.play_idle anim "left_walk";
    Velocity.set e { x = -200.0; y = 0.0 }

let stop e =
  Velocity.set e Vector.zero
  