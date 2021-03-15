(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_string_of_jsbytes(""),
     cst_Gfx_Gfx_base_GfxError=
      caml_string_of_jsbytes("Gfx__Gfx_base.GfxError"),
     cst_0=caml_string_of_jsbytes("0)"),
     cst$0=caml_string_of_jsbytes(", "),
     cst$1=caml_string_of_jsbytes(", "),
     cst$2=caml_string_of_jsbytes(", "),
     cst_rgba=caml_string_of_jsbytes("rgba("),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_scanf=global_data.Stdlib__scanf,
     Stdlib=global_data.Stdlib,
     Stdlib_format=global_data.Stdlib__format,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Stdlib_queue=global_data.Stdlib__queue,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Gfx_gfx_jsoo=[0];
    caml_register_global(48,Gfx_gfx_jsoo,"Gfx__gfx_jsoo__");
    var Gfx=[0];
    caml_register_global(49,Gfx,"Gfx__");
    var
     GfxError=[248,cst_Gfx_Gfx_base_GfxError,runtime.caml_fresh_oo_id(0)],
     _d_=
      [0,
       [20,
        0,
        caml_string_of_jsbytes
         ("\xff\xff\xff\xff\xff\xff\xff\xfb\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
        [12,58,[4,0,0,0,[12,120,[4,0,0,0,[12,58,[2,0,0]]]]]]],
       caml_string_of_jsbytes("%[^:]:%dx%d:%s")],
     _a_=
      [0,
       [11,
        caml_string_of_jsbytes("Invalid window spec `"),
        [2,0,[11,caml_string_of_jsbytes("` : "),[2,0,0]]]],
       caml_string_of_jsbytes("Invalid window spec `%s` : %s")],
     _b_=
      [0,
       [11,caml_string_of_jsbytes("Invalid window spec `"),[2,0,[12,96,0]]],
       caml_string_of_jsbytes("Invalid window spec `%s`")],
     _c_=
      [0,
       [11,caml_string_of_jsbytes("Invalid window spec `"),[2,0,[12,96,0]]],
       caml_string_of_jsbytes("Invalid window spec `%s`")],
     _e_=
      [0,
       [11,
        caml_string_of_jsbytes("Cannot find canvas with id `"),
        [2,0,[12,96,0]]],
       caml_string_of_jsbytes("Cannot find canvas with id `%s`")];
    function gfx_error(fmt)
     {function _C_(msg){throw [0,GfxError,msg]}
      return caml_call2(Stdlib_format[134],_C_,fmt)}
    function parse_window_spec(s)
     {try
       {var
         _A_=
          function(title,width,height,flags)
           {return [0,
                    title,
                    width,
                    height,
                    caml_call2(Stdlib_string[35],44,flags)]},
         _B_=caml_call3(Stdlib_scanf[4],s,_d_,_A_);
        return _B_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Stdlib_scanf[2])
         {var msg=exn[2],match=caml_call2(Stdlib_string[35],58,msg);
          if(match)
           {var _y_=match[2];
            if(_y_)
             {var l=_y_[2],_z_=caml_call2(Stdlib_string[7],cst,l);
              return caml_call2(gfx_error(_a_),s,_z_)}}
          return caml_call1(gfx_error(_b_),s)}
        if(exn === Stdlib[12])return caml_call1(gfx_error(_c_),s);
        throw exn}}
    var include=[0,GfxError,gfx_error,parse_window_spec];
    caml_register_global(54,include,"Gfx__Gfx_base");
    var events=caml_call1(Stdlib_queue[2],0);
    function create(s)
     {var
       match=
        caml_call2(Js_of_ocaml_Dom_html[5],s,Js_of_ocaml_Dom_html[117][10]);
      if(match)
       {var
         canvas=match[1],
         ctx=canvas.getContext(Js_of_ocaml_Dom_html[1]),
         _s_=
          function(e)
           {function _w_(k)
             {var _x_=[1,caml_string_of_jsstring(k)];
              return caml_call2(Stdlib_queue[3],_x_,events)}
            caml_call2(Js_of_ocaml_Js[6][6],e.key,_w_);
            return Js_of_ocaml_Js[7]};
        canvas.onkeydown = caml_call1(Js_of_ocaml_Dom_html[10],_s_);
        var
         _t_=
          function(e)
           {function _u_(k)
             {var _v_=[0,caml_string_of_jsstring(k)];
              return caml_call2(Stdlib_queue[3],_v_,events)}
            caml_call2(Js_of_ocaml_Js[6][6],e.key,_u_);
            return Js_of_ocaml_Js[7]};
        canvas.onkeyup = caml_call1(Js_of_ocaml_Dom_html[10],_t_);
        return [0,canvas,ctx]}
      return caml_call1(gfx_error(_e_),s)}
    function create_offscreen(w,h)
     {var
       canvas=
        caml_call1(Js_of_ocaml_Dom_html[110],Js_of_ocaml_Dom_html[2]);
      canvas.height = h;
      canvas.width = w;
      return canvas.getContext(Js_of_ocaml_Dom_html[1])}
    function render_width(ctx){return ctx.canvas.width}
    function render_height(ctx){return ctx.canvas.width}
    function blit(dst,src,x,y){return dst.drawImage(src.canvas,x,y)}
    function blit_scale(dst,src,dx,dy,dw,dh)
     {return dst.drawImage(src.canvas,dx,dy,dw,dh)}
    function blit_full(dst,src,sx,sy,sw,sh,dx,dy,dw,dh)
     {return dst.drawImage(src.canvas,sx,sy,sw,sh,dx,dy,dw,dh)}
    function color(r,g,b,a)
     {var
       _h_=caml_call1(Stdlib[35],a / 255.),
       _i_=caml_call2(Stdlib[28],_h_,cst_0),
       _j_=caml_call2(Stdlib[28],cst$0,_i_),
       _k_=caml_call1(Stdlib[33],b),
       _l_=caml_call2(Stdlib[28],_k_,_j_),
       _m_=caml_call2(Stdlib[28],cst$1,_l_),
       _n_=caml_call1(Stdlib[33],g),
       _o_=caml_call2(Stdlib[28],_n_,_m_),
       _p_=caml_call2(Stdlib[28],cst$2,_o_),
       _q_=caml_call1(Stdlib[33],r),
       _r_=caml_call2(Stdlib[28],_q_,_p_);
      return caml_call2(Stdlib[28],cst_rgba,_r_)}
    function clear_rect(ctx,x,y,w,h){return ctx.clearRect(x,y,w,h)}
    function fill_rect(ctx,x,y,w,h,c)
     {ctx.fillStyle = caml_jsstring_of_string(c);return ctx.fillRect(x,y,w,h)}
    function load_image(src)
     {var img=caml_call1(Js_of_ocaml_Dom_html[67],Js_of_ocaml_Dom_html[2]);
      img.src = caml_jsstring_of_string(src);
      return img}
    function image_ready(img){return img.complete | 0}
    function draw_image(ctx,img,x,y){return ctx.drawImage(img,x,y)}
    function draw_image_scale(ctx,img,dx,dy,dw,dh)
     {return ctx.drawImage(img,dx,dy,dw,dh)}
    function draw_image_full(ctx,img,sx,sy,sw,sh,dx,dy,dw,dh)
     {return ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh)}
    function draw_text(ctx,text,x,y,font,color)
     {ctx.font = caml_jsstring_of_string(font);
      ctx.fillStyle = caml_jsstring_of_string(color);
      return ctx.fillText(caml_jsstring_of_string(text),x,y)}
    function measure_text(ctx,text,font)
     {ctx.font = caml_jsstring_of_string(font);
      var m=ctx.measureText(caml_jsstring_of_string(text));
      return m.width | 0}
    function poll_event(param)
     {return caml_call1(Stdlib_queue[13],events)
              ?0
              :caml_call1(Stdlib_queue[7],events)}
    function main_loop(f)
     {var cb=[0,caml_js_wrap_callback(function(param){return 0})];
      function loop(dt)
       {var
         _f_=caml_call1(f,dt),
         _g_=_f_?(Js_of_ocaml_Dom_html[8].requestAnimationFrame(cb[1]),0):_f_;
        return _g_}
      cb[1] = caml_js_wrap_callback(loop);
      Js_of_ocaml_Dom_html[8].requestAnimationFrame(cb[1]);
      return 0}
    function commit(param){return 0}
    function debug(msg)
     {return Js_of_ocaml_Firebug[1].log(caml_jsstring_of_string(msg))}
    var
     Gfx$0=
      [0,
       GfxError,
       gfx_error,
       parse_window_spec,
       create,
       create_offscreen,
       render_width,
       render_height,
       blit,
       blit_scale,
       blit_full,
       color,
       fill_rect,
       clear_rect,
       load_image,
       image_ready,
       draw_image,
       draw_image_scale,
       draw_image_full,
       draw_text,
       measure_text,
       poll_event,
       main_loop,
       commit,
       debug];
    caml_register_global(59,Gfx$0,"Gfx");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2Z4X2pzb28ub2Jqcy9nZnhfanNvby5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiZ2Z4X2Vycm9yIiwiZm10IiwibXNnIiwicGFyc2Vfd2luZG93X3NwZWMiLCJzIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImZsYWdzIiwibCIsImV2ZW50cyIsImNyZWF0ZSIsImNhbnZhcyIsImN0eCIsImUiLCJrIiwiY3JlYXRlX29mZnNjcmVlbiIsInciLCJoIiwicmVuZGVyX3dpZHRoIiwicmVuZGVyX2hlaWdodCIsImJsaXQiLCJkc3QiLCJzcmMiLCJ4IiwieSIsImJsaXRfc2NhbGUiLCJkeCIsImR5IiwiZHciLCJkaCIsImJsaXRfZnVsbCIsInN4Iiwic3kiLCJzdyIsInNoIiwiY29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY2xlYXJfcmVjdCIsImZpbGxfcmVjdCIsImMiLCJsb2FkX2ltYWdlIiwiaW1nIiwiaW1hZ2VfcmVhZHkiLCJkcmF3X2ltYWdlIiwiZHJhd19pbWFnZV9zY2FsZSIsImRyYXdfaW1hZ2VfZnVsbCIsImRyYXdfdGV4dCIsInRleHQiLCJmb250IiwibWVhc3VyZV90ZXh0IiwibSIsInBvbGxfZXZlbnQiLCJtYWluX2xvb3AiLCJmIiwiY2IiLCJsb29wIiwiZHQiLCJjb21taXQiLCJkZWJ1ZyJdLCJzb3VyY2VzIjpbIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L2xpYi9nZngvZ2Z4X2Jhc2UubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9saWIvZ2Z4L2dmeF9qc29vL2dmeC5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBR0lBLFVBQVVDO01BQ1osYUFDS0MsS0FBTyxrQkFBUEEsSUFBMkI7TUFEaEMseUNBRFlELElBR1Q7YUFT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TUFFcEMsZ0JBQXFCLHdCQUZvQmhCO01BR3pCLDRDQUhXZSxNQUFLM0IsRUFBRUMsRUFHa0I7SUF4RnpDLFNBMEZUNEIsYUFBY3hDLElBQWNzQyxLQUFLQztNQUNuQyxXQUFnQix3QkFEbUJBO01BRTNCLElBQUpFLEVBQUksZ0JBQW1CLHdCQUZHSDtNQUdqQixPQURURyxXQUNzQjtJQTdGZixTQStGVEM7TUFDQyxtQ0FoR0Q3Qzs7ZUFpR0csMkJBakdIQSxPQWlHbUI7SUFqR1YsU0FvR1Q4QyxVQUFVQztNQUNDLElBQVRDLE1BQVMsc0NBQTRCLFFBQUU7TUFBOUIsU0FDVEMsS0FBS0M7UUFDRjt3QkFIS0gsRUFFSEc7U0FDRixTQUNNLDhDQUhURjtRQUFxQyxVQUdvQjtNQUU3RCw4QkFKSUM7TUFLRSw4Q0FORkQ7TUFNRSxRQUE4QztJQTNHekMsU0E2R1RHLGNBQVcsUUFBRTtJQTdHSixTQStHVEMsTUFBTTVEO01BQ2UsMERBRGZBLEtBQzhCO0lBaEgzQjs7OztPRExURjtPQVlBRztPQ05BUTtPQWtCQUs7T0FNQUc7T0FHQUM7T0FJQUM7T0FHQUs7T0FJQUs7T0FLQUs7T0FlQU07T0FIQUQ7T0FVQUc7T0FLQUU7T0FHQUM7T0FHQUM7T0FHQUM7T0FLQUM7T0FLQUc7T0FLQUU7T0FLQUM7T0FTQUs7T0FFQUM7SUEvR1M7VSIsInNvdXJjZXNDb250ZW50IjpbIigqIEV4Y2VwdGlvbiByYWlzZWQgd2hlbiBhIGdyYXBoaWNhbCBlcnJvciBvY2N1cnMgKilcbmV4Y2VwdGlvbiBHZnhFcnJvciBvZiBzdHJpbmdcblxubGV0IGdmeF9lcnJvciBmbXQgPVxuICBGb3JtYXQua2FzcHJpbnRmIFxuICAoZnVuIG1zZyAtPiByYWlzZSAoR2Z4RXJyb3IgbXNnKSlcbiAgZm10XG5cbigqIFR5cGUgb2YgdXNlciBpbnB1dCBldmVudHMgKilcbnR5cGUgZXZlbnQgPVxuICBOb0V2ZW50ICAgICAgICAgICgqIG5vIGV2ZW50ICopXG58IEtleVVwIG9mIHN0cmluZyAgKCogS2V5IHdpdGggYSBnaXZlbiBuYW1lIHdhcyByZWxlYXNlZCAqKVxufCBLZXlEb3duIG9mIHN0cmluZyAoKiBLZXkgd2l0aCBhIGdpdmVuIG5hbWUgd2FzIHByZXNzZWQgKilcblxuXG5sZXQgcGFyc2Vfd2luZG93X3NwZWMgcyA9XG4gIHRyeVxuICAgU2NhbmYuc3NjYW5mIHMgXCIlW146XTolZHglZDolc1wiIChmdW4gdGl0bGUgd2lkdGggaGVpZ2h0IGZsYWdzIC0+XG4gICAgICh0aXRsZSwgd2lkdGgsIGhlaWdodCwgU3RyaW5nLnNwbGl0X29uX2NoYXIgJywnIGZsYWdzKVxuICAgIClcbiAgd2l0aCBTY2FuZi5TY2FuX2ZhaWx1cmUgbXNnIC0+XG4gICAgYmVnaW4gbWF0Y2ggU3RyaW5nLnNwbGl0X29uX2NoYXIgJzonIG1zZyB3aXRoXG4gICAgICBfOjpfOjpsIC0+IGdmeF9lcnJvciBcIkludmFsaWQgd2luZG93IHNwZWMgYCVzYCA6ICVzXCIgcyAoU3RyaW5nLmNvbmNhdCBcIlwiIGwpXG4gICAgICB8IF8gLT4gIGdmeF9lcnJvciBcIkludmFsaWQgd2luZG93IHNwZWMgYCVzYFwiIHNcbiAgICBlbmRcbiAgfCBFbmRfb2ZfZmlsZSAgLT4gZ2Z4X2Vycm9yIFwiSW52YWxpZCB3aW5kb3cgc3BlYyBgJXNgXCIgcyBcbiIsIm9wZW4gSnNfb2Zfb2NhbWxcbmluY2x1ZGUgR2Z4X2Jhc2VcblxuXG50eXBlIHdpbmRvdyA9IERvbV9odG1sLmNhbnZhc0VsZW1lbnQgSnMudFxudHlwZSByZW5kZXIgPSBEb21faHRtbC5jYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgSnMudFxudHlwZSBjb2xvciA9IHN0cmluZ1xuXG5sZXQgZXZlbnRzID0gUXVldWUuY3JlYXRlICgpXG5sZXQgY3JlYXRlIHMgPVxuICAoKmxldCBpZCwgdywgaCwgXyA9IHBhcnNlX3dpbmRvd19zcGVjIHMgaW4gKilcbiAgbWF0Y2ggRG9tX2h0bWwuZ2V0RWxlbWVudEJ5SWRfY29lcmNlIHMgRG9tX2h0bWwuQ29lcmNlVG8uY2FudmFzIHdpdGhcbiAgICAgTm9uZSAtPiAgZ2Z4X2Vycm9yIFwiQ2Fubm90IGZpbmQgY2FudmFzIHdpdGggaWQgYCVzYFwiIHNcbiAgIHwgU29tZSBjYW52YXMgLT5cbiAgICAgICgqY2FudmFzICMjLndpZHRoIDo9ICB3O1xuICAgICAgY2FudmFzICMjLmhlaWdodCA6PSBoOyopXG4gICAgICBsZXQgY3R4ID0gY2FudmFzICMjZ2V0Q29udGV4dCBEb21faHRtbC5fMmRfIGluXG4gICAgICBjYW52YXMgIyMuIG9ua2V5ZG93biA6PSBEb21faHRtbC5oYW5kbGVyIChmdW4gZSAtPlxuICAgICAgICBKcy5PcHRkZWYuaXRlciBlICMjLmtleSAoZnVuIGsgLT5cbiAgICAgICAgICBRdWV1ZS5hZGQgKEdmeF9iYXNlLktleURvd24gKEpzLnRvX3N0cmluZyBrKSkgZXZlbnRzKTtcbiAgICAgICAgSnMuX3RydWUpO1xuICAgICAgY2FudmFzICMjLiBvbmtleXVwIDo9IERvbV9odG1sLmhhbmRsZXIgKGZ1biBlIC0+XG4gICAgICAgIEpzLk9wdGRlZi5pdGVyIGUgIyMua2V5IChmdW4gayAtPlxuICAgICAgICAgIFF1ZXVlLmFkZCAoR2Z4X2Jhc2UuS2V5VXAgKEpzLnRvX3N0cmluZyBrKSkgZXZlbnRzKTtcbiAgICAgICAgSnMuX3RydWUpO1xuICAgICAgKGNhbnZhcywgY3R4KVxuXG5sZXQgY3JlYXRlX29mZnNjcmVlbiB3IGggPVxuICBsZXQgY2FudmFzID0gRG9tX2h0bWwuY3JlYXRlQ2FudmFzIERvbV9odG1sLmRvY3VtZW50IGluXG4gICAgY2FudmFzICMjLiBoZWlnaHQgOj0gaDtcbiAgICBjYW52YXMgIyMuIHdpZHRoIDo9IHc7XG4gICAgY2FudmFzIyNnZXRDb250ZXh0IERvbV9odG1sLl8yZF9cblxubGV0IHJlbmRlcl93aWR0aCAoY3R4IDogcmVuZGVyKSA9XG4gIGN0eCAjIy4gY2FudmFzICMjLiB3aWR0aFxuXG5sZXQgcmVuZGVyX2hlaWdodCAoY3R4IDogcmVuZGVyKSA9XG4gIGN0eCAjIy4gY2FudmFzICMjLiB3aWR0aFxuXG5cbmxldCBibGl0IChkc3QgOiByZW5kZXIpIChzcmMgOiByZW5kZXIpIHggeSA9XG4gIGRzdCAjIyBkcmF3SW1hZ2VfZnJvbUNhbnZhcyAoc3JjICMjLiBjYW52YXMpIChmbG9hdCB4KSAoZmxvYXQgeSlcblxubGV0IGJsaXRfc2NhbGUgKGRzdCA6IHJlbmRlcikgKHNyYyA6IHJlbmRlcikgZHggZHkgZHcgZGggPVxuICAgIGRzdCAjIyBkcmF3SW1hZ2VfZnJvbUNhbnZhc1dpdGhTaXplIChzcmMgIyMuIGNhbnZhcylcbiAgICAgKGZsb2F0IGR4KSAoZmxvYXQgZHkpIChmbG9hdCBkdykgKGZsb2F0IGRoKVxuXG5sZXQgYmxpdF9mdWxsIChkc3QgOiByZW5kZXIpIChzcmMgOiByZW5kZXIpIHN4IHN5IHN3IHNoIGR4IGR5IGR3IGRoID1cbiAgICBkc3QgIyMgZHJhd0ltYWdlX2Z1bGxGcm9tQ2FudmFzIChzcmMgIyMuIGNhbnZhcylcbiAgICAoZmxvYXQgc3gpIChmbG9hdCBzeSkgKGZsb2F0IHN3KSAoZmxvYXQgc2gpXG4gICAgKGZsb2F0IGR4KSAoZmxvYXQgZHkpIChmbG9hdCBkdykgKGZsb2F0IGRoKVxuXG5sZXQgY29sb3IgciBnIGIgYSA9XG4gIFwicmdiYShcIiBeIHN0cmluZ19vZl9pbnQgciBeIFwiLCBcIiBeXG4gICAgICAgICAgICBzdHJpbmdfb2ZfaW50IGcgXiBcIiwgXCIgXlxuICAgICAgICAgICAgc3RyaW5nX29mX2ludCBiIF4gXCIsIFwiIF5cbiAgICAgICAgICAgIHN0cmluZ19vZl9mbG9hdCAoZmxvYXQgYSAvLiAyNTUuKSBeIFwiMClcIiAoKiB3b3JrIGFyb3VuZDpcbiAgICAgICAgICAgIE9jYW1sIGdlbmVyYXRlcyB0aGUgbGl0ZXJhbCBmb3Igc3RyaW5nX29mX2Zsb2F0ICgxLjApIFwiMS5cIixcbiAgICAgICAgICAgIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHJnYmEgc3ludGF4LiBJdCdzIGFsd2F5cyBzYWZlXG4gICAgICAgICAgICB0byBhZGQgYSB0cmFpbmxpbmcgMCBpbiB0aGlzIGNhc2UsIHNpbmNlIHRoZSBudW1iZXIgaXMgZWl0aGVyOlxuICAgICAgICAgICAgMC4g4oaSIDAuMFxuICAgICAgICAgICAgMS4gLT4gMS4wXG4gICAgICAgICAgICAwLjI0MjMgLT4gMC4yNDIzMFxuKilcbmxldCBjbGVhcl9yZWN0IChjdHggOiByZW5kZXIpIHggeSB3IGggPVxuICBjdHggIyMgY2xlYXJSZWN0IChmbG9hdCB4KSAoZmxvYXQgeSkgKGZsb2F0IHcpIChmbG9hdCBoKVxuXG5sZXQgZmlsbF9yZWN0IChjdHggOiByZW5kZXIpIHggeSB3IGggYyA9XG4gICgqIEZpcmVidWcuY29uc29sZSAjIyBsb2cgKEpzLnN0cmluZyBjKTsgKilcbiAgICBjdHggIyMuIGZpbGxTdHlsZSA6PSBKcy5zdHJpbmcgYztcbiAgICBjdHggIyMgZmlsbFJlY3QgKGZsb2F0IHgpIChmbG9hdCB5KSAoZmxvYXQgdykgKGZsb2F0IGgpXG5cbnR5cGUgaW1hZ2UgPSBEb21faHRtbC5pbWFnZUVsZW1lbnQgSnMudFxuXG5sZXQgbG9hZF9pbWFnZSBzcmMgPVxuICBsZXQgaW1nID0gRG9tX2h0bWwuY3JlYXRlSW1nIERvbV9odG1sLmRvY3VtZW50IGluXG4gIGltZyAjIy5zcmMgOj0gSnMuc3RyaW5nIHNyYztcbiAgaW1nXG5cbmxldCBpbWFnZV9yZWFkeSBpbWcgPVxuICBKcy50b19ib29sIGltZyAjIy5jb21wbGV0ZVxuXG5sZXQgZHJhd19pbWFnZSAoY3R4IDogcmVuZGVyKSBpbWcgeCB5ID1cbiAgY3R4ICMjIGRyYXdJbWFnZSBpbWcgKGZsb2F0IHgpIChmbG9hdCB5KVxuXG5sZXQgZHJhd19pbWFnZV9zY2FsZSAoY3R4IDogcmVuZGVyKSBpbWcgZHggZHkgZHcgZGggPVxuICBjdHggIyMgZHJhd0ltYWdlX3dpdGhTaXplIGltZyAgKGZsb2F0IGR4KSAoZmxvYXQgZHkpIChmbG9hdCBkdykgKGZsb2F0IGRoKVxuXG5sZXQgZHJhd19pbWFnZV9mdWxsIChjdHggOiByZW5kZXIpIGltZyBzeCBzeSBzdyBzaCBkeCBkeSBkdyBkaCA9XG4gIGN0eCAjIyBkcmF3SW1hZ2VfZnVsbCBpbWdcbiAgKGZsb2F0IHN4KSAoZmxvYXQgc3kpIChmbG9hdCBzdykgKGZsb2F0IHNoKVxuICAoZmxvYXQgZHgpIChmbG9hdCBkeSkgKGZsb2F0IGR3KSAoZmxvYXQgZGgpXG5cbmxldCBkcmF3X3RleHQgKGN0eCA6IHJlbmRlcikgdGV4dCB4IHkgZm9udCBjb2xvciA9XG4gIGN0eCAjIy4gZm9udCA6PSBKcy5zdHJpbmcgZm9udDtcbiAgY3R4ICMjLiBmaWxsU3R5bGUgOj0gSnMuc3RyaW5nIGNvbG9yO1xuICBjdHggIyMgZmlsbFRleHQgKEpzLnN0cmluZyB0ZXh0KSAoZmxvYXQgeCkgKGZsb2F0IHkpXG5cbmxldCBtZWFzdXJlX3RleHQgKGN0eCA6IHJlbmRlcikgdGV4dCBmb250ID1cbiAgY3R4ICMjLiBmb250IDo9IEpzLnN0cmluZyBmb250O1xuICBsZXQgbSA9IGN0eCAjIyBtZWFzdXJlVGV4dCAoSnMuc3RyaW5nIHRleHQpIGluXG4gIGludF9vZl9mbG9hdCAobSAjIy4gd2lkdGgpXG5cbmxldCBwb2xsX2V2ZW50ICgpID1cbiAgaWYgUXVldWUuaXNfZW1wdHkgZXZlbnRzIHRoZW4gR2Z4X2Jhc2UuTm9FdmVudFxuICBlbHNlIFF1ZXVlLnBvcCBldmVudHNcblxuXG5sZXQgbWFpbl9sb29wIGYgPVxuICBsZXQgY2IgPSByZWYgKEpzLndyYXBfY2FsbGJhY2sgKGZ1biBfIC0+ICgpKSkgaW5cbiAgbGV0IGxvb3AgZHQgPVxuICAgICAgaWYgZiBkdCB0aGVuXG4gICAgICAgIGlnbm9yZSAoRG9tX2h0bWwud2luZG93ICMjIHJlcXVlc3RBbmltYXRpb25GcmFtZSAoIWNiKSlcbiAgaW5cbiAgY2IgOj0gSnMud3JhcF9jYWxsYmFjayBsb29wO1xuICBpZ25vcmUoRG9tX2h0bWwud2luZG93ICMjIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhY2IpXG5cbmxldCBjb21taXQgXyA9ICgpXG5cbmxldCBkZWJ1ZyBtc2cgPVxuICBGaXJlYnVnLmNvbnNvbGUgIyMgbG9nIChKcy5zdHJpbmcgbXNnKSJdfQ==
