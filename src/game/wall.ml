open Component_defs
open System_defs
open Ecs




let create x y w h=
let e = Entity.create () in
  Position.set e { x = x; y = y};
  Box.set e { width = w; height = h};
  Velocity.set e Vector.zero;
  Mass.set e infinity;
  Surface.set e Texture.blue;
  Priority.set e 1;
  
  (* systems *)
  Draw_S.register e;
  Collision_S.register e;
  e


