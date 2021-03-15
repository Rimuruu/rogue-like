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
     cst_ennemy=caml_string_of_jsbytes("ennemy"),
     cst_player=caml_string_of_jsbytes("player"),
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
     cst_player$0=caml_string_of_jsbytes("player"),
     cst_left=caml_string_of_jsbytes("left"),
     cst_top=caml_string_of_jsbytes("top"),
     cst_right=caml_string_of_jsbytes("right"),
     cst_bottom=caml_string_of_jsbytes("bottom"),
     cst_map=caml_string_of_jsbytes("map"),
     cst_ennemy$0=caml_string_of_jsbytes("ennemy"),
     cst_player$1=caml_string_of_jsbytes("player"),
     cst_src_img_charSheet_png=caml_string_of_jsbytes("src/img/charSheet.png"),
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib=global_data.Stdlib,
     Gfx=global_data.Gfx,
     Stdlib_array=global_data.Stdlib__array,
     Ecs_Component=global_data.Ecs__Component,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_option=global_data.Stdlib__option,
     Stdlib_string=global_data.Stdlib__string,
     Ecs_Entity=global_data.Ecs__Entity,
     Stdlib_random=global_data.Stdlib__random,
     Game=[0];
    caml_register_global(135,Game,"Game__");
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
     _e_=[254,-100.,0.],
     _f_=[254,100.,0.],
     _g_=[254,0.,-100.],
     _h_=[254,0.,100.],
     _q_=[254,-200.,0.],
     _p_=[254,200.,0.],
     _o_=[254,0.,200.],
     _n_=[254,0.,-200.],
     _i_=[0,40,40],
     _j_=[0,0,3],
     _k_=[0,3,6],
     _l_=[0,6,9],
     _m_=[0,9,12],
     _r_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _s_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _t_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _u_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _v_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _w_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _x_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _y_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _z_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _A_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _B_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _C_=[0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
     _D_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _E_=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     _K_=[0,40,40],
     _L_=[0,40,40],
     _M_=[0,0,3],
     _S_=
      [0,
       [11,caml_string_of_jsbytes("play "),[4,0,0,0,[12,32,[4,0,0,0,0]]]],
       caml_string_of_jsbytes("play %d %d")],
     _R_=[0,0,1],
     _Q_=[0,0,-1],
     _N_=
      [0,
       [11,
        caml_string_of_jsbytes("index "),
        [4,
         0,
         0,
         0,
         [11,caml_string_of_jsbytes(" door "),[4,0,0,0,[12,32,[9,0,0]]]]]],
       caml_string_of_jsbytes("index %d door %d %b")],
     _P_=
      [0,
       [11,
        caml_string_of_jsbytes("index "),
        [4,
         0,
         0,
         0,
         [11,caml_string_of_jsbytes(" door  "),[4,0,0,0,[12,32,[9,0,0]]]]]],
       caml_string_of_jsbytes("index %d door  %d %b")],
     _O_=
      [0,
       [11,
        caml_string_of_jsbytes("index "),
        [4,
         0,
         0,
         0,
         [11,caml_string_of_jsbytes(" door  "),[4,0,0,0,[12,32,[9,0,0]]]]]],
       caml_string_of_jsbytes("index %d door  %d %b")],
     _ab_=
      [0,[11,caml_string_of_jsbytes(" end"),0],caml_string_of_jsbytes(" end")],
     _aa_=
      [0,
       [11,caml_string_of_jsbytes(" play"),0],
       caml_string_of_jsbytes(" play")],
     _T_=
      [0,
       [11,caml_string_of_jsbytes(" init"),0],
       caml_string_of_jsbytes(" init")],
     _U_=[1,caml_string_of_jsbytes("z")],
     _V_=[1,caml_string_of_jsbytes("s")],
     _W_=[1,caml_string_of_jsbytes("q")],
     _X_=[1,caml_string_of_jsbytes("d")],
     _Y_=[0,caml_string_of_jsbytes("z")],
     _Z_=[0,caml_string_of_jsbytes("s")],
     ___=[0,caml_string_of_jsbytes("q")],
     _$_=[0,caml_string_of_jsbytes("d")];
    function add(a,b){return [254,a[1] + b[1],a[2] + b[2]]}
    function sub(a,b){return [254,a[1] - b[1],a[2] - b[2]]}
    function mult(k,a){return [254,k * a[1],k * a[2]]}
    function dot(a,b){return a[1] * b[1] + a[2] * b[2]}
    function norm(a){return Math.sqrt(dot(a,a))}
    function normalize(a){return mult(1. / norm(a),a)}
    function pp(fmt,a)
     {return caml_call4(Stdlib_format[123],fmt,_a_,a[1],a[2])}
    function is_zero(v)
     {var _bW_=v[1] == 0.?1:0,_bX_=_bW_?v[2] == 0.?1:0:_bW_;return _bX_}
    var Game_Vector=[0,add,sub,mult,dot,norm,normalize,pp,zero,is_zero];
    caml_register_global(137,Game_Vector,"Game__Vector");
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
     {function _bM_(i){return caml_call2(Gfx[5],dw,dh)}
      var
       array_frame=caml_call2(Stdlib_array[2],caml_mul(num_w,num_h),_bM_),
       _bO_=num_h - 1 | 0,
       _bN_=0;
      if(! (_bO_ < 0))
       {var y=_bN_;
        for(;;)
         {var _bQ_=num_w - 1 | 0,_bP_=0;
          if(! (_bQ_ < 0))
           {var x=_bP_;
            for(;;)
             {var
               _bS_=
                caml_call3
                 (Stdlib_format[127],_b_,caml_mul(x,sw),caml_mul(y,sh));
              caml_call1(Gfx[24],_bS_);
              var
               _bT_=caml_mul(y,num_w) + x | 0,
               _bU_=caml_check_bound(array_frame,_bT_)[1 + _bT_];
              caml_call10
               (Gfx[18],
                _bU_,
                img,
                caml_mul(x,sw),
                caml_mul(y,sh),
                sw,
                sh,
                0,
                0,
                dw,
                dh);
              var _bV_=x + 1 | 0;
              if(_bQ_ !== x){var x=_bV_;continue}
              break}}
          var _bR_=y + 1 | 0;
          if(_bO_ !== y){var y=_bR_;continue}
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
       _bG_=sizeX - 1 | 0,
       _bF_=0;
      if(! (_bG_ < 0))
       {var y=_bF_;
        for(;;)
         {var _bI_=sizeY - 1 | 0,_bH_=0;
          if(! (_bI_ < 0))
           {var x=_bH_;
            for(;;)
             {tile[1]
              =
              caml_check_bound(caml_check_bound(tilemap[2],y)[1 + y],x)[1 + x];
              var _bK_=tile[1];
              color[1] = caml_check_bound(tilemap[1],_bK_)[1 + _bK_];
              caml_call6
               (Gfx[12],
                ctx,
                caml_mul(x,size) + posX | 0,
                caml_mul(y,size) + posY | 0,
                size,
                size,
                color[1]);
              var _bL_=x + 1 | 0;
              if(_bI_ !== x){var x=_bL_;continue}
              break}}
          var _bJ_=y + 1 | 0;
          if(_bG_ !== y){var y=_bJ_;continue}
          break}}
      return 0}
    function get_idle(idleName,anim)
     {try
       {var _bD_=caml_call2(Stdlib_hashtbl[6],anim[2],idleName);return _bD_}
      catch(_bE_)
       {_bE_ = caml_wrap_exception(_bE_);
        if(_bE_ === Stdlib[8])throw [0,MissingIdle,idleName];
        throw _bE_}}
    function play_idle(anim,idleName)
     {if(2 === anim[0])
       {var a=anim[1],match=get_idle(idleName,a),fin=match[2],deb=match[1];
        a[4] = deb;
        a[3] = [0,deb,fin];
        return 0}
      return 0}
    function get_frame(anim,dir)
     {var _bC_=anim[4],currentCase=caml_check_bound(anim[1],_bC_)[1 + _bC_];
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
    caml_register_global(142,Game_Texture,"Game__Texture");
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
     {var _by_=v[1] < 0.?1:0;
      if(_by_)
       {var _bz_=0. < v[1] + b[1]?1:0;
        if(_bz_)
         var _bA_=v[2] < 0.?1:0,_bB_=_bA_?0. < v[2] + b[2]?1:0:_bA_;
        else
         var _bB_=_bz_}
      else
       var _bB_=_by_;
      return _bB_}
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
    caml_register_global(143,Game_Rect,"Game__Rect");
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
    caml_register_global(145,Game_Component_defs,"Game__Component_defs");
    function init(param){return 0}
    function update(dt,el)
     {function _bo_(i,e1)
       {function _bp_(j,e2)
         {var _bq_=i < j?1:0;
          if(_bq_)
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
             _br_=has_origin(s_pos,s_rect);
            if(_br_)
             var _bs_=is_zero(v1),_bt_=_bs_?is_zero(v2):_bs_,_bu_=1 - _bt_;
            else
             var _bu_=_br_;
            if(_bu_)
             {if(caml_call1(CollisionResolver[4],e1))
               caml_call2(caml_call1(CollisionResolver[2],e1),e1,e2);
              var _bv_=caml_call1(CollisionResolver[4],e2);
              if(_bv_)
               return caml_call2(caml_call1(CollisionResolver[2],e2),e2,e1);
              var _bw_=_bv_}
            else
             var _bw_=_bu_;
            var _bx_=_bw_}
          else
           var _bx_=_bq_;
          return _bx_}
        return caml_call2(Stdlib_list[16],_bp_,el)}
      return caml_call2(Stdlib_list[16],_bo_,el)}
    var Game_Collision_system=[0,init,update];
    caml_register_global(147,Game_Collision_system,"Game__Collision_system");
    var commands=caml_call2(Stdlib_hashtbl[1],0,17);
    function register_command(ev,f)
     {var _bn_=0 !== ev?1:0;
      return _bn_?caml_call3(Stdlib_hashtbl[5],commands,ev,f):_bn_}
    function get_commands(ev)
     {return caml_call2(Stdlib_hashtbl[8],commands,ev)}
    var Game_Input_handler=[0,register_command,get_commands];
    caml_register_global(148,Game_Input_handler,"Game__Input_handler");
    function init$0(param){return 0}
    function update$0(dt,el)
     {for(;;)
       {var ev=caml_call1(Gfx[21],0);
        if(typeof ev === "number")return 0;
        var _bl_=get_commands(ev),_bm_=function(f){return caml_call1(f,0)};
        caml_call2(Stdlib_list[15],_bm_,_bl_);
        continue}}
    var Game_Control_system=[0,init$0,update$0];
    caml_register_global(149,Game_Control_system,"Game__Control_system");
    var ctx=[0,0];
    function init$1(param)
     {var match=caml_call1(Gfx[4],cst_canvas),c=match[2];
      ctx[1] = [0,c];
      return 0}
    function update$1(dt,el)
     {var ctx$0=caml_call1(Stdlib_option[4],ctx[1]);
      caml_call5(Gfx[13],ctx$0,0,0,800,640);
      function _bc_(a,b)
       {var aP=caml_call1(Priority[2],a),bP=caml_call1(Priority[2],b);
        return aP - bP | 0}
      var list_sort=caml_call2(Stdlib_list[49],_bc_,el);
      function _bd_(e)
       {var pos=caml_call1(Position[2],e);
        try {var _bj_=caml_call1(Box[2],e),box=_bj_}catch(_bk_){var box=_d_}
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
            _be_=box[2],
            _bf_=box[1],
            _bg_=pos[2] | 0,
            _bh_=pos[1] | 0,
            _bi_=get_frame(anim,speed[1] | 0);
           return caml_call6(Gfx[9],ctx$0,_bi_,_bh_,_bg_,_bf_,_be_);
          default:
           var tilemap=color[1];
           return draw_tilemap(tilemap,ctx$0,pos[1] | 0,pos[2] | 0)}}
      return caml_call2(Stdlib_list[15],_bd_,list_sort)}
    var Game_Draw_system=[0,ctx,init$1,update$1];
    caml_register_global(151,Game_Draw_system,"Game__Draw_system");
    function init$2(param){return 0}
    var time=[0,0.];
    function move_to(e1,e2)
     {var
       posE1=caml_call1(Position[2],e1),
       posE2=caml_call1(Position[2],e2),
       distX=posE1[1] - posE2[1],
       distY=posE1[2] - posE2[2];
      return Math.pow(distY,2.) <= Math.pow(distX,2.)
              ?0. <= distX
                ?caml_call2(Velocity[1],e1,_e_)
                :caml_call2(Velocity[1],e1,_f_)
              :0. <= distY
                ?caml_call2(Velocity[1],e1,_g_)
                :caml_call2(Velocity[1],e1,_h_)}
    function update$2(dt,el)
     {var
       delta_t=
        caml_call2(Stdlib[16],0.0166666666666666664,1000. * (dt - time[1])),
       _a__=caml_call1(Name[3],0);
      function _a$_(kv)
       {return 0 === caml_call2(Stdlib_string[33],kv[2],cst_player)?1:0}
      var player=caml_call2(Stdlib_list[34],_a$_,_a__)[1];
      time[1] = dt;
      function _ba_(e)
       {var _bb_=caml_call1(Name[2],e);
        if(0 === caml_call2(Stdlib_string[33],_bb_,cst_ennemy))
         move_to(e,player);
        var
         pos=caml_call1(Position[2],e),
         speed=mult(delta_t,caml_call1(Velocity[2],e));
        return caml_call2
                (Position[1],e,[254,pos[1] + speed[1],pos[2] + speed[2]])}
      return caml_call2(Stdlib_list[15],_ba_,el)}
    var Game_Move_system=[0,init$2,time,move_to,update$2];
    caml_register_global(153,Game_Move_system,"Game__Move_system");
    function Make(T)
     {var elem_list=[0,0],elem_table=caml_call1(Ecs_Entity[7][1],16);
      function register(e)
       {var
         _a8_=1 - caml_call2(Ecs_Entity[7][11],elem_table,e),
         _a9_=
          _a8_
           ?(caml_call3(Ecs_Entity[7][5],elem_table,e,0),
             elem_list[1]
             =
             [0,e,elem_list[1]],
             0)
           :_a8_;
        return _a9_}
      function unregister(e)
       {caml_call2(Ecs_Entity[7][6],elem_table,e);
        var _a6_=elem_list[1];
        function _a7_(x){return runtime.caml_notequal(x,e)}
        elem_list[1] = caml_call2(Stdlib_list[36],_a7_,_a6_);
        return 0}
      function init(param){return caml_call1(T[1],0)}
      function update(dt){return caml_call2(T[2],dt,elem_list[1])}
      return [0,init,update,register,unregister]}
    var systems=[0,0];
    function register(m){systems[1] = [0,m,systems[1]];return 0}
    function init_all(param)
     {var _a4_=systems[1];
      function _a5_(m){return caml_call1(m[1],0)}
      return caml_call2(Stdlib_list[15],_a5_,_a4_)}
    function update_all(dt)
     {var _a2_=systems[1];
      function _a3_(m){return caml_call1(m[2],dt)}
      return caml_call2(Stdlib_list[15],_a3_,_a2_)}
    var Game_System=[0,Make,systems,register,init_all,update_all];
    caml_register_global(155,Game_System,"Game__System");
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
    caml_register_global(156,Game_System_defs,"Game__System_defs");
    function create(name,x,y,img)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_i_);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_front_walk,_j_,anim);
      create_idle(cst_right_walk,_k_,anim);
      create_idle(cst_back_walk,_l_,anim);
      create_idle(cst_left_walk,_m_,anim);
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
      return caml_call2(Velocity[1],e,_n_)}
    function move_down(e)
     {var anim=caml_call1(Surface[2],e);
      play_idle(anim,cst_front_walk$1);
      return caml_call2(Velocity[1],e,_o_)}
    function move_right(e)
     {var anim=caml_call1(Surface[2],e);
      play_idle(anim,cst_right_walk$0);
      return caml_call2(Velocity[1],e,_p_)}
    function move_left(e)
     {var anim=caml_call1(Surface[2],e);
      play_idle(anim,cst_left_walk$0);
      return caml_call2(Velocity[1],e,_q_)}
    function stop(e){return caml_call2(Velocity[1],e,zero)}
    var
     Game_Player=
      [0,create,reset,move_up,move_down,move_right,move_left,stop];
    caml_register_global(157,Game_Player,"Game__Player");
    function create$0(name,x,y,palette,map,size)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      var _a1_=create_tilemap(palette,map,size);
      caml_call2(Surface[1],e,_a1_);
      caml_call2(Priority[1],e,0);
      return e}
    var Game_Map=[0,create$0];
    caml_register_global(158,Game_Map,"Game__Map");
    var
     map=
      [0,
       _E_.slice(),
       _D_.slice(),
       _C_.slice(),
       _B_.slice(),
       _A_.slice(),
       _z_.slice(),
       _y_.slice(),
       _x_.slice(),
       _w_.slice(),
       _v_.slice(),
       _u_.slice(),
       _t_.slice(),
       _s_.slice(),
       _r_.slice()],
     _F_=caml_call4(Gfx[11],255,0,0,255),
     _G_=caml_call4(Gfx[11],0,255,0,255),
     _H_=caml_call4(Gfx[11],0,0,255,255),
     _I_=caml_call4(Gfx[11],61,61,61,255),
     _J_=caml_call4(Gfx[11],130,130,130,255),
     palette=[0,caml_call4(Gfx[11],0,0,0,255),_J_,_I_,_H_,_G_,_F_],
     Game_Global=[0,map,palette,doorTop,doorBottom,doorLeft,doorRight];
    caml_register_global(159,Game_Global,"Game__Global");
    function create$1(name,x,y,xt,yt)
     {var e=caml_call1(Ecs_Entity[1],0);
      caml_call2(Position[1],e,[254,x,y]);
      caml_call2(Teleport[1],e,[254,xt,yt]);
      caml_call2(Box[1],e,_K_);
      caml_call2(Velocity[1],e,zero);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,black);
      caml_call2(Priority[1],e,1);
      caml_call1(Draw_S[3],e);
      caml_call1(Collision_S[3],e);
      return e}
    var Game_Door=[0,create$1];
    caml_register_global(160,Game_Door,"Game__Door");
    function create$2(name,posX,posY,velX,velY,img)
     {var
       e=caml_call1(Ecs_Entity[1],0),
       anim=create_animation(img,3,4,160,160,40,40);
      caml_call2(Position[1],e,[254,posX,posY]);
      caml_call2(Velocity[1],e,[254,velX,velY]);
      caml_call2(Mass[1],e,Stdlib[22]);
      caml_call2(Box[1],e,_L_);
      caml_call2(Name[1],e,name);
      caml_call2(Surface[1],e,anim);
      create_idle(cst_move,_M_,anim);
      play_idle(anim,cst_move$0);
      caml_call2(Priority[1],e,2);
      return e}
    function reset$0(e,x,y){return caml_call2(Position[1],e,[254,x,y])}
    function stop$0(e){return caml_call2(Velocity[1],e,zero)}
    var Game_Enemy=[0,create$2,reset$0,stop$0];
    caml_register_global(161,Game_Enemy,"Game__Enemy");
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
     {function _aA_(e)
       {var
         entity=create$0(cst_map,0.,80.,p,d,40),
         e1=create$2(cst_ennemy$0,200.,240.,0.,100.,player_img),
         ennemies=[0,e1,0];
        function _a0_(e){return _Q_}
        return [0,e,entity,ennemies,d,caml_call2(Stdlib_array[2],4,_a0_)]}
      var m=caml_call2(Stdlib_list[10],n,_aA_);
      function path_aux(map,room)
       {caml_call1(Stdlib_random[3],0);
        var list=[0,0],_aC_=room[5].length - 1 - 1 | 0,_aB_=0;
        if(! (_aC_ < 0))
         {var i=_aB_;
          for(;;)
           {var door$0=caml_check_bound(room[5],i)[1 + i];
            if(0 === door$0[1])list[1] = [0,i,list[1]];
            var _aF_=i + 1 | 0;
            if(_aC_ !== i){var i=_aF_;continue}
            break}}
        var
         _aD_=caml_call1(Stdlib_list[1],list[1]),
         _aE_=caml_call1(Stdlib_random[5],_aD_),
         door=caml_call2(Stdlib_list[7],list[1],_aE_);
        if(map)
         {var _aG_=map[2],_aH_=map[1];
          if(_aG_)
           {var _aI_=[0,1,_aH_[1]];
            caml_check_bound(room[5],door)[1 + door] = _aI_;
            var _aJ_=[0,1,room[1]],_aK_=door_f(door);
            caml_check_bound(_aH_[5],_aK_)[1 + _aK_] = _aJ_;
            var _aM_=room[5].length - 1 - 1 | 0,_aL_=0;
            if(! (_aM_ < 0))
             {var i$0=_aL_;
              for(;;)
               {var
                 match=caml_check_bound(room[5],i$0)[1 + i$0],
                 ind=match[2],
                 b=match[1],
                 _aN_=caml_call4(Stdlib_format[127],_N_,room[1],ind,b);
                caml_call1(Gfx[24],_aN_);
                var _aO_=i$0 + 1 | 0;
                if(_aM_ !== i$0){var i$0=_aO_;continue}
                break}}
            return [0,room,path_aux(_aG_,_aH_)]}
          var _aP_=[0,1,_aH_[1]];
          caml_check_bound(room[5],door)[1 + door] = _aP_;
          var _aQ_=[0,1,room[1]],_aR_=door_f(door);
          caml_check_bound(_aH_[5],_aR_)[1 + _aR_] = _aQ_;
          var _aT_=room[5].length - 1 - 1 | 0,_aS_=0;
          if(! (_aT_ < 0))
           {var i$2=_aS_;
            for(;;)
             {var
               match$1=caml_check_bound(room[5],i$2)[1 + i$2],
               ind$1=match$1[2],
               b$1=match$1[1],
               _aY_=caml_call4(Stdlib_format[127],_P_,room[1],ind$1,b$1);
              caml_call1(Gfx[24],_aY_);
              var _aZ_=i$2 + 1 | 0;
              if(_aT_ !== i$2){var i$2=_aZ_;continue}
              break}}
          var _aV_=_aH_[5].length - 1 - 1 | 0,_aU_=0;
          if(! (_aV_ < 0))
           {var i$1=_aU_;
            for(;;)
             {var
               match$0=caml_check_bound(_aH_[5],i$1)[1 + i$1],
               ind$0=match$0[2],
               b$0=match$0[1],
               _aW_=caml_call4(Stdlib_format[127],_O_,_aH_[1],ind$0,b$0);
              caml_call1(Gfx[24],_aW_);
              var _aX_=i$1 + 1 | 0;
              if(_aV_ !== i$1){var i$1=_aX_;continue}
              break}}
          return [0,room,[0,_aH_,0]]}
        return 0}
      var
       _ay_=caml_call1(Stdlib_list[5],m),
       _az_=path_aux(caml_call1(Stdlib_list[6],m),_ay_);
      return caml_call1(Stdlib_array[12],_az_)}
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
        var _ax_=i + 1 | 0;
        if(3 !== i){var i=_ax_;continue}
        return 0}}
    function load_ennemie(e)
     {caml_call1(Collision_S[3],e);
      caml_call1(Control_S[3],e);
      caml_call1(Draw_S[3],e);
      return caml_call1(Move_S[3],e)}
    function collision(door,e)
     {var
       name$0=caml_call1(Name[2],e),
       _av_=0 === caml_call2(Stdlib_string[33],name$0,cst_player$0)?1:0;
      if(_av_)
       {var
         name=caml_call1(Name[2],door),
         _ao_=
          0 === caml_call2(Stdlib_string[33],name,cst_left)
           ?caml_check_bound(state[1][3][5],0)[1]
           :0 === caml_call2(Stdlib_string[33],name,cst_top)
             ?caml_check_bound(state[1][3][5],1)[2]
             :0 === caml_call2(Stdlib_string[33],name,cst_right)
               ?caml_check_bound(state[1][3][5],2)[3]
               :0 === caml_call2(Stdlib_string[33],name,cst_bottom)
                 ?caml_check_bound(state[1][3][5],3)[4]
                 :_R_,
         r=_ao_[2],
         room=caml_check_bound(state[1][4],r)[1 + r],
         old_room=state[1][3],
         _ap_=caml_call3(Stdlib_format[127],_S_,r,state[1][4].length - 1);
        caml_call1(Gfx[24],_ap_);
        var _aq_=state[1];
        state[1] = [0,_aq_[1],_aq_[2],room,_aq_[4],_aq_[5]];
        var
         _ar_=old_room[3],
         _as_=
          function(e)
           {caml_call1(Collision_S[4],e);
            caml_call1(Control_S[4],e);
            caml_call1(Draw_S[4],e);
            return caml_call1(Move_S[4],e)};
        caml_call2(Stdlib_list[15],_as_,_ar_);
        var _at_=room[3],_au_=function(e){return load_ennemie(e)};
        caml_call2(Stdlib_list[15],_au_,_at_);
        change_door(0);
        var _aw_=caml_call1(Teleport[2],door);
        caml_call2(Position[1],e,_aw_);
        return caml_call2(Velocity[1],e,zero)}
      return _av_}
    function init$3(pe1,map)
     {var
       _ag_=create$1(cst_bottom$0,400.,560.,400.,180.),
       _ah_=create$1(cst_right$0,720.,320.,100.,320.),
       _ai_=create$1(cst_top$0,400.,120.,400.,500.),
       doorsInit=[0,create$1(cst_left$0,40.,320.,660.,320.),_ai_,_ah_,_ag_];
      function _aj_(e){return caml_call2(CollisionResolver[1],e,collision)}
      caml_call2(Stdlib_array[13],_aj_,doorsInit);
      var _ak_=state[1],_al_=caml_check_bound(map,0)[1];
      state[1] = [0,pe1,_ak_[2],_al_,map,doorsInit];
      caml_call1(Draw_S[3],state[1][3][2]);
      var _am_=state[1][3][3];
      function _an_(e){return load_ennemie(e)}
      caml_call2(Stdlib_list[15],_an_,_am_);
      return change_door(0)}
    var Game_Game_state=[0,init$3,get_player,get_status,door_f,generate_map];
    caml_register_global(163,Game_Game_state,"Game__Game_state");
    var player_img=caml_call1(Gfx[14],cst_src_img_charSheet_png);
    function init_game(dt)
     {init_all(0);
      var _af_=caml_call1(Stdlib_format[127],_T_);
      caml_call1(Gfx[24],_af_);
      var player=create(cst_player$1,80.,240.,player_img);
      register_command(_U_,function(param){return move_up(player)});
      register_command(_V_,function(param){return move_down(player)});
      register_command(_W_,function(param){return move_left(player)});
      register_command(_X_,function(param){return move_right(player)});
      register_command(_Y_,function(param){return stop(player)});
      register_command(_Z_,function(param){return stop(player)});
      register_command(___,function(param){return stop(player)});
      register_command(_$_,function(param){return stop(player)});
      var map$0=generate_map(map,palette,5,player_img);
      init$3(player,map$0);
      return 0}
    function play_game(dt)
     {var _ae_=caml_call1(Stdlib_format[127],_aa_);
      caml_call1(Gfx[24],_ae_);
      update_all(dt);
      return get_status(0)?1:0}
    function end_game(dt)
     {var _ad_=caml_call1(Stdlib_format[127],_ab_);
      caml_call1(Gfx[24],_ad_);
      return 0}
    function load_graphics(dt){return caml_call1(Gfx[15],player_img)?0:1}
    function chain_functions(f_list)
     {var funs=[0,f_list];
      return function(dt)
       {var _ac_=funs[1];
        if(_ac_)
         {var ll=_ac_[2],f=_ac_[1];return caml_call1(f,dt)?1:(funs[1] = ll,1)}
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
    caml_register_global(164,Game$0,"Game");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZ2FtZS5vYmpzL2dhbWUuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInplcm8iLCJuYW1lIiwibmFtZSQwIiwibmFtZSQxIiwibmFtZSQyIiwibmFtZSQzIiwibmFtZSQ0IiwibmFtZSQ1IiwibmFtZSQ2IiwibmFtZSQ3IiwibmFtZSQ4IiwiZG9vclRvcCIsImRvb3JCb3R0b20iLCJkb29yTGVmdCIsImRvb3JSaWdodCIsImFkZCIsImEiLCJiIiwic3ViIiwibXVsdCIsImsiLCJkb3QiLCJub3JtIiwibm9ybWFsaXplIiwicHAiLCJmbXQiLCJpc196ZXJvIiwidiIsImJsYWNrIiwicmVkIiwiYmx1ZSIsImdyYXkiLCJjcmVhdGVfaW1nIiwiaW1nIiwibCIsImgiLCJyIiwiY3JlYXRlX3RpbGVtYXAiLCJjb2xvcnMiLCJ0aWxlbWFwIiwic2l6ZSIsImNyZWF0ZV9hbmltYXRpb24iLCJudW1fdyIsIm51bV9oIiwic3ciLCJzaCIsImR3IiwiZGgiLCJpIiwiYXJyYXlfZnJhbWUiLCJ5IiwieCIsImNyZWF0ZV9pZGxlIiwiaWRsZU5hbWUiLCJhbmltIiwiZmluIiwiZGViIiwiZHJhd190aWxlbWFwIiwiY3R4IiwicG9zWCIsInBvc1kiLCJ0aWxlIiwiY29sb3IiLCJzaXplWCIsInNpemVZIiwiZ2V0X2lkbGUiLCJwbGF5X2lkbGUiLCJnZXRfZnJhbWUiLCJkaXIiLCJjdXJyZW50Q2FzZSIsInRvcF9sZWZ0IiwidG9wX3JpZ2h0IiwiYm90dG9tX2xlZnQiLCJib3R0b21fcmlnaHQiLCJjZW50ZXIiLCJtZGlmZiIsInYxIiwiYjEiLCJ2MiIsImIyIiwidyIsImhhc19vcmlnaW4iLCJpbnRlcnNlY3QiLCJiMyIsInBwJDAiLCJpbml0IiwidXBkYXRlIiwiZHQiLCJlbCIsImUxIiwiaiIsImUyIiwicG9zMSIsImJveDEiLCJwb3MyIiwiYm94MiIsInNfcmVjdCIsInNfcG9zIiwiY29tbWFuZHMiLCJyZWdpc3Rlcl9jb21tYW5kIiwiZXYiLCJmIiwiZ2V0X2NvbW1hbmRzIiwiaW5pdCQwIiwidXBkYXRlJDAiLCJpbml0JDEiLCJjIiwidXBkYXRlJDEiLCJjdHgkMCIsImFQIiwiYlAiLCJsaXN0X3NvcnQiLCJlIiwicG9zIiwiYm94IiwiY29sb3IxIiwiaW1hZ2UiLCJzcGVlZCIsImluaXQkMiIsInRpbWUiLCJtb3ZlX3RvIiwicG9zRTEiLCJwb3NFMiIsImRpc3RYIiwiZGlzdFkiLCJ1cGRhdGUkMiIsImRlbHRhX3QiLCJrdiIsInBsYXllciIsImVsZW1fbGlzdCIsImVsZW1fdGFibGUiLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJzeXN0ZW1zIiwibSIsImluaXRfYWxsIiwidXBkYXRlX2FsbCIsImNyZWF0ZSIsInJlc2V0IiwibW92ZV91cCIsIm1vdmVfZG93biIsIm1vdmVfcmlnaHQiLCJtb3ZlX2xlZnQiLCJzdG9wIiwiY3JlYXRlJDAiLCJwYWxldHRlIiwibWFwIiwiY3JlYXRlJDEiLCJ4dCIsInl0IiwiY3JlYXRlJDIiLCJ2ZWxYIiwidmVsWSIsInJlc2V0JDAiLCJzdG9wJDAiLCJzdGF0ZSIsImdldF9wbGF5ZXIiLCJnZXRfc3RhdHVzIiwiZG9vcl9mIiwibiIsImdlbmVyYXRlX21hcCIsImQiLCJwIiwicGxheWVyX2ltZyIsImVudGl0eSIsImVubmVtaWVzIiwicGF0aF9hdXgiLCJyb29tIiwibGlzdCIsImRvb3IkMCIsImRvb3IiLCJpJDAiLCJpbmQiLCJpJDIiLCJpbmQkMSIsImIkMSIsImkkMSIsImluZCQwIiwiYiQwIiwiY2hhbmdlX2Rvb3IiLCJkX2UiLCJlJDAiLCJsb2FkX2VubmVtaWUiLCJjb2xsaXNpb24iLCJvbGRfcm9vbSIsImluaXQkMyIsInBlMSIsImRvb3JzSW5pdCIsImluaXRfZ2FtZSIsIm1hcCQwIiwicGxheV9nYW1lIiwiZW5kX2dhbWUiLCJsb2FkX2dyYXBoaWNzIiwiY2hhaW5fZnVuY3Rpb25zIiwiZl9saXN0IiwiZnVucyIsImxsIiwicnVuIl0sInNvdXJjZXMiOlsiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2NvbXBvbmVudC92ZWN0b3IubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvY29tcG9uZW50L2NvbXBvbmVudF9kZWZzLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dsb2JhbC5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnQvdGV4dHVyZS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9jb21wb25lbnQvcmVjdC5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9zeXN0ZW0vY29sbGlzaW9uX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9pby9pbnB1dF9oYW5kbGVyLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9jb250cm9sX3N5c3RlbS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9zeXN0ZW0vZHJhd19zeXN0ZW0ubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvc3lzdGVtL21vdmVfc3lzdGVtLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL3N5c3RlbS9zeXN0ZW0ubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9zcmMvc3lzdGVtL3N5c3RlbV9kZWZzLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvcGxheWVyLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvbWFwLm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZG9vci5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lL2VuZW15Lm1sIiwiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvc3JjL2dhbWUvZ2FtZV9zdGF0ZS5tbCIsIi9ob21lL2FudG9pbmUvUEZBL1BGQS1Qcm9qZXQtRzEwL19idWlsZC9kZWZhdWx0L3NyYy9nYW1lLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV0lBOzs7S0NWdURDO0tBQ0FDO0tBQ0RDO0tBQ0NDO0tBQ0hDO0tBQ0pDO0tBQ1FDO0tBQ0pDO0tBQ21DQztLQUNoQ0M7Ozs7Ozs7Ozs7Ozs7S0NpQnZEQztLQUNBQztLQUNBQztLQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FGN0JBQyxJQUFJQyxFQUFFQyxHQUFJLFlBQU5ELE9BQUVDLEtBQUZELE9BQUVDLEtBQXNDO2FBQzVDQyxJQUFJRixFQUFFQyxHQUFJLFlBQU5ELE9BQUVDLEtBQUZELE9BQUVDLEtBQXNDO2FBRTVDRSxLQUFLQyxFQUFFSixHQUFJLFlBQU5JLElBQUVKLEtBQUZJLElBQUVKLEtBQWdDO2FBRXZDSyxJQUFJTCxFQUFFQyxHQUFJLE9BQU5ELE9BQUVDLE9BQUZELE9BQUVDLElBQTRCO2FBQ2xDSyxLQUFLTixHQUFT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T0FDO01BcUJNLDBCQUFKekQsRUFDVztJQWxEQTs7O09BQWI2QjtPQUVBeUI7T0FtQkFFO09BT0FDO09BSUFDO09BSUFDO09BWUFJO0lBaERhO1UiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIHQgPSB7IHggOiBmbG9hdCA7IHkgOiBmbG9hdCB9XG5sZXQgYWRkIGEgYiA9IHsgeCA9IGEueCArLiBiLng7IHkgPSBhLnkgKy4gYi55IH1cbmxldCBzdWIgYSBiID0geyB4ID0gYS54IC0uIGIueDsgeSA9IGEueSAtLiBiLnkgfVxuXG5sZXQgbXVsdCBrIGEgPSB7IHggPSBrKi4gYS54OyB5ID0gayouIGEueSB9XG5cbmxldCBkb3QgYSBiID0gYS54ICouIGIueCArLiBhLnkgKi4gYi55XG5sZXQgbm9ybSBhID0gc3FydCAoZG90IGEgYSlcbmxldCBub3JtYWxpemUgYSA9IG11bHQgKDEuMCAvLiBub3JtIGEpIGFcbmxldCBwcCBmbXQgYSA9IEZvcm1hdC5mcHJpbnRmIGZtdCBcIiglZiwgJWYpXCIgYS54IGEueVxuXG5sZXQgemVybyA9IHsgeCA9IDAuMDsgeSA9IDAuMCB9XG5sZXQgaXNfemVybyB2ID0gdi54ID0gMC4wICYmIHYueSA9IDAuMCIsIm9wZW4gRWNzXG5tb2R1bGUgUG9zaXRpb24gPSBDb21wb25lbnQuTWFrZShzdHJ1Y3QgaW5jbHVkZSBWZWN0b3IgbGV0IG5hbWUgPSBcInBvc2l0aW9uXCIgZW5kKVxubW9kdWxlIFRlbGVwb3J0ID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgVmVjdG9yIGxldCBuYW1lID0gXCJ0ZWxlcG9ydFwiIGVuZClcbm1vZHVsZSBQcmlvcml0eSA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCB0eXBlIHQgPSBpbnQgIGxldCBuYW1lID0gXCJwcmlvcml0eVwiIGVuZClcbm1vZHVsZSBWZWxvY2l0eSA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCBpbmNsdWRlIFZlY3RvciBsZXQgbmFtZSA9IFwidmVsb2NpdHlcIiBlbmQpXG5tb2R1bGUgTWFzcyA9IENvbXBvbmVudC5NYWtlIChzdHJ1Y3QgdHlwZSB0ID0gZmxvYXQgbGV0IG5hbWUgPSBcIm1hc3NcIiBlbmQpXG5tb2R1bGUgQm94ID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IGluY2x1ZGUgUmVjdCBsZXQgbmFtZSA9IFwiYm94XCIgZW5kKVxubW9kdWxlIFN1cmZhY2UgPSBDb21wb25lbnQuTWFrZSAoc3RydWN0IGluY2x1ZGUgVGV4dHVyZSBsZXQgbmFtZSA9IFwidGV4dHVyZVwiIGVuZClcbm1vZHVsZSBOYW1lID0gQ29tcG9uZW50Lk1ha2Uoc3RydWN0IHR5cGUgdCA9IHN0cmluZyBsZXQgbmFtZSA9IFwibmFtZVwiIGVuZClcbm1vZHVsZSBDb2xsaXNpb25SZXNvbHZlciA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCB0eXBlIHQgPSBFbnRpdHkudCAtPiBFbnRpdHkudCAtPiB1bml0IGxldCBuYW1lID0gXCJyZXNvbHZlclwiIGVuZClcbm1vZHVsZSBPd25lciA9IENvbXBvbmVudC5NYWtlKHN0cnVjdCB0eXBlIHQgPSBFbnRpdHkudCBsZXQgbmFtZSA9IFwib3duZXJcIiBlbmQpXG4iLCJcclxubGV0IG1hcCA9IFt8XHJcblt8MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxfF07XHJcblt8MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MjsyOzI7MTsxfF07XHJcblt8MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxfF07XHJcblt8MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxOzE7MTsxfF07XHJcbnxdXHJcblxyXG5sZXQgcGFsZXR0ZSA9IFt8XHJcbiAgKEdmeC5jb2xvciAwIDAgMCAyNTUpO1xyXG4gIChHZnguY29sb3IgMTMwIDEzMCAxMzAgMjU1KTtcclxuICAoR2Z4LmNvbG9yIDYxIDYxIDYxIDI1NSk7XHJcbiAgKEdmeC5jb2xvciAwIDAgMjU1IDI1NSk7XHJcbiAgKEdmeC5jb2xvciAwIDI1NSAwIDI1NSk7XHJcbiAgKEdmeC5jb2xvciAyNTUgMCAwIDI1NSk7XHJcbnxdXHJcblxyXG5sZXQgX2Rvb3JUb3AgPSAoNDAwLDEyMClcclxubGV0IF9kb29yQm90dG9tID0gKDQwMCw2MDApXHJcbmxldCBfZG9vckxlZnQgPSAoODAsNDAwKVxyXG5sZXQgX2Rvb3JSaWdodCA9ICg3MjAsNDAwKSIsImV4Y2VwdGlvbiBNaXNzaW5nSWRsZSBvZiBzdHJpbmdcblxudHlwZSB0dXBsZUludCA9IChpbnQgKmludClcblxuXG50eXBlIGFuaW1hdGlvbiA9IHtcbiAgICAgICAgZnJhbWVzIDogR2Z4LnJlbmRlciBhcnJheTtcbiAgICAgICAgaWRsZVRhYmxlIDogKHN0cmluZywgdHVwbGVJbnQpIEhhc2h0YmwudDtcbiAgICAgICAgbXV0YWJsZSBjdXJyZW50SWRsZSA6IHR1cGxlSW50O1xuICAgICAgICBtdXRhYmxlIGN1cnJlbnQgOiBpbnRcbn1cblxudHlwZSB0aWxlbWFwID0ge1xuICAgICAgICB0aWxlcyA6IEdmeC5jb2xvciBhcnJheTtcbiAgICAgICAgbWFwIDogaW50IGFycmF5IGFycmF5O1xuICAgICAgICBncmlkX3NpemUgOiBpbnQ7XG59XG5cbnR5cGUgdCA9IENvbG9yIG9mIEdmeC5jb2xvclxuICAgICAgICB8IEltYWdlIG9mIEdmeC5yZW5kZXJcbiAgICAgICAgfCBBbmltYXRpb24gb2YgYW5pbWF0aW9uXG4gICAgICAgIHwgVGlsZSBvZiB0aWxlbWFwXG5cbmxldCBibGFjayA9IENvbG9yIChHZnguY29sb3IgMCAwIDAgMjU1KVxubGV0IHJlZCA9IENvbG9yIChHZnguY29sb3IgMjU1IDAgMCAyNTUpXG5sZXQgYmx1ZSA9IENvbG9yIChHZnguY29sb3IgMCAwIDI1NSAyNTUpXG5cbmxldCBncmF5ID0gQ29sb3IgKEdmeC5jb2xvciAxMjggMTI4IDEyOCAyNTUpXG5cbmxldCBjcmVhdGVfaW1nIGltZyBsIGggPSBcbiAgICAgICAgbGV0IHIgPSBHZnguY3JlYXRlX29mZnNjcmVlbiBsIGggaW5cbiAgICAgICAgR2Z4LmRyYXdfaW1hZ2Vfc2NhbGUgciBpbWcgMCAwIGwgaDtcbiAgICAgICAgclxuXG5sZXQgY3JlYXRlX3RpbGVtYXAgY29sb3JzIHRpbGVtYXAgc2l6ZT0gVGlsZSB7dGlsZXMgPSBjb2xvcnM7IG1hcCA9IHRpbGVtYXA7Z3JpZF9zaXplID0gc2l6ZX1cblxubGV0IGNyZWF0ZV9hbmltYXRpb24gaW1nIG51bV93IG51bV9oIHN3IHNoIGR3IGRoID0gXG4gICAgICAgIGxldCBhcnJheV9mcmFtZSA9IEFycmF5LmluaXQgKG51bV93ICogbnVtX2gpIChmdW4gX2kgLT4gR2Z4LmNyZWF0ZV9vZmZzY3JlZW4gZHcgZGgpIGluXG4gICAgICAgIGZvciB5ID0gMCB0byAobnVtX2gtMSkgZG9cbiAgICAgICAgICAgICAgICBmb3IgeCA9IDAgdG8gKG51bV93LTEpIGRvXG4gICAgICAgICAgICAgICAgICAgICAgICBHZnguZGVidWcgKEZvcm1hdC5hc3ByaW50ZiBcIiVpIHgqc3cgJWkgeSpzaFwiICh4KnN3KSAoeSpzaCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2Z4LmRyYXdfaW1hZ2VfZnVsbCBhcnJheV9mcmFtZS4oeSpudW1fdyt4KSBpbWcgKHgqc3cpICh5KnNoKSBzdyBzaCAwIDAgZHcgZGg7XG4gICAgICAgICAgICAgICAgZG9uZVxuICAgICAgICBkb25lO1xuICAgICAgICBBbmltYXRpb24ge2ZyYW1lcyA9IGFycmF5X2ZyYW1lOyBjdXJyZW50ID0gMDtjdXJyZW50SWRsZSA9ICgwLG51bV93ICogbnVtX2gpIDsgaWRsZVRhYmxlID0gSGFzaHRibC5jcmVhdGUgMzJ9XG5cbmxldCBjcmVhdGVfaWRsZSBpZGxlTmFtZSAoZGViLCBmaW4pIGFuaW09IFxuICBtYXRjaCBhbmltIHdpdGggXG4gICAgfCBBbmltYXRpb24gYSAtPiBIYXNodGJsLnJlcGxhY2UgKGEuaWRsZVRhYmxlKSBpZGxlTmFtZSAoZGViLCBmaW4pXG4gICAgfCBfIC0+ICgpXG5cbmxldCBkcmF3X3RpbGVtYXAgdGlsZW1hcCBjdHggcG9zWCBwb3NZPVxuICAgICAgICBsZXQgdGlsZSA9IHJlZiAwIGluXG4gICAgICAgIGxldCBjb2xvciA9IHJlZiAoR2Z4LmNvbG9yIDAgMCAwIDI1NSkgaW5cbiAgICAgICAgbGV0IHNpemUgPSB0aWxlbWFwLmdyaWRfc2l6ZSBpblxuICAgICAgICBsZXQgc2l6ZVggPSBBcnJheS5sZW5ndGggdGlsZW1hcC5tYXAgaW5cbiAgICAgICAgbGV0IHNpemVZID0gQXJyYXkubGVuZ3RoIHRpbGVtYXAubWFwLigwKSBpblxuXG4gICAgICAgIGZvciB5ID0gMCB0byAoc2l6ZVgtMSkgZG9cbiAgICAgICAgICAgICAgICBmb3IgeCA9IDAgdG8gKHNpemVZLTEpIGRvXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlIDo9IHRpbGVtYXAubWFwLih5KS4oeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6PSB0aWxlbWFwLnRpbGVzLighdGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHZnguZmlsbF9yZWN0IGN0eCAoeCpzaXplK3Bvc1gpICh5KnNpemUrcG9zWSkgc2l6ZSBzaXplICFjb2xvcjtcbiAgICAgICAgICAgICAgICBkb25lXG4gICAgICAgIGRvbmVcblxubGV0IGdldF9pZGxlIGlkbGVOYW1lIGFuaW09IHRyeVxuICBIYXNodGJsLmZpbmQgYW5pbS5pZGxlVGFibGUgaWRsZU5hbWVcbiAgd2l0aFxuICAgIE5vdF9mb3VuZCAtPiByYWlzZSAoTWlzc2luZ0lkbGUoaWRsZU5hbWUpKVxuXG5sZXQgcGxheV9pZGxlIGFuaW0gaWRsZU5hbWUgPSBcbiAgbWF0Y2ggYW5pbSB3aXRoIFxuICB8QW5pbWF0aW9uIGEgLT4gIGxldCAoZGViLGZpbikgPSBnZXRfaWRsZSBpZGxlTmFtZSBhIGluXG4gICAgICAgICAgICAgICAgICAgIGEuY3VycmVudCA8LSBkZWI7XG4gICAgICAgICAgICAgICAgICAgIGEuY3VycmVudElkbGUgPC0gKGRlYixmaW4pIFxuICB8IF8gLT4gKClcblxuXG5cbmxldCBnZXRfZnJhbWUgYW5pbSBfZGlyID0gXG4gICAgICAgIGxldCBjdXJyZW50Q2FzZSA9IEFycmF5LmdldCAoYW5pbS5mcmFtZXMpIChhbmltLmN1cnJlbnQpIGluXG4gICAgICAgIGxldCBfZGViID0gKGZzdCBhbmltLmN1cnJlbnRJZGxlKSBpblxuICAgICAgICBsZXQgX2ZpbiA9IChzbmQgYW5pbS5jdXJyZW50SWRsZSkgaW5cbiAgICAgICAgbGV0IF9jdXJyZW50ID0gYW5pbS5jdXJyZW50IGluXG4gICAgICAgICgqaWYgY3VycmVudCA9PSBmaW4tMSB0aGVuIGFuaW0uY3VycmVudCA8LSBkZWIgZWxzZSBhbmltLmN1cnJlbnQgPC0gYW5pbS5jdXJyZW50ICsgMTsqKVxuICAgICAgICBjdXJyZW50Q2FzZSIsIm9wZW4gVmVjdG9yXG5cbnR5cGUgdCA9IHsgd2lkdGggOiBpbnQ7IGhlaWdodCA6IGludCB9XG5sZXQgdG9wX2xlZnQgdiBfYiA9IHZcbmxldCB0b3BfcmlnaHQgdiBiID0geyB2IHdpdGggeCA9IHYueCArLiBmbG9hdCBiLndpZHRoIH1cbmxldCBib3R0b21fbGVmdCB2IGIgPSB7IHYgd2l0aCB5ID0gdi55ICsuIGZsb2F0IGIuaGVpZ2h0IH1cblxubGV0IGJvdHRvbV9yaWdodCB2IGIgPSB7IHggPSB2LnggKy4gZmxvYXQgYi53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdi55ICsuIGZsb2F0IGIuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICB9XG5cbmxldCBjZW50ZXIgdiBiID0geyBcbiAgeCA9IHYueCArLiAwLjUgKi4gZmxvYXQgYi53aWR0aDtcbiAgeSA9IHYueSArLiAwLjUgKi4gZmxvYXQgYi5oZWlnaHQ7XG59XG5cbmxldCBtZGlmZiB2MSBiMSB2MiBiMiA9XG4gICgqIFdlIHVzZSB0aGUgTWlua293c2tpIGRpZmZlcmVuY2Ugb2YgQm94MSBhbmQgQm94MiAqKVxuICBsZXQgeCA9IHYxLnggLS4gdjIueCAtLiBmbG9hdCBiMi53aWR0aCBpblxuICBsZXQgeSA9IHYxLnkgLS4gdjIueSAtLiBmbG9hdCBiMi5oZWlnaHQgaW5cbiAgbGV0IGggPSBiMS5oZWlnaHQgKyBiMi5oZWlnaHQgaW5cbiAgbGV0IHcgPSBiMS53aWR0aCArIGIyLndpZHRoIGluXG4gICh7eCA9IHg7IHkgPSB5fSwge3dpZHRoID0gdzsgaGVpZ2h0ID0gaH0pXG4gXG5sZXQgaGFzX29yaWdpbiB2IGIgPVxuICB2LnggPCAwLjAgJiYgdi54ICsuIGZsb2F0IGIud2lkdGggPiAwLjAgJiYgdi55IDwgMC4wICYmIHYueSArLiBmbG9hdCBiLmhlaWdodCA+IDAuMCAgXG5cbmxldCBpbnRlcnNlY3QgdjEgYjEgdjIgYjMgPVxuICBsZXQgdiwgYiA9IG1kaWZmIHYxIGIxIHYyIGIzIGluIFxuICBoYXNfb3JpZ2luIHYgYlxuXG5sZXQgcHAgZm10IGIgPSBGb3JtYXQuZnByaW50ZiBmbXQgXCJbdzolZCxoOiVkXVwiIGIud2lkdGggYi5oZWlnaHRcbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcblxubGV0IGluaXQgKCkgPSAoKVxuXG5sZXQgdXBkYXRlIF9kdCBlbCA9XG4gIExpc3QuaXRlcmkgKGZ1biBpIGUxIC0+XG4gICAgTGlzdC5pdGVyaSAoZnVuIGogZTIgLT5cbiAgICAgICgqIFVuZSBkb3VibGUgYm91Y2xlIHF1aSDDqXZpdGUgZGUgY29tcGFyZXIgZGV1eCBmb2lzXG4gICAgICAgICBsZXMgb2JqZXRzIDogc2kgb24gY29tcGFyZSBBIGV0IEIsIG9uIG5lIGNvbXBhcmUgcGFzIEIgZXQgQS5cbiAgICAgICAgIElsIGZhdWRyYSBhbcOpbGlvcmVyIGNlbGEgc2kgb24gYSBiZWF1Y291cCAoPiAzMCkgb2JqZXRzIHNpbXVsdGFuw6ltZW50LlxuICAgICAgKilcbiAgICAgIGlmIGogPiBpIHRoZW4gYmVnaW5cbiAgICAgICAgKCogbGVzIGNvbXBvc2FudHMgZHUgcmVjdGFuZ2xlIHIxICopXG4gICAgICAgIGxldCBwb3MxID0gUG9zaXRpb24uZ2V0IGUxIGluXG4gICAgICAgIGxldCBib3gxID0gQm94LmdldCBlMSBpblxuICAgICAgICAoKiBsZXMgY29tcG9zYW50cyBkdSByZWN0YW5nbGUgcjIgKilcbiAgICAgICAgbGV0IHBvczIgPSBQb3NpdGlvbi5nZXQgZTIgaW5cbiAgICAgICAgbGV0IGJveDIgPSBCb3guZ2V0IGUyIGluXG4gICAgICAgICgqIGxlcyB2aXRlc3NlcyAqKVxuICAgICAgICBsZXQgdjEgPSBWZWxvY2l0eS5nZXQgZTEgaW5cbiAgICAgICAgbGV0IHYyID0gVmVsb2NpdHkuZ2V0IGUyIGluXG4gICAgICAgICgqIFsxXSBsYSBzb3VzdHJhY3Rpb24gZGUgTWlua293c2tpICopXG4gICAgICAgIGxldCBzX3Bvcywgc19yZWN0ID0gUmVjdC5tZGlmZiBwb3MyIGJveDIgcG9zMSBib3gxIGluXG4gICAgICAgICgqIFsyXSBzaSBpbnRlcnNlY3Rpb24gZXQgdW4gZGVzIG9iamV0cyBldCBtb2JpbGUsIGxlcyBvYmpldHMgcmVib25kaXNzZW50ICopXG4gICAgICAgIGlmIFJlY3QuaGFzX29yaWdpbiBzX3BvcyBzX3JlY3QgJiZcbiAgICAgICAgICBub3QgKFZlY3Rvci5pc196ZXJvIHYxICYmIFZlY3Rvci5pc196ZXJvIHYyKVxuICAgICAgICAgIHRoZW4gYmVnaW5cbiAgICAgICAgICAgICgqIFszXSBsZSBwbHVzIHBldGl0IGRlcyB2ZWN0ZXVycyBhIGIgYyBkICopXG4gICAgICAgICAgICAoKmxldCBhID0gVmVjdG9yLnsgeCA9IHNfcG9zLng7IHkgPSAwLjB9IGluXG4gICAgICAgICAgICBsZXQgYiA9IFZlY3Rvci57IHggPSBmbG9hdCBzX3JlY3Qud2lkdGggKy4gc19wb3MueDsgeSA9IDAuMCB9IGluXG4gICAgICAgICAgICBsZXQgYyA9IFZlY3Rvci57IHggPSAwLjA7IHkgPSBzX3Bvcy55IH0gaW5cbiAgICAgICAgICAgIGxldCBkID0gVmVjdG9yLnsgeCA9IDAuMDsgeSA9IGZsb2F0IHNfcmVjdC5oZWlnaHQgKy4gc19wb3MueX0gaW4gXG4gICAgICAgICAgICBsZXQgbiA9IExpc3QuZm9sZF9sZWZ0IChmdW4gbWluX3YgdiAtPlxuICAgICAgICAgICAgICBpZiBWZWN0b3Iubm9ybSB2ICA8IFZlY3Rvci5ub3JtIG1pbl92IHRoZW4gdiBlbHNlIG1pbl92KSBcbiAgICAgICAgICAgICAgYSBbIGI7IGMgOyBkXVxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgICgqICBbNF0gcmFwcG9ydCBkZXMgdml0ZXNzZXMgZXQgZMOpcGxhY2VtZW50IGRlcyBvYmpldHMgKilcbiAgICAgICAgICAgIGxldCBuX3YxID0gVmVjdG9yLm5vcm0gdjEgaW5cbiAgICAgICAgICAgIGxldCBuX3YyID0gVmVjdG9yLm5vcm0gdjIgaW5cbiAgICAgICAgICAgIGxldCBzID0gKG5fdjEgKy4gbl92MikgaW5cbiAgICAgICAgICAgIGxldCBuMSA9IG5fdjEgLy4gcyBpblxuICAgICAgICAgICAgbGV0IG4yID0gbl92MiAvLiBzIGluXG4gICAgICAgICAgICBsZXQgZGVsdGFfcG9zMSA9IFZlY3Rvci5tdWx0IG4xIG4gaW5cbiAgICAgICAgICAgIGxldCBkZWx0YV9wb3MyID0gVmVjdG9yLm11bHQgKEZsb2F0Lm5lZyBuMikgbiBpblxuICAgICAgICAgICAgUG9zaXRpb24uc2V0IGUxIChWZWN0b3IuYWRkIHBvczEgZGVsdGFfcG9zMSk7XG4gICAgICAgICAgICBQb3NpdGlvbi5zZXQgZTIgKFZlY3Rvci5hZGQgcG9zMiBkZWx0YV9wb3MyKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAoKiBbNV0gT24gbm9ybWFsaXNlIG4gKG9uIGNhbGN1bGUgdW4gdmVjdGV1ciBkZSBtw6ptZSBkaXJlY3Rpb24gbWFpcyBkZSBub3JtZSAxKSAqKVxuICAgICAgICAgICAgbGV0IG4gPSBWZWN0b3Iubm9ybWFsaXplIG4gaW5cbiAgICAgICAgICAgICgqIFs2XSBWaXRlc3NlIHJlbGF0aXZlIGVudHJlIHYyIGV0IHYxICopXG4gICAgICAgICAgICBsZXQgdiA9IFZlY3Rvci5zdWIgdjEgdjIgaW5cblxuICAgICAgICAgICAgKCogUHLDqXBhcmF0aW9uIGF1IGNhbGN1bCBkZSBsJ2ltcHVsc2lvbiAqKVxuICAgICAgICAgICAgKCogRWxhc3RpY2l0w6kgZml4ZS4gRW4gcHJhdGlxdWUsIGwnZWxhc3RpY2l0w6kgcGV1dCDDqnRyZSBzdG9ja8OpZSBkYW5zXG4gICAgICAgICAgICAgICBsZXMgb2JqZXRzIGNvbW1lIHVuIGNvbXBvc2FudCA6IDEgcG91ciBsYSBiYWxsZSBldCBsZXMgbXVycywgMC41IHBvdXJcbiAgICAgICAgICAgICAgIGRlcyBvYnN0YWNsZXMgYWJzb3JiYW50cywgMS4yIHBvdXIgZGVzIG9ic3RhY2xlcyByZWJvbmRpc3NhbnQsIOKApiAqKVxuICAgICAgICAgICAgbGV0IGUgPSAxLjAgaW5cblxuICAgICAgICAgICAgKCogbm9ybWFsaXNhdGlvbiBkZXMgbWFzc2VzICopXG4gICAgICAgICAgICBsZXQgbTEgPSBNYXNzLmdldCBlMSBpblxuICAgICAgICAgICAgbGV0IG0yID0gTWFzcy5nZXQgZTIgaW4gICAgXG4gICAgICAgICAgICBsZXQgbTEsIG0yID0gXG4gICAgICAgICAgICAgIGlmIEZsb2F0LmlzX2luZmluaXRlIG0xICYmIEZsb2F0LmlzX2luZmluaXRlIG0yIHRoZW5cbiAgICAgICAgICAgICAgICBpZiBuX3YxID0gMC4wIHRoZW4gbTEsIDEuMCBlbHNlIGlmIG5fdjIgPSAwLjAgdGhlbiAxLjAsIG0yIGVsc2VcbiAgICAgICAgICAgICAgICAgIDAuMCwgMC4wXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgbTEsIG0yXG4gICAgICAgICAgICBpblxuICAgICAgICAgICAgKCogWzddIGNhbGN1bCBkZSBsJ2ltcHVsc2lvbiAqKVxuICAgICAgICAgICAgbGV0IGogPVxuICAgICAgICAgICAgICAgKC0uKDEuMCArLiBlKSAqLiBWZWN0b3IuZG90IHYgbikvLiAoICgxLiAvLiBtMSkgKy4gKDEuIC8uIG0yKSlcbiAgICAgICAgICAgIGluXG4gICAgICAgICAgICAoKiBbOF0gY2FsY3VsIGRlcyBub3V2ZWxsZXMgdml0ZXNzZXMgKilcbiAgICAgICAgICAgIGxldCBuZXdfdjEgPSBWZWN0b3IuYWRkIHYxIChWZWN0b3IubXVsdCAoai8uIG0xKSBuKSBpblxuICAgICAgICAgICAgbGV0IG5ld192MiA9IFZlY3Rvci5zdWIgdjIgKFZlY3Rvci5tdWx0IChqLy4gbTIpIG4pIGluXG4gICAgICAgICAgICAoKiBbOV0gbWlzZSDDoCBqb3VyIGRlcyB2aXRlc3NlcyAqKVxuICAgICAgICAgICAgVmVsb2NpdHkuc2V0IGUxIG5ld192MTtcbiAgICAgICAgICAgIFZlbG9jaXR5LnNldCBlMiBuZXdfdjI7KilcbiAgICAgICAgICAgICgqIFsxMF0gYXBwZWwgZGVzIHJlc29sdmV1cnMgKilcbiAgICAgICAgICAgIGlmIENvbGxpc2lvblJlc29sdmVyLmhhc19jb21wb25lbnQgZTEgdGhlbiAoQ29sbGlzaW9uUmVzb2x2ZXIuZ2V0IGUxKSBlMSBlMjtcbiAgICAgICAgICAgIGlmIENvbGxpc2lvblJlc29sdmVyLmhhc19jb21wb25lbnQgZTIgdGhlbiAoQ29sbGlzaW9uUmVzb2x2ZXIuZ2V0IGUyKSBlMiBlMVxuICAgICAgICAgIGVuZFxuICAgICAgZW5kXG4gICAgICApIGVsKSBlbFxuIiwiXG5sZXQgY29tbWFuZHMgPSBIYXNodGJsLmNyZWF0ZSAxN1xuXG5cbmxldCByZWdpc3Rlcl9jb21tYW5kIGV2IGYgPVxuICBpZiBldiAhPSBHZnguTm9FdmVudCB0aGVuXG4gICAgSGFzaHRibC5hZGQgY29tbWFuZHMgIGV2IGZcblxubGV0IGdldF9jb21tYW5kcyBldiA9IEhhc2h0YmwuZmluZF9hbGwgY29tbWFuZHMgZXYiLCJcbmxldCBpbml0ICgpID0gKClcblxubGV0IHVwZGF0ZSBfZHQgX2VsID1cbiAgKCogQ2hlY2sgZm9yIGtleWJvYXJkIGV2ZW50cyAqKVxuICBsZXQgcmVjIGxvb3BfZXZlbnRzICgpID1cbiAgICAgIG1hdGNoIEdmeC5wb2xsX2V2ZW50ICgpIHdpdGhcbiAgICAgTm9FdmVudCAtPiAoKVxuICAgIHwgZXYgLT4gXG4gICAgICBMaXN0Lml0ZXIgKGZ1biBmIC0+IGYgKCkpIChJbnB1dF9oYW5kbGVyLmdldF9jb21tYW5kcyBldik7XG4gICAgICBsb29wX2V2ZW50cyAoKVxuICAgIGluXG4gICAgbG9vcF9ldmVudHMgKClcbiIsIm9wZW4gQ29tcG9uZW50X2RlZnNcblxubGV0IGN0eCA9IHJlZiBOb25lXG5sZXQgaW5pdCAoKSA9XG4gIGxldCBfLCBjID0gR2Z4LmNyZWF0ZSBcImNhbnZhc1wiICBpblxuICBjdHggOj0gU29tZSBjXG5cblxuICBcblxubGV0IHVwZGF0ZSBfZHQgZWwgPVxuICBsZXQgY3R4ID0gT3B0aW9uLmdldCAhY3R4IGluXG4gIEdmeC5jbGVhcl9yZWN0IGN0eCAwIDAgODAwIDY0MDtcbiAgbGV0IGxpc3Rfc29ydCA9IExpc3Quc29ydCAoXG4gICAgICBmdW4gYSBiIC0+XG4gICAgICAgIGxldCBhUCA9IFByaW9yaXR5LmdldCBhIGluXG4gICAgICAgIGxldCBiUCA9IFByaW9yaXR5LmdldCBiIGluIFxuICAgICAgICBhUCAtIGJQXG4gICAgICAgICkgZWwgaW5cbiAgTGlzdC5pdGVyIChmdW4gZSAtPiBcbiAgICBsZXQgcG9zID0gUG9zaXRpb24uZ2V0IGUgaW5cbiAgICBsZXQgYm94ID0gdHJ5IEJveC5nZXQgZSB3aXRoIF8gLT4ge3dpZHRoID0gMDsgaGVpZ2h0ID0gMH0gaW5cbiAgICBsZXQgY29sb3IgPSBTdXJmYWNlLmdldCBlIGluXG4gICAgbWF0Y2ggY29sb3Igd2l0aCBcbiAgICAgIHwgQ29sb3IgY29sb3IxIC0+IEdmeC5maWxsX3JlY3QgY3R4IChpbnRfb2ZfZmxvYXQgcG9zLngpIChpbnRfb2ZfZmxvYXQgcG9zLnkpIGJveC53aWR0aCBib3guaGVpZ2h0IGNvbG9yMTtcbiAgICAgIHwgSW1hZ2UgaW1hZ2UgLT4gR2Z4LmJsaXRfc2NhbGUgY3R4IGltYWdlIChpbnRfb2ZfZmxvYXQgcG9zLngpIChpbnRfb2ZfZmxvYXQgcG9zLnkpIGJveC53aWR0aCBib3guaGVpZ2h0O1xuICAgICAgfCBBbmltYXRpb24gYW5pbSAtPiBcbiAgICAgICAgbGV0IHNwZWVkID0gVmVsb2NpdHkuZ2V0IGUgaW5cbiAgICAgICAgR2Z4LmJsaXRfc2NhbGUgY3R4IChUZXh0dXJlLmdldF9mcmFtZSBhbmltIChpbnRfb2ZfZmxvYXQgc3BlZWQueCkpIChpbnRfb2ZfZmxvYXQgcG9zLngpIChpbnRfb2ZfZmxvYXQgcG9zLnkpIGJveC53aWR0aCBib3guaGVpZ2h0O1xuICAgICAgfCBUaWxlIHRpbGVtYXAgLT4gVGV4dHVyZS5kcmF3X3RpbGVtYXAgdGlsZW1hcCBjdHggKGludF9vZl9mbG9hdCBwb3MueCkgKGludF9vZl9mbG9hdCBwb3MueSlcbiAgICAgICAgKSAobGlzdF9zb3J0KVxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xuXG5sZXQgaW5pdCAoKSA9ICgpXG5cbmxldCB0aW1lID0gcmVmIDAuMFxuXG5cbmxldCBtb3ZlX3RvIGUxIGUyID0gXG4gIGxldCBwb3NFMSA9IFBvc2l0aW9uLmdldCBlMSBpblxuICBsZXQgcG9zRTIgPSBQb3NpdGlvbi5nZXQgZTIgaW5cbiAgbGV0IGRpc3RYID0gcG9zRTEueCAtLiBwb3NFMi54IGluXG4gIGxldCBkaXN0WSA9IHBvc0UxLnkgLS4gcG9zRTIueSBpblxuICBpZiAoZGlzdFggKiogMi4pID49IChkaXN0WSAqKiAyLikgdGhlblxuICAgIGlmIChkaXN0WCA+PSAwLiApIHRoZW4gVmVsb2NpdHkuc2V0IGUxIHsgeCA9IC0xMDAuMDsgeSA9IDAuMCB9XG4gICAgZWxzZSBWZWxvY2l0eS5zZXQgZTEgeyB4ID0gMTAwLjA7IHkgPSAwLjAgfVxuICBlbHNlIGlmIChkaXN0WSA+PSAwLiApIHRoZW4gVmVsb2NpdHkuc2V0IGUxIHsgeCA9IDAuMDsgeSA9IC0xMDAuMCB9XG4gICAgICAgIGVsc2UgVmVsb2NpdHkuc2V0IGUxIHsgeCA9IDAuMDsgeSA9IDEwMC4wIH1cbiAgICAgICAgXG5sZXQgdXBkYXRlIGR0IGVsID1cbiAgbGV0IGRlbHRhX3QgPSBtaW4gKDEuIC8uIDYwLikgKDEwMDAuICouKGR0IC0uICF0aW1lKSkgaW5cbiAgbGV0IHBsYXllciA9IGZzdCAoTGlzdC5maW5kIChmdW4ga3YgLT4gKFN0cmluZy5jb21wYXJlIChzbmQga3YpIFwicGxheWVyXCIpPT0wICkgKE5hbWUubWVtYmVycyAoKSkpIGluXG4gIHRpbWUgOj0gZHQ7XG4gIExpc3QuaXRlciAoZnVuIGUgLT5cbiAgICAgIGlmIChTdHJpbmcuY29tcGFyZSAoTmFtZS5nZXQgZSkgXCJlbm5lbXlcIik9PTAgdGhlbiBtb3ZlX3RvIGUgcGxheWVyO1xuICAgICAgbGV0IHBvcyA9IFBvc2l0aW9uLmdldCBlIGluXG4gICAgICBsZXQgc3BlZWQgPSBWZWN0b3IubXVsdCBkZWx0YV90IChWZWxvY2l0eS5nZXQgZSkgaW5cbiAgICAgIFBvc2l0aW9uLnNldCBlICh7IHggPSBwb3MueCArLiBzcGVlZC54OyB5ID0gcG9zLnkgKy4gc3BlZWQueSB9KVxuICAgICkgZWxcbiIsIm9wZW4gRWNzXG5tb2R1bGUgdHlwZSBTID1cbnNpZ1xuICB2YWwgaW5pdCA6IHVuaXQgLT4gdW5pdFxuICAoKiBpbml0aWFsaXplcyB0aGUgc3lzdGVtICopXG5cbiAgdmFsIHVwZGF0ZSA6IGZsb2F0IC0+IHVuaXRcbiAgKCogdXBkYXRlcyB0aGUgc3lzdGVtLiBUaGUgZmxvYXQgYXJndW1lbnQgaXMgdGhlIGN1cnJlbnQgdGltZSBpbiBuYW5vc2Vjb25kcyAqKVxuXG4gIHZhbCByZWdpc3RlciA6IEVudGl0eS50IC0+IHVuaXRcbiAgKCogcmVnaXN0ZXIgYW4gZW50aXR5IGZvciB0aGlzIHN5c3RlbSAqKVxuXG4gIHZhbCB1bnJlZ2lzdGVyIDogRW50aXR5LnQgLT4gdW5pdFxuICAoKiByZW1vdmUgYW4gZW50aXR5IGZyb20gdGhpcyBzeXN0ZW0gKilcblxuZW5kXG5cbm1vZHVsZSBNYWtlIChUIDogc2lnIHZhbCBpbml0IDogdW5pdCAtPiB1bml0IHZhbCB1cGRhdGUgOiBmbG9hdCAtPiBFbnRpdHkudCBsaXN0IC0+IHVuaXQgZW5kKSA6IFMgPVxuc3RydWN0XG4gIGxldCBlbGVtX2xpc3QgPSByZWYgW11cbiAgbGV0IGVsZW1fdGFibGUgPSBFbnRpdHkuVGFibGUuY3JlYXRlIDE2XG4gIGxldCByZWdpc3RlciBlID1cbiAgICBpZiBub3QgKEVudGl0eS5UYWJsZS5tZW0gZWxlbV90YWJsZSBlKSB0aGVuIGJlZ2luXG4gICAgICBFbnRpdHkuVGFibGUuYWRkIGVsZW1fdGFibGUgZSAoKTtcbiAgICAgIGVsZW1fbGlzdCA6PSBlIDo6ICFlbGVtX2xpc3RcbiAgICBlbmRcblxuICBsZXQgdW5yZWdpc3RlciBlID1cbiAgICBFbnRpdHkuVGFibGUucmVtb3ZlIGVsZW1fdGFibGUgZTtcbiAgICBlbGVtX2xpc3QgOj0gTGlzdC5maWx0ZXIgKGZ1biB4IC0+IHggPD4gZSkgIWVsZW1fbGlzdFxuXG4gIGxldCBpbml0ICgpID0gVC5pbml0ICgpXG4gIGxldCB1cGRhdGUgZHQgPVxuICAgIFQudXBkYXRlIGR0ICFlbGVtX2xpc3RcbmVuZFxuXG5sZXQgc3lzdGVtcyA9IHJlZiBbXVxuXG5sZXQgcmVnaXN0ZXIgbSA9XG4gIHN5c3RlbXMgOj0gbSA6OiAhc3lzdGVtc1xuXG5sZXQgaW5pdF9hbGwgKCkgPVxuICBMaXN0Lml0ZXIgKGZ1biBtIC0+XG4gICAgbGV0IG1vZHVsZSBNID0gKHZhbCBtIDogUykgaW5cbiAgICBNLmluaXQgKClcbiAgICApICFzeXN0ZW1zXG5sZXQgdXBkYXRlX2FsbCBkdCA9XG4gICAgTGlzdC5pdGVyIChmdW4gbSAtPlxuICAgICAgbGV0IG1vZHVsZSBNID0gKHZhbCBtIDogUykgaW5cbiAgICAgIE0udXBkYXRlIGR0XG4gICAgICApICFzeXN0ZW1zXG4iLCJtb2R1bGUgQ29udHJvbF9TID0gU3lzdGVtLk1ha2UgKENvbnRyb2xfc3lzdGVtKVxubW9kdWxlIERyYXdfUyA9IFN5c3RlbS5NYWtlKERyYXdfc3lzdGVtKVxubW9kdWxlIE1vdmVfUyA9IFN5c3RlbS5NYWtlKE1vdmVfc3lzdGVtKVxubW9kdWxlIENvbGxpc2lvbl9TID0gU3lzdGVtLk1ha2UoQ29sbGlzaW9uX3N5c3RlbSlcblxubGV0ICgpID1cbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgRHJhd19TKTtcbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgTW92ZV9TKTtcbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgQ29udHJvbF9TKTtcbiAgU3lzdGVtLnJlZ2lzdGVyIChtb2R1bGUgQ29sbGlzaW9uX1MpXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIFN5c3RlbV9kZWZzXG5vcGVuIEVjc1xuXG5cbmxldCBjcmVhdGUgbmFtZSB4IHkgaW1nPVxuICBsZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cbiAgbGV0IGFuaW0gPSBUZXh0dXJlLmNyZWF0ZV9hbmltYXRpb24gaW1nIDMgNCAxNjAgMTYwIDQwIDQwIGluXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5fTtcbiAgVmVsb2NpdHkuc2V0IGUgVmVjdG9yLnplcm87XG4gIE1hc3Muc2V0IGUgaW5maW5pdHk7XG4gIEJveC5zZXQgZSB7d2lkdGggPSA0MDsgaGVpZ2h0PTQwIH07XG4gIE5hbWUuc2V0IGUgbmFtZTtcbiAgU3VyZmFjZS5zZXQgZSBhbmltO1xuICBUZXh0dXJlLmNyZWF0ZV9pZGxlIFwiZnJvbnRfd2Fsa1wiICgwLDMpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJyaWdodF93YWxrXCIgKDMsNikgYW5pbTtcbiAgVGV4dHVyZS5jcmVhdGVfaWRsZSBcImJhY2tfd2Fsa1wiICg2LDkpIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJsZWZ0X3dhbGtcIiAoOSwxMikgYW5pbTtcbiAgVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcImZyb250X3dhbGtcIjtcbiAgUHJpb3JpdHkuc2V0IGUgMjtcbiAgKCogc3lzdGVtcyAqKVxuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xuICBDb250cm9sX1MucmVnaXN0ZXIgZTtcbiAgRHJhd19TLnJlZ2lzdGVyIGU7XG4gIE1vdmVfUy5yZWdpc3RlciBlO1xuICBlXG5cbmxldCByZXNldCBlIHggeSA9IFxuXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5IH1cblxubGV0IG1vdmVfdXAgZSA9XG4gIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZSBpblxuICAgIFRleHR1cmUucGxheV9pZGxlIGFuaW0gXCJiYWNrX3dhbGtcIjtcbiAgICBWZWxvY2l0eS5zZXQgZSB7IHggPSAwLjA7IHkgPSAtMjAwLjAgfVxuICBcbmxldCBtb3ZlX2Rvd24gZSA9XG4gIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZSBpblxuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwiZnJvbnRfd2Fsa1wiO1xuICAgIFZlbG9jaXR5LnNldCBlIHsgeCA9IDAuMDsgeSA9IDIwMC4wIH1cblxubGV0IG1vdmVfcmlnaHQgZSA9XG4gIGxldCBhbmltID0gU3VyZmFjZS5nZXQgZSBpblxuICBUZXh0dXJlLnBsYXlfaWRsZSBhbmltIFwicmlnaHRfd2Fsa1wiO1xuICAgIFZlbG9jaXR5LnNldCBlIHsgeCA9IDIwMC4wOyB5ID0gMC4wIH1cbiAgXG5sZXQgbW92ZV9sZWZ0IGUgPVxuICBsZXQgYW5pbSA9IFN1cmZhY2UuZ2V0IGUgaW5cbiAgVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcImxlZnRfd2Fsa1wiO1xuICAgIFZlbG9jaXR5LnNldCBlIHsgeCA9IC0yMDAuMDsgeSA9IDAuMCB9XG5cbmxldCBzdG9wIGUgPVxuICBWZWxvY2l0eS5zZXQgZSBWZWN0b3IuemVyb1xuICAiLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIEVjc1xuXG5cbmxldCBjcmVhdGUgbmFtZSB4IHkgcGFsZXR0ZSBtYXAgc2l6ZT1cbmxldCBlID0gRW50aXR5LmNyZWF0ZSAoKSBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICBNYXNzLnNldCBlIGluZmluaXR5O1xuICBOYW1lLnNldCBlIG5hbWU7XG4gIFN1cmZhY2Uuc2V0IGUgKFRleHR1cmUuY3JlYXRlX3RpbGVtYXAgcGFsZXR0ZSBtYXAgc2l6ZSk7XG4gIFByaW9yaXR5LnNldCBlIDA7XG4gICgqIHN5c3RlbXMgKilcblxuXG4gIGVcblxuIiwib3BlbiBDb21wb25lbnRfZGVmc1xyXG5vcGVuIFN5c3RlbV9kZWZzXHJcbm9wZW4gRWNzXHJcblxyXG5cclxuXHJcblxyXG5sZXQgY3JlYXRlIG5hbWUgeCB5IHh0IHl0PVxyXG5sZXQgZSA9IEVudGl0eS5jcmVhdGUgKCkgaW5cclxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSB4OyB5ID0geX07XHJcbiAgVGVsZXBvcnQuc2V0IGUgeyB4ID0geHQ7IHkgPSB5dH07XHJcbiAgQm94LnNldCBlIHsgd2lkdGggPSA0MDsgaGVpZ2h0ID0gNDB9O1xyXG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xyXG4gIE1hc3Muc2V0IGUgaW5maW5pdHk7XHJcbiAgTmFtZS5zZXQgZSBuYW1lO1xyXG4gIFN1cmZhY2Uuc2V0IGUgVGV4dHVyZS5ibGFjaztcclxuICBQcmlvcml0eS5zZXQgZSAxO1xyXG4gIFxyXG4gICgqIHN5c3RlbXMgKilcclxuICBEcmF3X1MucmVnaXN0ZXIgZTtcclxuICBDb2xsaXNpb25fUy5yZWdpc3RlciBlO1xyXG4gIGVcclxuXHJcblxyXG4iLCJvcGVuIENvbXBvbmVudF9kZWZzXG5vcGVuIEVjc1xuXG5cbmxldCBjcmVhdGUgbmFtZSBwb3NYIHBvc1kgdmVsWCB2ZWxZIGltZz0gKCpPbiBjaG9pc2l0IGxhIGRpcmVjdGlvbiBxdSdpbCBwcmVuZCBxdWFuZCBpbCBlc3QgY3LDqcOpKilcbiAgbGV0IGUgPSBFbnRpdHkuY3JlYXRlICgpIGluXG4gIGxldCBhbmltID0gVGV4dHVyZS5jcmVhdGVfYW5pbWF0aW9uIGltZyAzIDQgMTYwIDE2MCA0MCA0MCBpblxuICBQb3NpdGlvbi5zZXQgZSB7IHggPSBwb3NYOyB5ID0gcG9zWX07XG4gIFZlbG9jaXR5LnNldCBlIHsgeCA9IHZlbFg7IHkgPSB2ZWxZfTtcbiAgTWFzcy5zZXQgZSBpbmZpbml0eTtcbiAgQm94LnNldCBlIHt3aWR0aCA9IDQwOyBoZWlnaHQ9NDAgfTtcbiAgTmFtZS5zZXQgZSBuYW1lO1xuICBTdXJmYWNlLnNldCBlIGFuaW07XG4gIFRleHR1cmUuY3JlYXRlX2lkbGUgXCJtb3ZlXCIgKDAsMykgYW5pbTtcbiAgVGV4dHVyZS5wbGF5X2lkbGUgYW5pbSBcIm1vdmVcIjtcbiAgUHJpb3JpdHkuc2V0IGUgMjtcblxuICAoKiBzeXN0ZW1zICopXG4gIFxuICBlXG5cbmxldCByZXNldCBlIHggeSA9IFxuXG4gIFBvc2l0aW9uLnNldCBlIHsgeCA9IHg7IHkgPSB5IH1cblxubGV0IHN0b3AgZSA9XG4gIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvXG4gICIsIlxub3BlbiBFY3Ncbm9wZW4gU3lzdGVtX2RlZnNcbm9wZW4gQ29tcG9uZW50X2RlZnNcbnR5cGUgcm9vbSA9IHsgXG4gIGluZGV4IDogaW50O1xuICBpZDogRW50aXR5LnQ7XG4gIGVubmVtaWVzIDogRW50aXR5LnQgbGlzdDtcbiAgdmFsdWUgOiBpbnQgYXJyYXkgYXJyYXk7XG4gIGRvb3JzIDogKGJvb2wqaW50KSBhcnJheTtcblxufVxuXG50eXBlIHQgPSB7XG4gIHBsYXllciA6IEVudGl0eS50O1xuICBcbiAgaXNQbGF5aW5nIDogYm9vbDtcbiAgY3VycmVudFJvb20gOiByb29tO1xuICBtYXAgOiByb29tIGFycmF5O1xuICBkb29yc19lbnRpdHkgOiBFbnRpdHkudCBhcnJheTtcbn1cblxubGV0IHN0YXRlID0gcmVmIHtcbiAgcGxheWVyID0gRW50aXR5LmR1bW15O1xuICBpc1BsYXlpbmcgPSB0cnVlO1xuICBjdXJyZW50Um9vbSA9IHtpZD1FbnRpdHkuZHVtbXk7ZW5uZW1pZXM9W107aW5kZXg9KC0xKTt2YWx1ZT1bfHxdO2Rvb3JzPVt8fF19O1xuICBtYXAgPSBbfHxdO1xuICBkb29yc19lbnRpdHkgPSBbfEVudGl0eS5kdW1teTtFbnRpdHkuZHVtbXk7RW50aXR5LmR1bW15O0VudGl0eS5kdW1teXxdO1xufVxuXG5cblxubGV0IGdldF9wbGF5ZXIgKCkgPSAhc3RhdGUucGxheWVyXG5sZXQgZ2V0X3N0YXR1cyAoKT0gIXN0YXRlLmlzUGxheWluZ1xuXG5cbmxldCBkb29yX2YgbiA9XG4gIG1hdGNoIG4gd2l0aCBcbiAgMCAtPiAyXG4gIHwxIC0+IDNcbiAgfDIgLT4gMFxuICB8MyAtPiAxXG4gIHxfIC0+IC0xXG5cbmxldCByYW5kb21fZG9vciByb29tID1cbiAgUmFuZG9tLnNlbGZfaW5pdCAoKTtcbiAgbGV0IGxpc3QgPSByZWYgW11pblxuICAgICBmb3IgaSA9IDAgdG8gKEFycmF5Lmxlbmd0aCByb29tLmRvb3JzKS0xIGRvXG4gICAgICBsZXQgZG9vciA9IEFycmF5LmdldCByb29tLmRvb3JzIGkgaW5cbiAgICAgIGlmIChmc3QgZG9vciA9PSBmYWxzZSkgdGhlbiBsaXN0IDo9IGk6OighbGlzdCk7XG4gICAgIGRvbmU7XG4gICAgTGlzdC5udGggIWxpc3QgKFJhbmRvbS5pbnQgKExpc3QubGVuZ3RoICFsaXN0KSlcblxubGV0IHBhdGggbSA9IFxuXG4gIGxldCByZWMgcGF0aF9hdXggbWFwIHJvb20gPVxuICAgIGxldCBkb29yID0gcmFuZG9tX2Rvb3Igcm9vbSBpblxuICAgIG1hdGNoIG1hcCB3aXRoIFxuICAgIHxbXSAtPiBbXVxuICAgIHxbeF0gLT4gXG4gICAgICBBcnJheS5zZXQgcm9vbS5kb29ycyBkb29yICAodHJ1ZSx4LmluZGV4KTtcbiAgICAgIEFycmF5LnNldCB4LmRvb3JzIChkb29yX2YgZG9vcikgKHRydWUscm9vbS5pbmRleCk7XG4gICAgICBmb3IgaSA9IDAgdG8gKEFycmF5Lmxlbmd0aCByb29tLmRvb3JzKS0xIGRvXG4gICAgICAgIGxldCBiLGluZCA9IEFycmF5LmdldCByb29tLmRvb3JzIGkgaW5cbiAgICAgICAgR2Z4LmRlYnVnIChGb3JtYXQuYXNwcmludGYgXCJpbmRleCAlZCBkb29yICAlZCAlYlwicm9vbS5pbmRleCAgaW5kIGIpO1xuICAgICAgIGRvbmU7XG4gICAgICBmb3IgaSA9IDAgdG8gKEFycmF5Lmxlbmd0aCB4LmRvb3JzKS0xIGRvXG4gICAgICAgIGxldCBiLGluZCA9IEFycmF5LmdldCB4LmRvb3JzIGkgaW5cbiAgICAgICAgR2Z4LmRlYnVnIChGb3JtYXQuYXNwcmludGYgXCJpbmRleCAlZCBkb29yICAlZCAlYlwieC5pbmRleCAgaW5kIGIpO1xuICAgICAgIGRvbmU7XG4gICAgICByb29tOjpbeF1cbiAgICB8IHg6OnRhaWwgLT4gXG4gICAgICAgIEFycmF5LnNldCByb29tLmRvb3JzIGRvb3IgICh0cnVlLHguaW5kZXgpO1xuICAgICAgICBBcnJheS5zZXQgeC5kb29ycyAoZG9vcl9mIGRvb3IpICh0cnVlLHJvb20uaW5kZXgpO1xuICAgICAgICBmb3IgaSA9IDAgdG8gKEFycmF5Lmxlbmd0aCByb29tLmRvb3JzKS0xIGRvXG4gICAgICAgICAgbGV0IGIsaW5kID0gQXJyYXkuZ2V0IHJvb20uZG9vcnMgaSBpblxuICAgICAgICAgIEdmeC5kZWJ1ZyAoRm9ybWF0LmFzcHJpbnRmIFwiaW5kZXggJWQgZG9vciAlZCAlYlwiIHJvb20uaW5kZXggaW5kIGIpO1xuICAgICAgICAgZG9uZTtcbiAgICAgICAgcm9vbTo6KHBhdGhfYXV4IHRhaWwgeCkgXG5cbiAgaW5cbiAgcGF0aF9hdXggKExpc3QudGwgbSkgKExpc3QuaGQgbSkgXG5cbiAgbGV0IGdlbmVyYXRlX21hcCBkIHAgbiBwbGF5ZXJfaW1nPVxuICBsZXQgbWFwID0gTGlzdC5pbml0IG4gKGZ1biBlIC0+IFxuICAgIGxldCBlbnRpdHkgPSBNYXAuY3JlYXRlIFwibWFwXCIgMC4gODAuIHAgZCA0MCBpblxuICAgIGxldCBlMSA9IEVuZW15LmNyZWF0ZSBcImVubmVteVwiIDIwMC4gMjQwLiAwLiAxMDAuIHBsYXllcl9pbWcgaW5cbiAgICBsZXQgZW5uZW1pZXMgPSBbZTFdIGluXG4gICAge2lkPWVudGl0eTtlbm5lbWllcz1lbm5lbWllcztpbmRleD1lO3ZhbHVlPWQ7ZG9vcnM9KEFycmF5LmluaXQgNCAoZnVuIF9lIC0+IChmYWxzZSwtMSkpKX0gXG4gICAgKWluXG4gICAgQXJyYXkub2ZfbGlzdCAocGF0aCBtYXApXG4gIFxuICAgIGxldCBkaXNhYmxlX2Rvb3IgZSA9XG4gICAgICBEcmF3X1MudW5yZWdpc3RlciBlO1xuICAgICAgQ29sbGlzaW9uX1MudW5yZWdpc3RlciBlO1xuICAgICAgKClcblxuICAgICAgbGV0IGVuYWJsZV9kb29yIGUgPVxuICAgICAgICBEcmF3X1MucmVnaXN0ZXIgZTtcbiAgICAgICAgQ29sbGlzaW9uX1MucmVnaXN0ZXIgZTtcbiAgICAgICAgKClcblxuICAgIGxldCBjaGFuZ2VfZG9vciAoKSA9XG4gICAgICBsZXQgZCA9ICFzdGF0ZS5jdXJyZW50Um9vbS5kb29ycyBpblxuICAgICAgbGV0IGRfZSA9ICFzdGF0ZS5kb29yc19lbnRpdHkgaW5cbiAgICAgIGZvciBpID0gMCB0byAzIGRvXG4gICAgICAgIGlmIChmc3QgKEFycmF5LmdldCBkIGkpKSB0aGVuIGVuYWJsZV9kb29yIChBcnJheS5nZXQgZF9lIGkpXG4gICAgICAgIGVsc2UgZGlzYWJsZV9kb29yIChBcnJheS5nZXQgZF9lIGkpXG4gICAgICBkb25lXG5cbiAgICAgIGxldCBnZXRfZG9vciBuYW1lID0gXG4gICAgICBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcImxlZnRcIik9PTAgdGhlbiAoQXJyYXkuZ2V0ICFzdGF0ZS5jdXJyZW50Um9vbS5kb29ycyAwKVxuICAgICAgZWxzZSBpZiAoU3RyaW5nLmNvbXBhcmUgbmFtZSBcInRvcFwiKT09MCB0aGVuIChBcnJheS5nZXQgIXN0YXRlLmN1cnJlbnRSb29tLmRvb3JzIDEpXG4gICAgICBlbHNlIGlmIChTdHJpbmcuY29tcGFyZSBuYW1lIFwicmlnaHRcIik9PTAgdGhlbihBcnJheS5nZXQgIXN0YXRlLmN1cnJlbnRSb29tLmRvb3JzIDIpXG4gICAgICBlbHNlIGlmIChTdHJpbmcuY29tcGFyZSBuYW1lIFwiYm90dG9tXCIpPT0wIHRoZW4oQXJyYXkuZ2V0ICFzdGF0ZS5jdXJyZW50Um9vbS5kb29ycyAzKVxuICAgICAgZWxzZSAoZmFsc2UsMSlcblxuICAgICAgbGV0IGxvYWRfZW5uZW1pZSBlID1cbiAgICAgICAgQ29sbGlzaW9uX1MucmVnaXN0ZXIgZTtcbiAgICAgICAgQ29udHJvbF9TLnJlZ2lzdGVyIGU7XG4gICAgICAgIERyYXdfUy5yZWdpc3RlciBlO1xuICAgICAgICBNb3ZlX1MucmVnaXN0ZXIgZVxuXG4gICAgICBsZXQgdW5sb2FkX2VubmVtaWUgZSA9XG4gICAgICAgIENvbGxpc2lvbl9TLnVucmVnaXN0ZXIgZTtcbiAgICAgICAgQ29udHJvbF9TLnVucmVnaXN0ZXIgZTtcbiAgICAgICAgRHJhd19TLnVucmVnaXN0ZXIgZTtcbiAgICAgICAgTW92ZV9TLnVucmVnaXN0ZXIgZVxuICAgICAgICBcbiAgICAgIGxldCBjaGFuZ2Vfcm9vbSBlID1cbiAgICAgICAgbGV0IG5hbWUgPSBOYW1lLmdldCBlIGluXG4gICAgICAgIGxldCByID0gc25kIChnZXRfZG9vciBuYW1lKSBpblxuICAgICAgICBsZXQgcm9vbSA9IChBcnJheS5nZXQgIXN0YXRlLm1hcCByKWluXG4gICAgICAgIGxldCBvbGRfcm9vbSA9ICFzdGF0ZS5jdXJyZW50Um9vbSBpblxuICAgICAgICBHZnguZGVidWcgKEZvcm1hdC5hc3ByaW50ZiBcInBsYXkgJWQgJWRcIiByIChBcnJheS5sZW5ndGggIXN0YXRlLm1hcCkpO1xuICAgICAgICBzdGF0ZSA6PSB7ICFzdGF0ZSB3aXRoIGN1cnJlbnRSb29tID0gcm9vbTt9O1xuICAgICAgICBMaXN0Lml0ZXIgKGZ1biBlIC0+IHVubG9hZF9lbm5lbWllIGUpIG9sZF9yb29tLmVubmVtaWVzO1xuICAgICAgICBMaXN0Lml0ZXIgKGZ1biBlIC0+IGxvYWRfZW5uZW1pZSBlKSByb29tLmVubmVtaWVzO1xuICAgICAgICBjaGFuZ2VfZG9vciAoKSAgICAgICAgXG4gICAgXG4gIGxldCBjb2xsaXNpb24gZG9vciBlID0gXG4gICAgbGV0IG5hbWUgPSBOYW1lLmdldCBlIGluXG4gICAgaWYgKFN0cmluZy5jb21wYXJlIG5hbWUgXCJwbGF5ZXJcIikgPT0gMCB0aGVuIGJlZ2luXG4gICAgICBjaGFuZ2Vfcm9vbSBkb29yO1xuICAgICAgUG9zaXRpb24uc2V0IGUgKFRlbGVwb3J0LmdldCBkb29yKTtcbiAgICAgIFZlbG9jaXR5LnNldCBlIFZlY3Rvci56ZXJvO1xuICAgIGVuZFxuXG4gICAgbGV0IGluaXQgcGUxIG1hcD1cbiAgICAgIGxldCBkb29yc0luaXQgPSBbfChEb29yLmNyZWF0ZSBcImxlZnRcIiA0MC4gMzIwLiA2NjAuIDMyMC4pOyhEb29yLmNyZWF0ZSBcInRvcFwiIDQwMC4gMTIwLiA0MDAuIDUwMC4pOyhEb29yLmNyZWF0ZSBcInJpZ2h0XCIgNzIwLiAzMjAuIDEwMC4gMzIwLik7KERvb3IuY3JlYXRlIFwiYm90dG9tXCIgNDAwLiA1NjAuIDQwMC4gMTgwLikgfF1pblxuICAgICAgQXJyYXkuaXRlciAoZnVuIGUgLT4gQ29sbGlzaW9uUmVzb2x2ZXIuc2V0IGUgY29sbGlzaW9uKSBkb29yc0luaXQ7XG4gICAgICBzdGF0ZSA6PSB7ICFzdGF0ZSB3aXRoIHBsYXllciA9IHBlMTsgbWFwID0gbWFwO2N1cnJlbnRSb29tPShBcnJheS5nZXQgbWFwIDApO2Rvb3JzX2VudGl0eSA9IGRvb3JzSW5pdH07XG4gICAgICBEcmF3X1MucmVnaXN0ZXIgIXN0YXRlLmN1cnJlbnRSb29tLmlkO1xuICAgICAgTGlzdC5pdGVyIChmdW4gZSAtPiBsb2FkX2VubmVtaWUgZSkgIXN0YXRlLmN1cnJlbnRSb29tLmVubmVtaWVzO1xuICAgICAgY2hhbmdlX2Rvb3IgKClcblxuICAgIFxuXG5cblxuXG5cblxuIiwiXHJcblxyXG5cclxubGV0IHBsYXllcl9pbWcgPSBHZngubG9hZF9pbWFnZShcInNyYy9pbWcvY2hhclNoZWV0LnBuZ1wiKVxyXG4oKiAqKVxyXG5sZXQgaW5pdF9nYW1lIF9kdCA9IFxyXG4gIFN5c3RlbS5pbml0X2FsbCAoKTtcclxuICBHZnguZGVidWcgKEZvcm1hdC5hc3ByaW50ZiBcIiBpbml0XCIpO1xyXG4gIFxyXG4gIGxldCBwbGF5ZXIgPSBQbGF5ZXIuY3JlYXRlIFwicGxheWVyXCIgODAuIDI0MC4gcGxheWVyX2ltZyBpblxyXG4gXHJcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlEb3duIFwielwiKSAoZnVuICgpIC0+IFBsYXllci5tb3ZlX3VwIHBsYXllcik7XHJcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlEb3duIFwic1wiKSAoZnVuICgpIC0+IFBsYXllci5tb3ZlX2Rvd24gcGxheWVyKTtcclxuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleURvd24gXCJxXCIpIChmdW4gKCkgLT4gUGxheWVyLm1vdmVfbGVmdCBwbGF5ZXIpO1xyXG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5RG93biBcImRcIikgKGZ1biAoKSAtPiBQbGF5ZXIubW92ZV9yaWdodCBwbGF5ZXIpO1xyXG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5VXAgXCJ6XCIpIChmdW4gKCkgLT4gUGxheWVyLnN0b3AgcGxheWVyKTtcclxuICBJbnB1dF9oYW5kbGVyLnJlZ2lzdGVyX2NvbW1hbmQgKEtleVVwIFwic1wiKSAoZnVuICgpIC0+IFBsYXllci5zdG9wIHBsYXllcik7XHJcbiAgSW5wdXRfaGFuZGxlci5yZWdpc3Rlcl9jb21tYW5kIChLZXlVcCBcInFcIikgKGZ1biAoKSAtPiBQbGF5ZXIuc3RvcCBwbGF5ZXIpO1xyXG4gIElucHV0X2hhbmRsZXIucmVnaXN0ZXJfY29tbWFuZCAoS2V5VXAgXCJkXCIpIChmdW4gKCkgLT4gUGxheWVyLnN0b3AgcGxheWVyKTtcclxuICBsZXQgbWFwID0gR2FtZV9zdGF0ZS5nZW5lcmF0ZV9tYXAgR2xvYmFsLm1hcCBHbG9iYWwucGFsZXR0ZSA1IHBsYXllcl9pbWcgaW5cclxuICBcclxuICBHYW1lX3N0YXRlLmluaXQgcGxheWVyIG1hcDtcclxuICBmYWxzZVxyXG5cclxubGV0IHBsYXlfZ2FtZSBkdCA9XHJcbiAgKCogVXBkYXRlIGFsbCBzeXN0ZW1zICopXHJcbiAgR2Z4LmRlYnVnIChGb3JtYXQuYXNwcmludGYgXCIgcGxheVwiKTtcclxuICBTeXN0ZW0udXBkYXRlX2FsbCBkdDtcclxuICBpZiAobm90KEdhbWVfc3RhdGUuZ2V0X3N0YXR1cyAoKSkpIHRoZW4gZmFsc2VcclxuICBlbHNlIHRydWVcclxuXHJcbmxldCBlbmRfZ2FtZSBfZHQgPVxyXG5HZnguZGVidWcgKEZvcm1hdC5hc3ByaW50ZiBcIiBlbmRcIik7XHJcbiBmYWxzZSBcclxuIFxyXG5sZXQgbG9hZF9ncmFwaGljcyBfZHQgPSBcclxuICBpZiAoKEdmeC5pbWFnZV9yZWFkeSBwbGF5ZXJfaW1nKSkgdGhlbiBmYWxzZVxyXG4gIGVsc2UgdHJ1ZVxyXG5cclxubGV0IGNoYWluX2Z1bmN0aW9ucyBmX2xpc3QgPSBcclxuICBsZXQgZnVucyA9IHJlZiBmX2xpc3QgaW5cclxuICBmdW4gZHQgLT4gbWF0Y2ggIWZ1bnMgd2l0aFxyXG4gICAgICAgICAgICBbXSAtPiBmYWxzZVxyXG4gICAgICAgICAgICB8IGYgOjogbGwgLT4gXHJcbiAgICAgICAgICAgICAgaWYgZiBkdCB0aGVuXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgZWxzZSBiZWdpblxyXG4gICAgICAgICAgICAgICAgZnVucyA6PSBsbDtcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICBlbmRcclxuXHJcbmxldCBydW4gKCkgPSAgXHJcbiAgbGV0IG0gPSBjaGFpbl9mdW5jdGlvbnMgW2xvYWRfZ3JhcGhpY3M7aW5pdF9nYW1lO3BsYXlfZ2FtZTtlbmRfZ2FtZV1pblxyXG4gIEdmeC5tYWluX2xvb3AgbVxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIl19
