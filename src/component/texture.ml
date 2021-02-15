exception MissingIdle of string
type tupleInt = (int *int)


type animation = {
        frames : Gfx.render array;
        idleTable : (string, tupleInt) Hashtbl.t;
        mutable currentIdle : tupleInt;
        mutable current : int
}

type t = Color of Gfx.color
        | Image of Gfx.render
        | Animation of animation
        | Tile of Gfx.render array

let black = Color (Gfx.color 0 0 0 255)
let red = Color (Gfx.color 255 0 0 255)
let blue = Color (Gfx.color 0 0 255 255)

let gray = Color (Gfx.color 128 128 128 255)

let create_img img l h = 
        let r = Gfx.create_offscreen l h in
        Gfx.draw_image_scale r img 0 0 l h;
        r


let create_animation img num_w num_h sw sh dw dh = 
        let array_frame = Array.init (num_w * num_h) (fun _i -> Gfx.create_offscreen dw dh) in
        for y = 0 to (num_h-1) do
                for x = 0 to (num_w-1) do
                        Gfx.debug (Format.asprintf "%i x*sw %i y*sh" (x*sw) (y*sh));
                        Gfx.draw_image_full array_frame.(y*num_w+x) img (x*sw) (y*sh) sw sh 0 0 dw dh;
                done
        done;
        Animation {frames = array_frame; current = 0;currentIdle = (0,num_w * num_h) ; idleTable = Hashtbl.create 32}

let create_idle idleName (deb, fin) anim= 
  match anim with 
    | Animation a -> Hashtbl.replace (a.idleTable) idleName (deb, fin)
    | _ -> ()
let get_idle idleName anim= try
  Hashtbl.find anim.idleTable idleName
  with
    Not_found -> raise (MissingIdle(idleName))

let play_idle anim idleName = 
  match anim with 
  |Animation a ->  let (deb,fin) = get_idle idleName a in
                    a.current <- deb;
                    a.currentIdle <- (deb,fin) 
  | _ -> ()



let get_frame anim _dir = 
        let currentCase = Array.get (anim.frames) (anim.current) in
        let _deb = (fst anim.currentIdle) in
        let _fin = (snd anim.currentIdle) in
        let _current = anim.current in
        (*if current == fin-1 then anim.current <- deb else anim.current <- anim.current + 1;*)
        currentCase