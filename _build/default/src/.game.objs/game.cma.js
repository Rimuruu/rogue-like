(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_mul=runtime.caml_mul,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call10(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {return f.length == 10
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9])}
    var
     global_data=runtime.caml_get_global_data(),
     zero=[254,0.,0.],
     cst_Game_Texture_MissingIdle=
      caml_string_of_jsbytes("Game__Texture.MissingIdle"),
     name=caml_string_of_jsbytes("position"),
     name$0=caml_string_of_jsbytes("teleport"),
     name$1=caml_string_of_jsbytes("priority"),
     name$2=caml_string_of_jsbytes("velocity"),
     name$3=caml_string_of_jsbytes("mass"),
     name$4=caml_string_of_jsbytes("box"),
     name$5=caml_string_of_jsbytes("texture"),
     name$6=caml_string_of_jsbytes("name"),
     name$7=caml_string_of_jsbytes("resolver"),
     name$8=caml_string_of_jsbytes("owner"),
     cst_canvas=caml_string_of_jsbytes("canvas"),
     cst_left_walk$0=caml_string_of_jsbytes("left_walk"),
     cst_right_walk$0=caml_string_of_jsbytes("right_walk"),
     cst_front_walk$1=caml_string_of_jsbytes("front_walk"),
     cst_back_walk$0=caml_string_of_jsbytes("back_walk"),
     cst_front_walk=caml_string_of_jsbytes("front_walk"),
     cst_right_walk=caml_string_of_jsbytes("right_walk"),
     cst_back_walk=caml_string_of_jsbytes("back_walk"),
     cst_left_walk=caml_string_of_jsbytes("left_walk"),
     cst_front_walk$0=caml_string_of_jsbytes("front_walk"),
     doorTop=[0,400,120],
     doorBottom=[0,400,600],
     doorLeft=[0,80,400],
     doorRight=[0,720,400],
     cst_move=caml_string_of_jsbytes("move"),
     cst_move$0=caml_string_of_jsbytes("move"),
     cst_bottom$0=caml_string_of_jsbytes("bottom"),
     cst_right$0=caml_string_of_jsbytes("right"),
     cst_top$0=caml_string_of_jsbytes("top"),
     cst_left$0=caml_string_of_jsbytes("left"),
     cst_player=caml_string_of_jsbytes("player"),
     cst_left=caml_string_of_jsbytes("left"),
     cst_top=caml_string_of_jsbytes("top"),
     cst_right=caml_string_of_jsbytes("right"),
     cst_bottom=caml_string_of_jsbytes("bottom"),
     cst_map=caml_string_of_jsbytes("map"),
     cst_ball_1=caml_string_of_jsbytes("ball_1"),
     cst_player$0=caml_string_of_jsbytes("player"),
     cst_src_img_charSheet_png=caml_string_of_jsbytes("src/img/charSheet.png"),
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib=global_data.Stdlib,
     Gfx=global_data.Gfx,
     Stdlib_array=global_data.Stdlib__array,
     Ecs_Component=global_data.Ecs__Component,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_float=global_data.Stdlib__float,
     Stdlib_option=global_data.Stdlib__option,
     Ecs_Entity=global_data.Ecs__Entity,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_random=global_data.Stdlib__random,
     Game=[0];
    caml_register_global(140,Game,"Game__");
    var
     _a_=
      [0,
       [12,40,[8,0,0,0,[11,caml_string_of_jsbytes(", "),[8,0,0,0,[12,41,0]]]]],
       caml_string_of_jsbytes("(%f, %f)")],
     _b_=
      [0,
       [4,
        3,
        0,
        0,
        [11,
         caml_string_of_jsbytes(" x*sw "),
         [4,3,0,0,[11,caml_string_of_jsbytes(" y*sh"),0]]]],
       caml_string_of_jsbytes("%i x*sw %i y*sh")],
     _c_=
      [0,
       [11,
        caml_string_of_jsbytes("[w:"),
        [4,0,0,0,[11,caml_string_of_jsbytes(",h:"),[4,0,0,0,[12,93,0]]]]],
       caml_string_of_jsbytes("[w:%d,h:%d]")],
     _d_=[0,0,0],
     _m_=[254,-200.,0.],
     _l_=[254,200.,0.],
     _k_=[254,0.,200.],
     _j_=[254,0.,-200.],
     _e_=[0,40,40],
     _f_=[0,0,3],
     _g_=[0,3,6],
     _h_=[0,6,9],
     _i_=[0,9,12],
     _n_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _o_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _p_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _q_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _r_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _s_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _t_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _u_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _v_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _w_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _x_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _y_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _z_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _A_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _G_=[0,40,40],
     _H_=[0,40,40],
     _I_=[0,0,3],
     _O_=
      [0,
       [11,caml_string_of_jsbytes("play "),[4,0,0,0,[12,32,[4,0,0,0,0]]]],
       caml_string_of_jsbytes("play %d %d")],
     _N_=[0,0,1],
     _M_=[0,0,-1],
     _J_=
      [0,
       [11,
        caml_string_of_jsbytes("index "),
        [4,
         0,
         0,
         0,
         [11,caml_string_of_jsbytes(" door "),[4,0,0,0,[12,32,[9,0,0]]]]]],
       caml_string_of_jsbytes("index %d door %d %b")],
     _L_=
      [0,
       [11,
        caml_string_of_jsbytes("index "),
        [4,
         0,
         0,
         0,
         [11,caml_string_of_jsbytes(" door  "),[4,0,0,0,[12,32,[9,0,0]]]]]],
       caml_string_of_jsbytes("index %d door  %d %b")],
     _K_=
      [0,
       [11,
        caml_string_of_jsbytes("index "),
        [4,
         0,
         0,
         0,
         [11,caml_string_of_jsbytes(" door  "),[4,0,0,0,[12,32,[9,0,0]]]]]],
       caml_string_of_jsbytes("index %d door  %d %b")],
     _Z_=
      [0,[11,caml_string_of_jsbytes(" end"),0],caml_string_of_jsbytes(" end")],
     _Y_=
      [0,
       [11,caml_string_of_jsbytes(" play"),0],
       caml_string_of_jsbytes(" play")],
     _P_=
      [0,
       [11,caml_string_of_jsbytes(" init"),0],
       caml_string_of_jsbytes(" init")],
     _Q_=[1,caml_string_of_jsbytes("z")],
     _R_=[1,caml_string_of_jsbytes("s")],
     _S_=[1,caml_string_of_jsbytes("q")],
     _T_=[1,caml_string_of_jsbytes("d")],
     _U_=[0,caml_string_of_jsbytes("z")],
     _V_=[0,caml_string_of_jsbytes("s")],
     _W_=[0,caml_string_of_jsbytes("q")],
     _X_=[0,caml_string_of_jsbytes("d")];
    function add(a,b){return [254,a[1] + b[1],a[2] + b[2]]}
    function sub(a,b){return [254,a[1] - b[1],a[2] - b[2]]}
    function mult(k,a){return [254,k * a[1],k * a[2]]}
    function dot(a,b){return a[1] * b[1] + a[2] * b[2]}
    function norm(a){return Math.sqrt(dot(a,a))}
    function normalize(a){return mult(1. / norm(a),a)}
    function pp(fmt,a)
     {return caml_call4(Stdlib_format[123],fmt,_a_,a[1],a[2])}
    function is_zero(v)
     {var _bU_=v[1] == 0.?1:0,_bV_=_bU_?v[2] == 0.?1:0:_bU_;return _bV_}
    var Game_Vector=[0,add,sub,mult,dot,norm,normalize,pp,zero,is_zero];
    caml_register_global(142,Game_Vector,"Game__Vector");
    var
     MissingIdle=
      [248,cst_Game_Texture_MissingIdle,runtime.caml_fresh_oo_id(0)],
     black=[0,caml_call4(Gfx[11],0,0,0,255)],
     red=[0,caml_call4(Gfx[11],255,0,0,255)],
     blue=[0,caml_call4(Gfx[11],0,0,255,255)],
     gray=[0,caml_call4(Gfx[11],128,128,128,255)];
    function create_img(img,l,h)
     {var r=caml_call2(Gfx[5],l,h);caml_call6(Gfx[17],r,img,0,0,l,h);return r}
    function create_tilemap(colors,tilemap,size)
     {return [3,[0,colors,tilemap,size]]}
    function create_animation(img,num_w,num_h,sw,sh,dw,dh)
     {function _bK_(i){return caml_call2(Gfx[5],dw,dh)}
      var
       array_frame=caml_call2(Stdlib_array[2],caml_mul(num_w,num_h),_bK_),
       _bM_=num_h - 1 | 0,
       _bL_=0;
      if(! (_bM_ < 0))
       {var y=_bL_;
        for(;;)
         {var _bO_=num_w - 1 | 0,_bN_=0;
          if(! (_bO_ < 0))
           {var x=_bN_;
            for(;;)
             {var
               _bQ_=
                caml_call3
                 (Stdlib_format[127],_b_,caml_mul(x,sw),caml_mul(y,sh));
              caml_call1(Gfx[24],_bQ_);
              var
               _bR_=caml_mul(y,num_w) + x | 0,
               _bS_=caml_check_bound(array_frame,_bR_)[1 + _bR_];
              caml_call10
               (Gfx[18],
                _bS_,
                img,
                caml_mul(x,sw),
                caml_mul(y,sh),
                sw,
                sh,
                0,
                0,
                dw,
                dh);
              var _bT_=x + 1 | 0;
              if(_bO_ !== x){var x=_bT_;continue}
              break}}
          var _bP_=y + 1 | 0;
          if(_bM_ !== y){var y=_bP_;continue}
          break}}
      return [2,
              [0,
               array_frame,
               caml_call2(Stdlib_hashtbl[1],0,32),
               [0,0,caml_mul(num_w,num_h)],
               0]]}
    function create_idle(idleName,param,anim)
     {var fin=param[2],deb=param[1];
      if(2 === anim[0])
       {var a=anim[1];
        return caml_call3(Stdlib_hashtbl[11],a[2],idleName,[0,deb,fin])}
      return 0}
    function draw_tilemap(tilemap,ctx,posX,posY)
     {var
       tile=[0,0],
       color=[0,caml_call4(Gfx[11],0,0,0,255)],
       size=tilemap[3],
       sizeX=tilemap[2].length - 1,
       sizeY=caml_check_bound(tilemap[2],0)[1].length - 1,
       _bE_=sizeX - 1 | 0,
       _bD_=0;
      if(! (_bE_ < 0))
       {var y=_bD_;
        for(;;)
         {var _bG_=sizeY - 1 | 0,_bF_=0;
          if(! (_bG_ < 0))
           {var x=_bF_;
            for(;;)
             {tile[1]
              =
              caml_check_bound(caml_check_bound(tilemap[2],y)[1 + y],x)[1 + x];
              var _bI_=tile[1];
              color[1] = caml_check_bound(tilemap[1],_bI_)[1 + _bI_];
              caml_call6
               (Gfx[12],
                ctx,
                caml_mul(x,size) + posX | 0,
                caml_mul(y,size) + posY | 0,
                size,
                size,
                color[1]);
              var _bJ_=x + 1 | 0;
              if(_bG_ !== x){var x=_bJ_;continue}
              break}}
          var _bH_=y + 1 | 0;
          if(_bE_ !== y){var y=_bH_;continue}
          break}}
      return 0}
    function get_idle(idleName,anim)
     {try
       {var _bB_=caml_call2(Stdlib_hashtbl[6],anim[2],idleName);return _bB_}
      catch(_bC_)
       {_bC_ = caml_wrap_exception(_bC_);
        if(_bC_ === Stdlib[8])throw [0,MissingIdle,idleName];
        throw _bC_}}
    function play_idle(anim,idleName)
     {if(2 === anim[0])
       {var a=anim[1],match=get_idle(idleName,a),fin=match[2],deb=match[1];
        a[4] = deb;
        a[3] = [0,deb,fin];
        return 0}
      return 0}
    function get_frame(anim,dir)
     {var _bA_=anim[4],currentCase=caml_check_bound(anim[1],_bA_)[1 + _bA_];
      return currentCase}
    var
     Game_Texture=
      [0,
       MissingIdle,
       black,
       red,
       blue,
       gray,
       create_img,
       create_tilemap,
       create_animation,
       create_idle,
       draw_tilemap,
       get_idle,
       play_idle,
       get_frame];
    caml_register_global(147,Game_Texture,"Game__Texture");
    function top_left(v,b){return v}
    function top_right(v,b){return [254,v[1] + b[1],v[2]]}
    function bottom_left(v,b){return [254,v[1],v[2] + b[2]]}
    function bottom_right(v,b){return [254,v[1] + b[1],v[2] + b[2]]}
    function center(v,b){return [254,v[1] + 0.5 * b[1],v[2] + 0.5 * b[2]]}
    function mdiff(v1,b1,v2,b2)
     {var
       x=v1[1] - v2[1] - b2[1],
       y=v1[2] - v2[2] - b2[2],
       h=b1[2] + b2[2] | 0,
       w=b1[1] + b2[1] | 0;
      return [0,[254,x,y],[0,w,h]]}
    function has_origin(v,b)
     {var _bw_=v[1] < 0.?1:0;
      if(_bw_)
       {var _bx_=0. < v[1] + b[1]?1:0;
        if(_bx_)
         var _by_=v[2] < 0.?1:0,_bz_=_by_?0. < v[2] + b[2]?1:0:_by_;
        else
         var _bz_=_bx_}
      else
       var _bz_=_bw_;
      return _bz_}
    function intersect(v1,b1,v2,b3)
     {var match=mdiff(v1,b1,v2,b3),b=match[2],v=match[1];
      return has_origin(v,b)}
    function pp$0(fmt,b)
     {return caml_call4(Stdlib_format[123],fmt,_c_,b[1],b[2])}
    var
     Game_Rect=
      [0,
       top_left,
       top_right,
       bottom_left,
       bottom_right,
       center,
       mdiff,
       has_origin,
       intersect,
       pp$0];
    caml_register_global(148,Game_Rect,"Game__Rect");
    var
     Position=caml_call1(Ecs_Component[1],[0,name]),
     Teleport=caml_call1(Ecs_Component[1],[0,name$0]),
     Priority=caml_call1(Ecs_Component[1],[0,name$1]),
     Velocity=caml_call1(Ecs_Component[1],[0,name$2]),
     Mass=caml_call1(Ecs_Component[1],[0,name$3]),
     Box=caml_call1(Ecs_Component[1],[0,name$4]),
     Surface=caml_call1(Ecs_Component[1],[0,name$5]),
     Name=caml_call1(Ecs_Component[1],[0,name$6]),
     CollisionResolver=caml_call1(Ecs_Component[1],[0,name$7]),
     Owner=caml_call1(Ecs_Component[1],[0,name$8]),
     Game_Component_defs=
      [0,
       Position,
       Teleport,
       Priority,
       Velocity,
       Mass,
       Box,
       Surface,
       Name,
       CollisionResolver,
       Owner];
    caml_register_global(150,Game_Component_defs,"Game__Component_defs");
    function init(param){return 0}
    function update(dt,el)
     {function _bh_(i,e1)
       {function _bi_(j,e2)
         {var _bj_=i < j?1:0;
          if(_bj_)
           {var
             pos1=caml_call1(Position[2],e1),
             box1=caml_call1(Box[2],e1),
             pos2=caml_call1(Position[2],e2),
             box2=caml_call1(Box[2],e2),
             v1=caml_call1(Velocity[2],e1),
             v2=caml_call1(Velocity[2],e2),
             match=mdiff(pos2,box2,pos1,box1),
             s_rect=match[2],
             s_pos=match[1],
             _bk_=has_origin(s_pos,s_rect);
            if(_bk_)
             var _bl_=is_zero(v1),_bm_=_bl_?is_zero(v2):_bl_,_bn_=1 - _bm_;
            else
             var _bn_=_bk_;
            if(_bn_)
             {var
               a=[254,s_pos[1],0.],
               b=[254,s_rect[1] + s_pos[1],0.],
               c=[254,0.,s_pos[2]],
               d=[254,0.,s_rect[2] + s_pos[2]],
               _bo_=[0,b,[0,c,[0,d,0]]],
               _bp_=
                function(min_v,v)
                 {var _bv_=norm(min_v);return norm(v) < _bv_?v:min_v},
               n=caml_call3(Stdlib_list[21],_bp_,a,_bo_),
               n_v1=norm(v1),
               n_v2=norm(v2),
               s=n_v1 + n_v2,
               n1=n_v1 / s,
               n2=n_v2 / s,
               delta_pos1=mult(n1,n),
               delta_pos2=mult(- n2,n),
               _bq_=add(pos1,delta_pos1);
              caml_call2(Position[1],e1,_bq_);
              var _br_=add(pos2,delta_pos2);
              caml_call2(Position[1],e2,_br_);
              var
               n$0=normalize(n),
               v=sub(v1,v2),
               m1=caml_call1(Mass[2],e1),
               m2=caml_call1(Mass[2],e2),
               switch$0=0;
              if
               (caml_call1(Stdlib_float[14],m1)
                &&
                caml_call1(Stdlib_float[14],m2))
               if(n_v1 == 0.)
                var m1$0=m1,m2$0=1.;
               else
                if(n_v2 == 0.)var m1$0=1.,m2$0=m2;else var m1$0=0.,m2$0=0.;
              else
               switch$0 = 1;
              if(switch$0)var m1$0=m1,m2$0=m2;
              var
               j$0=-2. * dot(v,n$0) / (1. / m1$0 + 1. / m2$0),
               new_v1=add(v1,mult(j$0 / m1$0,n$0)),
               new_v2=sub(v2,mult(j$0 / m2$0,n$0));
              caml_call2(Velocity[1],e1,new_v1);
              caml_call2(Velocity[1],e2,new_v2);
              if(caml_call1(CollisionResolver[4],e1))
               caml_call2(caml_call1(CollisionResolver[2],e1),e1,e2);
              var _bs_=caml_call1(CollisionResolver[4],e2);
              if(_bs_)
               return caml_call2(caml_call1(CollisionResolver[2],e2),e2,e1);
              var _bt_=_bs_}
            else
             var _bt_=_bn_;
            var _bu_=_bt_}
          else
           var _bu_=_bj_;
          return _bu_}
        return caml_call2(Stdlib_list[16],_bi_,el)}
      return caml_call2(Stdlib_list[16],_bh_,el)}
    var Game_Collision_system=[0,init,update];
    caml_register_global(153,Game_Collision_system,"Game__Collision_system");
    var commands=caml_call2(Stdlib_hashtbl[1],0,17);
    function register_command(ev,f)
     {var _bg_=0 !== ev?1:0;
      return _bg_?caml_call3(Stdlib_hashtbl[5],commands,ev,f):_bg_}
    function get_commands(ev)
     {return caml_call2(Stdlib_hashtbl[8],commands,ev)}
    var Game_Input_handler=[0,register_command,get_commands];
    caml_register_global(154,Game_Input_handler,"Game__Input_handler");
    function init$0(param){return 0}
    function update$0(dt,el)
     {for(;;)
       {var ev=caml_call1(Gfx[21],0);
        if(typeof ev === "number")return 0;
        var _be_=get_commands(ev),_bf_=function(f){return caml_call1(f,0)};
        caml_call2(Stdlib_list[15],_bf_,_be_);
        continue}}
    var Game_Control_system=[0,init$0,update$0];
    caml_register_global(155,Game_Control_system,"Game__Control_system");
    var ctx=[0,0];
    function init$1(param)
     {var match=caml_call1(Gfx[4],cst_canvas),c=match[2];
      ctx[1] = [0,c];
      return 0}
    function update$1(dt,el)
     {var ctx$0=caml_call1(Stdlib_option[4],ctx[1]);
      caml_call5(Gfx[13],ctx$0,0,0,800,640);
      function _a7_(a,b)
       {var aP=caml_call1(Priority[2],a),bP=caml_call1(Priority[2],b);
        return aP - bP | 0}
      var list_sort=caml_call2(Stdlib_list[49],_a7_,el);
      function _a8_(e)
       {var pos=caml_call1(Position[2],e);
        try {var _bc_=caml_call1(Box[2],e),box=_bc_}catch(_bd_){var box=_d_}
        var color=caml_call1(Surface[2],e);
        switch(color[0])
         {case 0:
           var color1=color[1];
           return caml_call6
                   (Gfx[12],ctx$0,pos[1] | 0,pos[2] | 0,box[1],box[2],color1);
          case 1:
           var image=color[1];
           return caml_call6
                   (Gfx[9],ctx$0,image,pos[1] | 0,pos[2] | 0,box[1],box[2]);
          case 2:
           var
            anim=color[1],
            speed=caml_call1(Velocity[2],e),
            _a9_=box[2],
            _a__=box[1],
            _a$_=pos[2] | 0,
            _ba_=pos[1] | 0,
            _bb_=get_frame(anim,speed[1] | 0);
           return caml_call6(Gfx[9],ctx$0,_bb_,_ba_,_a$_,_a__,_a9_);
          default:
           var tilemap=color[1];
           return draw_tilemap(tilemap,ctx$0,pos[1] | 0,pos[2] | 0)}}
      return caml_call2(Stdlib_list[15],_a8_,list_sort)}
    var Game_Draw_system=[0,ctx,init$1,update$1];
    caml_register_global(157,Game_Draw_system,"Game__Draw_system");
    function init$2(param){return 0}
    var time=[0,0.];
    function update$2(dt,el)
     {var
       delta_t=
        caml_call2(Stdlib[16],0.0166666666666666664,1000. * (dt - time[1]));
      time[1] = dt;
      function _a6_(e)
       {var
         pos=caml_call1(Position[2],e),
         speed=mult(delta_t,caml_call1(Velocity[2],e));
        return caml_call2
                (Position[1],e,[254,pos[1] + speed[1],pos[2] + speed[2]])}
      return caml_call2(Stdlib_list[15],_a6_,el)}
    var Game_Move_system=[0,init$2,time,update$2];
    caml_register_global(158,Game_Move_system,"Game__Move_system");
    function Make(T)
     {var elem_list=[0,0],elem_table=caml_call1(Ecs_Entity[7][1],16);
      function register(e)
       {var
         _a4_=1 - caml_call2(Ecs_Entity[7][11],elem_table,e),
         _a5_=
          _a4_
           ?(caml_call3(Ecs_Entity[7][5],elem_table,e,0),
             elem_list[1]
             =
             [0,e,elem_list[1]],
             0)
           :_a4_;
        return _a5_}
      function unregister(e)
       {caml_call2(Ecs_Entity[7][6],elem_table,e);
        var _a2_=elem_list[1];
        function _a3_(x){return runtime.caml_notequal(x,e)}
        elem_list[1] = caml_call2(Stdlib_list[36],_a3_,_a2_);
        return 0}
      function init(param){return caml_call1(T[1],0)}
      function update(dt){return caml_call2(T[2],dt,elem_list[1])}
      return [0,init,update,register,unregister]}
    var systems=[0,0];
    function register(m){systems[1] = [0,m,systems[1]];return 0}
    function init_all(param)
     {var _a0_=systems[1];
      function _a1_(m){return caml_call1(m[1],0)}
      return caml_call2(Stdlib_list[15],_a1_,_a0_)}
    function update_all(dt)
     {var _aY_=systems[1];
      function _aZ_(m){return caml_call1(m[2],dt)}
      return caml_call2(Stdlib_list[15],_aZ_,_aY_)}
    var Game_System=[0,Make,systems,register,init_all,update_all];
    caml_register_global(160,Game_System,"Game__System");
    var
     Control_S=Make(Game_Control_system),
     Draw_S=Make([0,init$1,update$1]),
     Move_S=Make([0,init$2,update$2]),
     Collision_S=Make(Game_Collision_system);
    register(Draw_S);
    register(Move_S);
    register(Control_S);
    register(Collision_S);
    var Game_System_defs=[0,Control_S,Draw_S,Move_S,Collision_S];
    caml_register_global(161,Game_System_defs,"Game__System_defs");
    function create(name,x,y,img)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_e_);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk,_f_,anim);
      create_idle(cst_right_walk,_g_,anim);
      create_idle(cst_back_walk,_h_,anim);
      create_idle(cst_left_walk,_i_,anim);
      play_idle(anim,cst_front_walk$0);
      caml_call2(Priority[1],e,2);
      caml_call1(Collision_S[3],e);
      caml_call1(Control_S[3],e);
      caml_call1(Draw_S[3],e);
      caml_call1(Move_S[3],e);
      return e}
    function reset(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function move_up(e)
     {var anim=caml_call1(Surface[2],e);
      play_idle(anim,cst_back_walk$0);
      return caml_call2(Velocity[1],e,_j_)}
    function move_down(e)
     {var anim=caml_call1(Surface[2],e);
      play_idle(anim,cst_front_walk$1);
      return caml_call2(Velocity[1],e,_k_)}
    function move_right(e)
     {var anim=caml_call1(Surface[2],e);
      play_idle(anim,cst_right_walk$0);
      return caml_call2(Velocity[1],e,_l_)}
    function move_left(e)
     {var anim=caml_call1(Surface[2],e);
      play_idle(anim,cst_left_walk$0);
      return caml_call2(Velocity[1],e,_m_)}
    function stop(e){return caml_call2(Velocity[1],e,zero)}
    var
     Game_Player=
      [0,create,reset,move_up,move_down,move_right,move_left,stop];
    caml_register_global(162,Game_Player,"Game__Player");
    function create$0(name,x,y,palette,map,size)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      var _aX_=create_tilemap(palette,map,size);
      caml_call2(Surface[1],e,_aX_);
      caml_call2(Priority[1],e,0);
      return e}
    var Game_Map=[0,create$0];
    caml_register_global(163,Game_Map,"Game__Map");
    var
     map=
      [0,
       _A_.slice(),
       _z_.slice(),
       _y_.slice(),
       _x_.slice(),
       _w_.slice(),
       _v_.slice(),
       _u_.slice(),
       _t_.slice(),
       _s_.slice(),
       _r_.slice(),
       _q_.slice(),
       _p_.slice(),
       _o_.slice(),
       _n_.slice()],
     _B_=caml_call4(Gfx[11],255,0,0,255),
     _C_=caml_call4(Gfx[11],0,255,0,255),
     _D_=caml_call4(Gfx[11],0,0,255,255),
     _E_=caml_call4(Gfx[11],61,61,61,255),
     _F_=caml_call4(Gfx[11],130,130,130,255),
     palette=[0,caml_call4(Gfx[11],0,0,0,255),_F_,_E_,_D_,_C_,_B_],
     Game_Global=[0,map,palette,doorTop,doorBottom,doorLeft,doorRight];
    caml_register_global(164,Game_Global,"Game__Global");
    function create$1(name,x,y,xt,yt)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Teleport[1],e,[254,xt,yt]);
      caml_call2(Box[1],e,_G_);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,black);
      caml_call2(Priority[1],e,1);
      caml_call1(Draw_S[3],e);
      caml_call1(Collision_S[3],e);
      return e}
    var Game_Door=[0,create$1];
    caml_register_global(165,Game_Door,"Game__Door");
    function create$2(name,posX,posY,velX,velY,img)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,[254,velX,velY]);
      caml_call2(Mass[1],e,10.);
      caml_call2(Box[1],e,_H_);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_move,_I_,anim);
      play_idle(anim,cst_move$0);
      caml_call2(Priority[1],e,2);
      return e}
    function reset$0(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop$0(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Enemy=[0,create$2,reset$0,stop$0];
    caml_register_global(166,Game_Enemy,"Game__Enemy");
    var
     state=
      [0,
       [0,
        Ecs_Entity[6],
        1,
        [0,-1,Ecs_Entity[6],0,[0],[0]],
        [0],
        [0,Ecs_Entity[6],Ecs_Entity[6],Ecs_Entity[6],Ecs_Entity[6]]]];
    function get_player(param){return state[1][1]}
    function get_status(param){return state[1][2]}
    function door_f(n)
     {if(3 < n >>> 0)return -1;
      switch(n)
       {case 0:return 2;case 1:return 3;case 2:return 0;default:return 1}}
    function generate_map(d,p,n,player_img)
     {function _aw_(e)
       {var
         entity=create$0(cst_map,0.,80.,p,d,40),
         e1=create$2(cst_ball_1,200.,240.,0.,100.,player_img),
         ennemies=[0,e1,0];
        function _aW_(e){return _M_}
        return [0,e,entity,ennemies,d,caml_call2(Stdlib_array[2],4,_aW_)]}
      var m=caml_call2(Stdlib_list[10],n,_aw_);
      function path_aux(map,room)
       {caml_call1(Stdlib_random[3],0);
        var list=[0,0],_ay_=room[5].length - 1 - 1 | 0,_ax_=0;
        if(! (_ay_ < 0))
         {var i=_ax_;
          for(;;)
           {var door$0=caml_check_bound(room[5],i)[1 + i];
            if(0 === door$0[1])list[1] = [0,i,list[1]];
            var _aB_=i + 1 | 0;
            if(_ay_ !== i){var i=_aB_;continue}
            break}}
        var
         _az_=caml_call1(Stdlib_list[1],list[1]),
         _aA_=caml_call1(Stdlib_random[5],_az_),
         door=caml_call2(Stdlib_list[7],list[1],_aA_);
        if(map)
         {var _aC_=map[2],_aD_=map[1];
          if(_aC_)
           {var _aE_=[0,1,_aD_[1]];
            caml_check_bound(room[5],door)[1 + door] = _aE_;
            var _aF_=[0,1,room[1]],_aG_=door_f(door);
            caml_check_bound(_aD_[5],_aG_)[1 + _aG_] = _aF_;
            var _aI_=room[5].length - 1 - 1 | 0,_aH_=0;
            if(! (_aI_ < 0))
             {var i$0=_aH_;
              for(;;)
               {var
                 match=caml_check_bound(room[5],i$0)[1 + i$0],
                 ind=match[2],
                 b=match[1],
                 _aJ_=caml_call4(Stdlib_format[127],_J_,room[1],ind,b);
                caml_call1(Gfx[24],_aJ_);
                var _aK_=i$0 + 1 | 0;
                if(_aI_ !== i$0){var i$0=_aK_;continue}
                break}}
            return [0,room,path_aux(_aC_,_aD_)]}
          var _aL_=[0,1,_aD_[1]];
          caml_check_bound(room[5],door)[1 + door] = _aL_;
          var _aM_=[0,1,room[1]],_aN_=door_f(door);
          caml_check_bound(_aD_[5],_aN_)[1 + _aN_] = _aM_;
          var _aP_=room[5].length - 1 - 1 | 0,_aO_=0;
          if(! (_aP_ < 0))
           {var i$2=_aO_;
            for(;;)
             {var
               match$1=caml_check_bound(room[5],i$2)[1 + i$2],
               ind$1=match$1[2],
               b$1=match$1[1],
               _aU_=caml_call4(Stdlib_format[127],_L_,room[1],ind$1,b$1);
              caml_call1(Gfx[24],_aU_);
              var _aV_=i$2 + 1 | 0;
              if(_aP_ !== i$2){var i$2=_aV_;continue}
              break}}
          var _aR_=_aD_[5].length - 1 - 1 | 0,_aQ_=0;
          if(! (_aR_ < 0))
           {var i$1=_aQ_;
            for(;;)
             {var
               match$0=caml_check_bound(_aD_[5],i$1)[1 + i$1],
               ind$0=match$0[2],
               b$0=match$0[1],
               _aS_=caml_call4(Stdlib_format[127],_K_,_aD_[1],ind$0,b$0);
              caml_call1(Gfx[24],_aS_);
              var _aT_=i$1 + 1 | 0;
              if(_aR_ !== i$1){var i$1=_aT_;continue}
              break}}
          return [0,room,[0,_aD_,0]]}
        return 0}
      var
       _au_=caml_call1(Stdlib_list[5],m),
       _av_=path_aux(caml_call1(Stdlib_list[6],m),_au_);
      return caml_call1(Stdlib_array[12],_av_)}
    function change_door(param)
     {var d=state[1][3][5],d_e=state[1][5],i=0;
      for(;;)
       {if(caml_check_bound(d,i)[1 + i][1])
         {var e=caml_check_bound(d_e,i)[1 + i];
          caml_call1(Draw_S[3],e);
          caml_call1(Collision_S[3],e)}
        else
         {var e$0=caml_check_bound(d_e,i)[1 + i];
          caml_call1(Draw_S[4],e$0);
          caml_call1(Collision_S[4],e$0)}
        var _at_=i + 1 | 0;
        if(3 !== i){var i=_at_;continue}
        return 0}}
    function load_ennemie(e)
     {caml_call1(Collision_S[3],e);
      caml_call1(Control_S[3],e);
      caml_call1(Draw_S[3],e);
      return caml_call1(Move_S[3],e)}
    function collision(door,e)
     {var
       name$0=caml_call1(Name[2],e),
       _ar_=0 === caml_call2(Stdlib_string[33],name$0,cst_player)?1:0;
      if(_ar_)
       {var
         name=caml_call1(Name[2],door),
         _ak_=
          0 === caml_call2(Stdlib_string[33],name,cst_left)
           ?caml_check_bound(state[1][3][5],0)[1]
           :0 === caml_call2(Stdlib_string[33],name,cst_top)
             ?caml_check_bound(state[1][3][5],1)[2]
             :0 === caml_call2(Stdlib_string[33],name,cst_right)
               ?caml_check_bound(state[1][3][5],2)[3]
               :0 === caml_call2(Stdlib_string[33],name,cst_bottom)
                 ?caml_check_bound(state[1][3][5],3)[4]
                 :_N_,
         r=_ak_[2],
         room=caml_check_bound(state[1][4],r)[1 + r],
         old_room=state[1][3],
         _al_=caml_call3(Stdlib_format[127],_O_,r,state[1][4].length - 1);
        caml_call1(Gfx[24],_al_);
        var _am_=state[1];
        state[1] = [0,_am_[1],_am_[2],room,_am_[4],_am_[5]];
        var
         _an_=old_room[3],
         _ao_=
          function(e)
           {caml_call1(Collision_S[4],e);
            caml_call1(Control_S[4],e);
            caml_call1(Draw_S[4],e);
            return caml_call1(Move_S[4],e)};
        caml_call2(Stdlib_list[15],_ao_,_an_);
        var _ap_=room[3],_aq_=function(e){return load_ennemie(e)};
        caml_call2(Stdlib_list[15],_aq_,_ap_);
        change_door(0);
        var _as_=caml_call1(Teleport[2],door);
        caml_call2(Position[1],e,_as_);
        return caml_call2(Velocity[1],e,zero)}
      return _ar_}
    function init$3(pe1,map)
     {var
       _ac_=create$1(cst_bottom$0,400.,560.,400.,180.),
       _ad_=create$1(cst_right$0,720.,320.,100.,320.),
       _ae_=create$1(cst_top$0,400.,120.,400.,500.),
       doorsInit=[0,create$1(cst_left$0,40.,320.,660.,320.),_ae_,_ad_,_ac_];
      function _af_(e){return caml_call2(CollisionResolver[1],e,collision)}
      caml_call2(Stdlib_array[13],_af_,doorsInit);
      var _ag_=state[1],_ah_=caml_check_bound(map,0)[1];
      state[1] = [0,pe1,_ag_[2],_ah_,map,doorsInit];
      caml_call1(Draw_S[3],state[1][3][2]);
      var _ai_=state[1][3][3];
      function _aj_(e){return load_ennemie(e)}
      caml_call2(Stdlib_list[15],_aj_,_ai_);
      return change_door(0)}
    var Game_Game_state=[0,init$3,get_player,get_status,door_f,generate_map];
    caml_register_global(169,Game_Game_state,"Game__Game_state");
    var player_img=caml_call1(Gfx[14],cst_src_img_charSheet_png);
    function init_game(dt)
     {init_all(0);
      var _ab_=caml_call1(Stdlib_format[127],_P_);
      caml_call1(Gfx[24],_ab_);
      var player=create(cst_player$0,80.,240.,player_img);
      register_command(_Q_,function(param){return move_up(player)});
      register_command(_R_,function(param){return move_down(player)});
      register_command(_S_,function(param){return move_left(player)});
      register_command(_T_,function(param){return move_right(player)});
      register_command(_U_,function(param){return stop(player)});
      register_command(_V_,function(param){return stop(player)});
      register_command(_W_,function(param){return stop(player)});
      register_command(_X_,function(param){return stop(player)});
      var map$0=generate_map(map,palette,5,player_img);
      init$3(player,map$0);
      return 0}
    function play_game(dt)
     {var _aa_=caml_call1(Stdlib_format[127],_Y_);
      caml_call1(Gfx[24],_aa_);
      update_all(dt);
      return get_status(0)?1:0}
    function end_game(dt)
     {var _$_=caml_call1(Stdlib_format[127],_Z_);
      caml_call1(Gfx[24],_$_);
      return 0}
    function load_graphics(dt){return caml_call1(Gfx[15],player_img)?0:1}
    function chain_functions(f_list)
     {var funs=[0,f_list];
      return function(dt)
       {var ___=funs[1];
        if(___)
         {var ll=___[2],f=___[1];return caml_call1(f,dt)?1:(funs[1] = ll,1)}
        return 0}}
    function run(param)
     {var
       m=
        chain_functions
         ([0,load_graphics,[0,init_game,[0,play_game,[0,end_game,0]]]]);
      return caml_call1(Gfx[22],m)}
    var
     Game$0=
      [0,
       player_img,
       init_game,
       play_game,
       end_game,
       load_graphics,
       chain_functions,
       run];
    caml_register_global(170,Game$0,"Game");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2FtZS5vYmpzL2dhbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInplcm8iLCJuYW1lIiwibmFtZSQwIiwibmFtZSQxIiwibmFtZSQyIiwibmFtZSQzIiwibmFtZSQ0IiwibmFtZSQ1IiwibmFtZSQ2IiwibmFtZSQ3IiwibmFtZSQ4IiwiZG9vclRvcCIsImRvb3JCb3R0b20iLCJkb29yTGVmdCIsImRvb3JSaWdodCIsImFkZCIsImEiLCJiIiwic3ViIiwibXVsdCIsImsiLCJkb3QiLCJub3JtIiwibm9ybWFsaXplIiwicHAiLCJmbXQiLCJpc196ZXJvIiwidiIsImJsYWNrIiwicmVkIiwiYmx1ZSIsImdyYXkiLCJjcmVhdGVfaW1nIiwiaW1nIiwibCIsImgiLCJyIiwiY3JlYXRlX3RpbGVtYXAiLCJjb2xvcnMiLCJ0aWxlbWFwIiwic2l6ZSIsImNyZWF0ZV9hbmltYXRpb24iLCJudW1fdyIsIm51bV9oIiwic3ciLCJzaCIsImR3IiwiZGgiLCJpIiwiYXJyYXlfZnJhbWUiLCJ5IiwieCIsImNyZWF0ZV9pZGxlIiwiaWRsZU5hbWUiLCJhbmltIiwiZmluIiwiZGViIiwiZHJhd190aWxlbWFwIiwiY3R4IiwicG9zWCIsInBvc1kiLCJ0aWxlIiwiY29sb3IiLCJzaXplWCIsInNpemVZIiwiZ2V0X2lkbGUiLCJwbGF5X2lkbGUiLCJnZXRfZnJhbWUiLCJkaXIiLCJjdXJyZW50Q2FzZSIsInRvcF9sZWZ0IiwidG9wX3JpZ2h0IiwiYm90dG9tX2xlZnQiLCJib3R0b21fcmlnaHQiLCJjZW50ZXIiLCJtZGlmZiIsInYxIiwiYjEiLCJ2MiIsImIyIiwidyIsImhhc19vcmlnaW4iLCJpbnRlcnNlY3QiLCJiMyIsInBwJDAiLCJpbml0IiwidXBkYXRlIiwiZHQiLCJlbCIsImUxIiwiaiIsImUyIiwicG9zMSIsImJveDEiLCJwb3MyIiwiYm94MiIsInNfcmVjdCIsInNfcG9zIiwiYyIsImQiLCJtaW5fdiIsIm4iLCJuX3YxIiwibl92MiIsInMiLCJuMSIsIm4yIiwiZGVsdGFfcG9zMSIsImRlbHRhX3BvczIiLCJuJDAiLCJtMSIsIm0yIiwibTEkMCIsIm0yJDAiLCJqJDAiLCJuZXdfdjEiLCJuZXdfdjIiLCJjb21tYW5kcyIsInJlZ2lzdGVyX2NvbW1hbmQiLCJldiIsImYiLCJnZXRfY29tbWFuZHMiLCJpbml0JDAiLCJ1cGRhdGUkMCIsImluaXQkMSIsInVwZGF0ZSQxIiwiY3R4JDAiLCJhUCIsImJQIiwibGlzdF9zb3J0IiwiZSIsInBvcyIsImJveCIsImNvbG9yMSIsImltYWdlIiwic3BlZWQiLCJpbml0JDIiLCJ0aW1lIiwidXBkYXRlJDIiLCJkZWx0YV90IiwiZWxlbV9saXN0IiwiZWxlbV90YWJsZSIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsInN5c3RlbXMiLCJtIiwiaW5pdF9hbGwiLCJ1cGRhdGVfYWxsIiwiY3JlYXRlIiwicmVzZXQiLCJtb3ZlX3VwIiwibW92ZV9kb3duIiwibW92ZV9yaWdodCIsIm1vdmVfbGVmdCIsInN0b3AiLCJjcmVhdGUkMCIsInBhbGV0dGUiLCJtYXAiLCJjcmVhdGUkMSIsInh0IiwieXQiLCJjcmVhdGUkMiIsInZlbFgiLCJ2ZWxZIiwicmVzZXQkMCIsInN0b3AkMCIsInN0YXRlIiwiZ2V0X3BsYXllciIsImdldF9zdGF0dXMiLCJkb29yX2YiLCJnZW5lcmF0ZV9tYXAiLCJwIiwicGxheWVyX2ltZyIsImVudGl0eSIsImVubmVtaWVzIiwicGF0aF9hdXgiLCJyb29tIiwibGlzdCIsImRvb3IkMCIsImRvb3IiLCJpJDAiLCJpbmQiLCJpJDIiLCJpbmQkMSIsImIkMSIsImkkMSIsImluZCQwIiwiYiQwIiwiY2hhbmdlX2Rvb3IiLCJkX2UiLCJlJDAiLCJsb2FkX2VubmVtaWUiLCJjb2xsaXNpb24iLCJvbGRfcm9vbSIsImluaXQkMyIsInBlMSIsImRvb3JzSW5pdCIsImluaXRfZ2FtZSIsInBsYXllciIsIm1hcCQwIiwicGxheV9nYW1lIiwiZW5kX2dhbWUiLCJsb2FkX2dyYXBoaWNzIiwiY2hhaW5fZnVuY3Rpb25zIiwiZl9saXN0IiwiZnVucyIsImxsIiwicnVuIl0sInNvdXJjZXMiOlsiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2NvbXBvbmVudC92ZWN0b3IubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvY29tcG9uZW50L2NvbXBvbmVudF9kZWZzLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dsb2JhbC5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnQvdGV4dHVyZS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnQvcmVjdC5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9zeXN0ZW0vY29sbGlzaW9uX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9pby9pbnB1dF9oYW5kbGVyLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9jb250cm9sX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9zeXN0ZW0vZHJhd19zeXN0ZW0ubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvc3lzdGVtL21vdmVfc3lzdGVtLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9zeXN0ZW0ubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvc3lzdGVtL3N5c3RlbV9kZWZzLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvcGxheWVyLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvbWFwLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZG9vci5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL2VuZW15Lm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZ2FtZV9zdGF0ZS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV0lBOzs7S0NWdURDO0tBQ0FDO0tBQ0RDO0tBQ0NDO0tBQ0hDO0tBQ0pDO0tBQ1FDO0tBQ0pDO0tBQ21DQztLQUNoQ0M7Ozs7Ozs7Ozs7O0tDaUJ2REM7S0FDQUM7S0FDQUM7S0FDQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthRjdCQUMsSUFBSUMsRUFBRUMsR0FBSSxZQUFORCxPQUFFQyxLQUFGRCxPQUFFQyxLQUFzQzthQUM1Q0MsSUFBSUYsRUFBRUMsR0FBSSxZQUFORCxPQUFFQyxLQUFGRCxPQUFFQyxLQUFzQzthQUU1Q0UsS0FBS0MsRUFBRUosR0FBSSxZQUFOSSxJQUFFSixLQUFGSSxJQUFFSixLQUFnQzthQUV2Q0ss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LGlCQUpwREEsT0FJMkU7TUFDL0UscUNBQXdELGtCQUxwREEsT0FLNEU7TUFDaEYscUNBQXNELFlBTmxEQSxPQU1vRTtNQUN4RSxxQ0FBc0QsWUFQbERBLE9BT29FO01BQ3hFLHFDQUFzRCxZQVJsREEsT0FRb0U7TUFDeEUscUNBQXNELFlBVGxEQSxPQVNvRTtNQVg5RCxJQVlOQyxNQUFNLGFmbEJSMUMsSUFpQkFELFVlZkFnQjtNQWtCRixPQVpJMEIsT0FVQUM7TUFFSixRQUNLO0lBbkJVLFNBcUJiQyxVQUFVakg7TUFFRjtNQUFWO01BQ0EsV0FIWUE7TUFJTCx3QkFDRTtJQTFCTSxTQTRCYmtILFNBQVNsSDtNQUNIO01BQVY7Y0FDTTtJQTlCVyxTQWdDYm1ILGNBQWNuSCxJQUNiLDBCQWpDRHFGLGVBa0NPO0lBbENNLFNBb0NiK0IsZ0JBQWdCQztNQUNsQixJQUFJQyxRQURjRDtNQUNsQixnQkFDSXJIO1FBQU0sUUFETnNIO1FBQ007Y0FFT0MsVUFBTHRGLFNBQ0csa0JBREhBLEVBRlJqQyxPQURBc0gsVUFHYUM7UUFERCxRQU9EO0lBOUNBLFNBZ0RiQztNQUNNO09BQUo5RDtRQUFJO2FBakJOeUQsaUJBOUJBTCxhQW1CQUcsYUFPQUM7TUFxQk0sMEJBQUp4RCxFQUNXO0lBbERBOzs7T0FBYjJCO09BRUF5QjtPQW1CQUc7T0FPQUM7T0FJQUM7T0FJQUM7T0FZQUk7SUFoRGE7VSIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgdCA9IHsgeCA6IGZsb2F0IDsgeSA6IGZsb2F0IH1cbmxldCBhZGQgYSBiID0geyB4ID0gYS54ICsuIGIueDsgeSA9IGEueSArLiBiLnkgfVxubGV0IHN1YiBhIGIgPSB7IHggPSBhLnggLS4gYi54OyB5ID0gYS55IC0uIGIueSB9XG5cbmxldCBtdWx0IGsgYSA9IHsgeCA9IGsqLiBhLng7IHkgPSBrKi4gYS55IH1cblxubGV0IGRvdCBhIGIgPSBhLnggKi4gYi54ICsuIGEueSAqLiBiLnlcbmxldCBub3JtIGEgPSBzcXJ0IChkb3QgYSBhKVxubGV0IG5vcm1hbGl6ZSBhID0gbXVsdCAoMS4wIC8uIG5vcm0gYSkgYVxubGV0IHBwIGZtdCBhID0gRm9ybWF0LmZwcmludGYgZm10IFwiKCVmLCAlZilcIiBhLnggYS55XG5cbmxldCB6ZXJvID0geyB4ID0gMC4wOyB5ID0gMC4wIH1cbmxldCBpc196ZXJvIHYgPSB2LnggPSAwLjAgJiYgdi55ID0gMC4wIiwib3BlbiBFY3Ncbm1vZHVsZSBQb3NpdGlvbiA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCBpbmNsdWRlIFZlY3RvciBsZXQgbmFtZSA9IFwicG9zaXRpb25cIiBlbmQpXG5tb2R1bGUgVGVsZXBvcnQgPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBWZWN0b3IgbGV0IG5hbWUgPSBcInRlbGVwb3J0XCIgZW5kKVxubW9kdWxlIFByaW9yaXR5ID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IGludCAgbGV0IG5hbWUgPSBcInByaW9yaXR5XCIgZW5kKVxubW9kdWxlIFZlbG9jaXR5ID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgVmVjdG9yIGxldCBuYW1lID0gXCJ2ZWxvY2l0eVwiIGVuZClcbm1vZHVsZSBNYXNzID0gQ29tcG9uZW50Lk1ha2UgKHN0cnVjdCB0eXBlIHQgPSBmbG9hdCBsZXQgbmFtZSA9IFwibWFzc1wiIGVuZClcbm1vZHVsZSBCb3ggPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBSZWN0IGxldCBuYW1lID0gXCJib3hcIiBlbmQpXG5tb2R1bGUgU3VyZmFjZSA9IENvbXBvbmVudC5NYWtlIChzdHJ1Y3QgaW5jbHVkZSBUZXh0dXJlIGxldCBuYW1lID0gXCJ0ZXh0dXJlXCIgZW5kKVxubW9kdWxlIE5hbWUgPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgdHlwZSB0ID0gc3RyaW5nIGxldCBuYW1lID0gXCJuYW1lXCIgZW5kKVxubW9kdWxlIENvbGxpc2lvblJlc29sdmVyID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IEVudGl0eS50IC0+IEVudGl0eS50IC0+IHVuaXQgbGV0IG5hbWUgPSBcInJlc29sdmVyXCIgZW5kKVxubW9kdWxlIE93bmVyID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IEVudGl0eS50IGxldCBuYW1lID0gXCJvd25lclwiIGVuZClcbiIsIlxyXG5sZXQgbWFwID0gW3xcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsxOzF8XTtcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxuW3wxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzF8XTtcclxufF1cclxuXHJcbmxldCBwYWxldHRlID0gW3xcclxuICAoR2Z4LmNvbG9yIDAgMCAwIDI1NSk7XHJcbiAgKEdmeC5jb2xvciAxMzAgMTMwIDEzMCAyNTUpO1xyXG4gIChHZnguY29sb3IgNjEgNjEgNjEgMjU1KTtcclxuICAoR2Z4LmNvbG9yIDAgMCAyNTUgMjU1KTtcclxuICAoR2Z4LmNvbG9yIDAgMjU1IDAgMjU1KTtcclxuICAoR2Z4LmNvbG9yIDI1NSAwIDAgMjU1KTtcclxufF1cclxuXHJcbmxldCBfZG9vclRvcCA9ICg0MDAsMTIwKVxyXG5sZXQgX2Rvb3JCb3R0b20gPSAoNDAwLDYwMClcclxubGV0IF9kb29yTGVmdCA9ICg4MCw0MDApXHJcbmxldCBfZG9vclJpZ2h0ID0gKDcyMCw0MDApIiwiZXhjZXB0aW9uIE1pc3NpbmdJZGxlIG9mIHN0cmluZ1xuXG50eXBlIHR1cGxlSW50ID0gKGludCAqaW50KVxuXG5cbnR5cGUgYW5pbWF0aW9uID0ge1xuICAgICAgICBmcmFtZXMgOiBHZngucmVuZGVyIGFycmF5O1xuICAgICAgICBpZGxlVGFibGUgOiAoc3RyaW5nLCB0dXBsZUludCkgSGFzaHRibC50O1xuICAgICAgICBtdXRhYmxlIGN1cnJlbnRJZGxlIDogdHVwbGVJbnQ7XG4gICAgICAgIG11dGFibGUgY3VycmVudCA6IGludFxufVxuXG50eXBlIHRpbGVtYXAgPSB7XG4gICAgICAgIHRpbGVzIDogR2Z4LmNvbG9yIGFycmF5O1xuICAgICAgICBtYXAgOiBpbnQgYXJyYXkgYXJyYXk7XG4gICAgICAgIGdyaWRfc2l6ZSA6IGludDtcbn1cblxudHlwZSB0ID0gQ29sb3Igb2YgR2Z4LmNvbG9yXG4gICAgICAgIHwgSW1hZ2Ugb2YgR2Z4LnJlbmRlclxuICAgICAgICB8IEFuaW1hdGlvbiBvZiBhbmltYXRpb25cbiAgICAgICAgfCBUaWxlIG9mIHRpbGVtYXBcblxubGV0IGJsYWNrID0gQ29sb3IgKEdmeC5jb2xvciAwIDAgMCAyNTUpXG5sZXQgcmVkID0gQ29sb3IgKEdmeC5jb2xvciAyNTUgMCAwIDI1NSlcbmxldCBibHVlID0gQ29sb3IgKEdmeC5jb2xvciAwIDAgMjU1IDI1NSlcblxubGV0IGdyYXkgPSBDb2xvciAoR2Z4LmNvbG9yIDEyOCAxMjggMTI4IDI1NSlcblxubGV0IGNyZWF0ZV9pbWcgaW1nIGwgaCA9IFxuICAgICAgICBsZXQgciA9IEdmeC5jcmVhdGVfb2Zmc2NyZWVuIGwgaCBpblxuICAgICAgICBHZnguZHJhd19pbWFnZV9zY2FsZSByIGltZyAwIDAgbCBoO1xuICAgICAgICByXG5cbmxldCBjcmVhdGVfdGlsZW1hcCBjb2xvcnMgdGlsZW1hcCBzaXplPSBUaWxlIHt0aWxlcyA9IGNvbG9yczsgbWFwID0gdGlsZW1hcDtncmlkX3NpemUgPSBzaXplfVxuXG5sZXQgY3JlYXRlX2FuaW1hdGlvbiBpbWcgbnVtX3cgbnVtX2ggc3cgc2ggZHcgZGggPSBcbiAgICAgICAgbGV0IGFycmF5X2ZyYW1lID0gQXJyYXkuaW5pdCAobnVtX3cgKiBudW1faCkgKGZ1biBfaSAtPiBHZnguY3JlYXRlX29mZnNjcmVlbiBkdyBkaCkgaW5cbiAgICAgICAgZm9yIHkgPSAwIHRvIChudW1faC0xKSBkb1xuICAgICAgICAgICAgICAgIGZvciB4ID0gMCB0byAobnVtX3ctMSkgZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIEdmeC5kZWJ1ZyAoRm9ybWF0LmFzcHJpbnRmIFwiJWkgeCpzdyAlaSB5KnNoXCIgKHgqc3cpICh5KnNoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHZnguZHJhd19pbWFnZV9mdWxsIGFycmF5X2ZyYW1lLih5Km51bV93K3gpIGltZyAoeCpzdykgKHkqc2gpIHN3IHNoIDAgMCBkdyBkaDtcbiAgICAgICAgICAgICAgICBkb25lXG4gICAgICAgIGRvbmU7XG4gICAgICAgIEFuaW1hdGlvbiB7ZnJhbWVzID0gYXJyYXlfZnJhbWU7IGN1cnJlbnQgPSAwO2N1cnJlbnRJZGxlID0gKDAsbnVtX3cgKiBudW1faCkgOyBpZGxlVGFibGUgPSBIYXNodGJsLmNyZWF0ZSAzMn1cblxubGV0IGNyZWF0ZV9pZGxlIGlkbGVOYW1lIChkZWIsIGZpbikgYW5pbT0gXG4gIG1hdGNoIGFuaW0gd2l0aCBcbiAgICB8IEFuaW1hdGlvbiBhIC0+IEhhc2h0YmwucmVwbGFjZSAoYS5pZGxlVGFibGUpIGlkbGVOYW1lIChkZWIsIGZpbilcbiAgICB8IF8gLT4gKClcblxubGV0IGRyYXdfdGlsZW1hcCB0aWxlbWFwIGN0eCBwb3NYIHBvc1k9XG4gICAgICAgIGxldCB0aWxlID0gcmVmIDAgaW5cbiAgICAgICAgbGV0IGNvbG9yID0gcmVmIChHZnguY29sb3IgMCAwIDAgMjU1KSBpblxuICAgICAgICBsZXQgc2l6ZSA9IHRpbGVtYXAuZ3JpZF9zaXplIGluXG4gICAgICAgIGxldCBzaXplWCA9IEFycmF5Lmxlbmd0aCB0aWxlbWFwLm1hcCBpblxuICAgICAgICBsZXQgc2l6ZVkgPSBBcnJheS5sZW5ndGggdGlsZW1hcC5tYXAuKDApIGluXG5cbiAgICAgICAgZm9yIHkgPSAwIHRvIChzaXplWC0xKSBkb1xuICAgICAgICAgICAgICAgIGZvciB4ID0gMCB0byAoc2l6ZVktMSkgZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUgOj0gdGlsZW1hcC5tYXAuKHkpLih4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDo9IHRpbGVtYXAudGlsZXMuKCF0aWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdmeC5maWxsX3JlY3QgY3R4ICh4KnNpemUrcG9zWCkgKHkqc2l6ZStwb3NZKSBzaXplIHNpemUgIWNvbG9yO1xuICAgICAgICAgICAgICAgIGRvbmVcbiAgICAgICAgZG9uZVxuXG5sZXQgZ2V0X2lkbGUgaWRsZU5hbWUgYW5pbT0gdHJ5XG4gIEhhc2h0YmwuZmluZCBhbmltLmlkbGVUYWJsZSBpZGxlTmFtZVxuICB3aXRoXG4gICAgTm90X2ZvdW5kIC0+IHJhaXNlIChNaXNzaW5nSWRsZShpZGxlTmFtZSkpXG5cbmxldCBwbGF5X2lkbGUgYW5pbSBpZGxlTmFtZSA9IFxuICBtYXRjaCBhbmltIHdpdGggXG4gIHxBbmltYXRpb24gYSAtPiAgbGV0IChkZWIsZmluKSA9IGdldF9pZGxlIGlkbGVOYW1lIGEgaW5cbiAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50IDwtIGRlYjtcbiAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50SWRsZSA8LSAoZGViLGZpbikgXG4gIHwgXyAtPiAoKVxuXG5cblxubGV0IGdldF9mcmFtZSBhbmltIF9kaXIgPSBcbiAgICAgICAgbGV0IGN1cnJlbnRDYXNlID0gQXJyYXkuZ2V0IChhbmltLmZyYW1lcykgKGFuaW0uY3VycmVudCkgaW5cbiAgICAgICAgbGV0IF9kZWIgPSAoZnN0IGFuaW0uY3VycmVudElkbGUpIGluXG4gICAgICAgIGxldCBfZmluID0gKHNuZCBhbmltLmN1cnJlbnRJZGxlKSBpblxuICAgICAgICBsZXQgX2N1cnJlbnQgPSBhbmltLmN1cnJlbnQgaW5cbiAgICAgICAgKCppZiBjdXJyZW50ID09IGZpbi0xIHRoZW4gYW5pbS5jdXJyZW50IDwtIGRlYiBlbHNlIGFuaW0uY3VycmVudCA8LSBhbmltLmN1cnJlbnQgKyAxOyopXG4gICAgICAgIGN1cnJlbnRDYXNlIiwib3BlbiBWZWN0b3JcblxudHlwZSB0ID0geyB3aWR0aCA6IGludDsgaGVpZ2h0IDogaW50IH1cbmxldCB0b3BfbGVmdCB2IF9iID0gdlxubGV0IHRvcF9yaWdodCB2IGIgPSB7IHYgd2l0aCB4ID0gdi54ICsuIGZsb2F0IGIud2lkdGggfVxubGV0IGJvdHRvbV9sZWZ0IHYgYiA9IHsgdiB3aXRoIHkgPSB2LnkgKy4gZmxvYXQgYi5oZWlnaHQgfVxuXG5sZXQgYm90dG9tX3JpZ2h0IHYgYiA9IHsgeCA9IHYueCArLiBmbG9hdCBiLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB2LnkgKy4gZmxvYXQgYi5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cblxubGV0IGNlbnRlciB2IGIgPSB7IFxuICB4ID0gdi54ICsuIDAuNSAqLiBmbG9hdCBiLndpZHRoO1xuICB5ID0gdi55ICsuIDAuNSAqLiBmbG9hdCBiLmhlaWdodDtcbn1cblxubGV0IG1kaWZmIHYxIGIxIHYyIGIyID1cbiAgKCogV2UgdXNlIHRoZSBNaW5rb3dza2kgZGlmZmVyZW5jZSBvZiBCb3gxIGFuZCBCb3gyICopXG4gIGxldCB4ID0gdjEueCAtLiB2Mi54IC0uIGZsb2F0IGIyLndpZHRoIGluXG4gIGxldCB5ID0gdjEueSAtLiB2Mi55IC0uIGZsb2F0IGIyLmhlaWdodCBpblxuICBsZXQgaCA9IGIxLmhlaWdodCArIGIyLmhlaWdodCBpblxuICBsZXQgdyA9IGIxLndpZHRoICsgYjIud2lkdGggaW5cbiAgKHt4ID0geDsgeSA9IHl9LCB7d2lkdGggPSB3OyBoZWlnaHQgPSBofSlcbiBcbmxldCBoYXNfb3JpZ2luIHYgYiA9XG4gIHYueCA8IDAuMCAmJiB2LnggKy4gZmxvYXQgYi53aWR0aCA+IDAuMCAmJiB2LnkgPCAwLjAgJiYgdi55ICsuIGZsb2F0IGIuaGVpZ2h0ID4gMC4wICBcblxubGV0IGludGVyc2VjdCB2MSBiMSB2MiBiMyA9XG4gIGxldCB2LCBiID0gbWRpZmYgdjEgYjEgdjIgYjMgaW4gXG4gIGhhc19vcmlnaW4gdiBiXG5cbmxldCBwcCBmbXQgYiA9IEZvcm1hdC5mcHJpbnRmIGZtdCBcIlt3OiVkLGg6JWRdXCIgYi53aWR0aCBiLmhlaWdodFxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xuXG5sZXQgaW5pdCAoKSA9ICgpXG5cbmxldCB1cGRhdGUgX2R0IGVsID1cbiAgTGlzdC5pdGVyaSAoZnVuIGkgZTEgLT5cbiAgICBMaXN0Lml0ZXJpIChmdW4gaiBlMiAtPlxuICAgICAgKCogVW5lIGRvdWJsZSBib3VjbGUgcXVpIMOpdml0ZSBkZSBjb21wYXJlciBkZXV4IGZvaXNcbiAgICAgICAgIGxlcyBvYmpldHMgOiBzaSBvbiBjb21wYXJlIEEgZXQgQiwgb24gbmUgY29tcGFyZSBwYXMgQiBldCBBLlxuICAgICAgICAgSWwgZmF1ZHJhIGFtw6lsaW9yZXIgY2VsYSBzaSBvbiBhIGJlYXVjb3VwICg+IDMwKSBvYmpldHMgc2ltdWx0YW7DqW1lbnQuXG4gICAgICAqKVxuICAgICAgaWYgaiA+IGkgdGhlbiBiZWdpblxuICAgICAgICAoKiBsZXMgY29tcG9zYW50cyBkdSByZWN0YW5nbGUgcjEgKilcbiAgICAgICAgbGV0IHBvczEgPSBQb3NpdGlvbi5nZXQgZTEgaW5cbiAgICAgICAgbGV0IGJveDEgPSBCb3guZ2V0IGUxIGluXG4gICAgICAgICgqIGxlcyBjb21wb3NhbnRzIGR1IHJlY3RhbmdsZSByMiAqKVxuICAgICAgICBsZXQgcG9zMiA9IFBvc2l0aW9uLmdldCBlMiBpblxuICAgICAgICBsZXQgYm94MiA9IEJveC5nZXQgZTIgaW5cbiAgICAgICAgKCogbGVzIHZpdGVzc2VzICopXG4gICAgICAgIGxldCB2MSA9IFZlbG9jaXR5LmdldCBlMSBpblxuICAgICAgICBsZXQgdjIgPSBWZWxvY2l0eS5nZXQgZTIgaW5cbiAgICAgICAgKCogWzFdIGxhIHNvdXN0cmFjdGlvbiBkZSBNaW5rb3dza2kgKilcbiAgICAgICAgbGV0IHNfcG9zLCBzX3JlY3QgPSBSZWN0Lm1kaWZmIHBvczIgYm94MiBwb3MxIGJveDEgaW5cbiAgICAgICAgKCogWzJdIHNpIGludGVyc2VjdGlvbiBldCB1biBkZXMgb2JqZXRzIGV0IG1vYmlsZSwgbGVzIG9iamV0cyByZWJvbmRpc3NlbnQgKilcbiAgICAgICAgaWYgUmVjdC5oYXNfb3JpZ2luIHNfcG9zIHNfcmVjdCAmJlxuICAgICAgICAgIG5vdCAoVmVjdG9yLmlzX3plcm8gdjEgJiYgVmVjdG9yLmlzX3plcm8gdjIpXG4gICAgICAgICAgdGhlbiBiZWdpblxuICAgICAgICAgICAgKCogWzNdIGxlIHBsdXMgcGV0aXQgZGVzIHZlY3RldXJzIGEgYiBjIGQgKilcbiAgICAgICAgICAgIGxldCBhID0gVmVjdG9yLnsgeCA9IHNfcG9zLng7IHkgPSAwLjB9IGluXG4gICAgICAgICAgICBsZXQgYiA9IFZlY3Rvci57IHggPSBmbG9hdCBzX3JlY3Qud2lkdGggKy4gc19wb3MueDsgeSA9IDAuMCB9IGluXG4gICAgICAgICAgICBsZXQgYyA9IFZlY3Rvci57IHggPSAwLjA7IHkgPSBzX3Bvcy55IH0gaW5cbiAgICAgICAgICAgIGxldCBkID0gVmVjdG9yLnsgeCA9IDAuMDsgeSA9IGZsb2F0IHNfcmVjdC5oZWlnaHQgKy4gc19wb3MueX0gaW4gXG4gICAgICAgICAgICBsZXQgbiA9IExpc3QuZm9sZF9sZWZ0IChmdW4gbWluX3YgdiAtPlxuICAgICAgICAgICAgICBpZiBWZWN0b3Iubm9ybSB2ICA8IFZlY3Rvci5ub3JtIG1pbl92IHRoZW4gdiBlbHNlIG1pbl92KSBcbiAgICAgICAgICAgICAgYSBbIGI7IGMgOyBkXVxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgICgqICBbNF0gcmFwcG9ydCBkZXMgdml0ZXNzZXMgZXQgZMOpcGxhY2VtZW50IGRlcyBvYmpldHMgKilcbiAgICAgICAgICAgIGxldCBuX3YxID0gVmVjdG9yLm5vcm0gdjEgaW5cbiAgICAgICAgICAgIGxldCBuX3YyID0gVmVjdG9yLm5vcm0gdjIgaW5cbiAgICAgICAgICAgIGxldCBzID0gKG5fdjEgKy4gbl92MikgaW5cbiAgICAgICAgICAgIGxldCBuMSA9IG5fdjEgLy4gcyBpblxuICAgICAgICAgICAgbGV0IG4yID0gbl92MiAvLiBzIGluXG4gICAgICAgICAgICBsZXQgZGVsdGFfcG9zMSA9IFZlY3Rvci5tdWx0IG4xIG4gaW5cbiAgICAgICAgICAgIGxldCBkZWx0YV9wb3MyID0gVmVjdG9yLm11bHQgKEZsb2F0Lm5lZyBuMikgbiBpblxuICAgICAgICAgICAgUG9zaXRpb24uc2V0IGUxIChWZWN0b3IuYWRkIHBvczEgZGVsdGFfcG9zMSk7XG4gICAgICAgICAgICBQb3NpdGlvbi5zZXQgZTIgKFZlY3Rvci5hZGQgcG9zMiBkZWx0YV9wb3MyKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAoKiBbNV0gT24gbm9ybWFsaXNlIG4gKG9uIGNhbGN1bGUgdW4gdmVjdGV1ciBkZSBtw6ptZSBkaXJlY3Rpb24gbWFpcyBkZSBub3JtZSAxKSAqKVxuICAgICAgICAgICAgbGV0IG4gPSBWZWN0b3Iubm9ybWFsaXplIG4gaW5cbiAgICAgICAgICAgICgqIFs2XSBWaXRlc3NlIHJlbGF0aXZlIGVudHJlIHYyIGV0IHYxICopXG4gICAgICAgICAgICBsZXQgdiA9IFZlY3Rvci5zdWIgdjEgdjIgaW5cblxuICAgICAgICAgICAgKCogUHLDqXBhcmF0aW9uIGF1IGNhbGN1bCBkZSBsJ2ltcHVsc2lvbiAqKVxuICAgICAgICAgICAgKCogRWxhc3RpY2l0w6kgZml4ZS4gRW4gcHJhdGlxdWUsIGwnZWxhc3RpY2l0w6kgcGV1dCDDqnRyZSBzdG9ja8OpZSBkYW5zXG4gICAgICAgICAgICAgICBsZXMgb2JqZXRzIGNvbW1lIHVuIGNvbXBvc2FudCA6IDEgcG91ciBsYSBiYWxsZSBldCBsZXMgbXVycywgMC41IHBvdXJcbiAgICAgICAgICAgICAgIGRlcyBvYnN0YWNsZXMgYWJzb3JiYW50cywgMS4yIHBvdXIgZGVzIG9ic3RhY2xlcyByZWJvbmRpc3NhbnQsIOKApiAqKVxuICAgICAgICAgICAgbGV0IGUgPSAxLjAgaW5cblxuICAgICAgICAgICAgKCogbm9ybWFsaXNhdGlvbiBkZXMgbWFzc2VzICopXG4gICAgICAgICAgICBsZXQgbTEgPSBNYXNzLmdldCBlMSBpblxuICAgICAgICAgICAgbGV0IG0yID0gTWFzcy5nZXQgZTIgaW4gICAgXG4gICAgICAgICAgICBsZXQgbTEsIG0yID0gXG4gICAgICAgICAgICAgIGlmIEZsb2F0LmlzX2luZmluaXRlIG0xICYmIEZsb2F0LmlzX2luZmluaXRlIG0yIHRoZW5cbiAgICAgICAgICAgICAgICBpZiBuX3YxID0gMC4wIHRoZW4gbTEsIDEuMCBlbHNlIGlmIG5fdjIgPSAwLjAgdGhlbiAxLjAsIG0yIGVsc2VcbiAgICAgICAgICAgICAgICAgIDAuMCwgMC4wXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgbTEsIG0yXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgKCogWzddIGNhbGN1bCBkZSBsJ2ltcHVsc2lvbiAqKVxuICAgICAgICAgICAgbGV0IGogPVxuICAgICAgICAgICAgICAgKC0uKDEuMCArLiBlKSAqLiBWZWN0b3IuZG90IHYgbikvLiAoICgxLiAvLiBtMSkgKy4gKDEuIC8uIG0yKSlcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICAoKiBbOF0gY2FsY3VsIGRlcyBub3V2ZWxsZXMgdml0ZXNzZXMgKilcbiAgICAgICAgICAgIGxldCBuZXdfdjEgPSBWZWN0b3IuYWRkIHYxIChWZWN0b3IubXVsdCAoai8uIG0xKSBuKSBpblxuICAgICAgICAgICAgbGV0IG5ld192MiA9IFZlY3Rvci5zdWIgdjIgKFZlY3Rvci5tdWx0IChqLy4gbTIpIG4pIGluXG4gICAgICAgICAgICAoKiBbOV0gbWlzZSDDoCBqb3VyIGRlcyB2aXRlc3NlcyAqKVxuICAgICAgICAgICAgVmVsb2NpdHkuc2V0IGUxIG5ld192MTtcbiAgICAgICAgICAgIFZlbG9jaXR5LnNldCBlMiBuZXdfdjI7XG4gICAgICAgICAgICAoKiBbMTBdIGFwcGVsIGRlcyByZXNvbHZldXJzICopXG4gICAgICAgICAgICBpZiBDb2xsaXNpb25SZXNvbHZlci5oYXNfY29tcG9uZW50IGUxIHRoZW4gKENvbGxpc2lvblJlc29sdmVyLmdldCBlMSkgZTEgZTI7XG4gICAgICAgICAgICBpZiBDb2xsaXNpb25SZXNvbHZlci5oYXNfY29tcG9uZW50IGUyIHRoZW4gKENvbGxpc2lvblJlc29sdmVyLmdldCBlMikgZTIgZTFcbiAgICAgICAgICBlbmRcbiAgICAgIGVuZFxuICAgICAgKSBlbCkgZWxcbiIsIlxubGV0IGNvbW1hbmRzID0gSGFzaHRibC5jcmVhdGUgMTdcblxuXG5sZXQgcmVnaXN0ZXJfY29tbWFuZCBldiBmID1cbiAgaWYgZXYgIT0gR2Z4Lk5vRXZlbnQgdGhlblxuICAgIEhhc2h0YmwuYWRkIGNvbW1hbmRzICBldiBmXG5cbmxldCBnZXRfY29tbWFuZHMgZXYgPSBIYXNodGJsLmZpbmRfYWxsIGNvbW1hbmRzIGV2IiwiXG5sZXQgaW5pdCAoKSA9ICgpXG5cbmxldCB1cGRhdGUgX2R0IF9lbCA9XG4gICgqIENoZWNrIGZvciBrZXlib2FyZCBldmVudHMgKilcbiAgbGV0IHJlYyBsb29wX2V2ZW50cyAoKSA9XG4gICAgICBtYXRjaCBHZngucG9sbF9ldmVudCAoKSB3aXRoXG4gICAgIE5vRXZlbnQgLT4gKClcbiAgICB8IGV2IC0+IFxuICAgICAgTGlzdC5pdGVyIChmdW4gZiAtPiBmICgpKSAoSW5wdXRfaGFuZGxlci5nZXRfY29tbWFuZHMgZXYpO1xuICAgICAgbG9vcF9ldmVudHMgKClcbiAgICBpblxuICAgIGxvb3BfZXZlbnRzICgpXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXG5cbmxldCBjdHggPSByZWYgTm9uZVxubGV0IGluaXQgKCkgPVxuICBsZXQgXywgYyA9IEdmeC5jcmVhdGUgXCJjYW52YXNcIiAgaW5cbiAgY3R4IDo9IFNvbWUgY1xuXG5cbiAgXG5cbmxldCB1cGRhdGUgX2R0IGVsID1cbiAgbGV0IGN0eCA9IE9wdGlvbi5nZXQgIWN0eCBpblxuICBHZnguY2xlYXJfcmVjdCBjdHggMCAwIDgwMCA2NDA7XG4gIGxldCBsaXN0X3NvcnQgPSBMaXN0LnNvcnQgKFxuICAgICAgZnVuIGEgYiAtPlxuICAgICAgICBsZXQgYVAgPSBQcmlvcml0eS5nZXQgYSBpblxuICAgICAgICBsZXQgYlAgPSBQcmlvcml0eS5nZXQgYiBpbiBcbiAgICAgICAgYVAgLSBiUFxuICAgICAgICApIGVsIGluXG4gIExpc3QuaXRlciAoZnVuIGUgLT4gXG4gICAgbGV0IHBvcyA9IFBvc2l0aW9uLmdldCBlIGluXG4gICAgbGV0IGJveCA9IHRyeSBCb3guZ2V0IGUgd2l0aCBfIC0+IHt3aWR0aCA9IDA7IGhlaWdodCA9IDB9IGluXG4gICAgbGV0IGNvbG9yID0gU3VyZmFjZS5nZXQgZSBpblxuICAgIG1hdGNoIGNvbG9yIHdpdGggXG4gICAgICB8IENvbG9yIGNvbG9yMSAtPiBHZnguZmlsbF9yZWN0IGN0eCAoaW50X29mX2Zsb2F0IHBvcy54KSAoaW50X29mX2Zsb2F0IHBvcy55KSBib3gud2lkdGggYm94LmhlaWdodCBjb2xvcjE7XG4gICAgICB8IEltYWdlIGltYWdlIC0+IEdmeC5ibGl0X3NjYWxlIGN0eCBpbWFnZSAoaW50X29mX2Zsb2F0IHBvcy54KSAoaW50X29mX2Zsb2F0IHBvcy55KSBib3gud2lkdGggYm94LmhlaWdodDtcbiAgICAgIHwgQW5pbWF0aW9uIGFuaW0gLT4gXG4gICAgICAgIGxldCBzcGVlZCA9IFZlbG9jaXR5LmdldCBlIGluXG4gICAgICAgIEdmeC5ibGl0X3NjYWxlIGN0eCAoVGV4dHVyZS5nZXRfZnJhbWUgYW5pbSAoaW50X29mX2Zsb2F0IHNwZWVkLngpKSAoaW50X29mX2Zsb2F0IHBvcy54KSAoaW50X29mX2Zsb2F0IHBvcy55KSBib3gud2lkdGggYm94LmhlaWdodDtcbiAgICAgIHwgVGlsZSB0aWxlbWFwIC0+IFRleHR1cmUuZHJhd190aWxlbWFwIHRpbGVtYXAgY3R4IChpbnRfb2ZfZmxvYXQgcG9zLngpIChpbnRfb2ZfZmxvYXQgcG9zLnkpXG4gICAgICAgICkgKGxpc3Rfc29ydClcbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcblxubGV0IGluaXQgKCkgPSAoKVxuXG5sZXQgdGltZSA9IHJlZiAwLjBcbmxldCB1cGRhdGUgZHQgZWwgPVxuICBsZXQgZGVsdGFfdCA9IG1pbiAoMS4gLy4gNjAuKSAoMTAwMC4gKi4oZHQgLS4gIXRpbWUpKSBpblxuICB0aW1lIDo9IGR0O1xuICBMaXN0Lml0ZXIgKGZ1biBlIC0+XG4gICAgbGV0IHBvcyA9IFBvc2l0aW9uLmdldCBlIGluXG4gICAgbGV0IHNwZWVkID0gVmVjdG9yLm11bHQgZGVsdGFfdCAoVmVsb2NpdHkuZ2V0IGUpIGluXG4gICAgUG9zaXRpb24uc2V0IGUgKHsgeCA9IHBvcy54ICsuIHNwZWVkLng7IHkgPSBwb3MueSArLiBzcGVlZC55IH0pXG4gICAgKSBlbFxuIiwib3BlbiBFY3Ncbm1vZHVsZSB0eXBlIFMgPVxuc2lnXG4gIHZhbCBpbml0IDogdW5pdCAtPiB1bml0XG4gICgqIGluaXRpYWxpemVzIHRoZSBzeXN0ZW0gKilcblxuICB2YWwgdXBkYXRlIDogZmxvYXQgLT4gdW5pdFxuICAoKiB1cGRhdGVzIHRoZSBzeXN0ZW0uIFRoZSBmbG9hdCBhcmd1bWVudCBpcyB0aGUgY3VycmVudCB0aW1lIGluIG5hbm9zZWNvbmRzICopXG5cbiAgdmFsIHJlZ2lzdGVyIDogRW50aXR5LnQgLT4gdW5pdFxuICAoKiByZWdpc3RlciBhbiBlbnRpdHkgZm9yIHRoaXMgc3lzdGVtICopXG5cbiAgdmFsIHVucmVnaXN0ZXIgOiBFbnRpdHkudCAtPiB1bml0XG4gICgqIHJlbW92ZSBhbiBlbnRpdHkgZnJvbSB0aGlzIHN5c3RlbSAqKVxuXG5lbmRcblxubW9kdWxlIE1ha2UgKFQgOiBzaWcgdmFsIGluaXQgOiB1bml0IC0+IHVuaXQgdmFsIHVwZGF0ZSA6IGZsb2F0IC0+IEVudGl0eS50IGxpc3QgLT4gdW5pdCBlbmQpIDogUyA9XG5zdHJ1Y3RcbiAgbGV0IGVsZW1fbGlzdCA9IHJlZiBbXVxuICBsZXQgZWxlbV90YWJsZSA9IEVudGl0eS5UYWJsZS5jcmVhdGUgMTZcbiAgbGV0IHJlZ2lzdGVyIGUgPVxuICAgIGlmIG5vdCAoRW50aXR5LlRhYmxlLm1lbSBlbGVtX3RhYmxlIGUpIHRoZW4gYmVnaW5cbiAgICAgIEVudGl0eS5UYWJsZS5hZGQgZWxlbV90YWJsZSBlICgpO1xuICAgICAgZWxlbV9saXN0IDo9IGUgOjogIWVsZW1fbGlzdFxuICAgIGVuZFxuXG4gIGxldCB1bnJlZ2lzdGVyIGUgPVxuICAgIEVudGl0eS5UYWJsZS5yZW1vdmUgZWxlbV90YWJsZSBlO1xuICAgIGVsZW1fbGlzdCA6PSBMaXN0LmZpbHRlciAoZnVuIHggLT4geCA8PiBlKSAhZWxlbV9saXN0XG5cbiAgbGV0IGluaXQgKCkgPSBULmluaXQgKClcbiAgbGV0IHVwZGF0ZSBkdCA9XG4gICAgVC51cGRhdGUgZHQgIWVsZW1fbGlzdFxuZW5kXG5cbmxldCBzeXN0ZW1zID0gcmVmIFtdXG5cbmxldCByZWdpc3RlciBtID1cbiAgc3lzdGVtcyA6PSBtIDo6ICFzeXN0ZW1zXG5cbmxldCBpbml0X2FsbCAoKSA9XG4gIExpc3QuaXRlciAoZnVuIG0gLT5cbiAgICBsZXQgbW9kdWxlIE0gPSAodmFsIG0gOiBTKSBpblxuICAgIE0uaW5pdCAoKVxuICAgICkgIXN5c3RlbXNcbmxldCB1cGRhdGVfYWxsIGR0ID1cbiAgICBMaXN0Lml0ZXIgKGZ1biBtIC0+XG4gICAgICBsZXQgbW9kdWxlIE0gPSAodmFsIG0gOiBTKSBpblxuICAgICAgTS51cGRhdGUgZHRcbiAgICAgICkgIXN5c3RlbXNcbiIsIm1vZHVsZSBDb250cm9sX1MgPSBTeXN0ZW0uTWFrZSAoQ29udHJvbF9zeXN0ZW0pXG5tb2R1bGUgRHJhd19TID0gU3lzdGVtLk1ha2UoRHJhd19zeXN0ZW0pXG5tb2R1bGUgTW92ZV9TID0gU3lzdGVtLk1ha2UoTW92ZV9zeXN0ZW0pXG5tb2R1bGUgQ29sbGlzaW9uX1MgPSBTeXN0ZW0uTWFrZShDb2xsaXNpb25fc3lzdGVtKVxuXG5sZXQgKCkgPVxuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBEcmF3X1MpO1xuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBNb3ZlX1MpO1xuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBDb250cm9sX1MpO1xuICBTeXN0ZW0ucmVnaXN0ZXIgKG1vZHVsZSBDb2xsaXNpb25fUylcbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gU3lzdGVtX2RlZnNcbm9wZW4gRWNzXG5cblxubGV0IGNyZWF0ZSBuYW1lIHggeSBpbWc9XG4gIGxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBsZXQgYW5pbSA9IFRleHR1cmUuY3JlYXRlX2FuaW1hdGlvbiBpbWcgMyA0IDE2MCAxNjAgNDAgNDAgaW5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHl9O1xuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVybztcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgQm94LnNldCBlIHt3aWR0aCA9IDQwOyBoZWlnaHQ9NDAgfTtcbiAgTmFtZS5zZXQgZSBuYW1lO1xuICBTdXJmYWNlLnNldCBlIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJmcm9udF93YWxrXCIgKDAsMykgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcInJpZ2h0X3dhbGtcIiAoMyw2KSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwiYmFja193YWxrXCIgKDYsOSkgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImxlZnRfd2Fsa1wiICg5LDEyKSBhbmltO1xuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiZnJvbnRfd2Fsa1wiO1xuICBQcmlvcml0eS5zZXQgZSAyO1xuICAoKiBzeXN0ZW1zICopXG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gIENvbnRyb2xfUy5yZWdpc3RlciBlO1xuICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgTW92ZV9TLnJlZ2lzdGVyIGU7XG4gIGVcblxubGV0IHJlc2V0IGUgeCB5ID0gXG5cbiAgUG9zaXRpb24uc2V0IGUgeyB4ID0geDsgeSA9IHkgfVxuXG5sZXQgbW92ZV91cCBlID1cbiAgbGV0IGFuaW0gPSBTdXJmYWNlLmdldCBlIGluXG4gICAgVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcImJhY2tfd2Fsa1wiO1xuICAgIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IC0yMDAuMCB9XG4gIFxubGV0IG1vdmVfZG93biBlID1cbiAgbGV0IGFuaW0gPSBTdXJmYWNlLmdldCBlIGluXG4gIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJmcm9udF93YWxrXCI7XG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMC4wOyB5ID0gMjAwLjAgfVxuXG5sZXQgbW92ZV9yaWdodCBlID1cbiAgbGV0IGFuaW0gPSBTdXJmYWNlLmdldCBlIGluXG4gIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJyaWdodF93YWxrXCI7XG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gMjAwLjA7IHkgPSAwLjAgfVxuICBcbmxldCBtb3ZlX2xlZnQgZSA9XG4gIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZSBpblxuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwibGVmdF93YWxrXCI7XG4gICAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gLTIwMC4wOyB5ID0gMC4wIH1cblxubGV0IHN0b3AgZSA9XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvXG4gICIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gRWNzXG5cblxubGV0IGNyZWF0ZSBuYW1lIHggeSBwYWxldHRlIG1hcCBzaXplPVxubGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fTtcbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm87XG4gIE1hc3Muc2V0IGUgaW5maW5pdHk7XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSAoVGV4dHVyZS5jcmVhdGVfdGlsZW1hcCBwYWxldHRlIG1hcCBzaXplKTtcbiAgUHJpb3JpdHkuc2V0IGUgMDtcbiAgKCogc3lzdGVtcyAqKVxuXG5cbiAgZVxuXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXHJcbm9wZW4gU3lzdGVtX2RlZnNcclxub3BlbiBFY3NcclxuXHJcblxyXG5cclxuXHJcbmxldCBjcmVhdGUgbmFtZSB4IHkgeHQgeXQ9XHJcbmxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxyXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fTtcclxuICBUZWxlcG9ydC5zZXQgZSB7IHggPSB4dDsgeSA9IHl0fTtcclxuICBCb3guc2V0IGUgeyB3aWR0aCA9IDQwOyBoZWlnaHQgPSA0MH07XHJcbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm87XHJcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcclxuICBOYW1lLnNldCBlIG5hbWU7XHJcbiAgU3VyZmFjZS5zZXQgZSBUZXh0dXJlLmJsYWNrO1xyXG4gIFByaW9yaXR5LnNldCBlIDE7XHJcbiAgXHJcbiAgKCogc3lzdGVtcyAqKVxyXG4gIERyYXdfUy5yZWdpc3RlciBlO1xyXG4gIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XHJcbiAgZVxyXG5cclxuXHJcbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcbm9wZW4gRWNzXG5cblxubGV0IGNyZWF0ZSBuYW1lIHBvc1ggcG9zWSB2ZWxYIHZlbFkgaW1nPSAoKk9uIGNob2lzaXQgbGEgZGlyZWN0aW9uIHF1J2lsIHByZW5kIHF1YW5kIGlsIGVzdCBjcsOpw6kqKVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgbGV0IGFuaW0gPSBUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nIDMgNCAxNjAgMTYwIDQwIDQwIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHBvc1g7IHkgPSBwb3NZfTtcbiAgVmVsb2NpdHkuc2V0IGUgeyB4ID0gdmVsWDsgeSA9IHZlbFl9O1xuICBNYXNzLnNldCBlIDEwLjA7XG4gIEJveC5zZXQgZSB7d2lkdGggPSA0MDsgaGVpZ2h0PTQwIH07XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwibW92ZVwiICgwLDMpIGFuaW07XG4gIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJtb3ZlXCI7XG4gIFByaW9yaXR5LnNldCBlIDI7XG5cbiAgKCogc3lzdGVtcyAqKVxuICBcbiAgZVxuXG5sZXQgcmVzZXQgZSB4IHkgPSBcblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geSB9XG5cbmxldCBzdG9wIGUgPVxuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVyb1xuICAiLCJcbm9wZW4gRWNzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIENvbXBvbmVudF9kZWZzXG50eXBlIHJvb20gPSB7IFxuICBpbmRleCA6IGludDtcbiAgaWQ6IEVudGl0eS50O1xuICBlbm5lbWllcyA6IEVudGl0eS50IGxpc3Q7XG4gIHZhbHVlIDogaW50IGFycmF5IGFycmF5O1xuICBkb29ycyA6IChib29sKmludCkgYXJyYXk7XG5cbn1cblxudHlwZSB0ID0ge1xuICBwbGF5ZXIgOiBFbnRpdHkudDtcbiAgXG4gIGlzUGxheWluZyA6IGJvb2w7XG4gIGN1cnJlbnRSb29tIDogcm9vbTtcbiAgbWFwIDogcm9vbSBhcnJheTtcbiAgZG9vcnNfZW50aXR5IDogRW50aXR5LnQgYXJyYXk7XG59XG5cbmxldCBzdGF0ZSA9IHJlZiB7XG4gIHBsYXllciA9IEVudGl0eS5kdW1teTtcbiAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgY3VycmVudFJvb20gPSB7aWQ9RW50aXR5LmR1bW15O2VubmVtaWVzPVtdO2luZGV4PSgtMSk7dmFsdWU9W3x8XTtkb29ycz1bfHxdfTtcbiAgbWFwID0gW3x8XTtcbiAgZG9vcnNfZW50aXR5ID0gW3xFbnRpdHkuZHVtbXk7RW50aXR5LmR1bW15O0VudGl0eS5kdW1teTtFbnRpdHkuZHVtbXl8XTtcbn1cblxuXG5cbmxldCBnZXRfcGxheWVyICgpID0gIXN0YXRlLnBsYXllclxubGV0IGdldF9zdGF0dXMgKCk9ICFzdGF0ZS5pc1BsYXlpbmdcblxuXG5sZXQgZG9vcl9mIG4gPVxuICBtYXRjaCBuIHdpdGggXG4gIDAgLT4gMlxuICB8MSAtPiAzXG4gIHwyIC0+IDBcbiAgfDMgLT4gMVxuICB8XyAtPiAtMVxuXG5sZXQgcmFuZG9tX2Rvb3Igcm9vbSA9XG4gIFJhbmRvbS5zZWxmX2luaXQgKCk7XG4gIGxldCBsaXN0ID0gcmVmIFtdaW5cbiAgICAgZm9yIGkgPSAwIHRvIChBcnJheS5sZW5ndGggcm9vbS5kb29ycyktMSBkb1xuICAgICAgbGV0IGRvb3IgPSBBcnJheS5nZXQgcm9vbS5kb29ycyBpIGluXG4gICAgICBpZiAoZnN0IGRvb3IgPT0gZmFsc2UpIHRoZW4gbGlzdCA6PSBpOjooIWxpc3QpO1xuICAgICBkb25lO1xuICAgIExpc3QubnRoICFsaXN0IChSYW5kb20uaW50IChMaXN0Lmxlbmd0aCAhbGlzdCkpXG5cbmxldCBwYXRoIG0gPSBcblxuICBsZXQgcmVjIHBhdGhfYXV4IG1hcCByb29tID1cbiAgICBsZXQgZG9vciA9IHJhbmRvbV9kb29yIHJvb20gaW5cbiAgICBtYXRjaCBtYXAgd2l0aCBcbiAgICB8W10gLT4gW11cbiAgICB8W3hdIC0+IFxuICAgICAgQXJyYXkuc2V0IHJvb20uZG9vcnMgZG9vciAgKHRydWUseC5pbmRleCk7XG4gICAgICBBcnJheS5zZXQgeC5kb29ycyAoZG9vcl9mIGRvb3IpICh0cnVlLHJvb20uaW5kZXgpO1xuICAgICAgZm9yIGkgPSAwIHRvIChBcnJheS5sZW5ndGggcm9vbS5kb29ycyktMSBkb1xuICAgICAgICBsZXQgYixpbmQgPSBBcnJheS5nZXQgcm9vbS5kb29ycyBpIGluXG4gICAgICAgIEdmeC5kZWJ1ZyAoRm9ybWF0LmFzcHJpbnRmIFwiaW5kZXggJWQgZG9vciAgJWQgJWJcInJvb20uaW5kZXggIGluZCBiKTtcbiAgICAgICBkb25lO1xuICAgICAgZm9yIGkgPSAwIHRvIChBcnJheS5sZW5ndGggeC5kb29ycyktMSBkb1xuICAgICAgICBsZXQgYixpbmQgPSBBcnJheS5nZXQgeC5kb29ycyBpIGluXG4gICAgICAgIEdmeC5kZWJ1ZyAoRm9ybWF0LmFzcHJpbnRmIFwiaW5kZXggJWQgZG9vciAgJWQgJWJcInguaW5kZXggIGluZCBiKTtcbiAgICAgICBkb25lO1xuICAgICAgcm9vbTo6W3hdXG4gICAgfCB4Ojp0YWlsIC0+IFxuICAgICAgICBBcnJheS5zZXQgcm9vbS5kb29ycyBkb29yICAodHJ1ZSx4LmluZGV4KTtcbiAgICAgICAgQXJyYXkuc2V0IHguZG9vcnMgKGRvb3JfZiBkb29yKSAodHJ1ZSxyb29tLmluZGV4KTtcbiAgICAgICAgZm9yIGkgPSAwIHRvIChBcnJheS5sZW5ndGggcm9vbS5kb29ycyktMSBkb1xuICAgICAgICAgIGxldCBiLGluZCA9IEFycmF5LmdldCByb29tLmRvb3JzIGkgaW5cbiAgICAgICAgICBHZnguZGVidWcgKEZvcm1hdC5hc3ByaW50ZiBcImluZGV4ICVkIGRvb3IgJWQgJWJcIiByb29tLmluZGV4IGluZCBiKTtcbiAgICAgICAgIGRvbmU7XG4gICAgICAgIHJvb206OihwYXRoX2F1eCB0YWlsIHgpIFxuXG4gIGluXG4gIHBhdGhfYXV4IChMaXN0LnRsIG0pIChMaXN0LmhkIG0pIFxuXG4gIGxldCBnZW5lcmF0ZV9tYXAgZCBwIG4gcGxheWVyX2ltZz1cbiAgbGV0IG1hcCA9IExpc3QuaW5pdCBuIChmdW4gZSAtPiBcbiAgICBsZXQgZW50aXR5ID0gTWFwLmNyZWF0ZSBcIm1hcFwiIDAuIDgwLiBwIGQgNDAgaW5cbiAgICBsZXQgZTEgPSBFbmVteS5jcmVhdGUgXCJiYWxsXzFcIiAyMDAuIDI0MC4gMC4gMTAwLiBwbGF5ZXJfaW1nIGluXG4gICAgbGV0IGVubmVtaWVzID0gW2UxXSBpblxuICAgIHtpZD1lbnRpdHk7ZW5uZW1pZXM9ZW5uZW1pZXM7aW5kZXg9ZTt2YWx1ZT1kO2Rvb3JzPShBcnJheS5pbml0IDQgKGZ1biBfZSAtPiAoZmFsc2UsLTEpKSl9IFxuICAgIClpblxuICAgIEFycmF5Lm9mX2xpc3QgKHBhdGggbWFwKVxuICBcbiAgICBsZXQgZGlzYWJsZV9kb29yIGUgPVxuICAgICAgRHJhd19TLnVucmVnaXN0ZXIgZTtcbiAgICAgIENvbGxpc2lvbl9TLnVucmVnaXN0ZXIgZTtcbiAgICAgICgpXG5cbiAgICAgIGxldCBlbmFibGVfZG9vciBlID1cbiAgICAgICAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gICAgICAgIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gICAgICAgICgpXG5cbiAgICBsZXQgY2hhbmdlX2Rvb3IgKCkgPVxuICAgICAgbGV0IGQgPSAhc3RhdGUuY3VycmVudFJvb20uZG9vcnMgaW5cbiAgICAgIGxldCBkX2UgPSAhc3RhdGUuZG9vcnNfZW50aXR5IGluXG4gICAgICBmb3IgaSA9IDAgdG8gMyBkb1xuICAgICAgICBpZiAoZnN0IChBcnJheS5nZXQgZCBpKSkgdGhlbiBlbmFibGVfZG9vciAoQXJyYXkuZ2V0IGRfZSBpKVxuICAgICAgICBlbHNlIGRpc2FibGVfZG9vciAoQXJyYXkuZ2V0IGRfZSBpKVxuICAgICAgZG9uZVxuXG4gICAgICBsZXQgZ2V0X2Rvb3IgbmFtZSA9IFxuICAgICAgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJsZWZ0XCIpPT0wIHRoZW4gKEFycmF5LmdldCAhc3RhdGUuY3VycmVudFJvb20uZG9vcnMgMClcbiAgICAgIGVsc2UgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJ0b3BcIik9PTAgdGhlbiAoQXJyYXkuZ2V0ICFzdGF0ZS5jdXJyZW50Um9vbS5kb29ycyAxKVxuICAgICAgZWxzZSBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInJpZ2h0XCIpPT0wIHRoZW4oQXJyYXkuZ2V0ICFzdGF0ZS5jdXJyZW50Um9vbS5kb29ycyAyKVxuICAgICAgZWxzZSBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcImJvdHRvbVwiKT09MCB0aGVuKEFycmF5LmdldCAhc3RhdGUuY3VycmVudFJvb20uZG9vcnMgMylcbiAgICAgIGVsc2UgKGZhbHNlLDEpXG5cbiAgICAgIGxldCBsb2FkX2VubmVtaWUgZSA9XG4gICAgICAgIENvbGxpc2lvbl9TLnJlZ2lzdGVyIGU7XG4gICAgICAgIENvbnRyb2xfUy5yZWdpc3RlciBlO1xuICAgICAgICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgICAgICAgTW92ZV9TLnJlZ2lzdGVyIGVcblxuICAgICAgbGV0IHVubG9hZF9lbm5lbWllIGUgPVxuICAgICAgICBDb2xsaXNpb25fUy51bnJlZ2lzdGVyIGU7XG4gICAgICAgIENvbnRyb2xfUy51bnJlZ2lzdGVyIGU7XG4gICAgICAgIERyYXdfUy51bnJlZ2lzdGVyIGU7XG4gICAgICAgIE1vdmVfUy51bnJlZ2lzdGVyIGVcbiAgICAgICAgXG4gICAgICBsZXQgY2hhbmdlX3Jvb20gZSA9XG4gICAgICAgIGxldCBuYW1lID0gTmFtZS5nZXQgZSBpblxuICAgICAgICBsZXQgciA9IHNuZCAoZ2V0X2Rvb3IgbmFtZSkgaW5cbiAgICAgICAgbGV0IHJvb20gPSAoQXJyYXkuZ2V0ICFzdGF0ZS5tYXAgcilpblxuICAgICAgICBsZXQgb2xkX3Jvb20gPSAhc3RhdGUuY3VycmVudFJvb20gaW5cbiAgICAgICAgR2Z4LmRlYnVnIChGb3JtYXQuYXNwcmludGYgXCJwbGF5ICVkICVkXCIgciAoQXJyYXkubGVuZ3RoICFzdGF0ZS5tYXApKTtcbiAgICAgICAgc3RhdGUgOj0geyAhc3RhdGUgd2l0aCBjdXJyZW50Um9vbSA9IHJvb207fTtcbiAgICAgICAgTGlzdC5pdGVyIChmdW4gZSAtPiB1bmxvYWRfZW5uZW1pZSBlKSBvbGRfcm9vbS5lbm5lbWllcztcbiAgICAgICAgTGlzdC5pdGVyIChmdW4gZSAtPiBsb2FkX2VubmVtaWUgZSkgcm9vbS5lbm5lbWllcztcbiAgICAgICAgY2hhbmdlX2Rvb3IgKCkgICAgICAgIFxuICAgIFxuICBsZXQgY29sbGlzaW9uIGRvb3IgZSA9IFxuICAgIGxldCBuYW1lID0gTmFtZS5nZXQgZSBpblxuICAgIGlmIChTdHJpbmcuY29tcGFyZSBuYW1lIFwicGxheWVyXCIpID09IDAgdGhlbiBiZWdpblxuICAgICAgY2hhbmdlX3Jvb20gZG9vcjtcbiAgICAgIFBvc2l0aW9uLnNldCBlIChUZWxlcG9ydC5nZXQgZG9vcik7XG4gICAgICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVybztcbiAgICBlbmRcblxuICAgIGxldCBpbml0IHBlMSBtYXA9XG4gICAgICBsZXQgZG9vcnNJbml0ID0gW3woRG9vci5jcmVhdGUgXCJsZWZ0XCIgNDAuIDMyMC4gNjYwLiAzMjAuKTsoRG9vci5jcmVhdGUgXCJ0b3BcIiA0MDAuIDEyMC4gNDAwLiA1MDAuKTsoRG9vci5jcmVhdGUgXCJyaWdodFwiIDcyMC4gMzIwLiAxMDAuIDMyMC4pOyhEb29yLmNyZWF0ZSBcImJvdHRvbVwiIDQwMC4gNTYwLiA0MDAuIDE4MC4pIHxdaW5cbiAgICAgIEFycmF5Lml0ZXIgKGZ1biBlIC0+IENvbGxpc2lvblJlc29sdmVyLnNldCBlIGNvbGxpc2lvbikgZG9vcnNJbml0O1xuICAgICAgc3RhdGUgOj0geyAhc3RhdGUgd2l0aCBwbGF5ZXIgPSBwZTE7IG1hcCA9IG1hcDtjdXJyZW50Um9vbT0oQXJyYXkuZ2V0IG1hcCAwKTtkb29yc19lbnRpdHkgPSBkb29yc0luaXR9O1xuICAgICAgRHJhd19TLnJlZ2lzdGVyICFzdGF0ZS5jdXJyZW50Um9vbS5pZDtcbiAgICAgIExpc3QuaXRlciAoZnVuIGUgLT4gbG9hZF9lbm5lbWllIGUpICFzdGF0ZS5jdXJyZW50Um9vbS5lbm5lbWllcztcbiAgICAgIGNoYW5nZV9kb29yICgpXG5cbiAgICBcblxuXG5cblxuXG5cbiIsIlxyXG5cclxuXHJcbmxldCBwbGF5ZXJfaW1nID0gR2Z4LmxvYWRfaW1hZ2UoXCJzcmMvaW1nL2NoYXJTaGVldC5wbmdcIilcclxuKCogKilcclxubGV0IGluaXRfZ2FtZSBfZHQgPSBcclxuICBTeXN0ZW0uaW5pdF9hbGwgKCk7XHJcbiAgR2Z4LmRlYnVnIChGb3JtYXQuYXNwcmludGYgXCIgaW5pdFwiKTtcclxuICBcclxuICBsZXQgcGxheWVyID0gUGxheWVyLmNyZWF0ZSBcInBsYXllclwiIDgwLiAyNDAuIHBsYXllcl9pbWcgaW5cclxuIFxyXG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5RG93biBcInpcIikgKGZ1biAoKSAtPiBQbGF5ZXIubW92ZV91cCBwbGF5ZXIpO1xyXG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5RG93biBcInNcIikgKGZ1biAoKSAtPiBQbGF5ZXIubW92ZV9kb3duIHBsYXllcik7XHJcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlEb3duIFwicVwiKSAoZnVuICgpIC0+IFBsYXllci5tb3ZlX2xlZnQgcGxheWVyKTtcclxuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleURvd24gXCJkXCIpIChmdW4gKCkgLT4gUGxheWVyLm1vdmVfcmlnaHQgcGxheWVyKTtcclxuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleVVwIFwielwiKSAoZnVuICgpIC0+IFBsYXllci5zdG9wIHBsYXllcik7XHJcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlVcCBcInNcIikgKGZ1biAoKSAtPiBQbGF5ZXIuc3RvcCBwbGF5ZXIpO1xyXG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5VXAgXCJxXCIpIChmdW4gKCkgLT4gUGxheWVyLnN0b3AgcGxheWVyKTtcclxuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleVVwIFwiZFwiKSAoZnVuICgpIC0+IFBsYXllci5zdG9wIHBsYXllcik7XHJcbiAgbGV0IG1hcCA9IEdhbWVfc3RhdGUuZ2VuZXJhdGVfbWFwIEdsb2JhbC5tYXAgR2xvYmFsLnBhbGV0dGUgNSBwbGF5ZXJfaW1nIGluXHJcbiAgXHJcbiAgR2FtZV9zdGF0ZS5pbml0IHBsYXllciBtYXA7XHJcbiAgZmFsc2VcclxuXHJcbmxldCBwbGF5X2dhbWUgZHQgPVxyXG4gICgqIFVwZGF0ZSBhbGwgc3lzdGVtcyAqKVxyXG4gIEdmeC5kZWJ1ZyAoRm9ybWF0LmFzcHJpbnRmIFwiIHBsYXlcIik7XHJcbiAgU3lzdGVtLnVwZGF0ZV9hbGwgZHQ7XHJcbiAgaWYgKG5vdChHYW1lX3N0YXRlLmdldF9zdGF0dXMgKCkpKSB0aGVuIGZhbHNlXHJcbiAgZWxzZSB0cnVlXHJcblxyXG5sZXQgZW5kX2dhbWUgX2R0ID1cclxuR2Z4LmRlYnVnIChGb3JtYXQuYXNwcmludGYgXCIgZW5kXCIpO1xyXG4gZmFsc2UgXHJcbiBcclxubGV0IGxvYWRfZ3JhcGhpY3MgX2R0ID0gXHJcbiAgaWYgKChHZnguaW1hZ2VfcmVhZHkgcGxheWVyX2ltZykpIHRoZW4gZmFsc2VcclxuICBlbHNlIHRydWVcclxuXHJcbmxldCBjaGFpbl9mdW5jdGlvbnMgZl9saXN0ID0gXHJcbiAgbGV0IGZ1bnMgPSByZWYgZl9saXN0IGluXHJcbiAgZnVuIGR0IC0+IG1hdGNoICFmdW5zIHdpdGhcclxuICAgICAgICAgICAgW10gLT4gZmFsc2VcclxuICAgICAgICAgICAgfCBmIDo6IGxsIC0+IFxyXG4gICAgICAgICAgICAgIGlmIGYgZHQgdGhlblxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgIGVsc2UgYmVnaW5cclxuICAgICAgICAgICAgICAgIGZ1bnMgOj0gbGw7XHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgZW5kXHJcblxyXG5sZXQgcnVuICgpID0gIFxyXG4gIGxldCBtID0gY2hhaW5fZnVuY3Rpb25zIFtsb2FkX2dyYXBoaWNzO2luaXRfZ2FtZTtwbGF5X2dhbWU7ZW5kX2dhbWVdaW5cclxuICBHZngubWFpbl9sb29wIG1cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICJdfQ==
