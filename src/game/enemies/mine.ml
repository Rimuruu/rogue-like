open Component_defs
open Ecs


let create posX posY = (*On choisit la direction qu'il prend quand il est créé*)
  let e = Entity.create () in
  Position.set e { x = posX; y = posY};
  Velocity.set e { x = 0.0; y = 0.0};
  Mass.set e infinity;
  Box.set e {width = 15; height=15 };
  Name.set e "mine";
  Surface.set e Texture.rougefonce;
  Priority.set e 2;

  (* systems *)
  
  e

let reset e x y = 
  Position.set e { x = x; y = y }

let stop e =
  Velocity.set e Vector.zero
  