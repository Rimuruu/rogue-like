open Ecs

type room = { 
  index : int;
  id: Entity.t;
  ennemies : Entity.t list;
  value : int array array;
  doors : (bool*int) array;

}


val init : Entity.t -> room array -> unit
val get_player : unit -> Entity.t
val get_status : unit -> bool





val door_f  : int -> int

val generate_map : int array array -> Gfx.color array -> int -> Gfx.image -> room array

