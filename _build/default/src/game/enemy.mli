open Ecs

val create : string -> float -> float -> float -> float -> Gfx.image -> Entity.t

val reset : Entity.t -> float -> float -> unit

val stop : Entity.t -> unit