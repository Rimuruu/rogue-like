exception MissingKey of (string)

let commands = Hashtbl.create 17
let keysDown = Hashtbl.create 32

let get_key key = try
  Hashtbl.find keysDown key
  with
    Not_found -> raise (MissingKey (key))

let set_key key b = 
    Hashtbl.replace keysDown key b


let register_command ev f =
  if ev != Gfx.NoEvent then
    Hashtbl.add commands  ev f

let get_commands ev = Hashtbl.find_all commands ev