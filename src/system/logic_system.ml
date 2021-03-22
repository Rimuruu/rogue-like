open Component_defs
let init () = ()

let update _dt el =
  List.iter (fun e ->
    let name = Name.get e in
      if (String.compare name "player") == 0 then begin
        let vf = InvunerableFrame.get e in
        if vf > 0 then InvunerableFrame.set e (vf-1)
      end;
    
    ) el
