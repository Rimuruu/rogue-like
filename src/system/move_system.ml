open Component_defs

let init () = ()

let time = ref 0.0


let move_to e1 e2 = 
  let posE1 = Position.get e1 in
  let posE2 = Position.get e2 in
  let vecE1 = Velocity.get e1 in
  let distX = posE1.x -. posE2.x in
  let distY = posE1.y -. posE2.y in
  let _dist = Float.sqrt ((distX**2.) +. (distY**2.)) in
  let anim = Surface.get e1 in
  if (distX ** 2.) >= ((distY ** 2.)+.(10.**2.)) then 
    if (distX >= 0.) then begin Velocity.set e1 { x = -50.0; y = 0.0 }; if (not(Vector.is_equal vecE1 { x = -50.0; y = 0.0 }))then Texture.play_idle anim "left_walk" end
    else  begin  Velocity.set e1 { x = 50.0; y = 0.0 }; if (not(Vector.is_equal vecE1 { x = 50.0; y = 0.0 })) then Texture.play_idle anim "right_walk" end
  else  if (distY >= 0.) then begin  Velocity.set e1 { x = 0.0; y = -50.0 }; if ( not(Vector.is_equal vecE1 { x = 0.0; y = -50.0 })) then Texture.play_idle anim "back_walk" end
        else  begin Velocity.set e1 { x = 0.0; y = 50.0 }; if (not(Vector.is_equal vecE1 { x = 0.0; y = 50.0 })) then Texture.play_idle anim "front_walk" end
        

  
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
