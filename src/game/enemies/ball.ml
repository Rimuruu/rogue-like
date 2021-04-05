open Component_defs
open Ecs


let create posX posY img = (*On choisit la direction qu'il prend quand il est créé*)
  Random.self_init ();
  let velX = (Random.int 400)-200 in
  let velY = (Random.int 400)-200 in
  let e = Entity.create () in
  let anim = Texture.create_animation img 3 4 160 160 40 40 in
  Position.set e { x = posX; y = posY};
  Velocity.set e { x = Float.of_int velX ; y = Float.of_int velY};
  Mass.set e 5.0;
  Box.set e {width = 15; height=15 };
  Name.set e "ball";
  Surface.set e anim;
  Surface.set e Texture.red;
  Priority.set e 2;

  (* systems *)
  
  e

let reset e x y = 
  Position.set e { x = x; y = y }

let stop e =
  Velocity.set e Vector.zero
  