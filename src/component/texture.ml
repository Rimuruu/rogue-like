type animation = {
        frames : Gfx.render array;
        mutable current : int
}

type t = Color of Gfx.color
        | Image of Gfx.render
        | Animation of animation

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
        {frames = array_frame; current = 0}




let get_frame anim dir = 
        let currentCase = Array.get (anim.frames) (anim.current) in
        if (dir > 0) then 
              if (anim.current == ((Array.length anim.frames)-1)) then 
                anim.current <- (0) 
               else  
                anim.current <- (anim.current + 1)
        else if (dir < 0) then
               if (anim.current == 0) then 
                 anim.current <- ((Array.length anim.frames)-1) 
                else  
                 anim.current <-(anim.current - 1);

        currentCase