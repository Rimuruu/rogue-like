open Component_defs
open System_defs
open Ecs

let delete e = 
  Move_S.unregister e;
  Draw_S.unregister e;
  Collision_S.unregister e
  

let collision e1 e2 = 
  if(Name.has_component e2) then begin
    let name = Name.get e2 in
    if ((String.compare name "wall") == 0 ) ||((String.compare name "bottom") == 0 )||((String.compare name "top") == 0 )||((String.compare name "right") == 0 )||((String.compare name "left") == 0 ) then delete e1
    else ()
end





let create name x y img velX velY idle=
  let e = Entity.create () in
  let anim = Texture.create_animation img 4 4 20 20 20 20 in
  Position.set e { x = x; y = y};
  Velocity.set e { x = velX; y = velY};
  Mass.set e infinity;
  Box.set e {width = 20; height=20 };
  Name.set e name;
  Surface.set e anim;
  Texture.create_idle "right_shot" (0,3) anim;
  Texture.create_idle "down_shot" (4,7) anim;
  Texture.create_idle "left_shot" (8,11) anim;
  Texture.create_idle "up_shot" (12,15) anim;
  Texture.play_idle anim idle;
  Priority.set e 2;
  CollisionResolver.set e collision;
  (* systems *)
  Move_S.register e;
  Draw_S.register e;
  Collision_S.register e;
 
  e

