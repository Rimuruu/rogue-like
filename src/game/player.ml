open Component_defs
open System_defs



let create name x y =
  let e = Entity.create () in
  Position.set e { x = x; y = y};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Box.set e {width = 50; height=50 };
  Name.set e name;
  Surface.set e Texture.black;


  (* systems *)
  Collision_S.register e;
  Control_S.register e;
  Draw_S.register e;
  Move_S.register e;
  e

let reset e x y = 
  Position.set e { x = x; y = y }

let move_up e =

    Velocity.set e { x = 0.0; y = -200.0 }
  
let move_down e =

    Velocity.set e { x = 0.0; y = 200.0 }

let move_right e =

    Velocity.set e { x = 200.0; y = 0.0 }
  
let move_left e =
    Velocity.set e { x = -200.0; y = 0.0 }

let stop e =
  Velocity.set e Vector.zero
  