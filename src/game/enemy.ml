open Component_defs
open Ecs


let create name posX posY velX velY img= (*On choisit la direction qu'il prend quand il est créé*)
  let e = Entity.create () in
  let anim = Texture.create_animation img 3 4 160 160 40 40 in
  Position.set e { x = posX; y = posY};
  Velocity.set e { x = velX; y = velY};
  Mass.set e infinity;
  Box.set e {width = 40; height=40 };
  Name.set e name;
  Surface.set e anim;
  Texture.create_idle "move" (0,3) anim;
  Texture.play_idle anim "move";
  Priority.set e 2;

  (* systems *)
  
  e

let reset e x y = 

  Position.set e { x = x; y = y }

let stop e =
  Velocity.set e Vector.zero
  