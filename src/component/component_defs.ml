open Ecs
module Position = Component.Make(struct include Vector let name = "position" end)
module Teleport = Component.Make(struct include Vector let name = "teleport" end)
module Priority = Component.Make(struct type t = int  let name = "priority" end)
module Velocity = Component.Make(struct include Vector let name = "velocity" end)
module Mass = Component.Make (struct type t = float let name = "mass" end)
module Box = Component.Make(struct include Rect let name = "box" end)
module Surface = Component.Make (struct include Texture let name = "texture" end)
module Name = Component.Make(struct type t = string let name = "name" end)
module CollisionResolver = Component.Make(struct type t = Entity.t -> Entity.t -> unit let name = "resolver" end)
module Owner = Component.Make(struct type t = Entity.t let name = "owner" end)
module InvunerableFrame = Component.Make(struct type t = int  let name = "invunerableFrame" end)



let reset_all () = 
  Position.reset ();
  Teleport.reset ();
  Priority.reset ();
  Velocity.reset ();
  Mass.reset ();
  Box.reset ();
  Surface.reset ();
  Name.reset ();
  CollisionResolver.reset ();
  Owner.reset ();
  InvunerableFrame.reset ()