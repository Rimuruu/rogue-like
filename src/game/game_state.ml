
open Ecs
type t = {
  player : Entity.t;
  ennemies : Entity.t list;
  isPlaying : bool;
}

let state = ref {
  player = Entity.dummy;
  ennemies = [];
  isPlaying = true;
}

let get_player () = !state.player
let get_ennemies ()= !state.ennemies
let get_status ()= !state.isPlaying

let init pe1 =
  state := { !state with player = pe1;}
