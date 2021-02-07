

type t = {
  player : Entity.t;
  ennemies : Entity.t list;
}

let state = ref {
  player = Entity.dummy;
  ennemies = []
}

let get_player () = !state.player
let get_ennemies ()= !state.ennemies

let init pe1 =
  state := { !state with player = pe1;}
