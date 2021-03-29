open Ecs

type room = { 
  index : int;
  id: Entity.t;
  ennemies : Entity.t list;
  value : int array array;
  doors : (bool*int) array;

}


val init : Entity.t -> room array -> Gfx.image -> unit
val get_player : unit -> Entity.t
val get_status : unit -> bool
val set_state : bool -> unit


val enable_wall : Entity.t -> unit

val door_f  : int -> int

val generate_map : int array array -> Gfx.color array -> int -> Gfx.image -> room array

