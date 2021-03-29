open Component_defs
open System_defs
open Ecs



let create x y img=
  let e = Entity.create () in
    Position.set e { x = x; y = y};
    Box.set e { width = 800; height = 640};
    Velocity.set e Vector.zero;
    Surface.set e (Texture.create_img img 800 640);
    Priority.set e 0;
    
    (* systems *)
    Draw_S.register e;
  
    e