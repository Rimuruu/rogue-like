open Component_defs

let init () = ()

let time = ref 0.0


let move_to e1 e2 = 
  let posE1 = Position.get e1 in
  let posE2 = Position.get e2 in
  let distX = posE1.x -. posE2.x in
  let distY = posE1.y -. posE2.y in
  if (distX ** 2.) >= (distY ** 2.) then
    if (distX >= 0. ) then Velocity.set e1 { x = -100.0; y = 0.0 }
    else Velocity.set e1 { x = 100.0; y = 0.0 }
  else if (distY >= 0. ) then Velocity.set e1 { x = 0.0; y = -100.0 }
        else Velocity.set e1 { x = 0.0; y = 100.0 }
        
let update dt el =
  let delta_t = min (1. /. 60.) (1000. *.(dt -. !time)) in
  let player = fst (List.find (fun kv -> (String.compare (snd kv) "player")==0 ) (Name.members ())) in
  time := dt;
  List.iter (fun e ->
      if (String.compare (Name.get e) "ennemy")==0 then move_to e player;
      let pos = Position.get e in
      let speed = Vector.mult delta_t (Velocity.get e) in
      Position.set e ({ x = pos.x +. speed.x; y = pos.y +. speed.y })
    ) el
