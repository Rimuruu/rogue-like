open Component_defs
open Ecs


let create posX posY img = (*On choisit la direction qu'il prend quand il est créé*)
  let e = Entity.create () in
  let anim = Texture.create_animation img 3 4 160 160 40 40 in
  Position.set e { x = posX; y = posY};
  Velocity.set e { x = 0.0; y = 0.0};
  Mass.set e infinity;
  Box.set e {width = 40; height=40 };
  Name.set e "ennemy";
  Surface.set e anim;
  Texture.create_idle "front_walk" (0,3) anim;
  Texture.create_idle "right_walk" (3,6) anim;
  Texture.create_idle "back_walk" (6,9) anim;
  Texture.create_idle "left_walk" (9,12) anim;
  Texture.play_idle anim "front_walk";
  Priority.set e 2;

  (* systems *)
  
  e

let reset e x y = 
  Position.set e { x = x; y = y }

let stop e =
  Velocity.set e Vector.zero
  