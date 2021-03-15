(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_array_concat=runtime.caml_array_concat,
     caml_array_get=runtime.caml_array_get,
     caml_array_set=runtime.caml_array_set,
     caml_array_sub=runtime.caml_array_sub,
     caml_ba_change_layout=runtime.caml_ba_change_layout,
     caml_ba_create=runtime.caml_ba_create,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_dim_2=runtime.caml_ba_dim_2,
     caml_ba_kind=runtime.caml_ba_kind,
     caml_ba_num_dims=runtime.caml_ba_num_dims,
     caml_ba_reshape=runtime.caml_ba_reshape,
     caml_ba_slice=runtime.caml_ba_slice,
     caml_blit_bytes=runtime.caml_blit_bytes,
     caml_blit_string=runtime.caml_blit_string,
     caml_bswap16=runtime.caml_bswap16,
     caml_bytes_get=runtime.caml_bytes_get,
     caml_bytes_get16=runtime.caml_bytes_get16,
     caml_bytes_get32=runtime.caml_bytes_get32,
     caml_bytes_get64=runtime.caml_bytes_get64,
     caml_bytes_of_string=runtime.caml_bytes_of_string,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_bytes_set16=runtime.caml_bytes_set16,
     caml_bytes_set32=runtime.caml_bytes_set32,
     caml_bytes_set64=runtime.caml_bytes_set64,
     caml_bytes_unsafe_get=runtime.caml_bytes_unsafe_get,
     caml_bytes_unsafe_set=runtime.caml_bytes_unsafe_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_compare=runtime.caml_compare,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_div=runtime.caml_div,
     caml_ephe_set_key=runtime.caml_ephe_set_key,
     caml_ephe_unset_key=runtime.caml_ephe_unset_key,
     caml_equal=runtime.caml_equal,
     caml_fill_bytes=runtime.caml_fill_bytes,
     caml_float_compare=runtime.caml_float_compare,
     caml_float_of_string=runtime.caml_float_of_string,
     caml_floatarray_create=runtime.caml_floatarray_create,
     caml_format_float=runtime.caml_format_float,
     caml_format_int=runtime.caml_format_int,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_get_exception_raw_backtra=runtime.caml_get_exception_raw_backtrace,
     caml_get_public_method=runtime.caml_get_public_method,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_greaterthan=runtime.caml_greaterthan,
     caml_hash=runtime.caml_hash,
     caml_input_value=runtime.caml_input_value,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_add=runtime.caml_int64_add,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_compare=runtime.caml_int64_compare,
     caml_int64_float_of_bits=runtime.caml_int64_float_of_bits,
     caml_int64_format=runtime.caml_int64_format,
     caml_int64_mul=runtime.caml_int64_mul,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_int64_of_string=runtime.caml_int64_of_string,
     caml_int64_or=runtime.caml_int64_or,
     caml_int64_shift_left=runtime.caml_int64_shift_left,
     caml_int64_sub=runtime.caml_int64_sub,
     caml_int_compare=runtime.caml_int_compare,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_lessequal=runtime.caml_lessequal,
     caml_lessthan=runtime.caml_lessthan,
     caml_make_vect=runtime.caml_make_vect,
     caml_marshal_data_size=runtime.caml_marshal_data_size,
     caml_md5_string=runtime.caml_md5_string,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_channel_size=runtime.caml_ml_channel_size,
     caml_ml_channel_size_64=runtime.caml_ml_channel_size_64,
     caml_ml_close_channel=runtime.caml_ml_close_channel,
     caml_ml_flush=runtime.caml_ml_flush,
     caml_ml_input=runtime.caml_ml_input,
     caml_ml_input_char=runtime.caml_ml_input_char,
     caml_ml_open_descriptor_in=runtime.caml_ml_open_descriptor_in,
     caml_ml_open_descriptor_out=runtime.caml_ml_open_descriptor_out,
     caml_ml_output=runtime.caml_ml_output,
     caml_ml_output_bytes=runtime.caml_ml_output_bytes,
     caml_ml_output_char=runtime.caml_ml_output_char,
     caml_ml_set_binary_mode=runtime.caml_ml_set_binary_mode,
     caml_ml_set_channel_name=runtime.caml_ml_set_channel_name,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_mod=runtime.caml_mod,
     caml_mul=runtime.caml_mul,
     caml_nextafter_float=runtime.caml_nextafter_float,
     caml_notequal=runtime.caml_notequal,
     caml_obj_block=runtime.caml_obj_block,
     caml_obj_set_tag=runtime.caml_obj_set_tag,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_obj_truncate=runtime.caml_obj_truncate,
     caml_output_value=runtime.caml_output_value,
     caml_register_global=runtime.caml_register_global,
     caml_register_named_value=runtime.caml_register_named_value,
     caml_restore_raw_backtrace=runtime.caml_restore_raw_backtrace,
     caml_set_oo_id=runtime.caml_set_oo_id,
     caml_signbit_float=runtime.caml_signbit_float,
     caml_spacetime_enabled=runtime.caml_spacetime_enabled,
     caml_spacetime_only_works_for_=
      runtime.caml_spacetime_only_works_for_native_code,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_bytes=runtime.caml_string_of_bytes,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_sys_open=runtime.caml_sys_open,
     caml_sys_random_seed=runtime.caml_sys_random_seed,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst$0=caml_string_of_jsbytes("%,"),
     cst_really_input=caml_string_of_jsbytes("really_input"),
     cst_input=caml_string_of_jsbytes("input"),
     cst_output_substring=caml_string_of_jsbytes("output_substring"),
     cst_output=caml_string_of_jsbytes("output"),
     cst_12g=caml_string_of_jsbytes("%.12g"),
     cst=caml_string_of_jsbytes("."),
     cst_false$1=caml_string_of_jsbytes("false"),
     cst_true$1=caml_string_of_jsbytes("true"),
     cst_false$0=caml_string_of_jsbytes("false"),
     cst_true$0=caml_string_of_jsbytes("true"),
     cst_bool_of_string=caml_string_of_jsbytes("bool_of_string"),
     cst_true=caml_string_of_jsbytes("true"),
     cst_false=caml_string_of_jsbytes("false"),
     cst_char_of_int=caml_string_of_jsbytes("char_of_int"),
     cst_Stdlib_Exit=caml_string_of_jsbytes("Stdlib.Exit"),
     cst_Stdlib_Pervasives_Exit=
      caml_string_of_jsbytes("Stdlib.Pervasives.Exit"),
     cst_option_is_None=caml_string_of_jsbytes("option is None"),
     cst_result_is_Ok=caml_string_of_jsbytes("result is Ok _"),
     cst_result_is_Error=caml_string_of_jsbytes("result is Error _"),
     cst_true$2=caml_string_of_jsbytes("true"),
     cst_false$2=caml_string_of_jsbytes("false"),
     cst$1=caml_string_of_jsbytes("\\\\"),
     cst$2=caml_string_of_jsbytes("\\'"),
     cst_b=caml_string_of_jsbytes("\\b"),
     cst_t=caml_string_of_jsbytes("\\t"),
     cst_n=caml_string_of_jsbytes("\\n"),
     cst_r=caml_string_of_jsbytes("\\r"),
     cst_Char_chr=caml_string_of_jsbytes("Char.chr"),
     cst_is_not_a_latin1_character=
      caml_string_of_jsbytes(" is not a latin1 character"),
     cst_04X=caml_string_of_jsbytes("%04X"),
     cst_U=caml_string_of_jsbytes("U+"),
     cst_is_not_an_Unicode_scalar_v=
      caml_string_of_jsbytes(" is not an Unicode scalar value"),
     cst_X=caml_string_of_jsbytes("%X"),
     err_no_pred=caml_string_of_jsbytes("U+0000 has no predecessor"),
     err_no_succ=caml_string_of_jsbytes("U+10FFFF has no successor"),
     cst_Stdlib_Sys_Break=caml_string_of_jsbytes("Stdlib.Sys.Break"),
     ocaml_version=caml_string_of_jsbytes("4.08.1"),
     cst_List_map2=caml_string_of_jsbytes("List.map2"),
     cst_List_iter2=caml_string_of_jsbytes("List.iter2"),
     cst_List_fold_left2=caml_string_of_jsbytes("List.fold_left2"),
     cst_List_fold_right2=caml_string_of_jsbytes("List.fold_right2"),
     cst_List_for_all2=caml_string_of_jsbytes("List.for_all2"),
     cst_List_exists2=caml_string_of_jsbytes("List.exists2"),
     cst_List_combine=caml_string_of_jsbytes("List.combine"),
     cst_List_rev_map2=caml_string_of_jsbytes("List.rev_map2"),
     cst_List_init=caml_string_of_jsbytes("List.init"),
     cst_List_nth$0=caml_string_of_jsbytes("List.nth"),
     cst_nth=caml_string_of_jsbytes("nth"),
     cst_List_nth=caml_string_of_jsbytes("List.nth"),
     cst_tl=caml_string_of_jsbytes("tl"),
     cst_hd=caml_string_of_jsbytes("hd"),
     cst_Bytes_of_seq_cannot_grow_b=
      caml_string_of_jsbytes("Bytes.of_seq: cannot grow bytes"),
     cst_String_rcontains_from_Byte=
      caml_string_of_jsbytes("String.rcontains_from / Bytes.rcontains_from"),
     cst_String_contains_from_Bytes=
      caml_string_of_jsbytes("String.contains_from / Bytes.contains_from"),
     cst_String_rindex_from_opt_Byt=
      caml_string_of_jsbytes("String.rindex_from_opt / Bytes.rindex_from_opt"),
     cst_String_rindex_from_Bytes_r=
      caml_string_of_jsbytes("String.rindex_from / Bytes.rindex_from"),
     cst_String_index_from_opt_Byte=
      caml_string_of_jsbytes("String.index_from_opt / Bytes.index_from_opt"),
     cst_String_index_from_Bytes_in=
      caml_string_of_jsbytes("String.index_from / Bytes.index_from"),
     cst_Bytes_concat=caml_string_of_jsbytes("Bytes.concat"),
     cst_String_blit_Bytes_blit_str=
      caml_string_of_jsbytes("String.blit / Bytes.blit_string"),
     cst_Bytes_blit=caml_string_of_jsbytes("Bytes.blit"),
     cst_String_fill_Bytes_fill=
      caml_string_of_jsbytes("String.fill / Bytes.fill"),
     cst_Bytes_extend=caml_string_of_jsbytes("Bytes.extend"),
     cst_String_sub_Bytes_sub=caml_string_of_jsbytes("String.sub / Bytes.sub"),
     cst_String_rcontains_from_Byte$0=
      caml_string_of_jsbytes("String.rcontains_from / Bytes.rcontains_from"),
     cst_String_contains_from_Bytes$0=
      caml_string_of_jsbytes("String.contains_from / Bytes.contains_from"),
     cst_String_rindex_from_opt_Byt$0=
      caml_string_of_jsbytes("String.rindex_from_opt / Bytes.rindex_from_opt"),
     cst_String_rindex_from_Bytes_r$0=
      caml_string_of_jsbytes("String.rindex_from / Bytes.rindex_from"),
     cst_String_index_from_opt_Byte$0=
      caml_string_of_jsbytes("String.index_from_opt / Bytes.index_from_opt"),
     cst_String_index_from_Bytes_in$0=
      caml_string_of_jsbytes("String.index_from / Bytes.index_from"),
     cst$4=caml_string_of_jsbytes(""),
     cst$3=caml_string_of_jsbytes(""),
     cst_String_concat=caml_string_of_jsbytes("String.concat"),
     cst$5=caml_string_of_jsbytes("()"),
     cst_Marshal_from_bytes=caml_string_of_jsbytes("Marshal.from_bytes"),
     cst_Marshal_from_bytes$0=caml_string_of_jsbytes("Marshal.from_bytes"),
     cst_Marshal_data_size=caml_string_of_jsbytes("Marshal.data_size"),
     cst_Marshal_to_buffer_substrin=
      caml_string_of_jsbytes("Marshal.to_buffer: substring out of bounds"),
     cst_Obj_Ephemeron_blit_key=
      caml_string_of_jsbytes("Obj.Ephemeron.blit_key"),
     cst_Obj_Ephemeron_check_key=
      caml_string_of_jsbytes("Obj.Ephemeron.check_key"),
     cst_Obj_Ephemeron_unset_key=
      caml_string_of_jsbytes("Obj.Ephemeron.unset_key"),
     cst_Obj_Ephemeron_set_key=caml_string_of_jsbytes("Obj.Ephemeron.set_key"),
     cst_Obj_Ephemeron_get_key_copy=
      caml_string_of_jsbytes("Obj.Ephemeron.get_key_copy"),
     cst_Obj_Ephemeron_get_key=caml_string_of_jsbytes("Obj.Ephemeron.get_key"),
     cst_Obj_Ephemeron_create=caml_string_of_jsbytes("Obj.Ephemeron.create"),
     cst_Obj_extension_constructor$0=
      caml_string_of_jsbytes("Obj.extension_constructor"),
     cst_Obj_extension_constructor=
      caml_string_of_jsbytes("Obj.extension_constructor"),
     cst_Array_map2_arrays_must_hav=
      caml_string_of_jsbytes("Array.map2: arrays must have the same length"),
     cst_Array_iter2_arrays_must_ha=
      caml_string_of_jsbytes("Array.iter2: arrays must have the same length"),
     cst_Array_blit=caml_string_of_jsbytes("Array.blit"),
     cst_Array_fill=caml_string_of_jsbytes("Array.fill"),
     cst_Array_sub=caml_string_of_jsbytes("Array.sub"),
     cst_Array_init=caml_string_of_jsbytes("Array.init"),
     cst_Stdlib_Array_Bottom=caml_string_of_jsbytes("Stdlib.Array.Bottom"),
     cst_Float_Array_map2_arrays_mu=
      caml_string_of_jsbytes
       ("Float.Array.map2: arrays must have the same length"),
     cst_Float_Array_iter2_arrays_m=
      caml_string_of_jsbytes
       ("Float.Array.iter2: arrays must have the same length"),
     cst_Float_array_blit=caml_string_of_jsbytes("Float.array.blit"),
     cst_Float_array_blit$0=caml_string_of_jsbytes("Float.array.blit"),
     cst_Float_Array_fill=caml_string_of_jsbytes("Float.Array.fill"),
     cst_Float_Array_sub=caml_string_of_jsbytes("Float.Array.sub"),
     cst_Float_Array_concat=caml_string_of_jsbytes("Float.Array.concat"),
     cst_Float_Array_init=caml_string_of_jsbytes("Float.Array.init"),
     cst_Stdlib_Float_Array_Bottom=
      caml_string_of_jsbytes("Stdlib.Float.Array.Bottom"),
     cst_d=caml_string_of_jsbytes("%d"),
     cst_d$0=caml_string_of_jsbytes("%d"),
     zero$2=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     one$2=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     minus_one$2=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,65535),
     min_int$2=runtime.caml_int64_create_lo_mi_hi(0,0,32768),
     max_int$2=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32767),
     cst_d$1=caml_string_of_jsbytes("%d"),
     cst_Lexing_lex_refill_cannot_g=
      caml_string_of_jsbytes("Lexing.lex_refill: cannot grow buffer"),
     dummy_pos=[0,caml_string_of_jsbytes(""),0,0,-1],
     zero_pos=[0,caml_string_of_jsbytes(""),1,0,0],
     cst_syntax_error=caml_string_of_jsbytes("syntax error"),
     cst_Stdlib_Parsing_YYexit=caml_string_of_jsbytes("Stdlib.Parsing.YYexit"),
     cst_Stdlib_Parsing_Parse_error=
      caml_string_of_jsbytes("Stdlib.Parsing.Parse_error"),
     cst_Set_remove_min_elt=caml_string_of_jsbytes("Set.remove_min_elt"),
     cst_Set_bal=caml_string_of_jsbytes("Set.bal"),
     cst_Set_bal$0=caml_string_of_jsbytes("Set.bal"),
     cst_Set_bal$1=caml_string_of_jsbytes("Set.bal"),
     cst_Set_bal$2=caml_string_of_jsbytes("Set.bal"),
     cst_Map_remove_min_elt=caml_string_of_jsbytes("Map.remove_min_elt"),
     cst_Map_bal=caml_string_of_jsbytes("Map.bal"),
     cst_Map_bal$0=caml_string_of_jsbytes("Map.bal"),
     cst_Map_bal$1=caml_string_of_jsbytes("Map.bal"),
     cst_Map_bal$2=caml_string_of_jsbytes("Map.bal"),
     cst_Stdlib_Stack_Empty=caml_string_of_jsbytes("Stdlib.Stack.Empty"),
     cst_Stdlib_Queue_Empty=caml_string_of_jsbytes("Stdlib.Queue.Empty"),
     cst_CamlinternalLazy_Undefined=
      caml_string_of_jsbytes("CamlinternalLazy.Undefined"),
     cst_count=caml_string_of_jsbytes("{count = "),
     cst_data=caml_string_of_jsbytes("; data = "),
     cst$6=caml_string_of_jsbytes("}"),
     cst_Sempty=caml_string_of_jsbytes("Sempty"),
     cst_Scons=caml_string_of_jsbytes("Scons ("),
     cst$7=caml_string_of_jsbytes(", "),
     cst$8=caml_string_of_jsbytes(")"),
     cst_Sapp=caml_string_of_jsbytes("Sapp ("),
     cst$9=caml_string_of_jsbytes(", "),
     cst$10=caml_string_of_jsbytes(")"),
     cst_Slazy=caml_string_of_jsbytes("Slazy"),
     cst_Sgen=caml_string_of_jsbytes("Sgen"),
     cst_Sbuffio=caml_string_of_jsbytes("Sbuffio"),
     cst_Stdlib_Stream_Failure=caml_string_of_jsbytes("Stdlib.Stream.Failure"),
     cst_Stdlib_Stream_Error=caml_string_of_jsbytes("Stdlib.Stream.Error"),
     cst_Buffer_truncate=caml_string_of_jsbytes("Buffer.truncate"),
     cst_Buffer_add_channel=caml_string_of_jsbytes("Buffer.add_channel"),
     cst_Buffer_add_substring_add_s=
      caml_string_of_jsbytes("Buffer.add_substring/add_subbytes"),
     cst_Buffer_add_cannot_grow_buf=
      caml_string_of_jsbytes("Buffer.add: cannot grow buffer"),
     cst_Buffer_nth=caml_string_of_jsbytes("Buffer.nth"),
     cst_Buffer_blit=caml_string_of_jsbytes("Buffer.blit"),
     cst_Buffer_sub=caml_string_of_jsbytes("Buffer.sub"),
     cst_c=caml_string_of_jsbytes("%c"),
     cst_s=caml_string_of_jsbytes("%s"),
     cst_i=caml_string_of_jsbytes("%i"),
     cst_li=caml_string_of_jsbytes("%li"),
     cst_ni=caml_string_of_jsbytes("%ni"),
     cst_Li=caml_string_of_jsbytes("%Li"),
     cst_f=caml_string_of_jsbytes("%f"),
     cst_B=caml_string_of_jsbytes("%B"),
     cst$21=caml_string_of_jsbytes("%{"),
     cst$22=caml_string_of_jsbytes("%}"),
     cst$23=caml_string_of_jsbytes("%("),
     cst$24=caml_string_of_jsbytes("%)"),
     cst_a=caml_string_of_jsbytes("%a"),
     cst_t$0=caml_string_of_jsbytes("%t"),
     cst$25=caml_string_of_jsbytes("%?"),
     cst_r$0=caml_string_of_jsbytes("%r"),
     cst_r$1=caml_string_of_jsbytes("%_r"),
     cst_u$0=caml_string_of_jsbytes("%u"),
     cst_Printf_bad_conversion=
      caml_string_of_jsbytes("Printf: bad conversion %["),
     cst_Printf_bad_conversion$0=
      caml_string_of_jsbytes("Printf: bad conversion %_"),
     cst$29=caml_string_of_jsbytes("@{"),
     cst$30=caml_string_of_jsbytes("@["),
     cst$31=caml_string_of_jsbytes("@{"),
     cst$32=caml_string_of_jsbytes("@["),
     cst$33=caml_string_of_jsbytes("@{"),
     cst$34=caml_string_of_jsbytes("@["),
     cst_0=caml_string_of_jsbytes("0"),
     cst_padding=caml_string_of_jsbytes("padding"),
     cst_precision=caml_string_of_jsbytes("precision"),
     cst$39=caml_string_of_jsbytes("'*'"),
     cst$37=caml_string_of_jsbytes("'-'"),
     cst_0$2=caml_string_of_jsbytes("'0'"),
     cst$38=caml_string_of_jsbytes("'*'"),
     cst_0$0=caml_string_of_jsbytes("0"),
     cst_0$1=caml_string_of_jsbytes("0"),
     cst_precision$0=caml_string_of_jsbytes("precision"),
     cst_precision$1=caml_string_of_jsbytes("precision"),
     cst$40=caml_string_of_jsbytes("'+'"),
     cst$41=caml_string_of_jsbytes("'#'"),
     cst$42=caml_string_of_jsbytes("' '"),
     cst_padding$0=caml_string_of_jsbytes("`padding'"),
     cst_precision$2=caml_string_of_jsbytes("`precision'"),
     cst$43=caml_string_of_jsbytes("'+'"),
     cst$44=caml_string_of_jsbytes("'_'"),
     sub_format=[0,0,caml_string_of_jsbytes("")],
     formatting_lit=[0,caml_string_of_jsbytes("@;"),1,0],
     cst_digit=caml_string_of_jsbytes("digit"),
     cst_character=caml_string_of_jsbytes("character ')'"),
     cst_character$0=caml_string_of_jsbytes("character '}'"),
     cst$48=caml_string_of_jsbytes("'#'"),
     cst$47=caml_string_of_jsbytes("'+'"),
     cst$46=caml_string_of_jsbytes("'+'"),
     cst$45=caml_string_of_jsbytes("' '"),
     cst$51=caml_string_of_jsbytes("'+'"),
     cst$50=caml_string_of_jsbytes("'+'"),
     cst$49=caml_string_of_jsbytes("' '"),
     cst_non_zero_widths_are_unsupp=
      caml_string_of_jsbytes
       ("non-zero widths are unsupported for %c conversions"),
     cst_unexpected_end_of_format=
      caml_string_of_jsbytes("unexpected end of format"),
     cst$35=caml_string_of_jsbytes(""),
     cst$36=caml_string_of_jsbytes(""),
     cst_b$0=caml_string_of_jsbytes("b"),
     cst_h=caml_string_of_jsbytes("h"),
     cst_hov=caml_string_of_jsbytes("hov"),
     cst_hv=caml_string_of_jsbytes("hv"),
     cst_v=caml_string_of_jsbytes("v"),
     cst_nan=caml_string_of_jsbytes("nan"),
     cst$28=caml_string_of_jsbytes("."),
     cst_neg_infinity=caml_string_of_jsbytes("neg_infinity"),
     cst_infinity=caml_string_of_jsbytes("infinity"),
     cst_12g$0=caml_string_of_jsbytes("%.12g"),
     cst_nd$0=caml_string_of_jsbytes("%+nd"),
     cst_nd$1=caml_string_of_jsbytes("% nd"),
     cst_ni$1=caml_string_of_jsbytes("%+ni"),
     cst_ni$2=caml_string_of_jsbytes("% ni"),
     cst_nx=caml_string_of_jsbytes("%nx"),
     cst_nx$0=caml_string_of_jsbytes("%#nx"),
     cst_nX=caml_string_of_jsbytes("%nX"),
     cst_nX$0=caml_string_of_jsbytes("%#nX"),
     cst_no=caml_string_of_jsbytes("%no"),
     cst_no$0=caml_string_of_jsbytes("%#no"),
     cst_nd=caml_string_of_jsbytes("%nd"),
     cst_ni$0=caml_string_of_jsbytes("%ni"),
     cst_nu=caml_string_of_jsbytes("%nu"),
     cst_ld$0=caml_string_of_jsbytes("%+ld"),
     cst_ld$1=caml_string_of_jsbytes("% ld"),
     cst_li$1=caml_string_of_jsbytes("%+li"),
     cst_li$2=caml_string_of_jsbytes("% li"),
     cst_lx=caml_string_of_jsbytes("%lx"),
     cst_lx$0=caml_string_of_jsbytes("%#lx"),
     cst_lX=caml_string_of_jsbytes("%lX"),
     cst_lX$0=caml_string_of_jsbytes("%#lX"),
     cst_lo=caml_string_of_jsbytes("%lo"),
     cst_lo$0=caml_string_of_jsbytes("%#lo"),
     cst_ld=caml_string_of_jsbytes("%ld"),
     cst_li$0=caml_string_of_jsbytes("%li"),
     cst_lu=caml_string_of_jsbytes("%lu"),
     cst_Ld$0=caml_string_of_jsbytes("%+Ld"),
     cst_Ld$1=caml_string_of_jsbytes("% Ld"),
     cst_Li$1=caml_string_of_jsbytes("%+Li"),
     cst_Li$2=caml_string_of_jsbytes("% Li"),
     cst_Lx=caml_string_of_jsbytes("%Lx"),
     cst_Lx$0=caml_string_of_jsbytes("%#Lx"),
     cst_LX=caml_string_of_jsbytes("%LX"),
     cst_LX$0=caml_string_of_jsbytes("%#LX"),
     cst_Lo=caml_string_of_jsbytes("%Lo"),
     cst_Lo$0=caml_string_of_jsbytes("%#Lo"),
     cst_Ld=caml_string_of_jsbytes("%Ld"),
     cst_Li$0=caml_string_of_jsbytes("%Li"),
     cst_Lu=caml_string_of_jsbytes("%Lu"),
     cst_d$3=caml_string_of_jsbytes("%+d"),
     cst_d$4=caml_string_of_jsbytes("% d"),
     cst_i$1=caml_string_of_jsbytes("%+i"),
     cst_i$2=caml_string_of_jsbytes("% i"),
     cst_x=caml_string_of_jsbytes("%x"),
     cst_x$0=caml_string_of_jsbytes("%#x"),
     cst_X$0=caml_string_of_jsbytes("%X"),
     cst_X$1=caml_string_of_jsbytes("%#X"),
     cst_o=caml_string_of_jsbytes("%o"),
     cst_o$0=caml_string_of_jsbytes("%#o"),
     cst_d$2=caml_string_of_jsbytes("%d"),
     cst_i$0=caml_string_of_jsbytes("%i"),
     cst_u=caml_string_of_jsbytes("%u"),
     cst$26=caml_string_of_jsbytes("%!"),
     cst$27=caml_string_of_jsbytes("@{"),
     cst_0c=caml_string_of_jsbytes("0c"),
     cst$20=caml_string_of_jsbytes("%%"),
     cst$12=caml_string_of_jsbytes("@]"),
     cst$13=caml_string_of_jsbytes("@}"),
     cst$14=caml_string_of_jsbytes("@?"),
     cst$15=caml_string_of_jsbytes("@\n"),
     cst$16=caml_string_of_jsbytes("@."),
     cst$17=caml_string_of_jsbytes("@@"),
     cst$18=caml_string_of_jsbytes("@%"),
     cst$19=caml_string_of_jsbytes("@"),
     cst$11=caml_string_of_jsbytes(".*"),
     cst_CamlinternalFormat_Type_mi=
      caml_string_of_jsbytes("CamlinternalFormat.Type_mismatch"),
     cst$59=caml_string_of_jsbytes(""),
     cst$60=caml_string_of_jsbytes("\n"),
     cst_a_boolean=caml_string_of_jsbytes("a boolean"),
     cst_an_integer=caml_string_of_jsbytes("an integer"),
     cst_an_integer$0=caml_string_of_jsbytes("an integer"),
     cst_a_float=caml_string_of_jsbytes("a float"),
     cst_a_float$0=caml_string_of_jsbytes("a float"),
     cst$56=caml_string_of_jsbytes(""),
     cst$57=caml_string_of_jsbytes(" "),
     cst$58=caml_string_of_jsbytes(""),
     cst_one_of=caml_string_of_jsbytes("one of: "),
     cst_Arg_Expand_is_is_only_allo=
      caml_string_of_jsbytes
       ("Arg.Expand is is only allowed with Arg.parse_and_expand_argv_dynamic"),
     cst_no_argument=caml_string_of_jsbytes("no argument"),
     cst$55=caml_string_of_jsbytes("(?)"),
     cst_help$3=caml_string_of_jsbytes("--help"),
     cst_help$4=caml_string_of_jsbytes("-help"),
     cst_help$2=caml_string_of_jsbytes("-help"),
     cst_Display_this_list_of_optio=
      caml_string_of_jsbytes(" Display this list of options"),
     cst_help=caml_string_of_jsbytes("-help"),
     cst_help$1=caml_string_of_jsbytes("--help"),
     cst_Display_this_list_of_optio$0=
      caml_string_of_jsbytes(" Display this list of options"),
     cst_help$0=caml_string_of_jsbytes("--help"),
     cst$52=caml_string_of_jsbytes("}"),
     cst$53=caml_string_of_jsbytes("|"),
     cst$54=caml_string_of_jsbytes("{"),
     cst_none=caml_string_of_jsbytes("<none>"),
     cst_Stdlib_Arg_Bad=caml_string_of_jsbytes("Stdlib.Arg.Bad"),
     cst_Stdlib_Arg_Help=caml_string_of_jsbytes("Stdlib.Arg.Help"),
     cst_Stdlib_Arg_Stop=caml_string_of_jsbytes("Stdlib.Arg.Stop"),
     cst$62=caml_string_of_jsbytes(""),
     cst_Program_not_linked_with_g_=
      caml_string_of_jsbytes
       ("(Program not linked with -g, cannot print stack backtrace)\n"),
     cst_Raised_at=caml_string_of_jsbytes("Raised at"),
     cst_Re_raised_at=caml_string_of_jsbytes("Re-raised at"),
     cst_Raised_by_primitive_operat=
      caml_string_of_jsbytes("Raised by primitive operation at"),
     cst_Called_from=caml_string_of_jsbytes("Called from"),
     cst_inlined=caml_string_of_jsbytes(" (inlined)"),
     cst$65=caml_string_of_jsbytes(""),
     partial=[4,0,0,0,0],
     cst_Out_of_memory=caml_string_of_jsbytes("Out of memory"),
     cst_Stack_overflow=caml_string_of_jsbytes("Stack overflow"),
     cst_Pattern_matching_failed=
      caml_string_of_jsbytes("Pattern matching failed"),
     cst_Assertion_failed=caml_string_of_jsbytes("Assertion failed"),
     cst_Undefined_recursive_module=
      caml_string_of_jsbytes("Undefined recursive module"),
     cst$63=caml_string_of_jsbytes(""),
     cst$64=caml_string_of_jsbytes(""),
     cst$61=caml_string_of_jsbytes("_"),
     locfmt=
      [0,
       [11,
        caml_string_of_jsbytes('File "'),
        [2,
         0,
         [11,
          caml_string_of_jsbytes('", line '),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", characters "),
            [4,
             0,
             0,
             0,
             [12,45,[4,0,0,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]]]]]]]],
       caml_string_of_jsbytes('File "%s", line %d, characters %d-%d: %s')],
     cst_Stdlib_Fun_Finally_raised=
      caml_string_of_jsbytes("Stdlib.Fun.Finally_raised"),
     cst_Digest_from_hex$0=caml_string_of_jsbytes("Digest.from_hex"),
     cst_Digest_from_hex=caml_string_of_jsbytes("Digest.from_hex"),
     cst_Digest_to_hex=caml_string_of_jsbytes("Digest.to_hex"),
     cst_Digest_substring=caml_string_of_jsbytes("Digest.substring"),
     cst_Random_int64=caml_string_of_jsbytes("Random.int64"),
     cst_Random_int32=caml_string_of_jsbytes("Random.int32"),
     cst_Random_int=caml_string_of_jsbytes("Random.int"),
     cst_x$1=caml_string_of_jsbytes("x"),
     cst_OCAMLRUNPARAM=caml_string_of_jsbytes("OCAMLRUNPARAM"),
     cst_CAMLRUNPARAM=caml_string_of_jsbytes("CAMLRUNPARAM"),
     cst$66=caml_string_of_jsbytes(""),
     cst_Weak_Make_hash_bucket_cann=
      caml_string_of_jsbytes("Weak.Make: hash bucket cannot grow more"),
     cst_Weak_fill=caml_string_of_jsbytes("Weak.fill"),
     cst_Weak_blit=caml_string_of_jsbytes("Weak.blit"),
     cst_Weak_check=caml_string_of_jsbytes("Weak.check"),
     cst_Weak_get_copy=caml_string_of_jsbytes("Weak.get_copy"),
     cst_Weak_get=caml_string_of_jsbytes("Weak.get"),
     cst_Weak_set=caml_string_of_jsbytes("Weak.set"),
     cst_Weak_create=caml_string_of_jsbytes("Weak.create"),
     cst$84=caml_string_of_jsbytes(""),
     cst$85=caml_string_of_jsbytes(""),
     cst$83=caml_string_of_jsbytes("."),
     cst$80=caml_string_of_jsbytes(">"),
     cst$81=caml_string_of_jsbytes("<\/"),
     cst$82=caml_string_of_jsbytes(""),
     cst$77=caml_string_of_jsbytes(">"),
     cst$78=caml_string_of_jsbytes("<"),
     cst$79=caml_string_of_jsbytes(""),
     cst$76=caml_string_of_jsbytes("\n"),
     cst_Format_pp_set_geometry_max=
      caml_string_of_jsbytes("Format.pp_set_geometry: max_indent < 2"),
     cst_Format_pp_set_geometry_mar=
      caml_string_of_jsbytes("Format.pp_set_geometry: margin <= max_indent"),
     cst$72=caml_string_of_jsbytes(""),
     cst$73=caml_string_of_jsbytes(""),
     cst$74=caml_string_of_jsbytes(""),
     cst$75=caml_string_of_jsbytes(""),
     cst$68=caml_string_of_jsbytes(""),
     cst$69=caml_string_of_jsbytes(""),
     cst$70=caml_string_of_jsbytes(""),
     cst$71=caml_string_of_jsbytes(""),
     cst$67=caml_string_of_jsbytes(""),
     cst_Stdlib_Format_String_tag=
      caml_string_of_jsbytes("Stdlib.Format.String_tag"),
     cst_end_of_input_not_found=
      caml_string_of_jsbytes("end of input not found"),
     cst_scanf_bad_conversion_a=
      caml_string_of_jsbytes('scanf: bad conversion "%a"'),
     cst_scanf_bad_conversion_t=
      caml_string_of_jsbytes('scanf: bad conversion "%t"'),
     cst_scanf_missing_reader=caml_string_of_jsbytes("scanf: missing reader"),
     cst_scanf_bad_conversion_custo=
      caml_string_of_jsbytes('scanf: bad conversion "%?" (custom converter)'),
     cst_scanf_bad_conversion=
      caml_string_of_jsbytes('scanf: bad conversion "%*"'),
     cst_scanf_bad_conversion$1=
      caml_string_of_jsbytes('scanf: bad conversion "%*"'),
     cst_scanf_bad_conversion$0=
      caml_string_of_jsbytes('scanf: bad conversion "%-"'),
     cst_scanf_bad_conversion$2=
      caml_string_of_jsbytes('scanf: bad conversion "%*"'),
     cst$91=caml_string_of_jsbytes('"'),
     cst$92=caml_string_of_jsbytes('"'),
     cst$89=caml_string_of_jsbytes('"'),
     cst$90=caml_string_of_jsbytes('"'),
     cst$88=caml_string_of_jsbytes('"'),
     cst_in_format=caml_string_of_jsbytes(' in format "'),
     cst_an=caml_string_of_jsbytes("an"),
     cst_x$2=caml_string_of_jsbytes("x"),
     cst_nfinity=caml_string_of_jsbytes("nfinity"),
     cst_digits=caml_string_of_jsbytes("digits"),
     cst_decimal_digits=caml_string_of_jsbytes("decimal digits"),
     cst_0b=caml_string_of_jsbytes("0b"),
     cst_0o=caml_string_of_jsbytes("0o"),
     cst_0u=caml_string_of_jsbytes("0u"),
     cst_0x=caml_string_of_jsbytes("0x"),
     cst_false$3=caml_string_of_jsbytes("false"),
     cst_true$3=caml_string_of_jsbytes("true"),
     cst_not_a_valid_float_in_hexad=
      caml_string_of_jsbytes("not a valid float in hexadecimal notation"),
     cst_no_dot_or_exponent_part_fo=
      caml_string_of_jsbytes("no dot or exponent part found in float token"),
     cst$87=caml_string_of_jsbytes("-"),
     cst_unnamed_function=caml_string_of_jsbytes("unnamed function"),
     cst_unnamed_character_string=
      caml_string_of_jsbytes("unnamed character string"),
     cst_unnamed_Stdlib_input_chann=
      caml_string_of_jsbytes("unnamed Stdlib input channel"),
     cst$86=caml_string_of_jsbytes("-"),
     cst_Stdlib_Scanf_Scan_failure=
      caml_string_of_jsbytes("Stdlib.Scanf.Scan_failure"),
     cst_binary=caml_string_of_jsbytes("binary"),
     cst_octal=caml_string_of_jsbytes("octal"),
     cst_hexadecimal=caml_string_of_jsbytes("hexadecimal"),
     cst_a_Char=caml_string_of_jsbytes("a Char"),
     cst_a_String=caml_string_of_jsbytes("a String"),
     cst$93=caml_string_of_jsbytes(""),
     cst$94=caml_string_of_jsbytes(""),
     cst$95=caml_string_of_jsbytes(""),
     cst$96=caml_string_of_jsbytes(""),
     cst$97=caml_string_of_jsbytes(""),
     cst$99=caml_string_of_jsbytes(""),
     cst$98=caml_string_of_jsbytes(""),
     cst_Illegal_character=caml_string_of_jsbytes("Illegal character "),
     cst_Filename_chop_extension=
      caml_string_of_jsbytes("Filename.chop_extension"),
     cst$110=caml_string_of_jsbytes(""),
     cst_Filename_chop_suffix=caml_string_of_jsbytes("Filename.chop_suffix"),
     cst$109=caml_string_of_jsbytes(""),
     cst$107=caml_string_of_jsbytes("./"),
     cst$106=caml_string_of_jsbytes(".\\"),
     cst$105=caml_string_of_jsbytes("../"),
     cst$104=caml_string_of_jsbytes("..\\"),
     cst$103=caml_string_of_jsbytes("./"),
     cst$102=caml_string_of_jsbytes("../"),
     cst$101=caml_string_of_jsbytes(""),
     cst$100=caml_string_of_jsbytes(""),
     current_dir_name=caml_string_of_jsbytes("."),
     parent_dir_name=caml_string_of_jsbytes(".."),
     dir_sep=caml_string_of_jsbytes("/"),
     cst_TMPDIR=caml_string_of_jsbytes("TMPDIR"),
     cst_tmp=caml_string_of_jsbytes("/tmp"),
     quotequote=caml_string_of_jsbytes("'\\''"),
     current_dir_name$0=caml_string_of_jsbytes("."),
     parent_dir_name$0=caml_string_of_jsbytes(".."),
     dir_sep$0=caml_string_of_jsbytes("\\"),
     cst_TEMP=caml_string_of_jsbytes("TEMP"),
     cst$108=caml_string_of_jsbytes("."),
     current_dir_name$1=caml_string_of_jsbytes("."),
     parent_dir_name$1=caml_string_of_jsbytes(".."),
     dir_sep$1=caml_string_of_jsbytes("/"),
     cst_Cygwin=caml_string_of_jsbytes("Cygwin"),
     cst_Win32=caml_string_of_jsbytes("Win32"),
     zero$4=[254,0.,0.],
     one$4=[254,1.,0.],
     i=[254,0.,1.],
     cst_Series_is_closed$0=caml_string_of_jsbytes("Series is closed"),
     cst_Series_is_closed=caml_string_of_jsbytes("Series is closed"),
     cst_Bigarray_array3_of_genarra=
      caml_string_of_jsbytes("Bigarray.array3_of_genarray"),
     cst_Bigarray_array2_of_genarra=
      caml_string_of_jsbytes("Bigarray.array2_of_genarray"),
     cst_Bigarray_array1_of_genarra=
      caml_string_of_jsbytes("Bigarray.array1_of_genarray"),
     cst_Bigarray_array0_of_genarra=
      caml_string_of_jsbytes("Bigarray.array0_of_genarray"),
     cst_Bigarray_Array3_of_array_n=
      caml_string_of_jsbytes("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array3_of_array_n$0=
      caml_string_of_jsbytes("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array2_of_array_n=
      caml_string_of_jsbytes("Bigarray.Array2.of_array: non-rectangular data"),
     Invalid_argument=global_data.Invalid_argument,
     Failure=global_data.Failure,
     Match_failure=global_data.Match_failure,
     Assert_failure=global_data.Assert_failure,
     Not_found=global_data.Not_found,
     Out_of_memory=global_data.Out_of_memory,
     Stack_overflow=global_data.Stack_overflow,
     Sys_error=global_data.Sys_error,
     End_of_file=global_data.End_of_file,
     Division_by_zero=global_data.Division_by_zero,
     Sys_blocked_io=global_data.Sys_blocked_io,
     Undefined_recursive_module=global_data.Undefined_recursive_module,
     _l_=[0,0,[0,6,0]],
     _k_=[0,0,[0,7,0]],
     _j_=[0,1,[0,3,[0,4,[0,6,0]]]],
     _i_=[0,1,[0,3,[0,4,[0,7,0]]]],
     _g_=[0,1],
     _h_=[0,0],
     _a_=runtime.caml_int64_create_lo_mi_hi(0,0,32752),
     _b_=runtime.caml_int64_create_lo_mi_hi(0,0,65520),
     _c_=runtime.caml_int64_create_lo_mi_hi(1,0,32752),
     _d_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,32751),
     _e_=runtime.caml_int64_create_lo_mi_hi(0,0,16),
     _f_=runtime.caml_int64_create_lo_mi_hi(0,0,15536),
     _q_=[0,0,0],
     _r_=[0,caml_string_of_jsbytes("list.ml"),282,11],
     _v_=[0,caml_string_of_jsbytes("array.ml"),236,4],
     _x_=[0,caml_string_of_jsbytes("float.ml"),381,6],
     _w_=[0,caml_string_of_jsbytes("float.ml"),208,14],
     _I_=runtime.caml_int64_create_lo_mi_hi(16777215,16777215,65535),
     _H_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _G_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _F_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _J_=[0,0,0,0],
     _K_=[0,0,0],
     _L_=[0,caml_string_of_jsbytes("set.ml"),547,18],
     _M_=[0,0,0,0],
     _N_=[0,caml_string_of_jsbytes("map.ml"),398,10],
     _O_=[0,0,0],
     _P_=[0,caml_string_of_jsbytes("stream.ml"),53,12],
     _Q_=[0,0],
     _R_=[0,caml_string_of_jsbytes("stream.ml"),82,12],
     _Y_=[0,caml_string_of_jsbytes("buffer.ml"),205,9],
     _X_=[0,caml_string_of_jsbytes("buffer.ml"),141,19],
     _W_=[0,caml_string_of_jsbytes("buffer.ml"),159,8],
     _V_=[0,caml_string_of_jsbytes("buffer.ml"),120,19],
     _U_=[0,caml_string_of_jsbytes("buffer.ml"),138,8],
     _T_=[0,caml_string_of_jsbytes("buffer.ml"),84,19],
     _S_=[0,caml_string_of_jsbytes("buffer.ml"),117,8],
     _Z_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),847,23],
     _ai_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),811,21],
     _aa_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),812,21],
     _aj_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),815,21],
     _ab_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),816,21],
     _ak_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),819,19],
     _ac_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),820,19],
     _al_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),823,22],
     _ad_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),824,22],
     _am_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),828,30],
     _ae_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),829,30],
     _ag_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),833,26],
     ___=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),834,26],
     _ah_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),843,28],
     _$_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),844,28],
     _af_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),848,23],
     _an_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1556,4],
     _ao_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1624,39],
     _ap_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1647,31],
     _aq_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1648,31],
     _ar_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),1828,8],
     _aV_=
      [0,
       [11,
        caml_string_of_jsbytes("bad input: format type mismatch between "),
        [3,0,[11,caml_string_of_jsbytes(" and "),[3,0,0]]]],
       caml_string_of_jsbytes
        ("bad input: format type mismatch between %S and %S")],
     _aU_=
      [0,
       [11,
        caml_string_of_jsbytes("bad input: format type mismatch between "),
        [3,0,[11,caml_string_of_jsbytes(" and "),[3,0,0]]]],
       caml_string_of_jsbytes
        ("bad input: format type mismatch between %S and %S")],
     _ax_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,0,0,0,[11,caml_string_of_jsbytes(", duplicate flag "),[1,0]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, duplicate flag %C")],
     _ay_=[0,1,0],
     _az_=[0,0],
     _aB_=[1,0],
     _aA_=[1,1],
     _aD_=[1,1],
     _aC_=[1,1],
     _aH_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", flag "),
            [1,
             [11,
              caml_string_of_jsbytes(" is only allowed after the '"),
              [12,
               37,
               [11,
                caml_string_of_jsbytes("', before padding and precision"),
                0]]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision")],
     _aE_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(', invalid conversion "'),
            [12,37,[0,[12,34,0]]]]]]]],
       caml_string_of_jsbytes
        ('invalid format %S: at character number %d, invalid conversion "%%%c"')],
     _aF_=[0,0],
     _aG_=[0,0],
     _aI_=[0,[12,64,0]],
     _aJ_=[0,caml_string_of_jsbytes("@ "),1,0],
     _aK_=[0,caml_string_of_jsbytes("@,"),0,0],
     _aL_=[2,60],
     _aM_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": '"),
          [12,
           37,
           [11,
            caml_string_of_jsbytes
             ("' alone is not accepted in character sets, use "),
            [12,
             37,
             [12,
              37,
              [11,
               caml_string_of_jsbytes(" instead at position "),
               [4,0,0,0,[12,46,0]]]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d.")],
     _aN_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": integer "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(" is greater than the limit "),
            [4,0,0,0,0]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: integer %d is greater than the limit %d")],
     _aO_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2843,11],
     _aP_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(': unclosed sub-format, expected "'),
          [12,
           37,
           [0,
            [11,caml_string_of_jsbytes('" at character number '),[4,0,0,0,0]]]]]]],
       caml_string_of_jsbytes
        ('invalid format %S: unclosed sub-format, expected "%%%c" at character number %d')],
     _aQ_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2905,34],
     _aR_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2941,28],
     _aS_=[0,caml_string_of_jsbytes("camlinternalFormat.ml"),2975,25],
     _aT_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", "),
            [2,
             0,
             [11,
              caml_string_of_jsbytes(" is incompatible with '"),
              [0,[11,caml_string_of_jsbytes("' in sub-format "),[3,0,0]]]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S")],
     _aw_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", "),
            [2,0,[11,caml_string_of_jsbytes(" expected, read "),[1,0]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, %s expected, read %C")],
     _av_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", '"),
            [0,[11,caml_string_of_jsbytes("' without "),[2,0,0]]]]]]]],
       caml_string_of_jsbytes
        ("invalid format %S: at character number %d, '%c' without %s")],
     _au_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid format "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(": at character number "),
          [4,0,0,0,[11,caml_string_of_jsbytes(", "),[2,0,0]]]]]],
       caml_string_of_jsbytes("invalid format %S: at character number %d, %s")],
     _at_=
      [0,
       [11,caml_string_of_jsbytes("invalid box description "),[3,0,0]],
       caml_string_of_jsbytes("invalid box description %S")],
     _as_=[0,0,4],
     _bf_=[0,[2,0,[0,0]],caml_string_of_jsbytes("%s%c")],
     _a$_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _ba_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _a9_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _a__=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _a7_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _a8_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _a1_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": unknown option '"),
         [2,0,[11,caml_string_of_jsbytes("'.\n"),0]]]],
       caml_string_of_jsbytes("%s: unknown option '%s'.\n")],
     _a4_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": wrong argument '"),
         [2,
          0,
          [11,
           caml_string_of_jsbytes("'; option '"),
           [2,
            0,
            [11,
             caml_string_of_jsbytes("' expects "),
             [2,0,[11,caml_string_of_jsbytes(".\n"),0]]]]]]]],
       caml_string_of_jsbytes
        ("%s: wrong argument '%s'; option '%s' expects %s.\n")],
     _a5_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": option '"),
         [2,0,[11,caml_string_of_jsbytes("' needs an argument.\n"),0]]]],
       caml_string_of_jsbytes("%s: option '%s' needs an argument.\n")],
     _a6_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(": "),
         [2,0,[11,caml_string_of_jsbytes(".\n"),0]]]],
       caml_string_of_jsbytes("%s: %s.\n")],
     _a2_=[0,caml_string_of_jsbytes("-help")],
     _a3_=[0,caml_string_of_jsbytes("--help")],
     _a0_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _aZ_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _aY_=[0,caml_string_of_jsbytes("-help")],
     _aW_=
      [0,
       [11,caml_string_of_jsbytes("  "),[2,0,[12,32,[2,0,[12,10,0]]]]],
       caml_string_of_jsbytes("  %s %s\n")],
     _aX_=
      [0,
       [11,caml_string_of_jsbytes("  "),[2,0,[12,32,[2,0,[2,0,[12,10,0]]]]]],
       caml_string_of_jsbytes("  %s %s%s\n")],
     _bk_=
      [0,
       [11,caml_string_of_jsbytes(", "),[2,0,[2,0,0]]],
       caml_string_of_jsbytes(", %s%s")],
     _bt_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _br_=[0,[2,0,[12,10,0]],caml_string_of_jsbytes("%s\n")],
     _bs_=
      [0,
       [11,
        caml_string_of_jsbytes
         ("(Program not linked with -g, cannot print stack backtrace)\n"),
        0],
       caml_string_of_jsbytes
        ("(Program not linked with -g, cannot print stack backtrace)\n")],
     _bp_=
      [0,
       [2,
        0,
        [11,
         caml_string_of_jsbytes(' file "'),
         [2,
          0,
          [12,
           34,
           [2,
            0,
            [11,
             caml_string_of_jsbytes(", line "),
             [4,
              0,
              0,
              0,
              [11,
               caml_string_of_jsbytes(", characters "),
               [4,0,0,0,[12,45,partial]]]]]]]]]],
       caml_string_of_jsbytes('%s file "%s"%s, line %d, characters %d-%d')],
     _bq_=
      [0,
       [2,0,[11,caml_string_of_jsbytes(" unknown location"),0]],
       caml_string_of_jsbytes("%s unknown location")],
     _bo_=
      [0,
       [11,caml_string_of_jsbytes("Uncaught exception: "),[2,0,[12,10,0]]],
       caml_string_of_jsbytes("Uncaught exception: %s\n")],
     _bn_=
      [0,
       [11,caml_string_of_jsbytes("Uncaught exception: "),[2,0,[12,10,0]]],
       caml_string_of_jsbytes("Uncaught exception: %s\n")],
     _bl_=[0,[12,40,[2,0,[2,0,[12,41,0]]]],caml_string_of_jsbytes("(%s%s)")],
     _bm_=[0,[12,40,[2,0,[12,41,0]]],caml_string_of_jsbytes("(%s)")],
     _bj_=[0,[4,0,0,0,0],caml_string_of_jsbytes("%d")],
     _bi_=[0,[3,0,0],caml_string_of_jsbytes("%S")],
     _bC_=
      [0,
       [11,caml_string_of_jsbytes("minor_collections: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("minor_collections: %d\n")],
     _bD_=
      [0,
       [11,caml_string_of_jsbytes("major_collections: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("major_collections: %d\n")],
     _bE_=
      [0,
       [11,caml_string_of_jsbytes("compactions:       "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("compactions:       %d\n")],
     _bF_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _bG_=[0,[8,0,0,[0,0],0],caml_string_of_jsbytes("%.0f")],
     _bH_=
      [0,
       [11,
        caml_string_of_jsbytes("minor_words:    "),
        [8,0,[1,1],[0,0],[12,10,0]]],
       caml_string_of_jsbytes("minor_words:    %*.0f\n")],
     _bI_=
      [0,
       [11,
        caml_string_of_jsbytes("promoted_words: "),
        [8,0,[1,1],[0,0],[12,10,0]]],
       caml_string_of_jsbytes("promoted_words: %*.0f\n")],
     _bJ_=
      [0,
       [11,
        caml_string_of_jsbytes("major_words:    "),
        [8,0,[1,1],[0,0],[12,10,0]]],
       caml_string_of_jsbytes("major_words:    %*.0f\n")],
     _bK_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _bL_=[0,[4,0,0,0,0],caml_string_of_jsbytes("%d")],
     _bM_=
      [0,
       [11,caml_string_of_jsbytes("top_heap_words: "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("top_heap_words: %*d\n")],
     _bN_=
      [0,
       [11,caml_string_of_jsbytes("heap_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("heap_words:     %*d\n")],
     _bO_=
      [0,
       [11,caml_string_of_jsbytes("live_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("live_words:     %*d\n")],
     _bP_=
      [0,
       [11,caml_string_of_jsbytes("free_words:     "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("free_words:     %*d\n")],
     _bQ_=
      [0,
       [11,caml_string_of_jsbytes("largest_free:   "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("largest_free:   %*d\n")],
     _bR_=
      [0,
       [11,caml_string_of_jsbytes("fragments:      "),[4,0,[1,1],0,[12,10,0]]],
       caml_string_of_jsbytes("fragments:      %*d\n")],
     _bS_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _bT_=
      [0,
       [11,caml_string_of_jsbytes("live_blocks: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("live_blocks: %d\n")],
     _bU_=
      [0,
       [11,caml_string_of_jsbytes("free_blocks: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("free_blocks: %d\n")],
     _bV_=
      [0,
       [11,caml_string_of_jsbytes("heap_chunks: "),[4,0,0,0,[12,10,0]]],
       caml_string_of_jsbytes("heap_chunks: %d\n")],
     _bY_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _bZ_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _b0_=
      [0,
       987910699,
       495797812,
       364182224,
       414272206,
       318284740,
       990407751,
       383018966,
       270373319,
       840823159,
       24560019,
       536292337,
       512266505,
       189156120,
       730249596,
       143776328,
       51606627,
       140166561,
       366354223,
       1003410265,
       700563762,
       981890670,
       913149062,
       526082594,
       1021425055,
       784300257,
       667753350,
       630144451,
       949649812,
       48546892,
       415514493,
       258888527,
       511570777,
       89983870,
       283659902,
       308386020,
       242688715,
       482270760,
       865188196,
       1027664170,
       207196989,
       193777847,
       619708188,
       671350186,
       149669678,
       257044018,
       87658204,
       558145612,
       183450813,
       28133145,
       901332182,
       710253903,
       510646120,
       652377910,
       409934019,
       801085050],
     _b4_=[0,0],
     _b3_=[0,caml_string_of_jsbytes("hashtbl.ml"),108,23],
     _b7_=[3,0,3],
     _b6_=[0,caml_string_of_jsbytes("")],
     _b5_=[0,caml_string_of_jsbytes(""),0,caml_string_of_jsbytes("")],
     _cl_=[0,91],
     _ck_=[0,123],
     _cm_=[0,caml_string_of_jsbytes("scanf.ml"),1455,13],
     _cn_=[0,[3,0,[10,0]],caml_string_of_jsbytes("%S%!")],
     _cj_=[0,37,caml_string_of_jsbytes("")],
     _ci_=
      [0,
       [11,
        caml_string_of_jsbytes("scanf: bad input at char number "),
        [4,3,0,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]]],
       caml_string_of_jsbytes("scanf: bad input at char number %i: %s")],
     _ch_=
      [0,
       [11,
        caml_string_of_jsbytes("the character "),
        [1,[11,caml_string_of_jsbytes(" cannot start a boolean"),0]]],
       caml_string_of_jsbytes("the character %C cannot start a boolean")],
     _cg_=
      [0,
       [11,
        caml_string_of_jsbytes("bad character hexadecimal encoding \\"),
        [0,[0,0]]],
       caml_string_of_jsbytes("bad character hexadecimal encoding \\%c%c")],
     _cf_=
      [0,
       [11,
        caml_string_of_jsbytes("bad character decimal encoding \\"),
        [0,[0,[0,0]]]],
       caml_string_of_jsbytes("bad character decimal encoding \\%c%c%c")],
     _ce_=
      [0,
       [11,
        caml_string_of_jsbytes("character "),
        [1,
         [11,
          caml_string_of_jsbytes(" is not a valid "),
          [2,0,[11,caml_string_of_jsbytes(" digit"),0]]]]],
       caml_string_of_jsbytes("character %C is not a valid %s digit")],
     _cd_=
      [0,
       [11,
        caml_string_of_jsbytes("character "),
        [1,[11,caml_string_of_jsbytes(" is not a decimal digit"),0]]],
       caml_string_of_jsbytes("character %C is not a decimal digit")],
     _cc_=[0,caml_string_of_jsbytes("scanf.ml"),555,9],
     _cb_=
      [0,
       [11,caml_string_of_jsbytes("invalid boolean '"),[2,0,[12,39,0]]],
       caml_string_of_jsbytes("invalid boolean '%s'")],
     _ca_=
      [0,
       [11,
        caml_string_of_jsbytes("looking for "),
        [1,[11,caml_string_of_jsbytes(", found "),[1,0]]]],
       caml_string_of_jsbytes("looking for %C, found %C")],
     _b$_=
      [0,
       [11,
        caml_string_of_jsbytes("scanning of "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (" failed: premature end of file occurred before end of token"),
          0]]],
       caml_string_of_jsbytes
        ("scanning of %s failed: premature end of file occurred before end of token")],
     _b__=
      [0,
       [11,
        caml_string_of_jsbytes("scanning of "),
        [2,
         0,
         [11,
          caml_string_of_jsbytes
           (" failed: the specified length was too short for token"),
          0]]],
       caml_string_of_jsbytes
        ("scanning of %s failed: the specified length was too short for token")],
     _b9_=
      [0,
       [11,caml_string_of_jsbytes("illegal escape character "),[1,0]],
       caml_string_of_jsbytes("illegal escape character %C")],
     _cu_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),438,17],
     _ct_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),420,13],
     _cs_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),417,13],
     _cr_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),414,13],
     _cq_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),411,13],
     _cp_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),408,13],
     _co_=[0,caml_string_of_jsbytes("camlinternalOO.ml"),281,50],
     _cx_=[0,0],
     _cw_=[0,0],
     _cv_=[0,0],
     _cB_=[0,7,0],
     _cA_=[0,1,[0,3,[0,5,0]]],
     _cz_=[0,[2,0,[4,6,[0,2,6],0,[2,0,0]]],caml_string_of_jsbytes("%s%06x%s")],
     _cC_=[254,0.,0.];
    function erase_rel(param)
     {if(typeof param === "number")
       return 0;
      else
       switch(param[0])
        {case 0:var rest=param[1];return [0,erase_rel(rest)];
         case 1:var rest$0=param[1];return [1,erase_rel(rest$0)];
         case 2:var rest$1=param[1];return [2,erase_rel(rest$1)];
         case 3:var rest$2=param[1];return [3,erase_rel(rest$2)];
         case 4:var rest$3=param[1];return [4,erase_rel(rest$3)];
         case 5:var rest$4=param[1];return [5,erase_rel(rest$4)];
         case 6:var rest$5=param[1];return [6,erase_rel(rest$5)];
         case 7:var rest$6=param[1];return [7,erase_rel(rest$6)];
         case 8:
          var rest$7=param[2],ty=param[1];return [8,ty,erase_rel(rest$7)];
         case 9:
          var rest$8=param[3],ty1=param[1];
          return [9,ty1,ty1,erase_rel(rest$8)];
         case 10:var rest$9=param[1];return [10,erase_rel(rest$9)];
         case 11:var rest$10=param[1];return [11,erase_rel(rest$10)];
         case 12:var rest$11=param[1];return [12,erase_rel(rest$11)];
         case 13:var rest$12=param[1];return [13,erase_rel(rest$12)];
         default:var rest$13=param[1];return [14,erase_rel(rest$13)]}}
    function concat_fmtty(fmtty1,fmtty2)
     {if(typeof fmtty1 === "number")
       return fmtty2;
      else
       switch(fmtty1[0])
        {case 0:var rest=fmtty1[1];return [0,concat_fmtty(rest,fmtty2)];
         case 1:var rest$0=fmtty1[1];return [1,concat_fmtty(rest$0,fmtty2)];
         case 2:var rest$1=fmtty1[1];return [2,concat_fmtty(rest$1,fmtty2)];
         case 3:var rest$2=fmtty1[1];return [3,concat_fmtty(rest$2,fmtty2)];
         case 4:var rest$3=fmtty1[1];return [4,concat_fmtty(rest$3,fmtty2)];
         case 5:var rest$4=fmtty1[1];return [5,concat_fmtty(rest$4,fmtty2)];
         case 6:var rest$5=fmtty1[1];return [6,concat_fmtty(rest$5,fmtty2)];
         case 7:var rest$6=fmtty1[1];return [7,concat_fmtty(rest$6,fmtty2)];
         case 8:
          var rest$7=fmtty1[2],ty=fmtty1[1];
          return [8,ty,concat_fmtty(rest$7,fmtty2)];
         case 9:
          var rest$8=fmtty1[3],ty2=fmtty1[2],ty1=fmtty1[1];
          return [9,ty1,ty2,concat_fmtty(rest$8,fmtty2)];
         case 10:var rest$9=fmtty1[1];return [10,concat_fmtty(rest$9,fmtty2)];
         case 11:
          var rest$10=fmtty1[1];return [11,concat_fmtty(rest$10,fmtty2)];
         case 12:
          var rest$11=fmtty1[1];return [12,concat_fmtty(rest$11,fmtty2)];
         case 13:
          var rest$12=fmtty1[1];return [13,concat_fmtty(rest$12,fmtty2)];
         default:
          var rest$13=fmtty1[1];return [14,concat_fmtty(rest$13,fmtty2)]}}
    function concat_fmt(fmt1,fmt2)
     {if(typeof fmt1 === "number")
       return fmt2;
      else
       switch(fmt1[0])
        {case 0:var rest=fmt1[1];return [0,concat_fmt(rest,fmt2)];
         case 1:var rest$0=fmt1[1];return [1,concat_fmt(rest$0,fmt2)];
         case 2:
          var rest$1=fmt1[2],pad=fmt1[1];
          return [2,pad,concat_fmt(rest$1,fmt2)];
         case 3:
          var rest$2=fmt1[2],pad$0=fmt1[1];
          return [3,pad$0,concat_fmt(rest$2,fmt2)];
         case 4:
          var rest$3=fmt1[4],prec=fmt1[3],pad$1=fmt1[2],iconv=fmt1[1];
          return [4,iconv,pad$1,prec,concat_fmt(rest$3,fmt2)];
         case 5:
          var rest$4=fmt1[4],prec$0=fmt1[3],pad$2=fmt1[2],iconv$0=fmt1[1];
          return [5,iconv$0,pad$2,prec$0,concat_fmt(rest$4,fmt2)];
         case 6:
          var rest$5=fmt1[4],prec$1=fmt1[3],pad$3=fmt1[2],iconv$1=fmt1[1];
          return [6,iconv$1,pad$3,prec$1,concat_fmt(rest$5,fmt2)];
         case 7:
          var rest$6=fmt1[4],prec$2=fmt1[3],pad$4=fmt1[2],iconv$2=fmt1[1];
          return [7,iconv$2,pad$4,prec$2,concat_fmt(rest$6,fmt2)];
         case 8:
          var rest$7=fmt1[4],prec$3=fmt1[3],pad$5=fmt1[2],fconv=fmt1[1];
          return [8,fconv,pad$5,prec$3,concat_fmt(rest$7,fmt2)];
         case 9:
          var rest$8=fmt1[2],pad$6=fmt1[1];
          return [9,pad$6,concat_fmt(rest$8,fmt2)];
         case 10:var rest$9=fmt1[1];return [10,concat_fmt(rest$9,fmt2)];
         case 11:
          var rest$10=fmt1[2],str=fmt1[1];
          return [11,str,concat_fmt(rest$10,fmt2)];
         case 12:
          var rest$11=fmt1[2],chr=fmt1[1];
          return [12,chr,concat_fmt(rest$11,fmt2)];
         case 13:
          var rest$12=fmt1[3],fmtty=fmt1[2],pad$7=fmt1[1];
          return [13,pad$7,fmtty,concat_fmt(rest$12,fmt2)];
         case 14:
          var rest$13=fmt1[3],fmtty$0=fmt1[2],pad$8=fmt1[1];
          return [14,pad$8,fmtty$0,concat_fmt(rest$13,fmt2)];
         case 15:var rest$14=fmt1[1];return [15,concat_fmt(rest$14,fmt2)];
         case 16:var rest$15=fmt1[1];return [16,concat_fmt(rest$15,fmt2)];
         case 17:
          var rest$16=fmt1[2],fmting_lit=fmt1[1];
          return [17,fmting_lit,concat_fmt(rest$16,fmt2)];
         case 18:
          var rest$17=fmt1[2],fmting_gen=fmt1[1];
          return [18,fmting_gen,concat_fmt(rest$17,fmt2)];
         case 19:var rest$18=fmt1[1];return [19,concat_fmt(rest$18,fmt2)];
         case 20:
          var rest$19=fmt1[3],char_set=fmt1[2],width_opt=fmt1[1];
          return [20,width_opt,char_set,concat_fmt(rest$19,fmt2)];
         case 21:
          var rest$20=fmt1[2],counter=fmt1[1];
          return [21,counter,concat_fmt(rest$20,fmt2)];
         case 22:var rest$21=fmt1[1];return [22,concat_fmt(rest$21,fmt2)];
         case 23:
          var rest$22=fmt1[2],ign=fmt1[1];
          return [23,ign,concat_fmt(rest$22,fmt2)];
         default:
          var rest$23=fmt1[3],f=fmt1[2],arity=fmt1[1];
          return [24,arity,f,concat_fmt(rest$23,fmt2)]}}
    var CamlinternalFormatBasics=[0,concat_fmtty,erase_rel,concat_fmt];
    caml_register_global
     (706,CamlinternalFormatBasics,"CamlinternalFormatBasics");
    function failwith(s){throw [0,Failure,s]}
    function invalid_arg(s){throw [0,Invalid_argument,s]}
    var Exit=[248,cst_Stdlib_Exit,caml_fresh_oo_id(0)];
    function min(x,y){return caml_lessequal(x,y)?x:y}
    function max(x,y){return caml_greaterequal(x,y)?x:y}
    function abs(x){return 0 <= x?x:- x | 0}
    function lnot(x){return x ^ -1}
    var
     infinity=caml_int64_float_of_bits(_a_),
     neg_infinity=caml_int64_float_of_bits(_b_),
     nan=caml_int64_float_of_bits(_c_),
     max_float=caml_int64_float_of_bits(_d_),
     min_float=caml_int64_float_of_bits(_e_),
     epsilon=caml_int64_float_of_bits(_f_),
     max_int=2147483647,
     min_int=-2147483648;
    function symbol(s1,s2)
     {var
       l1=caml_ml_string_length(s1),
       l2=caml_ml_string_length(s2),
       s=caml_create_bytes(l1 + l2 | 0);
      caml_blit_string(s1,0,s,0,l1);
      caml_blit_string(s2,0,s,l1,l2);
      return caml_string_of_bytes(s)}
    function char_of_int(n)
     {if(0 <= n && ! (255 < n))return n;return invalid_arg(cst_char_of_int)}
    function string_of_bool(b){return b?cst_true:cst_false}
    function bool_of_string(param)
     {return caml_string_notequal(param,cst_false$0)
              ?caml_string_notequal(param,cst_true$0)
                ?invalid_arg(cst_bool_of_string)
                :1
              :0}
    function bool_of_string_opt(param)
     {return caml_string_notequal(param,cst_false$1)
              ?caml_string_notequal(param,cst_true$1)?0:_g_
              :_h_}
    function string_of_int(n){return caml_string_of_jsbytes("" + n)}
    function int_of_string_opt(s)
     {try
       {var _Av_=[0,caml_int_of_string(s)];return _Av_}
      catch(_Aw_)
       {_Aw_ = caml_wrap_exception(_Aw_);
        if(_Aw_[1] === Failure)return 0;
        throw _Aw_}}
    function valid_float_lexem(s)
     {var l=caml_ml_string_length(s),i=0;
      for(;;)
       {if(l <= i)return symbol(s,cst);
        var match=caml_string_get(s,i),switch$0=0;
        if(48 <= match)
         {if(! (58 <= match))switch$0 = 1}
        else
         if(45 === match)switch$0 = 1;
        if(switch$0){var i$0=i + 1 | 0,i=i$0;continue}
        return s}}
    function to_string(f)
     {return valid_float_lexem(caml_format_float(cst_12g,f))}
    function of_string_opt(s)
     {try
       {var _At_=[0,caml_float_of_string(s)];return _At_}
      catch(_Au_)
       {_Au_ = caml_wrap_exception(_Au_);
        if(_Au_[1] === Failure)return 0;
        throw _Au_}}
    function append(l1,l2)
     {if(l1){var tl=l1[2],hd=l1[1];return [0,hd,append(tl,l2)]}return l2}
    var
     stdin=caml_ml_open_descriptor_in(0),
     stdout=caml_ml_open_descriptor_out(1),
     stderr=caml_ml_open_descriptor_out(2);
    function open_out_gen(mode,perm,name)
     {var c=caml_ml_open_descriptor_out(caml_sys_open(name,mode,perm));
      caml_ml_set_channel_name(c,name);
      return c}
    function open_out(name){return open_out_gen(_i_,438,name)}
    function open_out_bin(name){return open_out_gen(_j_,438,name)}
    function flush_all(param)
     {function iter(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var l=param$0[2],a=param$0[1];
            try
             {caml_ml_flush(a)}
            catch(_As_)
             {_As_ = caml_wrap_exception(_As_);
              if(_As_[1] !== Sys_error)throw _As_;
              var _Ar_=_As_}
            var param$0=l;
            continue}
          return 0}}
      return iter(runtime.caml_ml_out_channels_list(0))}
    function output_bytes(oc,s)
     {return caml_ml_output_bytes(oc,s,0,caml_ml_bytes_length(s))}
    function output_string(oc,s)
     {return caml_ml_output(oc,s,0,caml_ml_string_length(s))}
    function output(oc,s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return caml_ml_output_bytes(oc,s,ofs,len);
      return invalid_arg(cst_output)}
    function output_substring(oc,s,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_string_length(s) - len | 0) < ofs))
       return caml_ml_output(oc,s,ofs,len);
      return invalid_arg(cst_output_substring)}
    function output_value(chan,v){return caml_output_value(chan,v,0)}
    function close_out(oc){caml_ml_flush(oc);return caml_ml_close_channel(oc)}
    function close_out_noerr(oc)
     {try {caml_ml_flush(oc)}catch(_Aq_){}
      try
       {var _Ao_=caml_ml_close_channel(oc);return _Ao_}
      catch(_Ap_){return 0}}
    function open_in_gen(mode,perm,name)
     {var c=caml_ml_open_descriptor_in(caml_sys_open(name,mode,perm));
      caml_ml_set_channel_name(c,name);
      return c}
    function open_in(name){return open_in_gen(_k_,0,name)}
    function open_in_bin(name){return open_in_gen(_l_,0,name)}
    function input(ic,s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return caml_ml_input(ic,s,ofs,len);
      return invalid_arg(cst_input)}
    function unsafe_really_input(ic,s,ofs,len)
     {var ofs$0=ofs,len$0=len;
      for(;;)
       {if(0 < len$0)
         {var r=caml_ml_input(ic,s,ofs$0,len$0);
          if(0 === r)throw End_of_file;
          var len$1=len$0 - r | 0,ofs$1=ofs$0 + r | 0,ofs$0=ofs$1,len$0=len$1;
          continue}
        return 0}}
    function really_input(ic,s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return unsafe_really_input(ic,s,ofs,len);
      return invalid_arg(cst_really_input)}
    function really_input_string(ic,len)
     {var s=caml_create_bytes(len);
      really_input(ic,s,0,len);
      return caml_string_of_bytes(s)}
    function input_line(chan)
     {function build_result(buf,pos,param)
       {var pos$0=pos,param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1],len=caml_ml_bytes_length(hd);
            caml_blit_bytes(hd,0,buf,pos$0 - len | 0,len);
            var pos$1=pos$0 - len | 0,pos$0=pos$1,param$0=tl;
            continue}
          return buf}}
      var accu=0,len=0;
      for(;;)
       {var n=runtime.caml_ml_input_scan_line(chan);
        if(0 === n)
         {if(! accu)throw End_of_file;
          var _An_=build_result(caml_create_bytes(len),len,accu)}
        else
         {if(! (0 < n))
           {var beg=caml_create_bytes(- n | 0);
            caml_ml_input(chan,beg,0,- n | 0);
            var len$1=len - n | 0,accu$0=[0,beg,accu],accu=accu$0,len=len$1;
            continue}
          var res=caml_create_bytes(n - 1 | 0);
          caml_ml_input(chan,res,0,n - 1 | 0);
          caml_ml_input_char(chan);
          if(accu)
           var
            len$0=(len + n | 0) - 1 | 0,
            _An_=build_result(caml_create_bytes(len$0),len$0,[0,res,accu]);
          else
           var _An_=res}
        return caml_string_of_bytes(_An_)}}
    function close_in_noerr(ic)
     {try
       {var _Al_=caml_ml_close_channel(ic);return _Al_}
      catch(_Am_){return 0}}
    function print_char(c){return caml_ml_output_char(stdout,c)}
    function print_string(s){return output_string(stdout,s)}
    function print_bytes(s){return output_bytes(stdout,s)}
    function print_int(i)
     {return output_string(stdout,caml_string_of_jsbytes("" + i))}
    function print_float(f){return output_string(stdout,to_string(f))}
    function print_endline(s)
     {output_string(stdout,s);
      caml_ml_output_char(stdout,10);
      return caml_ml_flush(stdout)}
    function print_newline(param)
     {caml_ml_output_char(stdout,10);return caml_ml_flush(stdout)}
    function prerr_char(c){return caml_ml_output_char(stderr,c)}
    function prerr_string(s){return output_string(stderr,s)}
    function prerr_bytes(s){return output_bytes(stderr,s)}
    function prerr_int(i)
     {return output_string(stderr,caml_string_of_jsbytes("" + i))}
    function prerr_float(f){return output_string(stderr,to_string(f))}
    function prerr_endline(s)
     {output_string(stderr,s);
      caml_ml_output_char(stderr,10);
      return caml_ml_flush(stderr)}
    function prerr_newline(param)
     {caml_ml_output_char(stderr,10);return caml_ml_flush(stderr)}
    function read_line(param){caml_ml_flush(stdout);return input_line(stdin)}
    function read_int(param){return caml_int_of_string(read_line(0))}
    function read_int_opt(param){return int_of_string_opt(read_line(0))}
    function read_float(param){return caml_float_of_string(read_line(0))}
    function read_float_opt(param){return of_string_opt(read_line(0))}
    function string_of_format(param){var str=param[2];return str}
    function symbol$0(param,_Aj_)
     {var
       str2=_Aj_[2],
       fmt2=_Aj_[1],
       str1=param[2],
       fmt1=param[1],
       _Ak_=symbol(str1,symbol(cst$0,str2));
      return [0,concat_fmt(fmt1,fmt2),_Ak_]}
    var exit_function=[0,flush_all];
    function at_exit(f)
     {var g=exit_function[1],f_already_ran=[0,0];
      exit_function[1]
      =
      function(param)
       {if(1 - f_already_ran[1]){f_already_ran[1] = 1;caml_call1(f,0)}
        return caml_call1(g,0)};
      return 0}
    function do_at_exit(param){return caml_call1(exit_function[1],0)}
    function exit(retcode)
     {do_at_exit(0);return runtime.caml_sys_exit(retcode)}
    var
     set_binary_mode_in=caml_ml_set_binary_mode,
     close_in=caml_ml_close_channel,
     in_channel_length=caml_ml_channel_size,
     pos_in=runtime.caml_ml_pos_in,
     seek_in=runtime.caml_ml_seek_in,
     input_value=caml_input_value,
     input_binary_int=runtime.caml_ml_input_int,
     input_byte=caml_ml_input_char,
     input_char=caml_ml_input_char,
     set_binary_mode_out=caml_ml_set_binary_mode,
     out_channel_length=caml_ml_channel_size,
     pos_out=runtime.caml_ml_pos_out,
     seek_out=runtime.caml_ml_seek_out,
     output_binary_int=runtime.caml_ml_output_int,
     output_byte=caml_ml_output_char,
     output_char=caml_ml_output_char,
     flush=caml_ml_flush,
     Stdlib=
      [0,
       invalid_arg,
       failwith,
       Exit,
       Match_failure,
       Assert_failure,
       Invalid_argument,
       Failure,
       Not_found,
       Out_of_memory,
       Stack_overflow,
       Sys_error,
       End_of_file,
       Division_by_zero,
       Sys_blocked_io,
       Undefined_recursive_module,
       min,
       max,
       abs,
       max_int,
       min_int,
       lnot,
       infinity,
       neg_infinity,
       nan,
       max_float,
       min_float,
       epsilon,
       symbol,
       char_of_int,
       string_of_bool,
       bool_of_string_opt,
       bool_of_string,
       string_of_int,
       int_of_string_opt,
       to_string,
       of_string_opt,
       append,
       stdin,
       stdout,
       stderr,
       print_char,
       print_string,
       print_bytes,
       print_int,
       print_float,
       print_endline,
       print_newline,
       prerr_char,
       prerr_string,
       prerr_bytes,
       prerr_int,
       prerr_float,
       prerr_endline,
       prerr_newline,
       read_line,
       read_int_opt,
       read_int,
       read_float_opt,
       read_float,
       open_out,
       open_out_bin,
       open_out_gen,
       flush,
       flush_all,
       output_char,
       output_string,
       output_bytes,
       output,
       output_substring,
       output_byte,
       output_binary_int,
       output_value,
       seek_out,
       pos_out,
       out_channel_length,
       close_out,
       close_out_noerr,
       set_binary_mode_out,
       open_in,
       open_in_bin,
       open_in_gen,
       input_char,
       input_line,
       input,
       really_input,
       really_input_string,
       input_byte,
       input_binary_int,
       input_value,
       seek_in,
       pos_in,
       in_channel_length,
       close_in,
       close_in_noerr,
       set_binary_mode_in,
       [0,
        runtime.caml_ml_seek_out_64,
        runtime.caml_ml_pos_out_64,
        caml_ml_channel_size_64,
        runtime.caml_ml_seek_in_64,
        runtime.caml_ml_pos_in_64,
        caml_ml_channel_size_64],
       string_of_format,
       symbol$0,
       exit,
       at_exit,
       valid_float_lexem,
       unsafe_really_input,
       do_at_exit];
    caml_register_global(719,Stdlib,"Stdlib");
    var
     Exit$0=[248,cst_Stdlib_Pervasives_Exit,caml_fresh_oo_id(0)],
     Stdlib_pervasives=
      [0,
       invalid_arg,
       failwith,
       Exit$0,
       min,
       max,
       abs,
       max_int,
       min_int,
       lnot,
       infinity,
       neg_infinity,
       nan,
       max_float,
       min_float,
       epsilon,
       symbol,
       char_of_int,
       string_of_bool,
       bool_of_string,
       bool_of_string_opt,
       string_of_int,
       int_of_string_opt,
       to_string,
       of_string_opt,
       append,
       stdin,
       stdout,
       stderr,
       print_char,
       print_string,
       print_bytes,
       print_int,
       print_float,
       print_endline,
       print_newline,
       prerr_char,
       prerr_string,
       prerr_bytes,
       prerr_int,
       prerr_float,
       prerr_endline,
       prerr_newline,
       read_line,
       read_int,
       read_int_opt,
       read_float,
       read_float_opt,
       open_out,
       open_out_bin,
       open_out_gen,
       flush,
       flush_all,
       output_char,
       output_string,
       output_bytes,
       output,
       output_substring,
       output_byte,
       output_binary_int,
       output_value,
       seek_out,
       pos_out,
       out_channel_length,
       close_out,
       close_out_noerr,
       set_binary_mode_out,
       open_in,
       open_in_bin,
       open_in_gen,
       input_char,
       input_line,
       input,
       really_input,
       really_input_string,
       input_byte,
       input_binary_int,
       input_value,
       seek_in,
       pos_in,
       in_channel_length,
       close_in,
       close_in_noerr,
       set_binary_mode_in,
       string_of_format,
       symbol$0,
       exit,
       at_exit,
       valid_float_lexem,
       do_at_exit];
    caml_register_global(720,Stdlib_pervasives,"Stdlib__pervasives");
    function empty(param){return 0}
    function return$0(x,param){return [0,x,empty]}
    function map(f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var
         next=match[2],
         x=match[1],
         _Ah_=function(_Ai_){return map(f,next,_Ai_)};
        return [0,caml_call1(f,x),_Ah_]}
      return 0}
    function filter_map(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1],match$0=caml_call1(f,x);
          if(match$0)
           {var y=match$0[1];
            return [0,y,function(_Ag_){return filter_map(f,next,_Ag_)}]}
          var seq$0=next;
          continue}
        return 0}}
    function filter(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          if(caml_call1(f,x))
           return [0,x,function(_Af_){return filter(f,next,_Af_)}];
          var seq$0=next;
          continue}
        return 0}}
    function flat_map$0(counter,f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var next=match[2],x=match[1],_Ae_=caml_call1(f,x),_Ad_=0;
        if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return flat_map_app$0(counter$0,f,_Ae_,next,_Ad_)}
        return caml_trampoline_return(flat_map_app$0,[0,f,_Ae_,next,_Ad_])}
      return 0}
    function flat_map_app$0(counter,f,seq,tail,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var next=match[2],x=match[1];
        return [0,x,function(_Ac_){return flat_map_app(f,next,tail,_Ac_)}]}
      var _Ab_=0;
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return flat_map$0(counter$0,f,tail,_Ab_)}
      return caml_trampoline_return(flat_map$0,[0,f,tail,_Ab_])}
    function flat_map(f,seq,param)
     {return caml_trampoline(flat_map$0(0,f,seq,param))}
    function flat_map_app(f,seq,tail,param)
     {return caml_trampoline(flat_map_app$0(0,f,seq,tail,param))}
    function fold_left(f,acc,seq)
     {var acc$0=acc,seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var
           next=match[2],
           x=match[1],
           acc$1=caml_call2(f,acc$0,x),
           acc$0=acc$1,
           seq$0=next;
          continue}
        return acc$0}}
    function iter(f,seq)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          caml_call1(f,x);
          var seq$0=next;
          continue}
        return 0}}
    var
     Stdlib_seq=
      [0,empty,return$0,map,filter,filter_map,flat_map,fold_left,iter];
    caml_register_global(721,Stdlib_seq,"Stdlib__seq");
    var none=0;
    function some(v){return [0,v]}
    function value(o,default$0){if(o){var v=o[1];return v}return default$0}
    function get(param)
     {if(param){var v=param[1];return v}
      return invalid_arg(cst_option_is_None)}
    function bind(o,f){if(o){var v=o[1];return caml_call1(f,v)}return 0}
    function join(param)
     {if(param){var _Aa_=param[1];if(_Aa_)return _Aa_}return 0}
    function map$0(f,o){if(o){var v=o[1];return [0,caml_call1(f,v)]}return 0}
    function fold(none,some,param)
     {if(param){var v=param[1];return caml_call1(some,v)}return none}
    function iter$0(f,param)
     {if(param){var v=param[1];return caml_call1(f,v)}return 0}
    function is_none(param){return param?0:1}
    function is_some(param){return param?1:0}
    function equal(eq,o0,o1)
     {if(o0)
       {if(o1){var v1=o1[1],v0=o0[1];return caml_call2(eq,v0,v1)}}
      else
       if(! o1)return 1;
      return 0}
    function compare(cmp,o0,o1)
     {if(o0)
       {var _z$_=o0[1];
        if(o1){var v1=o1[1];return caml_call2(cmp,_z$_,v1)}
        return 1}
      return o1?-1:0}
    function to_result(none,param)
     {if(param){var v=param[1];return [0,v]}return [1,none]}
    function to_list(param){if(param){var v=param[1];return [0,v,0]}return 0}
    function to_seq(param)
     {if(param){var v=param[1];return function(_z__){return return$0(v,_z__)}}
      return empty}
    var
     Stdlib_option=
      [0,
       none,
       some,
       value,
       get,
       bind,
       join,
       map$0,
       fold,
       iter$0,
       is_none,
       is_some,
       equal,
       compare,
       to_result,
       to_list,
       to_seq];
    caml_register_global(722,Stdlib_option,"Stdlib__option");
    function ok(v){return [0,v]}
    function error(e){return [1,e]}
    function value$0(r,default$0)
     {if(0 === r[0]){var v=r[1];return v}return default$0}
    function get_ok(param)
     {if(0 === param[0]){var v=param[1];return v}
      return invalid_arg(cst_result_is_Error)}
    function get_error(param)
     {if(0 === param[0])return invalid_arg(cst_result_is_Ok);
      var e=param[1];
      return e}
    function bind$0(r,f)
     {if(0 === r[0]){var v=r[1];return caml_call1(f,v)}return r}
    function join$0(e){if(0 === e[0]){var r=e[1];return r}return e}
    function map$1(f,e)
     {if(0 === e[0]){var v=e[1];return [0,caml_call1(f,v)]}return e}
    function map_error(f,v)
     {if(0 === v[0])return v;var e=v[1];return [1,caml_call1(f,e)]}
    function fold$0(ok,error,param)
     {if(0 === param[0]){var v=param[1];return caml_call1(ok,v)}
      var e=param[1];
      return caml_call1(error,e)}
    function iter$1(f,param)
     {if(0 === param[0]){var v=param[1];return caml_call1(f,v)}return 0}
    function iter_error(f,param)
     {if(0 === param[0])return 0;var e=param[1];return caml_call1(f,e)}
    function is_ok(param){return 0 === param[0]?1:0}
    function is_error(param){return 0 === param[0]?0:1}
    function equal$0(ok,error,r0,match)
     {if(0 === r0[0])
       {var _z8_=r0[1];
        if(0 === match[0]){var v1=match[1];return caml_call2(ok,_z8_,v1)}}
      else
       {var _z9_=r0[1];
        if(0 !== match[0]){var e1=match[1];return caml_call2(error,_z9_,e1)}}
      return 0}
    function compare$0(ok,error,r0,match)
     {if(0 === r0[0])
       {var _z6_=r0[1];
        if(0 === match[0]){var v1=match[1];return caml_call2(ok,_z6_,v1)}
        return -1}
      var _z7_=r0[1];
      if(0 === match[0])return 1;
      var e1=match[1];
      return caml_call2(error,_z7_,e1)}
    function to_option(param)
     {if(0 === param[0]){var v=param[1];return [0,v]}return 0}
    function to_list$0(param)
     {if(0 === param[0]){var v=param[1];return [0,v,0]}return 0}
    function to_seq$0(param)
     {if(0 === param[0])
       {var v=param[1];return function(_z5_){return return$0(v,_z5_)}}
      return empty}
    var
     Stdlib_result=
      [0,
       ok,
       error,
       value$0,
       get_ok,
       get_error,
       bind$0,
       join$0,
       map$1,
       map_error,
       fold$0,
       iter$1,
       iter_error,
       is_ok,
       is_error,
       equal$0,
       compare$0,
       to_option,
       to_list$0,
       to_seq$0];
    caml_register_global(723,Stdlib_result,"Stdlib__result");
    function equal$1(_z4_,_z3_){return _z4_ === _z3_?1:0}
    var compare$1=caml_int_compare;
    function to_int(param){return 0 === param?0:1}
    function to_float(param){return 0 === param?0.:1.}
    function to_string$0(param){return 0 === param?cst_false$2:cst_true$2}
    var
     Stdlib_bool=
      [0,
       function(_z2_){return 1 - _z2_},
       equal$1,
       compare$1,
       to_int,
       to_float,
       to_string$0];
    caml_register_global(724,Stdlib_bool,"Stdlib__bool");
    function chr(n)
     {if(0 <= n && ! (255 < n))return n;return invalid_arg(cst_Char_chr)}
    function escaped(c)
     {var switch$0=0;
      if(40 <= c)
       {if(92 === c)return cst$1;if(! (127 <= c))switch$0 = 1}
      else
       if(32 <= c)
        {if(39 <= c)return cst$2;switch$0 = 1}
       else
        if(! (14 <= c))
         switch(c)
          {case 8:return cst_b;
           case 9:return cst_t;
           case 10:return cst_n;
           case 13:return cst_r
           }
      if(switch$0)
       {var s$0=caml_create_bytes(1);
        caml_bytes_unsafe_set(s$0,0,c);
        return caml_string_of_bytes(s$0)}
      var s=caml_create_bytes(4);
      caml_bytes_unsafe_set(s,0,92);
      caml_bytes_unsafe_set(s,1,48 + (c / 100 | 0) | 0);
      caml_bytes_unsafe_set(s,2,48 + ((c / 10 | 0) % 10 | 0) | 0);
      caml_bytes_unsafe_set(s,3,48 + (c % 10 | 0) | 0);
      return caml_string_of_bytes(s)}
    function lowercase(c)
     {var switch$0=0;
      if(! (65 <= c) || 90 < c)switch$0 = 1;
      if(switch$0)
       {var switch$1=0;
        if(! (192 <= c) || 214 < c)switch$1 = 1;
        if(switch$1)
         {var switch$2=0;
          if(! (216 <= c) || 222 < c)switch$2 = 1;
          if(switch$2)return c}}
      return c + 32 | 0}
    function uppercase(c)
     {var switch$0=0;
      if(! (97 <= c) || 122 < c)switch$0 = 1;
      if(switch$0)
       {var switch$1=0;
        if(! (224 <= c) || 246 < c)switch$1 = 1;
        if(switch$1)
         {var switch$2=0;
          if(! (248 <= c) || 254 < c)switch$2 = 1;
          if(switch$2)return c}}
      return c - 32 | 0}
    function lowercase_ascii(c)
     {if(65 <= c && ! (90 < c))return c + 32 | 0;return c}
    function uppercase_ascii(c)
     {if(97 <= c && ! (122 < c))return c - 32 | 0;return c}
    function compare$2(c1,c2){return c1 - c2 | 0}
    function equal$2(c1,c2){return 0 === (c1 - c2 | 0)?1:0}
    var
     Stdlib_char=
      [0,
       chr,
       escaped,
       lowercase,
       uppercase,
       lowercase_ascii,
       uppercase_ascii,
       compare$2,
       equal$2];
    caml_register_global(725,Stdlib_char,"Stdlib__char");
    var
     min$0=0,
     max$0=1114111,
     lo_bound=55295,
     hi_bound=57344,
     bom=65279,
     rep=65533;
    function succ(u)
     {return u === 55295
              ?hi_bound
              :u === 1114111?invalid_arg(err_no_succ):u + 1 | 0}
    function pred(u)
     {return u === 57344?lo_bound:u === 0?invalid_arg(err_no_pred):u - 1 | 0}
    function is_valid(i)
     {var _zY_=0 <= i?1:0,_zZ_=_zY_?i <= 55295?1:0:_zY_;
      if(_zZ_)
       var _z0_=_zZ_;
      else
       var _z1_=57344 <= i?1:0,_z0_=_z1_?i <= 1114111?1:0:_z1_;
      return _z0_}
    function of_int(i)
     {return is_valid(i)
              ?i
              :invalid_arg
                (symbol
                  (caml_format_int(cst_X,i),cst_is_not_an_Unicode_scalar_v))}
    function is_char(u){return u < 256?1:0}
    function of_char(c){return c}
    function to_char(u)
     {return 255 < u
              ?invalid_arg
                (symbol
                  (cst_U,
                   symbol
                    (caml_format_int(cst_04X,u),cst_is_not_a_latin1_character)))
              :u}
    function unsafe_to_char(_zX_){return _zX_}
    function equal$3(_zW_,_zV_){return _zW_ === _zV_?1:0}
    var compare$3=caml_int_compare;
    function hash(_zU_){return _zU_}
    function _m_(_zT_){return _zT_}
    var
     Stdlib_uchar=
      [0,
       min$0,
       max$0,
       bom,
       rep,
       succ,
       pred,
       is_valid,
       of_int,
       function(_zS_){return _zS_},
       _m_,
       is_char,
       of_char,
       to_char,
       unsafe_to_char,
       equal$3,
       compare$3,
       hash];
    caml_register_global(726,Stdlib_uchar,"Stdlib__uchar");
    var
     match=runtime.caml_sys_get_argv(0),
     _n_=match[2],
     match$0=runtime.caml_sys_get_config(0),
     os_type=match$0[1],
     match$1=runtime.caml_sys_const_backend_type(0),
     unix=runtime.caml_sys_const_ostype_unix(0),
     win32=runtime.caml_sys_const_ostype_win32(0),
     cygwin=runtime.caml_sys_const_ostype_cygwin(0),
     max_array_length=runtime.caml_sys_const_max_wosize(0),
     max_floatarray_length=max_array_length / 2 | 0,
     max_string_length=(4 * max_array_length | 0) - 1 | 0,
     _o_=match[1],
     big_endian=0,
     match$2=32,
     int_size=32;
    function getenv_opt(s)
     {try
       {var _zQ_=[0,caml_sys_getenv(s)];return _zQ_}
      catch(_zR_)
       {_zR_ = caml_wrap_exception(_zR_);
        if(_zR_ === Not_found)return 0;
        throw _zR_}}
    var interactive=[0,0];
    function set_signal(sig_num,sig_beh){return 0}
    var
     Break=[248,cst_Stdlib_Sys_Break,caml_fresh_oo_id(0)],
     sigabrt=-1,
     sigalrm=-2,
     sigfpe=-3,
     sighup=-4,
     sigill=-5,
     sigint=-6,
     sigkill=-7,
     sigpipe=-8,
     sigquit=-9,
     sigsegv=-10,
     sigterm=-11,
     sigusr1=-12,
     sigusr2=-13,
     sigchld=-14,
     sigcont=-15,
     sigstop=-16,
     sigtstp=-17,
     sigttin=-18,
     sigttou=-19,
     sigvtalrm=-20,
     sigprof=-21,
     sigbus=-22,
     sigpoll=-23,
     sigsys=-24,
     sigtrap=-25,
     sigurg=-26,
     sigxcpu=-27,
     sigxfsz=-28;
    function catch_break(on){return on?0:0}
    var
     Stdlib_sys=
      [0,
       _n_,
       _o_,
       getenv_opt,
       interactive,
       os_type,
       match$1,
       unix,
       win32,
       cygwin,
       match$2,
       int_size,
       big_endian,
       max_string_length,
       max_array_length,
       max_floatarray_length,
       set_signal,
       sigabrt,
       sigalrm,
       sigfpe,
       sighup,
       sigill,
       sigint,
       sigkill,
       sigpipe,
       sigquit,
       sigsegv,
       sigterm,
       sigusr1,
       sigusr2,
       sigchld,
       sigcont,
       sigstop,
       sigtstp,
       sigttin,
       sigttou,
       sigvtalrm,
       sigprof,
       sigbus,
       sigpoll,
       sigsys,
       sigtrap,
       sigurg,
       sigxcpu,
       sigxfsz,
       Break,
       catch_break,
       ocaml_version,
       runtime.caml_ml_enable_runtime_warnings,
       runtime.caml_ml_runtime_warnings_enabled];
    caml_register_global(727,Stdlib_sys,"Stdlib__sys");
    function length(l)
     {var len=0,param=l;
      for(;;)
       {if(param)
         {var param$0=param[2],len$0=len + 1 | 0,len=len$0,param=param$0;
          continue}
        return len}}
    function cons(a,l){return [0,a,l]}
    function hd(param)
     {if(param){var a=param[1];return a}return failwith(cst_hd)}
    function tl(param)
     {if(param){var l=param[2];return l}return failwith(cst_tl)}
    function nth(l,n)
     {if(0 <= n)
       {var l$0=l,n$0=n;
        for(;;)
         {if(l$0)
           {var l$1=l$0[2],a=l$0[1];
            if(0 === n$0)return a;
            var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;
            continue}
          return failwith(cst_nth)}}
      return invalid_arg(cst_List_nth)}
    function nth_opt(l,n)
     {if(0 <= n)
       {var l$0=l,n$0=n;
        for(;;)
         {if(l$0)
           {var l$1=l$0[2],a=l$0[1];
            if(0 === n$0)return [0,a];
            var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;
            continue}
          return 0}}
      return invalid_arg(cst_List_nth$0)}
    function rev_append(l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {var l1$1=l1$0[2],a=l1$0[1],l2$1=[0,a,l2$0],l1$0=l1$1,l2$0=l2$1;
          continue}
        return l2$0}}
    function rev(l){return rev_append(l,0)}
    function init_aux(i,n,f)
     {if(n <= i)return 0;
      var r=caml_call1(f,i);
      return [0,r,init_aux(i + 1 | 0,n,f)]}
    var rev_init_threshold=typeof match$1 === "number"?10000:50;
    function init(len,f)
     {if(0 <= len)
       {if(rev_init_threshold < len)
         {var acc=0,i=0;
          for(;;)
           {if(len <= i)return rev(acc);
            var i$0=i + 1 | 0,acc$0=[0,caml_call1(f,i),acc],acc=acc$0,i=i$0;
            continue}}
        return init_aux(0,len,f)}
      return invalid_arg(cst_List_init)}
    function flatten(param)
     {if(param){var r=param[2],l=param[1];return append(l,flatten(r))}
      return 0}
    function map$2(f,param)
     {if(param)
       {var l=param[2],a=param[1],r=caml_call1(f,a);return [0,r,map$2(f,l)]}
      return 0}
    function _p_(i,f,param)
     {if(param)
       {var l=param[2],a=param[1],r=caml_call2(f,i,a);
        return [0,r,_p_(i + 1 | 0,f,l)]}
      return 0}
    function mapi(f,l){return _p_(0,f,l)}
    function rev_map(f,param)
     {var accu=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           a=param$0[1],
           accu$0=[0,caml_call1(f,a),accu],
           accu=accu$0,
           param$0=l;
          continue}
        return accu}}
    function iter$2(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1];
          caml_call1(f,a);
          var param$0=l;
          continue}
        return 0}}
    function iteri(f,l$0)
     {var i=0,param=l$0;
      for(;;)
       {if(param)
         {var l=param[2],a=param[1];
          caml_call2(f,i,a);
          var i$0=i + 1 | 0,i=i$0,param=l;
          continue}
        return 0}}
    function fold_left$0(f,accu,l)
     {var accu$0=accu,l$0=l;
      for(;;)
       {if(l$0)
         {var
           l$1=l$0[2],
           a=l$0[1],
           accu$1=caml_call2(f,accu$0,a),
           accu$0=accu$1,
           l$0=l$1;
          continue}
        return accu$0}}
    function fold_right(f,l,accu)
     {if(l){var l$0=l[2],a=l[1];return caml_call2(f,a,fold_right(f,l$0,accu))}
      return accu}
    function map2(f,l1,l2)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1],r=caml_call2(f,a1,a2);
          return [0,r,map2(f,l1$0,l2$0)]}}
      else
       if(! l2)return 0;
      return invalid_arg(cst_List_map2)}
    function rev_map2(f,l1,l2)
     {var accu=0,l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             accu$0=[0,caml_call2(f,a1,a2),accu],
             accu=accu$0,
             l1$0=l1$1,
             l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return accu;
        return invalid_arg(cst_List_rev_map2)}}
    function iter2(f,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var l2$1=l2$0[2],a2=l2$0[1],l1$1=l1$0[2],a1=l1$0[1];
            caml_call2(f,a1,a2);
            var l1$0=l1$1,l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return 0;
        return invalid_arg(cst_List_iter2)}}
    function fold_left2(f,accu,l1,l2)
     {var accu$0=accu,l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             accu$1=caml_call3(f,accu$0,a1,a2),
             accu$0=accu$1,
             l1$0=l1$1,
             l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return accu$0;
        return invalid_arg(cst_List_fold_left2)}}
    function fold_right2(f,l1,l2,accu)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1];
          return caml_call3(f,a1,a2,fold_right2(f,l1$0,l2$0,accu))}}
      else
       if(! l2)return accu;
      return invalid_arg(cst_List_fold_right2)}
    function for_all(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zP_=caml_call1(p,a);
          if(_zP_){var param$0=l;continue}
          return _zP_}
        return 1}}
    function exists(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zO_=caml_call1(p,a);
          if(_zO_)return _zO_;
          var param$0=l;
          continue}
        return 0}}
    function for_all2(p,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             _zN_=caml_call2(p,a1,a2);
            if(_zN_){var l1$0=l1$1,l2$0=l2$1;continue}
            return _zN_}}
        else
         if(! l2$0)return 1;
        return invalid_arg(cst_List_for_all2)}}
    function exists2(p,l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0)
           {var
             l2$1=l2$0[2],
             a2=l2$0[1],
             l1$1=l1$0[2],
             a1=l1$0[1],
             _zM_=caml_call2(p,a1,a2);
            if(_zM_)return _zM_;
            var l1$0=l1$1,l2$0=l2$1;
            continue}}
        else
         if(! l2$0)return 0;
        return invalid_arg(cst_List_exists2)}}
    function mem(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zL_=0 === caml_compare(a,x)?1:0;
          if(_zL_)return _zL_;
          var param$0=l;
          continue}
        return 0}}
    function memq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],a=param$0[1],_zK_=a === x?1:0;
          if(_zK_)return _zK_;
          var param$0=l;
          continue}
        return 0}}
    function assoc(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(0 === caml_compare(a,x))return b;
          var param$0=l;
          continue}
        throw Not_found}}
    function assoc_opt(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(0 === caml_compare(a,x))return [0,b];
          var param$0=l;
          continue}
        return 0}}
    function assq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(a === x)return b;
          var param$0=l;
          continue}
        throw Not_found}}
    function assq_opt(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],b=match[2],a=match[1];
          if(a === x)return [0,b];
          var param$0=l;
          continue}
        return 0}}
    function mem_assoc(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var
           l=param$0[2],
           match=param$0[1],
           a=match[1],
           _zJ_=0 === caml_compare(a,x)?1:0;
          if(_zJ_)return _zJ_;
          var param$0=l;
          continue}
        return 0}}
    function mem_assq(x,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],match=param$0[1],a=match[1],_zI_=a === x?1:0;
          if(_zI_)return _zI_;
          var param$0=l;
          continue}
        return 0}}
    function remove_assoc(x,param)
     {if(param)
       {var l=param[2],pair=param[1],a=pair[1];
        return 0 === caml_compare(a,x)?l:[0,pair,remove_assoc(x,l)]}
      return 0}
    function remove_assq(x,param)
     {if(param)
       {var l=param[2],pair=param[1],a=pair[1];
        return a === x?l:[0,pair,remove_assq(x,l)]}
      return 0}
    function find(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))return x;
          var param$0=l;
          continue}
        throw Not_found}}
    function find_opt(p,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))return [0,x];
          var param$0=l;
          continue}
        return 0}}
    function find_all(p)
     {var accu=0;
      return function(param$0)
       {var accu$0=accu,param=param$0;
        for(;;)
         {if(param)
           {var l=param[2],x=param[1];
            if(caml_call1(p,x))
             {var accu$1=[0,x,accu$0],accu$0=accu$1,param=l;continue}
            var param=l;
            continue}
          return rev(accu$0)}}}
    function filter_map$0(f)
     {var accu=0;
      return function(param$0)
       {var accu$0=accu,param=param$0;
        for(;;)
         {if(param)
           {var l=param[2],x=param[1],match=caml_call1(f,x);
            if(match)
             {var v=match[1],accu$1=[0,v,accu$0],accu$0=accu$1,param=l;
              continue}
            var param=l;
            continue}
          return rev(accu$0)}}}
    function partition(p,param)
     {var yes=0,no=0,param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],x=param$0[1];
          if(caml_call1(p,x))
           {var yes$0=[0,x,yes],yes=yes$0,param$0=l;continue}
          var no$0=[0,x,no],no=no$0,param$0=l;
          continue}
        var _zH_=rev(no);
        return [0,rev(yes),_zH_]}}
    function split(param)
     {if(param)
       {var
         l=param[2],
         match=param[1],
         y=match[2],
         x=match[1],
         match$0=split(l),
         ry=match$0[2],
         rx=match$0[1];
        return [0,[0,x,rx],[0,y,ry]]}
      return _q_}
    function combine(l1,l2)
     {if(l1)
       {if(l2)
         {var l2$0=l2[2],a2=l2[1],l1$0=l1[2],a1=l1[1];
          return [0,[0,a1,a2],combine(l1$0,l2$0)]}}
      else
       if(! l2)return 0;
      return invalid_arg(cst_List_combine)}
    function merge(cmp,l1,match)
     {if(l1)
       {if(match)
         {var t2=match[2],h2=match[1],t1=l1[2],h1=l1[1];
          return 0 < caml_call2(cmp,h1,h2)
                  ?[0,h2,merge(cmp,l1,t2)]
                  :[0,h1,merge(cmp,t1,match)]}
        return l1}
      return match}
    function chop(k,l)
     {var k$0=k,l$0=l;
      for(;;)
       {if(0 === k$0)return l$0;
        if(l$0){var l$1=l$0[2],k$1=k$0 - 1 | 0,k$0=k$1,l$0=l$1;continue}
        throw [0,Assert_failure,_r_]}}
    function fast_sort(cmp,l)
     {function rev_sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zE_=l[2];
            if(_zE_)
             {var x2=_zE_[1],x1=l[1];
              return 0 < caml_call2(cmp,x1,x2)?[0,x1,[0,x2,0]]:[0,x2,[0,x1,0]]}}}
        else
         if(3 === n && l)
          {var _zF_=l[2];
           if(_zF_)
            {var _zG_=_zF_[2];
             if(_zG_)
              {var x3=_zG_[1],x2$0=_zF_[1],x1$0=l[1];
               return 0 < caml_call2(cmp,x1$0,x2$0)
                       ?0 < caml_call2(cmp,x2$0,x3)
                         ?[0,x1$0,[0,x2$0,[0,x3,0]]]
                         :0 < caml_call2(cmp,x1$0,x3)
                           ?[0,x1$0,[0,x3,[0,x2$0,0]]]
                           :[0,x3,[0,x1$0,[0,x2$0,0]]]
                       :0 < caml_call2(cmp,x1$0,x3)
                         ?[0,x2$0,[0,x1$0,[0,x3,0]]]
                         :0 < caml_call2(cmp,x2$0,x3)
                           ?[0,x2$0,[0,x3,[0,x1$0,0]]]
                           :[0,x3,[0,x2$0,[0,x1$0,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=sort(n1,l),
         l2$1=sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1];
              if(0 < caml_call2(cmp,h1,h2))
               {var accu$0=[0,h2,accu],l2=t2,accu=accu$0;continue}
              var accu$1=[0,h1,accu],l1=t1,accu=accu$1;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      function sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zB_=l[2];
            if(_zB_)
             {var x2=_zB_[1],x1=l[1];
              return 0 < caml_call2(cmp,x1,x2)?[0,x2,[0,x1,0]]:[0,x1,[0,x2,0]]}}}
        else
         if(3 === n && l)
          {var _zC_=l[2];
           if(_zC_)
            {var _zD_=_zC_[2];
             if(_zD_)
              {var x3=_zD_[1],x2$0=_zC_[1],x1$0=l[1];
               return 0 < caml_call2(cmp,x1$0,x2$0)
                       ?0 < caml_call2(cmp,x1$0,x3)
                         ?0 < caml_call2(cmp,x2$0,x3)
                           ?[0,x3,[0,x2$0,[0,x1$0,0]]]
                           :[0,x2$0,[0,x3,[0,x1$0,0]]]
                         :[0,x2$0,[0,x1$0,[0,x3,0]]]
                       :0 < caml_call2(cmp,x2$0,x3)
                         ?0 < caml_call2(cmp,x1$0,x3)
                           ?[0,x3,[0,x1$0,[0,x2$0,0]]]
                           :[0,x1$0,[0,x3,[0,x2$0,0]]]
                         :[0,x1$0,[0,x2$0,[0,x3,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=rev_sort(n1,l),
         l2$1=rev_sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1];
              if(0 < caml_call2(cmp,h1,h2))
               {var accu$0=[0,h1,accu],l1=t1,accu=accu$0;continue}
              var accu$1=[0,h2,accu],l2=t2,accu=accu$1;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      var len=length(l);
      return 2 <= len?sort(len,l):l}
    function sort_uniq(cmp,l)
     {function rev_sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zy_=l[2];
            if(_zy_)
             {var x2=_zy_[1],x1=l[1],c$0=caml_call2(cmp,x1,x2);
              return 0 === c$0
                      ?[0,x1,0]
                      :0 < c$0?[0,x1,[0,x2,0]]:[0,x2,[0,x1,0]]}}}
        else
         if(3 === n && l)
          {var _zz_=l[2];
           if(_zz_)
            {var _zA_=_zz_[2];
             if(_zA_)
              {var
                x3=_zA_[1],
                x2$0=_zz_[1],
                x1$0=l[1],
                c$1=caml_call2(cmp,x1$0,x2$0);
               if(0 === c$1)
                {var c$2=caml_call2(cmp,x2$0,x3);
                 return 0 === c$2
                         ?[0,x2$0,0]
                         :0 < c$2?[0,x2$0,[0,x3,0]]:[0,x3,[0,x2$0,0]]}
               if(0 < c$1)
                {var c$3=caml_call2(cmp,x2$0,x3);
                 if(0 === c$3)return [0,x1$0,[0,x2$0,0]];
                 if(0 < c$3)return [0,x1$0,[0,x2$0,[0,x3,0]]];
                 var c$4=caml_call2(cmp,x1$0,x3);
                 return 0 === c$4
                         ?[0,x1$0,[0,x2$0,0]]
                         :0 < c$4
                           ?[0,x1$0,[0,x3,[0,x2$0,0]]]
                           :[0,x3,[0,x1$0,[0,x2$0,0]]]}
               var c$5=caml_call2(cmp,x1$0,x3);
               if(0 === c$5)return [0,x2$0,[0,x1$0,0]];
               if(0 < c$5)return [0,x2$0,[0,x1$0,[0,x3,0]]];
               var c$6=caml_call2(cmp,x2$0,x3);
               return 0 === c$6
                       ?[0,x2$0,[0,x1$0,0]]
                       :0 < c$6
                         ?[0,x2$0,[0,x3,[0,x1$0,0]]]
                         :[0,x3,[0,x2$0,[0,x1$0,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=sort(n1,l),
         l2$1=sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1],c=caml_call2(cmp,h1,h2);
              if(0 === c)
               {var accu$0=[0,h1,accu],l1=t1,l2=t2,accu=accu$0;continue}
              if(0 <= c){var accu$1=[0,h2,accu],l2=t2,accu=accu$1;continue}
              var accu$2=[0,h1,accu],l1=t1,accu=accu$2;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      function sort(n,l)
       {if(2 === n)
         {if(l)
           {var _zv_=l[2];
            if(_zv_)
             {var x2=_zv_[1],x1=l[1],c$0=caml_call2(cmp,x1,x2);
              return 0 === c$0
                      ?[0,x1,0]
                      :0 <= c$0?[0,x2,[0,x1,0]]:[0,x1,[0,x2,0]]}}}
        else
         if(3 === n && l)
          {var _zw_=l[2];
           if(_zw_)
            {var _zx_=_zw_[2];
             if(_zx_)
              {var
                x3=_zx_[1],
                x2$0=_zw_[1],
                x1$0=l[1],
                c$1=caml_call2(cmp,x1$0,x2$0);
               if(0 === c$1)
                {var c$2=caml_call2(cmp,x2$0,x3);
                 return 0 === c$2
                         ?[0,x2$0,0]
                         :0 <= c$2?[0,x3,[0,x2$0,0]]:[0,x2$0,[0,x3,0]]}
               if(0 <= c$1)
                {var c$3=caml_call2(cmp,x1$0,x3);
                 if(0 === c$3)return [0,x2$0,[0,x1$0,0]];
                 if(0 <= c$3)
                  {var c$4=caml_call2(cmp,x2$0,x3);
                   return 0 === c$4
                           ?[0,x2$0,[0,x1$0,0]]
                           :0 <= c$4
                             ?[0,x3,[0,x2$0,[0,x1$0,0]]]
                             :[0,x2$0,[0,x3,[0,x1$0,0]]]}
                 return [0,x2$0,[0,x1$0,[0,x3,0]]]}
               var c$5=caml_call2(cmp,x2$0,x3);
               if(0 === c$5)return [0,x1$0,[0,x2$0,0]];
               if(0 <= c$5)
                {var c$6=caml_call2(cmp,x1$0,x3);
                 return 0 === c$6
                         ?[0,x1$0,[0,x2$0,0]]
                         :0 <= c$6
                           ?[0,x3,[0,x1$0,[0,x2$0,0]]]
                           :[0,x1$0,[0,x3,[0,x2$0,0]]]}
               return [0,x1$0,[0,x2$0,[0,x3,0]]]}}}
        var
         n1=n >> 1,
         n2=n - n1 | 0,
         l2$0=chop(n1,l),
         l1$0=rev_sort(n1,l),
         l2$1=rev_sort(n2,l2$0),
         l1=l1$0,
         l2=l2$1,
         accu=0;
        for(;;)
         {if(l1)
           {if(l2)
             {var t2=l2[2],h2=l2[1],t1=l1[2],h1=l1[1],c=caml_call2(cmp,h1,h2);
              if(0 === c)
               {var accu$0=[0,h1,accu],l1=t1,l2=t2,accu=accu$0;continue}
              if(0 < c){var accu$1=[0,h1,accu],l1=t1,accu=accu$1;continue}
              var accu$2=[0,h2,accu],l2=t2,accu=accu$2;
              continue}
            return rev_append(l1,accu)}
          return rev_append(l2,accu)}}
      var len=length(l);
      return 2 <= len?sort(len,l):l}
    function compare_lengths(l1,l2)
     {var l1$0=l1,l2$0=l2;
      for(;;)
       {if(l1$0)
         {if(l2$0){var l2$1=l2$0[2],l1$1=l1$0[2],l1$0=l1$1,l2$0=l2$1;continue}
          return 1}
        return l2$0?-1:0}}
    function compare_length_with(l,n)
     {var l$0=l,n$0=n;
      for(;;)
       {if(l$0)
         {var l$1=l$0[2];
          if(0 < n$0){var n$1=n$0 - 1 | 0,l$0=l$1,n$0=n$1;continue}
          return 1}
        return 0 === n$0?0:0 < n$0?-1:1}}
    function to_seq$1(l)
     {function aux(l,param)
       {if(l)
         {var tail=l[2],x=l[1];
          return [0,x,function(_zu_){return aux(tail,_zu_)}]}
        return 0}
      return function(_zt_){return aux(l,_zt_)}}
    function of_seq(seq)
     {function direct(depth,seq)
       {if(0 === depth)
         {var _zs_=0;
          return rev(fold_left(function(acc,x){return [0,x,acc]},_zs_,seq))}
        var match=caml_call1(seq,0);
        if(match)
         {var next=match[2],x=match[1];
          return [0,x,direct(depth - 1 | 0,next)]}
        return 0}
      return direct(500,seq)}
    var
     include=
      [0,
       length,
       compare_lengths,
       compare_length_with,
       cons,
       hd,
       tl,
       nth,
       nth_opt,
       rev,
       init,
       append,
       rev_append,
       flatten,
       flatten,
       iter$2,
       iteri,
       map$2,
       mapi,
       rev_map,
       filter_map$0,
       fold_left$0,
       fold_right,
       iter2,
       map2,
       rev_map2,
       fold_left2,
       fold_right2,
       for_all,
       exists,
       for_all2,
       exists2,
       mem,
       memq,
       find,
       find_opt,
       find_all,
       find_all,
       partition,
       assoc,
       assoc_opt,
       assq,
       assq_opt,
       mem_assoc,
       mem_assq,
       remove_assoc,
       remove_assq,
       split,
       combine,
       fast_sort,
       fast_sort,
       fast_sort,
       sort_uniq,
       merge,
       to_seq$1,
       of_seq];
    caml_register_global(728,include,"Stdlib__list");
    function make(n,c)
     {var s=caml_create_bytes(n);caml_fill_bytes(s,0,n,c);return s}
    function init$0(n,f)
     {var s=caml_create_bytes(n),_zq_=n - 1 | 0,_zp_=0;
      if(! (_zq_ < 0))
       {var i=_zp_;
        for(;;)
         {caml_bytes_unsafe_set(s,i,caml_call1(f,i));
          var _zr_=i + 1 | 0;
          if(_zq_ !== i){var i=_zr_;continue}
          break}}
      return s}
    var empty$0=caml_create_bytes(0);
    function copy(s)
     {var len=caml_ml_bytes_length(s),r=caml_create_bytes(len);
      caml_blit_bytes(s,0,r,0,len);
      return r}
    function to_string$1(b){return caml_string_of_bytes(copy(b))}
    function of_string(s){return copy(caml_bytes_of_string(s))}
    function sub(s,ofs,len)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       {var r=caml_create_bytes(len);caml_blit_bytes(s,ofs,r,0,len);return r}
      return invalid_arg(cst_String_sub_Bytes_sub)}
    function sub_string(b,ofs,len)
     {return caml_string_of_bytes(sub(b,ofs,len))}
    function symbol$1(a,b)
     {var c=a + b | 0,_zo_=b < 0?1:0,match=c < 0?1:0,switch$0=0;
      if(0 === (a < 0?1:0))
       {if(0 === _zo_ && 0 !== match)switch$0 = 1}
      else
       if(0 !== _zo_ && 0 === match)switch$0 = 1;
      return switch$0?invalid_arg(cst_Bytes_extend):c}
    function extend(s,left,right)
     {var
       len=symbol$1(symbol$1(caml_ml_bytes_length(s),left),right),
       r=caml_create_bytes(len);
      if(0 <= left)
       var srcoff=0,dstoff=left;
      else
       var srcoff=- left | 0,dstoff=0;
      var cpylen=min(caml_ml_bytes_length(s) - srcoff | 0,len - dstoff | 0);
      if(0 < cpylen)caml_blit_bytes(s,srcoff,r,dstoff,cpylen);
      return r}
    function fill(s,ofs,len,c)
     {if
       (0 <= ofs && 0 <= len && ! ((caml_ml_bytes_length(s) - len | 0) < ofs))
       return caml_fill_bytes(s,ofs,len,c);
      return invalid_arg(cst_String_fill_Bytes_fill)}
    function blit(s1,ofs1,s2,ofs2,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        ofs1
        &&
        !
        ((caml_ml_bytes_length(s1) - len | 0) < ofs1)
        &&
        0
        <=
        ofs2
        &&
        !
        ((caml_ml_bytes_length(s2) - len | 0) < ofs2))
       return caml_blit_bytes(s1,ofs1,s2,ofs2,len);
      return invalid_arg(cst_Bytes_blit)}
    function blit$0(s1,ofs1,s2,ofs2,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        ofs1
        &&
        !
        ((caml_ml_string_length(s1) - len | 0) < ofs1)
        &&
        0
        <=
        ofs2
        &&
        !
        ((caml_ml_bytes_length(s2) - len | 0) < ofs2))
       return caml_blit_string(s1,ofs1,s2,ofs2,len);
      return invalid_arg(cst_String_blit_Bytes_blit_str)}
    function iter$3(f,a)
     {var _zm_=caml_ml_bytes_length(a) - 1 | 0,_zl_=0;
      if(! (_zm_ < 0))
       {var i=_zl_;
        for(;;)
         {caml_call1(f,caml_bytes_unsafe_get(a,i));
          var _zn_=i + 1 | 0;
          if(_zm_ !== i){var i=_zn_;continue}
          break}}
      return 0}
    function iteri$0(f,a)
     {var _zj_=caml_ml_bytes_length(a) - 1 | 0,_zi_=0;
      if(! (_zj_ < 0))
       {var i=_zi_;
        for(;;)
         {caml_call2(f,i,caml_bytes_unsafe_get(a,i));
          var _zk_=i + 1 | 0;
          if(_zj_ !== i){var i=_zk_;continue}
          break}}
      return 0}
    function concat(sep,l)
     {if(l)
       {var seplen=caml_ml_bytes_length(sep),acc=0,param=l,pos$1=0;
        for(;;)
         {if(param)
           {var _zd_=param[2],_ze_=param[1];
            if(_zd_)
             {var
               x=(caml_ml_bytes_length(_ze_) + seplen | 0) + acc | 0,
               acc$0=acc <= x?x:invalid_arg(cst_Bytes_concat),
               acc=acc$0,
               param=_zd_;
              continue}
            var _zh_=caml_ml_bytes_length(_ze_) + acc | 0}
          else
           var _zh_=acc;
          var dst=caml_create_bytes(_zh_),pos=pos$1,param$0=l;
          for(;;)
           {if(param$0)
             {var _zf_=param$0[2],_zg_=param$0[1];
              if(_zf_)
               {caml_blit_bytes(_zg_,0,dst,pos,caml_ml_bytes_length(_zg_));
                caml_blit_bytes
                 (sep,0,dst,pos + caml_ml_bytes_length(_zg_) | 0,seplen);
                var
                 pos$0=(pos + caml_ml_bytes_length(_zg_) | 0) + seplen | 0,
                 pos=pos$0,
                 param$0=_zf_;
                continue}
              caml_blit_bytes(_zg_,0,dst,pos,caml_ml_bytes_length(_zg_));
              return dst}
            return dst}}}
      return empty$0}
    function cat(s1,s2)
     {var
       l1=caml_ml_bytes_length(s1),
       l2=caml_ml_bytes_length(s2),
       r=caml_create_bytes(l1 + l2 | 0);
      caml_blit_bytes(s1,0,r,0,l1);
      caml_blit_bytes(s2,0,r,l1,l2);
      return r}
    function is_space(param)
     {var _zc_=param - 9 | 0,switch$0=0;
      if(4 < _zc_ >>> 0)
       {if(23 === _zc_)switch$0 = 1}
      else
       if(2 !== _zc_)switch$0 = 1;
      return switch$0?1:0}
    function trim(s)
     {var len=caml_ml_bytes_length(s),i=[0,0];
      for(;;)
       {if(i[1] < len && is_space(caml_bytes_unsafe_get(s,i[1])))
         {i[1]++;continue}
        var j=[0,len - 1 | 0];
        for(;;)
         {if(i[1] <= j[1] && is_space(caml_bytes_unsafe_get(s,j[1])))
           {j[1] += -1;continue}
          return i[1] <= j[1]?sub(s,i[1],(j[1] - i[1] | 0) + 1 | 0):empty$0}}}
    function escaped$0(s)
     {var n=[0,0],_y7_=caml_ml_bytes_length(s) - 1 | 0,_y6_=0;
      if(! (_y7_ < 0))
       {var i$0=_y6_;
        for(;;)
         {var match=caml_bytes_unsafe_get(s,i$0),switch$0=0;
          if(32 <= match)
           {var _y$_=match - 34 | 0,switch$1=0;
            if(58 < _y$_ >>> 0)
             {if(93 <= _y$_)switch$1 = 1}
            else
             if(56 < (_y$_ - 1 | 0) >>> 0){switch$0 = 1;switch$1 = 1}
            if(! switch$1){var _za_=1;switch$0 = 2}}
          else
           if(11 <= match)
            {if(13 === match)switch$0 = 1}
           else
            if(8 <= match)switch$0 = 1;
          switch(switch$0){case 0:var _za_=4;break;case 1:var _za_=2;break}
          n[1] = n[1] + _za_ | 0;
          var _zb_=i$0 + 1 | 0;
          if(_y7_ !== i$0){var i$0=_zb_;continue}
          break}}
      if(n[1] === caml_ml_bytes_length(s))return copy(s);
      var s$0=caml_create_bytes(n[1]);
      n[1] = 0;
      var _y9_=caml_ml_bytes_length(s) - 1 | 0,_y8_=0;
      if(! (_y9_ < 0))
       {var i=_y8_;
        for(;;)
         {var c=caml_bytes_unsafe_get(s,i),switch$2=0;
          if(35 <= c)
           if(92 === c)
            switch$2 = 2;
           else
            if(127 <= c)switch$2 = 1;else switch$2 = 3;
          else
           if(32 <= c)
            if(34 <= c)switch$2 = 2;else switch$2 = 3;
           else
            if(14 <= c)
             switch$2 = 1;
            else
             switch(c)
              {case 8:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],98);
                break;
               case 9:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],116);
                break;
               case 10:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],110);
                break;
               case 13:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],114);
                break;
               default:switch$2 = 1}
          switch(switch$2)
           {case 1:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + (c / 100 | 0) | 0);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + ((c / 10 | 0) % 10 | 0) | 0);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],48 + (c % 10 | 0) | 0);
             break;
            case 2:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],c);
             break;
            case 3:caml_bytes_unsafe_set(s$0,n[1],c);break
            }
          n[1]++;
          var _y__=i + 1 | 0;
          if(_y9_ !== i){var i=_y__;continue}
          break}}
      return s$0}
    function map$3(f,s)
     {var l=caml_ml_bytes_length(s);
      if(0 === l)return s;
      var r=caml_create_bytes(l),_y4_=l - 1 | 0,_y3_=0;
      if(! (_y4_ < 0))
       {var i=_y3_;
        for(;;)
         {caml_bytes_unsafe_set(r,i,caml_call1(f,caml_bytes_unsafe_get(s,i)));
          var _y5_=i + 1 | 0;
          if(_y4_ !== i){var i=_y5_;continue}
          break}}
      return r}
    function mapi$0(f,s)
     {var l=caml_ml_bytes_length(s);
      if(0 === l)return s;
      var r=caml_create_bytes(l),_y1_=l - 1 | 0,_y0_=0;
      if(! (_y1_ < 0))
       {var i=_y0_;
        for(;;)
         {caml_bytes_unsafe_set
           (r,i,caml_call2(f,i,caml_bytes_unsafe_get(s,i)));
          var _y2_=i + 1 | 0;
          if(_y1_ !== i){var i=_y2_;continue}
          break}}
      return r}
    function uppercase_ascii$0(s){return map$3(uppercase_ascii,s)}
    function lowercase_ascii$0(s){return map$3(lowercase_ascii,s)}
    function apply1(f,s)
     {if(0 === caml_ml_bytes_length(s))return s;
      var r=copy(s);
      caml_bytes_unsafe_set(r,0,caml_call1(f,caml_bytes_unsafe_get(s,0)));
      return r}
    function capitalize_ascii(s){return apply1(uppercase_ascii,s)}
    function uncapitalize_ascii(s){return apply1(lowercase_ascii,s)}
    function index_rec(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)throw Not_found;
        if(caml_bytes_unsafe_get(s,i$0) === c)return i$0;
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index(s,c){return index_rec(s,caml_ml_bytes_length(s),0,c)}
    function index_rec_opt(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)return 0;
        if(caml_bytes_unsafe_get(s,i$0) === c)return [0,i$0];
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index_opt(s,c)
     {return index_rec_opt(s,caml_ml_bytes_length(s),0,c)}
    function index_from(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i && ! (l < i))return index_rec(s,l,i,c);
      return invalid_arg(cst_String_index_from_Bytes_in)}
    function index_from_opt(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i && ! (l < i))return index_rec_opt(s,l,i,c);
      return invalid_arg(cst_String_index_from_opt_Byte)}
    function rindex_rec(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_bytes_unsafe_get(s,i$0) === c)return i$0;
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        throw Not_found}}
    function rindex(s,c)
     {return rindex_rec(s,caml_ml_bytes_length(s) - 1 | 0,c)}
    function rindex_from(s,i,c)
     {if(-1 <= i && ! (caml_ml_bytes_length(s) <= i))return rindex_rec(s,i,c);
      return invalid_arg(cst_String_rindex_from_Bytes_r)}
    function rindex_rec_opt(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_bytes_unsafe_get(s,i$0) === c)return [0,i$0];
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        return 0}}
    function rindex_opt(s,c)
     {return rindex_rec_opt(s,caml_ml_bytes_length(s) - 1 | 0,c)}
    function rindex_from_opt(s,i,c)
     {if(-1 <= i && ! (caml_ml_bytes_length(s) <= i))
       return rindex_rec_opt(s,i,c);
      return invalid_arg(cst_String_rindex_from_opt_Byt)}
    function contains_from(s,i,c)
     {var l=caml_ml_bytes_length(s);
      if(0 <= i && ! (l < i))
       try
        {index_rec(s,l,i,c);var _yY_=1;return _yY_}
       catch(_yZ_)
        {_yZ_ = caml_wrap_exception(_yZ_);
         if(_yZ_ === Not_found)return 0;
         throw _yZ_}
      return invalid_arg(cst_String_contains_from_Bytes)}
    function contains(s,c){return contains_from(s,0,c)}
    function rcontains_from(s,i,c)
     {if(0 <= i && ! (caml_ml_bytes_length(s) <= i))
       try
        {rindex_rec(s,i,c);var _yW_=1;return _yW_}
       catch(_yX_)
        {_yX_ = caml_wrap_exception(_yX_);
         if(_yX_ === Not_found)return 0;
         throw _yX_}
      return invalid_arg(cst_String_rcontains_from_Byte)}
    var compare$4=runtime.caml_bytes_compare;
    function uppercase$0(s){return map$3(uppercase,s)}
    function lowercase$0(s){return map$3(lowercase,s)}
    function capitalize(s){return apply1(uppercase,s)}
    function uncapitalize(s){return apply1(lowercase,s)}
    function to_seq$2(s)
     {function aux(i,param)
       {if(i === caml_ml_bytes_length(s))return 0;
        var x=caml_bytes_get(s,i),_yU_=i + 1 | 0;
        return [0,x,function(_yV_){return aux(_yU_,_yV_)}]}
      var _yS_=0;
      return function(_yT_){return aux(_yS_,_yT_)}}
    function to_seqi(s)
     {function aux(i,param)
       {if(i === caml_ml_bytes_length(s))return 0;
        var x=caml_bytes_get(s,i),_yQ_=i + 1 | 0;
        return [0,[0,i,x],function(_yR_){return aux(_yQ_,_yR_)}]}
      var _yO_=0;
      return function(_yP_){return aux(_yO_,_yP_)}}
    function of_seq$0(i)
     {var n=[0,0],buf=[0,make(256,0)];
      iter
       (function(c)
         {if(n[1] === caml_ml_bytes_length(buf[1]))
           {var
             new_len=
              min(2 * caml_ml_bytes_length(buf[1]) | 0,max_string_length);
            if(caml_ml_bytes_length(buf[1]) === new_len)
             failwith(cst_Bytes_of_seq_cannot_grow_b);
            var new_buf=make(new_len,0);
            blit(buf[1],0,new_buf,0,n[1]);
            buf[1] = new_buf}
          caml_bytes_set(buf[1],n[1],c);
          n[1]++;
          return 0},
        i);
      return sub(buf[1],0,n[1])}
    function get_int8(b,i){return caml_bytes_get(b,i) << 24 >> 24}
    function get_uint16_le(b,i){return caml_bytes_get16(b,i)}
    function get_uint16_be(b,i){return caml_bswap16(caml_bytes_get16(b,i))}
    function get_int16_ne(b,i){return caml_bytes_get16(b,i) << 16 >> 16}
    function get_int16_le(b,i){return caml_bytes_get16(b,i) << 16 >> 16}
    function get_int16_be(b,i){return get_uint16_be(b,i) << 16 >> 16}
    function get_int32_le(b,i){return caml_bytes_get32(b,i)}
    function get_int32_be(b,i){return caml_int32_bswap(caml_bytes_get32(b,i))}
    function get_int64_le(b,i){return caml_bytes_get64(b,i)}
    function get_int64_be(b,i){return caml_int64_bswap(caml_bytes_get64(b,i))}
    function set_int16_le(b,i,x){return caml_bytes_set16(b,i,x)}
    function set_int16_be(b,i,x){return caml_bytes_set16(b,i,caml_bswap16(x))}
    function set_int32_le(b,i,x){return caml_bytes_set32(b,i,x)}
    function set_int32_be(b,i,x)
     {return caml_bytes_set32(b,i,caml_int32_bswap(x))}
    function set_int64_le(b,i,x){return caml_bytes_set64(b,i,x)}
    function set_int64_be(b,i,x)
     {return caml_bytes_set64(b,i,caml_int64_bswap(x))}
    var
     set_uint8=caml_bytes_set,
     set_uint16_ne=caml_bytes_set16,
     set_int64_ne=caml_bytes_set64,
     set_int32_ne=caml_bytes_set32,
     set_int16_ne=caml_bytes_set16,
     set_int8=caml_bytes_set,
     get_int64_ne=caml_bytes_get64,
     get_int32_ne=caml_bytes_get32,
     get_uint16_ne=caml_bytes_get16,
     get_uint8=caml_bytes_get,
     unsafe_of_string=caml_bytes_of_string,
     unsafe_to_string=caml_string_of_bytes,
     equal$4=runtime.caml_bytes_equal,
     include$0=
      [0,
       make,
       init$0,
       empty$0,
       copy,
       of_string,
       to_string$1,
       sub,
       sub_string,
       extend,
       fill,
       blit,
       blit$0,
       concat,
       cat,
       iter$3,
       iteri$0,
       map$3,
       mapi$0,
       trim,
       escaped$0,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase$0,
       lowercase$0,
       capitalize,
       uncapitalize,
       uppercase_ascii$0,
       lowercase_ascii$0,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$4,
       equal$4,
       unsafe_to_string,
       unsafe_of_string,
       to_seq$2,
       to_seqi,
       of_seq$0,
       get_uint8,
       get_int8,
       get_uint16_ne,
       get_uint16_be,
       get_uint16_le,
       get_int16_ne,
       get_int16_be,
       get_int16_le,
       get_int32_ne,
       get_int32_be,
       get_int32_le,
       get_int64_ne,
       get_int64_be,
       get_int64_le,
       set_uint8,
       set_int8,
       set_uint16_ne,
       set_int16_be,
       set_int16_le,
       set_int16_ne,
       set_int16_be,
       set_int16_le,
       set_int32_ne,
       set_int32_be,
       set_int32_le,
       set_int64_ne,
       set_int64_be,
       set_int64_le];
    caml_register_global(729,include$0,"Stdlib__bytes");
    function make$0(n,c){return caml_string_of_bytes(make(n,c))}
    function init$1(n,f){return caml_string_of_bytes(init$0(n,f))}
    function copy$0(s)
     {return caml_string_of_bytes(copy(caml_bytes_of_string(s)))}
    function sub$0(s,ofs,len)
     {return caml_string_of_bytes(sub(caml_bytes_of_string(s),ofs,len))}
    function concat$0(sep,l)
     {if(l)
       {var seplen=caml_ml_string_length(sep),acc=0,param=l,pos$1=0;
        for(;;)
         {if(param)
           {var _yJ_=param[2],_yK_=param[1];
            if(_yJ_)
             {var
               x=(caml_ml_string_length(_yK_) + seplen | 0) + acc | 0,
               acc$0=acc <= x?x:invalid_arg(cst_String_concat),
               acc=acc$0,
               param=_yJ_;
              continue}
            var _yN_=caml_ml_string_length(_yK_) + acc | 0}
          else
           var _yN_=acc;
          var dst=caml_create_bytes(_yN_),pos=pos$1,param$0=l;
          for(;;)
           {if(param$0)
             {var _yL_=param$0[2],_yM_=param$0[1];
              if(_yL_)
               {caml_blit_string(_yM_,0,dst,pos,caml_ml_string_length(_yM_));
                caml_blit_string
                 (sep,0,dst,pos + caml_ml_string_length(_yM_) | 0,seplen);
                var
                 pos$0=(pos + caml_ml_string_length(_yM_) | 0) + seplen | 0,
                 pos=pos$0,
                 param$0=_yL_;
                continue}
              caml_blit_string(_yM_,0,dst,pos,caml_ml_string_length(_yM_))}
            return caml_string_of_bytes(dst)}}}
      return cst$3}
    function iter$4(f,s)
     {var _yH_=caml_ml_string_length(s) - 1 | 0,_yG_=0;
      if(! (_yH_ < 0))
       {var i=_yG_;
        for(;;)
         {caml_call1(f,caml_string_unsafe_get(s,i));
          var _yI_=i + 1 | 0;
          if(_yH_ !== i){var i=_yI_;continue}
          break}}
      return 0}
    function iteri$1(f,s)
     {var _yE_=caml_ml_string_length(s) - 1 | 0,_yD_=0;
      if(! (_yE_ < 0))
       {var i=_yD_;
        for(;;)
         {caml_call2(f,i,caml_string_unsafe_get(s,i));
          var _yF_=i + 1 | 0;
          if(_yE_ !== i){var i=_yF_;continue}
          break}}
      return 0}
    function map$4(f,s)
     {return caml_string_of_bytes(map$3(f,caml_bytes_of_string(s)))}
    function mapi$1(f,s)
     {return caml_string_of_bytes(mapi$0(f,caml_bytes_of_string(s)))}
    function is_space$0(param)
     {var _yC_=param - 9 | 0,switch$0=0;
      if(4 < _yC_ >>> 0)
       {if(23 === _yC_)switch$0 = 1}
      else
       if(2 !== _yC_)switch$0 = 1;
      return switch$0?1:0}
    function trim$0(s)
     {if(caml_string_equal(s,cst$4))return s;
      if
       (!
        is_space$0(caml_string_unsafe_get(s,0))
        &&
        !
        is_space$0(caml_string_unsafe_get(s,caml_ml_string_length(s) - 1 | 0)))
       return s;
      return caml_string_of_bytes(trim(caml_bytes_of_string(s)))}
    function escaped$1(s)
     {var n=caml_ml_string_length(s),i=0;
      for(;;)
       {if(n <= i)return s;
        var match=caml_string_unsafe_get(s,i),_yB_=match - 32 | 0,switch$0=0;
        if(59 < _yB_ >>> 0)
         {if(33 < (_yB_ - 61 | 0) >>> 0)switch$0 = 1}
        else
         if(2 === _yB_)switch$0 = 1;
        if(switch$0)
         return caml_string_of_bytes(escaped$0(caml_bytes_of_string(s)));
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function index_rec$0(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)throw Not_found;
        if(caml_string_unsafe_get(s,i$0) === c)return i$0;
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index$0(s,c){return index_rec$0(s,caml_ml_string_length(s),0,c)}
    function index_rec_opt$0(s,lim,i,c)
     {var i$0=i;
      for(;;)
       {if(lim <= i$0)return 0;
        if(caml_string_unsafe_get(s,i$0) === c)return [0,i$0];
        var i$1=i$0 + 1 | 0,i$0=i$1;
        continue}}
    function index_opt$0(s,c)
     {return index_rec_opt$0(s,caml_ml_string_length(s),0,c)}
    function index_from$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i && ! (l < i))return index_rec$0(s,l,i,c);
      return invalid_arg(cst_String_index_from_Bytes_in$0)}
    function index_from_opt$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i && ! (l < i))return index_rec_opt$0(s,l,i,c);
      return invalid_arg(cst_String_index_from_opt_Byte$0)}
    function rindex_rec$0(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_string_unsafe_get(s,i$0) === c)return i$0;
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        throw Not_found}}
    function rindex$0(s,c)
     {return rindex_rec$0(s,caml_ml_string_length(s) - 1 | 0,c)}
    function rindex_from$0(s,i,c)
     {if(-1 <= i && ! (caml_ml_string_length(s) <= i))
       return rindex_rec$0(s,i,c);
      return invalid_arg(cst_String_rindex_from_Bytes_r$0)}
    function rindex_rec_opt$0(s,i,c)
     {var i$0=i;
      for(;;)
       {if(0 <= i$0)
         {if(caml_string_unsafe_get(s,i$0) === c)return [0,i$0];
          var i$1=i$0 - 1 | 0,i$0=i$1;
          continue}
        return 0}}
    function rindex_opt$0(s,c)
     {return rindex_rec_opt$0(s,caml_ml_string_length(s) - 1 | 0,c)}
    function rindex_from_opt$0(s,i,c)
     {if(-1 <= i && ! (caml_ml_string_length(s) <= i))
       return rindex_rec_opt$0(s,i,c);
      return invalid_arg(cst_String_rindex_from_opt_Byt$0)}
    function contains_from$0(s,i,c)
     {var l=caml_ml_string_length(s);
      if(0 <= i && ! (l < i))
       try
        {index_rec$0(s,l,i,c);var _yz_=1;return _yz_}
       catch(_yA_)
        {_yA_ = caml_wrap_exception(_yA_);
         if(_yA_ === Not_found)return 0;
         throw _yA_}
      return invalid_arg(cst_String_contains_from_Bytes$0)}
    function contains$0(s,c){return contains_from$0(s,0,c)}
    function rcontains_from$0(s,i,c)
     {if(0 <= i && ! (caml_ml_string_length(s) <= i))
       try
        {rindex_rec$0(s,i,c);var _yx_=1;return _yx_}
       catch(_yy_)
        {_yy_ = caml_wrap_exception(_yy_);
         if(_yy_ === Not_found)return 0;
         throw _yy_}
      return invalid_arg(cst_String_rcontains_from_Byte$0)}
    function uppercase_ascii$1(s)
     {return caml_string_of_bytes(uppercase_ascii$0(caml_bytes_of_string(s)))}
    function lowercase_ascii$1(s)
     {return caml_string_of_bytes(lowercase_ascii$0(caml_bytes_of_string(s)))}
    function capitalize_ascii$0(s)
     {return caml_string_of_bytes(capitalize_ascii(caml_bytes_of_string(s)))}
    function uncapitalize_ascii$0(s)
     {return caml_string_of_bytes(uncapitalize_ascii(caml_bytes_of_string(s)))}
    var compare$5=caml_string_compare;
    function split_on_char(sep,s)
     {var
       r=[0,0],
       j=[0,caml_ml_string_length(s)],
       _yt_=caml_ml_string_length(s) - 1 | 0;
      if(! (_yt_ < 0))
       {var i=_yt_;
        for(;;)
         {if(caml_string_unsafe_get(s,i) === sep)
           {var _yv_=r[1];
            r[1] = [0,sub$0(s,i + 1 | 0,(j[1] - i | 0) - 1 | 0),_yv_];
            j[1] = i}
          var _yw_=i - 1 | 0;
          if(0 !== i){var i=_yw_;continue}
          break}}
      var _yu_=r[1];
      return [0,sub$0(s,0,j[1]),_yu_]}
    function uppercase$1(s)
     {return caml_string_of_bytes(uppercase$0(caml_bytes_of_string(s)))}
    function lowercase$1(s)
     {return caml_string_of_bytes(lowercase$0(caml_bytes_of_string(s)))}
    function capitalize$0(s)
     {return caml_string_of_bytes(capitalize(caml_bytes_of_string(s)))}
    function uncapitalize$0(s)
     {return caml_string_of_bytes(uncapitalize(caml_bytes_of_string(s)))}
    function to_seq$3(s){return to_seq$2(caml_bytes_of_string(s))}
    function to_seqi$0(s){return to_seqi(caml_bytes_of_string(s))}
    function of_seq$1(g){return caml_string_of_bytes(of_seq$0(g))}
    var
     equal$5=caml_string_equal,
     include$1=
      [0,
       make$0,
       init$1,
       copy$0,
       sub$0,
       fill,
       blit$0,
       concat$0,
       iter$4,
       iteri$1,
       map$4,
       mapi$1,
       trim$0,
       escaped$1,
       index$0,
       index_opt$0,
       rindex$0,
       rindex_opt$0,
       index_from$0,
       index_from_opt$0,
       rindex_from$0,
       rindex_from_opt$0,
       contains$0,
       contains_from$0,
       rcontains_from$0,
       uppercase$1,
       lowercase$1,
       capitalize$0,
       uncapitalize$0,
       uppercase_ascii$1,
       lowercase_ascii$1,
       capitalize_ascii$0,
       uncapitalize_ascii$0,
       compare$5,
       equal$5,
       split_on_char,
       to_seq$3,
       to_seqi$0,
       of_seq$1];
    caml_register_global(730,include$1,"Stdlib__string");
    function equal$6(param,_ys_){return 1}
    function compare$6(param,_yr_){return 0}
    function to_string$2(param){return cst$5}
    var Stdlib_unit=[0,equal$6,compare$6,to_string$2];
    caml_register_global(731,Stdlib_unit,"Stdlib__unit");
    function to_buffer(buff,ofs,len,v,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buff) - len | 0) < ofs))
       return runtime.caml_output_value_to_buffer(buff,ofs,len,v,flags);
      return invalid_arg(cst_Marshal_to_buffer_substrin)}
    var header_size=20;
    function data_size(buff,ofs)
     {if(0 <= ofs && ! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs))
       return caml_marshal_data_size(buff,ofs);
      return invalid_arg(cst_Marshal_data_size)}
    function total_size(buff,ofs){return 20 + data_size(buff,ofs) | 0}
    function from_bytes(buff,ofs)
     {if(0 <= ofs && ! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs))
       {var len=caml_marshal_data_size(buff,ofs);
        return (caml_ml_bytes_length(buff) - (20 + len | 0) | 0) < ofs
                ?invalid_arg(cst_Marshal_from_bytes$0)
                :runtime.caml_input_value_from_bytes(buff,ofs)}
      return invalid_arg(cst_Marshal_from_bytes)}
    function from_string(buff,ofs)
     {return from_bytes(caml_bytes_of_string(buff),ofs)}
    var
     Stdlib_marshal=
      [0,
       caml_output_value,
       to_buffer,
       caml_input_value,
       from_bytes,
       from_string,
       header_size,
       data_size,
       total_size];
    caml_register_global(732,Stdlib_marshal,"Stdlib__marshal");
    function is_block(a){return 1 - (typeof a === "number"?1:0)}
    var double_field=caml_array_get,set_double_field=caml_array_set;
    function marshal(obj){return runtime.caml_output_value_to_bytes(obj,0)}
    function unmarshal(str,pos)
     {var _yq_=pos + total_size(str,pos) | 0;
      return [0,from_bytes(str,pos),_yq_]}
    var
     first_non_constant_constructor=0,
     last_non_constant_constructor_=245,
     lazy_tag=246,
     closure_tag=247,
     object_tag=248,
     infix_tag=249,
     forward_tag=250,
     no_scan_tag=251,
     abstract_tag=251,
     string_tag=252,
     double_tag=253,
     double_array_tag=254,
     custom_tag=255,
     int_tag=1000,
     out_of_heap_tag=1001,
     unaligned_tag=1002;
    function of_val(x)
     {var switch$0=0;
      if(is_block(x) && caml_obj_tag(x) !== 248 && 1 <= x.length - 1)
       {var slot=x[1];switch$0 = 1}
      if(! switch$0)var slot=x;
      var switch$1=0;
      if(is_block(slot) && caml_obj_tag(slot) === 248)
       {var name=slot[1];switch$1 = 1}
      if(! switch$1)var name=invalid_arg(cst_Obj_extension_constructor$0);
      return caml_obj_tag(name) === 252
              ?slot
              :invalid_arg(cst_Obj_extension_constructor)}
    function name(slot){return slot[1]}
    function id(slot){return slot[2]}
    var
     Extension_constructor=[0,of_val,name,id],
     extension_constructor=Extension_constructor[1],
     extension_name=Extension_constructor[2],
     extension_id=Extension_constructor[3],
     max_ephe_length=max_array_length - 2 | 0;
    function create(l)
     {var _yo_=0 <= l?1:0,_yp_=_yo_?l <= max_ephe_length?1:0:_yo_;
      if(1 - _yp_)invalid_arg(cst_Obj_Ephemeron_create);
      return runtime.caml_ephe_create(l)}
    function length$0(x){return x.length - 1 - 2 | 0}
    function raise_if_invalid_offset(e,o,msg)
     {var _yl_=0 <= o?1:0,_ym_=_yl_?o < length$0(e)?1:0:_yl_,_yn_=1 - _ym_;
      return _yn_?invalid_arg(msg):_yn_}
    function get_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_get_key);
      return runtime.caml_ephe_get_key(e,o)}
    function get_key_copy(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_get_key_copy);
      return runtime.caml_ephe_get_key_copy(e,o)}
    function set_key(e,o,x)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_set_key);
      return caml_ephe_set_key(e,o,x)}
    function unset_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_unset_key);
      return caml_ephe_unset_key(e,o)}
    function check_key(e,o)
     {raise_if_invalid_offset(e,o,cst_Obj_Ephemeron_check_key);
      return runtime.caml_ephe_check_key(e,o)}
    function blit_key(e1,o1,e2,o2,l)
     {if
       (0
        <=
        l
        &&
        0
        <=
        o1
        &&
        !
        ((length$0(e1) - l | 0) < o1)
        &&
        0
        <=
        o2
        &&
        !
        ((length$0(e2) - l | 0) < o2))
       {var
         _yj_=0 !== l?1:0,
         _yk_=_yj_?runtime.caml_ephe_blit_key(e1,o1,e2,o2,l):_yj_;
        return _yk_}
      return invalid_arg(cst_Obj_Ephemeron_blit_key)}
    var
     _s_=runtime.caml_ephe_blit_data,
     _t_=runtime.caml_ephe_check_data,
     _u_=
      [0,
       create,
       length$0,
       get_key,
       get_key_copy,
       set_key,
       unset_key,
       check_key,
       blit_key,
       runtime.caml_ephe_get_data,
       runtime.caml_ephe_get_data_copy,
       runtime.caml_ephe_set_data,
       function(_yi_){return runtime.caml_ephe_unset_data(_yi_)},
       _t_,
       _s_,
       max_ephe_length],
     Stdlib_obj=
      [0,
       is_block,
       double_field,
       set_double_field,
       first_non_constant_constructor,
       last_non_constant_constructor_,
       lazy_tag,
       closure_tag,
       object_tag,
       infix_tag,
       forward_tag,
       no_scan_tag,
       abstract_tag,
       string_tag,
       double_tag,
       double_array_tag,
       custom_tag,
       custom_tag,
       int_tag,
       out_of_heap_tag,
       unaligned_tag,
       Extension_constructor,
       extension_constructor,
       extension_name,
       extension_id,
       marshal,
       unmarshal,
       _u_];
    caml_register_global(733,Stdlib_obj,"Stdlib__obj");
    var make_float=runtime.caml_make_float_vect,Floatarray=[0];
    function init$2(l,f)
     {if(0 === l)return [0];
      if(0 <= l)
       {var res=caml_make_vect(l,caml_call1(f,0)),_yg_=l - 1 | 0,_yf_=1;
        if(! (_yg_ < 1))
         {var i=_yf_;
          for(;;)
           {res[1 + i] = caml_call1(f,i);
            var _yh_=i + 1 | 0;
            if(_yg_ !== i){var i=_yh_;continue}
            break}}
        return res}
      return invalid_arg(cst_Array_init)}
    function create_matrix(sx,sy,init)
     {var res=caml_make_vect(sx,[0]),_yd_=sx - 1 | 0,_yc_=0;
      if(! (_yd_ < 0))
       {var x=_yc_;
        for(;;)
         {res[1 + x] = caml_make_vect(sy,init);
          var _ye_=x + 1 | 0;
          if(_yd_ !== x){var x=_ye_;continue}
          break}}
      return res}
    function copy$1(a)
     {var l=a.length - 1;return 0 === l?[0]:caml_array_sub(a,0,l)}
    function append$0(a1,a2)
     {var l1=a1.length - 1;
      return 0 === l1
              ?copy$1(a2)
              :0 === a2.length - 1
                ?caml_array_sub(a1,0,l1)
                :runtime.caml_array_append(a1,a2)}
    function sub$1(a,ofs,len)
     {if(0 <= ofs && 0 <= len && ! ((a.length - 1 - len | 0) < ofs))
       return caml_array_sub(a,ofs,len);
      return invalid_arg(cst_Array_sub)}
    function fill$0(a,ofs,len,v)
     {if(0 <= ofs && 0 <= len && ! ((a.length - 1 - len | 0) < ofs))
       {var _ya_=(ofs + len | 0) - 1 | 0;
        if(! (_ya_ < ofs))
         {var i=ofs;
          for(;;)
           {a[1 + i] = v;
            var _yb_=i + 1 | 0;
            if(_ya_ !== i){var i=_yb_;continue}
            break}}
        return 0}
      return invalid_arg(cst_Array_fill)}
    function blit$1(a1,ofs1,a2,ofs2,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        ofs1
        &&
        !
        ((a1.length - 1 - len | 0) < ofs1)
        &&
        0
        <=
        ofs2
        &&
        !
        ((a2.length - 1 - len | 0) < ofs2))
       return runtime.caml_array_blit(a1,ofs1,a2,ofs2,len);
      return invalid_arg(cst_Array_blit)}
    function iter$5(f,a)
     {var _x__=a.length - 1 - 1 | 0,_x9_=0;
      if(! (_x__ < 0))
       {var i=_x9_;
        for(;;)
         {caml_call1(f,a[1 + i]);
          var _x$_=i + 1 | 0;
          if(_x__ !== i){var i=_x$_;continue}
          break}}
      return 0}
    function iter2$0(f,a,b)
     {if(a.length - 1 !== b.length - 1)
       return invalid_arg(cst_Array_iter2_arrays_must_ha);
      var _x7_=a.length - 1 - 1 | 0,_x6_=0;
      if(! (_x7_ < 0))
       {var i=_x6_;
        for(;;)
         {caml_call2(f,a[1 + i],b[1 + i]);
          var _x8_=i + 1 | 0;
          if(_x7_ !== i){var i=_x8_;continue}
          break}}
      return 0}
    function map$5(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call1(f,a[1])),_x4_=l - 1 | 0,_x3_=1;
      if(! (_x4_ < 1))
       {var i=_x3_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _x5_=i + 1 | 0;
          if(_x4_ !== i){var i=_x5_;continue}
          break}}
      return r}
    function map2$0(f,a,b)
     {var la=a.length - 1,lb=b.length - 1;
      if(la !== lb)return invalid_arg(cst_Array_map2_arrays_must_hav);
      if(0 === la)return [0];
      var r=caml_make_vect(la,caml_call2(f,a[1],b[1])),_x1_=la - 1 | 0,_x0_=1;
      if(! (_x1_ < 1))
       {var i=_x0_;
        for(;;)
         {r[1 + i] = caml_call2(f,a[1 + i],b[1 + i]);
          var _x2_=i + 1 | 0;
          if(_x1_ !== i){var i=_x2_;continue}
          break}}
      return r}
    function iteri$2(f,a)
     {var _xY_=a.length - 1 - 1 | 0,_xX_=0;
      if(! (_xY_ < 0))
       {var i=_xX_;
        for(;;)
         {caml_call2(f,i,a[1 + i]);
          var _xZ_=i + 1 | 0;
          if(_xY_ !== i){var i=_xZ_;continue}
          break}}
      return 0}
    function mapi$2(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call2(f,0,a[1])),_xV_=l - 1 | 0,_xU_=1;
      if(! (_xV_ < 1))
       {var i=_xU_;
        for(;;)
         {r[1 + i] = caml_call2(f,i,a[1 + i]);
          var _xW_=i + 1 | 0;
          if(_xV_ !== i){var i=_xW_;continue}
          break}}
      return r}
    function to_list$1(a)
     {var i$1=a.length - 1 - 1 | 0,i=i$1,res=0;
      for(;;)
       {if(0 <= i)
         {var res$0=[0,a[1 + i],res],i$0=i - 1 | 0,i=i$0,res=res$0;continue}
        return res}}
    function list_length(accu,param)
     {var accu$0=accu,param$0=param;
      for(;;)
       {if(param$0)
         {var
           param$1=param$0[2],
           accu$1=accu$0 + 1 | 0,
           accu$0=accu$1,
           param$0=param$1;
          continue}
        return accu$0}}
    function of_list(l)
     {if(l)
       {var
         tl=l[2],
         hd=l[1],
         a=caml_make_vect(list_length(0,l),hd),
         i=1,
         param=tl;
        for(;;)
         {if(param)
           {var tl$0=param[2],hd$0=param[1];
            a[1 + i] = hd$0;
            var i$0=i + 1 | 0,i=i$0,param=tl$0;
            continue}
          return a}}
      return [0]}
    function fold_left$1(f,x,a)
     {var r=[0,x],_xS_=a.length - 1 - 1 | 0,_xR_=0;
      if(! (_xS_ < 0))
       {var i=_xR_;
        for(;;)
         {r[1] = caml_call2(f,r[1],a[1 + i]);
          var _xT_=i + 1 | 0;
          if(_xS_ !== i){var i=_xT_;continue}
          break}}
      return r[1]}
    function fold_right$0(f,a,x)
     {var r=[0,x],_xP_=a.length - 1 - 1 | 0;
      if(! (_xP_ < 0))
       {var i=_xP_;
        for(;;)
         {r[1] = caml_call2(f,a[1 + i],r[1]);
          var _xQ_=i - 1 | 0;
          if(0 !== i){var i=_xQ_;continue}
          break}}
      return r[1]}
    function exists$0(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(caml_call1(p,a[1 + i]))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function for_all$0(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 1;
        if(caml_call1(p,a[1 + i])){var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function mem$0(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(0 === caml_compare(a[1 + i],x))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function memq$0(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(x === a[1 + i])return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    var Bottom=[248,cst_Stdlib_Array_Bottom,caml_fresh_oo_id(0)];
    function sort(cmp,a)
     {function maxson(l,i)
       {var i31=((i + i | 0) + i | 0) + 1 | 0,x=[0,i31];
        if((i31 + 2 | 0) < l)
         {var _xI_=i31 + 1 | 0,_xJ_=caml_check_bound(a,_xI_)[1 + _xI_];
          if(caml_call2(cmp,caml_check_bound(a,i31)[1 + i31],_xJ_) < 0)
           x[1] = i31 + 1 | 0;
          var
           _xK_=i31 + 2 | 0,
           _xL_=caml_check_bound(a,_xK_)[1 + _xK_],
           _xM_=x[1];
          if(caml_call2(cmp,caml_check_bound(a,_xM_)[1 + _xM_],_xL_) < 0)
           x[1] = i31 + 2 | 0;
          return x[1]}
        if((i31 + 1 | 0) < l)
         {var _xN_=i31 + 1 | 0,_xO_=caml_check_bound(a,_xN_)[1 + _xN_];
          if(! (0 <= caml_call2(cmp,caml_check_bound(a,i31)[1 + i31],_xO_)))
           return i31 + 1 | 0}
        if(i31 < l)return i31;
        throw [0,Bottom,i]}
      function trickledown(l,i,e)
       {var i$0=i;
        for(;;)
         {var j=maxson(l,i$0);
          if(0 < caml_call2(cmp,caml_check_bound(a,j)[1 + j],e))
           {var _xH_=caml_check_bound(a,j)[1 + j];
            caml_check_bound(a,i$0)[1 + i$0] = _xH_;
            var i$0=j;
            continue}
          caml_check_bound(a,i$0)[1 + i$0] = e;
          return 0}}
      function trickle(l,i,e)
       {try
         {var _xG_=trickledown(l,i,e);return _xG_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom)
           {var i$0=exn[2];caml_check_bound(a,i$0)[1 + i$0] = e;return 0}
          throw exn}}
      function bubbledown(l,i)
       {var i$0=i;
        for(;;)
         {var i$1=maxson(l,i$0),_xF_=caml_check_bound(a,i$1)[1 + i$1];
          caml_check_bound(a,i$0)[1 + i$0] = _xF_;
          var i$0=i$1;
          continue}}
      function bubble(l,i)
       {try
         {var _xE_=bubbledown(l,i);return _xE_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom){var i$0=exn[2];return i$0}
          throw exn}}
      var l=a.length - 1,_xw_=((l + 1 | 0) / 3 | 0) - 1 | 0;
      if(! (_xw_ < 0))
       {var i$2=_xw_;
        for(;;)
         {trickle(l,i$2,caml_check_bound(a,i$2)[1 + i$2]);
          var _xD_=i$2 - 1 | 0;
          if(0 !== i$2){var i$2=_xD_;continue}
          break}}
      var _xx_=l - 1 | 0;
      if(! (_xx_ < 2))
       {var i$0=_xx_;
        a:
        for(;;)
         {var
           e$0=caml_check_bound(a,i$0)[1 + i$0],
           _xB_=caml_check_bound(a,0)[1];
          caml_check_bound(a,i$0)[1 + i$0] = _xB_;
          var i$1=bubble(i$0,0),i=i$1;
          for(;;)
           {var father=(i - 1 | 0) / 3 | 0;
            if(i === father)throw [0,Assert_failure,_v_];
            if
             (0 <= caml_call2(cmp,caml_check_bound(a,father)[1 + father],e$0))
             caml_check_bound(a,i)[1 + i] = e$0;
            else
             {var _xv_=caml_check_bound(a,father)[1 + father];
              caml_check_bound(a,i)[1 + i] = _xv_;
              if(0 < father){var i=father;continue}
              caml_check_bound(a,0)[1] = e$0}
            var _xC_=i$0 - 1 | 0;
            if(2 !== i$0){var i$0=_xC_;continue a}
            break}
          break}}
      var _xy_=1 < l?1:0;
      if(_xy_)
       {var e=caml_check_bound(a,1)[2],_xz_=caml_check_bound(a,0)[1];
        caml_check_bound(a,1)[2] = _xz_;
        caml_check_bound(a,0)[1] = e;
        var _xA_=0}
      else
       var _xA_=_xy_;
      return _xA_}
    function fast_sort$0(cmp,a)
     {function merge(src1ofs,src1len,src2,src2ofs,src2len,dst,dstofs)
       {var
         src1r=src1ofs + src1len | 0,
         src2r=src2ofs + src2len | 0,
         s2$1=caml_check_bound(src2,src2ofs)[1 + src2ofs],
         s1$1=caml_check_bound(a,src1ofs)[1 + src1ofs],
         i1=src1ofs,
         s1=s1$1,
         i2=src2ofs,
         s2=s2$1,
         d=dstofs;
        for(;;)
         {if(0 < caml_call2(cmp,s1,s2))
           {caml_check_bound(dst,d)[1 + d] = s2;
            var i2$0=i2 + 1 | 0;
            if(i2$0 < src2r)
             {var
               d$0=d + 1 | 0,
               s2$0=caml_check_bound(src2,i2$0)[1 + i2$0],
               i2=i2$0,
               s2=s2$0,
               d=d$0;
              continue}
            return blit$1(a,i1,dst,d + 1 | 0,src1r - i1 | 0)}
          caml_check_bound(dst,d)[1 + d] = s1;
          var i1$0=i1 + 1 | 0;
          if(i1$0 < src1r)
           {var
             d$1=d + 1 | 0,
             s1$0=caml_check_bound(a,i1$0)[1 + i1$0],
             i1=i1$0,
             s1=s1$0,
             d=d$1;
            continue}
          return blit$1(src2,i2,dst,d + 1 | 0,src2r - i2 | 0)}}
      function isortto(srcofs,dst,dstofs,len)
       {var _xn_=len - 1 | 0,_xm_=0;
        if(! (_xn_ < 0))
         {var i=_xm_;
          a:
          for(;;)
           {var
             _xo_=srcofs + i | 0,
             e=caml_check_bound(a,_xo_)[1 + _xo_],
             j=[0,(dstofs + i | 0) - 1 | 0];
            for(;;)
             {if(dstofs <= j[1])
               {var _xp_=j[1];
                if(0 < caml_call2(cmp,caml_check_bound(dst,_xp_)[1 + _xp_],e))
                 {var
                   _xq_=j[1],
                   _xr_=caml_check_bound(dst,_xq_)[1 + _xq_],
                   _xs_=j[1] + 1 | 0;
                  caml_check_bound(dst,_xs_)[1 + _xs_] = _xr_;
                  j[1] += -1;
                  continue}}
              var _xt_=j[1] + 1 | 0;
              caml_check_bound(dst,_xt_)[1 + _xt_] = e;
              var _xu_=i + 1 | 0;
              if(_xn_ !== i){var i=_xu_;continue a}
              break}
            break}}
        return 0}
      function sortto(srcofs,dst,dstofs,len)
       {if(len <= 5)return isortto(srcofs,dst,dstofs,len);
        var l1=len / 2 | 0,l2=len - l1 | 0;
        sortto(srcofs + l1 | 0,dst,dstofs + l1 | 0,l2);
        sortto(srcofs,a,srcofs + l2 | 0,l1);
        return merge(srcofs + l2 | 0,l1,dst,dstofs + l1 | 0,l2,dst,dstofs)}
      var l=a.length - 1;
      if(l <= 5)return isortto(0,a,0,l);
      var
       l1=l / 2 | 0,
       l2=l - l1 | 0,
       t=caml_make_vect(l2,caml_check_bound(a,0)[1]);
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}
    function to_seq$4(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_xk_=i + 1 | 0;
          return [0,x,function(_xl_){return aux(_xk_,_xl_)}]}
        return 0}
      var _xi_=0;
      return function(_xj_){return aux(_xi_,_xj_)}}
    function to_seqi$1(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_xg_=i + 1 | 0;
          return [0,[0,i,x],function(_xh_){return aux(_xg_,_xh_)}]}
        return 0}
      var _xe_=0;
      return function(_xf_){return aux(_xe_,_xf_)}}
    function of_seq$2(i$2)
     {var _xd_=0,l=fold_left(function(acc,x){return [0,x,acc]},_xd_,i$2);
      if(l)
       {var
         tl=l[2],
         hd=l[1],
         len=list_length(0,l),
         a=caml_make_vect(len,hd),
         i$1=len - 2 | 0,
         i=i$1,
         param=tl;
        for(;;)
         {if(param)
           {var tl$0=param[2],hd$0=param[1];
            a[1 + i] = hd$0;
            var i$0=i - 1 | 0,i=i$0,param=tl$0;
            continue}
          return a}}
      return [0]}
    var
     concat$1=caml_array_concat,
     include$2=
      [0,
       make_float,
       init$2,
       create_matrix,
       create_matrix,
       append$0,
       concat$1,
       sub$1,
       copy$1,
       fill$0,
       blit$1,
       to_list$1,
       of_list,
       iter$5,
       iteri$2,
       map$5,
       mapi$2,
       fold_left$1,
       fold_right$0,
       iter2$0,
       map2$0,
       for_all$0,
       exists$0,
       mem$0,
       memq$0,
       sort,
       fast_sort$0,
       fast_sort$0,
       to_seq$4,
       to_seqi$1,
       of_seq$2,
       Floatarray];
    caml_register_global(734,include$2,"Stdlib__array");
    var zero=0.,one=1.,minus_one=-1.;
    function is_finite(x){return x - x == 0.?1:0}
    function is_infinite(x){return 1. / x == 0.?1:0}
    function is_nan(x){return x != x?1:0}
    var pi=3.14159265358979312;
    function is_integer(x)
     {var _xc_=x == runtime.caml_trunc_float(x)?1:0;
      return _xc_?is_finite(x):_xc_}
    function succ$0(x){return caml_nextafter_float(x,infinity)}
    function pred$0(x){return caml_nextafter_float(x,neg_infinity)}
    function equal$7(x,y){return 0 === caml_float_compare(x,y)?1:0}
    function min$1(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return x != x?x:y}
      return y != y?y:x}
    function max$1(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return y != y?y:x}
      return x != x?x:y}
    function min_max(x,y)
     {if(x == x && y == y)
       {if(! (x < y))
         {var switch$0=0;
          if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
          if(switch$0)return [0,y,x]}
        return [0,x,y]}
      return [0,nan,nan]}
    function min_num(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return y != y?x:y}
      return x != x?y:x}
    function max_num(x,y)
     {if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return x != x?y:x}
      return y != y?x:y}
    function min_max_num(x,y)
     {if(x != x)return [0,y,y];
      if(y != y)return [0,x,x];
      if(! (x < y))
       {var switch$0=0;
        if(caml_signbit_float(y) || ! caml_signbit_float(x))switch$0 = 1;
        if(switch$0)return [0,y,x]}
      return [0,x,y]}
    function hash$0(x){return caml_hash(10,100,0,x)}
    function unsafe_fill(a,ofs,len,v)
     {var _xa_=(ofs + len | 0) - 1 | 0;
      if(! (_xa_ < ofs))
       {var i=ofs;
        for(;;)
         {a[1 + i] = v;
          var _xb_=i + 1 | 0;
          if(_xa_ !== i){var i=_xb_;continue}
          break}}
      return 0}
    function unsafe_blit(src,sofs,dst,dofs,len)
     {var _w__=len - 1 | 0,_w9_=0;
      if(! (_w__ < 0))
       {var i=_w9_;
        for(;;)
         {dst[1 + (dofs + i | 0)] = src[1 + (sofs + i | 0)];
          var _w$_=i + 1 | 0;
          if(_w__ !== i){var i=_w$_;continue}
          break}}
      return 0}
    function check(a,ofs,len,msg)
     {var _w5_=ofs < 0?1:0;
      if(_w5_)
       var _w6_=_w5_;
      else
       {var _w7_=len < 0?1:0;
        if(_w7_)
         var _w6_=_w7_;
        else
         var
          _w8_=(ofs + len | 0) < 0?1:0,
          _w6_=_w8_ || (a.length - 1 < (ofs + len | 0)?1:0)}
      return _w6_?invalid_arg(msg):_w6_}
    function make$1(n,v)
     {var result=caml_floatarray_create(n);
      unsafe_fill(result,0,n,v);
      return result}
    function init$3(l,f)
     {if(0 <= l)
       {var res=caml_floatarray_create(l),_w3_=l - 1 | 0,_w2_=0;
        if(! (_w3_ < 0))
         {var i=_w2_;
          for(;;)
           {res[1 + i] = caml_call1(f,i);
            var _w4_=i + 1 | 0;
            if(_w3_ !== i){var i=_w4_;continue}
            break}}
        return res}
      return invalid_arg(cst_Float_Array_init)}
    function append$1(a1,a2)
     {var
       l1=a1.length - 1,
       l2=a2.length - 1,
       result=caml_floatarray_create(l1 + l2 | 0);
      unsafe_blit(a1,0,result,0,l1);
      unsafe_blit(a2,0,result,l1,l2);
      return result}
    function concat$2(l)
     {var acc=0,param=l;
      for(;;)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           x=hd.length - 1 + acc | 0,
           acc$0=acc <= x?x:invalid_arg(cst_Float_Array_concat),
           acc=acc$0,
           param=tl;
          continue}
        var result=caml_floatarray_create(acc),l$0=l,i=0;
        for(;;)
         {if(l$0)
           {var tl$0=l$0[2],hd$0=l$0[1],hlen=hd$0.length - 1;
            unsafe_blit(hd$0,0,result,i,hlen);
            var i$0=i + hlen | 0,l$0=tl$0,i=i$0;
            continue}
          if(i === acc)return result;
          throw [0,Assert_failure,_w_]}}}
    function sub$2(a,ofs,len)
     {check(a,ofs,len,cst_Float_Array_sub);
      var result=caml_floatarray_create(len);
      unsafe_blit(a,ofs,result,0,len);
      return result}
    function copy$2(a)
     {var l=a.length - 1,result=caml_floatarray_create(l);
      unsafe_blit(a,0,result,0,l);
      return result}
    function fill$1(a,ofs,len,v)
     {check(a,ofs,len,cst_Float_Array_fill);return unsafe_fill(a,ofs,len,v)}
    function blit$2(src,sofs,dst,dofs,len)
     {check(src,sofs,len,cst_Float_array_blit);
      check(dst,dofs,len,cst_Float_array_blit$0);
      return unsafe_blit(src,sofs,dst,dofs,len)}
    function to_list$2(a)
     {return init(a.length - 1,function(_w1_){return a[1 + _w1_]})}
    function of_list$0(l)
     {var result=caml_floatarray_create(length(l)),i=0,l$0=l;
      for(;;)
       {if(l$0)
         {var t=l$0[2],h=l$0[1];
          result[1 + i] = h;
          var i$0=i + 1 | 0,i=i$0,l$0=t;
          continue}
        return result}}
    function iter$6(f,a)
     {var _wZ_=a.length - 1 - 1 | 0,_wY_=0;
      if(! (_wZ_ < 0))
       {var i=_wY_;
        for(;;)
         {caml_call1(f,a[1 + i]);
          var _w0_=i + 1 | 0;
          if(_wZ_ !== i){var i=_w0_;continue}
          break}}
      return 0}
    function iter2$1(f,a,b)
     {if(a.length - 1 !== b.length - 1)
       return invalid_arg(cst_Float_Array_iter2_arrays_m);
      var _wW_=a.length - 1 - 1 | 0,_wV_=0;
      if(! (_wW_ < 0))
       {var i=_wV_;
        for(;;)
         {caml_call2(f,a[1 + i],b[1 + i]);
          var _wX_=i + 1 | 0;
          if(_wW_ !== i){var i=_wX_;continue}
          break}}
      return 0}
    function map$6(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_wT_=l - 1 | 0,_wS_=0;
      if(! (_wT_ < 0))
       {var i=_wS_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _wU_=i + 1 | 0;
          if(_wT_ !== i){var i=_wU_;continue}
          break}}
      return r}
    function map2$1(f,a,b)
     {var la=a.length - 1,lb=b.length - 1;
      if(la !== lb)return invalid_arg(cst_Float_Array_map2_arrays_mu);
      var r=caml_floatarray_create(la),_wQ_=la - 1 | 0,_wP_=0;
      if(! (_wQ_ < 0))
       {var i=_wP_;
        for(;;)
         {r[1 + i] = caml_call2(f,a[1 + i],b[1 + i]);
          var _wR_=i + 1 | 0;
          if(_wQ_ !== i){var i=_wR_;continue}
          break}}
      return r}
    function iteri$3(f,a)
     {var _wN_=a.length - 1 - 1 | 0,_wM_=0;
      if(! (_wN_ < 0))
       {var i=_wM_;
        for(;;)
         {caml_call2(f,i,a[1 + i]);
          var _wO_=i + 1 | 0;
          if(_wN_ !== i){var i=_wO_;continue}
          break}}
      return 0}
    function mapi$3(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_wK_=l - 1 | 0,_wJ_=0;
      if(! (_wK_ < 0))
       {var i=_wJ_;
        for(;;)
         {r[1 + i] = caml_call2(f,i,a[1 + i]);
          var _wL_=i + 1 | 0;
          if(_wK_ !== i){var i=_wL_;continue}
          break}}
      return r}
    function fold_left$2(f,x,a)
     {var r=[0,x],_wH_=a.length - 1 - 1 | 0,_wG_=0;
      if(! (_wH_ < 0))
       {var i=_wG_;
        for(;;)
         {r[1] = caml_call2(f,r[1],a[1 + i]);
          var _wI_=i + 1 | 0;
          if(_wH_ !== i){var i=_wI_;continue}
          break}}
      return r[1]}
    function fold_right$1(f,a,x)
     {var r=[0,x],_wE_=a.length - 1 - 1 | 0;
      if(! (_wE_ < 0))
       {var i=_wE_;
        for(;;)
         {r[1] = caml_call2(f,a[1 + i],r[1]);
          var _wF_=i - 1 | 0;
          if(0 !== i){var i=_wF_;continue}
          break}}
      return r[1]}
    function exists$1(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(caml_call1(p,a[1 + i]))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function for_all$1(p,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 1;
        if(caml_call1(p,a[1 + i])){var i$0=i + 1 | 0,i=i$0;continue}
        return 0}}
    function mem$1(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(0 === caml_float_compare(a[1 + i],x))return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    function mem_ieee(x,a)
     {var n=a.length - 1,i=0;
      for(;;)
       {if(i === n)return 0;
        if(x == a[1 + i])return 1;
        var i$0=i + 1 | 0,i=i$0;
        continue}}
    var Bottom$0=[248,cst_Stdlib_Float_Array_Bottom,caml_fresh_oo_id(0)];
    function sort$0(cmp,a)
     {function maxson(l,i)
       {var i31=((i + i | 0) + i | 0) + 1 | 0,x=[0,i31];
        if((i31 + 2 | 0) < l)
         {if
           (caml_call2
             (cmp,caml_array_get(a,i31),caml_array_get(a,i31 + 1 | 0))
            <
            0)
           x[1] = i31 + 1 | 0;
          if
           (caml_call2
             (cmp,caml_array_get(a,x[1]),caml_array_get(a,i31 + 2 | 0))
            <
            0)
           x[1] = i31 + 2 | 0;
          return x[1]}
        if
         ((i31 + 1 | 0)
          <
          l
          &&
          !
          (0
           <=
           caml_call2(cmp,caml_array_get(a,i31),caml_array_get(a,i31 + 1 | 0))))
         return i31 + 1 | 0;
        if(i31 < l)return i31;
        throw [0,Bottom$0,i]}
      function trickledown(l,i,e)
       {var i$0=i;
        for(;;)
         {var j=maxson(l,i$0);
          if(0 < caml_call2(cmp,caml_array_get(a,j),e))
           {caml_array_set(a,i$0,caml_array_get(a,j));var i$0=j;continue}
          return caml_array_set(a,i$0,e)}}
      function trickle(l,i,e)
       {try
         {var _wD_=trickledown(l,i,e);return _wD_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom$0)
           {var i$0=exn[2];return caml_array_set(a,i$0,e)}
          throw exn}}
      function bubbledown(l,i)
       {var i$0=i;
        for(;;)
         {var i$1=maxson(l,i$0);
          caml_array_set(a,i$0,caml_array_get(a,i$1));
          var i$0=i$1;
          continue}}
      function bubble(l,i)
       {try
         {var _wC_=bubbledown(l,i);return _wC_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          if(exn[1] === Bottom$0){var i$0=exn[2];return i$0}
          throw exn}}
      var l=a.length - 1,_ww_=((l + 1 | 0) / 3 | 0) - 1 | 0;
      if(! (_ww_ < 0))
       {var i$2=_ww_;
        for(;;)
         {trickle(l,i$2,caml_array_get(a,i$2));
          var _wB_=i$2 - 1 | 0;
          if(0 !== i$2){var i$2=_wB_;continue}
          break}}
      var _wx_=l - 1 | 0;
      if(! (_wx_ < 2))
       {var i$0=_wx_;
        a:
        for(;;)
         {var e$0=caml_array_get(a,i$0);
          caml_array_set(a,i$0,caml_array_get(a,0));
          var i$1=bubble(i$0,0),i=i$1;
          for(;;)
           {var father=(i - 1 | 0) / 3 | 0;
            if(i === father)throw [0,Assert_failure,_x_];
            if(0 <= caml_call2(cmp,caml_array_get(a,father),e$0))
             caml_array_set(a,i,e$0);
            else
             {caml_array_set(a,i,caml_array_get(a,father));
              if(0 < father){var i=father;continue}
              caml_array_set(a,0,e$0)}
            var _wA_=i$0 - 1 | 0;
            if(2 !== i$0){var i$0=_wA_;continue a}
            break}
          break}}
      var _wy_=1 < l?1:0;
      if(_wy_)
       {var e=caml_array_get(a,1);
        caml_array_set(a,1,caml_array_get(a,0));
        var _wz_=caml_array_set(a,0,e)}
      else
       var _wz_=_wy_;
      return _wz_}
    function stable_sort(cmp,a)
     {function merge(src1ofs,src1len,src2,src2ofs,src2len,dst,dstofs)
       {var
         src1r=src1ofs + src1len | 0,
         src2r=src2ofs + src2len | 0,
         s2$1=caml_array_get(src2,src2ofs),
         s1$1=caml_array_get(a,src1ofs),
         i1=src1ofs,
         s1=s1$1,
         i2=src2ofs,
         s2=s2$1,
         d=dstofs;
        for(;;)
         {if(0 < caml_call2(cmp,s1,s2))
           {caml_array_set(dst,d,s2);
            var i2$0=i2 + 1 | 0;
            if(i2$0 < src2r)
             {var
               d$0=d + 1 | 0,
               s2$0=caml_array_get(src2,i2$0),
               i2=i2$0,
               s2=s2$0,
               d=d$0;
              continue}
            return blit$2(a,i1,dst,d + 1 | 0,src1r - i1 | 0)}
          caml_array_set(dst,d,s1);
          var i1$0=i1 + 1 | 0;
          if(i1$0 < src1r)
           {var
             d$1=d + 1 | 0,
             s1$0=caml_array_get(a,i1$0),
             i1=i1$0,
             s1=s1$0,
             d=d$1;
            continue}
          return blit$2(src2,i2,dst,d + 1 | 0,src2r - i2 | 0)}}
      function isortto(srcofs,dst,dstofs,len)
       {var _wu_=len - 1 | 0,_wt_=0;
        if(! (_wu_ < 0))
         {var i=_wt_;
          a:
          for(;;)
           {var
             e=caml_array_get(a,srcofs + i | 0),
             j=[0,(dstofs + i | 0) - 1 | 0];
            for(;;)
             {if
               (dstofs
                <=
                j[1]
                &&
                0
                <
                caml_call2(cmp,caml_array_get(dst,j[1]),e))
               {caml_array_set(dst,j[1] + 1 | 0,caml_array_get(dst,j[1]));
                j[1] += -1;
                continue}
              caml_array_set(dst,j[1] + 1 | 0,e);
              var _wv_=i + 1 | 0;
              if(_wu_ !== i){var i=_wv_;continue a}
              break}
            break}}
        return 0}
      function sortto(srcofs,dst,dstofs,len)
       {if(len <= 5)return isortto(srcofs,dst,dstofs,len);
        var l1=len / 2 | 0,l2=len - l1 | 0;
        sortto(srcofs + l1 | 0,dst,dstofs + l1 | 0,l2);
        sortto(srcofs,a,srcofs + l2 | 0,l1);
        return merge(srcofs + l2 | 0,l1,dst,dstofs + l1 | 0,l2,dst,dstofs)}
      var l=a.length - 1;
      if(l <= 5)return isortto(0,a,0,l);
      var l1=l / 2 | 0,l2=l - l1 | 0,t=caml_floatarray_create(l2);
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}
    function to_seq$5(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_wr_=i + 1 | 0;
          return [0,x,function(_ws_){return aux(_wr_,_ws_)}]}
        return 0}
      var _wp_=0;
      return function(_wq_){return aux(_wp_,_wq_)}}
    function to_seqi$2(a)
     {function aux(i,param)
       {if(i < a.length - 1)
         {var x=a[1 + i],_wn_=i + 1 | 0;
          return [0,[0,i,x],function(_wo_){return aux(_wn_,_wo_)}]}
        return 0}
      var _wl_=0;
      return function(_wm_){return aux(_wl_,_wm_)}}
    function of_seq$3(i$2)
     {var
       _wk_=0,
       param$0=fold_left(function(acc,x){return [0,x,acc]},_wk_,i$2),
       len=length(param$0),
       a=caml_floatarray_create(len),
       i$1=len - 1 | 0,
       i=i$1,
       param=param$0;
      for(;;)
       {if(param)
         {var tl=param[2],hd=param[1];
          a[1 + i] = hd;
          var i$0=i - 1 | 0,i=i$0,param=tl;
          continue}
        return a}}
    function map_to_array(f,a)
     {var l=a.length - 1;
      if(0 === l)return [0];
      var r=caml_make_vect(l,caml_call1(f,a[1])),_wi_=l - 1 | 0,_wh_=1;
      if(! (_wi_ < 1))
       {var i=_wh_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _wj_=i + 1 | 0;
          if(_wi_ !== i){var i=_wj_;continue}
          break}}
      return r}
    function map_from_array(f,a)
     {var l=a.length - 1,r=caml_floatarray_create(l),_wf_=l - 1 | 0,_we_=0;
      if(! (_wf_ < 0))
       {var i=_we_;
        for(;;)
         {r[1 + i] = caml_call1(f,a[1 + i]);
          var _wg_=i + 1 | 0;
          if(_wf_ !== i){var i=_wg_;continue}
          break}}
      return r}
    var
     _y_=caml_floatarray_create,
     _z_=caml_array_set,
     _A_=caml_array_get,
     _B_=
      [0,
       function(_wd_){return _wd_.length - 1},
       _A_,
       _z_,
       make$1,
       _y_,
       init$3,
       append$1,
       concat$2,
       sub$2,
       copy$2,
       fill$1,
       blit$2,
       to_list$2,
       of_list$0,
       iter$6,
       iteri$3,
       map$6,
       mapi$3,
       fold_left$2,
       fold_right$1,
       iter2$1,
       map2$1,
       for_all$1,
       exists$1,
       mem$1,
       mem_ieee,
       sort$0,
       stable_sort,
       stable_sort,
       to_seq$5,
       to_seqi$2,
       of_seq$3,
       map_to_array,
       map_from_array],
     _C_=caml_floatarray_create,
     _D_=caml_array_set,
     _E_=caml_array_get,
     Stdlib_float=
      [0,
       zero,
       one,
       minus_one,
       succ$0,
       pred$0,
       infinity,
       neg_infinity,
       nan,
       pi,
       max_float,
       min_float,
       epsilon,
       is_finite,
       is_infinite,
       is_nan,
       is_integer,
       of_string_opt,
       to_string,
       caml_float_compare,
       equal$7,
       min$1,
       max$1,
       min_max,
       min_num,
       max_num,
       min_max_num,
       hash$0,
       [0,
        function(_wc_){return _wc_.length - 1},
        _E_,
        _D_,
        make$1,
        _C_,
        init$3,
        append$1,
        concat$2,
        sub$2,
        copy$2,
        fill$1,
        blit$2,
        to_list$2,
        of_list$0,
        iter$6,
        iteri$3,
        map$6,
        mapi$3,
        fold_left$2,
        fold_right$1,
        iter2$1,
        map2$1,
        for_all$1,
        exists$1,
        mem$1,
        mem_ieee,
        sort$0,
        stable_sort,
        stable_sort,
        to_seq$5,
        to_seqi$2,
        of_seq$3,
        map_to_array,
        map_from_array],
       _B_];
    caml_register_global(735,Stdlib_float,"Stdlib__float");
    var zero$0=0,one$0=1,minus_one$0=-1;
    function abs$0(x){return 0 <= x?x:- x | 0}
    var max_int$0=2147483647,min_int$0=-2147483648;
    function lognot(x){return x ^ -1}
    function equal$8(_wb_,_wa_){return _wb_ === _wa_?1:0}
    var compare$7=caml_int_compare;
    function to_string$3(x){return caml_string_of_jsbytes("" + x)}
    var
     Stdlib_int=
      [0,
       zero$0,
       one$0,
       minus_one$0,
       abs$0,
       max_int$0,
       min_int$0,
       lognot,
       equal$8,
       compare$7,
       to_string$3];
    caml_register_global(736,Stdlib_int,"Stdlib__int");
    var zero$1=0,one$1=1,minus_one$1=-1;
    function succ$1(n){return n + 1 | 0}
    function pred$1(n){return n - 1 | 0}
    function abs$1(n){return caml_greaterequal(n,0)?n:- n | 0}
    var min_int$1=-2147483648,max_int$1=2147483647;
    function lognot$0(n){return n ^ -1}
    function unsigned_to_int(n)
     {if
       (!
        (0 < caml_int_compare(0,n))
        &&
        !
        (0 < caml_int_compare(n,2147483647)))
       return [0,n];
      return 0}
    function to_string$4(n){return caml_format_int(cst_d,n)}
    function of_string_opt$0(s)
     {try
       {var _v__=[0,caml_int_of_string(s)];return _v__}
      catch(_v$_)
       {_v$_ = caml_wrap_exception(_v$_);
        if(_v$_[1] === Failure)return 0;
        throw _v$_}}
    var compare$8=caml_int_compare;
    function equal$9(x,y){return 0 === caml_int_compare(x,y)?1:0}
    function unsigned_compare(n,m)
     {return caml_int_compare(n + 2147483648 | 0,m + 2147483648 | 0)}
    function unsigned_div(n,d)
     {if(caml_lessthan(d,0))return 0 <= unsigned_compare(n,d)?one$1:zero$1;
      var q=caml_div(n >>> 1 | 0,d) << 1,r=n - caml_mul(q,d) | 0;
      return 0 <= unsigned_compare(r,d)?q + 1 | 0:q}
    function unsigned_rem(n,d){return n - caml_mul(unsigned_div(n,d),d) | 0}
    var
     Stdlib_int32=
      [0,
       zero$1,
       one$1,
       minus_one$1,
       unsigned_div,
       unsigned_rem,
       succ$1,
       pred$1,
       abs$1,
       max_int$1,
       min_int$1,
       lognot$0,
       unsigned_to_int,
       of_string_opt$0,
       to_string$4,
       compare$8,
       unsigned_compare,
       equal$9];
    caml_register_global(737,Stdlib_int32,"Stdlib__int32");
    function succ$2(n){return caml_int64_add(n,_F_)}
    function pred$2(n){return caml_int64_sub(n,_G_)}
    function abs$2(n)
     {return caml_greaterequal(n,_H_)?n:runtime.caml_int64_neg(n)}
    function lognot$1(n){return runtime.caml_int64_xor(n,_I_)}
    var max_int$3=caml_int64_of_int32(2147483647);
    function unsigned_to_int$0(n)
     {if
       (!
        (0 < caml_int64_compare(zero$2,n))
        &&
        !
        (0 < caml_int64_compare(n,max_int$3)))
       return [0,runtime.caml_int64_to_int32(n)];
      return 0}
    function to_string$5(n){return caml_int64_format(cst_d$0,n)}
    function of_string_opt$1(s)
     {try
       {var _v8_=[0,caml_int64_of_string(s)];return _v8_}
      catch(_v9_)
       {_v9_ = caml_wrap_exception(_v9_);
        if(_v9_[1] === Failure)return 0;
        throw _v9_}}
    function compare$9(x,y){return caml_int64_compare(x,y)}
    function equal$10(x,y){return 0 === caml_int64_compare(x,y)?1:0}
    function unsigned_compare$0(n,m)
     {return caml_int64_compare
              (caml_int64_sub(n,min_int$2),caml_int64_sub(m,min_int$2))}
    function unsigned_div$0(n,d)
     {if(caml_lessthan(d,zero$2))
       return 0 <= unsigned_compare$0(n,d)?one$2:zero$2;
      var
       q=
        caml_int64_shift_left
         (runtime.caml_int64_div
           (runtime.caml_int64_shift_right_unsigned(n,1),d),
          1),
       r=caml_int64_sub(n,caml_int64_mul(q,d));
      return 0 <= unsigned_compare$0(r,d)?succ$2(q):q}
    function unsigned_rem$0(n,d)
     {return caml_int64_sub(n,caml_int64_mul(unsigned_div$0(n,d),d))}
    var
     Stdlib_int64=
      [0,
       zero$2,
       one$2,
       minus_one$2,
       unsigned_div$0,
       unsigned_rem$0,
       succ$2,
       pred$2,
       abs$2,
       max_int$2,
       min_int$2,
       lognot$1,
       unsigned_to_int$0,
       of_string_opt$1,
       to_string$5,
       compare$9,
       unsigned_compare$0,
       equal$10];
    caml_register_global(738,Stdlib_int64,"Stdlib__int64");
    var zero$3=0,one$3=1,minus_one$3=-1;
    function succ$3(n){return n + 1 | 0}
    function pred$3(n){return n - 1 | 0}
    function abs$3(n){return caml_greaterequal(n,0)?n:- n | 0}
    var min_int$3=-2147483648,max_int$4=2147483647;
    function lognot$2(n){return n ^ -1}
    function unsigned_to_int$1(n)
     {if
       (!
        (0 < caml_int_compare(0,n))
        &&
        !
        (0 < caml_int_compare(n,2147483647)))
       return [0,n];
      return 0}
    function to_string$6(n){return caml_format_int(cst_d$1,n)}
    function of_string_opt$2(s)
     {try
       {var _v6_=[0,caml_int_of_string(s)];return _v6_}
      catch(_v7_)
       {_v7_ = caml_wrap_exception(_v7_);
        if(_v7_[1] === Failure)return 0;
        throw _v7_}}
    var compare$10=caml_int_compare;
    function equal$11(x,y){return 0 === caml_int_compare(x,y)?1:0}
    function unsigned_compare$1(n,m)
     {return caml_int_compare(n + 2147483648 | 0,m + 2147483648 | 0)}
    function unsigned_div$1(n,d)
     {if(caml_lessthan(d,0))return 0 <= unsigned_compare$1(n,d)?one$3:zero$3;
      var q=caml_div(n >>> 1 | 0,d) << 1,r=n - caml_mul(q,d) | 0;
      return 0 <= unsigned_compare$1(r,d)?q + 1 | 0:q}
    function unsigned_rem$1(n,d)
     {return n - caml_mul(unsigned_div$1(n,d),d) | 0}
    var
     Stdlib_nativeint=
      [0,
       zero$3,
       one$3,
       minus_one$3,
       unsigned_div$1,
       unsigned_rem$1,
       succ$3,
       pred$3,
       abs$3,
       match$2,
       max_int$4,
       min_int$3,
       lognot$2,
       unsigned_to_int$1,
       of_string_opt$2,
       to_string$6,
       compare$10,
       unsigned_compare$1,
       equal$11];
    caml_register_global(739,Stdlib_nativeint,"Stdlib__nativeint");
    function engine(tbl,state,buf)
     {var
       result=runtime.caml_lex_engine(tbl,state,buf),
       _v3_=0 <= result?1:0,
       _v4_=_v3_?buf[12] !== dummy_pos?1:0:_v3_;
      if(_v4_)
       {buf[11] = buf[12];
        var _v5_=buf[12];
        buf[12] = [0,_v5_[1],_v5_[2],_v5_[3],buf[4] + buf[6] | 0]}
      return result}
    function new_engine(tbl,state,buf)
     {var
       result=runtime.caml_new_lex_engine(tbl,state,buf),
       _v0_=0 <= result?1:0,
       _v1_=_v0_?buf[12] !== dummy_pos?1:0:_v0_;
      if(_v1_)
       {buf[11] = buf[12];
        var _v2_=buf[12];
        buf[12] = [0,_v2_[1],_v2_[2],_v2_[3],buf[4] + buf[6] | 0]}
      return result}
    function from_function(opt,f)
     {if(opt)var sth=opt[1],with_positions=sth;else var with_positions=1;
      var
       _vM_=with_positions?zero_pos:dummy_pos,
       _vN_=with_positions?zero_pos:dummy_pos,
       aux_buffer=caml_create_bytes(512),
       _vO_=[0],
       _vP_=0,
       _vQ_=0,
       _vR_=0,
       _vS_=0,
       _vT_=0,
       _vU_=0,
       _vV_=0,
       _vW_=caml_create_bytes(1024);
      return [0,
              function(lexbuf)
               {var
                 read=
                  caml_call2(f,aux_buffer,caml_ml_bytes_length(aux_buffer)),
                 n=0 < read?read:(lexbuf[9] = 1,0);
                if(caml_ml_bytes_length(lexbuf[2]) < (lexbuf[3] + n | 0))
                 {if
                   (((lexbuf[3] - lexbuf[5] | 0) + n | 0)
                    <=
                    caml_ml_bytes_length(lexbuf[2]))
                   blit
                    (lexbuf[2],lexbuf[5],lexbuf[2],0,lexbuf[3] - lexbuf[5] | 0);
                  else
                   {var
                     newlen=
                      min
                       (2 * caml_ml_bytes_length(lexbuf[2]) | 0,max_string_length);
                    if(newlen < ((lexbuf[3] - lexbuf[5] | 0) + n | 0))
                     failwith(cst_Lexing_lex_refill_cannot_g);
                    var newbuf=caml_create_bytes(newlen);
                    blit(lexbuf[2],lexbuf[5],newbuf,0,lexbuf[3] - lexbuf[5] | 0);
                    lexbuf[2] = newbuf}
                  var s=lexbuf[5];
                  lexbuf[4] = lexbuf[4] + s | 0;
                  lexbuf[6] = lexbuf[6] - s | 0;
                  lexbuf[5] = 0;
                  lexbuf[7] = lexbuf[7] - s | 0;
                  lexbuf[3] = lexbuf[3] - s | 0;
                  var t=lexbuf[10],_vY_=t.length - 1 - 1 | 0,_vX_=0;
                  if(! (_vY_ < 0))
                   {var i=_vX_;
                    for(;;)
                     {var v=caml_check_bound(t,i)[1 + i];
                      if(0 <= v)caml_check_bound(t,i)[1 + i] = v - s | 0;
                      var _vZ_=i + 1 | 0;
                      if(_vY_ !== i){var i=_vZ_;continue}
                      break}}}
                blit(aux_buffer,0,lexbuf[2],lexbuf[3],n);
                lexbuf[3] = lexbuf[3] + n | 0;
                return 0},
              _vW_,
              _vV_,
              _vU_,
              _vT_,
              _vS_,
              _vR_,
              _vQ_,
              _vP_,
              _vO_,
              _vN_,
              _vM_]}
    function from_channel(with_positions,ic)
     {return from_function
              (with_positions,function(buf,n){return input(ic,buf,0,n)})}
    function from_string$0(opt,s)
     {if(opt)var sth=opt[1],with_positions=sth;else var with_positions=1;
      var
       _vB_=with_positions?zero_pos:dummy_pos,
       _vC_=with_positions?zero_pos:dummy_pos,
       _vD_=[0],
       _vE_=1,
       _vF_=0,
       _vG_=0,
       _vH_=0,
       _vI_=0,
       _vJ_=0,
       _vK_=caml_ml_string_length(s),
       _vL_=of_string(s);
      return [0,
              function(lexbuf){lexbuf[9] = 1;return 0},
              _vL_,
              _vK_,
              _vJ_,
              _vI_,
              _vH_,
              _vG_,
              _vF_,
              _vE_,
              _vD_,
              _vC_,
              _vB_]}
    function with_positions(lexbuf){return lexbuf[12] !== dummy_pos?1:0}
    function lexeme(lexbuf)
     {var len=lexbuf[6] - lexbuf[5] | 0;
      return sub_string(lexbuf[2],lexbuf[5],len)}
    function sub_lexeme(lexbuf,i1,i2)
     {var len=i2 - i1 | 0;return sub_string(lexbuf[2],i1,len)}
    function sub_lexeme_opt(lexbuf,i1,i2)
     {if(0 <= i1){var len=i2 - i1 | 0;return [0,sub_string(lexbuf[2],i1,len)]}
      return 0}
    function sub_lexeme_char(lexbuf,i){return caml_bytes_get(lexbuf[2],i)}
    function sub_lexeme_char_opt(lexbuf,i)
     {return 0 <= i?[0,caml_bytes_get(lexbuf[2],i)]:0}
    function lexeme_char(lexbuf,i)
     {return caml_bytes_get(lexbuf[2],lexbuf[5] + i | 0)}
    function lexeme_start(lexbuf){return lexbuf[11][4]}
    function lexeme_end(lexbuf){return lexbuf[12][4]}
    function lexeme_start_p(lexbuf){return lexbuf[11]}
    function lexeme_end_p(lexbuf){return lexbuf[12]}
    function new_line(lexbuf)
     {var
       lcp=lexbuf[12],
       _vz_=lcp !== dummy_pos?1:0,
       _vA_=_vz_?(lexbuf[12] = [0,lcp[1],lcp[2] + 1 | 0,lcp[4],lcp[4]],0):_vz_;
      return _vA_}
    function flush_input(lb)
     {lb[6] = 0;
      lb[4] = 0;
      var lcp=lb[12];
      if(lcp !== dummy_pos)
       lb[12] = [0,lcp[1],zero_pos[2],zero_pos[3],zero_pos[4]];
      lb[3] = 0;
      return 0}
    var
     Stdlib_lexing=
      [0,
       dummy_pos,
       from_channel,
       from_string$0,
       from_function,
       with_positions,
       lexeme,
       lexeme_char,
       lexeme_start,
       lexeme_end,
       lexeme_start_p,
       lexeme_end_p,
       new_line,
       flush_input,
       sub_lexeme,
       sub_lexeme_opt,
       sub_lexeme_char,
       sub_lexeme_char_opt,
       engine,
       new_engine];
    caml_register_global(740,Stdlib_lexing,"Stdlib__lexing");
    var
     YYexit=[248,cst_Stdlib_Parsing_YYexit,caml_fresh_oo_id(0)],
     Parse_error=[248,cst_Stdlib_Parsing_Parse_error,caml_fresh_oo_id(0)],
     env=
      [0,
       caml_make_vect(100,0),
       caml_make_vect(100,0),
       caml_make_vect(100,dummy_pos),
       caml_make_vect(100,dummy_pos),
       100,
       0,
       0,
       0,
       dummy_pos,
       dummy_pos,
       0,
       0,
       0,
       0,
       0,
       0];
    function grow_stacks(param)
     {var
       oldsize=env[5],
       newsize=oldsize * 2 | 0,
       new_s=caml_make_vect(newsize,0),
       new_v=caml_make_vect(newsize,0),
       new_start=caml_make_vect(newsize,dummy_pos),
       new_end=caml_make_vect(newsize,dummy_pos);
      blit$1(env[1],0,new_s,0,oldsize);
      env[1] = new_s;
      blit$1(env[2],0,new_v,0,oldsize);
      env[2] = new_v;
      blit$1(env[3],0,new_start,0,oldsize);
      env[3] = new_start;
      blit$1(env[4],0,new_end,0,oldsize);
      env[4] = new_end;
      env[5] = newsize;
      return 0}
    function clear_parser(param)
     {fill$0(env[2],0,env[5],0);env[8] = 0;return 0}
    var current_lookahead_fun=[0,function(param){return 0}];
    function yyparse(tables,start,lexer,lexbuf)
     {var
       init_asp=env[11],
       init_sp=env[14],
       init_stackbase=env[6],
       init_state=env[15],
       init_curr_char=env[7],
       init_lval=env[8],
       init_errflag=env[16];
      env[6] = env[14] + 1 | 0;
      env[7] = start;
      env[10] = lexbuf[12];
      try
       {var cmd=0,arg=0;
        for(;;)
         {var match=runtime.caml_parse_engine(tables,env,cmd,arg);
          switch(match)
           {case 0:
             var arg$0=caml_call1(lexer,lexbuf);
             env[9] = lexbuf[11];
             env[10] = lexbuf[12];
             var cmd=1,arg=arg$0;
             continue;
            case 1:throw Parse_error;
            case 2:grow_stacks(0);var cmd=2,arg=0;continue;
            case 3:grow_stacks(0);var cmd=3,arg=0;continue;
            case 4:
             try
              {var
                _vt_=env[13],
                _vu_=
                 caml_call1(caml_check_bound(tables[1],_vt_)[1 + _vt_],env),
                _vv_=4,
                cmd$0=_vv_,
                arg$1=_vu_}
             catch(_vy_)
              {_vy_ = caml_wrap_exception(_vy_);
               if(_vy_ !== Parse_error)throw _vy_;
               var cmd$0=5,arg$1=0,_vw_=_vy_}
             var cmd=cmd$0,arg=arg$1;
             continue;
            default:
             caml_call1(tables[14],cst_syntax_error);var cmd=5,arg=0;continue}}}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var curr_char=env[7];
        env[11] = init_asp;
        env[14] = init_sp;
        env[6] = init_stackbase;
        env[15] = init_state;
        env[7] = init_curr_char;
        env[8] = init_lval;
        env[16] = init_errflag;
        if(exn[1] === YYexit){var v=exn[2];return v}
        current_lookahead_fun[1]
        =
        function(tok)
         {if(is_block(tok))
           {var _vx_=caml_obj_tag(tok);
            return caml_check_bound(tables[3],_vx_)[1 + _vx_] === curr_char
                    ?1
                    :0}
          return caml_check_bound(tables[2],tok)[1 + tok] === curr_char?1:0};
        throw exn}}
    function peek_val(env,n)
     {var _vs_=env[11] - n | 0;return caml_check_bound(env[2],_vs_)[1 + _vs_]}
    function symbol_start_pos(param)
     {var i=env[12];
      for(;;)
       {if(0 < i)
         {var
           _vp_=(env[11] - i | 0) + 1 | 0,
           st=caml_check_bound(env[3],_vp_)[1 + _vp_],
           _vq_=(env[11] - i | 0) + 1 | 0,
           en=caml_check_bound(env[4],_vq_)[1 + _vq_];
          if(caml_notequal(st,en))return st;
          var i$0=i - 1 | 0,i=i$0;
          continue}
        var _vr_=env[11];
        return caml_check_bound(env[4],_vr_)[1 + _vr_]}}
    function symbol_end_pos(param)
     {var _vo_=env[11];return caml_check_bound(env[4],_vo_)[1 + _vo_]}
    function rhs_start_pos(n)
     {var _vn_=env[11] - (env[12] - n | 0) | 0;
      return caml_check_bound(env[3],_vn_)[1 + _vn_]}
    function rhs_end_pos(n)
     {var _vm_=env[11] - (env[12] - n | 0) | 0;
      return caml_check_bound(env[4],_vm_)[1 + _vm_]}
    function symbol_start(param){return symbol_start_pos(0)[4]}
    function symbol_end(param){return symbol_end_pos(0)[4]}
    function rhs_start(n){return rhs_start_pos(n)[4]}
    function rhs_end(n){return rhs_end_pos(n)[4]}
    function is_current_lookahead(tok)
     {return caml_call1(current_lookahead_fun[1],tok)}
    function parse_error(param){return 0}
    var
     Stdlib_parsing=
      [0,
       symbol_start,
       symbol_end,
       rhs_start,
       rhs_end,
       symbol_start_pos,
       symbol_end_pos,
       rhs_start_pos,
       rhs_end_pos,
       clear_parser,
       Parse_error,
       function(_vl_){return runtime.caml_set_parser_trace(_vl_)},
       YYexit,
       yyparse,
       peek_val,
       is_current_lookahead,
       parse_error];
    caml_register_global(741,Stdlib_parsing,"Stdlib__parsing");
    var
     Stdlib_set=
      [0,
       function(Ord)
        {function height(param){if(param){var h=param[4];return h}return 0}
         function create(l,v,r)
          {if(l)var h=l[4],hl=h;else var hl=0;
           if(r)var h$0=r[4],hr=h$0;else var hr=0;
           var _vk_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,v,r,_vk_]}
         function bal(l,v,r)
          {if(l)var h=l[4],hl=h;else var hl=0;
           if(r)var h$0=r[4],hr=h$0;else var hr=0;
           if((hr + 2 | 0) < hl)
            {if(l)
              {var lr=l[3],lv=l[2],ll=l[1],_vf_=height(lr);
               if(_vf_ <= height(ll))return create(ll,lv,create(lr,v,r));
               if(lr)
                {var lrr=lr[3],lrv=lr[2],lrl=lr[1],_vg_=create(lrr,v,r);
                 return create(create(ll,lv,lrl),lrv,_vg_)}
               return invalid_arg(cst_Set_bal)}
             return invalid_arg(cst_Set_bal$0)}
           if((hl + 2 | 0) < hr)
            {if(r)
              {var rr=r[3],rv=r[2],rl=r[1],_vh_=height(rl);
               if(_vh_ <= height(rr))return create(create(l,v,rl),rv,rr);
               if(rl)
                {var rlr=rl[3],rlv=rl[2],rll=rl[1],_vi_=create(rlr,rv,rr);
                 return create(create(l,v,rll),rlv,_vi_)}
               return invalid_arg(cst_Set_bal$1)}
             return invalid_arg(cst_Set_bal$2)}
           var _vj_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,v,r,_vj_]}
         function add(x,t)
          {if(t)
            {var r=t[3],v=t[2],l=t[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return t;
             if(0 <= c){var rr=add(x,r);return r === rr?t:bal(l,v,rr)}
             var ll=add(x,l);
             return l === ll?t:bal(ll,v,r)}
           return [0,0,x,0,1]}
         function singleton(x){return [0,0,x,0,1]}
         function add_min_element(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1];
             return bal(add_min_element(x,l),v,r)}
           return singleton(x)}
         function add_max_element(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1];
             return bal(l,v,add_max_element(x,r))}
           return singleton(x)}
         function join(l,v,r)
          {if(l)
            {if(r)
              {var
                rh=r[4],
                rr=r[3],
                rv=r[2],
                rl=r[1],
                lh=l[4],
                lr=l[3],
                lv=l[2],
                ll=l[1];
               return (rh + 2 | 0) < lh
                       ?bal(ll,lv,join(lr,v,r))
                       :(lh + 2 | 0) < rh?bal(join(l,v,rl),rv,rr):create(l,v,r)}
             return add_max_element(v,l)}
           return add_min_element(v,r)}
         function min_elt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _ve_=param$0[1];
               if(_ve_){var param$0=_ve_;continue}
               var v=param$0[2];
               return v}
             throw Not_found}}
         function min_elt_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _vd_=param$0[1];
               if(_vd_){var param$0=_vd_;continue}
               var v=param$0[2];
               return [0,v]}
             return 0}}
         function max_elt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _vb_=param$0[3],_vc_=param$0[2];
               if(_vb_){var param$0=_vb_;continue}
               return _vc_}
             throw Not_found}}
         function max_elt_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _u$_=param$0[3],_va_=param$0[2];
               if(_u$_){var param$0=_u$_;continue}
               return [0,_va_]}
             return 0}}
         function remove_min_elt(param)
          {if(param)
            {var _u__=param[1];
             if(_u__)
              {var r=param[3],v=param[2];return bal(remove_min_elt(_u__),v,r)}
             var r$0=param[3];
             return r$0}
           return invalid_arg(cst_Set_remove_min_elt)}
         function concat(t,match)
          {if(t)
            {if(match)
              {var _u9_=remove_min_elt(match);
               return join(t,min_elt(match),_u9_)}
             return t}
           return match}
         function split(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return [0,l,1,r];
             if(0 <= c)
              {var match=split(x,r),rr=match[3],pres=match[2],lr=match[1];
               return [0,join(l,v,lr),pres,rr]}
             var
              match$0=split(x,l),
              rl=match$0[3],
              pres$0=match$0[2],
              ll=match$0[1];
             return [0,ll,pres$0,join(rl,v,r)]}
           return _J_}
         var empty=0;
         function is_empty(param){return param?0:1}
         function mem(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v),
                _u8_=0 === c?1:0;
               if(_u8_)return _u8_;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function remove(x,t)
          {if(t)
            {var r=t[3],v=t[2],l=t[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)
              {if(l)
                {if(r)
                  {var _u7_=remove_min_elt(r);return bal(l,min_elt(r),_u7_)}
                 return l}
               return r}
             if(0 <= c){var rr=remove(x,r);return r === rr?t:bal(l,v,rr)}
             var ll=remove(x,l);
             return l === ll?t:bal(ll,v,r)}
           return 0}
         function union(t1,match)
          {if(t1)
            {if(match)
              {var
                h2=match[4],
                r2=match[3],
                v2=match[2],
                l2=match[1],
                h1=t1[4],
                r1=t1[3],
                v1=t1[2],
                l1=t1[1];
               if(h2 <= h1)
                {if(1 === h2)return add(v2,t1);
                 var
                  match$0=split(v1,match),
                  r2$0=match$0[3],
                  l2$0=match$0[1],
                  _u5_=union(r1,r2$0);
                 return join(union(l1,l2$0),v1,_u5_)}
               if(1 === h1)return add(v1,match);
               var
                match$1=split(v2,t1),
                r1$0=match$1[3],
                l1$0=match$1[1],
                _u6_=union(r1$0,r2);
               return join(union(l1$0,l2),v2,_u6_)}
             return t1}
           return match}
         function inter(s1,match)
          {if(s1)
            {if(match)
              {var
                r1=s1[3],
                v1=s1[2],
                l1=s1[1],
                _u1_=split(v1,match),
                _u2_=_u1_[1];
               if(0 === _u1_[2])
                {var r2=_u1_[3],_u3_=inter(r1,r2);
                 return concat(inter(l1,_u2_),_u3_)}
               var r2$0=_u1_[3],_u4_=inter(r1,r2$0);
               return join(inter(l1,_u2_),v1,_u4_)}
             return 0}
           return 0}
         function split_bis(x,param)
          {if(param)
            {var r=param[3],v=param[2],l=param[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return 0;
             if(0 <= c)
              {var match=split_bis(x,r);
               if(match)
                {var rr=match[2],lr=match[1];return [0,join(l,v,lr),rr]}
               return 0}
             var match$0=split_bis(x,l);
             if(match$0)
              {var rl=match$0[2],ll=match$0[1];
               return [0,
                       ll,
                       function(param){return join(caml_call1(rl,0),v,r)}]}
             return 0}
           return [0,0,function(param){return 0}]}
         function disjoint(s1,s2)
          {var s1$0=s1,s2$0=s2;
           for(;;)
            {if(s1$0 && s2$0)
              {var r1=s1$0[3],v1=s1$0[2],l1=s1$0[1];
               if(s1$0 === s2$0)return 0;
               var match=split_bis(v1,s2$0);
               if(match)
                {var r2=match[2],l2=match[1],_u0_=disjoint(l1,l2);
                 if(_u0_)
                  {var s2$1=caml_call1(r2,0),s1$0=r1,s2$0=s2$1;continue}
                 return _u0_}
               return 0}
             return 1}}
         function diff(t1,match)
          {if(t1)
            {if(match)
              {var
                r1=t1[3],
                v1=t1[2],
                l1=t1[1],
                _uW_=split(v1,match),
                _uX_=_uW_[1];
               if(0 === _uW_[2])
                {var r2=_uW_[3],_uY_=diff(r1,r2);
                 return join(diff(l1,_uX_),v1,_uY_)}
               var r2$0=_uW_[3],_uZ_=diff(r1,r2$0);
               return concat(diff(l1,_uX_),_uZ_)}
             return t1}
           return 0}
         function cons_enum(s,e)
          {var s$0=s,e$0=e;
           for(;;)
            {if(s$0)
              {var
                r=s$0[3],
                v=s$0[2],
                s$1=s$0[1],
                e$1=[0,v,r,e$0],
                s$0=s$1,
                e$0=e$1;
               continue}
             return e$0}}
         function compare(s1,s2)
          {var e2$2=cons_enum(s2,0),e1$2=cons_enum(s1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[3],
                  r2=e2[2],
                  v2=e2[1],
                  e1$0=e1[3],
                  r1=e1[2],
                  v1=e1[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var
                    e2$1=cons_enum(r2,e2$0),
                    e1$1=cons_enum(r1,e1$0),
                    e1=e1$1,
                    e2=e2$1;
                   continue}
                 return c}
               return 1}
             return e2?-1:0}}
         function equal(s1,s2){return 0 === compare(s1,s2)?1:0}
         function subset(s1,s2)
          {var s1$0=s1,s2$0=s2;
           for(;;)
            {if(s1$0)
              {if(s2$0)
                {var
                  r2=s2$0[3],
                  v2=s2$0[2],
                  l2=s2$0[1],
                  r1=s1$0[3],
                  v1=s1$0[2],
                  l1=s1$0[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var _uT_=subset(l1,l2);
                   if(_uT_){var s1$0=r1,s2$0=r2;continue}
                   return _uT_}
                 if(0 <= c)
                  {var _uU_=subset([0,0,v1,r1,0],r2);
                   if(_uU_){var s1$0=l1;continue}
                   return _uU_}
                 var _uV_=subset([0,l1,v1,0,0],l2);
                 if(_uV_){var s1$0=r1;continue}
                 return _uV_}
               return 0}
             return 1}}
         function iter(f,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var r=param$0[3],v=param$0[2],l=param$0[1];
               iter(f,l);
               caml_call1(f,v);
               var param$0=r;
               continue}
             return 0}}
         function fold(f,s,accu)
          {var s$0=s,accu$0=accu;
           for(;;)
            {if(s$0)
              {var
                r=s$0[3],
                v=s$0[2],
                l=s$0[1],
                accu$1=caml_call2(f,v,fold(f,l,accu$0)),
                s$0=r,
                accu$0=accu$1;
               continue}
             return accu$0}}
         function for_all(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _uQ_=caml_call1(p,v);
               if(_uQ_)
                {var _uR_=for_all(p,l);
                 if(_uR_){var param$0=r;continue}
                 var _uS_=_uR_}
               else
                var _uS_=_uQ_;
               return _uS_}
             return 1}}
         function exists(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _uN_=caml_call1(p,v);
               if(_uN_)
                var _uO_=_uN_;
               else
                {var _uP_=exists(p,l);
                 if(! _uP_){var param$0=r;continue}
                 var _uO_=_uP_}
               return _uO_}
             return 0}}
         function filter(p,t)
          {if(t)
            {var
              r=t[3],
              v=t[2],
              l=t[1],
              l$0=filter(p,l),
              pv=caml_call1(p,v),
              r$0=filter(p,r);
             if(pv){if(l === l$0 && r === r$0)return t;return join(l$0,v,r$0)}
             return concat(l$0,r$0)}
           return 0}
         function partition(p,param)
          {if(param)
            {var
              r=param[3],
              v=param[2],
              l=param[1],
              match=partition(p,l),
              lf=match[2],
              lt=match[1],
              pv=caml_call1(p,v),
              match$0=partition(p,r),
              rf=match$0[2],
              rt=match$0[1];
             if(pv){var _uL_=concat(lf,rf);return [0,join(lt,v,rt),_uL_]}
             var _uM_=join(lf,v,rf);
             return [0,concat(lt,rt),_uM_]}
           return _K_}
         function cardinal(param)
          {if(param)
            {var r=param[3],l=param[1],_uK_=cardinal(r);
             return (cardinal(l) + 1 | 0) + _uK_ | 0}
           return 0}
         function elements_aux(accu,param)
          {var accu$0=accu,param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                accu$1=[0,v,elements_aux(accu$0,r)],
                accu$0=accu$1,
                param$0=l;
               continue}
             return accu$0}}
         function elements(s){return elements_aux(0,s)}
         function find(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return v;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             throw Not_found}}
         function find_first(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=l;continue}
                     var param=r;
                     continue}
                   return v0}}
               var param$1=r$0;
               continue}
             throw Not_found}}
         function find_first_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=l;continue}
                     var param=r;
                     continue}
                   return [0,v0]}}
               var param$1=r$0;
               continue}
             return 0}}
         function find_last(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=r;continue}
                     var param=l;
                     continue}
                   return v0}}
               var param$1=l$0;
               continue}
             throw Not_found}}
         function find_last_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var r$0=param$1[3],v$0=param$1[2],l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,param=r;continue}
                     var param=l;
                     continue}
                   return [0,v0]}}
               var param$1=l$0;
               continue}
             return 0}}
         function find_opt(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return [0,v];
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function map(f,t)
          {if(t)
            {var
              r=t[3],
              v=t[2],
              l=t[1],
              l$0=map(f,l),
              v$0=caml_call1(f,v),
              r$0=map(f,r);
             if(l === l$0 && v === v$0 && r === r$0)return t;
             var switch$0=0;
             if(0 !== l$0)
              {var _uJ_=max_elt(l$0);
               if(0 <= caml_call2(Ord[1],_uJ_,v$0))switch$0 = 1}
             if(! switch$0)
              {var switch$1=0;
               if(0 !== r$0)
                {var _uI_=min_elt(r$0);
                 if(0 <= caml_call2(Ord[1],v$0,_uI_))switch$1 = 1}
               if(! switch$1)return join(l$0,v$0,r$0)}
             return union(l$0,add(v$0,r$0))}
           return 0}
         function of_list(l)
          {if(l)
            {var _ux_=l[2],_uy_=l[1];
             if(_ux_)
              {var _uz_=_ux_[2],_uA_=_ux_[1];
               if(_uz_)
                {var _uB_=_uz_[2],_uC_=_uz_[1];
                 if(_uB_)
                  {var _uD_=_uB_[2],_uE_=_uB_[1];
                   if(_uD_)
                    {if(_uD_[2])
                      {var
                        l$0=sort_uniq(Ord[1],l),
                        sub=
                         function(n,l)
                          {if(! (3 < n >>> 0))
                            switch(n)
                             {case 0:return [0,0,l];
                              case 1:
                               if(l){var l$3=l[2],x0=l[1];return [0,[0,0,x0,0,1],l$3]}
                               break;
                              case 2:
                               if(l)
                                {var _uF_=l[2];
                                 if(_uF_)
                                  {var l$4=_uF_[2],x1=_uF_[1],x0$0=l[1];
                                   return [0,[0,[0,0,x0$0,0,1],x1,0,2],l$4]}}
                               break;
                              default:
                               if(l)
                                {var _uG_=l[2];
                                 if(_uG_)
                                  {var _uH_=_uG_[2];
                                   if(_uH_)
                                    {var l$5=_uH_[2],x2=_uH_[1],x1$0=_uG_[1],x0$1=l[1];
                                     return [0,[0,[0,0,x0$1,0,1],x1$0,[0,0,x2,0,1],2],l$5]}}}}
                           var nl=n / 2 | 0,match=sub(nl,l),l$0=match[2],left=match[1];
                           if(l$0)
                            {var
                              l$1=l$0[2],
                              mid=l$0[1],
                              match$0=sub((n - nl | 0) - 1 | 0,l$1),
                              l$2=match$0[2],
                              right=match$0[1];
                             return [0,create(left,mid,right),l$2]}
                           throw [0,Assert_failure,_L_]};
                       return sub(length(l$0),l$0)[1]}
                     var x4=_uD_[1];
                     return add(x4,add(_uE_,add(_uC_,add(_uA_,singleton(_uy_)))))}
                   return add(_uE_,add(_uC_,add(_uA_,singleton(_uy_))))}
                 return add(_uC_,add(_uA_,singleton(_uy_)))}
               return add(_uA_,singleton(_uy_))}
             return singleton(_uy_)}
           return empty}
         function add_seq(i,m)
          {return fold_left(function(s,x){return add(x,s)},m,i)}
         function of_seq(i){return add_seq(i,empty)}
         function seq_of_enum(c,param)
          {if(c)
            {var rest=c[3],t=c[2],x=c[1],_uv_=cons_enum(t,rest);
             return [0,x,function(_uw_){return seq_of_enum(_uv_,_uw_)}]}
           return 0}
         function to_seq(c)
          {var _ut_=cons_enum(c,0);
           return function(_uu_){return seq_of_enum(_ut_,_uu_)}}
         function to_seq_from(low,s)
          {var s$0=s,c=0;
           for(;;)
            {if(s$0)
              {var r=s$0[3],v=s$0[2],l=s$0[1],n=caml_call2(Ord[1],v,low);
               if(0 !== n)
                {if(0 <= n){var c$0=[0,v,r,c],s$0=l,c=c$0;continue}
                 var s$0=r;
                 continue}
               var _ur_=[0,v,r,c]}
             else
              var _ur_=c;
             return function(_us_){return seq_of_enum(_ur_,_us_)}}}
         return [0,
                 empty,
                 is_empty,
                 mem,
                 add,
                 singleton,
                 remove,
                 union,
                 inter,
                 disjoint,
                 diff,
                 compare,
                 equal,
                 subset,
                 iter,
                 map,
                 fold,
                 for_all,
                 exists,
                 filter,
                 partition,
                 cardinal,
                 elements,
                 min_elt,
                 min_elt_opt,
                 max_elt,
                 max_elt_opt,
                 min_elt,
                 min_elt_opt,
                 split,
                 find,
                 find_opt,
                 find_first,
                 find_first_opt,
                 find_last,
                 find_last_opt,
                 of_list,
                 to_seq_from,
                 to_seq,
                 add_seq,
                 of_seq]}];
    caml_register_global(742,Stdlib_set,"Stdlib__set");
    var
     Stdlib_map=
      [0,
       function(Ord)
        {function height(param){if(param){var h=param[5];return h}return 0}
         function create(l,x,d,r)
          {var hl=height(l),hr=height(r),_uq_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,x,d,r,_uq_]}
         function singleton(x,d){return [0,0,x,d,0,1]}
         function bal(l,x,d,r)
          {if(l)var h=l[5],hl=h;else var hl=0;
           if(r)var h$0=r[5],hr=h$0;else var hr=0;
           if((hr + 2 | 0) < hl)
            {if(l)
              {var lr=l[4],ld=l[3],lv=l[2],ll=l[1],_ul_=height(lr);
               if(_ul_ <= height(ll))return create(ll,lv,ld,create(lr,x,d,r));
               if(lr)
                {var
                  lrr=lr[4],
                  lrd=lr[3],
                  lrv=lr[2],
                  lrl=lr[1],
                  _um_=create(lrr,x,d,r);
                 return create(create(ll,lv,ld,lrl),lrv,lrd,_um_)}
               return invalid_arg(cst_Map_bal)}
             return invalid_arg(cst_Map_bal$0)}
           if((hl + 2 | 0) < hr)
            {if(r)
              {var rr=r[4],rd=r[3],rv=r[2],rl=r[1],_un_=height(rl);
               if(_un_ <= height(rr))return create(create(l,x,d,rl),rv,rd,rr);
               if(rl)
                {var
                  rlr=rl[4],
                  rld=rl[3],
                  rlv=rl[2],
                  rll=rl[1],
                  _uo_=create(rlr,rv,rd,rr);
                 return create(create(l,x,d,rll),rlv,rld,_uo_)}
               return invalid_arg(cst_Map_bal$1)}
             return invalid_arg(cst_Map_bal$2)}
           var _up_=hr <= hl?hl + 1 | 0:hr + 1 | 0;
           return [0,l,x,d,r,_up_]}
         var empty=0;
         function is_empty(param){return param?0:1}
         function add(x,data,m)
          {if(m)
            {var h=m[5],r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return d === data?m:[0,l,x,data,r,h];
             if(0 <= c){var rr=add(x,data,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=add(x,data,l);
             return l === ll?m:bal(ll,v,d,r)}
           return [0,0,x,data,0,1]}
         function find(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return d;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             throw Not_found}}
         function find_first(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=l;continue}
                     var param=r;
                     continue}
                   return [0,v0,d0]}}
               var param$1=r$0;
               continue}
             throw Not_found}}
         function find_first_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=l$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=l;continue}
                     var param=r;
                     continue}
                   return [0,[0,v0,d0]]}}
               var param$1=r$0;
               continue}
             return 0}}
         function find_last(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=r;continue}
                     var param=l;
                     continue}
                   return [0,v0,d0]}}
               var param$1=l$0;
               continue}
             throw Not_found}}
         function find_last_opt(f,param$0)
          {var param$1=param$0;
           for(;;)
            {if(param$1)
              {var
                r$0=param$1[4],
                d$0=param$1[3],
                v$0=param$1[2],
                l$0=param$1[1];
               if(caml_call1(f,v$0))
                {var v0=v$0,d0=d$0,param=r$0;
                 for(;;)
                  {if(param)
                    {var r=param[4],d=param[3],v=param[2],l=param[1];
                     if(caml_call1(f,v)){var v0=v,d0=d,param=r;continue}
                     var param=l;
                     continue}
                   return [0,[0,v0,d0]]}}
               var param$1=l$0;
               continue}
             return 0}}
         function find_opt(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v);
               if(0 === c)return [0,d];
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function mem(x,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                v=param$0[2],
                l=param$0[1],
                c=caml_call2(Ord[1],x,v),
                _uk_=0 === c?1:0;
               if(_uk_)return _uk_;
               var param$1=0 <= c?r:l,param$0=param$1;
               continue}
             return 0}}
         function min_binding(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _uj_=param$0[1];
               if(_uj_){var param$0=_uj_;continue}
               var d=param$0[3],v=param$0[2];
               return [0,v,d]}
             throw Not_found}}
         function min_binding_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _ui_=param$0[1];
               if(_ui_){var param$0=_ui_;continue}
               var d=param$0[3],v=param$0[2];
               return [0,[0,v,d]]}
             return 0}}
         function max_binding(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _uf_=param$0[4],_ug_=param$0[3],_uh_=param$0[2];
               if(_uf_){var param$0=_uf_;continue}
               return [0,_uh_,_ug_]}
             throw Not_found}}
         function max_binding_opt(param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var _uc_=param$0[4],_ud_=param$0[3],_ue_=param$0[2];
               if(_uc_){var param$0=_uc_;continue}
               return [0,[0,_ue_,_ud_]]}
             return 0}}
         function remove_min_binding(param)
          {if(param)
            {var _ub_=param[1];
             if(_ub_)
              {var r=param[4],d=param[3],v=param[2];
               return bal(remove_min_binding(_ub_),v,d,r)}
             var r$0=param[4];
             return r$0}
           return invalid_arg(cst_Map_remove_min_elt)}
         function _tQ_(t,match)
          {if(t)
            {if(match)
              {var match$0=min_binding(match),d=match$0[2],x=match$0[1];
               return bal(t,x,d,remove_min_binding(match))}
             return t}
           return match}
         function remove(x,m)
          {if(m)
            {var r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)return _tQ_(l,r);
             if(0 <= c){var rr=remove(x,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=remove(x,l);
             return l === ll?m:bal(ll,v,d,r)}
           return 0}
         function update(x,f,m)
          {if(m)
            {var h=m[5],r=m[4],d=m[3],v=m[2],l=m[1],c=caml_call2(Ord[1],x,v);
             if(0 === c)
              {var match=caml_call1(f,[0,d]);
               if(match)
                {var data=match[1];return d === data?m:[0,l,x,data,r,h]}
               return _tQ_(l,r)}
             if(0 <= c){var rr=update(x,f,r);return r === rr?m:bal(l,v,d,rr)}
             var ll=update(x,f,l);
             return l === ll?m:bal(ll,v,d,r)}
           var match$0=caml_call1(f,0);
           if(match$0){var data$0=match$0[1];return [0,0,x,data$0,0,1]}
           return 0}
         function iter(f,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var r=param$0[4],d=param$0[3],v=param$0[2],l=param$0[1];
               iter(f,l);
               caml_call2(f,v,d);
               var param$0=r;
               continue}
             return 0}}
         function map(f,param)
          {if(param)
            {var
              h=param[5],
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              l$0=map(f,l),
              d$0=caml_call1(f,d),
              r$0=map(f,r);
             return [0,l$0,v,d$0,r$0,h]}
           return 0}
         function mapi(f,param)
          {if(param)
            {var
              h=param[5],
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              l$0=mapi(f,l),
              d$0=caml_call2(f,v,d),
              r$0=mapi(f,r);
             return [0,l$0,v,d$0,r$0,h]}
           return 0}
         function fold(f,m,accu)
          {var m$0=m,accu$0=accu;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                l=m$0[1],
                accu$1=caml_call3(f,v,d,fold(f,l,accu$0)),
                m$0=r,
                accu$0=accu$1;
               continue}
             return accu$0}}
         function for_all(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _t__=caml_call2(p,v,d);
               if(_t__)
                {var _t$_=for_all(p,l);
                 if(_t$_){var param$0=r;continue}
                 var _ua_=_t$_}
               else
                var _ua_=_t__;
               return _ua_}
             return 1}}
         function exists(p,param)
          {var param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                _t7_=caml_call2(p,v,d);
               if(_t7_)
                var _t8_=_t7_;
               else
                {var _t9_=exists(p,l);
                 if(! _t9_){var param$0=r;continue}
                 var _t8_=_t9_}
               return _t8_}
             return 0}}
         function add_min_binding(k,x,param)
          {if(param)
            {var r=param[4],d=param[3],v=param[2],l=param[1];
             return bal(add_min_binding(k,x,l),v,d,r)}
           return singleton(k,x)}
         function add_max_binding(k,x,param)
          {if(param)
            {var r=param[4],d=param[3],v=param[2],l=param[1];
             return bal(l,v,d,add_max_binding(k,x,r))}
           return singleton(k,x)}
         function join(l,v,d,r)
          {if(l)
            {if(r)
              {var
                rh=r[5],
                rr=r[4],
                rd=r[3],
                rv=r[2],
                rl=r[1],
                lh=l[5],
                lr=l[4],
                ld=l[3],
                lv=l[2],
                ll=l[1];
               return (rh + 2 | 0) < lh
                       ?bal(ll,lv,ld,join(lr,v,d,r))
                       :(lh + 2 | 0) < rh
                         ?bal(join(l,v,d,rl),rv,rd,rr)
                         :create(l,v,d,r)}
             return add_max_binding(v,d,l)}
           return add_min_binding(v,d,r)}
         function concat(t,match)
          {if(t)
            {if(match)
              {var match$0=min_binding(match),d=match$0[2],x=match$0[1];
               return join(t,x,d,remove_min_binding(match))}
             return t}
           return match}
         function concat_or_join(t1,v,d,t2)
          {if(d){var d$0=d[1];return join(t1,v,d$0,t2)}return concat(t1,t2)}
         function split(x,param)
          {if(param)
            {var
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              c=caml_call2(Ord[1],x,v);
             if(0 === c)return [0,l,[0,d],r];
             if(0 <= c)
              {var match=split(x,r),rr=match[3],pres=match[2],lr=match[1];
               return [0,join(l,v,d,lr),pres,rr]}
             var
              match$0=split(x,l),
              rl=match$0[3],
              pres$0=match$0[2],
              ll=match$0[1];
             return [0,ll,pres$0,join(rl,v,d,r)]}
           return _M_}
         function merge(f,s1,s2)
          {if(s1)
            {var h1=s1[5],r1=s1[4],d1=s1[3],v1=s1[2],l1=s1[1];
             if(height(s2) <= h1)
              {var
                match=split(v1,s2),
                r2=match[3],
                d2=match[2],
                l2=match[1],
                _t3_=merge(f,r1,r2),
                _t4_=caml_call3(f,v1,[0,d1],d2);
               return concat_or_join(merge(f,l1,l2),v1,_t4_,_t3_)}}
           else
            if(! s2)return 0;
           if(s2)
            {var
              r2$0=s2[4],
              d2$0=s2[3],
              v2=s2[2],
              l2$0=s2[1],
              match$0=split(v2,s1),
              r1$0=match$0[3],
              d1$0=match$0[2],
              l1$0=match$0[1],
              _t5_=merge(f,r1$0,r2$0),
              _t6_=caml_call3(f,v2,d1$0,[0,d2$0]);
             return concat_or_join(merge(f,l1$0,l2$0),v2,_t6_,_t5_)}
           throw [0,Assert_failure,_N_]}
         function union(f,s1,s2)
          {if(s1)
            {if(s2)
              {var
                h2=s2[5],
                r2=s2[4],
                d2=s2[3],
                v2=s2[2],
                l2=s2[1],
                h1=s1[5],
                r1=s1[4],
                d1=s1[3],
                v1=s1[2],
                l1=s1[1];
               if(h2 <= h1)
                {var
                  match=split(v1,s2),
                  r2$0=match[3],
                  d2$0=match[2],
                  l2$0=match[1],
                  l=union(f,l1,l2$0),
                  r=union(f,r1,r2$0);
                 if(d2$0)
                  {var d2$1=d2$0[1];
                   return concat_or_join(l,v1,caml_call3(f,v1,d1,d2$1),r)}
                 return join(l,v1,d1,r)}
               var
                match$0=split(v2,s1),
                r1$0=match$0[3],
                d1$0=match$0[2],
                l1$0=match$0[1],
                l$0=union(f,l1$0,l2),
                r$0=union(f,r1$0,r2);
               if(d1$0)
                {var d1$1=d1$0[1];
                 return concat_or_join(l$0,v2,caml_call3(f,v2,d1$1,d2),r$0)}
               return join(l$0,v2,d2,r$0)}
             var s=s1}
           else
            var s=s2;
           return s}
         function filter(p,m)
          {if(m)
            {var
              r=m[4],
              d=m[3],
              v=m[2],
              l=m[1],
              l$0=filter(p,l),
              pvd=caml_call2(p,v,d),
              r$0=filter(p,r);
             if(pvd)
              {if(l === l$0 && r === r$0)return m;return join(l$0,v,d,r$0)}
             return concat(l$0,r$0)}
           return 0}
         function partition(p,param)
          {if(param)
            {var
              r=param[4],
              d=param[3],
              v=param[2],
              l=param[1],
              match=partition(p,l),
              lf=match[2],
              lt=match[1],
              pvd=caml_call2(p,v,d),
              match$0=partition(p,r),
              rf=match$0[2],
              rt=match$0[1];
             if(pvd){var _t1_=concat(lf,rf);return [0,join(lt,v,d,rt),_t1_]}
             var _t2_=join(lf,v,d,rf);
             return [0,concat(lt,rt),_t2_]}
           return _O_}
         function cons_enum(m,e)
          {var m$0=m,e$0=e;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                m$1=m$0[1],
                e$1=[0,v,d,r,e$0],
                m$0=m$1,
                e$0=e$1;
               continue}
             return e$0}}
         function compare(cmp,m1,m2)
          {var e2$2=cons_enum(m2,0),e1$2=cons_enum(m1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[4],
                  r2=e2[3],
                  d2=e2[2],
                  v2=e2[1],
                  e1$0=e1[4],
                  r1=e1[3],
                  d1=e1[2],
                  v1=e1[1],
                  c=caml_call2(Ord[1],v1,v2);
                 if(0 === c)
                  {var c$0=caml_call2(cmp,d1,d2);
                   if(0 === c$0)
                    {var
                      e2$1=cons_enum(r2,e2$0),
                      e1$1=cons_enum(r1,e1$0),
                      e1=e1$1,
                      e2=e2$1;
                     continue}
                   return c$0}
                 return c}
               return 1}
             return e2?-1:0}}
         function equal(cmp,m1,m2)
          {var e2$2=cons_enum(m2,0),e1$2=cons_enum(m1,0),e1=e1$2,e2=e2$2;
           for(;;)
            {if(e1)
              {if(e2)
                {var
                  e2$0=e2[4],
                  r2=e2[3],
                  d2=e2[2],
                  v2=e2[1],
                  e1$0=e1[4],
                  r1=e1[3],
                  d1=e1[2],
                  v1=e1[1],
                  _tY_=0 === caml_call2(Ord[1],v1,v2)?1:0;
                 if(_tY_)
                  {var _tZ_=caml_call2(cmp,d1,d2);
                   if(_tZ_)
                    {var
                      e2$1=cons_enum(r2,e2$0),
                      e1$1=cons_enum(r1,e1$0),
                      e1=e1$1,
                      e2=e2$1;
                     continue}
                   var _t0_=_tZ_}
                 else
                  var _t0_=_tY_;
                 return _t0_}
               return 0}
             return e2?0:1}}
         function cardinal(param)
          {if(param)
            {var r=param[4],l=param[1],_tX_=cardinal(r);
             return (cardinal(l) + 1 | 0) + _tX_ | 0}
           return 0}
         function bindings_aux(accu,param)
          {var accu$0=accu,param$0=param;
           for(;;)
            {if(param$0)
              {var
                r=param$0[4],
                d=param$0[3],
                v=param$0[2],
                l=param$0[1],
                accu$1=[0,[0,v,d],bindings_aux(accu$0,r)],
                accu$0=accu$1,
                param$0=l;
               continue}
             return accu$0}}
         function bindings(s){return bindings_aux(0,s)}
         function add_seq(i,m)
          {return fold_left
                   (function(m,param)
                     {var v=param[2],k=param[1];return add(k,v,m)},
                    m,
                    i)}
         function of_seq(i){return add_seq(i,empty)}
         function seq_of_enum(c,param)
          {if(c)
            {var rest=c[4],t=c[3],v=c[2],k=c[1],_tV_=cons_enum(t,rest);
             return [0,[0,k,v],function(_tW_){return seq_of_enum(_tV_,_tW_)}]}
           return 0}
         function to_seq(m)
          {var _tT_=cons_enum(m,0);
           return function(_tU_){return seq_of_enum(_tT_,_tU_)}}
         function to_seq_from(low,m)
          {var m$0=m,c=0;
           for(;;)
            {if(m$0)
              {var
                r=m$0[4],
                d=m$0[3],
                v=m$0[2],
                l=m$0[1],
                n=caml_call2(Ord[1],v,low);
               if(0 !== n)
                {if(0 <= n){var c$0=[0,v,d,r,c],m$0=l,c=c$0;continue}
                 var m$0=r;
                 continue}
               var _tR_=[0,v,d,r,c]}
             else
              var _tR_=c;
             return function(_tS_){return seq_of_enum(_tR_,_tS_)}}}
         return [0,
                 empty,
                 is_empty,
                 mem,
                 add,
                 update,
                 singleton,
                 remove,
                 merge,
                 union,
                 compare,
                 equal,
                 iter,
                 fold,
                 for_all,
                 exists,
                 filter,
                 partition,
                 cardinal,
                 bindings,
                 min_binding,
                 min_binding_opt,
                 max_binding,
                 max_binding_opt,
                 min_binding,
                 min_binding_opt,
                 split,
                 find,
                 find_opt,
                 find_first,
                 find_first_opt,
                 find_last,
                 find_last_opt,
                 map,
                 mapi,
                 to_seq,
                 to_seq_from,
                 add_seq,
                 of_seq]}];
    caml_register_global(743,Stdlib_map,"Stdlib__map");
    var Empty=[248,cst_Stdlib_Stack_Empty,caml_fresh_oo_id(0)];
    function create$0(param){return [0,0,0]}
    function clear(s){s[1] = 0;s[2] = 0;return 0}
    function copy$3(s){return [0,s[1],s[2]]}
    function push(x,s){s[1] = [0,x,s[1]];s[2] = s[2] + 1 | 0;return 0}
    function pop(s)
     {var _tP_=s[1];
      if(_tP_)
       {var tl=_tP_[2],hd=_tP_[1];s[1] = tl;s[2] = s[2] - 1 | 0;return hd}
      throw Empty}
    function pop_opt(s)
     {var _tO_=s[1];
      if(_tO_)
       {var tl=_tO_[2],hd=_tO_[1];s[1] = tl;s[2] = s[2] - 1 | 0;return [0,hd]}
      return 0}
    function top(s)
     {var _tN_=s[1];if(_tN_){var hd=_tN_[1];return hd}throw Empty}
    function top_opt(s)
     {var _tM_=s[1];if(_tM_){var hd=_tM_[1];return [0,hd]}return 0}
    function is_empty(s){return 0 === s[1]?1:0}
    function length$1(s){return s[2]}
    function iter$7(f,s){return iter$2(f,s[1])}
    function fold$1(f,acc,s){return fold_left$0(f,acc,s[1])}
    function to_seq$6(s){return to_seq$1(s[1])}
    function add_seq(q,i){return iter(function(x){return push(x,q)},i)}
    function of_seq$4(g){var s=create$0(0);add_seq(s,g);return s}
    var
     Stdlib_stack=
      [0,
       Empty,
       create$0,
       push,
       pop,
       pop_opt,
       top,
       top_opt,
       clear,
       copy$3,
       is_empty,
       length$1,
       iter$7,
       fold$1,
       to_seq$6,
       add_seq,
       of_seq$4];
    caml_register_global(744,Stdlib_stack,"Stdlib__stack");
    var Empty$0=[248,cst_Stdlib_Queue_Empty,caml_fresh_oo_id(0)];
    function create$1(param){return [0,0,0,0]}
    function clear$0(q){q[1] = 0;q[2] = 0;q[3] = 0;return 0}
    function add(x,q)
     {var cell=[0,x,0],_tL_=q[3];
      return _tL_
              ?(q[1] = q[1] + 1 | 0,_tL_[2] = cell,q[3] = cell,0)
              :(q[1] = 1,q[2] = cell,q[3] = cell,0)}
    function peek(q)
     {var _tK_=q[2];if(_tK_){var content=_tK_[1];return content}throw Empty$0}
    function peek_opt(q)
     {var _tJ_=q[2];if(_tJ_){var content=_tJ_[1];return [0,content]}return 0}
    function take(q)
     {var _tG_=q[2];
      if(_tG_)
       {var _tH_=_tG_[1],_tI_=_tG_[2];
        return _tI_?(q[1] = q[1] - 1 | 0,q[2] = _tI_,_tH_):(clear$0(q),_tH_)}
      throw Empty$0}
    function take_opt(q)
     {var _tD_=q[2];
      if(_tD_)
       {var _tE_=_tD_[1],_tF_=_tD_[2];
        return _tF_
                ?(q[1] = q[1] - 1 | 0,q[2] = _tF_,[0,_tE_])
                :(clear$0(q),[0,_tE_])}
      return 0}
    function copy$4(q)
     {var q_res=[0,q[1],0,0],prev=0,cell=q[2];
      for(;;)
       {if(cell)
         {var content=cell[1],next=cell[2],res=[0,content,0];
          if(prev)prev[2] = res;else q_res[2] = res;
          var prev=res,cell=next;
          continue}
        q_res[3] = prev;
        return q_res}}
    function is_empty$0(q){return 0 === q[1]?1:0}
    function length$2(q){return q[1]}
    function iter$8(f,q)
     {var cell=q[2];
      for(;;)
       {if(cell)
         {var content=cell[1],next=cell[2];
          caml_call1(f,content);
          var cell=next;
          continue}
        return 0}}
    function fold$2(f,accu$1,q)
     {var accu=accu$1,cell=q[2];
      for(;;)
       {if(cell)
         {var
           content=cell[1],
           next=cell[2],
           accu$0=caml_call2(f,accu,content),
           accu=accu$0,
           cell=next;
          continue}
        return accu}}
    function transfer(q1,q2)
     {var _tB_=0 < q1[1]?1:0;
      if(_tB_)
       {var _tC_=q2[3];
        return _tC_
                ?(q2[1]
                  =
                  q2[1]
                  +
                  q1[1]
                  |
                  0,
                  _tC_[2]
                  =
                  q1[2],
                  q2[3]
                  =
                  q1[3],
                  clear$0(q1))
                :(q2[1] = q1[1],q2[2] = q1[2],q2[3] = q1[3],clear$0(q1))}
      return _tB_}
    function to_seq$7(q)
     {function aux(c,param)
       {if(c)
         {var x=c[1],next=c[2];
          return [0,x,function(_tA_){return aux(next,_tA_)}]}
        return 0}
      var _ty_=q[2];
      return function(_tz_){return aux(_ty_,_tz_)}}
    function add_seq$0(q,i){return iter(function(x){return add(x,q)},i)}
    function of_seq$5(g){var q=create$1(0);add_seq$0(q,g);return q}
    var
     Stdlib_queue=
      [0,
       Empty$0,
       create$1,
       add,
       add,
       take,
       take_opt,
       take,
       peek,
       peek_opt,
       peek,
       clear$0,
       copy$4,
       is_empty$0,
       length$2,
       iter$8,
       fold$2,
       transfer,
       to_seq$7,
       add_seq$0,
       of_seq$5];
    caml_register_global(745,Stdlib_queue,"Stdlib__queue");
    var Undefined=[248,cst_CamlinternalLazy_Undefined,caml_fresh_oo_id(0)];
    function raise_undefined(param){throw Undefined}
    function force_lazy_block(blk)
     {var closure=blk[1];
      blk[1] = raise_undefined;
      try
       {var result=caml_call1(closure,0);
        blk[1] = result;
        caml_obj_set_tag(blk,250);
        return result}
      catch(e)
       {e = caml_wrap_exception(e);blk[1] = function(param){throw e};throw e}}
    function force_val_lazy_block(blk)
     {var closure=blk[1];
      blk[1] = raise_undefined;
      var result=caml_call1(closure,0);
      blk[1] = result;
      caml_obj_set_tag(blk,250);
      return result}
    function force(lzv)
     {var t=caml_obj_tag(lzv);
      return t === 250?lzv[1]:t !== 246?lzv:force_lazy_block(lzv)}
    function force_val(lzv)
     {var t=caml_obj_tag(lzv);
      return t === 250?lzv[1]:t !== 246?lzv:force_val_lazy_block(lzv)}
    var
     CamlinternalLazy=
      [0,Undefined,force_lazy_block,force_val_lazy_block,force,force_val];
    caml_register_global(746,CamlinternalLazy,"CamlinternalLazy");
    function from_fun(f){var x=caml_obj_block(246,1);x[1] = f;return x}
    function from_val(v)
     {var t=caml_obj_tag(v);
      if(t !== 250 && t !== 246 && t !== 253)return v;
      return runtime.caml_lazy_make_forward(v)}
    function is_val(l){return caml_obj_tag(l) !== 246?1:0}
    var
     Stdlib_lazy=
      [0,
       Undefined,
       force_val,
       from_fun,
       from_val,
       is_val,
       from_fun,
       from_val,
       is_val];
    caml_register_global(747,Stdlib_lazy,"Stdlib__lazy");
    var
     Failure$0=[248,cst_Stdlib_Stream_Failure,caml_fresh_oo_id(0)],
     Error=[248,cst_Stdlib_Stream_Error,caml_fresh_oo_id(0)];
    function count(param)
     {if(param){var match=param[1],count=match[1];return count}return 0}
    function data(param)
     {if(param){var match=param[1],data=match[2];return data}return 0}
    function fill_buff(b)
     {b[3] = input(b[1],b[2],0,caml_ml_bytes_length(b[2]));b[4] = 0;return 0}
    function get_data(count,d)
     {var d$0=d;
      for(;;)
       {if(typeof d$0 !== "number")
         switch(d$0[0])
          {case 1:
            var d2=d$0[2],d1=d$0[1],match=get_data(count,d1);
            if(typeof match === "number")
             {var d$0=d2;continue}
            else
             {if(0 === match[0])
               {var d11=match[2],a=match[1];return [0,a,[1,d11,d2]]}
              throw [0,Assert_failure,_P_]}
           case 2:
            var
             f=d$0[1],
             _tu_=caml_obj_tag(f),
             d$1=250 === _tu_?f[1]:246 === _tu_?force_lazy_block(f):f,
             d$0=d$1;
            continue;
           case 3:
            var _tv_=d$0[1],_tw_=_tv_[1];
            if(_tw_)
             {var _tx_=_tw_[1];
              if(_tx_){var a$0=_tx_[1];_tv_[1] = 0;return [0,a$0,d$0]}
              return 0}
            var match$0=caml_call1(_tv_[2],count);
            if(match$0){var a$1=match$0[1];return [0,a$1,d$0]}
            _tv_[1] = _Q_;
            return 0;
           case 4:
            var b=d$0[1];
            if(b[3] <= b[4])fill_buff(b);
            if(0 === b[3])return 0;
            var r=caml_bytes_unsafe_get(b[2],b[4]);
            b[4] = b[4] + 1 | 0;
            return [0,r,d$0]
           }
        return d$0}}
    function peek_data(s)
     {for(;;)
       {var _tp_=s[2];
        if(typeof _tp_ === "number")
         return 0;
        else
         switch(_tp_[0])
          {case 0:var a=_tp_[1];return [0,a];
           case 1:
            var d=get_data(s[1],s[2]);
            if(typeof d === "number")
             return 0;
            else
             {if(0 === d[0]){var a$0=d[1];s[2] = d;return [0,a$0]}
              throw [0,Assert_failure,_R_]}
           case 2:
            var
             f=_tp_[1],
             _tq_=caml_obj_tag(f),
             _tr_=250 === _tq_?f[1]:246 === _tq_?force_lazy_block(f):f;
            s[2] = _tr_;
            continue;
           case 3:
            var _ts_=_tp_[1],_tt_=_ts_[1];
            if(_tt_){var a$1=_tt_[1];return a$1}
            var x=caml_call1(_ts_[2],s[1]);
            _ts_[1] = [0,x];
            return x;
           default:
            var b=_tp_[1];
            if(b[3] <= b[4])fill_buff(b);
            return 0 === b[3]
                    ?(s[2] = 0,0)
                    :[0,caml_bytes_unsafe_get(b[2],b[4])]}}}
    function peek$0(param)
     {if(param){var s=param[1];return peek_data(s)}return 0}
    function junk_data(s)
     {for(;;)
       {var _tn_=s[2];
        if(typeof _tn_ !== "number")
         switch(_tn_[0])
          {case 0:var d=_tn_[2];s[1] = s[1] + 1 | 0;s[2] = d;return 0;
           case 3:
            var _to_=_tn_[1];
            if(_to_[1]){s[1] = s[1] + 1 | 0;_to_[1] = 0;return 0}
            break;
           case 4:
            var b=_tn_[1];
            if(b[3] <= b[4])fill_buff(b);
            return 0 === b[3]
                    ?(s[2] = 0,0)
                    :(s[1] = s[1] + 1 | 0,b[4] = b[4] + 1 | 0,0)
           }
        var match=peek_data(s);
        if(match)continue;
        return 0}}
    function junk(param)
     {if(param){var data=param[1];return junk_data(data)}return 0}
    function nget_data(n,s)
     {if(0 < n)
       {var match=peek_data(s);
        if(match)
         {var a=match[1];
          junk_data(s);
          var
           match$0=nget_data(n - 1 | 0,s),
           k=match$0[3],
           d=match$0[2],
           al=match$0[1];
          return [0,[0,a,al],[0,a,d],k + 1 | 0]}
        return [0,0,s[2],0]}
      return [0,0,s[2],0]}
    function npeek(n,param)
     {if(param)
       {var
         d$0=param[1],
         match=nget_data(n,d$0),
         len=match[3],
         d=match[2],
         al=match[1];
        d$0[1] = d$0[1] - len | 0;
        d$0[2] = d;
        return al}
      return 0}
    function next(s)
     {var match=peek$0(s);
      if(match){var a=match[1];junk(s);return a}
      throw Failure$0}
    function empty$1(s){var match=peek$0(s);if(match)throw Failure$0;return 0}
    function iter$9(f,strm)
     {for(;;)
       {var match=peek$0(strm);
        if(match){var a=match[1];junk(strm);caml_call1(f,a);continue}
        return 0}}
    function from(f){return [0,[0,0,[3,[0,0,f]]]]}
    function of_list$1(l)
     {var _tm_=0;
      return [0,[0,0,fold_right(function(x,l){return [0,x,l]},l,_tm_)]]}
    function of_string$0(s)
     {var count=[0,0];
      return from
              (function(param)
                {var c=count[1];
                 return c < caml_ml_string_length(s)
                         ?(count[1]++,[0,caml_string_get(s,c)])
                         :0})}
    function of_bytes(s)
     {var count=[0,0];
      return from
              (function(param)
                {var c=count[1];
                 return c < caml_ml_bytes_length(s)
                         ?(count[1]++,[0,caml_bytes_get(s,c)])
                         :0})}
    function of_channel(ic)
     {return [0,[0,0,[4,[0,ic,caml_create_bytes(4096),0,0]]]]}
    function iapp(i,s){var _tl_=data(s);return [0,[0,0,[1,data(i),_tl_]]]}
    function icons(i,s){return [0,[0,0,[0,i,data(s)]]]}
    function ising(i){return [0,[0,0,[0,i,0]]]}
    function lapp(f,s)
     {return [0,
              [0,
               0,
               [2,
                [246,
                 function(_tj_)
                  {var _tk_=data(s);return [1,data(caml_call1(f,0)),_tk_]}]]]]}
    function lcons(f,s)
     {return [0,
              [0,
               0,
               [2,
                [246,
                 function(_th_)
                  {var _ti_=data(s);return [0,caml_call1(f,0),_ti_]}]]]]}
    function lsing(f)
     {return [0,[0,0,[2,[246,function(_tg_){return [0,caml_call1(f,0),0]}]]]]}
    var sempty=0;
    function slazy(f)
     {return [0,[0,0,[2,[246,function(_tf_){return data(caml_call1(f,0))}]]]]}
    function dump_data(f,param)
     {if(typeof param === "number")
       return print_string(cst_Sempty);
      else
       switch(param[0])
        {case 0:
          var d=param[2],a=param[1];
          print_string(cst_Scons);
          caml_call1(f,a);
          print_string(cst$7);
          dump_data(f,d);
          return print_string(cst$8);
         case 1:
          var d2=param[2],d1=param[1];
          print_string(cst_Sapp);
          dump_data(f,d1);
          print_string(cst$9);
          dump_data(f,d2);
          return print_string(cst$10);
         case 2:return print_string(cst_Slazy);
         case 3:return print_string(cst_Sgen);
         default:return print_string(cst_Sbuffio)}}
    function dump(f,s)
     {print_string(cst_count);
      print_int(count(s));
      print_string(cst_data);
      dump_data(f,data(s));
      print_string(cst$6);
      return print_newline(0)}
    var
     Stdlib_stream=
      [0,
       Failure$0,
       Error,
       from,
       of_list$1,
       of_string$0,
       of_bytes,
       of_channel,
       iter$9,
       next,
       empty$1,
       peek$0,
       junk,
       count,
       npeek,
       iapp,
       icons,
       ising,
       lapp,
       lcons,
       lsing,
       sempty,
       slazy,
       dump];
    caml_register_global(748,Stdlib_stream,"Stdlib__stream");
    function create$2(n)
     {var
       n$0=1 <= n?n:1,
       n$1=max_string_length < n$0?max_string_length:n$0,
       s=caml_create_bytes(n$1);
      return [0,s,0,n$1,s]}
    function contents(b){return sub_string(b[1],0,b[2])}
    function to_bytes(b){return sub(b[1],0,b[2])}
    function sub$3(b,ofs,len)
     {if(0 <= ofs && 0 <= len && ! ((b[2] - len | 0) < ofs))
       return sub_string(b[1],ofs,len);
      return invalid_arg(cst_Buffer_sub)}
    function blit$3(src,srcoff,dst,dstoff,len)
     {if
       (0
        <=
        len
        &&
        0
        <=
        srcoff
        &&
        !
        ((src[2] - len | 0) < srcoff)
        &&
        0
        <=
        dstoff
        &&
        !
        ((caml_ml_bytes_length(dst) - len | 0) < dstoff))
       return caml_blit_bytes(src[1],srcoff,dst,dstoff,len);
      return invalid_arg(cst_Buffer_blit)}
    function nth$0(b,ofs)
     {if(0 <= ofs && ! (b[2] <= ofs))return caml_bytes_unsafe_get(b[1],ofs);
      return invalid_arg(cst_Buffer_nth)}
    function length$3(b){return b[2]}
    function clear$1(b){b[2] = 0;return 0}
    function reset(b)
     {b[2] = 0;b[1] = b[4];b[3] = caml_ml_bytes_length(b[1]);return 0}
    function resize(b,more)
     {var len=b[3],new_len=[0,len];
      for(;;)
       {if(new_len[1] < (b[2] + more | 0))
         {new_len[1] = 2 * new_len[1] | 0;continue}
        if(max_string_length < new_len[1])
         if((b[2] + more | 0) <= max_string_length)
          new_len[1] = max_string_length;
         else
          failwith(cst_Buffer_add_cannot_grow_buf);
        var new_buffer=caml_create_bytes(new_len[1]);
        blit(b[1],0,new_buffer,0,b[2]);
        b[1] = new_buffer;
        b[3] = new_len[1];
        return 0}}
    function add_char(b,c)
     {var pos=b[2];
      if(b[3] <= pos)resize(b,1);
      caml_bytes_unsafe_set(b[1],pos,c);
      b[2] = pos + 1 | 0;
      return 0}
    function add_utf_8_uchar(b,u)
     {if(0 <= u)
       {if(127 < u)
         {if(2047 < u)
           {if(65535 < u)
             {if(1114111 < u)throw [0,Assert_failure,_S_];
              var pos=b[2];
              if(b[3] < (pos + 4 | 0))resize(b,4);
              caml_bytes_unsafe_set(b[1],pos,240 | u >>> 18 | 0);
              caml_bytes_unsafe_set
               (b[1],pos + 1 | 0,128 | (u >>> 12 | 0) & 63);
              caml_bytes_unsafe_set(b[1],pos + 2 | 0,128 | (u >>> 6 | 0) & 63);
              caml_bytes_unsafe_set(b[1],pos + 3 | 0,128 | u & 63);
              b[2] = pos + 4 | 0;
              return 0}
            var pos$0=b[2];
            if(b[3] < (pos$0 + 3 | 0))resize(b,3);
            caml_bytes_unsafe_set(b[1],pos$0,224 | u >>> 12 | 0);
            caml_bytes_unsafe_set(b[1],pos$0 + 1 | 0,128 | (u >>> 6 | 0) & 63);
            caml_bytes_unsafe_set(b[1],pos$0 + 2 | 0,128 | u & 63);
            b[2] = pos$0 + 3 | 0;
            return 0}
          var pos$1=b[2];
          if(b[3] < (pos$1 + 2 | 0))resize(b,2);
          caml_bytes_unsafe_set(b[1],pos$1,192 | u >>> 6 | 0);
          caml_bytes_unsafe_set(b[1],pos$1 + 1 | 0,128 | u & 63);
          b[2] = pos$1 + 2 | 0;
          return 0}
        return add_char(b,u)}
      throw [0,Assert_failure,_T_]}
    function add_utf_16be_uchar(b,u)
     {if(0 <= u)
       {if(65535 < u)
         {if(1114111 < u)throw [0,Assert_failure,_U_];
          var
           u$0=u - 65536 | 0,
           hi=55296 | u$0 >>> 10 | 0,
           lo=56320 | u$0 & 1023,
           pos=b[2];
          if(b[3] < (pos + 4 | 0))resize(b,4);
          caml_bytes_unsafe_set(b[1],pos,hi >>> 8 | 0);
          caml_bytes_unsafe_set(b[1],pos + 1 | 0,hi & 255);
          caml_bytes_unsafe_set(b[1],pos + 2 | 0,lo >>> 8 | 0);
          caml_bytes_unsafe_set(b[1],pos + 3 | 0,lo & 255);
          b[2] = pos + 4 | 0;
          return 0}
        var pos$0=b[2];
        if(b[3] < (pos$0 + 2 | 0))resize(b,2);
        caml_bytes_unsafe_set(b[1],pos$0,u >>> 8 | 0);
        caml_bytes_unsafe_set(b[1],pos$0 + 1 | 0,u & 255);
        b[2] = pos$0 + 2 | 0;
        return 0}
      throw [0,Assert_failure,_V_]}
    function add_utf_16le_uchar(b,u)
     {if(0 <= u)
       {if(65535 < u)
         {if(1114111 < u)throw [0,Assert_failure,_W_];
          var
           u$0=u - 65536 | 0,
           hi=55296 | u$0 >>> 10 | 0,
           lo=56320 | u$0 & 1023,
           pos=b[2];
          if(b[3] < (pos + 4 | 0))resize(b,4);
          caml_bytes_unsafe_set(b[1],pos,hi & 255);
          caml_bytes_unsafe_set(b[1],pos + 1 | 0,hi >>> 8 | 0);
          caml_bytes_unsafe_set(b[1],pos + 2 | 0,lo & 255);
          caml_bytes_unsafe_set(b[1],pos + 3 | 0,lo >>> 8 | 0);
          b[2] = pos + 4 | 0;
          return 0}
        var pos$0=b[2];
        if(b[3] < (pos$0 + 2 | 0))resize(b,2);
        caml_bytes_unsafe_set(b[1],pos$0,u & 255);
        caml_bytes_unsafe_set(b[1],pos$0 + 1 | 0,u >>> 8 | 0);
        b[2] = pos$0 + 2 | 0;
        return 0}
      throw [0,Assert_failure,_X_]}
    function add_substring(b,s,offset,len)
     {var _tc_=offset < 0?1:0;
      if(_tc_)
       var _td_=_tc_;
      else
       var
        _te_=len < 0?1:0,
        _td_=_te_ || ((caml_ml_string_length(s) - len | 0) < offset?1:0);
      if(_td_)invalid_arg(cst_Buffer_add_substring_add_s);
      var new_position=b[2] + len | 0;
      if(b[3] < new_position)resize(b,len);
      blit$0(s,offset,b[1],b[2],len);
      b[2] = new_position;
      return 0}
    function add_subbytes(b,s,offset,len)
     {return add_substring(b,caml_string_of_bytes(s),offset,len)}
    function add_string(b,s)
     {var len=caml_ml_string_length(s),new_position=b[2] + len | 0;
      if(b[3] < new_position)resize(b,len);
      blit$0(s,0,b[1],b[2],len);
      b[2] = new_position;
      return 0}
    function add_bytes(b,s){return add_string(b,caml_string_of_bytes(s))}
    function add_buffer(b,bs){return add_subbytes(b,bs[1],0,bs[2])}
    function add_channel(b,ic,len$1)
     {var _ta_=len$1 < 0?1:0,_tb_=_ta_ || (max_string_length < len$1?1:0);
      if(_tb_)invalid_arg(cst_Buffer_add_channel);
      if(b[3] < (b[2] + len$1 | 0))resize(b,len$1);
      var len=len$1;
      for(;;)
       {var _s$_=0 < len?1:0;
        if(_s$_)
         {var n=input(ic,b[1],b[2],len);
          b[2] = b[2] + n | 0;
          if(0 === n)throw End_of_file;
          var len$0=len - n | 0,len=len$0;
          continue}
        return _s$_}}
    function output_buffer(oc,b){return output(oc,b[1],0,b[2])}
    function add_substitute(b,f,s)
     {var lim$1=caml_ml_string_length(s),previous=32,i$7=0;
      for(;;)
       {if(i$7 < lim$1)
         {var current=caml_string_get(s,i$7);
          if(36 === current)
           {if(92 === previous)
             {add_char(b,current);
              var i$8=i$7 + 1 | 0,previous=32,i$7=i$8;
              continue}
            var start=i$7 + 1 | 0;
            if(lim$1 <= start)throw Not_found;
            var opening=caml_string_get(s,start),switch$0=0;
            if(40 !== opening && 123 !== opening)
             {var i$6=start + 1 | 0,lim$0=caml_ml_string_length(s),i$3=i$6;
              for(;;)
               {if(lim$0 <= i$3)
                 var stop=lim$0;
                else
                 {var match=caml_string_get(s,i$3),switch$1=0;
                  if(91 <= match)
                   {if(97 <= match)
                     {if(! (123 <= match))switch$1 = 1}
                    else
                     if(95 === match)switch$1 = 1}
                  else
                   if(58 <= match)
                    {if(65 <= match)switch$1 = 1}
                   else
                    if(48 <= match)switch$1 = 1;
                  if(switch$1){var i$4=i$3 + 1 | 0,i$3=i$4;continue}
                  var stop=i$3}
                var match$0=[0,sub$0(s,start,stop - start | 0),stop];
                switch$0 = 1;
                break}}
            if(! switch$0)
             {var i$5=start + 1 | 0,k$2=0;
              if(40 === opening)
               var _s9_=41;
              else
               {if(123 !== opening)throw [0,Assert_failure,_Y_];var _s9_=125}
              var lim=caml_ml_string_length(s),k=k$2,i=i$5;
              for(;;)
               {if(lim <= i)throw Not_found;
                if(caml_string_get(s,i) === opening)
                 {var i$0=i + 1 | 0,k$0=k + 1 | 0,k=k$0,i=i$0;continue}
                if(caml_string_get(s,i) !== _s9_)
                 {var i$2=i + 1 | 0,i=i$2;continue}
                if(0 !== k)
                 {var i$1=i + 1 | 0,k$1=k - 1 | 0,k=k$1,i=i$1;continue}
                var
                 match$0=
                  [0,sub$0(s,i$5,(i - start | 0) - 1 | 0),i + 1 | 0];
                break}}
            var next_i=match$0[2],ident=match$0[1];
            add_string(b,caml_call1(f,ident));
            var previous=32,i$7=next_i;
            continue}
          if(92 === previous)
           {add_char(b,92);
            add_char(b,current);
            var i$9=i$7 + 1 | 0,previous=32,i$7=i$9;
            continue}
          if(92 === current)
           {var i$10=i$7 + 1 | 0,previous=current,i$7=i$10;continue}
          add_char(b,current);
          var i$11=i$7 + 1 | 0,previous=current,i$7=i$11;
          continue}
        var _s__=92 === previous?1:0;
        return _s__?add_char(b,previous):_s__}}
    function truncate(b,len)
     {if(0 <= len && ! (b[2] < len)){b[2] = len;return 0}
      return invalid_arg(cst_Buffer_truncate)}
    function to_seq$8(b)
     {function aux(i,param)
       {if(b[2] <= i)return 0;
        var x=caml_bytes_get(b[1],i),_s7_=i + 1 | 0;
        return [0,x,function(_s8_){return aux(_s7_,_s8_)}]}
      var _s5_=0;
      return function(_s6_){return aux(_s5_,_s6_)}}
    function to_seqi$3(b)
     {function aux(i,param)
       {if(b[2] <= i)return 0;
        var x=caml_bytes_get(b[1],i),_s3_=i + 1 | 0;
        return [0,[0,i,x],function(_s4_){return aux(_s3_,_s4_)}]}
      var _s1_=0;
      return function(_s2_){return aux(_s1_,_s2_)}}
    function add_seq$1(b,seq)
     {return iter(function(_s0_){return add_char(b,_s0_)},seq)}
    function of_seq$6(i){var b=create$2(32);add_seq$1(b,i);return b}
    function add_int8(b,x)
     {var new_position=b[2] + 1 | 0;
      if(b[3] < new_position)resize(b,1);
      caml_bytes_unsafe_set(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int16_ne(b,x)
     {var new_position=b[2] + 2 | 0;
      if(b[3] < new_position)resize(b,2);
      caml_bytes_set16(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int32_ne(b,x)
     {var new_position=b[2] + 4 | 0;
      if(b[3] < new_position)resize(b,4);
      caml_bytes_set32(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int64_ne(b,x)
     {var new_position=b[2] + 8 | 0;
      if(b[3] < new_position)resize(b,8);
      caml_bytes_set64(b[1],b[2],x);
      b[2] = new_position;
      return 0}
    function add_int16_le(b,x){return add_int16_ne(b,x)}
    function add_int16_be(b,x)
     {var x$0=caml_bswap16(x);return add_int16_ne(b,x$0)}
    function add_int32_le(b,x){return add_int32_ne(b,x)}
    function add_int32_be(b,x)
     {var x$0=caml_int32_bswap(x);return add_int32_ne(b,x$0)}
    function add_int64_le(b,x){return add_int64_ne(b,x)}
    function add_int64_be(b,x)
     {var x$0=caml_int64_bswap(x);return add_int64_ne(b,x$0)}
    var
     Stdlib_buffer=
      [0,
       create$2,
       contents,
       to_bytes,
       sub$3,
       blit$3,
       nth$0,
       length$3,
       clear$1,
       reset,
       add_char,
       add_utf_8_uchar,
       add_utf_16le_uchar,
       add_utf_16be_uchar,
       add_string,
       add_bytes,
       add_substring,
       add_subbytes,
       add_substitute,
       add_buffer,
       add_channel,
       output_buffer,
       truncate,
       to_seq$8,
       to_seqi$3,
       add_seq$1,
       of_seq$6,
       add_int8,
       add_int8,
       add_int16_ne,
       add_int16_be,
       add_int16_le,
       add_int16_ne,
       add_int16_be,
       add_int16_le,
       add_int32_ne,
       add_int32_be,
       add_int32_le,
       add_int64_ne,
       add_int64_be,
       add_int64_le];
    caml_register_global(749,Stdlib_buffer,"Stdlib__buffer");
    function create_char_set(param){return make(32,0)}
    function add_in_char_set(char_set,c)
     {var str_ind=c >>> 3 | 0,mask=1 << (c & 7);
      return caml_bytes_set
              (char_set,
               str_ind,
               char_of_int(caml_bytes_get(char_set,str_ind) | mask))}
    function freeze_char_set(char_set){return to_string$1(char_set)}
    function rev_char_set(char_set)
     {var char_set$0=create_char_set(0),i=0;
      for(;;)
       {caml_bytes_set
         (char_set$0,i,char_of_int(caml_string_get(char_set,i) ^ 255));
        var _sZ_=i + 1 | 0;
        if(31 !== i){var i=_sZ_;continue}
        return caml_string_of_bytes(char_set$0)}}
    function is_in_char_set(char_set,c)
     {var str_ind=c >>> 3 | 0,mask=1 << (c & 7);
      return 0 !== (caml_string_get(char_set,str_ind) & mask)?1:0}
    function pad_of_pad_opt(pad_opt)
     {if(pad_opt){var width=pad_opt[1];return [0,1,width]}return 0}
    function param_format_of_ignored_format(ign,fmt)
     {if(typeof ign === "number")
       switch(ign)
        {case 0:return [0,[0,fmt]];
         case 1:return [0,[1,fmt]];
         case 2:return [0,[19,fmt]];
         default:return [0,[22,fmt]]}
      else
       switch(ign[0])
        {case 0:var pad_opt=ign[1];return [0,[2,pad_of_pad_opt(pad_opt),fmt]];
         case 1:
          var pad_opt$0=ign[1];return [0,[3,pad_of_pad_opt(pad_opt$0),fmt]];
         case 2:
          var pad_opt$1=ign[2],iconv=ign[1];
          return [0,[4,iconv,pad_of_pad_opt(pad_opt$1),0,fmt]];
         case 3:
          var pad_opt$2=ign[2],iconv$0=ign[1];
          return [0,[5,iconv$0,pad_of_pad_opt(pad_opt$2),0,fmt]];
         case 4:
          var pad_opt$3=ign[2],iconv$1=ign[1];
          return [0,[6,iconv$1,pad_of_pad_opt(pad_opt$3),0,fmt]];
         case 5:
          var pad_opt$4=ign[2],iconv$2=ign[1];
          return [0,[7,iconv$2,pad_of_pad_opt(pad_opt$4),0,fmt]];
         case 6:
          var prec_opt=ign[2],pad_opt$5=ign[1];
          if(prec_opt)var ndec=prec_opt[1],_sY_=[0,ndec];else var _sY_=0;
          return [0,[8,0,pad_of_pad_opt(pad_opt$5),_sY_,fmt]];
         case 7:
          var pad_opt$6=ign[1];return [0,[9,pad_of_pad_opt(pad_opt$6),fmt]];
         case 8:
          var fmtty=ign[2],pad_opt$7=ign[1];
          return [0,[13,pad_opt$7,fmtty,fmt]];
         case 9:
          var fmtty$0=ign[2],pad_opt$8=ign[1];
          return [0,[14,pad_opt$8,fmtty$0,fmt]];
         case 10:
          var char_set=ign[2],width_opt=ign[1];
          return [0,[20,width_opt,char_set,fmt]];
         default:var counter=ign[1];return [0,[21,counter,fmt]]}}
    var default_float_precision=-6;
    function buffer_create(init_size)
     {return [0,0,caml_create_bytes(init_size)]}
    function buffer_check_size(buf,overhead)
     {var
       len=caml_ml_bytes_length(buf[2]),
       min_len=buf[1] + overhead | 0,
       _sW_=len < min_len?1:0;
      if(_sW_)
       {var
         new_len=max(len * 2 | 0,min_len),
         new_str=caml_create_bytes(new_len);
        blit(buf[2],0,new_str,0,len);
        buf[2] = new_str;
        var _sX_=0}
      else
       var _sX_=_sW_;
      return _sX_}
    function buffer_add_char(buf,c)
     {buffer_check_size(buf,1);
      caml_bytes_set(buf[2],buf[1],c);
      buf[1] = buf[1] + 1 | 0;
      return 0}
    function buffer_add_string(buf,s)
     {var str_len=caml_ml_string_length(s);
      buffer_check_size(buf,str_len);
      blit$0(s,0,buf[2],buf[1],str_len);
      buf[1] = buf[1] + str_len | 0;
      return 0}
    function buffer_contents(buf){return sub_string(buf[2],0,buf[1])}
    function char_of_iconv(iconv)
     {switch(iconv)
       {case 6:
        case 7:return 120;
        case 8:
        case 9:return 88;
        case 10:
        case 11:return 111;
        case 12:
        case 15:return 117;
        case 0:
        case 1:
        case 2:
        case 13:return 100;
        default:return 105}}
    function char_of_fconv(fconv)
     {switch(fconv)
       {case 15:return 70;
        case 0:
        case 1:
        case 2:return 102;
        case 3:
        case 4:
        case 5:return 101;
        case 6:
        case 7:
        case 8:return 69;
        case 9:
        case 10:
        case 11:return 103;
        case 12:
        case 13:
        case 14:return 71;
        case 16:
        case 17:
        case 18:return 104;
        default:return 72}}
    function bprint_padty(buf,padty)
     {switch(padty)
       {case 0:return buffer_add_char(buf,45);
        case 1:return 0;
        default:return buffer_add_char(buf,48)}}
    function bprint_ignored_flag(buf,ign_flag)
     {return ign_flag?buffer_add_char(buf,95):ign_flag}
    function bprint_pad_opt(buf,pad_opt)
     {if(pad_opt)
       {var width=pad_opt[1];
        return buffer_add_string(buf,caml_string_of_jsbytes("" + width))}
      return 0}
    function bprint_padding(buf,pad)
     {if(typeof pad === "number")
       return 0;
      else
       {if(0 === pad[0])
         {var n=pad[2],padty=pad[1];
          bprint_padty(buf,padty);
          return buffer_add_string(buf,caml_string_of_jsbytes("" + n))}
        var padty$0=pad[1];
        bprint_padty(buf,padty$0);
        return buffer_add_char(buf,42)}}
    function bprint_precision(buf,prec)
     {if(typeof prec === "number")
       return 0 === prec?0:buffer_add_string(buf,cst$11);
      var n=prec[1];
      buffer_add_char(buf,46);
      return buffer_add_string(buf,caml_string_of_jsbytes("" + n))}
    function bprint_iconv_flag(buf,iconv)
     {switch(iconv)
       {case 1:
        case 4:return buffer_add_char(buf,43);
        case 2:
        case 5:return buffer_add_char(buf,32);
        case 7:
        case 9:
        case 11:
        case 13:
        case 14:
        case 15:return buffer_add_char(buf,35);
        default:return 0}}
    function bprint_altint_fmt(buf,ign_flag,iconv,pad,prec,c)
     {buffer_add_char(buf,37);
      bprint_ignored_flag(buf,ign_flag);
      bprint_iconv_flag(buf,iconv);
      bprint_padding(buf,pad);
      bprint_precision(buf,prec);
      buffer_add_char(buf,c);
      return buffer_add_char(buf,char_of_iconv(iconv))}
    function bprint_fconv_flag(buf,fconv)
     {switch(fconv)
       {case 1:
        case 4:
        case 7:
        case 10:
        case 13:
        case 17:
        case 20:return buffer_add_char(buf,43);
        case 2:
        case 5:
        case 8:
        case 11:
        case 14:
        case 18:
        case 21:return buffer_add_char(buf,32);
        default:return 0}}
    function string_of_formatting_lit(formatting_lit)
     {if(typeof formatting_lit === "number")
       switch(formatting_lit)
        {case 0:return cst$12;
         case 1:return cst$13;
         case 2:return cst$14;
         case 3:return cst$15;
         case 4:return cst$16;
         case 5:return cst$17;
         default:return cst$18}
      else
       switch(formatting_lit[0])
        {case 0:var str=formatting_lit[1];return str;
         case 1:var str$0=formatting_lit[1];return str$0;
         default:var c=formatting_lit[1];return symbol(cst$19,make$0(1,c))}}
    function string_of_formatting_gen(formatting_gen)
     {if(0 === formatting_gen[0])
       {var match=formatting_gen[1],str=match[2];return str}
      var match$0=formatting_gen[1],str$0=match$0[2];
      return str$0}
    function bprint_char_literal(buf,chr)
     {return 37 === chr?buffer_add_string(buf,cst$20):buffer_add_char(buf,chr)}
    function bprint_string_literal(buf,str)
     {var _sU_=caml_ml_string_length(str) - 1 | 0,_sT_=0;
      if(! (_sU_ < 0))
       {var i=_sT_;
        for(;;)
         {bprint_char_literal(buf,caml_string_get(str,i));
          var _sV_=i + 1 | 0;
          if(_sU_ !== i){var i=_sV_;continue}
          break}}
      return 0}
    function bprint_fmtty(buf,fmtty)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        return 0;
       else
        switch(fmtty$0[0])
         {case 0:
           var rest=fmtty$0[1];
           buffer_add_string(buf,cst_c);
           var fmtty$0=rest;
           continue;
          case 1:
           var rest$0=fmtty$0[1];
           buffer_add_string(buf,cst_s);
           var fmtty$0=rest$0;
           continue;
          case 2:
           var rest$1=fmtty$0[1];
           buffer_add_string(buf,cst_i);
           var fmtty$0=rest$1;
           continue;
          case 3:
           var rest$2=fmtty$0[1];
           buffer_add_string(buf,cst_li);
           var fmtty$0=rest$2;
           continue;
          case 4:
           var rest$3=fmtty$0[1];
           buffer_add_string(buf,cst_ni);
           var fmtty$0=rest$3;
           continue;
          case 5:
           var rest$4=fmtty$0[1];
           buffer_add_string(buf,cst_Li);
           var fmtty$0=rest$4;
           continue;
          case 6:
           var rest$5=fmtty$0[1];
           buffer_add_string(buf,cst_f);
           var fmtty$0=rest$5;
           continue;
          case 7:
           var rest$6=fmtty$0[1];
           buffer_add_string(buf,cst_B);
           var fmtty$0=rest$6;
           continue;
          case 8:
           var rest$7=fmtty$0[2],sub_fmtty=fmtty$0[1];
           buffer_add_string(buf,cst$21);
           bprint_fmtty(buf,sub_fmtty);
           buffer_add_string(buf,cst$22);
           var fmtty$0=rest$7;
           continue;
          case 9:
           var rest$8=fmtty$0[3],sub_fmtty$0=fmtty$0[1];
           buffer_add_string(buf,cst$23);
           bprint_fmtty(buf,sub_fmtty$0);
           buffer_add_string(buf,cst$24);
           var fmtty$0=rest$8;
           continue;
          case 10:
           var rest$9=fmtty$0[1];
           buffer_add_string(buf,cst_a);
           var fmtty$0=rest$9;
           continue;
          case 11:
           var rest$10=fmtty$0[1];
           buffer_add_string(buf,cst_t$0);
           var fmtty$0=rest$10;
           continue;
          case 12:
           var rest$11=fmtty$0[1];
           buffer_add_string(buf,cst$25);
           var fmtty$0=rest$11;
           continue;
          case 13:
           var rest$12=fmtty$0[1];
           buffer_add_string(buf,cst_r$0);
           var fmtty$0=rest$12;
           continue;
          default:
           var rest$13=fmtty$0[1];
           buffer_add_string(buf,cst_r$1);
           var fmtty$0=rest$13;
           continue}}
    function int_of_custom_arity(param)
     {if(param){var x=param[1];return 1 + int_of_custom_arity(x) | 0}return 0}
    function string_of_fmt(fmt$1)
     {var buf=buffer_create(16),fmt=fmt$1,ign_flag=0;
      a:
      for(;;)
       if(typeof fmt === "number")
        return buffer_contents(buf);
       else
        switch(fmt[0])
         {case 0:
           var rest=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,99);
           var fmt=rest,ign_flag=0;
           continue;
          case 1:
           var rest$0=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,67);
           var fmt=rest$0,ign_flag=0;
           continue;
          case 2:
           var rest$1=fmt[2],pad=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_padding(buf,pad);
           buffer_add_char(buf,115);
           var fmt=rest$1,ign_flag=0;
           continue;
          case 3:
           var rest$2=fmt[2],pad$0=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_padding(buf,pad$0);
           buffer_add_char(buf,83);
           var fmt=rest$2,ign_flag=0;
           continue;
          case 4:
           var rest$3=fmt[4],prec=fmt[3],pad$1=fmt[2],iconv=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_iconv_flag(buf,iconv);
           bprint_padding(buf,pad$1);
           bprint_precision(buf,prec);
           buffer_add_char(buf,char_of_iconv(iconv));
           var fmt=rest$3,ign_flag=0;
           continue;
          case 5:
           var rest$4=fmt[4],prec$0=fmt[3],pad$2=fmt[2],iconv$0=fmt[1];
           bprint_altint_fmt(buf,ign_flag,iconv$0,pad$2,prec$0,108);
           var fmt=rest$4,ign_flag=0;
           continue;
          case 6:
           var rest$5=fmt[4],prec$1=fmt[3],pad$3=fmt[2],iconv$1=fmt[1];
           bprint_altint_fmt(buf,ign_flag,iconv$1,pad$3,prec$1,110);
           var fmt=rest$5,ign_flag=0;
           continue;
          case 7:
           var rest$6=fmt[4],prec$2=fmt[3],pad$4=fmt[2],iconv$2=fmt[1];
           bprint_altint_fmt(buf,ign_flag,iconv$2,pad$4,prec$2,76);
           var fmt=rest$6,ign_flag=0;
           continue;
          case 8:
           var rest$7=fmt[4],prec$3=fmt[3],pad$5=fmt[2],fconv=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_fconv_flag(buf,fconv);
           bprint_padding(buf,pad$5);
           bprint_precision(buf,prec$3);
           buffer_add_char(buf,char_of_fconv(fconv));
           var fmt=rest$7,ign_flag=0;
           continue;
          case 9:
           var rest$8=fmt[2],pad$6=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_padding(buf,pad$6);
           buffer_add_char(buf,66);
           var fmt=rest$8,ign_flag=0;
           continue;
          case 10:
           var rest$9=fmt[1];
           buffer_add_string(buf,cst$26);
           var fmt=rest$9;
           continue;
          case 11:
           var rest$10=fmt[2],str=fmt[1];
           bprint_string_literal(buf,str);
           var fmt=rest$10;
           continue;
          case 12:
           var rest$11=fmt[2],chr$0=fmt[1];
           bprint_char_literal(buf,chr$0);
           var fmt=rest$11;
           continue;
          case 13:
           var rest$12=fmt[3],fmtty=fmt[2],pad_opt=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_pad_opt(buf,pad_opt);
           buffer_add_char(buf,123);
           bprint_fmtty(buf,fmtty);
           buffer_add_char(buf,37);
           buffer_add_char(buf,125);
           var fmt=rest$12,ign_flag=0;
           continue;
          case 14:
           var rest$13=fmt[3],fmtty$0=fmt[2],pad_opt$0=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_pad_opt(buf,pad_opt$0);
           buffer_add_char(buf,40);
           bprint_fmtty(buf,fmtty$0);
           buffer_add_char(buf,37);
           buffer_add_char(buf,41);
           var fmt=rest$13,ign_flag=0;
           continue;
          case 15:
           var rest$14=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,97);
           var fmt=rest$14,ign_flag=0;
           continue;
          case 16:
           var rest$15=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,116);
           var fmt=rest$15,ign_flag=0;
           continue;
          case 17:
           var rest$16=fmt[2],fmting_lit=fmt[1];
           bprint_string_literal(buf,string_of_formatting_lit(fmting_lit));
           var fmt=rest$16;
           continue;
          case 18:
           var rest$17=fmt[2],fmting_gen=fmt[1];
           bprint_string_literal(buf,cst$27);
           bprint_string_literal(buf,string_of_formatting_gen(fmting_gen));
           var fmt=rest$17;
           continue;
          case 19:
           var rest$18=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           buffer_add_char(buf,114);
           var fmt=rest$18,ign_flag=0;
           continue;
          case 20:
           var rest$19=fmt[3],char_set=fmt[2],width_opt=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_pad_opt(buf,width_opt);
           var
            print_char=
             function(buf,i)
              {var c=char_of_int(i);
               return 37 === c
                       ?(buffer_add_char(buf,37),buffer_add_char(buf,37))
                       :64 === c
                         ?(buffer_add_char(buf,37),buffer_add_char(buf,64))
                         :buffer_add_char(buf,c)};
           buffer_add_char(buf,91);
           var
            _sJ_=
             is_in_char_set(char_set,0)
              ?(buffer_add_char(buf,94),rev_char_set(char_set))
              :char_set,
            is_alone$0=
             function(_sO_)
              {function is_alone(c)
                {var
                  after=chr(c + 1 | 0),
                  before=chr(c - 1 | 0),
                  _sP_=is_in_char_set(_sO_,c);
                 if(_sP_)
                  var
                   _sQ_=is_in_char_set(_sO_,before),
                   _sR_=_sQ_?is_in_char_set(_sO_,after):_sQ_,
                   _sS_=1 - _sR_;
                 else
                  var _sS_=_sP_;
                 return _sS_}
               return is_alone},
            is_alone=is_alone$0(_sJ_);
           if(is_alone(93))buffer_add_char(buf,93);
           var i=1;
           b:
           for(;;)
            {if(i < 256)
              {if(! is_in_char_set(_sJ_,char_of_int(i)))
                {var i$0=i + 1 | 0,i=i$0;continue}
               var match=char_of_int(i),switcher=match - 45 | 0,switch$0=0;
               if(48 < switcher >>> 0)
                if(210 <= switcher)print_char(buf,255);else switch$0 = 1;
               else
                {var switcher$0=switcher - 1 | 0;
                 if(46 < switcher$0 >>> 0){var i$2=i + 1 | 0,i=i$2;continue}
                 switch$0 = 1}
               if(switch$0)
                {var i$1=i + 1 | 0;
                 if(! is_in_char_set(_sJ_,char_of_int(i$1)))
                  {print_char(buf,i$1 - 1 | 0);
                   var i$6=i$1 + 1 | 0,i=i$6;
                   continue}
                 var
                  match$0=char_of_int(i$1),
                  switcher$1=match$0 - 45 | 0,
                  switch$1=0;
                 if(48 < switcher$1 >>> 0)
                  if(210 <= switcher$1)
                   {print_char(buf,254);print_char(buf,255)}
                  else
                   switch$1 = 1;
                 else
                  {var switcher$2=switcher$1 - 1 | 0;
                   if(46 < switcher$2 >>> 0)
                    {if(! is_in_char_set(_sJ_,char_of_int(i$1 + 1 | 0)))
                      {print_char(buf,i$1 - 1 | 0);
                       var i$5=i$1 + 1 | 0,i=i$5;
                       continue}
                     switch$1 = 1}
                   else
                    switch$1 = 1}
                 if(switch$1)
                  {if(! is_in_char_set(_sJ_,char_of_int(i$1 + 1 | 0)))
                    {print_char(buf,i$1 - 1 | 0);
                     print_char(buf,i$1);
                     var i$4=i$1 + 2 | 0,i=i$4;
                     continue}
                   var j=i$1 + 2 | 0,i$3=i$1 - 1 | 0,j$0=j;
                   for(;;)
                    {if(256 !== j$0 && is_in_char_set(_sJ_,char_of_int(j$0)))
                      {var j$1=j$0 + 1 | 0,j$0=j$1;continue}
                     print_char(buf,i$3);
                     print_char(buf,45);
                     print_char(buf,j$0 - 1 | 0);
                     if(j$0 < 256){var i$7=j$0 + 1 | 0,i=i$7;continue b}
                     break}}}}
             if(is_alone(45))buffer_add_char(buf,45);
             buffer_add_char(buf,93);
             var fmt=rest$19,ign_flag=0;
             continue a}
          case 21:
           var rest$20=fmt[2],counter=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           switch(counter)
            {case 0:var _sK_=108;break;
             case 1:var _sK_=110;break;
             default:var _sK_=78}
           buffer_add_char(buf,_sK_);
           var fmt=rest$20,ign_flag=0;
           continue;
          case 22:
           var rest$21=fmt[1];
           buffer_add_char(buf,37);
           bprint_ignored_flag(buf,ign_flag);
           bprint_string_literal(buf,cst_0c);
           var fmt=rest$21,ign_flag=0;
           continue;
          case 23:
           var
            rest$22=fmt[2],
            ign=fmt[1],
            match$1=param_format_of_ignored_format(ign,rest$22),
            fmt$0=match$1[1],
            fmt=fmt$0,
            ign_flag=1;
           continue;
          default:
           var
            rest$23=fmt[3],
            arity=fmt[1],
            _sM_=int_of_custom_arity(arity),
            _sL_=1;
           if(! (_sM_ < 1))
            {var i$8=_sL_;
             for(;;)
              {buffer_add_char(buf,37);
               bprint_ignored_flag(buf,ign_flag);
               buffer_add_char(buf,63);
               var _sN_=i$8 + 1 | 0;
               if(_sM_ !== i$8){var i$8=_sN_;continue}
               break}}
           var fmt=rest$23,ign_flag=0;
           continue}}
    function symm(param)
     {if(typeof param === "number")
       return 0;
      else
       switch(param[0])
        {case 0:var rest=param[1];return [0,symm(rest)];
         case 1:var rest$0=param[1];return [1,symm(rest$0)];
         case 2:var rest$1=param[1];return [2,symm(rest$1)];
         case 3:var rest$2=param[1];return [3,symm(rest$2)];
         case 4:var rest$3=param[1];return [4,symm(rest$3)];
         case 5:var rest$4=param[1];return [5,symm(rest$4)];
         case 6:var rest$5=param[1];return [6,symm(rest$5)];
         case 7:var rest$6=param[1];return [7,symm(rest$6)];
         case 8:var rest$7=param[2],ty=param[1];return [8,ty,symm(rest$7)];
         case 9:
          var rest$8=param[3],ty2=param[2],ty1=param[1];
          return [9,ty2,ty1,symm(rest$8)];
         case 10:var rest$9=param[1];return [10,symm(rest$9)];
         case 11:var rest$10=param[1];return [11,symm(rest$10)];
         case 12:var rest$11=param[1];return [12,symm(rest$11)];
         case 13:var rest$12=param[1];return [13,symm(rest$12)];
         default:var rest$13=param[1];return [14,symm(rest$13)]}}
    function trans(ty1,match)
     {var switch$0=0;
      if(typeof ty1 === "number")
       if(typeof match === "number")
        return 0;
       else
        switch(match[0])
         {case 10:break;
          case 11:switch$0 = 1;break;
          case 12:switch$0 = 2;break;
          case 13:switch$0 = 3;break;
          case 14:switch$0 = 4;break;
          case 8:switch$0 = 5;break;
          case 9:switch$0 = 6;break;
          default:throw [0,Assert_failure,_Z_]}
      else
       switch(ty1[0])
        {case 0:
          var switch$1=0,_sq_=ty1[1];
          if(typeof match !== "number")
           switch(match[0])
            {case 0:var rest2=match[1];return [0,trans(_sq_,rest2)];
             case 8:switch$0 = 5;switch$1 = 1;break;
             case 9:switch$0 = 6;switch$1 = 1;break;
             case 10:switch$1 = 1;break;
             case 11:switch$0 = 1;switch$1 = 1;break;
             case 12:switch$0 = 2;switch$1 = 1;break;
             case 13:switch$0 = 3;switch$1 = 1;break;
             case 14:switch$0 = 4;switch$1 = 1;break
             }
          if(! switch$1)switch$0 = 7;
          break;
         case 1:
          var switch$2=0,_sr_=ty1[1];
          if(typeof match !== "number")
           switch(match[0])
            {case 1:var rest2$0=match[1];return [1,trans(_sr_,rest2$0)];
             case 8:switch$0 = 5;switch$2 = 1;break;
             case 9:switch$0 = 6;switch$2 = 1;break;
             case 10:switch$2 = 1;break;
             case 11:switch$0 = 1;switch$2 = 1;break;
             case 12:switch$0 = 2;switch$2 = 1;break;
             case 13:switch$0 = 3;switch$2 = 1;break;
             case 14:switch$0 = 4;switch$2 = 1;break
             }
          if(! switch$2)switch$0 = 7;
          break;
         case 2:
          var switch$3=0,_ss_=ty1[1];
          if(typeof match === "number")
           switch$3 = 1;
          else
           switch(match[0])
            {case 2:var rest2$1=match[1];return [2,trans(_ss_,rest2$1)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$3 = 1}
          if(switch$3)switch$0 = 7;
          break;
         case 3:
          var switch$4=0,_st_=ty1[1];
          if(typeof match === "number")
           switch$4 = 1;
          else
           switch(match[0])
            {case 3:var rest2$2=match[1];return [3,trans(_st_,rest2$2)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$4 = 1}
          if(switch$4)switch$0 = 7;
          break;
         case 4:
          var switch$5=0,_su_=ty1[1];
          if(typeof match === "number")
           switch$5 = 1;
          else
           switch(match[0])
            {case 4:var rest2$3=match[1];return [4,trans(_su_,rest2$3)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$5 = 1}
          if(switch$5)switch$0 = 7;
          break;
         case 5:
          var switch$6=0,_sv_=ty1[1];
          if(typeof match === "number")
           switch$6 = 1;
          else
           switch(match[0])
            {case 5:var rest2$4=match[1];return [5,trans(_sv_,rest2$4)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$6 = 1}
          if(switch$6)switch$0 = 7;
          break;
         case 6:
          var switch$7=0,_sw_=ty1[1];
          if(typeof match === "number")
           switch$7 = 1;
          else
           switch(match[0])
            {case 6:var rest2$5=match[1];return [6,trans(_sw_,rest2$5)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$7 = 1}
          if(switch$7)switch$0 = 7;
          break;
         case 7:
          var switch$8=0,_sx_=ty1[1];
          if(typeof match === "number")
           switch$8 = 1;
          else
           switch(match[0])
            {case 7:var rest2$6=match[1];return [7,trans(_sx_,rest2$6)];
             case 8:switch$0 = 5;break;
             case 9:switch$0 = 6;break;
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$8 = 1}
          if(switch$8)switch$0 = 7;
          break;
         case 8:
          var switch$9=0,_sy_=ty1[2],_sz_=ty1[1];
          if(typeof match === "number")
           switch$9 = 1;
          else
           switch(match[0])
            {case 8:
              var rest2$7=match[2],ty2=match[1],_sA_=trans(_sy_,rest2$7);
              return [8,trans(_sz_,ty2),_sA_];
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$9 = 1}
          if(switch$9)throw [0,Assert_failure,_ag_];
          break;
         case 9:
          var switch$10=0,_sB_=ty1[3],_sC_=ty1[2],_sD_=ty1[1];
          if(typeof match === "number")
           switch$10 = 1;
          else
           switch(match[0])
            {case 8:switch$0 = 5;break;
             case 9:
              var
               rest2$8=match[3],
               ty22=match[2],
               ty21=match[1],
               ty=trans(symm(_sC_),ty21),
               match$0=fmtty_rel_det(ty),
               f4=match$0[4],
               f2=match$0[2];
              caml_call1(f2,0);
              caml_call1(f4,0);
              return [9,_sD_,ty22,trans(_sB_,rest2$8)];
             case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:switch$0 = 4;break;
             default:switch$10 = 1}
          if(switch$10)throw [0,Assert_failure,_ah_];
          break;
         case 10:
          var _sE_=ty1[1];
          if(typeof match !== "number" && 10 === match[0])
           {var rest2$9=match[1];return [10,trans(_sE_,rest2$9)]}
          throw [0,Assert_failure,_ai_];
         case 11:
          var switch$11=0,_sF_=ty1[1];
          if(typeof match === "number")
           switch$11 = 1;
          else
           switch(match[0])
            {case 10:break;
             case 11:var rest2$10=match[1];return [11,trans(_sF_,rest2$10)];
             default:switch$11 = 1}
          if(switch$11)throw [0,Assert_failure,_aj_];
          break;
         case 12:
          var switch$12=0,_sG_=ty1[1];
          if(typeof match === "number")
           switch$12 = 1;
          else
           switch(match[0])
            {case 10:break;
             case 11:switch$0 = 1;break;
             case 12:var rest2$11=match[1];return [12,trans(_sG_,rest2$11)];
             default:switch$12 = 1}
          if(switch$12)throw [0,Assert_failure,_ak_];
          break;
         case 13:
          var switch$13=0,_sH_=ty1[1];
          if(typeof match === "number")
           switch$13 = 1;
          else
           switch(match[0])
            {case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:var rest2$12=match[1];return [13,trans(_sH_,rest2$12)];
             default:switch$13 = 1}
          if(switch$13)throw [0,Assert_failure,_al_];
          break;
         default:
          var switch$14=0,_sI_=ty1[1];
          if(typeof match === "number")
           switch$14 = 1;
          else
           switch(match[0])
            {case 10:break;
             case 11:switch$0 = 1;break;
             case 12:switch$0 = 2;break;
             case 13:switch$0 = 3;break;
             case 14:var rest2$13=match[1];return [14,trans(_sI_,rest2$13)];
             default:switch$14 = 1}
          if(switch$14)throw [0,Assert_failure,_am_]}
      switch(switch$0)
       {case 0:throw [0,Assert_failure,_aa_];
        case 1:throw [0,Assert_failure,_ab_];
        case 2:throw [0,Assert_failure,_ac_];
        case 3:throw [0,Assert_failure,_ad_];
        case 4:throw [0,Assert_failure,_ae_];
        case 5:throw [0,Assert_failure,___];
        case 6:throw [0,Assert_failure,_$_];
        default:throw [0,Assert_failure,_af_]}}
    function fmtty_rel_det(param)
     {if(typeof param === "number")
       {var
         _r4_=function(param){return 0},
         _r5_=function(param){return 0},
         _r6_=function(param){return 0};
        return [0,function(param){return 0},_r6_,_r5_,_r4_]}
      else
       switch(param[0])
        {case 0:
          var
           rest=param[1],
           match=fmtty_rel_det(rest),
           de=match[4],
           ed=match[3],
           af=match[2],
           fa=match[1],
           _r7_=function(param){caml_call1(af,0);return 0};
          return [0,function(param){caml_call1(fa,0);return 0},_r7_,ed,de];
         case 1:
          var
           rest$0=param[1],
           match$0=fmtty_rel_det(rest$0),
           de$0=match$0[4],
           ed$0=match$0[3],
           af$0=match$0[2],
           fa$0=match$0[1],
           _r8_=function(param){caml_call1(af$0,0);return 0};
          return [0,
                  function(param){caml_call1(fa$0,0);return 0},
                  _r8_,
                  ed$0,
                  de$0];
         case 2:
          var
           rest$1=param[1],
           match$1=fmtty_rel_det(rest$1),
           de$1=match$1[4],
           ed$1=match$1[3],
           af$1=match$1[2],
           fa$1=match$1[1],
           _r9_=function(param){caml_call1(af$1,0);return 0};
          return [0,
                  function(param){caml_call1(fa$1,0);return 0},
                  _r9_,
                  ed$1,
                  de$1];
         case 3:
          var
           rest$2=param[1],
           match$2=fmtty_rel_det(rest$2),
           de$2=match$2[4],
           ed$2=match$2[3],
           af$2=match$2[2],
           fa$2=match$2[1],
           _r__=function(param){caml_call1(af$2,0);return 0};
          return [0,
                  function(param){caml_call1(fa$2,0);return 0},
                  _r__,
                  ed$2,
                  de$2];
         case 4:
          var
           rest$3=param[1],
           match$3=fmtty_rel_det(rest$3),
           de$3=match$3[4],
           ed$3=match$3[3],
           af$3=match$3[2],
           fa$3=match$3[1],
           _r$_=function(param){caml_call1(af$3,0);return 0};
          return [0,
                  function(param){caml_call1(fa$3,0);return 0},
                  _r$_,
                  ed$3,
                  de$3];
         case 5:
          var
           rest$4=param[1],
           match$4=fmtty_rel_det(rest$4),
           de$4=match$4[4],
           ed$4=match$4[3],
           af$4=match$4[2],
           fa$4=match$4[1],
           _sa_=function(param){caml_call1(af$4,0);return 0};
          return [0,
                  function(param){caml_call1(fa$4,0);return 0},
                  _sa_,
                  ed$4,
                  de$4];
         case 6:
          var
           rest$5=param[1],
           match$5=fmtty_rel_det(rest$5),
           de$5=match$5[4],
           ed$5=match$5[3],
           af$5=match$5[2],
           fa$5=match$5[1],
           _sb_=function(param){caml_call1(af$5,0);return 0};
          return [0,
                  function(param){caml_call1(fa$5,0);return 0},
                  _sb_,
                  ed$5,
                  de$5];
         case 7:
          var
           rest$6=param[1],
           match$6=fmtty_rel_det(rest$6),
           de$6=match$6[4],
           ed$6=match$6[3],
           af$6=match$6[2],
           fa$6=match$6[1],
           _sc_=function(param){caml_call1(af$6,0);return 0};
          return [0,
                  function(param){caml_call1(fa$6,0);return 0},
                  _sc_,
                  ed$6,
                  de$6];
         case 8:
          var
           rest$7=param[2],
           match$7=fmtty_rel_det(rest$7),
           de$7=match$7[4],
           ed$7=match$7[3],
           af$7=match$7[2],
           fa$7=match$7[1],
           _sd_=function(param){caml_call1(af$7,0);return 0};
          return [0,
                  function(param){caml_call1(fa$7,0);return 0},
                  _sd_,
                  ed$7,
                  de$7];
         case 9:
          var
           rest$8=param[3],
           ty2=param[2],
           ty1=param[1],
           match$8=fmtty_rel_det(rest$8),
           de$8=match$8[4],
           ed$8=match$8[3],
           af$8=match$8[2],
           fa$8=match$8[1],
           ty=trans(symm(ty1),ty2),
           match$9=fmtty_rel_det(ty),
           jd=match$9[4],
           dj=match$9[3],
           ga=match$9[2],
           ag=match$9[1],
           _se_=function(param){caml_call1(jd,0);caml_call1(de$8,0);return 0},
           _sf_=function(param){caml_call1(ed$8,0);caml_call1(dj,0);return 0},
           _sg_=function(param){caml_call1(ga,0);caml_call1(af$8,0);return 0};
          return [0,
                  function(param)
                   {caml_call1(fa$8,0);caml_call1(ag,0);return 0},
                  _sg_,
                  _sf_,
                  _se_];
         case 10:
          var
           rest$9=param[1],
           match$10=fmtty_rel_det(rest$9),
           de$9=match$10[4],
           ed$9=match$10[3],
           af$9=match$10[2],
           fa$9=match$10[1],
           _sh_=function(param){caml_call1(af$9,0);return 0};
          return [0,
                  function(param){caml_call1(fa$9,0);return 0},
                  _sh_,
                  ed$9,
                  de$9];
         case 11:
          var
           rest$10=param[1],
           match$11=fmtty_rel_det(rest$10),
           de$10=match$11[4],
           ed$10=match$11[3],
           af$10=match$11[2],
           fa$10=match$11[1],
           _si_=function(param){caml_call1(af$10,0);return 0};
          return [0,
                  function(param){caml_call1(fa$10,0);return 0},
                  _si_,
                  ed$10,
                  de$10];
         case 12:
          var
           rest$11=param[1],
           match$12=fmtty_rel_det(rest$11),
           de$11=match$12[4],
           ed$11=match$12[3],
           af$11=match$12[2],
           fa$11=match$12[1],
           _sj_=function(param){caml_call1(af$11,0);return 0};
          return [0,
                  function(param){caml_call1(fa$11,0);return 0},
                  _sj_,
                  ed$11,
                  de$11];
         case 13:
          var
           rest$12=param[1],
           match$13=fmtty_rel_det(rest$12),
           de$12=match$13[4],
           ed$12=match$13[3],
           af$12=match$13[2],
           fa$12=match$13[1],
           _sk_=function(param){caml_call1(de$12,0);return 0},
           _sl_=function(param){caml_call1(ed$12,0);return 0},
           _sm_=function(param){caml_call1(af$12,0);return 0};
          return [0,
                  function(param){caml_call1(fa$12,0);return 0},
                  _sm_,
                  _sl_,
                  _sk_];
         default:
          var
           rest$13=param[1],
           match$14=fmtty_rel_det(rest$13),
           de$13=match$14[4],
           ed$13=match$14[3],
           af$13=match$14[2],
           fa$13=match$14[1],
           _sn_=function(param){caml_call1(de$13,0);return 0},
           _so_=function(param){caml_call1(ed$13,0);return 0},
           _sp_=function(param){caml_call1(af$13,0);return 0};
          return [0,
                  function(param){caml_call1(fa$13,0);return 0},
                  _sp_,
                  _so_,
                  _sn_]}}
    function fmtty_of_precision_fmtty(prec,fmtty)
     {return typeof prec === "number"?0 === prec?fmtty:[2,fmtty]:fmtty}
    function fmtty_of_padding_fmtty(pad,fmtty)
     {return typeof pad === "number"?fmtty:0 === pad[0]?fmtty:[2,fmtty]}
    function fmtty_of_custom(arity,fmtty)
     {if(arity)
       {var arity$0=arity[1];return [12,fmtty_of_custom(arity$0,fmtty)]}
      return fmtty}
    function fmtty_of_fmt(fmtty)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        return 0;
       else
        switch(fmtty$0[0])
         {case 0:var rest=fmtty$0[1];return [0,fmtty_of_fmt(rest)];
          case 1:var rest$0=fmtty$0[1];return [0,fmtty_of_fmt(rest$0)];
          case 2:
           var rest$1=fmtty$0[2],pad=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad,[1,fmtty_of_fmt(rest$1)]);
          case 3:
           var rest$2=fmtty$0[2],pad$0=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad$0,[1,fmtty_of_fmt(rest$2)]);
          case 4:
           var
            rest$3=fmtty$0[4],
            prec=fmtty$0[3],
            pad$1=fmtty$0[2],
            ty_rest=fmtty_of_fmt(rest$3),
            prec_ty=fmtty_of_precision_fmtty(prec,[2,ty_rest]);
           return fmtty_of_padding_fmtty(pad$1,prec_ty);
          case 5:
           var
            rest$4=fmtty$0[4],
            prec$0=fmtty$0[3],
            pad$2=fmtty$0[2],
            ty_rest$0=fmtty_of_fmt(rest$4),
            prec_ty$0=fmtty_of_precision_fmtty(prec$0,[3,ty_rest$0]);
           return fmtty_of_padding_fmtty(pad$2,prec_ty$0);
          case 6:
           var
            rest$5=fmtty$0[4],
            prec$1=fmtty$0[3],
            pad$3=fmtty$0[2],
            ty_rest$1=fmtty_of_fmt(rest$5),
            prec_ty$1=fmtty_of_precision_fmtty(prec$1,[4,ty_rest$1]);
           return fmtty_of_padding_fmtty(pad$3,prec_ty$1);
          case 7:
           var
            rest$6=fmtty$0[4],
            prec$2=fmtty$0[3],
            pad$4=fmtty$0[2],
            ty_rest$2=fmtty_of_fmt(rest$6),
            prec_ty$2=fmtty_of_precision_fmtty(prec$2,[5,ty_rest$2]);
           return fmtty_of_padding_fmtty(pad$4,prec_ty$2);
          case 8:
           var
            rest$7=fmtty$0[4],
            prec$3=fmtty$0[3],
            pad$5=fmtty$0[2],
            ty_rest$3=fmtty_of_fmt(rest$7),
            prec_ty$3=fmtty_of_precision_fmtty(prec$3,[6,ty_rest$3]);
           return fmtty_of_padding_fmtty(pad$5,prec_ty$3);
          case 9:
           var rest$8=fmtty$0[2],pad$6=fmtty$0[1];
           return fmtty_of_padding_fmtty(pad$6,[7,fmtty_of_fmt(rest$8)]);
          case 10:var fmtty$1=fmtty$0[1],fmtty$0=fmtty$1;continue;
          case 11:var fmtty$2=fmtty$0[2],fmtty$0=fmtty$2;continue;
          case 12:var fmtty$3=fmtty$0[2],fmtty$0=fmtty$3;continue;
          case 13:
           var rest$9=fmtty$0[3],ty=fmtty$0[2];
           return [8,ty,fmtty_of_fmt(rest$9)];
          case 14:
           var rest$10=fmtty$0[3],ty$0=fmtty$0[2];
           return [9,ty$0,ty$0,fmtty_of_fmt(rest$10)];
          case 15:var rest$11=fmtty$0[1];return [10,fmtty_of_fmt(rest$11)];
          case 16:var rest$12=fmtty$0[1];return [11,fmtty_of_fmt(rest$12)];
          case 17:var fmtty$4=fmtty$0[2],fmtty$0=fmtty$4;continue;
          case 18:
           var
            rest$13=fmtty$0[2],
            fmting_gen=fmtty$0[1],
            _r2_=fmtty_of_fmt(rest$13);
           if(0 === fmting_gen[0])
            var match=fmting_gen[1],fmt=match[1],_r3_=fmtty_of_fmt(fmt);
           else
            var
             match$0=fmting_gen[1],
             fmt$0=match$0[1],
             _r3_=fmtty_of_fmt(fmt$0);
           return concat_fmtty(_r3_,_r2_);
          case 19:var rest$14=fmtty$0[1];return [13,fmtty_of_fmt(rest$14)];
          case 20:var rest$15=fmtty$0[3];return [1,fmtty_of_fmt(rest$15)];
          case 21:var rest$16=fmtty$0[2];return [2,fmtty_of_fmt(rest$16)];
          case 22:var rest$17=fmtty$0[1];return [0,fmtty_of_fmt(rest$17)];
          case 23:
           var rest$18=fmtty$0[2],ign=fmtty$0[1];
           if(typeof ign === "number")
            switch(ign)
             {case 0:var fmtty$0=rest$18;continue;
              case 1:var fmtty$0=rest$18;continue;
              case 2:return [14,fmtty_of_fmt(rest$18)];
              default:var fmtty$0=rest$18;continue}
           else
            switch(ign[0])
             {case 0:var fmtty$0=rest$18;continue;
              case 1:var fmtty$0=rest$18;continue;
              case 2:var fmtty$0=rest$18;continue;
              case 3:var fmtty$0=rest$18;continue;
              case 4:var fmtty$0=rest$18;continue;
              case 5:var fmtty$0=rest$18;continue;
              case 6:var fmtty$0=rest$18;continue;
              case 7:var fmtty$0=rest$18;continue;
              case 8:var fmtty$0=rest$18;continue;
              case 9:
               var fmtty$5=ign[2];
               return concat_fmtty(fmtty$5,fmtty_of_fmt(rest$18));
              case 10:var fmtty$0=rest$18;continue;
              default:var fmtty$0=rest$18;continue}
          default:
           var rest$19=fmtty$0[3],arity=fmtty$0[1];
           return fmtty_of_custom(arity,fmtty_of_fmt(rest$19))}}
    var
     Type_mismatch=
      [248,cst_CamlinternalFormat_Type_mi,caml_fresh_oo_id(0)];
    function type_padding(pad,match)
     {if(typeof pad === "number")
       return [0,0,match];
      else
       {if(0 === pad[0])
         {var w=pad[2],padty=pad[1];return [0,[0,padty,w],match]}
        if(typeof match !== "number" && 2 === match[0])
         {var rest=match[1],padty$0=pad[1];return [0,[1,padty$0],rest]}
        throw Type_mismatch}}
    function type_padprec(pad,prec,fmtty)
     {var match=type_padding(pad,fmtty);
      if(typeof prec === "number")
       {if(0 === prec)
         {var rest=match[2],pad$0=match[1];return [0,pad$0,0,rest]}
        var _r1_=match[2];
        if(typeof _r1_ !== "number" && 2 === _r1_[0])
         {var rest$0=_r1_[1],pad$1=match[1];return [0,pad$1,1,rest$0]}
        throw Type_mismatch}
      var rest$1=match[2],pad$2=match[1],p=prec[1];
      return [0,pad$2,[0,p],rest$1]}
    function type_ignored_format_substituti(sub_fmtty,fmt,match)
     {if(typeof sub_fmtty === "number")
       return [0,0,type_format_gen(fmt,match)];
      else
       switch(sub_fmtty[0])
        {case 0:
          if(typeof match !== "number" && 0 === match[0])
           {var
             fmtty_rest=match[1],
             sub_fmtty_rest=sub_fmtty[1],
             match$0=
              type_ignored_format_substituti(sub_fmtty_rest,fmt,fmtty_rest),
             fmt$0=match$0[2],
             sub_fmtty_rest$0=match$0[1];
            return [0,[0,sub_fmtty_rest$0],fmt$0]}
          break;
         case 1:
          if(typeof match !== "number" && 1 === match[0])
           {var
             fmtty_rest$0=match[1],
             sub_fmtty_rest$1=sub_fmtty[1],
             match$1=
              type_ignored_format_substituti
               (sub_fmtty_rest$1,fmt,fmtty_rest$0),
             fmt$1=match$1[2],
             sub_fmtty_rest$2=match$1[1];
            return [0,[1,sub_fmtty_rest$2],fmt$1]}
          break;
         case 2:
          if(typeof match !== "number" && 2 === match[0])
           {var
             fmtty_rest$1=match[1],
             sub_fmtty_rest$3=sub_fmtty[1],
             match$2=
              type_ignored_format_substituti
               (sub_fmtty_rest$3,fmt,fmtty_rest$1),
             fmt$2=match$2[2],
             sub_fmtty_rest$4=match$2[1];
            return [0,[2,sub_fmtty_rest$4],fmt$2]}
          break;
         case 3:
          if(typeof match !== "number" && 3 === match[0])
           {var
             fmtty_rest$2=match[1],
             sub_fmtty_rest$5=sub_fmtty[1],
             match$3=
              type_ignored_format_substituti
               (sub_fmtty_rest$5,fmt,fmtty_rest$2),
             fmt$3=match$3[2],
             sub_fmtty_rest$6=match$3[1];
            return [0,[3,sub_fmtty_rest$6],fmt$3]}
          break;
         case 4:
          if(typeof match !== "number" && 4 === match[0])
           {var
             fmtty_rest$3=match[1],
             sub_fmtty_rest$7=sub_fmtty[1],
             match$4=
              type_ignored_format_substituti
               (sub_fmtty_rest$7,fmt,fmtty_rest$3),
             fmt$4=match$4[2],
             sub_fmtty_rest$8=match$4[1];
            return [0,[4,sub_fmtty_rest$8],fmt$4]}
          break;
         case 5:
          if(typeof match !== "number" && 5 === match[0])
           {var
             fmtty_rest$4=match[1],
             sub_fmtty_rest$9=sub_fmtty[1],
             match$5=
              type_ignored_format_substituti
               (sub_fmtty_rest$9,fmt,fmtty_rest$4),
             fmt$5=match$5[2],
             sub_fmtty_rest$10=match$5[1];
            return [0,[5,sub_fmtty_rest$10],fmt$5]}
          break;
         case 6:
          if(typeof match !== "number" && 6 === match[0])
           {var
             fmtty_rest$5=match[1],
             sub_fmtty_rest$11=sub_fmtty[1],
             match$6=
              type_ignored_format_substituti
               (sub_fmtty_rest$11,fmt,fmtty_rest$5),
             fmt$6=match$6[2],
             sub_fmtty_rest$12=match$6[1];
            return [0,[6,sub_fmtty_rest$12],fmt$6]}
          break;
         case 7:
          if(typeof match !== "number" && 7 === match[0])
           {var
             fmtty_rest$6=match[1],
             sub_fmtty_rest$13=sub_fmtty[1],
             match$7=
              type_ignored_format_substituti
               (sub_fmtty_rest$13,fmt,fmtty_rest$6),
             fmt$7=match$7[2],
             sub_fmtty_rest$14=match$7[1];
            return [0,[7,sub_fmtty_rest$14],fmt$7]}
          break;
         case 8:
          if(typeof match !== "number" && 8 === match[0])
           {var
             fmtty_rest$7=match[2],
             sub2_fmtty=match[1],
             sub_fmtty_rest$15=sub_fmtty[2],
             sub2_fmtty$0=sub_fmtty[1];
            if(caml_notequal([0,sub2_fmtty$0],[0,sub2_fmtty]))
             throw Type_mismatch;
            var
             match$8=
              type_ignored_format_substituti
               (sub_fmtty_rest$15,fmt,fmtty_rest$7),
             fmt$8=match$8[2],
             sub_fmtty_rest$16=match$8[1];
            return [0,[8,sub2_fmtty,sub_fmtty_rest$16],fmt$8]}
          break;
         case 9:
          if(typeof match !== "number" && 9 === match[0])
           {var
             fmtty_rest$8=match[3],
             sub2_fmtty$1=match[2],
             sub1_fmtty=match[1],
             sub_fmtty_rest$17=sub_fmtty[3],
             sub2_fmtty$2=sub_fmtty[2],
             sub1_fmtty$0=sub_fmtty[1],
             _rZ_=[0,erase_rel(sub1_fmtty)];
            if(caml_notequal([0,erase_rel(sub1_fmtty$0)],_rZ_))
             throw Type_mismatch;
            var _r0_=[0,erase_rel(sub2_fmtty$1)];
            if(caml_notequal([0,erase_rel(sub2_fmtty$2)],_r0_))
             throw Type_mismatch;
            var
             sub_fmtty$0=trans(symm(sub1_fmtty),sub2_fmtty$1),
             match$9=fmtty_rel_det(sub_fmtty$0),
             f4=match$9[4],
             f2=match$9[2];
            caml_call1(f2,0);
            caml_call1(f4,0);
            var
             match$10=
              type_ignored_format_substituti
               (erase_rel(sub_fmtty_rest$17),fmt,fmtty_rest$8),
             fmt$9=match$10[2],
             sub_fmtty_rest$18=match$10[1];
            return [0,
                    [9,sub1_fmtty,sub2_fmtty$1,symm(sub_fmtty_rest$18)],
                    fmt$9]}
          break;
         case 10:
          if(typeof match !== "number" && 10 === match[0])
           {var
             fmtty_rest$9=match[1],
             sub_fmtty_rest$19=sub_fmtty[1],
             match$11=
              type_ignored_format_substituti
               (sub_fmtty_rest$19,fmt,fmtty_rest$9),
             fmt$10=match$11[2],
             sub_fmtty_rest$20=match$11[1];
            return [0,[10,sub_fmtty_rest$20],fmt$10]}
          break;
         case 11:
          if(typeof match !== "number" && 11 === match[0])
           {var
             fmtty_rest$10=match[1],
             sub_fmtty_rest$21=sub_fmtty[1],
             match$12=
              type_ignored_format_substituti
               (sub_fmtty_rest$21,fmt,fmtty_rest$10),
             fmt$11=match$12[2],
             sub_fmtty_rest$22=match$12[1];
            return [0,[11,sub_fmtty_rest$22],fmt$11]}
          break;
         case 13:
          if(typeof match !== "number" && 13 === match[0])
           {var
             fmtty_rest$11=match[1],
             sub_fmtty_rest$23=sub_fmtty[1],
             match$13=
              type_ignored_format_substituti
               (sub_fmtty_rest$23,fmt,fmtty_rest$11),
             fmt$12=match$13[2],
             sub_fmtty_rest$24=match$13[1];
            return [0,[13,sub_fmtty_rest$24],fmt$12]}
          break;
         case 14:
          if(typeof match !== "number" && 14 === match[0])
           {var
             fmtty_rest$12=match[1],
             sub_fmtty_rest$25=sub_fmtty[1],
             match$14=
              type_ignored_format_substituti
               (sub_fmtty_rest$25,fmt,fmtty_rest$12),
             fmt$13=match$14[2],
             sub_fmtty_rest$26=match$14[1];
            return [0,[14,sub_fmtty_rest$26],fmt$13]}
          break
         }
      throw Type_mismatch}
    function type_format_gen(fmt,fmtty)
     {if(typeof fmt === "number")
       return [0,0,fmtty];
      else
       switch(fmt[0])
        {case 0:
          if(typeof fmtty !== "number" && 0 === fmtty[0])
           {var
             fmtty_rest=fmtty[1],
             fmt_rest=fmt[1],
             match=type_format_gen(fmt_rest,fmtty_rest),
             fmtty$0=match[2],
             fmt$0=match[1];
            return [0,[0,fmt$0],fmtty$0]}
          break;
         case 1:
          if(typeof fmtty !== "number" && 0 === fmtty[0])
           {var
             fmtty_rest$0=fmtty[1],
             fmt_rest$0=fmt[1],
             match$0=type_format_gen(fmt_rest$0,fmtty_rest$0),
             fmtty$1=match$0[2],
             fmt$1=match$0[1];
            return [0,[1,fmt$1],fmtty$1]}
          break;
         case 2:
          var
           fmt_rest$1=fmt[2],
           pad=fmt[1],
           _ru_=type_padding(pad,fmtty),
           _rv_=_ru_[2],
           _rw_=_ru_[1];
          if(typeof _rv_ !== "number" && 1 === _rv_[0])
           {var
             fmtty_rest$1=_rv_[1],
             match$1=type_format_gen(fmt_rest$1,fmtty_rest$1),
             fmtty$2=match$1[2],
             fmt$2=match$1[1];
            return [0,[2,_rw_,fmt$2],fmtty$2]}
          throw Type_mismatch;
         case 3:
          var
           fmt_rest$2=fmt[2],
           pad$0=fmt[1],
           _rx_=type_padding(pad$0,fmtty),
           _ry_=_rx_[2],
           _rz_=_rx_[1];
          if(typeof _ry_ !== "number" && 1 === _ry_[0])
           {var
             fmtty_rest$2=_ry_[1],
             match$2=type_format_gen(fmt_rest$2,fmtty_rest$2),
             fmtty$3=match$2[2],
             fmt$3=match$2[1];
            return [0,[3,_rz_,fmt$3],fmtty$3]}
          throw Type_mismatch;
         case 4:
          var
           fmt_rest$3=fmt[4],
           prec=fmt[3],
           pad$1=fmt[2],
           iconv=fmt[1],
           _rA_=type_padprec(pad$1,prec,fmtty),
           _rB_=_rA_[3],
           _rC_=_rA_[2],
           _rD_=_rA_[1];
          if(typeof _rB_ !== "number" && 2 === _rB_[0])
           {var
             fmtty_rest$3=_rB_[1],
             match$3=type_format_gen(fmt_rest$3,fmtty_rest$3),
             fmtty$4=match$3[2],
             fmt$4=match$3[1];
            return [0,[4,iconv,_rD_,_rC_,fmt$4],fmtty$4]}
          throw Type_mismatch;
         case 5:
          var
           fmt_rest$4=fmt[4],
           prec$0=fmt[3],
           pad$2=fmt[2],
           iconv$0=fmt[1],
           _rE_=type_padprec(pad$2,prec$0,fmtty),
           _rF_=_rE_[3],
           _rG_=_rE_[2],
           _rH_=_rE_[1];
          if(typeof _rF_ !== "number" && 3 === _rF_[0])
           {var
             fmtty_rest$4=_rF_[1],
             match$4=type_format_gen(fmt_rest$4,fmtty_rest$4),
             fmtty$5=match$4[2],
             fmt$5=match$4[1];
            return [0,[5,iconv$0,_rH_,_rG_,fmt$5],fmtty$5]}
          throw Type_mismatch;
         case 6:
          var
           fmt_rest$5=fmt[4],
           prec$1=fmt[3],
           pad$3=fmt[2],
           iconv$1=fmt[1],
           _rI_=type_padprec(pad$3,prec$1,fmtty),
           _rJ_=_rI_[3],
           _rK_=_rI_[2],
           _rL_=_rI_[1];
          if(typeof _rJ_ !== "number" && 4 === _rJ_[0])
           {var
             fmtty_rest$5=_rJ_[1],
             match$5=type_format_gen(fmt_rest$5,fmtty_rest$5),
             fmtty$6=match$5[2],
             fmt$6=match$5[1];
            return [0,[6,iconv$1,_rL_,_rK_,fmt$6],fmtty$6]}
          throw Type_mismatch;
         case 7:
          var
           fmt_rest$6=fmt[4],
           prec$2=fmt[3],
           pad$4=fmt[2],
           iconv$2=fmt[1],
           _rM_=type_padprec(pad$4,prec$2,fmtty),
           _rN_=_rM_[3],
           _rO_=_rM_[2],
           _rP_=_rM_[1];
          if(typeof _rN_ !== "number" && 5 === _rN_[0])
           {var
             fmtty_rest$6=_rN_[1],
             match$6=type_format_gen(fmt_rest$6,fmtty_rest$6),
             fmtty$7=match$6[2],
             fmt$7=match$6[1];
            return [0,[7,iconv$2,_rP_,_rO_,fmt$7],fmtty$7]}
          throw Type_mismatch;
         case 8:
          var
           fmt_rest$7=fmt[4],
           prec$3=fmt[3],
           pad$5=fmt[2],
           fconv=fmt[1],
           _rQ_=type_padprec(pad$5,prec$3,fmtty),
           _rR_=_rQ_[3],
           _rS_=_rQ_[2],
           _rT_=_rQ_[1];
          if(typeof _rR_ !== "number" && 6 === _rR_[0])
           {var
             fmtty_rest$7=_rR_[1],
             match$7=type_format_gen(fmt_rest$7,fmtty_rest$7),
             fmtty$8=match$7[2],
             fmt$8=match$7[1];
            return [0,[8,fconv,_rT_,_rS_,fmt$8],fmtty$8]}
          throw Type_mismatch;
         case 9:
          var
           fmt_rest$8=fmt[2],
           pad$6=fmt[1],
           _rU_=type_padding(pad$6,fmtty),
           _rV_=_rU_[2],
           _rW_=_rU_[1];
          if(typeof _rV_ !== "number" && 7 === _rV_[0])
           {var
             fmtty_rest$8=_rV_[1],
             match$8=type_format_gen(fmt_rest$8,fmtty_rest$8),
             fmtty$9=match$8[2],
             fmt$9=match$8[1];
            return [0,[9,_rW_,fmt$9],fmtty$9]}
          throw Type_mismatch;
         case 10:
          var
           fmt_rest$9=fmt[1],
           match$9=type_format_gen(fmt_rest$9,fmtty),
           fmtty$10=match$9[2],
           fmt$10=match$9[1];
          return [0,[10,fmt$10],fmtty$10];
         case 11:
          var
           fmt_rest$10=fmt[2],
           str=fmt[1],
           match$10=type_format_gen(fmt_rest$10,fmtty),
           fmtty$11=match$10[2],
           fmt$11=match$10[1];
          return [0,[11,str,fmt$11],fmtty$11];
         case 12:
          var
           fmt_rest$11=fmt[2],
           chr=fmt[1],
           match$11=type_format_gen(fmt_rest$11,fmtty),
           fmtty$12=match$11[2],
           fmt$12=match$11[1];
          return [0,[12,chr,fmt$12],fmtty$12];
         case 13:
          if(typeof fmtty !== "number" && 8 === fmtty[0])
           {var
             fmtty_rest$9=fmtty[2],
             sub_fmtty=fmtty[1],
             fmt_rest$12=fmt[3],
             sub_fmtty$0=fmt[2],
             pad_opt=fmt[1];
            if(caml_notequal([0,sub_fmtty$0],[0,sub_fmtty]))
             throw Type_mismatch;
            var
             match$12=type_format_gen(fmt_rest$12,fmtty_rest$9),
             fmtty$13=match$12[2],
             fmt$13=match$12[1];
            return [0,[13,pad_opt,sub_fmtty,fmt$13],fmtty$13]}
          break;
         case 14:
          if(typeof fmtty !== "number" && 9 === fmtty[0])
           {var
             fmtty_rest$10=fmtty[3],
             sub_fmtty1=fmtty[1],
             fmt_rest$13=fmt[3],
             sub_fmtty$1=fmt[2],
             pad_opt$0=fmt[1],
             _rX_=[0,erase_rel(sub_fmtty1)];
            if(caml_notequal([0,erase_rel(sub_fmtty$1)],_rX_))
             throw Type_mismatch;
            var
             match$13=type_format_gen(fmt_rest$13,erase_rel(fmtty_rest$10)),
             fmtty$14=match$13[2],
             fmt$14=match$13[1];
            return [0,[14,pad_opt$0,sub_fmtty1,fmt$14],fmtty$14]}
          break;
         case 15:
          if(typeof fmtty !== "number" && 10 === fmtty[0])
           {var
             fmtty_rest$11=fmtty[1],
             fmt_rest$14=fmt[1],
             match$14=type_format_gen(fmt_rest$14,fmtty_rest$11),
             fmtty$15=match$14[2],
             fmt$15=match$14[1];
            return [0,[15,fmt$15],fmtty$15]}
          break;
         case 16:
          if(typeof fmtty !== "number" && 11 === fmtty[0])
           {var
             fmtty_rest$12=fmtty[1],
             fmt_rest$15=fmt[1],
             match$15=type_format_gen(fmt_rest$15,fmtty_rest$12),
             fmtty$16=match$15[2],
             fmt$16=match$15[1];
            return [0,[16,fmt$16],fmtty$16]}
          break;
         case 17:
          var
           fmt_rest$16=fmt[2],
           formatting_lit=fmt[1],
           match$16=type_format_gen(fmt_rest$16,fmtty),
           fmtty$17=match$16[2],
           fmt$17=match$16[1];
          return [0,[17,formatting_lit,fmt$17],fmtty$17];
         case 18:
          var fmt_rest$17=fmt[2],formatting_gen=fmt[1];
          if(0 === formatting_gen[0])
           {var
             match$20=formatting_gen[1],
             str$0=match$20[2],
             fmt1=match$20[1],
             match$21=type_format_gen(fmt1,fmtty),
             fmtty2=match$21[2],
             fmt2=match$21[1],
             match$22=type_format_gen(fmt_rest$17,fmtty2),
             fmtty3=match$22[2],
             fmt3=match$22[1];
            return [0,[18,[0,[0,fmt2,str$0]],fmt3],fmtty3]}
          var
           match$23=formatting_gen[1],
           str$1=match$23[2],
           fmt1$0=match$23[1],
           match$24=type_format_gen(fmt1$0,fmtty),
           fmtty2$0=match$24[2],
           fmt2$0=match$24[1],
           match$25=type_format_gen(fmt_rest$17,fmtty2$0),
           fmtty3$0=match$25[2],
           fmt3$0=match$25[1];
          return [0,[18,[1,[0,fmt2$0,str$1]],fmt3$0],fmtty3$0];
         case 19:
          if(typeof fmtty !== "number" && 13 === fmtty[0])
           {var
             fmtty_rest$13=fmtty[1],
             fmt_rest$18=fmt[1],
             match$17=type_format_gen(fmt_rest$18,fmtty_rest$13),
             fmtty$18=match$17[2],
             fmt$18=match$17[1];
            return [0,[19,fmt$18],fmtty$18]}
          break;
         case 20:
          if(typeof fmtty !== "number" && 1 === fmtty[0])
           {var
             fmtty_rest$14=fmtty[1],
             fmt_rest$19=fmt[3],
             char_set=fmt[2],
             width_opt=fmt[1],
             match$18=type_format_gen(fmt_rest$19,fmtty_rest$14),
             fmtty$19=match$18[2],
             fmt$19=match$18[1];
            return [0,[20,width_opt,char_set,fmt$19],fmtty$19]}
          break;
         case 21:
          if(typeof fmtty !== "number" && 2 === fmtty[0])
           {var
             fmtty_rest$15=fmtty[1],
             fmt_rest$20=fmt[2],
             counter=fmt[1],
             match$19=type_format_gen(fmt_rest$20,fmtty_rest$15),
             fmtty$20=match$19[2],
             fmt$20=match$19[1];
            return [0,[21,counter,fmt$20],fmtty$20]}
          break;
         case 23:
          var rest=fmt[2],ign=fmt[1];
          if(typeof ign === "number")
           switch(ign)
            {case 0:return type_ignored_param_one(ign,rest,fmtty);
             case 1:return type_ignored_param_one(ign,rest,fmtty);
             case 2:
              if(typeof fmtty !== "number" && 14 === fmtty[0])
               {var
                 fmtty_rest$16=fmtty[1],
                 match$26=type_format_gen(rest,fmtty_rest$16),
                 fmtty$21=match$26[2],
                 fmt$21=match$26[1];
                return [0,[23,2,fmt$21],fmtty$21]}
              throw Type_mismatch;
             default:return type_ignored_param_one(ign,rest,fmtty)}
          else
           switch(ign[0])
            {case 0:return type_ignored_param_one(ign,rest,fmtty);
             case 1:return type_ignored_param_one(ign,rest,fmtty);
             case 2:return type_ignored_param_one(ign,rest,fmtty);
             case 3:return type_ignored_param_one(ign,rest,fmtty);
             case 4:return type_ignored_param_one(ign,rest,fmtty);
             case 5:return type_ignored_param_one(ign,rest,fmtty);
             case 6:return type_ignored_param_one(ign,rest,fmtty);
             case 7:return type_ignored_param_one(ign,rest,fmtty);
             case 8:
              var sub_fmtty$2=ign[2],pad_opt$1=ign[1];
              return type_ignored_param_one
                      ([8,pad_opt$1,sub_fmtty$2],rest,fmtty);
             case 9:
              var
               sub_fmtty$3=ign[2],
               pad_opt$2=ign[1],
               _rY_=type_ignored_format_substituti(sub_fmtty$3,rest,fmtty),
               match$27=_rY_[2],
               fmtty$22=match$27[2],
               fmt$22=match$27[1],
               sub_fmtty$4=_rY_[1];
              return [0,[23,[9,pad_opt$2,sub_fmtty$4],fmt$22],fmtty$22];
             case 10:return type_ignored_param_one(ign,rest,fmtty);
             default:return type_ignored_param_one(ign,rest,fmtty)}
         }
      throw Type_mismatch}
    function type_ignored_param_one(ign,fmt,fmtty)
     {var match=type_format_gen(fmt,fmtty),fmtty$0=match[2],fmt$0=match[1];
      return [0,[23,ign,fmt$0],fmtty$0]}
    function type_format(fmt,fmtty)
     {var _rt_=type_format_gen(fmt,fmtty);
      if(typeof _rt_[2] === "number"){var fmt$0=_rt_[1];return fmt$0}
      throw Type_mismatch}
    function recast(fmt,fmtty){return type_format(fmt,erase_rel(symm(fmtty)))}
    function fix_padding(padty,width,str)
     {var
       len=caml_ml_string_length(str),
       padty$0=0 <= width?padty:0,
       width$0=abs(width);
      if(width$0 <= len)return str;
      var _rs_=2 === padty$0?48:32,res=make(width$0,_rs_);
      switch(padty$0)
       {case 0:blit$0(str,0,res,0,len);break;
        case 1:blit$0(str,0,res,width$0 - len | 0,len);break;
        default:
         var switch$0=0;
         if(0 < len)
          {var switch$1=0;
           if
            (43
             !==
             caml_string_get(str,0)
             &&
             45
             !==
             caml_string_get(str,0)
             &&
             32
             !==
             caml_string_get(str,0))
            {switch$0 = 1;switch$1 = 1}
           if(! switch$1)
            {caml_bytes_set(res,0,caml_string_get(str,0));
             blit$0(str,1,res,(width$0 - len | 0) + 1 | 0,len - 1 | 0)}}
         else
          switch$0 = 1;
         if(switch$0)
          {var switch$2=0;
           if(1 < len && 48 === caml_string_get(str,0))
            {var switch$3=0;
             if
              (120
               !==
               caml_string_get(str,1)
               &&
               88
               !==
               caml_string_get(str,1))
              {switch$2 = 1;switch$3 = 1}
             if(! switch$3)
              {caml_bytes_set(res,1,caml_string_get(str,1));
               blit$0(str,2,res,(width$0 - len | 0) + 2 | 0,len - 2 | 0)}}
           else
            switch$2 = 1;
           if(switch$2)blit$0(str,0,res,width$0 - len | 0,len)}}
      return caml_string_of_bytes(res)}
    function fix_int_precision(prec,str)
     {var
       prec$0=abs(prec),
       len=caml_ml_string_length(str),
       c=caml_string_get(str,0),
       switch$0=0;
      if(58 <= c)
       {if(71 <= c)
         {if(! (5 < (c - 97 | 0) >>> 0))switch$0 = 1}
        else
         if(65 <= c)switch$0 = 1}
      else
       {var switch$1=0;
        if(32 !== c)
         if(43 <= c)
          {var switcher=c - 43 | 0;
           switch(switcher)
            {case 5:
              if(len < (prec$0 + 2 | 0) && 1 < len)
               {var switch$2=0;
                if
                 (120
                  ===
                  caml_string_get(str,1)
                  ||
                  88
                  ===
                  caml_string_get(str,1))
                 switch$2 = 1;
                if(switch$2)
                 {var res$1=make(prec$0 + 2 | 0,48);
                  caml_bytes_set(res$1,1,caml_string_get(str,1));
                  blit$0(str,2,res$1,(prec$0 - len | 0) + 4 | 0,len - 2 | 0);
                  return caml_string_of_bytes(res$1)}}
              switch$0 = 1;
              switch$1 = 1;
              break;
             case 0:
             case 2:break;
             case 1:
             case 3:
             case 4:switch$1 = 1;break;
             default:switch$0 = 1;switch$1 = 1}}
         else
          switch$1 = 1;
        if(! switch$1 && len < (prec$0 + 1 | 0))
         {var res$0=make(prec$0 + 1 | 0,48);
          caml_bytes_set(res$0,0,c);
          blit$0(str,1,res$0,(prec$0 - len | 0) + 2 | 0,len - 1 | 0);
          return caml_string_of_bytes(res$0)}}
      if(switch$0 && len < prec$0)
       {var res=make(prec$0,48);
        blit$0(str,0,res,prec$0 - len | 0,len);
        return caml_string_of_bytes(res)}
      return str}
    function string_to_caml_string(str)
     {var
       str$0=escaped$1(str),
       l=caml_ml_string_length(str$0),
       res=make(l + 2 | 0,34);
      caml_blit_string(str$0,0,res,1,l);
      return caml_string_of_bytes(res)}
    function transform_int_alt(iconv,s)
     {if(13 <= iconv)
       {var n=[0,0],_rn_=caml_ml_string_length(s) - 1 | 0,_rm_=0;
        if(! (_rn_ < 0))
         {var i$0=_rm_;
          for(;;)
           {var match=caml_string_unsafe_get(s,i$0),switcher$0=match - 48 | 0;
            if(! (9 < switcher$0 >>> 0))n[1]++;
            var _rr_=i$0 + 1 | 0;
            if(_rn_ !== i$0){var i$0=_rr_;continue}
            break}}
        var
         digits=n[1],
         buf=
          caml_create_bytes
           (caml_ml_string_length(s) + ((digits - 1 | 0) / 3 | 0) | 0),
         pos=[0,0],
         put=function(c){caml_bytes_set(buf,pos[1],c);pos[1]++;return 0},
         left=[0,((digits - 1 | 0) % 3 | 0) + 1 | 0],
         _rp_=caml_ml_string_length(s) - 1 | 0,
         _ro_=0;
        if(! (_rp_ < 0))
         {var i=_ro_;
          for(;;)
           {var c=caml_string_unsafe_get(s,i),switcher=c - 48 | 0;
            if(9 < switcher >>> 0)
             put(c);
            else
             {if(0 === left[1]){put(95);left[1] = 3}left[1] += -1;put(c)}
            var _rq_=i + 1 | 0;
            if(_rp_ !== i){var i=_rq_;continue}
            break}}
        return caml_string_of_bytes(buf)}
      return s}
    function convert_int(iconv,n)
     {switch(iconv)
       {case 1:var _rl_=cst_d$3;break;
        case 2:var _rl_=cst_d$4;break;
        case 4:var _rl_=cst_i$1;break;
        case 5:var _rl_=cst_i$2;break;
        case 6:var _rl_=cst_x;break;
        case 7:var _rl_=cst_x$0;break;
        case 8:var _rl_=cst_X$0;break;
        case 9:var _rl_=cst_X$1;break;
        case 10:var _rl_=cst_o;break;
        case 11:var _rl_=cst_o$0;break;
        case 0:
        case 13:var _rl_=cst_d$2;break;
        case 3:
        case 14:var _rl_=cst_i$0;break;
        default:var _rl_=cst_u}
      return transform_int_alt(iconv,caml_format_int(_rl_,n))}
    function convert_int32(iconv,n)
     {switch(iconv)
       {case 1:var _rk_=cst_ld$0;break;
        case 2:var _rk_=cst_ld$1;break;
        case 4:var _rk_=cst_li$1;break;
        case 5:var _rk_=cst_li$2;break;
        case 6:var _rk_=cst_lx;break;
        case 7:var _rk_=cst_lx$0;break;
        case 8:var _rk_=cst_lX;break;
        case 9:var _rk_=cst_lX$0;break;
        case 10:var _rk_=cst_lo;break;
        case 11:var _rk_=cst_lo$0;break;
        case 0:
        case 13:var _rk_=cst_ld;break;
        case 3:
        case 14:var _rk_=cst_li$0;break;
        default:var _rk_=cst_lu}
      return transform_int_alt(iconv,caml_format_int(_rk_,n))}
    function convert_nativeint(iconv,n)
     {switch(iconv)
       {case 1:var _rj_=cst_nd$0;break;
        case 2:var _rj_=cst_nd$1;break;
        case 4:var _rj_=cst_ni$1;break;
        case 5:var _rj_=cst_ni$2;break;
        case 6:var _rj_=cst_nx;break;
        case 7:var _rj_=cst_nx$0;break;
        case 8:var _rj_=cst_nX;break;
        case 9:var _rj_=cst_nX$0;break;
        case 10:var _rj_=cst_no;break;
        case 11:var _rj_=cst_no$0;break;
        case 0:
        case 13:var _rj_=cst_nd;break;
        case 3:
        case 14:var _rj_=cst_ni$0;break;
        default:var _rj_=cst_nu}
      return transform_int_alt(iconv,caml_format_int(_rj_,n))}
    function convert_int64(iconv,n)
     {switch(iconv)
       {case 1:var _ri_=cst_Ld$0;break;
        case 2:var _ri_=cst_Ld$1;break;
        case 4:var _ri_=cst_Li$1;break;
        case 5:var _ri_=cst_Li$2;break;
        case 6:var _ri_=cst_Lx;break;
        case 7:var _ri_=cst_Lx$0;break;
        case 8:var _ri_=cst_LX;break;
        case 9:var _ri_=cst_LX$0;break;
        case 10:var _ri_=cst_Lo;break;
        case 11:var _ri_=cst_Lo$0;break;
        case 0:
        case 13:var _ri_=cst_Ld;break;
        case 3:
        case 14:var _ri_=cst_Li$0;break;
        default:var _ri_=cst_Lu}
      return transform_int_alt(iconv,caml_int64_format(_ri_,n))}
    function convert_float(fconv,prec$0,x)
     {if(16 <= fconv)
       {var switch$0=0;
        if(17 <= fconv)
         switch(fconv - 17 | 0)
          {case 2:switch$0 = 1;break;
           case 0:
           case 3:var sign=43;break;
           default:var sign=32}
        else
         switch$0 = 1;
        if(switch$0)var sign=45;
        var str=runtime.caml_hexstring_of_float(x,prec$0,sign);
        return 19 <= fconv?uppercase_ascii$1(str):str}
      if(15 === fconv)
       var _rf_=cst_12g$0;
      else
       {var prec=abs(prec$0),symb=char_of_fconv(fconv),buf=buffer_create(16);
        buffer_add_char(buf,37);
        bprint_fconv_flag(buf,fconv);
        buffer_add_char(buf,46);
        buffer_add_string(buf,caml_string_of_jsbytes("" + prec));
        buffer_add_char(buf,symb);
        var _rf_=buffer_contents(buf)}
      var str$0=caml_format_float(_rf_,x);
      if(15 === fconv)
       {var
         len=caml_ml_string_length(str$0),
         match$0=runtime.caml_classify_float(x);
        if(3 === match$0)return x < 0.?cst_neg_infinity:cst_infinity;
        if(4 <= match$0)return cst_nan;
        var i=0;
        for(;;)
         {if(i === len)
           var _rh_=0;
          else
           {var match=caml_string_get(str$0,i),_rg_=match - 46 | 0,switch$1=0;
            if(23 < _rg_ >>> 0)
             {if(55 === _rg_)switch$1 = 1}
            else
             if(21 < (_rg_ - 1 | 0) >>> 0)switch$1 = 1;
            if(! switch$1){var i$0=i + 1 | 0,i=i$0;continue}
            var _rh_=1}
          return _rh_?str$0:symbol(str$0,cst$28)}}
      return str$0}
    function string_of_fmtty(fmtty)
     {var buf=buffer_create(16);
      bprint_fmtty(buf,fmtty);
      return buffer_contents(buf)}
    function make_printf$0(counter,k,acc,fmt)
     {var k$0=k,acc$0=acc,fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k$0,acc$0);
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1];
           return function(c)
            {var new_acc=[5,acc$0,c];return make_printf(k$0,new_acc,rest)};
          case 1:
           var rest$0=fmt$0[1];
           return function(c)
            {var
              str=escaped(c),
              l=caml_ml_string_length(str),
              res=make(l + 2 | 0,39);
             caml_blit_string(str,0,res,1,l);
             var new_acc=[4,acc$0,caml_string_of_bytes(res)];
             return make_printf(k$0,new_acc,rest$0)};
          case 2:
           var rest$1=fmt$0[2],pad=fmt$0[1];
           return make_padding(k$0,acc$0,rest$1,pad,function(str){return str});
          case 3:
           var rest$2=fmt$0[2],pad$0=fmt$0[1];
           return make_padding(k$0,acc$0,rest$2,pad$0,string_to_caml_string);
          case 4:
           var rest$3=fmt$0[4],prec=fmt$0[3],pad$1=fmt$0[2],iconv=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$3,pad$1,prec,convert_int,iconv);
          case 5:
           var
            rest$4=fmt$0[4],
            prec$0=fmt$0[3],
            pad$2=fmt$0[2],
            iconv$0=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$4,pad$2,prec$0,convert_int32,iconv$0);
          case 6:
           var
            rest$5=fmt$0[4],
            prec$1=fmt$0[3],
            pad$3=fmt$0[2],
            iconv$1=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$5,pad$3,prec$1,convert_nativeint,iconv$1);
          case 7:
           var
            rest$6=fmt$0[4],
            prec$2=fmt$0[3],
            pad$4=fmt$0[2],
            iconv$2=fmt$0[1];
           return make_int_padding_precision
                   (k$0,acc$0,rest$6,pad$4,prec$2,convert_int64,iconv$2);
          case 8:
           var rest$7=fmt$0[4],prec$3=fmt$0[3],pad$5=fmt$0[2],fconv=fmt$0[1];
           if(typeof pad$5 === "number")
            {if(typeof prec$3 === "number")
              return 0 === prec$3
                      ?function(x)
                        {var str=convert_float(fconv,default_float_precision,x);
                         return make_printf(k$0,[4,acc$0,str],rest$7)}
                      :function(p,x)
                        {var str=convert_float(fconv,p,x);
                         return make_printf(k$0,[4,acc$0,str],rest$7)};
             var p=prec$3[1];
             return function(x)
              {var str=convert_float(fconv,p,x);
               return make_printf(k$0,[4,acc$0,str],rest$7)}}
           else
            {if(0 === pad$5[0])
              {var _rc_=pad$5[2],_rd_=pad$5[1];
               if(typeof prec$3 === "number")
                return 0 === prec$3
                        ?function(x)
                          {var
                            str=convert_float(fconv,default_float_precision,x),
                            str$0=fix_padding(_rd_,_rc_,str);
                           return make_printf(k$0,[4,acc$0,str$0],rest$7)}
                        :function(p,x)
                          {var str=fix_padding(_rd_,_rc_,convert_float(fconv,p,x));
                           return make_printf(k$0,[4,acc$0,str],rest$7)};
               var p$0=prec$3[1];
               return function(x)
                {var str=fix_padding(_rd_,_rc_,convert_float(fconv,p$0,x));
                 return make_printf(k$0,[4,acc$0,str],rest$7)}}
             var _re_=pad$5[1];
             if(typeof prec$3 === "number")
              return 0 === prec$3
                      ?function(w,x)
                        {var
                          str=convert_float(fconv,default_float_precision,x),
                          str$0=fix_padding(_re_,w,str);
                         return make_printf(k$0,[4,acc$0,str$0],rest$7)}
                      :function(w,p,x)
                        {var str=fix_padding(_re_,w,convert_float(fconv,p,x));
                         return make_printf(k$0,[4,acc$0,str],rest$7)};
             var p$1=prec$3[1];
             return function(w,x)
              {var str=fix_padding(_re_,w,convert_float(fconv,p$1,x));
               return make_printf(k$0,[4,acc$0,str],rest$7)}}
          case 9:
           var rest$8=fmt$0[2],pad$6=fmt$0[1];
           return make_padding(k$0,acc$0,rest$8,pad$6,string_of_bool);
          case 10:
           var fmt$1=fmt$0[1],acc$1=[7,acc$0],acc$0=acc$1,fmt$0=fmt$1;
           continue;
          case 11:
           var
            fmt$2=fmt$0[2],
            str=fmt$0[1],
            acc$2=[2,acc$0,str],
            acc$0=acc$2,
            fmt$0=fmt$2;
           continue;
          case 12:
           var
            fmt$3=fmt$0[2],
            chr=fmt$0[1],
            acc$3=[3,acc$0,chr],
            acc$0=acc$3,
            fmt$0=fmt$3;
           continue;
          case 13:
           var
            rest$9=fmt$0[3],
            sub_fmtty=fmt$0[2],
            ty=string_of_fmtty(sub_fmtty);
           return function(str){return make_printf(k$0,[4,acc$0,ty],rest$9)};
          case 14:
           var rest$10=fmt$0[3],fmtty=fmt$0[2];
           return function(param)
            {var fmt=param[1];
             return make_printf
                     (k$0,acc$0,concat_fmt(recast(fmt,fmtty),rest$10))};
          case 15:
           var rest$11=fmt$0[1];
           return function(f,x)
            {return make_printf
                     (k$0,
                      [6,acc$0,function(o){return caml_call2(f,o,x)}],
                      rest$11)};
          case 16:
           var rest$12=fmt$0[1];
           return function(f){return make_printf(k$0,[6,acc$0,f],rest$12)};
          case 17:
           var
            fmt$4=fmt$0[2],
            fmting_lit=fmt$0[1],
            acc$4=[0,acc$0,fmting_lit],
            acc$0=acc$4,
            fmt$0=fmt$4;
           continue;
          case 18:
           var _ra_=fmt$0[1];
           if(0 === _ra_[0])
            {var
              rest$13=fmt$0[2],
              match=_ra_[1],
              fmt$5=match[1],
              k$3=
               function(acc,k,rest)
                {function k$0(kacc)
                  {return make_printf(k,[1,acc,[0,kacc]],rest)}
                 return k$0},
              k$1=k$3(acc$0,k$0,rest$13),
              k$0=k$1,
              acc$0=0,
              fmt$0=fmt$5;
             continue}
           var
            rest$14=fmt$0[2],
            match$0=_ra_[1],
            fmt$6=match$0[1],
            k$4=
             function(acc,k,rest)
              {function k$0(kacc){return make_printf(k,[1,acc,[1,kacc]],rest)}
               return k$0},
            k$2=k$4(acc$0,k$0,rest$14),
            k$0=k$2,
            acc$0=0,
            fmt$0=fmt$6;
           continue;
          case 19:throw [0,Assert_failure,_an_];
          case 20:
           var rest$15=fmt$0[3],new_acc=[8,acc$0,cst_Printf_bad_conversion];
           return function(param){return make_printf(k$0,new_acc,rest$15)};
          case 21:
           var rest$16=fmt$0[2];
           return function(n)
            {var new_acc=[4,acc$0,caml_format_int(cst_u$0,n)];
             return make_printf(k$0,new_acc,rest$16)};
          case 22:
           var rest$17=fmt$0[1];
           return function(c)
            {var new_acc=[5,acc$0,c];return make_printf(k$0,new_acc,rest$17)};
          case 23:
           var rest$18=fmt$0[2],ign=fmt$0[1];
           if(counter < 50)
            {var counter$1=counter + 1 | 0;
             return make_ignored_param$0(counter$1,k$0,acc$0,ign,rest$18)}
           return caml_trampoline_return
                   (make_ignored_param$0,[0,k$0,acc$0,ign,rest$18]);
          default:
           var
            rest$19=fmt$0[3],
            f=fmt$0[2],
            arity=fmt$0[1],
            _rb_=caml_call1(f,0);
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return make_custom$0(counter$0,k$0,acc$0,rest$19,arity,_rb_)}
           return caml_trampoline_return
                   (make_custom$0,[0,k$0,acc$0,rest$19,arity,_rb_])}}
    function make_ignored_param$0(counter,k,acc,ign,fmt)
     {if(typeof ign === "number")
       switch(ign)
        {case 0:
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return make_invalid_arg(counter$0,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 1:
          if(counter < 50)
           {var counter$1=counter + 1 | 0;
            return make_invalid_arg(counter$1,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 2:throw [0,Assert_failure,_ao_];
         default:
          if(counter < 50)
           {var counter$2=counter + 1 | 0;
            return make_invalid_arg(counter$2,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}
      else
       switch(ign[0])
        {case 0:
          if(counter < 50)
           {var counter$3=counter + 1 | 0;
            return make_invalid_arg(counter$3,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 1:
          if(counter < 50)
           {var counter$4=counter + 1 | 0;
            return make_invalid_arg(counter$4,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 2:
          if(counter < 50)
           {var counter$5=counter + 1 | 0;
            return make_invalid_arg(counter$5,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 3:
          if(counter < 50)
           {var counter$6=counter + 1 | 0;
            return make_invalid_arg(counter$6,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 4:
          if(counter < 50)
           {var counter$7=counter + 1 | 0;
            return make_invalid_arg(counter$7,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 5:
          if(counter < 50)
           {var counter$8=counter + 1 | 0;
            return make_invalid_arg(counter$8,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 6:
          if(counter < 50)
           {var counter$9=counter + 1 | 0;
            return make_invalid_arg(counter$9,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 7:
          if(counter < 50)
           {var counter$10=counter + 1 | 0;
            return make_invalid_arg(counter$10,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 8:
          if(counter < 50)
           {var counter$11=counter + 1 | 0;
            return make_invalid_arg(counter$11,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         case 9:
          var fmtty=ign[2];
          if(counter < 50)
           {var counter$14=counter + 1 | 0;
            return make_from_fmtty$0(counter$14,k,acc,fmtty,fmt)}
          return caml_trampoline_return(make_from_fmtty$0,[0,k,acc,fmtty,fmt]);
         case 10:
          if(counter < 50)
           {var counter$12=counter + 1 | 0;
            return make_invalid_arg(counter$12,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt]);
         default:
          if(counter < 50)
           {var counter$13=counter + 1 | 0;
            return make_invalid_arg(counter$13,k,acc,fmt)}
          return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}}
    function make_from_fmtty$0(counter,k,acc,fmtty,fmt)
     {if(typeof fmtty === "number")
       {if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return make_invalid_arg(counter$0,k,acc,fmt)}
        return caml_trampoline_return(make_invalid_arg,[0,k,acc,fmt])}
      else
       switch(fmtty[0])
        {case 0:
          var rest=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest,fmt)};
         case 1:
          var rest$0=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$0,fmt)};
         case 2:
          var rest$1=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$1,fmt)};
         case 3:
          var rest$2=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$2,fmt)};
         case 4:
          var rest$3=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$3,fmt)};
         case 5:
          var rest$4=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$4,fmt)};
         case 6:
          var rest$5=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$5,fmt)};
         case 7:
          var rest$6=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$6,fmt)};
         case 8:
          var rest$7=fmtty[2];
          return function(param){return make_from_fmtty(k,acc,rest$7,fmt)};
         case 9:
          var
           rest$8=fmtty[3],
           ty2=fmtty[2],
           ty1=fmtty[1],
           ty=trans(symm(ty1),ty2);
          return function(param)
           {return make_from_fmtty(k,acc,concat_fmtty(ty,rest$8),fmt)};
         case 10:
          var rest$9=fmtty[1];
          return function(param,_q$_)
           {return make_from_fmtty(k,acc,rest$9,fmt)};
         case 11:
          var rest$10=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$10,fmt)};
         case 12:
          var rest$11=fmtty[1];
          return function(param){return make_from_fmtty(k,acc,rest$11,fmt)};
         case 13:throw [0,Assert_failure,_ap_];
         default:throw [0,Assert_failure,_aq_]}}
    function make_invalid_arg(counter,k,acc,fmt)
     {var _q__=[8,acc,cst_Printf_bad_conversion$0];
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_printf$0(counter$0,k,_q__,fmt)}
      return caml_trampoline_return(make_printf$0,[0,k,_q__,fmt])}
    function make_custom$0(counter,k,acc,rest,arity,f)
     {if(arity)
       {var arity$0=arity[1];
        return function(x)
         {return make_custom(k,acc,rest,arity$0,caml_call1(f,x))}}
      var _q9_=[4,acc,f];
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_printf$0(counter$0,k,_q9_,rest)}
      return caml_trampoline_return(make_printf$0,[0,k,_q9_,rest])}
    function make_printf(k,acc,fmt)
     {return caml_trampoline(make_printf$0(0,k,acc,fmt))}
    function make_ignored_param(k,acc,ign,fmt)
     {return caml_trampoline(make_ignored_param$0(0,k,acc,ign,fmt))}
    function make_from_fmtty(k,acc,fmtty,fmt)
     {return caml_trampoline(make_from_fmtty$0(0,k,acc,fmtty,fmt))}
    function make_custom(k,acc,rest,arity,f)
     {return caml_trampoline(make_custom$0(0,k,acc,rest,arity,f))}
    function make_padding(k,acc,fmt,pad,trans)
     {if(typeof pad === "number")
       return function(x)
        {var new_acc=[4,acc,caml_call1(trans,x)];
         return make_printf(k,new_acc,fmt)};
      else
       {if(0 === pad[0])
         {var width=pad[2],padty=pad[1];
          return function(x)
           {var new_acc=[4,acc,fix_padding(padty,width,caml_call1(trans,x))];
            return make_printf(k,new_acc,fmt)}}
        var padty$0=pad[1];
        return function(w,x)
         {var new_acc=[4,acc,fix_padding(padty$0,w,caml_call1(trans,x))];
          return make_printf(k,new_acc,fmt)}}}
    function make_int_padding_precision(k,acc,fmt,pad,match,trans,iconv)
     {if(typeof pad === "number")
       {if(typeof match === "number")
         return 0 === match
                 ?function(x)
                   {var str=caml_call2(trans,iconv,x);
                    return make_printf(k,[4,acc,str],fmt)}
                 :function(p,x)
                   {var str=fix_int_precision(p,caml_call2(trans,iconv,x));
                    return make_printf(k,[4,acc,str],fmt)};
        var p=match[1];
        return function(x)
         {var str=fix_int_precision(p,caml_call2(trans,iconv,x));
          return make_printf(k,[4,acc,str],fmt)}}
      else
       {if(0 === pad[0])
         {var _q6_=pad[2],_q7_=pad[1];
          if(typeof match === "number")
           return 0 === match
                   ?function(x)
                     {var str=fix_padding(_q7_,_q6_,caml_call2(trans,iconv,x));
                      return make_printf(k,[4,acc,str],fmt)}
                   :function(p,x)
                     {var
                       str=
                        fix_padding
                         (_q7_,_q6_,fix_int_precision(p,caml_call2(trans,iconv,x)));
                      return make_printf(k,[4,acc,str],fmt)};
          var p$0=match[1];
          return function(x)
           {var
             str=
              fix_padding
               (_q7_,_q6_,fix_int_precision(p$0,caml_call2(trans,iconv,x)));
            return make_printf(k,[4,acc,str],fmt)}}
        var _q8_=pad[1];
        if(typeof match === "number")
         return 0 === match
                 ?function(w,x)
                   {var str=fix_padding(_q8_,w,caml_call2(trans,iconv,x));
                    return make_printf(k,[4,acc,str],fmt)}
                 :function(w,p,x)
                   {var
                     str=
                      fix_padding
                       (_q8_,w,fix_int_precision(p,caml_call2(trans,iconv,x)));
                    return make_printf(k,[4,acc,str],fmt)};
        var p$1=match[1];
        return function(w,x)
         {var
           str=
            fix_padding
             (_q8_,w,fix_int_precision(p$1,caml_call2(trans,iconv,x)));
          return make_printf(k,[4,acc,str],fmt)}}}
    function make_iprintf$0(counter,k,o,fmt)
     {var k$0=k,fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k$0,o);
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1],_ql_=make_iprintf(k$0,o,rest);
           return function(_q5_){return _ql_};
          case 1:
           var rest$0=fmt$0[1],_qm_=make_iprintf(k$0,o,rest$0);
           return function(_q4_){return _qm_};
          case 2:
           var _qn_=fmt$0[1];
           if(typeof _qn_ === "number")
            {var rest$1=fmt$0[2],_qo_=make_iprintf(k$0,o,rest$1);
             return function(_q0_){return _qo_}}
           else
            {if(0 === _qn_[0])
              {var rest$2=fmt$0[2],_qp_=make_iprintf(k$0,o,rest$2);
               return function(_q3_){return _qp_}}
             var
              rest$3=fmt$0[2],
              _qq_=make_iprintf(k$0,o,rest$3),
              _qr_=function(_q2_){return _qq_};
             return function(_q1_){return _qr_}}
          case 3:
           var _qs_=fmt$0[1];
           if(typeof _qs_ === "number")
            {var rest$4=fmt$0[2],_qt_=make_iprintf(k$0,o,rest$4);
             return function(_qW_){return _qt_}}
           else
            {if(0 === _qs_[0])
              {var rest$5=fmt$0[2],_qu_=make_iprintf(k$0,o,rest$5);
               return function(_qZ_){return _qu_}}
             var
              rest$6=fmt$0[2],
              _qv_=make_iprintf(k$0,o,rest$6),
              _qw_=function(_qY_){return _qv_};
             return function(_qX_){return _qw_}}
          case 4:
           var rest$7=fmt$0[4],prec=fmt$0[3],pad=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$7,pad,prec);
          case 5:
           var rest$8=fmt$0[4],prec$0=fmt$0[3],pad$0=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$8,pad$0,prec$0);
          case 6:
           var rest$9=fmt$0[4],prec$1=fmt$0[3],pad$1=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$9,pad$1,prec$1);
          case 7:
           var rest$10=fmt$0[4],prec$2=fmt$0[3],pad$2=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$10,pad$2,prec$2);
          case 8:
           var rest$11=fmt$0[4],prec$3=fmt$0[3],pad$3=fmt$0[2];
           return fn_of_padding_precision(k$0,o,rest$11,pad$3,prec$3);
          case 9:
           var _qx_=fmt$0[1];
           if(typeof _qx_ === "number")
            {var rest$12=fmt$0[2],_qy_=make_iprintf(k$0,o,rest$12);
             return function(_qS_){return _qy_}}
           else
            {if(0 === _qx_[0])
              {var rest$13=fmt$0[2],_qz_=make_iprintf(k$0,o,rest$13);
               return function(_qV_){return _qz_}}
             var
              rest$14=fmt$0[2],
              _qA_=make_iprintf(k$0,o,rest$14),
              _qB_=function(_qU_){return _qA_};
             return function(_qT_){return _qB_}}
          case 10:var fmt$1=fmt$0[1],fmt$0=fmt$1;continue;
          case 11:var fmt$2=fmt$0[2],fmt$0=fmt$2;continue;
          case 12:var fmt$3=fmt$0[2],fmt$0=fmt$3;continue;
          case 13:
           var rest$15=fmt$0[3],_qC_=make_iprintf(k$0,o,rest$15);
           return function(_qR_){return _qC_};
          case 14:
           var rest$16=fmt$0[3],fmtty=fmt$0[2];
           return function(param)
            {var fmt=param[1];
             return make_iprintf(k$0,o,concat_fmt(recast(fmt,fmtty),rest$16))};
          case 15:
           var
            rest$17=fmt$0[1],
            _qD_=make_iprintf(k$0,o,rest$17),
            _qE_=function(_qQ_){return _qD_};
           return function(_qP_){return _qE_};
          case 16:
           var rest$18=fmt$0[1],_qF_=make_iprintf(k$0,o,rest$18);
           return function(_qO_){return _qF_};
          case 17:var fmt$4=fmt$0[2],fmt$0=fmt$4;continue;
          case 18:
           var _qG_=fmt$0[1];
           if(0 === _qG_[0])
            {var
              rest$19=fmt$0[2],
              match=_qG_[1],
              fmt$5=match[1],
              k$3=
               function(k,rest)
                {function k$0(koc){return make_iprintf(k,koc,rest)}return k$0},
              k$1=k$3(k$0,rest$19),
              k$0=k$1,
              fmt$0=fmt$5;
             continue}
           var
            rest$20=fmt$0[2],
            match$0=_qG_[1],
            fmt$6=match$0[1],
            k$4=
             function(k,rest)
              {function k$0(koc){return make_iprintf(k,koc,rest)}return k$0},
            k$2=k$4(k$0,rest$20),
            k$0=k$2,
            fmt$0=fmt$6;
           continue;
          case 19:throw [0,Assert_failure,_ar_];
          case 20:
           var rest$21=fmt$0[3],_qH_=make_iprintf(k$0,o,rest$21);
           return function(_qN_){return _qH_};
          case 21:
           var rest$22=fmt$0[2],_qI_=make_iprintf(k$0,o,rest$22);
           return function(_qM_){return _qI_};
          case 22:
           var rest$23=fmt$0[1],_qJ_=make_iprintf(k$0,o,rest$23);
           return function(_qL_){return _qJ_};
          case 23:
           var rest$24=fmt$0[2],ign=fmt$0[1],_qK_=0;
           return make_ignored_param
                   (function(param){return caml_call1(k$0,o)},_qK_,ign,rest$24);
          default:
           var rest$25=fmt$0[3],arity=fmt$0[1];
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return fn_of_custom_arity$0(counter$0,k$0,o,rest$25,arity)}
           return caml_trampoline_return
                   (fn_of_custom_arity$0,[0,k$0,o,rest$25,arity])}}
    function fn_of_custom_arity$0(counter,k,o,fmt,param)
     {if(param)
       {var arity=param[1],_qj_=fn_of_custom_arity(k,o,fmt,arity);
        return function(_qk_){return _qj_}}
      if(counter < 50)
       {var counter$0=counter + 1 | 0;
        return make_iprintf$0(counter$0,k,o,fmt)}
      return caml_trampoline_return(make_iprintf$0,[0,k,o,fmt])}
    function make_iprintf(k,o,fmt)
     {return caml_trampoline(make_iprintf$0(0,k,o,fmt))}
    function fn_of_custom_arity(k,o,fmt,param)
     {return caml_trampoline(fn_of_custom_arity$0(0,k,o,fmt,param))}
    function fn_of_padding_precision(k,o,fmt,pad,prec)
     {if(typeof pad === "number")
       {if(typeof prec === "number")
         {if(0 === prec)
           {var _pR_=make_iprintf(k,o,fmt);return function(_p9_){return _pR_}}
          var _pS_=make_iprintf(k,o,fmt),_pT_=function(_p8_){return _pS_};
          return function(_p7_){return _pT_}}
        var _pU_=make_iprintf(k,o,fmt);
        return function(_p6_){return _pU_}}
      else
       {if(0 === pad[0])
         {if(typeof prec === "number")
           {if(0 === prec)
             {var _pV_=make_iprintf(k,o,fmt);
              return function(_qi_){return _pV_}}
            var _pW_=make_iprintf(k,o,fmt),_pX_=function(_qh_){return _pW_};
            return function(_qg_){return _pX_}}
          var _pY_=make_iprintf(k,o,fmt);
          return function(_qf_){return _pY_}}
        if(typeof prec === "number")
         {if(0 === prec)
           {var _pZ_=make_iprintf(k,o,fmt),_p0_=function(_qe_){return _pZ_};
            return function(_qd_){return _p0_}}
          var
           _p1_=make_iprintf(k,o,fmt),
           _p2_=function(_qc_){return _p1_},
           _p3_=function(_qb_){return _p2_};
          return function(_qa_){return _p3_}}
        var _p4_=make_iprintf(k,o,fmt),_p5_=function(_p$_){return _p4_};
        return function(_p__){return _p5_}}}
    function output_acc(o,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           output_acc(o,p);
           return output_string(o,s);
          case 1:
           var _pP_=acc$0[2],_pQ_=acc$0[1];
           if(0 === _pP_[0])
            {var acc$1=_pP_[1];
             output_acc(o,_pQ_);
             output_string(o,cst$29);
             var acc$0=acc$1;
             continue}
           var acc$2=_pP_[1];
           output_acc(o,_pQ_);
           output_string(o,cst$30);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           output_acc(o,p$2);
           return caml_call1(f,o);
          case 7:var p$3=acc$0[1];output_acc(o,p$3);return caml_ml_flush(o);
          case 8:
           var msg=acc$0[2],p$4=acc$0[1];
           output_acc(o,p$4);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           output_acc(o,p$0);
           return output_string(o,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];
           output_acc(o,p$1);
           return caml_ml_output_char(o,c)}}
    function bufput_acc(b,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           bufput_acc(b,p);
           return add_string(b,s);
          case 1:
           var _pN_=acc$0[2],_pO_=acc$0[1];
           if(0 === _pN_[0])
            {var acc$1=_pN_[1];
             bufput_acc(b,_pO_);
             add_string(b,cst$31);
             var acc$0=acc$1;
             continue}
           var acc$2=_pN_[1];
           bufput_acc(b,_pO_);
           add_string(b,cst$32);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           bufput_acc(b,p$2);
           return caml_call1(f,b);
          case 7:var acc$3=acc$0[1],acc$0=acc$3;continue;
          case 8:
           var msg=acc$0[2],p$3=acc$0[1];
           bufput_acc(b,p$3);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           bufput_acc(b,p$0);
           return add_string(b,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];bufput_acc(b,p$1);return add_char(b,c)}}
    function strput_acc(b,acc)
     {var acc$0=acc;
      for(;;)
       if(typeof acc$0 === "number")
        return 0;
       else
        switch(acc$0[0])
         {case 0:
           var
            fmting_lit=acc$0[2],
            p=acc$0[1],
            s=string_of_formatting_lit(fmting_lit);
           strput_acc(b,p);
           return add_string(b,s);
          case 1:
           var _pL_=acc$0[2],_pM_=acc$0[1];
           if(0 === _pL_[0])
            {var acc$1=_pL_[1];
             strput_acc(b,_pM_);
             add_string(b,cst$33);
             var acc$0=acc$1;
             continue}
           var acc$2=_pL_[1];
           strput_acc(b,_pM_);
           add_string(b,cst$34);
           var acc$0=acc$2;
           continue;
          case 6:
           var f=acc$0[2],p$2=acc$0[1];
           strput_acc(b,p$2);
           return add_string(b,caml_call1(f,0));
          case 7:var acc$3=acc$0[1],acc$0=acc$3;continue;
          case 8:
           var msg=acc$0[2],p$3=acc$0[1];
           strput_acc(b,p$3);
           return invalid_arg(msg);
          case 2:
          case 4:
           var s$0=acc$0[2],p$0=acc$0[1];
           strput_acc(b,p$0);
           return add_string(b,s$0);
          default:
           var c=acc$0[2],p$1=acc$0[1];strput_acc(b,p$1);return add_char(b,c)}}
    function failwith_message(param)
     {var fmt=param[1],buf=create$2(256);
      function k(acc){strput_acc(buf,acc);return failwith(contents(buf))}
      return make_printf(k,0,fmt)}
    function open_box_of_string(str)
     {if(caml_string_equal(str,cst$35))return _as_;
      var len=caml_ml_string_length(str);
      function invalid_box(param)
       {return caml_call1(failwith_message(_at_),str)}
      function parse_spaces(i)
       {var i$0=i;
        for(;;)
         {if(i$0 === len)return i$0;
          var match=caml_string_get(str,i$0);
          if(9 !== match && 32 !== match)return i$0;
          var i$1=i$0 + 1 | 0,i$0=i$1;
          continue}}
      function parse_lword(i,j)
       {var j$0=j;
        for(;;)
         {if(j$0 === len)return j$0;
          var match=caml_string_get(str,j$0),switcher=match - 97 | 0;
          if(25 < switcher >>> 0)return j$0;
          var j$1=j$0 + 1 | 0,j$0=j$1;
          continue}}
      function parse_int(i,j)
       {var j$0=j;
        for(;;)
         {if(j$0 === len)return j$0;
          var match=caml_string_get(str,j$0),switch$0=0;
          if(48 <= match)
           {if(! (58 <= match))switch$0 = 1}
          else
           if(45 === match)switch$0 = 1;
          if(switch$0){var j$1=j$0 + 1 | 0,j$0=j$1;continue}
          return j$0}}
      var
       wstart=parse_spaces(0),
       wend=parse_lword(wstart,wstart),
       box_name=sub$0(str,wstart,wend - wstart | 0),
       nstart=parse_spaces(wend),
       nend=parse_int(nstart,nstart);
      if(nstart === nend)
       var indent=0;
      else
       try
        {var
          _pJ_=caml_int_of_string(sub$0(str,nstart,nend - nstart | 0)),
          indent=_pJ_}
       catch(_pK_)
        {_pK_ = caml_wrap_exception(_pK_);
         if(_pK_[1] !== Failure)throw _pK_;
         var indent=invalid_box(0)}
      var exp_end=parse_spaces(nend);
      if(exp_end !== len)invalid_box(0);
      var switch$0=0;
      if
       (caml_string_notequal(box_name,cst$36)
        &&
        caml_string_notequal(box_name,cst_b$0))
       var
        box_type=
         caml_string_notequal(box_name,cst_h)
          ?caml_string_notequal(box_name,cst_hov)
            ?caml_string_notequal(box_name,cst_hv)
              ?caml_string_notequal(box_name,cst_v)?invalid_box(0):1
              :2
            :3
          :0;
      else
       switch$0 = 1;
      if(switch$0)var box_type=4;
      return [0,indent,box_type]}
    function make_padding_fmt_ebb(pad,fmt)
     {if(typeof pad === "number")
       return [0,0,fmt];
      else
       {if(0 === pad[0]){var w=pad[2],s=pad[1];return [0,[0,s,w],fmt]}
        var s$0=pad[1];
        return [0,[1,s$0],fmt]}}
    function make_padprec_fmt_ebb(pad,prec,fmt)
     {if(typeof prec === "number")
       var match=0 === prec?[0,0,fmt]:[0,1,fmt];
      else
       var p=prec[1],match=[0,[0,p],fmt];
      var prec$0=match[1];
      if(typeof pad === "number")
       return [0,0,prec$0,fmt];
      else
       {if(0 === pad[0]){var w=pad[2],s=pad[1];return [0,[0,s,w],prec$0,fmt]}
        var s$0=pad[1];
        return [0,[1,s$0],prec$0,fmt]}}
    function fmt_ebb_of_string(legacy_behavior,str)
     {if(legacy_behavior)
       var flag=legacy_behavior[1],legacy_behavior$0=flag;
      else
       var legacy_behavior$0=1;
      function invalid_format_message(str_ind,msg)
       {return caml_call3(failwith_message(_au_),str,str_ind,msg)}
      function unexpected_end_of_format(end_ind)
       {return invalid_format_message(end_ind,cst_unexpected_end_of_format)}
      function invalid_format_without(str_ind,c,s)
       {return caml_call4(failwith_message(_av_),str,str_ind,c,s)}
      function expected_character(str_ind,expected,read)
       {return caml_call4(failwith_message(_aw_),str,str_ind,expected,read)}
      function add_literal(lit_start,str_ind,fmt)
       {var size=str_ind - lit_start | 0;
        return 0 === size
                ?[0,fmt]
                :1 === size
                  ?[0,[12,caml_string_get(str,lit_start),fmt]]
                  :[0,[11,sub$0(str,lit_start,size),fmt]]}
      function parse_positive(str_ind,end_ind,acc)
       {var str_ind$0=str_ind,acc$0=acc;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var c=caml_string_get(str,str_ind$0),switcher=c - 48 | 0;
          if(9 < switcher >>> 0)return [0,str_ind$0,acc$0];
          var acc$1=(acc$0 * 10 | 0) + (c - 48 | 0) | 0;
          if(max_string_length < acc$1)
           return caml_call3
                   (failwith_message(_aN_),str,acc$1,max_string_length);
          var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1,acc$0=acc$1;
          continue}}
      function parse_integer(str_ind,end_ind)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        var match=caml_string_get(str,str_ind);
        if(48 <= match)
         {if(! (58 <= match))return parse_positive(str_ind,end_ind,0)}
        else
         if(45 === match)
          {if((str_ind + 1 | 0) === end_ind)unexpected_end_of_format(end_ind);
           var c=caml_string_get(str,str_ind + 1 | 0),switcher=c - 48 | 0;
           if(9 < switcher >>> 0)
            return expected_character(str_ind + 1 | 0,cst_digit,c);
           var
            match$0=parse_positive(str_ind + 1 | 0,end_ind,0),
            n=match$0[2],
            next_ind=match$0[1];
           return [0,next_ind,- n | 0]}
        throw [0,Assert_failure,_aO_]}
      function parse_spaces(str_ind,end_ind)
       {var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          if(32 === caml_string_get(str,str_ind$0))
           {var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;continue}
          return str_ind$0}}
      function incompatible_flag(pct_ind,str_ind,symb,option)
       {var subfmt=sub$0(str,pct_ind,str_ind - pct_ind | 0);
        return caml_call5
                (failwith_message(_aT_),str,pct_ind,option,symb,subfmt)}
      function compute_int_conv(pct_ind,str_ind,plus,hash,space,symb)
       {var plus$0=plus,hash$0=hash,space$0=space;
        for(;;)
         {var switch$0=0;
          if(0 === plus$0)
           if(0 === hash$0)
            if(0 === space$0)
             {var switcher=symb - 88 | 0;
              if(! (32 < switcher >>> 0))
               switch(switcher)
                {case 0:return 8;
                 case 12:return 0;
                 case 17:return 3;
                 case 23:return 10;
                 case 29:return 12;
                 case 32:return 6
                 }}
            else
             {if(100 === symb)return 2;if(105 === symb)return 5}
           else
            if(0 === space$0)
             {var switcher$0=symb - 88 | 0;
              if(32 < switcher$0 >>> 0)
               switch$0 = 1;
              else
               switch(switcher$0)
                {case 0:return 9;
                 case 12:return 13;
                 case 17:return 14;
                 case 23:return 11;
                 case 29:return 15;
                 case 32:return 7;
                 default:switch$0 = 1}}
            else
             switch$0 = 1;
          else
           if(0 === hash$0)
            {if(0 === space$0)
              {if(100 === symb)return 1;if(105 === symb)return 4}}
           else
            switch$0 = 1;
          if(switch$0)
           {var switcher$1=symb - 88 | 0;
            if(! (32 < switcher$1 >>> 0))
             switch(switcher$1)
              {case 0:if(legacy_behavior$0)return 9;break;
               case 23:if(legacy_behavior$0)return 11;break;
               case 32:if(legacy_behavior$0)return 7;break;
               case 12:
               case 17:
               case 29:
                if(legacy_behavior$0){var hash$0=0;continue}
                return incompatible_flag(pct_ind,str_ind,symb,cst$48)
               }}
          if(0 === plus$0)
           {if(0 === space$0)throw [0,Assert_failure,_aR_];
            if(legacy_behavior$0){var space$0=0;continue}
            return incompatible_flag(pct_ind,str_ind,symb,cst$45)}
          if(0 === space$0)
           {if(legacy_behavior$0){var plus$0=0;continue}
            return incompatible_flag(pct_ind,str_ind,symb,cst$46)}
          if(legacy_behavior$0){var space$0=0;continue}
          return incompatible_flag(pct_ind,str_ind,32,cst$47)}}
      function search_subformat_end(str_ind,end_ind,c)
       {var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)
           caml_call3(failwith_message(_aP_),str,c,end_ind);
          var match=caml_string_get(str,str_ind$0);
          if(37 === match)
           {if((str_ind$0 + 1 | 0) === end_ind)
             unexpected_end_of_format(end_ind);
            if(caml_string_get(str,str_ind$0 + 1 | 0) === c)return str_ind$0;
            var match$0=caml_string_get(str,str_ind$0 + 1 | 0);
            if(95 <= match$0)
             {if(123 <= match$0)
               {if(! (126 <= match$0))
                 {var switcher=match$0 - 123 | 0;
                  switch(switcher)
                   {case 0:
                     var
                      sub_end=search_subformat_end(str_ind$0 + 2 | 0,end_ind,125),
                      str_ind$2=sub_end + 2 | 0,
                      str_ind$0=str_ind$2;
                     continue;
                    case 1:break;
                    default:
                     return expected_character
                             (str_ind$0 + 1 | 0,cst_character,125)}}}
              else
               if(! (96 <= match$0))
                {if((str_ind$0 + 2 | 0) === end_ind)
                  unexpected_end_of_format(end_ind);
                 var match$1=caml_string_get(str,str_ind$0 + 2 | 0);
                 if(40 === match$1)
                  {var
                    sub_end$0=search_subformat_end(str_ind$0 + 3 | 0,end_ind,41),
                    str_ind$3=sub_end$0 + 2 | 0,
                    str_ind$0=str_ind$3;
                   continue}
                 if(123 === match$1)
                  {var
                    sub_end$1=
                     search_subformat_end(str_ind$0 + 3 | 0,end_ind,125),
                    str_ind$4=sub_end$1 + 2 | 0,
                    str_ind$0=str_ind$4;
                   continue}
                 var str_ind$5=str_ind$0 + 3 | 0,str_ind$0=str_ind$5;
                 continue}}
            else
             {if(40 === match$0)
               {var
                 sub_end$2=search_subformat_end(str_ind$0 + 2 | 0,end_ind,41),
                 str_ind$6=sub_end$2 + 2 | 0,
                 str_ind$0=str_ind$6;
                continue}
              if(41 === match$0)
               return expected_character(str_ind$0 + 1 | 0,cst_character$0,41)}
            var str_ind$1=str_ind$0 + 2 | 0,str_ind$0=str_ind$1;
            continue}
          var str_ind$7=str_ind$0 + 1 | 0,str_ind$0=str_ind$7;
          continue}}
      function parse_magic_size(str_ind,end_ind)
       {try
         {var
           str_ind_1=parse_spaces(str_ind,end_ind),
           match$2=caml_string_get(str,str_ind_1),
           switch$0=0;
          if(48 <= match$2)
           {if(! (58 <= match$2))switch$0 = 1}
          else
           if(45 === match$2)switch$0 = 1;
          if(switch$0)
           {var
             match$3=parse_integer(str_ind_1,end_ind),
             size=match$3[2],
             str_ind_2=match$3[1],
             str_ind_3=parse_spaces(str_ind_2,end_ind);
            if(62 !== caml_string_get(str,str_ind_3))throw Not_found;
            var
             s=sub$0(str,str_ind - 2 | 0,(str_ind_3 - str_ind | 0) + 3 | 0),
             _pH_=[0,[0,str_ind_3 + 1 | 0,[1,s,size]]]}
          else
           var _pH_=0;
          var _pG_=_pH_}
        catch(_pI_)
         {_pI_ = caml_wrap_exception(_pI_);
          if(_pI_ !== Not_found && _pI_[1] !== Failure)throw _pI_;
          var _pG_=0}
        if(_pG_)
         {var
           match=_pG_[1],
           formatting_lit=match[2],
           next_ind=match[1],
           match$0=parse(next_ind,end_ind),
           fmt_rest=match$0[1];
          return [0,[17,formatting_lit,fmt_rest]]}
        var match$1=parse(str_ind,end_ind),fmt_rest$0=match$1[1];
        return [0,[17,_aL_,fmt_rest$0]]}
      function parse_good_break(str_ind,end_ind)
       {try
         {var
           _pz_=str_ind === end_ind?1:0,
           _pA_=_pz_ || (60 !== caml_string_get(str,str_ind)?1:0);
          if(_pA_)throw Not_found;
          var
           str_ind_1=parse_spaces(str_ind + 1 | 0,end_ind),
           match$0=caml_string_get(str,str_ind_1),
           switch$0=0;
          if(48 <= match$0)
           {if(! (58 <= match$0))switch$0 = 1}
          else
           if(45 === match$0)switch$0 = 1;
          if(! switch$0)throw Not_found;
          var
           match$1=parse_integer(str_ind_1,end_ind),
           width=match$1[2],
           str_ind_2=match$1[1],
           str_ind_3=parse_spaces(str_ind_2,end_ind),
           match$2=caml_string_get(str,str_ind_3),
           switcher=match$2 - 45 | 0,
           switch$1=0;
          if(12 < switcher >>> 0)
           if(17 === switcher)
            var
             s=sub$0(str,str_ind - 2 | 0,(str_ind_3 - str_ind | 0) + 3 | 0),
             _pB_=[0,s,width,0],
             _pC_=str_ind_3 + 1 | 0,
             next_ind=_pC_,
             formatting_lit$0=_pB_;
           else
            switch$1 = 1;
          else
           {var switcher$0=switcher - 1 | 0;
            if(1 < switcher$0 >>> 0)
             {var
               match$3=parse_integer(str_ind_3,end_ind),
               offset=match$3[2],
               str_ind_4=match$3[1],
               str_ind_5=parse_spaces(str_ind_4,end_ind);
              if(62 !== caml_string_get(str,str_ind_5))throw Not_found;
              var
               s$0=
                sub$0(str,str_ind - 2 | 0,(str_ind_5 - str_ind | 0) + 3 | 0),
               _pD_=[0,s$0,width,offset],
               _pE_=str_ind_5 + 1 | 0,
               next_ind=_pE_,
               formatting_lit$0=_pD_}
            else
             switch$1 = 1}
          if(switch$1)throw Not_found}
        catch(_pF_)
         {_pF_ = caml_wrap_exception(_pF_);
          if(_pF_ !== Not_found && _pF_[1] !== Failure)throw _pF_;
          var next_ind=str_ind,formatting_lit$0=formatting_lit}
        var match=parse(next_ind,end_ind),fmt_rest=match[1];
        return [0,[17,formatting_lit$0,fmt_rest]]}
      function parse_tag(is_open_tag,str_ind,end_ind)
       {try
         {if(str_ind === end_ind)throw Not_found;
          var match$0=caml_string_get(str,str_ind);
          if(60 === match$0)
           {var ind=index_from$0(str,str_ind + 1 | 0,62);
            if(end_ind <= ind)throw Not_found;
            var
             sub_str=sub$0(str,str_ind,(ind - str_ind | 0) + 1 | 0),
             match$1=parse(ind + 1 | 0,end_ind),
             fmt_rest$0=match$1[1],
             match$2=parse(str_ind,ind + 1 | 0),
             sub_fmt=match$2[1],
             sub_format$0=[0,sub_fmt,sub_str];
            if(is_open_tag)
             var formatting$0=[0,sub_format$0];
            else
             {var switch$0=0;
              if
               (typeof sub_fmt
                !==
                "number"
                &&
                11
                ===
                sub_fmt[0]
                &&
                typeof sub_fmt[2]
                ===
                "number")
               {var str$0=sub_fmt[1];
                try
                 {var switch$1=0;open_box_of_string(str$0)}
                catch(_py_)
                 {_py_ = caml_wrap_exception(_py_);
                  if(_py_[1] !== Failure)throw _py_;
                  switch$0 = 1;
                  switch$1 = 1}
                if(! switch$1)switch$0 = 1}
              var formatting$0=[1,sub_format$0]}
            var _pw_=[0,[18,formatting$0,fmt_rest$0]];
            return _pw_}
          throw Not_found}
        catch(_px_)
         {_px_ = caml_wrap_exception(_px_);
          if(_px_ === Not_found)
           {var
             match=parse(str_ind,end_ind),
             fmt_rest=match[1],
             formatting=is_open_tag?[0,sub_format]:[1,sub_format];
            return [0,[18,formatting,fmt_rest]]}
          throw _px_}}
      function parse_flags(pct_ind,str_ind,end_ind,ign)
       {var zero=[0,0],minus=[0,0],plus=[0,0],space=[0,0],hash=[0,0];
        function set_flag(str_ind,flag)
         {var _pt_=flag[1],_pu_=_pt_?1 - legacy_behavior$0:_pt_;
          if(_pu_)
           {var _pv_=caml_string_get(str,str_ind);
            caml_call3(failwith_message(_ax_),str,str_ind,_pv_)}
          flag[1] = 1;
          return 0}
        var str_ind$0=str_ind;
        for(;;)
         {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var match=caml_string_get(str,str_ind$0),switcher=match - 32 | 0;
          if(! (16 < switcher >>> 0))
           switch(switcher)
            {case 0:
              set_flag(str_ind$0,space);
              var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;
              continue;
             case 3:
              set_flag(str_ind$0,hash);
              var str_ind$2=str_ind$0 + 1 | 0,str_ind$0=str_ind$2;
              continue;
             case 11:
              set_flag(str_ind$0,plus);
              var str_ind$3=str_ind$0 + 1 | 0,str_ind$0=str_ind$3;
              continue;
             case 13:
              set_flag(str_ind$0,minus);
              var str_ind$4=str_ind$0 + 1 | 0,str_ind$0=str_ind$4;
              continue;
             case 16:
              set_flag(str_ind$0,zero);
              var str_ind$5=str_ind$0 + 1 | 0,str_ind$0=str_ind$5;
              continue
             }
          var
           _po_=space[1],
           _pp_=hash[1],
           _pq_=plus[1],
           _pr_=minus[1],
           _ps_=zero[1];
          if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var
           padty=
            0 === _ps_
             ?0 === _pr_?1:0
             :0 === _pr_
               ?2
               :legacy_behavior$0
                 ?0
                 :incompatible_flag(pct_ind,str_ind$0,45,cst_0),
           match$0=caml_string_get(str,str_ind$0);
          if(48 <= match$0)
           {if(! (58 <= match$0))
             {var
               match$1=parse_positive(str_ind$0,end_ind,0),
               width=match$1[2],
               new_ind=match$1[1];
              return parse_after_padding
                      (pct_ind,
                       new_ind,
                       end_ind,
                       _pr_,
                       _pq_,
                       _pp_,
                       _po_,
                       ign,
                       [0,padty,width])}}
          else
           if(42 === match$0)
            return parse_after_padding
                    (pct_ind,
                     str_ind$0 + 1 | 0,
                     end_ind,
                     _pr_,
                     _pq_,
                     _pp_,
                     _po_,
                     ign,
                     [1,padty]);
          switch(padty)
           {case 0:
             if(1 - legacy_behavior$0)
              invalid_format_without(str_ind$0 - 1 | 0,45,cst_padding);
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_pr_,_pq_,_pp_,_po_,ign,0);
            case 1:
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_pr_,_pq_,_pp_,_po_,ign,0);
            default:
             return parse_after_padding
                     (pct_ind,str_ind$0,end_ind,_pr_,_pq_,_pp_,_po_,ign,_ay_)}}}
      function parse_after_padding
       (pct_ind,str_ind,end_ind,minus,plus,hash,space,ign,pad)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        var symb=caml_string_get(str,str_ind);
        if(46 === symb)
         {var str_ind$0=str_ind + 1 | 0;
          if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
          var
           parse_literal=
            function(minus,str_ind)
             {var
               match=parse_positive(str_ind,end_ind,0),
               prec=match[2],
               new_ind=match[1];
              return parse_after_precision
                      (pct_ind,
                       new_ind,
                       end_ind,
                       minus,
                       plus,
                       hash,
                       space,
                       ign,
                       pad,
                       [0,prec])},
           symb$0=caml_string_get(str,str_ind$0);
          if(48 <= symb$0)
           {if(! (58 <= symb$0))return parse_literal(minus,str_ind$0)}
          else
           if(42 <= symb$0)
            {var switcher=symb$0 - 42 | 0;
             switch(switcher)
              {case 0:
                return parse_after_precision
                        (pct_ind,
                         str_ind$0 + 1 | 0,
                         end_ind,
                         minus,
                         plus,
                         hash,
                         space,
                         ign,
                         pad,
                         1);
               case 1:
               case 3:
                if(legacy_behavior$0)
                 {var
                   _pn_=str_ind$0 + 1 | 0,
                   minus$0=minus || (45 === symb$0?1:0);
                  return parse_literal(minus$0,_pn_)}
                break
               }}
          return legacy_behavior$0
                  ?parse_after_precision
                    (pct_ind,
                     str_ind$0,
                     end_ind,
                     minus,
                     plus,
                     hash,
                     space,
                     ign,
                     pad,
                     _az_)
                  :invalid_format_without(str_ind$0 - 1 | 0,46,cst_precision)}
        return parse_conversion
                (pct_ind,
                 str_ind + 1 | 0,
                 end_ind,
                 plus,
                 hash,
                 space,
                 ign,
                 pad,
                 0,
                 pad,
                 symb)}
      function parse_after_precision
       (pct_ind,str_ind,end_ind,minus,plus,hash,space,ign,pad,match)
       {if(str_ind === end_ind)unexpected_end_of_format(end_ind);
        function parse_conv(padprec)
         {return parse_conversion
                  (pct_ind,
                   str_ind + 1 | 0,
                   end_ind,
                   plus,
                   hash,
                   space,
                   ign,
                   pad,
                   match,
                   padprec,
                   caml_string_get(str,str_ind))}
        if(typeof pad === "number")
         {if(typeof match === "number" && 0 === match)return parse_conv(0);
          if(0 === minus)
           {if(typeof match === "number")return parse_conv(_aA_);
            var n=match[1];
            return parse_conv([0,1,n])}
          if(typeof match === "number")return parse_conv(_aB_);
          var n$0=match[1];
          return parse_conv([0,0,n$0])}
        return parse_conv(pad)}
      function parse_conversion
       (pct_ind,str_ind,end_ind,plus,hash,space,ign,pad,prec,padprec,symb)
       {var
         plus_used=[0,0],
         hash_used=[0,0],
         space_used=[0,0],
         ign_used=[0,0],
         pad_used=[0,0],
         prec_used=[0,0];
        function get_plus(param){plus_used[1] = 1;return plus}
        function get_hash(param){hash_used[1] = 1;return hash}
        function get_space(param){space_used[1] = 1;return space}
        function get_ign(param){ign_used[1] = 1;return ign}
        function get_pad(param){pad_used[1] = 1;return pad}
        function get_prec(param){prec_used[1] = 1;return prec}
        function get_padprec(param){pad_used[1] = 1;return padprec}
        function get_int_pad(param)
         {var pad=get_pad(0),match=get_prec(0);
          if(typeof match === "number" && 0 === match)return pad;
          if(typeof pad === "number")
           return 0;
          else
           {if(0 === pad[0])
             {if(2 <= pad[1])
               {var n=pad[2];
                return legacy_behavior$0
                        ?[0,1,n]
                        :incompatible_flag(pct_ind,str_ind,48,cst_precision$0)}
              return pad}
            return 2 <= pad[1]
                    ?legacy_behavior$0
                      ?_aC_
                      :incompatible_flag(pct_ind,str_ind,48,cst_precision$1)
                    :pad}}
        function check_no_0(symb,pad)
         {if(typeof pad === "number")
           return pad;
          else
           {if(0 === pad[0])
             {if(2 <= pad[1])
               {var width=pad[2];
                return legacy_behavior$0
                        ?[0,1,width]
                        :incompatible_flag(pct_ind,str_ind,symb,cst_0$0)}
              return pad}
            return 2 <= pad[1]
                    ?legacy_behavior$0
                      ?_aD_
                      :incompatible_flag(pct_ind,str_ind,symb,cst_0$1)
                    :pad}}
        function opt_of_pad(c,pad)
         {if(typeof pad === "number")
           return 0;
          else
           {if(0 === pad[0])
             switch(pad[1])
              {case 0:
                var width=pad[2];
                return legacy_behavior$0
                        ?[0,width]
                        :incompatible_flag(pct_ind,str_ind,c,cst$37);
               case 1:var width$0=pad[2];return [0,width$0];
               default:
                var width$1=pad[2];
                return legacy_behavior$0
                        ?[0,width$1]
                        :incompatible_flag(pct_ind,str_ind,c,cst_0$2)}
            return incompatible_flag(pct_ind,str_ind,c,cst$38)}}
        function get_pad_opt(c){return opt_of_pad(c,get_pad(0))}
        function get_padprec_opt(c){return opt_of_pad(c,get_padprec(0))}
        var switch$0=0;
        if(124 <= symb)
         switch$0 = 1;
        else
         switch(symb)
          {case 33:
            var
             match$6=parse(str_ind,end_ind),
             fmt_rest$5=match$6[1],
             fmt_result=[0,[10,fmt_rest$5]];
            break;
           case 40:
            var
             sub_end=search_subformat_end(str_ind,end_ind,41),
             match$8=parse(sub_end + 2 | 0,end_ind),
             fmt_rest$7=match$8[1],
             match$9=parse(str_ind,sub_end),
             sub_fmt=match$9[1],
             sub_fmtty=fmtty_of_fmt(sub_fmt);
            if(get_ign(0))
             var
              ignored$2=[9,get_pad_opt(95),sub_fmtty],
              _oY_=[0,[23,ignored$2,fmt_rest$7]];
            else
             var _oY_=[0,[14,get_pad_opt(40),sub_fmtty,fmt_rest$7]];
            var fmt_result=_oY_;
            break;
           case 44:var fmt_result=parse(str_ind,end_ind);break;
           case 67:
            var
             match$12=parse(str_ind,end_ind),
             fmt_rest$10=match$12[1],
             _o0_=get_ign(0)?[0,[23,1,fmt_rest$10]]:[0,[1,fmt_rest$10]],
             fmt_result=_o0_;
            break;
           case 78:
            var
             match$16=parse(str_ind,end_ind),
             fmt_rest$14=match$16[1],
             counter$0=2;
            if(get_ign(0))
             var ignored$6=[11,counter$0],_o6_=[0,[23,ignored$6,fmt_rest$14]];
            else
             var _o6_=[0,[21,counter$0,fmt_rest$14]];
            var fmt_result=_o6_;
            break;
           case 83:
            var
             pad$6=check_no_0(symb,get_padprec(0)),
             match$17=parse(str_ind,end_ind),
             fmt_rest$15=match$17[1];
            if(get_ign(0))
             var
              ignored$7=[1,get_padprec_opt(95)],
              _o7_=[0,[23,ignored$7,fmt_rest$15]];
            else
             var
              match$18=make_padding_fmt_ebb(pad$6,fmt_rest$15),
              fmt_rest$16=match$18[2],
              pad$7=match$18[1],
              _o7_=[0,[3,pad$7,fmt_rest$16]];
            var fmt_result=_o7_;
            break;
           case 91:
            if(str_ind === end_ind)unexpected_end_of_format(end_ind);
            var
             char_set=create_char_set(0),
             add_char=function(c){return add_in_char_set(char_set,c)},
             add_range=
              function(c$0,c)
               {if(! (c < c$0))
                 {var i=c$0;
                  for(;;)
                   {add_in_char_set(char_set,char_of_int(i));
                    var _pm_=i + 1 | 0;
                    if(c !== i){var i=_pm_;continue}
                    break}}
                return 0},
             fail_single_percent=
              function(str_ind)
               {return caml_call2(failwith_message(_aM_),str,str_ind)},
             parse_char_set_content=
              function(counter,str_ind,end_ind)
               {var str_ind$0=str_ind;
                for(;;)
                 {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
                  var c=caml_string_get(str,str_ind$0);
                  if(45 === c)
                   {add_char(45);
                    var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1;
                    continue}
                  if(93 === c)return str_ind$0 + 1 | 0;
                  var _pl_=str_ind$0 + 1 | 0;
                  if(counter < 50)
                   {var counter$0=counter + 1 | 0;
                    return parse_char_set_after_char$0(counter$0,_pl_,end_ind,c)}
                  return caml_trampoline_return
                          (parse_char_set_after_char$0,[0,_pl_,end_ind,c])}},
             parse_char_set_after_char$0=
              function(counter,str_ind,end_ind,c)
               {var str_ind$0=str_ind,c$0=c;
                for(;;)
                 {if(str_ind$0 === end_ind)unexpected_end_of_format(end_ind);
                  var c$1=caml_string_get(str,str_ind$0),switch$0=0;
                  if(46 <= c$1)
                   {if(64 === c$1)
                     switch$0 = 1;
                    else
                     if(93 === c$1){add_char(c$0);return str_ind$0 + 1 | 0}}
                  else
                   if(37 === c$1)
                    switch$0 = 1;
                   else
                    if(45 <= c$1)
                     {var str_ind$2=str_ind$0 + 1 | 0;
                      if(str_ind$2 === end_ind)unexpected_end_of_format(end_ind);
                      var c$2=caml_string_get(str,str_ind$2);
                      if(37 === c$2)
                       {if((str_ind$2 + 1 | 0) === end_ind)
                         unexpected_end_of_format(end_ind);
                        var c$3=caml_string_get(str,str_ind$2 + 1 | 0);
                        if(37 !== c$3 && 64 !== c$3)
                         return fail_single_percent(str_ind$2);
                        add_range(c$0,c$3);
                        var _pj_=str_ind$2 + 2 | 0;
                        if(counter < 50)
                         {var counter$2=counter + 1 | 0;
                          return parse_char_set_content(counter$2,_pj_,end_ind)}
                        return caml_trampoline_return
                                (parse_char_set_content,[0,_pj_,end_ind])}
                      if(93 === c$2)
                       {add_char(c$0);add_char(45);return str_ind$2 + 1 | 0}
                      add_range(c$0,c$2);
                      var _pk_=str_ind$2 + 1 | 0;
                      if(counter < 50)
                       {var counter$1=counter + 1 | 0;
                        return parse_char_set_content(counter$1,_pk_,end_ind)}
                      return caml_trampoline_return
                              (parse_char_set_content,[0,_pk_,end_ind])}
                  if(switch$0 && 37 === c$0)
                   {add_char(c$1);
                    var _pi_=str_ind$0 + 1 | 0;
                    if(counter < 50)
                     {var counter$0=counter + 1 | 0;
                      return parse_char_set_content(counter$0,_pi_,end_ind)}
                    return caml_trampoline_return
                            (parse_char_set_content,[0,_pi_,end_ind])}
                  if(37 === c$0)fail_single_percent(str_ind$0);
                  add_char(c$0);
                  var str_ind$1=str_ind$0 + 1 | 0,str_ind$0=str_ind$1,c$0=c$1;
                  continue}},
             parse_char_set_after_char=
              function(str_ind,end_ind,c)
               {return caml_trampoline
                        (parse_char_set_after_char$0(0,str_ind,end_ind,c))};
            if(str_ind === end_ind)unexpected_end_of_format(end_ind);
            var match$31=caml_string_get(str,str_ind);
            if(94 === match$31)
             var str_ind$0=str_ind + 1 | 0,str_ind$1=str_ind$0,reverse=1;
            else
             var str_ind$1=str_ind,reverse=0;
            if(str_ind$1 === end_ind)unexpected_end_of_format(end_ind);
            var
             c=caml_string_get(str,str_ind$1),
             next_ind=parse_char_set_after_char(str_ind$1 + 1 | 0,end_ind,c),
             char_set$0=freeze_char_set(char_set),
             char_set$1=reverse?rev_char_set(char_set$0):char_set$0,
             match$21=parse(next_ind,end_ind),
             fmt_rest$19=match$21[1];
            if(get_ign(0))
             var
              ignored$9=[10,get_pad_opt(95),char_set$1],
              _pa_=[0,[23,ignored$9,fmt_rest$19]];
            else
             var _pa_=[0,[20,get_pad_opt(91),char_set$1,fmt_rest$19]];
            var fmt_result=_pa_;
            break;
           case 97:
            var
             match$22=parse(str_ind,end_ind),
             fmt_rest$20=match$22[1],
             fmt_result=[0,[15,fmt_rest$20]];
            break;
           case 99:
            var
             char_format=
              function(fmt_rest)
               {return get_ign(0)?[0,[23,0,fmt_rest]]:[0,[0,fmt_rest]]},
             match$23=parse(str_ind,end_ind),
             fmt_rest$21=match$23[1],
             match$24=get_pad_opt(99);
            if(match$24)
             {if(0 === match$24[1])
               var
                _pb_=get_ign(0)?[0,[23,3,fmt_rest$21]]:[0,[22,fmt_rest$21]],
                _pc_=_pb_;
              else
               var
                _pc_=
                 legacy_behavior$0
                  ?char_format(fmt_rest$21)
                  :invalid_format_message
                    (str_ind,cst_non_zero_widths_are_unsupp);
              var _pd_=_pc_}
            else
             var _pd_=char_format(fmt_rest$21);
            var fmt_result=_pd_;
            break;
           case 114:
            var
             match$25=parse(str_ind,end_ind),
             fmt_rest$22=match$25[1],
             _pe_=get_ign(0)?[0,[23,2,fmt_rest$22]]:[0,[19,fmt_rest$22]],
             fmt_result=_pe_;
            break;
           case 115:
            var
             pad$9=check_no_0(symb,get_padprec(0)),
             match$26=parse(str_ind,end_ind),
             fmt_rest$23=match$26[1];
            if(get_ign(0))
             var
              ignored$10=[0,get_padprec_opt(95)],
              _pf_=[0,[23,ignored$10,fmt_rest$23]];
            else
             var
              match$27=make_padding_fmt_ebb(pad$9,fmt_rest$23),
              fmt_rest$24=match$27[2],
              pad$10=match$27[1],
              _pf_=[0,[2,pad$10,fmt_rest$24]];
            var fmt_result=_pf_;
            break;
           case 116:
            var
             match$28=parse(str_ind,end_ind),
             fmt_rest$25=match$28[1],
             fmt_result=[0,[16,fmt_rest$25]];
            break;
           case 123:
            var
             sub_end$0=search_subformat_end(str_ind,end_ind,125),
             match$29=parse(str_ind,sub_end$0),
             sub_fmt$0=match$29[1],
             match$30=parse(sub_end$0 + 2 | 0,end_ind),
             fmt_rest$26=match$30[1],
             sub_fmtty$0=fmtty_of_fmt(sub_fmt$0);
            if(get_ign(0))
             var
              ignored$11=[8,get_pad_opt(95),sub_fmtty$0],
              _pg_=[0,[23,ignored$11,fmt_rest$26]];
            else
             var _pg_=[0,[13,get_pad_opt(123),sub_fmtty$0,fmt_rest$26]];
            var fmt_result=_pg_;
            break;
           case 66:
           case 98:
            var
             pad$3=check_no_0(symb,get_padprec(0)),
             match$10=parse(str_ind,end_ind),
             fmt_rest$8=match$10[1];
            if(get_ign(0))
             var
              ignored$3=[7,get_padprec_opt(95)],
              _oZ_=[0,[23,ignored$3,fmt_rest$8]];
            else
             var
              match$11=make_padding_fmt_ebb(pad$3,fmt_rest$8),
              fmt_rest$9=match$11[2],
              pad$4=match$11[1],
              _oZ_=[0,[9,pad$4,fmt_rest$9]];
            var fmt_result=_oZ_;
            break;
           case 37:
           case 64:
            var
             match$7=parse(str_ind,end_ind),
             fmt_rest$6=match$7[1],
             fmt_result=[0,[12,symb,fmt_rest$6]];
            break;
           case 76:
           case 108:
           case 110:
            var switch$1=0;
            if(str_ind !== end_ind)
             {var
               symb$0=caml_string_get(str,str_ind),
               _ph_=symb$0 - 88 | 0,
               switch$2=0;
              if(! (32 < _ph_ >>> 0))
               switch(_ph_)
                {case 0:
                 case 12:
                 case 17:
                 case 23:
                 case 29:
                 case 32:var _o5_=1;switch$2 = 1;break
                 }
              if(! switch$2)var _o5_=0;
              if(_o5_){switch$0 = 1;switch$1 = 1}}
            if(! switch$1)
             {var
               match$15=parse(str_ind,end_ind),
               fmt_rest$13=match$15[1],
               switch$3=0;
              if(108 <= symb)
               {if(! (111 <= symb))
                 {var switcher$0=symb - 108 | 0;
                  switch(switcher$0)
                   {case 0:var counter=0;switch$3 = 1;break;
                    case 1:break;
                    default:var counter=1;switch$3 = 1}}}
              else
               if(76 === symb){var counter=2;switch$3 = 1}
              if(! switch$3)throw [0,Assert_failure,_aQ_];
              if(get_ign(0))
               var ignored$5=[11,counter],_o4_=[0,[23,ignored$5,fmt_rest$13]];
              else
               var _o4_=[0,[21,counter,fmt_rest$13]];
              var fmt_result=_o4_}
            break;
           case 32:
           case 35:
           case 43:
           case 45:
           case 95:
            var
             fmt_result=
              caml_call3(failwith_message(_aH_),str,pct_ind,symb);
            break;
           case 88:
           case 100:
           case 105:
           case 111:
           case 117:
           case 120:
            var
             _o8_=get_space(0),
             _o9_=get_hash(0),
             iconv$2=
              compute_int_conv(pct_ind,str_ind,get_plus(0),_o9_,_o8_,symb),
             match$19=parse(str_ind,end_ind),
             fmt_rest$17=match$19[1];
            if(get_ign(0))
             var
              ignored$8=[2,iconv$2,get_pad_opt(95)],
              _o__=[0,[23,ignored$8,fmt_rest$17]];
            else
             var
              _o$_=get_prec(0),
              match$20=make_padprec_fmt_ebb(get_int_pad(0),_o$_,fmt_rest$17),
              fmt_rest$18=match$20[3],
              prec$4=match$20[2],
              pad$8=match$20[1],
              _o__=[0,[4,iconv$2,pad$8,prec$4,fmt_rest$18]];
            var fmt_result=_o__;
            break;
           case 69:
           case 70:
           case 71:
           case 72:
           case 101:
           case 102:
           case 103:
           case 104:
            var
             space$1=get_space(0),
             plus$2=get_plus(0),
             plus$3=plus$2,
             space$2=space$1;
            for(;;)
             {if(0 === plus$3)
               if(0 === space$2)
                {var switch$4=0;
                 if(73 <= symb)
                  {var switcher$1=symb - 101 | 0;
                   if(3 < switcher$1 >>> 0)
                    switch$4 = 1;
                   else
                    switch(switcher$1)
                     {case 0:var fconv=3;break;
                      case 1:var fconv=0;break;
                      case 2:var fconv=9;break;
                      default:var fconv=16}}
                 else
                  if(69 <= symb)
                   {var switcher$2=symb - 69 | 0;
                    switch(switcher$2)
                     {case 0:var fconv=6;break;
                      case 1:var fconv=15;break;
                      case 2:var fconv=12;break;
                      default:var fconv=19}}
                  else
                   switch$4 = 1;
                 if(switch$4)throw [0,Assert_failure,_aS_]}
               else
                {var switch$5=0;
                 if(73 <= symb)
                  {var switcher$3=symb - 101 | 0;
                   if(3 < switcher$3 >>> 0)
                    switch$5 = 1;
                   else
                    switch(switcher$3)
                     {case 0:var fconv=5;break;
                      case 1:var fconv=2;break;
                      case 2:var fconv=11;break;
                      default:var fconv=18}}
                 else
                  if(69 <= symb)
                   {var switcher$4=symb - 69 | 0;
                    switch(switcher$4)
                     {case 0:var fconv=8;break;
                      case 1:switch$5 = 1;break;
                      case 2:var fconv=14;break;
                      default:var fconv=21}}
                  else
                   switch$5 = 1;
                 if(switch$5)
                  {if(legacy_behavior$0){var space$2=0;continue}
                   var fconv=incompatible_flag(pct_ind,str_ind,symb,cst$49)}}
              else
               if(0 === space$2)
                {var switch$6=0;
                 if(73 <= symb)
                  {var switcher$5=symb - 101 | 0;
                   if(3 < switcher$5 >>> 0)
                    switch$6 = 1;
                   else
                    switch(switcher$5)
                     {case 0:var fconv=4;break;
                      case 1:var fconv=1;break;
                      case 2:var fconv=10;break;
                      default:var fconv=17}}
                 else
                  if(69 <= symb)
                   {var switcher$6=symb - 69 | 0;
                    switch(switcher$6)
                     {case 0:var fconv=7;break;
                      case 1:switch$6 = 1;break;
                      case 2:var fconv=13;break;
                      default:var fconv=20}}
                  else
                   switch$6 = 1;
                 if(switch$6)
                  {if(legacy_behavior$0){var plus$3=0;continue}
                   var fconv=incompatible_flag(pct_ind,str_ind,symb,cst$50)}}
               else
                {if(legacy_behavior$0){var space$2=0;continue}
                 var fconv=incompatible_flag(pct_ind,str_ind,32,cst$51)}
              var match$13=parse(str_ind,end_ind),fmt_rest$11=match$13[1];
              if(get_ign(0))
               {var match=get_prec(0);
                if(typeof match === "number")
                 var
                  _o1_=
                   0 === match?0:incompatible_flag(pct_ind,str_ind,95,cst$39);
                else
                 var ndec=match[1],_o1_=[0,ndec];
                var
                 ignored$4=[6,get_pad_opt(95),_o1_],
                 _o2_=[0,[23,ignored$4,fmt_rest$11]]}
              else
               var
                _o3_=get_prec(0),
                match$14=make_padprec_fmt_ebb(get_pad(0),_o3_,fmt_rest$11),
                fmt_rest$12=match$14[3],
                prec$3=match$14[2],
                pad$5=match$14[1],
                _o2_=[0,[8,fconv,pad$5,prec$3,fmt_rest$12]];
              var fmt_result=_o2_;
              break}
            break;
           default:switch$0 = 1}
        if(switch$0)
         {var switch$7=0;
          if(108 <= symb)
           if(111 <= symb)
            switch$7 = 1;
           else
            {var switcher=symb - 108 | 0,switch$8=0;
             switch(switcher)
              {case 0:
                var
                 _oI_=caml_string_get(str,str_ind),
                 _oJ_=get_space(0),
                 _oK_=get_hash(0),
                 iconv=
                  compute_int_conv
                   (pct_ind,str_ind + 1 | 0,get_plus(0),_oK_,_oJ_,_oI_),
                 match$0=parse(str_ind + 1 | 0,end_ind),
                 fmt_rest=match$0[1];
                if(get_ign(0))
                 var
                  ignored=[3,iconv,get_pad_opt(95)],
                  _oL_=[0,[23,ignored,fmt_rest]];
                else
                 var
                  _oN_=get_prec(0),
                  match$1=make_padprec_fmt_ebb(get_int_pad(0),_oN_,fmt_rest),
                  fmt_rest$0=match$1[3],
                  prec$0=match$1[2],
                  pad$0=match$1[1],
                  _oL_=[0,[5,iconv,pad$0,prec$0,fmt_rest$0]];
                var _oM_=_oL_;
                break;
               case 1:switch$7 = 1;switch$8 = 1;break;
               default:
                var
                 _oO_=caml_string_get(str,str_ind),
                 _oP_=get_space(0),
                 _oQ_=get_hash(0),
                 iconv$0=
                  compute_int_conv
                   (pct_ind,str_ind + 1 | 0,get_plus(0),_oQ_,_oP_,_oO_),
                 match$2=parse(str_ind + 1 | 0,end_ind),
                 fmt_rest$1=match$2[1];
                if(get_ign(0))
                 var
                  ignored$0=[4,iconv$0,get_pad_opt(95)],
                  _oR_=[0,[23,ignored$0,fmt_rest$1]];
                else
                 var
                  _oS_=get_prec(0),
                  match$3=make_padprec_fmt_ebb(get_int_pad(0),_oS_,fmt_rest$1),
                  fmt_rest$2=match$3[3],
                  prec$1=match$3[2],
                  pad$1=match$3[1],
                  _oR_=[0,[6,iconv$0,pad$1,prec$1,fmt_rest$2]];
                var _oM_=_oR_}
             if(! switch$8)var fmt_result=_oM_}
          else
           if(76 === symb)
            {var
              _oT_=caml_string_get(str,str_ind),
              _oU_=get_space(0),
              _oV_=get_hash(0),
              iconv$1=
               compute_int_conv
                (pct_ind,str_ind + 1 | 0,get_plus(0),_oV_,_oU_,_oT_),
              match$4=parse(str_ind + 1 | 0,end_ind),
              fmt_rest$3=match$4[1];
             if(get_ign(0))
              var
               ignored$1=[5,iconv$1,get_pad_opt(95)],
               _oW_=[0,[23,ignored$1,fmt_rest$3]];
             else
              var
               _oX_=get_prec(0),
               match$5=make_padprec_fmt_ebb(get_int_pad(0),_oX_,fmt_rest$3),
               fmt_rest$4=match$5[3],
               prec$2=match$5[2],
               pad$2=match$5[1],
               _oW_=[0,[7,iconv$1,pad$2,prec$2,fmt_rest$4]];
             var fmt_result=_oW_}
           else
            switch$7 = 1;
          if(switch$7)
           var
            fmt_result=
             caml_call3(failwith_message(_aE_),str,str_ind - 1 | 0,symb)}
        if(1 - legacy_behavior$0)
         {var _oz_=1 - plus_used[1],plus$0=_oz_?plus:_oz_;
          if(plus$0)incompatible_flag(pct_ind,str_ind,symb,cst$40);
          var _oA_=1 - hash_used[1],hash$0=_oA_?hash:_oA_;
          if(hash$0)incompatible_flag(pct_ind,str_ind,symb,cst$41);
          var _oB_=1 - space_used[1],space$0=_oB_?space:_oB_;
          if(space$0)incompatible_flag(pct_ind,str_ind,symb,cst$42);
          var _oC_=1 - pad_used[1],_oD_=_oC_?caml_notequal([0,pad],_aF_):_oC_;
          if(_oD_)incompatible_flag(pct_ind,str_ind,symb,cst_padding$0);
          var
           _oE_=1 - prec_used[1],
           _oF_=_oE_?caml_notequal([0,prec],_aG_):_oE_;
          if(_oF_)
           {var _oG_=ign?95:symb;
            incompatible_flag(pct_ind,str_ind,_oG_,cst_precision$2)}
          var plus$1=ign?plus:ign;
          if(plus$1)incompatible_flag(pct_ind,str_ind,95,cst$43)}
        var _oH_=1 - ign_used[1],ign$0=_oH_?ign:_oH_;
        if(ign$0)
         {var switch$9=0;
          if(38 <= symb)
           {if(44 !== symb && 64 !== symb)switch$9 = 1}
          else
           if(33 !== symb && ! (37 <= symb))switch$9 = 1;
          var switch$10=0;
          if(switch$9 || ! legacy_behavior$0)switch$10 = 1;
          if(switch$10)incompatible_flag(pct_ind,str_ind,symb,cst$44)}
        return fmt_result}
      function parse(lit_start,end_ind)
       {var str_ind=lit_start;
        for(;;)
         {if(str_ind === end_ind)return add_literal(lit_start,str_ind,0);
          var match=caml_string_get(str,str_ind);
          if(37 === match)
           {var str_ind$2=str_ind + 1 | 0;
            if(str_ind$2 === end_ind)unexpected_end_of_format(end_ind);
            var
             match$1=caml_string_get(str,str_ind$2),
             _oy_=
              95 === match$1
               ?parse_flags(str_ind,str_ind$2 + 1 | 0,end_ind,1)
               :parse_flags(str_ind,str_ind$2,end_ind,0),
             fmt_rest=_oy_[1];
            return add_literal(lit_start,str_ind,fmt_rest)}
          if(64 === match)
           {var str_ind$0=str_ind + 1 | 0;
            if(str_ind$0 === end_ind)
             var match$0=_aI_;
            else
             {var c=caml_string_get(str,str_ind$0),switch$0=0;
              if(65 <= c)
               if(94 <= c)
                {var switcher=c - 123 | 0;
                 if(2 < switcher >>> 0)
                  switch$0 = 1;
                 else
                  switch(switcher)
                   {case 0:
                     var match$0=parse_tag(1,str_ind$0 + 1 | 0,end_ind);break;
                    case 1:switch$0 = 1;break;
                    default:
                     var
                      match$3=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$2=match$3[1],
                      match$0=[0,[17,1,fmt_rest$2]]}}
               else
                if(91 <= c)
                 {var switcher$0=c - 91 | 0;
                  switch(switcher$0)
                   {case 0:
                     var match$0=parse_tag(0,str_ind$0 + 1 | 0,end_ind);break;
                    case 1:switch$0 = 1;break;
                    default:
                     var
                      match$4=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$3=match$4[1],
                      match$0=[0,[17,0,fmt_rest$3]]}}
                else
                 switch$0 = 1;
              else
               if(10 === c)
                var
                 match$5=parse(str_ind$0 + 1 | 0,end_ind),
                 fmt_rest$4=match$5[1],
                 match$0=[0,[17,3,fmt_rest$4]];
               else
                if(32 <= c)
                 {var switcher$1=c - 32 | 0;
                  switch(switcher$1)
                   {case 0:
                     var
                      match$6=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$5=match$6[1],
                      match$0=[0,[17,_aJ_,fmt_rest$5]];
                     break;
                    case 5:
                     var switch$1=0;
                     if
                      ((str_ind$0 + 1 | 0)
                       <
                       end_ind
                       &&
                       37
                       ===
                       caml_string_get(str,str_ind$0 + 1 | 0))
                      {var
                        match$7=parse(str_ind$0 + 2 | 0,end_ind),
                        fmt_rest$6=match$7[1],
                        match$0=[0,[17,6,fmt_rest$6]];
                       switch$1 = 1}
                     if(! switch$1)
                      var
                       match$8=parse(str_ind$0,end_ind),
                       fmt_rest$7=match$8[1],
                       match$0=[0,[12,64,fmt_rest$7]];
                     break;
                    case 12:
                     var
                      match$9=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$8=match$9[1],
                      match$0=[0,[17,_aK_,fmt_rest$8]];
                     break;
                    case 14:
                     var
                      match$10=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$9=match$10[1],
                      match$0=[0,[17,4,fmt_rest$9]];
                     break;
                    case 27:
                     var match$0=parse_good_break(str_ind$0 + 1 | 0,end_ind);
                     break;
                    case 28:
                     var match$0=parse_magic_size(str_ind$0 + 1 | 0,end_ind);
                     break;
                    case 31:
                     var
                      match$11=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$10=match$11[1],
                      match$0=[0,[17,2,fmt_rest$10]];
                     break;
                    case 32:
                     var
                      match$12=parse(str_ind$0 + 1 | 0,end_ind),
                      fmt_rest$11=match$12[1],
                      match$0=[0,[17,5,fmt_rest$11]];
                     break;
                    default:switch$0 = 1}}
                else
                 switch$0 = 1;
              if(switch$0)
               var
                match$2=parse(str_ind$0 + 1 | 0,end_ind),
                fmt_rest$1=match$2[1],
                match$0=[0,[17,[2,c],fmt_rest$1]]}
            var fmt_rest$0=match$0[1];
            return add_literal(lit_start,str_ind,fmt_rest$0)}
          var str_ind$1=str_ind + 1 | 0,str_ind=str_ind$1;
          continue}}
      return parse(0,caml_ml_string_length(str))}
    function format_of_string_fmtty(str,fmtty)
     {var match=fmt_ebb_of_string(0,str),fmt=match[1];
      try
       {var _ow_=[0,type_format(fmt,fmtty),str];return _ow_}
      catch(_ox_)
       {_ox_ = caml_wrap_exception(_ox_);
        if(_ox_ === Type_mismatch)
         {var _ov_=string_of_fmtty(fmtty);
          return caml_call2(failwith_message(_aU_),str,_ov_)}
        throw _ox_}}
    function format_of_string_format(str,param)
     {var
       str$0=param[2],
       fmt=param[1],
       match=fmt_ebb_of_string(0,str),
       fmt$0=match[1];
      try
       {var _ot_=[0,type_format(fmt$0,fmtty_of_fmt(fmt)),str];return _ot_}
      catch(_ou_)
       {_ou_ = caml_wrap_exception(_ou_);
        if(_ou_ === Type_mismatch)
         return caml_call2(failwith_message(_aV_),str,str$0);
        throw _ou_}}
    var
     CamlinternalFormat=
      [0,
       is_in_char_set,
       rev_char_set,
       create_char_set,
       add_in_char_set,
       freeze_char_set,
       param_format_of_ignored_format,
       make_printf,
       make_iprintf,
       output_acc,
       bufput_acc,
       strput_acc,
       type_format,
       fmt_ebb_of_string,
       format_of_string_fmtty,
       format_of_string_format,
       char_of_iconv,
       string_of_formatting_lit,
       string_of_formatting_gen,
       string_of_fmtty,
       string_of_fmt,
       open_box_of_string,
       symm,
       trans,
       recast];
    caml_register_global(750,CamlinternalFormat,"CamlinternalFormat");
    function kfprintf(k,o,param)
     {var fmt=param[1],_os_=0;
      return make_printf
              (function(acc){output_acc(o,acc);return caml_call1(k,o)},
               _os_,
               fmt)}
    function kbprintf(k,b,param)
     {var fmt=param[1],_or_=0;
      return make_printf
              (function(acc){bufput_acc(b,acc);return caml_call1(k,b)},
               _or_,
               fmt)}
    function ikfprintf(k,oc,param)
     {var fmt=param[1];return make_iprintf(k,oc,fmt)}
    function fprintf(oc,fmt){return kfprintf(function(_oq_){return 0},oc,fmt)}
    function bprintf(b,fmt){return kbprintf(function(_op_){return 0},b,fmt)}
    function ifprintf(oc,fmt)
     {return ikfprintf(function(_oo_){return 0},oc,fmt)}
    function printf(fmt){return fprintf(stdout,fmt)}
    function eprintf(fmt){return fprintf(stderr,fmt)}
    function ksprintf(k,param)
     {var fmt=param[1];
      function k$0(acc)
       {var buf=create$2(64);
        strput_acc(buf,acc);
        return caml_call1(k,contents(buf))}
      return make_printf(k$0,0,fmt)}
    function sprintf(fmt){return ksprintf(function(s){return s},fmt)}
    var
     Stdlib_printf=
      [0,
       fprintf,
       printf,
       eprintf,
       sprintf,
       bprintf,
       ifprintf,
       kfprintf,
       ikfprintf,
       ksprintf,
       kbprintf,
       ksprintf];
    caml_register_global(751,Stdlib_printf,"Stdlib__printf");
    var
     Bad=[248,cst_Stdlib_Arg_Bad,caml_fresh_oo_id(0)],
     Help=[248,cst_Stdlib_Arg_Help,caml_fresh_oo_id(0)],
     Stop=[248,cst_Stdlib_Arg_Stop,caml_fresh_oo_id(0)];
    function assoc3(x,l)
     {var l$0=l;
      for(;;)
       {if(l$0)
         {var t=l$0[2],match=l$0[1],y2=match[2],y1=match[1];
          if(caml_equal(y1,x))return y2;
          var l$0=t;
          continue}
        throw Not_found}}
    function split$0(s)
     {var
       i=index$0(s,61),
       len=caml_ml_string_length(s),
       _on_=sub$0(s,i + 1 | 0,len - (i + 1 | 0) | 0);
      return [0,sub$0(s,0,i),_on_]}
    function make_symlist(prefix,sep,suffix,l)
     {if(l)
       {var t=l[2],h=l[1],_om_=symbol(prefix,h);
        return symbol
                (fold_left$0
                  (function(x,y){return symbol(x,symbol(sep,y))},_om_,t),
                 suffix)}
      return cst_none}
    function help_action(param){throw [0,Stop,_aY_]}
    function add_help(speclist)
     {try
       {assoc3(cst_help$2,speclist);var _oj_=0,_oh_=_oj_}
      catch(_ol_)
       {_ol_ = caml_wrap_exception(_ol_);
        if(_ol_ !== Not_found)throw _ol_;
        var
         _oh_=
          [0,[0,cst_help,[0,help_action],cst_Display_this_list_of_optio],0]}
      try
       {assoc3(cst_help$1,speclist);var _oi_=0,add2=_oi_}
      catch(_ok_)
       {_ok_ = caml_wrap_exception(_ok_);
        if(_ok_ !== Not_found)throw _ok_;
        var
         add2=
          [0,
           [0,cst_help$0,[0,help_action],cst_Display_this_list_of_optio$0],
           0]}
      return append(speclist,append(_oh_,add2))}
    function usage_b(buf,speclist,errmsg)
     {caml_call1(bprintf(buf,_aZ_),errmsg);
      var _oe_=add_help(speclist);
      return iter$2
              (function(param)
                {var
                  doc=param[3],
                  spec=param[2],
                  key=param[1],
                  _of_=0 < caml_ml_string_length(doc)?1:0;
                 if(_of_)
                  {if(11 === spec[0])
                    {var l=spec[1],_og_=make_symlist(cst$54,cst$53,cst$52,l);
                     return caml_call3(bprintf(buf,_aX_),key,_og_,doc)}
                   return caml_call2(bprintf(buf,_aW_),key,doc)}
                 return _of_},
               _oe_)}
    function usage_string(speclist,errmsg)
     {var b=create$2(200);usage_b(b,speclist,errmsg);return contents(b)}
    function usage(speclist,errmsg)
     {var _od_=usage_string(speclist,errmsg);
      return caml_call1(eprintf(_a0_),_od_)}
    var current=[0,0];
    function bool_of_string_opt$0(x)
     {try
       {var _ob_=[0,bool_of_string(x)];return _ob_}
      catch(_oc_)
       {_oc_ = caml_wrap_exception(_oc_);
        if(_oc_[1] === Invalid_argument)return 0;
        throw _oc_}}
    function int_of_string_opt$0(x)
     {try
       {var _n$_=[0,caml_int_of_string(x)];return _n$_}
      catch(_oa_)
       {_oa_ = caml_wrap_exception(_oa_);
        if(_oa_[1] === Failure)return 0;
        throw _oa_}}
    function float_of_string_opt(x)
     {try
       {var _n9_=[0,caml_float_of_string(x)];return _n9_}
      catch(_n__)
       {_n__ = caml_wrap_exception(_n__);
        if(_n__[1] === Failure)return 0;
        throw _n__}}
    function parse_and_expand_argv_dynamic_
     (allow_expand,current,argv,speclist,anonfun,errmsg)
     {var initpos=current[1];
      function convert_error(error)
       {var
         b=create$2(200),
         progname=
          initpos < argv[1].length - 1
           ?caml_check_bound(argv[1],initpos)[1 + initpos]
           :cst$55;
        switch(error[0])
         {case 0:
           var _n8_=error[1];
           if
            (caml_string_notequal(_n8_,cst_help$3)
             &&
             caml_string_notequal(_n8_,cst_help$4))
            caml_call2(bprintf(b,_a1_),progname,_n8_);
           break;
          case 1:
           var expected=error[3],arg=error[2],opt=error[1];
           caml_call4(bprintf(b,_a4_),progname,arg,opt,expected);
           break;
          case 2:var s=error[1];caml_call2(bprintf(b,_a5_),progname,s);break;
          default:var s$0=error[1];caml_call2(bprintf(b,_a6_),progname,s$0)}
        usage_b(b,speclist[1],errmsg);
        if(! caml_equal(error,_a2_) && ! caml_equal(error,_a3_))
         return [0,Bad,contents(b)];
        return [0,Help,contents(b)]}
      current[1]++;
      for(;;)
       {if(current[1] < argv[1].length - 1)
         {try
           {var
             _nZ_=current[1],
             s=caml_check_bound(argv[1],_nZ_)[1 + _nZ_],
             switch$0=0;
            if(1 <= caml_ml_string_length(s) && 45 === caml_string_get(s,0))
             {try
               {var
                 follow$1=0,
                 _n1_=assoc3(s,speclist[1]),
                 action=_n1_,
                 follow$0=follow$1}
              catch(_n6_)
               {_n6_ = caml_wrap_exception(_n6_);
                if(_n6_ !== Not_found)throw _n6_;
                try
                 {var
                   match=split$0(s),
                   arg=match[2],
                   keyword=match[1],
                   follow=[0,arg],
                   _n0_=assoc3(keyword,speclist[1])}
                catch(_n7_)
                 {_n7_ = caml_wrap_exception(_n7_);
                  if(_n7_ === Not_found)throw [0,Stop,[0,s]];
                  throw _n7_;
                  var _n2_=_n7_}
                var action=_n0_,follow$0=follow,_n3_=_n6_}
              var
               no_arg$0=
                function(s,follow)
                 {function no_arg(param)
                   {if(follow)
                     {var arg=follow[1];throw [0,Stop,[1,s,arg,cst_no_argument]]}
                    return 0}
                  return no_arg},
               no_arg=no_arg$0(s,follow$0),
               get_arg$0=
                function(s,follow)
                 {function get_arg(param)
                   {if(follow){var arg=follow[1];return arg}
                    if((current[1] + 1 | 0) < argv[1].length - 1)
                     {var _n5_=current[1] + 1 | 0;
                      return caml_check_bound(argv[1],_n5_)[1 + _n5_]}
                    throw [0,Stop,[2,s]]}
                  return get_arg},
               get_arg=get_arg$0(s,follow$0),
               consume_arg$0=
                function(follow)
                 {function consume_arg(param)
                   {return follow?0:(current[1]++,0)}
                  return consume_arg},
               consume_arg=consume_arg$0(follow$0),
               treat_action$0=
                function(s,no_arg,get_arg,consume_arg)
                 {function treat_action(param)
                   {switch(param[0])
                     {case 0:var f=param[1];no_arg(0);return caml_call1(f,0);
                      case 1:
                       var
                        f$0=param[1],
                        arg=get_arg(0),
                        match=bool_of_string_opt$0(arg);
                       if(match)
                        {var s$0=match[1];caml_call1(f$0,s$0);return consume_arg(0)}
                       throw [0,Stop,[1,s,arg,cst_a_boolean]];
                      case 2:var r=param[1];no_arg(0);r[1] = 1;return 0;
                      case 3:var r$0=param[1];no_arg(0);r$0[1] = 0;return 0;
                      case 4:
                       var f$1=param[1],arg$0=get_arg(0);
                       caml_call1(f$1,arg$0);
                       return consume_arg(0);
                      case 5:
                       var r$1=param[1];r$1[1] = get_arg(0);return consume_arg(0);
                      case 6:
                       var
                        f$2=param[1],
                        arg$1=get_arg(0),
                        match$0=int_of_string_opt$0(arg$1);
                       if(match$0)
                        {var x=match$0[1];caml_call1(f$2,x);return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$1,cst_an_integer]];
                      case 7:
                       var
                        r$2=param[1],
                        arg$2=get_arg(0),
                        match$1=int_of_string_opt$0(arg$2);
                       if(match$1)
                        {var x$0=match$1[1];r$2[1] = x$0;return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$2,cst_an_integer$0]];
                      case 8:
                       var
                        f$3=param[1],
                        arg$3=get_arg(0),
                        match$2=float_of_string_opt(arg$3);
                       if(match$2)
                        {var x$1=match$2[1];
                         caml_call1(f$3,x$1);
                         return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$3,cst_a_float]];
                      case 9:
                       var
                        r$3=param[1],
                        arg$4=get_arg(0),
                        match$3=float_of_string_opt(arg$4);
                       if(match$3)
                        {var x$2=match$3[1];r$3[1] = x$2;return consume_arg(0)}
                       throw [0,Stop,[1,s,arg$4,cst_a_float$0]];
                      case 10:
                       var specs=param[1];
                       no_arg(0);
                       return iter$2(treat_action,specs);
                      case 11:
                       var f$4=param[2],symb=param[1],arg$5=get_arg(0);
                       if(mem(arg$5,symb))
                        {caml_call1(f$4,arg$5);return consume_arg(0)}
                       throw [0,
                              Stop,
                              [1,
                               s,
                               arg$5,
                               symbol(cst_one_of,make_symlist(cst$58,cst$57,cst$56,symb))]];
                      case 12:
                       var f$5=param[1];
                       no_arg(0);
                       for(;;)
                        {if(current[1] < (argv[1].length - 1 - 1 | 0))
                          {var _n4_=current[1] + 1 | 0;
                           caml_call1(f$5,caml_check_bound(argv[1],_n4_)[1 + _n4_]);
                           consume_arg(0);
                           continue}
                         return 0}
                      default:
                       var f$6=param[1];
                       if(1 - allow_expand)
                        throw [0,Invalid_argument,cst_Arg_Expand_is_is_only_allo];
                       var arg$6=get_arg(0),newarg=caml_call1(f$6,arg$6);
                       consume_arg(0);
                       var
                        before=sub$1(argv[1],0,current[1] + 1 | 0),
                        after=
                         sub$1
                          (argv[1],
                           current[1] + 1 | 0,
                           (argv[1].length - 1 - current[1] | 0) - 1 | 0);
                       argv[1]
                       =
                       caml_array_concat([0,before,[0,newarg,[0,after,0]]]);
                       return 0}}
                  return treat_action},
               treat_action=treat_action$0(s,no_arg,get_arg,consume_arg);
              treat_action(action);
              switch$0 = 1}
            if(! switch$0)caml_call1(anonfun,s)}
          catch(exn$0)
           {exn$0 = caml_wrap_exception(exn$0);
            if(exn$0[1] === Bad){var m=exn$0[2];throw convert_error([3,m])}
            if(exn$0[1] === Stop){var e=exn$0[2];throw convert_error(e)}
            throw exn$0;
            var exn=exn$0}
          current[1]++;
          continue}
        return 0}}
    function parse_and_expand_argv_dynamic
     (current,argv,speclist,anonfun,errmsg)
     {return parse_and_expand_argv_dynamic_
              (1,current,argv,speclist,anonfun,errmsg)}
    function parse_argv_dynamic(opt,argv,speclist,anonfun,errmsg)
     {if(opt)var sth=opt[1],current$0=sth;else var current$0=current;
      return parse_and_expand_argv_dynamic_
              (0,current$0,[0,argv],speclist,anonfun,errmsg)}
    function parse_argv(opt,argv,speclist,anonfun,errmsg)
     {if(opt)var sth=opt[1],current$0=sth;else var current$0=current;
      return parse_argv_dynamic
              ([0,current$0],argv,[0,speclist],anonfun,errmsg)}
    function parse(l,f,msg)
     {try
       {var _nY_=parse_argv(0,_n_,l,f,msg);return _nY_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_a7_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_a8_),msg$1);return exit(0)}
        throw exn}}
    function parse_dynamic(l,f,msg)
     {try
       {var _nX_=parse_argv_dynamic(0,_n_,l,f,msg);return _nX_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_a9_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_a__),msg$1);return exit(0)}
        throw exn}}
    function parse_expand(l,f,msg)
     {try
       {var
         argv=[0,_n_],
         spec=[0,l],
         current$0=[0,current[1]],
         _nW_=parse_and_expand_argv_dynamic(current$0,argv,spec,f,msg);
        return _nW_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Bad)
         {var msg$0=exn[2];caml_call1(eprintf(_a$_),msg$0);return exit(2)}
        if(exn[1] === Help)
         {var msg$1=exn[2];caml_call1(printf(_ba_),msg$1);return exit(0)}
        throw exn}}
    function second_word(s)
     {var len=caml_ml_string_length(s);
      function loop(n)
       {var n$0=n;
        for(;;)
         {if(len <= n$0)return len;
          if(32 === caml_string_get(s,n$0))
           {var n$1=n$0 + 1 | 0,n$0=n$1;continue}
          return n$0}}
      try
       {var n$0=index$0(s,9)}
      catch(_nU_)
       {_nU_ = caml_wrap_exception(_nU_);
        if(_nU_ === Not_found)
         {try
           {var n=index$0(s,32)}
          catch(_nV_)
           {_nV_ = caml_wrap_exception(_nV_);
            if(_nV_ === Not_found)return len;
            throw _nV_}
          return loop(n + 1 | 0)}
        throw _nU_}
      return loop(n$0 + 1 | 0)}
    function max_arg_len(cur,param)
     {var doc=param[3],spec=param[2],kwd=param[1];
      return 11 === spec[0]
              ?max(cur,caml_ml_string_length(kwd))
              :max(cur,caml_ml_string_length(kwd) + second_word(doc) | 0)}
    function replace_leading_tab(s)
     {var seen=[0,0];
      return map$4
              (function(c)
                {if(9 === c && ! seen[1]){seen[1] = 1;return 32}return c},
               s)}
    function align(opt,speclist)
     {if(opt)var sth=opt[1],limit=sth;else var limit=max_int;
      var
       completed=add_help(speclist),
       len=fold_left$0(max_arg_len,0,completed),
       len$0=min(len,limit);
      return map$2
              (function(ksd)
                {var _nS_=ksd[2],_nT_=ksd[1];
                 if(caml_string_notequal(ksd[3],cst$59))
                  {if(11 === _nS_[0])
                    {var
                      msg$0=ksd[3],
                      cutcol$0=second_word(msg$0),
                      spaces$0=make$0(max(0,len$0 - cutcol$0 | 0) + 3 | 0,32);
                     return [0,
                             _nT_,
                             _nS_,
                             symbol(cst$60,symbol(spaces$0,replace_leading_tab(msg$0)))]}
                   var
                    msg=ksd[3],
                    cutcol=second_word(msg),
                    kwd_len=caml_ml_string_length(_nT_),
                    diff=(len$0 - kwd_len | 0) - cutcol | 0;
                   if(0 < diff)
                    {var
                      spaces=make$0(diff,32),
                      prefix=sub$0(replace_leading_tab(msg),0,cutcol),
                      suffix=
                       sub$0(msg,cutcol,caml_ml_string_length(msg) - cutcol | 0);
                     return [0,_nT_,_nS_,symbol(prefix,symbol(spaces,suffix))]}
                   return [0,_nT_,_nS_,replace_leading_tab(msg)]}
                 return ksd},
               completed)}
    function read_aux(trim,sep,file)
     {var ic=open_in_bin(file),buf=create$2(200),words=[0,0];
      function stash(param)
       {var s=contents(buf);
        if(trim)
         {var len=caml_ml_string_length(s),switch$0=0;
          if(0 < len && 13 === caml_string_get(s,len - 1 | 0))
           {var _nR_=sub$0(s,0,len - 1 | 0);switch$0 = 1}
          if(! switch$0)var _nR_=s;
          var word=_nR_}
        else
         var word=s;
        words[1] = [0,word,words[1]];
        return clear$1(buf)}
      try
       {for(;;)
         {var c=caml_ml_input_char(ic);
          if(c === sep)stash(0);else add_char(buf,c);
          continue}}
      catch(_nQ_)
       {_nQ_ = caml_wrap_exception(_nQ_);
        if(_nQ_ === End_of_file)
         {if(0 < buf[2])stash(0);
          caml_ml_close_channel(ic);
          return of_list(rev(words[1]))}
        throw _nQ_}}
    var _bb_=10,_bc_=1;
    function read_arg(_nP_){return read_aux(_bc_,_bb_,_nP_)}
    var _bd_=0,_be_=0;
    function read_arg0(_nO_){return read_aux(_be_,_bd_,_nO_)}
    function write_aux(sep,file,args)
     {var oc=open_out_bin(file);
      iter$5(function(s){return caml_call2(fprintf(oc,_bf_),s,sep)},args);
      return close_out(oc)}
    var _bg_=10;
    function write_arg(_nM_,_nN_){return write_aux(_bg_,_nM_,_nN_)}
    var _bh_=0;
    function write_arg0(_nK_,_nL_){return write_aux(_bh_,_nK_,_nL_)}
    var
     Stdlib_arg=
      [0,
       parse,
       parse_dynamic,
       parse_argv,
       parse_argv_dynamic,
       parse_and_expand_argv_dynamic,
       parse_expand,
       Help,
       Bad,
       usage,
       usage_string,
       align,
       current,
       read_arg,
       read_arg0,
       write_arg,
       write_arg0];
    caml_register_global(752,Stdlib_arg,"Stdlib__arg");
    var printers=[0,0];
    function field(x,i)
     {var f=x[1 + i];
      return is_block(f)
              ?caml_obj_tag(f) === 252
                ?caml_call1(sprintf(_bi_),f)
                :caml_obj_tag(f) === 253?to_string(f):cst$61
              :caml_call1(sprintf(_bj_),f)}
    function other_fields(x,i)
     {if(x.length - 1 <= i)return cst$62;
      var _nI_=other_fields(x,i + 1 | 0),_nJ_=field(x,i);
      return caml_call2(sprintf(_bk_),_nJ_,_nI_)}
    function fields(x)
     {var match=x.length - 1;
      if(2 < match >>> 0)
       {var _nF_=other_fields(x,2),_nG_=field(x,1);
        return caml_call2(sprintf(_bl_),_nG_,_nF_)}
      switch(match)
       {case 0:return cst$63;
        case 1:return cst$64;
        default:var _nH_=field(x,1);return caml_call1(sprintf(_bm_),_nH_)}}
    function to_string$7(x)
     {function conv(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1];
            try {var _nD_=caml_call1(hd,x),_nC_=_nD_}catch(_nE_){var _nC_=0}
            if(_nC_){var s=_nC_[1];return s}
            var param$0=tl;
            continue}
          if(x === Out_of_memory)return cst_Out_of_memory;
          if(x === Stack_overflow)return cst_Stack_overflow;
          if(x[1] === Match_failure)
           {var match=x[2],char$0=match[3],line=match[2],file=match[1];
            return caml_call5
                    (sprintf(locfmt),
                     file,
                     line,
                     char$0,
                     char$0 + 5 | 0,
                     cst_Pattern_matching_failed)}
          if(x[1] === Assert_failure)
           {var
             match$0=x[2],
             char$1=match$0[3],
             line$0=match$0[2],
             file$0=match$0[1];
            return caml_call5
                    (sprintf(locfmt),
                     file$0,
                     line$0,
                     char$1,
                     char$1 + 6 | 0,
                     cst_Assertion_failed)}
          if(x[1] === Undefined_recursive_module)
           {var
             match$1=x[2],
             char$2=match$1[3],
             line$1=match$1[2],
             file$1=match$1[1];
            return caml_call5
                    (sprintf(locfmt),
                     file$1,
                     line$1,
                     char$2,
                     char$2 + 6 | 0,
                     cst_Undefined_recursive_module)}
          if(0 === caml_obj_tag(x))
           {var constructor=x[1][1];return symbol(constructor,fields(x))}
          return x[1]}}
      return conv(printers[1])}
    function print(fct,arg)
     {try
       {var _nB_=caml_call1(fct,arg);return _nB_}
      catch(x)
       {x = caml_wrap_exception(x);
        var _nA_=to_string$7(x);
        caml_call1(eprintf(_bn_),_nA_);
        caml_ml_flush(stderr);
        throw x}}
    function catch$0(fct,arg)
     {try
       {var _nz_=caml_call1(fct,arg);return _nz_}
      catch(x)
       {x = caml_wrap_exception(x);
        caml_ml_flush(stdout);
        var _ny_=to_string$7(x);
        caml_call1(eprintf(_bo_),_ny_);
        return exit(2)}}
    function convert_raw_backtrace(bt)
     {return [0,runtime.caml_convert_raw_backtrace(bt)]}
    function format_backtrace_slot(pos,slot)
     {function info(is_raise)
       {return is_raise
                ?0 === pos?cst_Raised_at:cst_Re_raised_at
                :0 === pos?cst_Raised_by_primitive_operat:cst_Called_from}
      if(0 === slot[0])
       {var
         _nr_=slot[5],
         _ns_=slot[4],
         _nt_=slot[3],
         _nu_=slot[6]?cst_inlined:cst$65,
         _nv_=slot[2],
         _nw_=info(slot[1]);
        return [0,caml_call6(sprintf(_bp_),_nw_,_nv_,_nu_,_nt_,_ns_,_nr_)]}
      if(slot[1])return 0;
      var _nx_=info(0);
      return [0,caml_call1(sprintf(_bq_),_nx_)]}
    function print_raw_backtrace(outchan,raw_backtrace)
     {var backtrace=convert_raw_backtrace(raw_backtrace);
      if(backtrace)
       {var a=backtrace[1],_np_=a.length - 1 - 1 | 0,_no_=0;
        if(! (_np_ < 0))
         {var i=_no_;
          for(;;)
           {var match=format_backtrace_slot(i,caml_check_bound(a,i)[1 + i]);
            if(match){var str=match[1];caml_call1(fprintf(outchan,_br_),str)}
            var _nq_=i + 1 | 0;
            if(_np_ !== i){var i=_nq_;continue}
            break}}
        return 0}
      return fprintf(outchan,_bs_)}
    function print_backtrace(outchan)
     {return print_raw_backtrace(outchan,caml_get_exception_raw_backtra(0))}
    function raw_backtrace_to_string(raw_backtrace)
     {var backtrace=convert_raw_backtrace(raw_backtrace);
      if(backtrace)
       {var a=backtrace[1],b=create$2(1024),_nm_=a.length - 1 - 1 | 0,_nl_=0;
        if(! (_nm_ < 0))
         {var i=_nl_;
          for(;;)
           {var match=format_backtrace_slot(i,caml_check_bound(a,i)[1 + i]);
            if(match){var str=match[1];caml_call1(bprintf(b,_bt_),str)}
            var _nn_=i + 1 | 0;
            if(_nm_ !== i){var i=_nn_;continue}
            break}}
        return contents(b)}
      return cst_Program_not_linked_with_g_}
    function backtrace_slot_is_raise(param)
     {return 0 === param[0]?param[1]:param[1]}
    function backtrace_slot_is_inline(param){return 0 === param[0]?param[6]:0}
    function backtrace_slot_location(param)
     {return 0 === param[0]?[0,[0,param[2],param[3],param[4],param[5]]]:0}
    function backtrace_slots(raw_backtrace)
     {var match=convert_raw_backtrace(raw_backtrace);
      if(match)
       {var backtrace=match[1],i$1=backtrace.length - 1 - 1 | 0,i=i$1;
        for(;;)
         {if(-1 === i)
           var _nk_=0;
          else
           {var
             param=caml_check_bound(backtrace,i)[1 + i],
             _nj_=0 === param[0]?1:0;
            if(! _nj_){var i$0=i - 1 | 0,i=i$0;continue}
            var _nk_=_nj_}
          return _nk_?[0,backtrace]:0}}
      return 0}
    function get_backtrace(param)
     {return raw_backtrace_to_string(caml_get_exception_raw_backtra(0))}
    function register_printer(fn){printers[1] = [0,fn,printers[1]];return 0}
    function exn_slot(x){return 0 === caml_obj_tag(x)?x[1]:x}
    function exn_slot_id(x){var slot=exn_slot(x);return slot[2]}
    function exn_slot_name(x){var slot=exn_slot(x);return slot[1]}
    var uncaught_exception_handler=[0,0];
    function set_uncaught_exception_handler(fn)
     {uncaught_exception_handler[1] = [0,fn];return 0}
    function _bu_(_ni_){return runtime.caml_raw_backtrace_next_slot(_ni_)}
    function _bv_(_nh_){return runtime.caml_convert_raw_backtrace_slot(_nh_)}
    function _bw_(_ng_,_nf_)
     {return runtime.caml_raw_backtrace_slot(_ng_,_nf_)}
    function _bx_(_ne_){return runtime.caml_raw_backtrace_length(_ne_)}
    var
     _by_=
      [0,
       backtrace_slot_is_raise,
       backtrace_slot_is_inline,
       backtrace_slot_location,
       format_backtrace_slot];
    function _bz_(_nd_){return runtime.caml_get_current_callstack(_nd_)}
    function _bA_(_nc_){return caml_get_exception_raw_backtra(_nc_)}
    function _bB_(_nb_){return runtime.caml_backtrace_status(_nb_)}
    var
     Stdlib_printexc=
      [0,
       to_string$7,
       print,
       catch$0,
       print_backtrace,
       get_backtrace,
       function(_na_){return runtime.caml_record_backtrace(_na_)},
       _bB_,
       register_printer,
       _bA_,
       print_raw_backtrace,
       raw_backtrace_to_string,
       _bz_,
       set_uncaught_exception_handler,
       backtrace_slots,
       _by_,
       _bx_,
       _bw_,
       _bv_,
       _bu_,
       exn_slot_id,
       exn_slot_name];
    caml_register_global(753,Stdlib_printexc,"Stdlib__printexc");
    function const$0(c,param){return c}
    function flip(f,x,y){return caml_call2(f,y,x)}
    function negate(p,v){return 1 - caml_call1(p,v)}
    var
     Finally_raised=
      [248,cst_Stdlib_Fun_Finally_raised,caml_fresh_oo_id(0)];
    function protect(finally$0,work)
     {function finally_no_exn(param)
       {try
         {var _m$_=caml_call1(finally$0,0);return _m$_}
        catch(e)
         {e = caml_wrap_exception(e);
          var bt=caml_get_exception_raw_backtra(0),exn=[0,Finally_raised,e];
          caml_restore_raw_backtrace(exn,bt);
          throw exn}}
      try
       {var result=caml_call1(work,0)}
      catch(work_exn)
       {work_exn = caml_wrap_exception(work_exn);
        var work_bt=caml_get_exception_raw_backtra(0);
        finally_no_exn(0);
        caml_restore_raw_backtrace(work_exn,work_bt);
        throw work_exn}
      finally_no_exn(0);
      return result}
    var Stdlib_fun=[0,const$0,flip,negate,protect,Finally_raised];
    caml_register_global(754,Stdlib_fun,"Stdlib__fun");
    function print_stat(c)
     {var st=runtime.caml_gc_stat(0),_mU_=st[4];
      caml_call1(fprintf(c,_bC_),_mU_);
      var _mV_=st[5];
      caml_call1(fprintf(c,_bD_),_mV_);
      var _mW_=st[14];
      caml_call1(fprintf(c,_bE_),_mW_);
      fprintf(c,_bF_);
      var
       _mX_=st[1],
       l1=caml_ml_string_length(caml_call1(sprintf(_bG_),_mX_)),
       _mY_=st[1];
      caml_call2(fprintf(c,_bH_),l1,_mY_);
      var _mZ_=st[2];
      caml_call2(fprintf(c,_bI_),l1,_mZ_);
      var _m0_=st[3];
      caml_call2(fprintf(c,_bJ_),l1,_m0_);
      fprintf(c,_bK_);
      var
       _m1_=st[15],
       l2=caml_ml_string_length(caml_call1(sprintf(_bL_),_m1_)),
       _m2_=st[15];
      caml_call2(fprintf(c,_bM_),l2,_m2_);
      var _m3_=st[6];
      caml_call2(fprintf(c,_bN_),l2,_m3_);
      var _m4_=st[8];
      caml_call2(fprintf(c,_bO_),l2,_m4_);
      var _m5_=st[10];
      caml_call2(fprintf(c,_bP_),l2,_m5_);
      var _m6_=st[12];
      caml_call2(fprintf(c,_bQ_),l2,_m6_);
      var _m7_=st[13];
      caml_call2(fprintf(c,_bR_),l2,_m7_);
      fprintf(c,_bS_);
      var _m8_=st[9];
      caml_call1(fprintf(c,_bT_),_m8_);
      var _m9_=st[11];
      caml_call1(fprintf(c,_bU_),_m9_);
      var _m__=st[7];
      return caml_call1(fprintf(c,_bV_),_m__)}
    function allocated_bytes(param)
     {var
       match=runtime.caml_gc_counters(0),
       ma=match[3],
       pro=match[2],
       mi=match[1];
      return (mi + ma - pro) * 4}
    function create_alarm(f){return [0,1]}
    function delete_alarm(a){a[1] = 0;return 0}
    function _bW_(_mT_){return runtime.caml_final_release(_mT_)}
    function _bX_(_mS_,_mR_)
     {return runtime.caml_final_register_called_without_value(_mS_,_mR_)}
    var
     Stdlib_gc=
      [0,
       print_stat,
       allocated_bytes,
       function(_mQ_,_mP_){return runtime.caml_final_register(_mQ_,_mP_)},
       _bX_,
       _bW_,
       create_alarm,
       delete_alarm];
    caml_register_global(755,Stdlib_gc,"Stdlib__gc");
    function string(str)
     {return caml_md5_string(str,0,caml_ml_string_length(str))}
    function bytes(b){return string(caml_string_of_bytes(b))}
    function substring(str,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_string_length(str) - len | 0) < ofs))
       return caml_md5_string(str,ofs,len);
      return invalid_arg(cst_Digest_substring)}
    function subbytes(b,ofs,len)
     {return substring(caml_string_of_bytes(b),ofs,len)}
    function file(filename)
     {var ic=open_in_bin(filename);
      try
       {var d=runtime.caml_md5_chan(ic,-1)}
      catch(e){e = caml_wrap_exception(e);caml_ml_close_channel(ic);throw e}
      caml_ml_close_channel(ic);
      return d}
    function output$0(chan,digest){return output_string(chan,digest)}
    function input$0(chan){return really_input_string(chan,16)}
    function char_hex(n){var _mO_=10 <= n?87:48;return n + _mO_ | 0}
    function to_hex(d)
     {if(16 !== caml_ml_string_length(d))invalid_arg(cst_Digest_to_hex);
      var result=caml_create_bytes(32),i=0;
      for(;;)
       {var x=caml_string_get(d,i);
        caml_bytes_unsafe_set(result,i * 2 | 0,char_hex(x >>> 4 | 0));
        caml_bytes_unsafe_set(result,(i * 2 | 0) + 1 | 0,char_hex(x & 15));
        var _mN_=i + 1 | 0;
        if(15 !== i){var i=_mN_;continue}
        return caml_string_of_bytes(result)}}
    function from_hex(s)
     {if(32 !== caml_ml_string_length(s))invalid_arg(cst_Digest_from_hex);
      function digit(c)
       {if(65 <= c)
         {if(97 <= c)
           {if(! (103 <= c))return (c - 97 | 0) + 10 | 0}
          else
           if(! (71 <= c))return (c - 65 | 0) + 10 | 0}
        else
         {var switcher=c - 48 | 0;if(! (9 < switcher >>> 0))return c - 48 | 0}
        throw [0,Invalid_argument,cst_Digest_from_hex$0]}
      var result=caml_create_bytes(16),i=0;
      for(;;)
       {var i$0=2 * i | 0,_mL_=digit(caml_string_get(s,i$0 + 1 | 0));
        caml_bytes_set
         (result,i,chr((digit(caml_string_get(s,i$0)) << 4) + _mL_ | 0));
        var _mM_=i + 1 | 0;
        if(15 !== i){var i=_mM_;continue}
        return caml_string_of_bytes(result)}}
    var
     Stdlib_digest=
      [0,
       compare$5,
       equal$5,
       string,
       bytes,
       substring,
       subbytes,
       file,
       output$0,
       input$0,
       to_hex,
       from_hex];
    caml_register_global(756,Stdlib_digest,"Stdlib__digest");
    function new_state(param){return [0,caml_make_vect(55,0),0]}
    function assign(st1,st2)
     {blit$1(st2[1],0,st1[1],0,55);st1[2] = st2[2];return 0}
    function full_init(s,seed)
     {var seed$0=0 === seed.length - 1?[0,0]:seed,l=seed$0.length - 1,i$0=0;
      for(;;)
       {caml_check_bound(s[1],i$0)[1 + i$0] = i$0;
        var _mK_=i$0 + 1 | 0;
        if(54 !== i$0){var i$0=_mK_;continue}
        var accu=[0,cst_x$1],_mG_=54 + max(55,l) | 0,_mF_=0;
        if(! (_mG_ < 0))
         {var i=_mF_;
          for(;;)
           {var
             j=i % 55 | 0,
             k=caml_mod(i,l),
             x=caml_check_bound(seed$0,k)[1 + k];
            accu[1] = string(symbol(accu[1],caml_string_of_jsbytes("" + x)));
            var
             _mH_=accu[1],
             _mB_=caml_string_get(_mH_,3) << 24,
             _mC_=caml_string_get(_mH_,2) << 16,
             _mD_=caml_string_get(_mH_,1) << 8,
             _mE_=((caml_string_get(_mH_,0) + _mD_ | 0) + _mC_ | 0) + _mB_ | 0,
             _mI_=(caml_check_bound(s[1],j)[1 + j] ^ _mE_) & 1073741823;
            caml_check_bound(s[1],j)[1 + j] = _mI_;
            var _mJ_=i + 1 | 0;
            if(_mG_ !== i){var i=_mJ_;continue}
            break}}
        s[2] = 0;
        return 0}}
    function make$2(seed)
     {var result=new_state(0);full_init(result,seed);return result}
    function make_self_init(param){return make$2(caml_sys_random_seed(0))}
    function copy$5(s){var result=new_state(0);assign(result,s);return result}
    function bits(s)
     {s[2] = (s[2] + 1 | 0) % 55 | 0;
      var
       _my_=s[2],
       curval=caml_check_bound(s[1],_my_)[1 + _my_],
       _mz_=(s[2] + 24 | 0) % 55 | 0,
       newval=
        caml_check_bound(s[1],_mz_)[1 + _mz_]
        +
        (curval ^ (curval >>> 25 | 0) & 31)
        |
        0,
       newval30=newval & 1073741823,
       _mA_=s[2];
      caml_check_bound(s[1],_mA_)[1 + _mA_] = newval30;
      return newval30}
    function int$0(s,bound)
     {if(! (1073741823 < bound) && 0 < bound)
       for(;;)
        {var r=bits(s),v=caml_mod(r,bound);
         if(((1073741823 - bound | 0) + 1 | 0) < (r - v | 0))continue;
         return v}
      return invalid_arg(cst_Random_int)}
    function int32(s,bound)
     {if(caml_lessequal(bound,0))return invalid_arg(cst_Random_int32);
      for(;;)
       {var b1=bits(s),b2=(bits(s) & 1) << 30,r=b1 | b2,v=caml_mod(r,bound);
        if(caml_greaterthan(r - v | 0,(2147483647 - bound | 0) + 1 | 0))
         continue;
        return v}}
    function int64(s,bound)
     {if(caml_lessequal(bound,_bZ_))return invalid_arg(cst_Random_int64);
      for(;;)
       {var
         b1=caml_int64_of_int32(bits(s)),
         b2=caml_int64_shift_left(caml_int64_of_int32(bits(s)),30),
         b3=caml_int64_shift_left(caml_int64_of_int32(bits(s) & 7),60),
         r=caml_int64_or(b1,caml_int64_or(b2,b3)),
         v=runtime.caml_int64_mod(r,bound);
        if
         (caml_greaterthan
           (caml_int64_sub(r,v),
            caml_int64_add(caml_int64_sub(max_int$2,bound),_bY_)))
         continue;
        return v}}
    function nativeint(s,bound){return int32(s,bound)}
    function float$0(s,bound)
     {var r1=bits(s),r2=bits(s);
      return (r1 / 1073741824. + r2) / 1073741824. * bound}
    function bool(s){return 0 === (bits(s) & 1)?1:0}
    var default$0=[0,_b0_.slice(),0];
    function bits$0(param){return bits(default$0)}
    function int$1(bound){return int$0(default$0,bound)}
    function int32$0(bound){return int32(default$0,bound)}
    function nativeint$0(bound){return nativeint(default$0,bound)}
    function int64$0(bound){return int64(default$0,bound)}
    function float$1(scale){return float$0(default$0,scale)}
    function bool$0(param){return bool(default$0)}
    function full_init$0(seed){return full_init(default$0,seed)}
    function init$4(seed){return full_init(default$0,[0,seed])}
    function self_init(param){return full_init$0(caml_sys_random_seed(0))}
    function get_state(param){return copy$5(default$0)}
    function set_state(s){return assign(default$0,s)}
    var
     _b1_=
      [0,
       make$2,
       make_self_init,
       copy$5,
       bits,
       int$0,
       int32,
       nativeint,
       int64,
       float$0,
       bool],
     Stdlib_random=
      [0,
       init$4,
       full_init$0,
       self_init,
       bits$0,
       int$1,
       int32$0,
       nativeint$0,
       int64$0,
       float$1,
       bool$0,
       _b1_,
       get_state,
       set_state];
    caml_register_global(757,Stdlib_random,"Stdlib__random");
    function hash$1(x){return caml_hash(10,100,0,x)}
    function hash_param(n1,n2,x){return caml_hash(n1,n2,0,x)}
    function seeded_hash(seed,x){return caml_hash(10,100,seed,x)}
    function ongoing_traversal(h)
     {var _mw_=h.length - 1 < 4?1:0,_mx_=_mw_ || (h[4] < 0?1:0);return _mx_}
    function flip_ongoing_traversal(h){h[4] = - h[4] | 0;return 0}
    try
     {var _cH_=caml_sys_getenv(cst_OCAMLRUNPARAM),params=_cH_}
    catch(_mu_)
     {_mu_ = caml_wrap_exception(_mu_);
      if(_mu_ !== Not_found)throw _mu_;
      try
       {var _cG_=caml_sys_getenv(cst_CAMLRUNPARAM),_b2_=_cG_}
      catch(_mv_)
       {_mv_ = caml_wrap_exception(_mv_);
        if(_mv_ !== Not_found)throw _mv_;
        var _b2_=cst$66}
      var params=_b2_}
    var
     randomized_default=contains$0(params,82),
     randomized=[0,randomized_default];
    function randomize(param){randomized[1] = 1;return 0}
    function is_randomized(param){return randomized[1]}
    var prng=[246,function(_mt_){return caml_call1(_b1_[2],0)}];
    function create$3(opt,initial_size)
     {if(opt)var sth=opt[1],random=sth;else var random=randomized[1];
      var x=16;
      for(;;)
       {if(! (initial_size <= x) && ! (max_array_length < (x * 2 | 0)))
         {var x$0=x * 2 | 0,x=x$0;continue}
        if(random)
         var
          _mr_=caml_obj_tag(prng),
          _ms_=250 === _mr_?prng[1]:246 === _mr_?force_lazy_block(prng):prng,
          seed=caml_call1(_b1_[4],_ms_);
        else
         var seed=0;
        return [0,0,caml_make_vect(x,0),seed,x]}}
    function clear$2(h)
     {h[1] = 0;
      var len=h[2].length - 1,_mp_=len - 1 | 0,_mo_=0;
      if(! (_mp_ < 0))
       {var i=_mo_;
        for(;;)
         {caml_check_bound(h[2],i)[1 + i] = 0;
          var _mq_=i + 1 | 0;
          if(_mp_ !== i){var i=_mq_;continue}
          break}}
      return 0}
    function reset$0(h)
     {var len=h[2].length - 1;
      if(4 <= h.length - 1 && len !== abs(h[4]))
       {h[1] = 0;h[2] = caml_make_vect(abs(h[4]),0);return 0}
      return clear$2(h)}
    function copy_bucketlist(param)
     {if(param)
       {var
         key=param[1],
         data=param[2],
         next=param[3],
         prec$0=[0,key,data,next],
         prec=prec$0,
         param$0=next;
        for(;;)
         {if(param$0)
           {var
             key$0=param$0[1],
             data$0=param$0[2],
             next$0=param$0[3],
             r=[0,key$0,data$0,next$0];
            if(prec){prec[3] = r;var prec=r,param$0=next$0;continue}
            throw [0,Assert_failure,_b3_]}
          return prec$0}}
      return 0}
    function copy$6(init)
     {var _ml_=init[4],_mm_=init[3],_mn_=map$5(copy_bucketlist,init[2]);
      return [0,init[1],_mn_,_mm_,_ml_]}
    function length$4(h){return h[1]}
    function resize$0(indexfun,h)
     {var
       odata=h[2],
       osize=odata.length - 1,
       nsize=osize * 2 | 0,
       _mc_=nsize < max_array_length?1:0;
      if(_mc_)
       {var
         ndata=caml_make_vect(nsize,0),
         ndata_tail=caml_make_vect(nsize,0),
         inplace=1 - ongoing_traversal(h);
        h[2] = ndata;
        var _me_=osize - 1 | 0,_md_=0;
        if(! (_me_ < 0))
         {var i$0=_md_;
          a:
          for(;;)
           {var cell$1=caml_check_bound(odata,i$0)[1 + i$0],cell=cell$1;
            for(;;)
             {if(cell)
               {var
                 key=cell[1],
                 data=cell[2],
                 next=cell[3],
                 cell$0=inplace?cell:[0,key,data,0],
                 nidx=caml_call2(indexfun,h,key),
                 match=caml_check_bound(ndata_tail,nidx)[1 + nidx];
                if(match)
                 match[3] = cell$0;
                else
                 caml_check_bound(ndata,nidx)[1 + nidx] = cell$0;
                caml_check_bound(ndata_tail,nidx)[1 + nidx] = cell$0;
                var cell=next;
                continue}
              var _mk_=i$0 + 1 | 0;
              if(_me_ !== i$0){var i$0=_mk_;continue a}
              break}
            break}}
        if(inplace)
         {var _mg_=nsize - 1 | 0,_mf_=0;
          if(! (_mg_ < 0))
           {var i=_mf_;
            for(;;)
             {var match$0=caml_check_bound(ndata_tail,i)[1 + i];
              if(match$0)match$0[3] = 0;
              var _mj_=i + 1 | 0;
              if(_mg_ !== i){var i=_mj_;continue}
              break}}
          var _mh_=0}
        else
         var _mh_=inplace;
        var _mi_=_mh_}
      else
       var _mi_=_mc_;
      return _mi_}
    function key_index(h,key)
     {return 3 <= h.length - 1
              ?caml_hash(10,100,h[3],key) & (h[2].length - 1 - 1 | 0)
              :caml_mod
                (runtime.caml_hash_univ_param(10,100,key),h[2].length - 1)}
    function add$0(h,key,data)
     {var
       i=key_index(h,key),
       bucket=[0,key,data,caml_check_bound(h[2],i)[1 + i]];
      caml_check_bound(h[2],i)[1 + i] = bucket;
      h[1] = h[1] + 1 | 0;
      var _mb_=h[2].length - 1 << 1 < h[1]?1:0;
      return _mb_?resize$0(key_index,h):_mb_}
    function remove(h,key)
     {var i=key_index(h,key),c$0=caml_check_bound(h[2],i)[1 + i],prec=0,c=c$0;
      for(;;)
       {if(c)
         {var k=c[1],next=c[3];
          if(0 === caml_compare(k,key))
           {h[1] = h[1] - 1 | 0;
            return prec
                    ?(prec[3] = next,0)
                    :(caml_check_bound(h[2],i)[1 + i] = next,0)}
          var prec=c,c=next;
          continue}
        return 0}}
    function find$0(h,key)
     {var _ma_=key_index(h,key),match=caml_check_bound(h[2],_ma_)[1 + _ma_];
      if(match)
       {var k1=match[1],d1=match[2],next1=match[3];
        if(0 === caml_compare(key,k1))return d1;
        if(next1)
         {var k2=next1[1],d2=next1[2],next2=next1[3];
          if(0 === caml_compare(key,k2))return d2;
          if(next2)
           {var k3=next2[1],d3=next2[2],next3=next2[3];
            if(0 === caml_compare(key,k3))return d3;
            var param=next3;
            for(;;)
             {if(param)
               {var k=param[1],data=param[2],next=param[3];
                if(0 === caml_compare(key,k))return data;
                var param=next;
                continue}
              throw Not_found}}
          throw Not_found}
        throw Not_found}
      throw Not_found}
    function find_opt$0(h,key)
     {var _l$_=key_index(h,key),match=caml_check_bound(h[2],_l$_)[1 + _l$_];
      if(match)
       {var k1=match[1],d1=match[2],next1=match[3];
        if(0 === caml_compare(key,k1))return [0,d1];
        if(next1)
         {var k2=next1[1],d2=next1[2],next2=next1[3];
          if(0 === caml_compare(key,k2))return [0,d2];
          if(next2)
           {var k3=next2[1],d3=next2[2],next3=next2[3];
            if(0 === caml_compare(key,k3))return [0,d3];
            var param=next3;
            for(;;)
             {if(param)
               {var k=param[1],data=param[2],next=param[3];
                if(0 === caml_compare(key,k))return [0,data];
                var param=next;
                continue}
              return 0}}
          return 0}
        return 0}
      return 0}
    function find_all$0(h,key)
     {function find_in_bucket(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var k=param$0[1],data=param$0[2],next=param$0[3];
            if(0 === caml_compare(k,key))return [0,data,find_in_bucket(next)];
            var param$0=next;
            continue}
          return 0}}
      var _l__=key_index(h,key);
      return find_in_bucket(caml_check_bound(h[2],_l__)[1 + _l__])}
    function replace(h,key,data)
     {var
       i=key_index(h,key),
       param$0=caml_check_bound(h[2],i)[1 + i],
       param=param$0;
      for(;;)
       {if(param)
         {var k=param[1],next=param[3];
          if(0 !== caml_compare(k,key)){var param=next;continue}
          param[1] = key;
          param[2] = data;
          var _l7_=0}
        else
         var _l7_=1;
        if(_l7_)
         {caml_check_bound(h[2],i)[1 + i] = [0,key,data,param$0];
          h[1] = h[1] + 1 | 0;
          var _l8_=h[2].length - 1 << 1 < h[1]?1:0;
          if(_l8_)return resize$0(key_index,h);
          var _l9_=_l8_}
        else
         var _l9_=_l7_;
        return _l9_}}
    function mem$2(h,key)
     {var
       _l6_=key_index(h,key),
       param$0=caml_check_bound(h[2],_l6_)[1 + _l6_],
       param=param$0;
      for(;;)
       {if(param)
         {var k=param[1],next=param[3],_l5_=0 === caml_compare(k,key)?1:0;
          if(_l5_)return _l5_;
          var param=next;
          continue}
        return 0}}
    function iter$10(f,h)
     {function do_bucket(param)
       {var param$0=param;
        for(;;)
         {if(param$0)
           {var key=param$0[1],data=param$0[2],next=param$0[3];
            caml_call2(f,key,data);
            var param$0=next;
            continue}
          return 0}}
      var old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var d=h[2],_l1_=d.length - 1 - 1 | 0,_l0_=0;
        if(! (_l1_ < 0))
         {var i=_l0_;
          for(;;)
           {do_bucket(caml_check_bound(d,i)[1 + i]);
            var _l4_=i + 1 | 0;
            if(_l1_ !== i){var i=_l4_;continue}
            break}}
        var _l2_=1 - old_trav,_l3_=_l2_?flip_ongoing_traversal(h):_l2_;
        return _l3_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function filter_map_inplace_bucket(f,h,i,prec,slot)
     {var prec$0=prec,slot$0=slot;
      for(;;)
       {if(slot$0)
         {var
           key=slot$0[1],
           data=slot$0[2],
           next=slot$0[3],
           match=caml_call2(f,key,data);
          if(match)
           {var data$0=match[1];
            if(prec$0)
             prec$0[3] = slot$0;
            else
             caml_check_bound(h[2],i)[1 + i] = slot$0;
            slot$0[2] = data$0;
            var prec$0=slot$0,slot$0=next;
            continue}
          h[1] = h[1] - 1 | 0;
          var slot$0=next;
          continue}
        return prec$0
                ?(prec$0[3] = 0,0)
                :(caml_check_bound(h[2],i)[1 + i] = 0,0)}}
    function filter_map_inplace(f,h)
     {var d=h[2],old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var _lX_=d.length - 1 - 1 | 0,_lW_=0;
        if(! (_lX_ < 0))
         {var i=_lW_;
          for(;;)
           {filter_map_inplace_bucket(f,h,i,0,caml_check_bound(h[2],i)[1 + i]);
            var _lZ_=i + 1 | 0;
            if(_lX_ !== i){var i=_lZ_;continue}
            break}}
        var _lY_=0;
        return _lY_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function fold$3(f,h,init)
     {function do_bucket(b,accu)
       {var b$0=b,accu$0=accu;
        for(;;)
         {if(b$0)
           {var
             key=b$0[1],
             data=b$0[2],
             next=b$0[3],
             accu$1=caml_call3(f,key,data,accu$0),
             b$0=next,
             accu$0=accu$1;
            continue}
          return accu$0}}
      var old_trav=ongoing_traversal(h);
      if(1 - old_trav)flip_ongoing_traversal(h);
      try
       {var d=h[2],accu=[0,init],_lS_=d.length - 1 - 1 | 0,_lR_=0;
        if(! (_lS_ < 0))
         {var i=_lR_;
          for(;;)
           {var _lU_=accu[1];
            accu[1] = do_bucket(caml_check_bound(d,i)[1 + i],_lU_);
            var _lV_=i + 1 | 0;
            if(_lS_ !== i){var i=_lV_;continue}
            break}}
        if(1 - old_trav)flip_ongoing_traversal(h);
        var _lT_=accu[1];
        return _lT_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(old_trav)throw exn;
        flip_ongoing_traversal(h);
        throw exn}}
    function bucket_length(accu,param)
     {var accu$0=accu,param$0=param;
      for(;;)
       {if(param$0)
         {var
           param$1=param$0[3],
           accu$1=accu$0 + 1 | 0,
           accu$0=accu$1,
           param$0=param$1;
          continue}
        return accu$0}}
    function stats(h)
     {var
       _lO_=h[2],
       _lP_=0,
       mbl=
        fold_left$1(function(m,b){return max(m,bucket_length(0,b))},_lP_,_lO_),
       histo=caml_make_vect(mbl + 1 | 0,0),
       _lQ_=h[2];
      iter$5
       (function(b)
         {var l=bucket_length(0,b);
          histo[1 + l] = caml_check_bound(histo,l)[1 + l] + 1 | 0;
          return 0},
        _lQ_);
      return [0,h[1],h[2].length - 1,mbl,histo]}
    function to_seq$9(tbl)
     {var tbl_data=tbl[2];
      function aux(i,buck,param)
       {var i$0=i,buck$0=buck;
        for(;;)
         {if(buck$0)
           {var key=buck$0[1],data=buck$0[2],next=buck$0[3];
            return [0,[0,key,data],function(_lN_){return aux(i$0,next,_lN_)}]}
          if(i$0 === tbl_data.length - 1)return 0;
          var
           buck$1=caml_check_bound(tbl_data,i$0)[1 + i$0],
           i$1=i$0 + 1 | 0,
           i$0=i$1,
           buck$0=buck$1;
          continue}}
      var _lK_=0,_lL_=0;
      return function(_lM_){return aux(_lL_,_lK_,_lM_)}}
    function to_seq_keys(m)
     {var _lG_=to_seq$9(m);
      function _lH_(_lJ_){return _lJ_[1]}
      return function(_lI_){return map(_lH_,_lG_,_lI_)}}
    function to_seq_values(m)
     {var _lC_=to_seq$9(m);
      function _lD_(_lF_){return _lF_[2]}
      return function(_lE_){return map(_lD_,_lC_,_lE_)}}
    function add_seq$2(tbl,i)
     {return iter
              (function(param)
                {var v=param[2],k=param[1];return add$0(tbl,k,v)},
               i)}
    function replace_seq(tbl,i)
     {return iter
              (function(param)
                {var v=param[2],k=param[1];return replace(tbl,k,v)},
               i)}
    function of_seq$7(i){var tbl=create$3(0,16);replace_seq(tbl,i);return tbl}
    function MakeSeeded(H)
     {function key_index(h,key)
       {var _lB_=h[2].length - 1 - 1 | 0;
        return caml_call2(H[2],h[3],key) & _lB_}
      function add(h,key,data)
       {var
         i=key_index(h,key),
         bucket=[0,key,data,caml_check_bound(h[2],i)[1 + i]];
        caml_check_bound(h[2],i)[1 + i] = bucket;
        h[1] = h[1] + 1 | 0;
        var _lA_=h[2].length - 1 << 1 < h[1]?1:0;
        return _lA_?resize$0(key_index,h):_lA_}
      function remove(h,key)
       {var
         i=key_index(h,key),
         c$0=caml_check_bound(h[2],i)[1 + i],
         prec=0,
         c=c$0;
        for(;;)
         {if(c)
           {var k=c[1],next=c[3];
            if(caml_call2(H[1],k,key))
             {h[1] = h[1] - 1 | 0;
              return prec
                      ?(prec[3] = next,0)
                      :(caml_check_bound(h[2],i)[1 + i] = next,0)}
            var prec=c,c=next;
            continue}
          return 0}}
      function find(h,key)
       {var _lz_=key_index(h,key),match=caml_check_bound(h[2],_lz_)[1 + _lz_];
        if(match)
         {var k1=match[1],d1=match[2],next1=match[3];
          if(caml_call2(H[1],key,k1))return d1;
          if(next1)
           {var k2=next1[1],d2=next1[2],next2=next1[3];
            if(caml_call2(H[1],key,k2))return d2;
            if(next2)
             {var k3=next2[1],d3=next2[2],next3=next2[3];
              if(caml_call2(H[1],key,k3))return d3;
              var param=next3;
              for(;;)
               {if(param)
                 {var k=param[1],data=param[2],next=param[3];
                  if(caml_call2(H[1],key,k))return data;
                  var param=next;
                  continue}
                throw Not_found}}
            throw Not_found}
          throw Not_found}
        throw Not_found}
      function find_opt(h,key)
       {var _ly_=key_index(h,key),match=caml_check_bound(h[2],_ly_)[1 + _ly_];
        if(match)
         {var k1=match[1],d1=match[2],next1=match[3];
          if(caml_call2(H[1],key,k1))return [0,d1];
          if(next1)
           {var k2=next1[1],d2=next1[2],next2=next1[3];
            if(caml_call2(H[1],key,k2))return [0,d2];
            if(next2)
             {var k3=next2[1],d3=next2[2],next3=next2[3];
              if(caml_call2(H[1],key,k3))return [0,d3];
              var param=next3;
              for(;;)
               {if(param)
                 {var k=param[1],data=param[2],next=param[3];
                  if(caml_call2(H[1],key,k))return [0,data];
                  var param=next;
                  continue}
                return 0}}
            return 0}
          return 0}
        return 0}
      function find_all(h,key)
       {function find_in_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var k=param$0[1],d=param$0[2],next=param$0[3];
              if(caml_call2(H[1],k,key))return [0,d,find_in_bucket(next)];
              var param$0=next;
              continue}
            return 0}}
        var _lx_=key_index(h,key);
        return find_in_bucket(caml_check_bound(h[2],_lx_)[1 + _lx_])}
      function replace(h,key,data)
       {var
         i=key_index(h,key),
         param$0=caml_check_bound(h[2],i)[1 + i],
         param=param$0;
        for(;;)
         {if(param)
           {var k=param[1],next=param[3];
            if(! caml_call2(H[1],k,key)){var param=next;continue}
            param[1] = key;
            param[2] = data;
            var _lu_=0}
          else
           var _lu_=1;
          if(_lu_)
           {caml_check_bound(h[2],i)[1 + i] = [0,key,data,param$0];
            h[1] = h[1] + 1 | 0;
            var _lv_=h[2].length - 1 << 1 < h[1]?1:0;
            if(_lv_)return resize$0(key_index,h);
            var _lw_=_lv_}
          else
           var _lw_=_lu_;
          return _lw_}}
      function mem(h,key)
       {var
         _lt_=key_index(h,key),
         param$0=caml_check_bound(h[2],_lt_)[1 + _lt_],
         param=param$0;
        for(;;)
         {if(param)
           {var k=param[1],next=param[3],_ls_=caml_call2(H[1],k,key);
            if(_ls_)return _ls_;
            var param=next;
            continue}
          return 0}}
      function add_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return add(tbl,k,v)},
                 i)}
      function replace_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return replace(tbl,k,v)},
                 i)}
      function of_seq(i){var tbl=create$3(0,16);replace_seq(tbl,i);return tbl}
      return [0,
              create$3,
              clear$2,
              reset$0,
              copy$6,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter$10,
              filter_map_inplace,
              fold$3,
              length$4,
              stats,
              to_seq$9,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq]}
    function Make(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       _lr_=include[1];
      function create(sz){return caml_call2(_lr_,_b4_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq]}
    var
     Stdlib_hashtbl=
      [0,
       create$3,
       clear$2,
       reset$0,
       copy$6,
       add$0,
       find$0,
       find_opt$0,
       find_all$0,
       mem$2,
       remove,
       replace,
       iter$10,
       filter_map_inplace,
       fold$3,
       length$4,
       randomize,
       is_randomized,
       stats,
       to_seq$9,
       to_seq_keys,
       to_seq_values,
       add_seq$2,
       replace_seq,
       of_seq$7,
       Make,
       MakeSeeded,
       hash$1,
       seeded_hash,
       hash_param,
       caml_hash];
    caml_register_global(758,Stdlib_hashtbl,"Stdlib__hashtbl");
    function weak_create(l)
     {var _lp_=0 <= l?1:0,_lq_=_lp_?l <= _u_[15]?1:0:_lp_;
      if(1 - _lq_)invalid_arg(cst_Weak_create);
      return runtime.caml_weak_create(l)}
    function length$5(x){return x.length - 1 - 2 | 0}
    function raise_if_invalid_offset$0(e,o,msg)
     {var _lm_=0 <= o?1:0,_ln_=_lm_?o < length$5(e)?1:0:_lm_,_lo_=1 - _ln_;
      return _lo_?invalid_arg(msg):_lo_}
    function set(e,o,x)
     {raise_if_invalid_offset$0(e,o,cst_Weak_set);
      if(x){var x$0=x[1];return caml_ephe_set_key(e,o,x$0)}
      return caml_ephe_unset_key(e,o)}
    function get$0(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_get);
      return runtime.caml_weak_get(e,o)}
    function get_copy(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_get_copy);
      return runtime.caml_weak_get_copy(e,o)}
    function check$0(e,o)
     {raise_if_invalid_offset$0(e,o,cst_Weak_check);
      return runtime.caml_weak_check(e,o)}
    function blit$4(e1,o1,e2,o2,l)
     {if
       (0
        <=
        l
        &&
        0
        <=
        o1
        &&
        !
        ((length$5(e1) - l | 0) < o1)
        &&
        0
        <=
        o2
        &&
        !
        ((length$5(e2) - l | 0) < o2))
       {var
         _lk_=0 !== l?1:0,
         _ll_=_lk_?runtime.caml_weak_blit(e1,o1,e2,o2,l):_lk_;
        return _ll_}
      return invalid_arg(cst_Weak_blit)}
    function fill$2(ar,ofs,len,x)
     {if(0 <= ofs && 0 <= len && ! ((length$5(ar) - len | 0) < ofs))
       {var _li_=(ofs + len | 0) - 1 | 0;
        if(! (_li_ < ofs))
         {var i=ofs;
          for(;;)
           {set(ar,i,x);
            var _lj_=i + 1 | 0;
            if(_li_ !== i){var i=_lj_;continue}
            break}}
        return 0}
      throw [0,Invalid_argument,cst_Weak_fill]}
    function Make$0(H)
     {var emptybucket=weak_create(0);
      function get_index(t,h){return caml_mod(h & 2147483647,t[1].length - 1)}
      var limit=7;
      function create(sz)
       {var
         sz$0=7 <= sz?sz:7,
         sz$1=max_array_length < sz$0?max_array_length:sz$0;
        return [0,
                caml_make_vect(sz$1,emptybucket),
                caml_make_vect(sz$1,[0]),
                limit,
                0,
                0]}
      function clear(t)
       {var _lg_=t[1].length - 1 - 1 | 0,_lf_=0;
        if(! (_lg_ < 0))
         {var i=_lf_;
          for(;;)
           {caml_check_bound(t[1],i)[1 + i] = emptybucket;
            caml_check_bound(t[2],i)[1 + i] = [0];
            var _lh_=i + 1 | 0;
            if(_lg_ !== i){var i=_lh_;continue}
            break}}
        t[3] = limit;
        t[4] = 0;
        return 0}
      function fold(f,t,init)
       {var _le_=t[1],i=0;
        return fold_right$0
                (function(b,accu$1)
                  {var i$0=i,accu=accu$1;
                   for(;;)
                    {if(length$5(b) <= i$0)return accu;
                     var match=get$0(b,i$0);
                     if(match)
                      {var
                        v=match[1],
                        accu$0=caml_call2(f,v,accu),
                        i$1=i$0 + 1 | 0,
                        i$0=i$1,
                        accu=accu$0;
                       continue}
                     var i$2=i$0 + 1 | 0,i$0=i$2;
                     continue}},
                 _le_,
                 init)}
      function iter(f,t)
       {var _ld_=t[1],i=0;
        return iter$5
                (function(b)
                  {var i$0=i;
                   for(;;)
                    {if(length$5(b) <= i$0)return 0;
                     var match=get$0(b,i$0);
                     if(match)
                      {var v=match[1];
                       caml_call1(f,v);
                       var i$1=i$0 + 1 | 0,i$0=i$1;
                       continue}
                     var i$2=i$0 + 1 | 0,i$0=i$2;
                     continue}},
                 _ld_)}
      function count_bucket(i,b,accu)
       {var i$0=i,accu$0=accu;
        for(;;)
         {if(length$5(b) <= i$0)return accu$0;
          var
           _lc_=check$0(b,i$0)?1:0,
           accu$1=accu$0 + _lc_ | 0,
           i$1=i$0 + 1 | 0,
           i$0=i$1,
           accu$0=accu$1;
          continue}}
      function count(t)
       {var _k9_=0,_k__=t[1],_k$_=0;
        return fold_right$0
                (function(_la_,_lb_){return count_bucket(_k$_,_la_,_lb_)},
                 _k__,
                 _k9_)}
      function add_aux(t,setter,d,h,index)
       {var
         bucket$0=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket$0),
         i$3=0;
        for(;;)
         {if(sz <= i$3)
           {var
             newsz=
              min(((3 * sz | 0) / 2 | 0) + 3 | 0,max_array_length - 2 | 0);
            if(newsz <= sz)failwith(cst_Weak_Make_hash_bucket_cann);
            var
             newbucket=weak_create(newsz),
             newhashes=caml_make_vect(newsz,0);
            blit$4(bucket$0,0,newbucket,0,sz);
            blit$1(hashes,0,newhashes,0,sz);
            caml_call3(setter,newbucket,sz,d);
            caml_check_bound(newhashes,sz)[1 + sz] = h;
            caml_check_bound(t[1],index)[1 + index] = newbucket;
            caml_check_bound(t[2],index)[1 + index] = newhashes;
            var _k5_=sz <= t[3]?1:0,_k6_=_k5_?t[3] < newsz?1:0:_k5_;
            if(_k6_)
             {t[4] = t[4] + 1 | 0;
              var i$4=0;
              for(;;)
               {var
                 _kY_=t[5],
                 bucket=caml_check_bound(t[1],_kY_)[1 + _kY_],
                 _kZ_=t[5],
                 hbucket=caml_check_bound(t[2],_kZ_)[1 + _kZ_],
                 n=length$5(bucket),
                 prev_len=(((n - 3 | 0) * 2 | 0) + 2 | 0) / 3 | 0,
                 live=count_bucket(0,bucket,0);
                if(live <= prev_len)
                 {var j$2=length$5(bucket) - 1 | 0,i$0=0,j=j$2;
                  for(;;)
                   {if(prev_len <= j)
                     {if(check$0(bucket,i$0))
                       {var i$1=i$0 + 1 | 0,i$0=i$1;continue}
                      if(check$0(bucket,j))
                       {blit$4(bucket,j,bucket,i$0,1);
                        var _k0_=caml_check_bound(hbucket,j)[1 + j];
                        caml_check_bound(hbucket,i$0)[1 + i$0] = _k0_;
                        var j$0=j - 1 | 0,i$2=i$0 + 1 | 0,i$0=i$2,j=j$0;
                        continue}
                      var j$1=j - 1 | 0,j=j$1;
                      continue}
                    if(0 === prev_len)
                     {var _k1_=t[5];
                      caml_check_bound(t[1],_k1_)[1 + _k1_] = emptybucket;
                      var _k2_=t[5];
                      caml_check_bound(t[2],_k2_)[1 + _k2_] = [0]}
                    else
                     {caml_obj_truncate(bucket,prev_len + 2 | 0);
                      caml_obj_truncate(hbucket,prev_len)}
                    var _k3_=t[3] < n?1:0,_k4_=_k3_?prev_len <= t[3]?1:0:_k3_;
                    if(_k4_)t[4] = t[4] - 1 | 0;
                    break}}
                t[5] = caml_mod(t[5] + 1 | 0,t[1].length - 1);
                var _k8_=i$4 + 1 | 0;
                if(2 !== i$4){var i$4=_k8_;continue}
                break}}
            var _k7_=((t[1].length - 1) / 2 | 0) < t[4]?1:0;
            if(_k7_)
             {var
               n$0=t[1].length - 1,
               newlen=min(((3 * n$0 | 0) / 2 | 0) + 3 | 0,max_array_length);
              if(n$0 < newlen)
               {var newt=create(newlen),_kX_=t[1],i=0;
                iteri$2
                 (function(j,ob)
                   {var i$0=i;
                    for(;;)
                     {if(length$5(ob) <= i$0)return 0;
                      var match=check$0(ob,i$0);
                      if(0 === match){var i$1=i$0 + 1 | 0,i$0=i$1;continue}
                      var
                       oh=caml_check_bound(t[2],j)[1 + j],
                       setter$0=
                        function(i)
                         {function setter(nb,ni,param){return blit$4(ob,i,nb,ni,1)}
                          return setter},
                       setter=setter$0(i$0),
                       h=caml_check_bound(oh,i$0)[1 + i$0];
                      add_aux(newt,setter,0,h,get_index(newt,h));
                      var i$2=i$0 + 1 | 0,i$0=i$2;
                      continue}},
                  _kX_);
                t[1] = newt[1];
                t[2] = newt[2];
                t[3] = newt[3];
                t[4] = newt[4];
                t[5] = caml_mod(t[5],newt[1].length - 1);
                return 0}
              t[3] = max_int;
              t[4] = 0;
              return 0}
            return _k7_}
          if(check$0(bucket$0,i$3)){var i$5=i$3 + 1 | 0,i$3=i$5;continue}
          caml_call3(setter,bucket$0,i$3,d);
          caml_check_bound(hashes,i$3)[1 + i$3] = h;
          return 0}}
      function add(t,d)
       {var h=caml_call1(H[2],d);return add_aux(t,set,[0,d],h,get_index(t,h))}
      function find_or(t,d,ifnotfound)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return caml_call2(ifnotfound,h,index);
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var match$0=get$0(bucket,i);
                if(match$0){var v$0=match$0[1];return v$0}
                var i$0=i + 1 | 0,i=i$0;
                continue}}
            var i$1=i + 1 | 0,i=i$1;
            continue}
          var i$2=i + 1 | 0,i=i$2;
          continue}}
      function merge(t,d)
       {return find_or
                (t,d,function(h,index){add_aux(t,set,[0,d],h,index);return d})}
      function find(t,d)
       {return find_or(t,d,function(h,index){throw Not_found})}
      function find_opt(t,d)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return 0;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var v$0=get$0(bucket,i);
                if(v$0)return v$0;
                var i$0=i + 1 | 0,i=i$0;
                continue}}
            var i$1=i + 1 | 0,i=i$1;
            continue}
          var i$2=i + 1 | 0,i=i$2;
          continue}}
      function find_shadow(t,d,iffound,ifnotfound)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0;
        for(;;)
         {if(sz <= i)return ifnotfound;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))return caml_call2(iffound,bucket,i)}
            var i$0=i + 1 | 0,i=i$0;
            continue}
          var i$1=i + 1 | 0,i=i$1;
          continue}}
      function remove(t,d)
       {var _kW_=0;
        return find_shadow(t,d,function(w,i){return set(w,i,0)},_kW_)}
      function mem(t,d)
       {var _kV_=0;return find_shadow(t,d,function(w,i){return 1},_kV_)}
      function find_all(t,d)
       {var
         h=caml_call1(H[2],d),
         index=get_index(t,h),
         bucket=caml_check_bound(t[1],index)[1 + index],
         hashes=caml_check_bound(t[2],index)[1 + index],
         sz=length$5(bucket),
         i=0,
         accu=0;
        for(;;)
         {if(sz <= i)return accu;
          if(h === caml_check_bound(hashes,i)[1 + i])
           {var match=get_copy(bucket,i);
            if(match)
             {var v=match[1];
              if(caml_call2(H[1],v,d))
               {var match$0=get$0(bucket,i);
                if(match$0)
                 {var
                   v$0=match$0[1],
                   accu$0=[0,v$0,accu],
                   i$0=i + 1 | 0,
                   i=i$0,
                   accu=accu$0;
                  continue}
                var i$1=i + 1 | 0,i=i$1;
                continue}}
            var i$2=i + 1 | 0,i=i$2;
            continue}
          var i$3=i + 1 | 0,i=i$3;
          continue}}
      function stats(t)
       {var len=t[1].length - 1,lens=map$5(length$5,t[1]);
        sort(caml_int_compare,lens);
        var
         _kN_=0,
         totlen=
          fold_left$1(function(_kU_,_kT_){return _kU_ + _kT_ | 0},_kN_,lens),
         _kO_=len - 1 | 0,
         _kQ_=len / 2 | 0,
         _kP_=caml_check_bound(lens,_kO_)[1 + _kO_],
         _kR_=caml_check_bound(lens,_kQ_)[1 + _kQ_],
         _kS_=caml_check_bound(lens,0)[1];
        return [0,len,count(t),totlen,_kS_,_kR_,_kP_]}
      return [0,
              create,
              clear,
              merge,
              add,
              remove,
              find,
              find_opt,
              find_all,
              mem,
              iter,
              fold,
              count,
              stats]}
    var
     Stdlib_weak=
      [0,weak_create,length$5,set,get$0,get_copy,check$0,fill$2,blit$4,Make$0];
    caml_register_global(759,Stdlib_weak,"Stdlib__weak");
    function id$0(x){return x}
    var
     String_tag=[248,cst_Stdlib_Format_String_tag,caml_fresh_oo_id(0)],
     size=0,
     unknown=-1;
    function pp_enqueue(state,token)
     {state[13] = state[13] + token[3] | 0;return add(token,state[28])}
    var pp_infinity=1000000010;
    function pp_output_string(state,s)
     {return caml_call3(state[17],s,0,caml_ml_string_length(s))}
    function pp_output_newline(state){return caml_call1(state[19],0)}
    function format_pp_text(state,size,text)
     {state[9] = state[9] - size | 0;
      pp_output_string(state,text);
      state[11] = 0;
      return 0}
    function format_string(state,s)
     {var _kM_=caml_string_notequal(s,cst$67);
      return _kM_?format_pp_text(state,caml_ml_string_length(s),s):_kM_}
    function break_new_line(state,param,width)
     {var after=param[3],offset=param[2],before=param[1];
      format_string(state,before);
      pp_output_newline(state);
      state[11] = 1;
      var
       indent=(state[6] - width | 0) + offset | 0,
       real_indent=min(state[8],indent);
      state[10] = real_indent;
      state[9] = state[6] - state[10] | 0;
      caml_call1(state[21],state[10]);
      return format_string(state,after)}
    function break_line(state,width){return break_new_line(state,_b5_,width)}
    function break_same_line(state,param)
     {var after=param[3],width=param[2],before=param[1];
      format_string(state,before);
      state[9] = state[9] - width | 0;
      caml_call1(state[20],width);
      return format_string(state,after)}
    function advance_left(state)
     {for(;;)
       {var match$12=peek_opt(state[28]);
        if(match$12)
         {var
           match$13=match$12[1],
           size$0=match$13[1],
           length$0=match$13[3],
           token=match$13[2],
           pending_count=state[13] - state[12] | 0,
           _kK_=0 <= size$0?1:0,
           _kL_=_kK_ || (state[9] <= pending_count?1:0);
          if(_kL_)
           {take(state[28]);
            var size$1=0 <= size$0?size$0:pp_infinity;
            if(typeof token === "number")
             switch(token)
              {case 0:
                var match$3=top_opt(state[3]);
                if(match$3)
                 {var
                   match$4=match$3[1],
                   tabs=match$4[1],
                   add_tab=
                    function(n,ls)
                     {if(ls)
                       {var l=ls[2],x=ls[1];
                        return caml_lessthan(n,x)?[0,n,ls]:[0,x,add_tab(n,l)]}
                      return [0,n,0]};
                  tabs[1] = add_tab(state[6] - state[9] | 0,tabs[1])}
                break;
               case 1:pop_opt(state[2]);break;
               case 2:pop_opt(state[3]);break;
               case 3:
                var match$5=top_opt(state[2]);
                if(match$5)
                 {var match$6=match$5[1],width$0=match$6[2];
                  break_line(state,width$0)}
                else
                 pp_output_newline(state);
                break;
               case 4:
                if(state[10] !== (state[6] - state[9] | 0))
                 {var match$1=take_opt(state[28]);
                  if(match$1)
                   {var match$2=match$1[1],size=match$2[1],length=match$2[3];
                    state[12] = state[12] - length | 0;
                    state[9] = state[9] + size | 0}}
                break;
               default:
                var match$7=pop_opt(state[5]);
                if(match$7)
                 {var
                   tag_name=match$7[1],
                   marker=caml_call1(state[25],tag_name);
                  pp_output_string(state,marker)}}
            else
             switch(token[0])
              {case 0:var s=token[1];format_pp_text(state,size$1,s);break;
               case 1:
                var
                 breaks=token[2],
                 fits=token[1],
                 off=breaks[2],
                 before=breaks[1],
                 match$8=top_opt(state[2]);
                if(match$8)
                 {var
                   match$9=match$8[1],
                   width$1=match$9[2],
                   box_type$0=match$9[1];
                  switch(box_type$0)
                   {case 0:break_same_line(state,fits);break;
                    case 1:break_new_line(state,breaks,width$1);break;
                    case 2:break_new_line(state,breaks,width$1);break;
                    case 3:
                     if(state[9] < (size$1 + caml_ml_string_length(before) | 0))
                      break_new_line(state,breaks,width$1);
                     else
                      break_same_line(state,fits);
                     break;
                    case 4:
                     if(state[11])
                      break_same_line(state,fits);
                     else
                      if(state[9] < (size$1 + caml_ml_string_length(before) | 0))
                       break_new_line(state,breaks,width$1);
                      else
                       if(((state[6] - width$1 | 0) + off | 0) < state[10])
                        break_new_line(state,breaks,width$1);
                       else
                        break_same_line(state,fits);
                     break;
                    default:break_same_line(state,fits)}}
                break;
               case 2:
                var
                 off$0=token[2],
                 n=token[1],
                 insertion_point=state[6] - state[9] | 0,
                 match$10=top_opt(state[3]);
                if(match$10)
                 {var match$11=match$10[1],tabs$0=match$11[1],_kI_=tabs$0[1];
                  if(_kI_)
                   {var first=_kI_[1],param=tabs$0[1];
                    for(;;)
                     {if(param)
                       {var tail=param[2],head=param[1];
                        if(! (insertion_point <= head)){var param=tail;continue}
                        var _kJ_=head}
                      else
                       var _kJ_=first;
                      var tab=_kJ_;
                      break}}
                  else
                   var tab=insertion_point;
                  var offset=tab - insertion_point | 0;
                  if(0 <= offset)
                   break_same_line(state,[0,cst$69,offset + n | 0,cst$68]);
                  else
                   break_new_line
                    (state,[0,cst$71,tab + off$0 | 0,cst$70],state[6])}
                break;
               case 3:
                var
                 ty=token[2],
                 off$1=token[1],
                 insertion_point$0=state[6] - state[9] | 0;
                if(state[8] < insertion_point$0)
                 {var match=top_opt(state[2]);
                  if(match)
                   {var match$0=match[1],width=match$0[2],box_type=match$0[1];
                    if(state[9] < width)
                     {var switcher=box_type - 1 | 0;
                      if(! (3 < switcher >>> 0))break_line(state,width)}}
                  else
                   pp_output_newline(state)}
                var
                 width$2=state[9] - off$1 | 0,
                 box_type$1=1 === ty?1:state[9] < size$1?ty:5;
                push([0,box_type$1,width$2],state[2]);
                break;
               case 4:var tbox=token[1];push(tbox,state[3]);break;
               default:
                var
                 tag_name$0=token[1],
                 marker$0=caml_call1(state[24],tag_name$0);
                pp_output_string(state,marker$0);
                push(tag_name$0,state[5])}
            state[12] = length$0 + state[12] | 0;
            continue}
          return _kL_}
        return 0}}
    function enqueue_advance(state,tok)
     {pp_enqueue(state,tok);return advance_left(state)}
    function enqueue_string_as(state,size,s)
     {return enqueue_advance(state,[0,size,[0,s],size])}
    function initialize_scan_stack(stack)
     {clear(stack);
      var queue_elem=[0,unknown,_b6_,0];
      return push([0,-1,queue_elem],stack)}
    function set_size(state,ty)
     {var match=top_opt(state[1]);
      if(match)
       {var
         match$0=match[1],
         queue_elem=match$0[2],
         left_total=match$0[1],
         _kF_=queue_elem[1];
        if(left_total < state[12])return initialize_scan_stack(state[1]);
        var _kG_=queue_elem[2];
        if(typeof _kG_ !== "number")
         switch(_kG_[0])
          {case 3:
            var _kH_=1 - ty;
            return _kH_
                    ?(queue_elem[1] = state[13] + _kF_ | 0,pop_opt(state[1]),0)
                    :_kH_;
           case 1:
           case 2:
            return ty
                    ?(queue_elem[1] = state[13] + _kF_ | 0,pop_opt(state[1]),0)
                    :ty
           }
        return 0}
      return 0}
    function scan_push(state,b,token)
     {pp_enqueue(state,token);
      if(b)set_size(state,1);
      var elem=[0,state[13],token];
      return push(elem,state[1])}
    function pp_open_box_gen(state,indent,br_ty)
     {state[14] = state[14] + 1 | 0;
      if(state[14] < state[15])
       {var size=- state[13] | 0,elem=[0,size,[3,indent,br_ty],0];
        return scan_push(state,0,elem)}
      var _kD_=state[14] === state[15]?1:0;
      if(_kD_)
       {var _kE_=state[16];
        return enqueue_string_as(state,caml_ml_string_length(_kE_),_kE_)}
      return _kD_}
    function pp_close_box(state,param)
     {var _kB_=1 < state[14]?1:0;
      if(_kB_)
       {if(state[14] < state[15])
         {pp_enqueue(state,[0,size,1,0]);set_size(state,1);set_size(state,0)}
        state[14] = state[14] - 1 | 0;
        var _kC_=0}
      else
       var _kC_=_kB_;
      return _kC_}
    function pp_open_stag(state,tag_name)
     {if(state[22]){push(tag_name,state[4]);caml_call1(state[26],tag_name)}
      var _kA_=state[23];
      if(_kA_)
       {var token=[5,tag_name];return pp_enqueue(state,[0,size,token,0])}
      return _kA_}
    function pp_close_stag(state,param)
     {if(state[23])pp_enqueue(state,[0,size,5,0]);
      var _ky_=state[22];
      if(_ky_)
       {var match=pop_opt(state[4]);
        if(match){var tag_name=match[1];return caml_call1(state[27],tag_name)}
        var _kz_=0}
      else
       var _kz_=_ky_;
      return _kz_}
    function pp_open_tag(state,s){return pp_open_stag(state,[0,String_tag,s])}
    function pp_close_tag(state,param){return pp_close_stag(state,0)}
    function pp_set_print_tags(state,b){state[22] = b;return 0}
    function pp_set_mark_tags(state,b){state[23] = b;return 0}
    function pp_get_print_tags(state,param){return state[22]}
    function pp_get_mark_tags(state,param){return state[23]}
    function pp_set_tags(state,b)
     {pp_set_print_tags(state,b);return pp_set_mark_tags(state,b)}
    function pp_get_formatter_stag_function(state,param)
     {return [0,state[24],state[25],state[26],state[27]]}
    function pp_set_formatter_stag_function(state,param)
     {var pct=param[4],pot=param[3],mct=param[2],mot=param[1];
      state[24] = mot;
      state[25] = mct;
      state[26] = pot;
      state[27] = pct;
      return 0}
    function pp_rinit(state)
     {state[12] = 1;
      state[13] = 1;
      clear$0(state[28]);
      initialize_scan_stack(state[1]);
      clear(state[2]);
      clear(state[3]);
      clear(state[4]);
      clear(state[5]);
      state[10] = 0;
      state[14] = 0;
      state[9] = state[6];
      return pp_open_box_gen(state,0,3)}
    function pp_flush_queue(state,b)
     {var _kx_=state[4];
      iter$7(function(param){return pp_close_tag(state,0)},_kx_);
      for(;;)
       {if(1 < state[14]){pp_close_box(state,0);continue}
        state[13] = pp_infinity;
        advance_left(state);
        if(b)pp_output_newline(state);
        return pp_rinit(state)}}
    function pp_print_as_size(state,size,s)
     {var _kw_=state[14] < state[15]?1:0;
      return _kw_?enqueue_string_as(state,size,s):_kw_}
    function pp_print_as(state,isize,s)
     {return pp_print_as_size(state,isize,s)}
    function pp_print_string(state,s)
     {return pp_print_as(state,caml_ml_string_length(s),s)}
    function pp_print_int(state,i)
     {return pp_print_string(state,caml_string_of_jsbytes("" + i))}
    function pp_print_float(state,f)
     {return pp_print_string(state,to_string(f))}
    function pp_print_bool(state,b)
     {return pp_print_string(state,string_of_bool(b))}
    function pp_print_char(state,c){return pp_print_as(state,1,make$0(1,c))}
    function pp_open_hbox(state,param){return pp_open_box_gen(state,0,0)}
    function pp_open_vbox(state,indent)
     {return pp_open_box_gen(state,indent,1)}
    function pp_open_hvbox(state,indent)
     {return pp_open_box_gen(state,indent,2)}
    function pp_open_hovbox(state,indent)
     {return pp_open_box_gen(state,indent,3)}
    function pp_open_box(state,indent){return pp_open_box_gen(state,indent,4)}
    function pp_print_newline(state,param)
     {pp_flush_queue(state,1);return caml_call1(state[18],0)}
    function pp_print_flush(state,param)
     {pp_flush_queue(state,0);return caml_call1(state[18],0)}
    function pp_force_newline(state,param)
     {var _kv_=state[14] < state[15]?1:0;
      return _kv_?enqueue_advance(state,[0,size,3,0]):_kv_}
    function pp_print_if_newline(state,param)
     {var _ku_=state[14] < state[15]?1:0;
      return _ku_?enqueue_advance(state,[0,size,4,0]):_ku_}
    function pp_print_custom_break(state,fits,breaks)
     {var
       after=fits[3],
       width=fits[2],
       before=fits[1],
       _kt_=state[14] < state[15]?1:0;
      if(_kt_)
       {var
         size=- state[13] | 0,
         token=[1,fits,breaks],
         length=
          (caml_ml_string_length(before) + width | 0)
          +
          caml_ml_string_length(after)
          |
          0,
         elem=[0,size,token,length];
        return scan_push(state,1,elem)}
      return _kt_}
    function pp_print_break(state,width,offset)
     {return pp_print_custom_break
              (state,[0,cst$75,width,cst$74],[0,cst$73,offset,cst$72])}
    function pp_print_space(state,param){return pp_print_break(state,1,0)}
    function pp_print_cut(state,param){return pp_print_break(state,0,0)}
    function pp_open_tbox(state,param)
     {state[14] = state[14] + 1 | 0;
      var _ks_=state[14] < state[15]?1:0;
      if(_ks_)
       {var elem=[0,size,[4,[0,[0,0]]],0];return enqueue_advance(state,elem)}
      return _ks_}
    function pp_close_tbox(state,param)
     {var _kp_=1 < state[14]?1:0;
      if(_kp_)
       {var _kq_=state[14] < state[15]?1:0;
        if(_kq_)
         {var elem=[0,size,2,0];
          enqueue_advance(state,elem);
          state[14] = state[14] - 1 | 0;
          var _kr_=0}
        else
         var _kr_=_kq_}
      else
       var _kr_=_kp_;
      return _kr_}
    function pp_print_tbreak(state,width,offset)
     {var _ko_=state[14] < state[15]?1:0;
      if(_ko_)
       {var size=- state[13] | 0,elem=[0,size,[2,width,offset],width];
        return scan_push(state,1,elem)}
      return _ko_}
    function pp_print_tab(state,param){return pp_print_tbreak(state,0,0)}
    function pp_set_tab(state,param)
     {var _kn_=state[14] < state[15]?1:0;
      if(_kn_){var elem=[0,size,0,0];return enqueue_advance(state,elem)}
      return _kn_}
    function pp_set_max_boxes(state,n)
     {var _kl_=1 < n?1:0,_km_=_kl_?(state[15] = n,0):_kl_;return _km_}
    function pp_get_max_boxes(state,param){return state[15]}
    function pp_over_max_boxes(state,param)
     {return state[14] === state[15]?1:0}
    function pp_set_ellipsis_text(state,s){state[16] = s;return 0}
    function pp_get_ellipsis_text(state,param){return state[16]}
    function pp_limit(n){return n < 1000000010?n:1000000009}
    function pp_set_max_indent(state,n$0)
     {var _kk_=1 < n$0?1:0;
      if(_kk_)
       {var n$1=state[6] - n$0 | 0,_kj_=1 <= n$1?1:0;
        if(_kj_)
         {var n=pp_limit(n$1);
          state[7] = n;
          state[8] = state[6] - state[7] | 0;
          return pp_rinit(state)}
        return _kj_}
      return _kk_}
    function pp_get_max_indent(state,param){return state[8]}
    function pp_set_margin(state,n)
     {var _ki_=1 <= n?1:0;
      if(_ki_)
       {var n$0=pp_limit(n);
        state[6] = n$0;
        var
         new_max_indent=
          state[8] <= state[6]
           ?state[8]
           :max(max(state[6] - state[7] | 0,state[6] / 2 | 0),1);
        return pp_set_max_indent(state,new_max_indent)}
      return _ki_}
    function check_geometry(geometry)
     {var
       _kg_=1 < geometry[1]?1:0,
       _kh_=_kg_?geometry[1] < geometry[2]?1:0:_kg_;
      return _kh_}
    function pp_get_margin(state,param){return state[6]}
    function pp_set_geometry(state,max_indent,margin)
     {if(2 <= max_indent)
       {if(margin <= max_indent)
         throw [0,Invalid_argument,cst_Format_pp_set_geometry_mar];
        pp_set_margin(state,margin);
        return pp_set_max_indent(state,max_indent)}
      throw [0,Invalid_argument,cst_Format_pp_set_geometry_max]}
    function pp_safe_set_geometry(state,max_indent,margin)
     {return check_geometry([0,max_indent,margin])
              ?pp_set_geometry(state,max_indent,margin)
              :0}
    function pp_get_geometry(state,param){return [0,state[8],state[6]]}
    function pp_set_formatter_out_functions(state,param)
     {var j=param[5],i=param[4],h=param[3],g=param[2],f=param[1];
      state[17] = f;
      state[18] = g;
      state[19] = h;
      state[20] = i;
      state[21] = j;
      return 0}
    function pp_get_formatter_out_functions(state,param)
     {return [0,state[17],state[18],state[19],state[20],state[21]]}
    function pp_set_formatter_output_functi(state,f,g)
     {state[17] = f;state[18] = g;return 0}
    function pp_get_formatter_output_functi(state,param)
     {return [0,state[17],state[18]]}
    function display_newline(state,param)
     {return caml_call3(state[17],cst$76,0,1)}
    var blank_line=make$0(80,32);
    function display_indent(state,n)
     {var n$0=n;
      for(;;)
       {var _kf_=0 < n$0?1:0;
        if(_kf_)
         {if(80 < n$0)
           {caml_call3(state[17],blank_line,0,80);
            var n$1=n$0 - 80 | 0,n$0=n$1;
            continue}
          return caml_call3(state[17],blank_line,0,n$0)}
        return _kf_}}
    function pp_set_formatter_out_channel(state,oc)
     {state[17]
      =
      function(_kc_,_kd_,_ke_){return output_substring(oc,_kc_,_kd_,_ke_)};
      state[18] = function(param){return caml_ml_flush(oc)};
      state[19] = function(_kb_){return display_newline(state,_kb_)};
      state[20] = function(_ka_){return display_indent(state,_ka_)};
      state[21] = function(_j$_){return display_indent(state,_j$_)};
      return 0}
    function default_pp_mark_open_tag(param)
     {if(param[1] === String_tag)
       {var s=param[2];return symbol(cst$78,symbol(s,cst$77))}
      return cst$79}
    function default_pp_mark_close_tag(param)
     {if(param[1] === String_tag)
       {var s=param[2];return symbol(cst$81,symbol(s,cst$80))}
      return cst$82}
    function default_pp_print_open_tag(_j__){return 0}
    function default_pp_print_close_tag(_j9_){return 0}
    function pp_make_formatter(f,g,h,i,j)
     {var pp_queue=create$1(0),sys_tok=[0,unknown,_b7_,0];
      add(sys_tok,pp_queue);
      var scan_stack=create$0(0);
      initialize_scan_stack(scan_stack);
      push([0,1,sys_tok],scan_stack);
      var _j6_=create$0(0),_j7_=create$0(0),_j8_=create$0(0);
      return [0,
              scan_stack,
              create$0(0),
              _j8_,
              _j7_,
              _j6_,
              78,
              10,
              68,
              78,
              0,
              1,
              1,
              1,
              1,
              max_int,
              cst$83,
              f,
              g,
              h,
              i,
              j,
              0,
              0,
              default_pp_mark_open_tag,
              default_pp_mark_close_tag,
              default_pp_print_open_tag,
              default_pp_print_close_tag,
              pp_queue]}
    function formatter_of_out_functions(out_funs)
     {return pp_make_formatter
              (out_funs[1],out_funs[2],out_funs[3],out_funs[4],out_funs[5])}
    function make_formatter(output,flush)
     {function _jY_(_j5_){return 0}
      function _jZ_(_j4_){return 0}
      var
       ppf=
        pp_make_formatter(output,flush,function(_j3_){return 0},_jZ_,_jY_);
      ppf[19] = function(_j2_){return display_newline(ppf,_j2_)};
      ppf[20] = function(_j1_){return display_indent(ppf,_j1_)};
      ppf[21] = function(_j0_){return display_indent(ppf,_j0_)};
      return ppf}
    function formatter_of_out_channel(oc)
     {function _jU_(param){return caml_ml_flush(oc)}
      return make_formatter
              (function(_jV_,_jW_,_jX_)
                {return output_substring(oc,_jV_,_jW_,_jX_)},
               _jU_)}
    function formatter_of_buffer(b)
     {function _jP_(_jT_){return 0}
      return make_formatter
              (function(_jQ_,_jR_,_jS_)
                {return add_substring(b,_jQ_,_jR_,_jS_)},
               _jP_)}
    var pp_buffer_size=512;
    function pp_make_buffer(param){return create$2(pp_buffer_size)}
    var
     stdbuf=pp_make_buffer(0),
     std_formatter=formatter_of_out_channel(stdout),
     err_formatter=formatter_of_out_channel(stderr),
     str_formatter=formatter_of_buffer(stdbuf);
    function flush_buffer_formatter(buf,ppf)
     {pp_flush_queue(ppf,0);var s=contents(buf);reset(buf);return s}
    function flush_str_formatter(param)
     {return flush_buffer_formatter(stdbuf,str_formatter)}
    function make_symbolic_output_buffer(param){return [0,0]}
    function clear_symbolic_output_buffer(sob){sob[1] = 0;return 0}
    function get_symbolic_output_buffer(sob){return rev(sob[1])}
    function flush_symbolic_output_buffer(sob)
     {var items=get_symbolic_output_buffer(sob);
      clear_symbolic_output_buffer(sob);
      return items}
    function add_symbolic_output_item(sob,item)
     {sob[1] = [0,item,sob[1]];return 0}
    function formatter_of_symbolic_output_b(sob)
     {function f(s,i,n){return add_symbolic_output_item(sob,[0,sub$0(s,i,n)])}
      function g(_jO_){return add_symbolic_output_item(sob,0)}
      function h(_jN_){return add_symbolic_output_item(sob,1)}
      function i(n){return add_symbolic_output_item(sob,[1,n])}
      function j(n){return add_symbolic_output_item(sob,[2,n])}
      return pp_make_formatter(f,g,h,i,j)}
    function open_hbox(_jM_){return pp_open_hbox(std_formatter,_jM_)}
    function open_vbox(_jL_){return pp_open_vbox(std_formatter,_jL_)}
    function open_hvbox(_jK_){return pp_open_hvbox(std_formatter,_jK_)}
    function open_hovbox(_jJ_){return pp_open_hovbox(std_formatter,_jJ_)}
    function open_box(_jI_){return pp_open_box(std_formatter,_jI_)}
    function close_box(_jH_){return pp_close_box(std_formatter,_jH_)}
    function open_tag(_jG_){return pp_open_tag(std_formatter,_jG_)}
    function close_tag(_jF_){return pp_close_tag(std_formatter,_jF_)}
    function open_stag(_jE_){return pp_open_stag(std_formatter,_jE_)}
    function close_stag(_jD_){return pp_close_stag(std_formatter,_jD_)}
    function print_as(_jB_,_jC_){return pp_print_as(std_formatter,_jB_,_jC_)}
    function print_string$0(_jA_){return pp_print_string(std_formatter,_jA_)}
    function print_int$0(_jz_){return pp_print_int(std_formatter,_jz_)}
    function print_float$0(_jy_){return pp_print_float(std_formatter,_jy_)}
    function print_char$0(_jx_){return pp_print_char(std_formatter,_jx_)}
    function print_bool(_jw_){return pp_print_bool(std_formatter,_jw_)}
    function print_break(_ju_,_jv_)
     {return pp_print_break(std_formatter,_ju_,_jv_)}
    function print_cut(_jt_){return pp_print_cut(std_formatter,_jt_)}
    function print_space(_js_){return pp_print_space(std_formatter,_js_)}
    function force_newline(_jr_){return pp_force_newline(std_formatter,_jr_)}
    function print_flush(_jq_){return pp_print_flush(std_formatter,_jq_)}
    function print_newline$0(_jp_)
     {return pp_print_newline(std_formatter,_jp_)}
    function print_if_newline(_jo_)
     {return pp_print_if_newline(std_formatter,_jo_)}
    function open_tbox(_jn_){return pp_open_tbox(std_formatter,_jn_)}
    function close_tbox(_jm_){return pp_close_tbox(std_formatter,_jm_)}
    function print_tbreak(_jk_,_jl_)
     {return pp_print_tbreak(std_formatter,_jk_,_jl_)}
    function set_tab(_jj_){return pp_set_tab(std_formatter,_jj_)}
    function print_tab(_ji_){return pp_print_tab(std_formatter,_ji_)}
    function set_margin(_jh_){return pp_set_margin(std_formatter,_jh_)}
    function get_margin(_jg_){return std_formatter[6]}
    function set_max_indent(_jf_)
     {return pp_set_max_indent(std_formatter,_jf_)}
    function get_max_indent(_je_){return std_formatter[8]}
    function set_geometry(_jc_,_jd_)
     {return pp_set_geometry(std_formatter,_jc_,_jd_)}
    function safe_set_geometry(_ja_,_jb_)
     {return pp_safe_set_geometry(std_formatter,_ja_,_jb_)}
    function get_geometry(_i$_){return pp_get_geometry(std_formatter,_i$_)}
    function set_max_boxes(_i__){return pp_set_max_boxes(std_formatter,_i__)}
    function get_max_boxes(_i9_){return std_formatter[15]}
    function over_max_boxes(_i8_)
     {return pp_over_max_boxes(std_formatter,_i8_)}
    function set_ellipsis_text(_i7_)
     {return pp_set_ellipsis_text(std_formatter,_i7_)}
    function get_ellipsis_text(_i6_){return std_formatter[16]}
    function set_formatter_out_channel(_i5_)
     {return pp_set_formatter_out_channel(std_formatter,_i5_)}
    function set_formatter_out_functions(_i4_)
     {return pp_set_formatter_out_functions(std_formatter,_i4_)}
    function get_formatter_out_functions(_i3_)
     {return pp_get_formatter_out_functions(std_formatter,_i3_)}
    function set_formatter_output_functions(_i1_,_i2_)
     {return pp_set_formatter_output_functi(std_formatter,_i1_,_i2_)}
    function get_formatter_output_functions(_i0_)
     {return pp_get_formatter_output_functi(std_formatter,_i0_)}
    function set_formatter_stag_functions(_iZ_)
     {return pp_set_formatter_stag_function(std_formatter,_iZ_)}
    function get_formatter_stag_functions(_iY_)
     {return pp_get_formatter_stag_function(std_formatter,_iY_)}
    function set_print_tags(_iX_)
     {return pp_set_print_tags(std_formatter,_iX_)}
    function get_print_tags(_iW_){return std_formatter[22]}
    function set_mark_tags(_iV_){return pp_set_mark_tags(std_formatter,_iV_)}
    function get_mark_tags(_iU_){return std_formatter[23]}
    function set_tags(_iT_){return pp_set_tags(std_formatter,_iT_)}
    function pp_print_list(opt,pp_v,ppf,param)
     {var opt$0=opt,param$0=param;
      for(;;)
       {if(opt$0)var sth=opt$0[1],pp_sep=sth;else var pp_sep=pp_print_cut;
        if(param$0)
         {var _iR_=param$0[2],_iS_=param$0[1];
          if(_iR_)
           {caml_call2(pp_v,ppf,_iS_);
            caml_call2(pp_sep,ppf,0);
            var opt$1=[0,pp_sep],opt$0=opt$1,param$0=_iR_;
            continue}
          return caml_call2(pp_v,ppf,_iS_)}
        return 0}}
    function pp_print_text(ppf,s)
     {var len=caml_ml_string_length(s),left=[0,0],right=[0,0];
      function flush(param)
       {pp_print_string(ppf,sub$0(s,left[1],right[1] - left[1] | 0));
        right[1]++;
        left[1] = right[1];
        return 0}
      for(;;)
       {if(right[1] !== len)
         {var match=caml_string_get(s,right[1]);
          if(10 === match)
           {flush(0);pp_force_newline(ppf,0)}
          else
           if(32 === match){flush(0);pp_print_space(ppf,0)}else right[1]++;
          continue}
        var _iQ_=left[1] !== len?1:0;
        return _iQ_?flush(0):_iQ_}}
    function pp_print_option(opt,pp_v,ppf,param)
     {if(opt)
       var sth=opt[1],none=sth;
      else
       var none=function(param,_iP_){return 0};
      if(param){var v=param[1];return caml_call2(pp_v,ppf,v)}
      return caml_call2(none,ppf,0)}
    function pp_print_result(ok,error,ppf,param)
     {if(0 === param[0]){var v=param[1];return caml_call2(ok,ppf,v)}
      var e=param[1];
      return caml_call2(error,ppf,e)}
    function compute_tag(output,tag_acc)
     {var buf=create$2(16),ppf=formatter_of_buffer(buf);
      caml_call2(output,ppf,tag_acc);
      pp_print_flush(ppf,0);
      var len=buf[2];
      return 2 <= len?sub$3(buf,1,len - 2 | 0):contents(buf)}
    function output_formatting_lit(ppf,fmting_lit)
     {if(typeof fmting_lit === "number")
       switch(fmting_lit)
        {case 0:return pp_close_box(ppf,0);
         case 1:return pp_close_tag(ppf,0);
         case 2:return pp_print_flush(ppf,0);
         case 3:return pp_force_newline(ppf,0);
         case 4:return pp_print_newline(ppf,0);
         case 5:return pp_print_char(ppf,64);
         default:return pp_print_char(ppf,37)}
      else
       switch(fmting_lit[0])
        {case 0:
          var offset=fmting_lit[3],width=fmting_lit[2];
          return pp_print_break(ppf,width,offset);
         case 1:return 0;
         default:
          var c=fmting_lit[1];
          pp_print_char(ppf,64);
          return pp_print_char(ppf,c)}}
    function output_acc$0(ppf,acc)
     {var switch$0=0;
      if(typeof acc === "number")
       return 0;
      else
       switch(acc[0])
        {case 0:
          var f=acc[2],p=acc[1];
          output_acc$0(ppf,p);
          return output_formatting_lit(ppf,f);
         case 1:
          var _iF_=acc[2],_iG_=acc[1];
          if(0 === _iF_[0])
           {var acc$0=_iF_[1];
            output_acc$0(ppf,_iG_);
            return pp_open_stag
                    (ppf,[0,String_tag,compute_tag(output_acc$0,acc$0)])}
          var acc$1=_iF_[1];
          output_acc$0(ppf,_iG_);
          var
           match=open_box_of_string(compute_tag(output_acc$0,acc$1)),
           bty=match[2],
           indent=match[1];
          return pp_open_box_gen(ppf,indent,bty);
         case 2:
          var _iH_=acc[1],switch$1=0;
          if(typeof _iH_ !== "number" && 0 === _iH_[0])
           {var _iI_=_iH_[2],switch$2=0;
            if(typeof _iI_ !== "number" && 1 === _iI_[0])
             {var p$1=_iH_[1],size=_iI_[2],s$0=acc[2];
              switch$1 = 1;
              switch$2 = 1}}
          if(! switch$1){var p$0=_iH_,s=acc[2];switch$0 = 2}
          break;
         case 3:
          var _iJ_=acc[1],switch$3=0;
          if(typeof _iJ_ !== "number" && 0 === _iJ_[0])
           {var _iK_=_iJ_[2],switch$4=0;
            if(typeof _iK_ !== "number" && 1 === _iK_[0])
             {var p$3=_iJ_[1],size$0=_iK_[2],c$0=acc[2];
              switch$0 = 1;
              switch$3 = 1;
              switch$4 = 1}}
          if(! switch$3){var p$2=_iJ_,c=acc[2];switch$0 = 3}
          break;
         case 4:
          var _iL_=acc[1],switch$5=0;
          if(typeof _iL_ !== "number" && 0 === _iL_[0])
           {var _iM_=_iL_[2],switch$6=0;
            if(typeof _iM_ !== "number" && 1 === _iM_[0])
             {var p$1=_iL_[1],size=_iM_[2],s$0=acc[2];
              switch$5 = 1;
              switch$6 = 1}}
          if(! switch$5){var p$0=_iL_,s=acc[2];switch$0 = 2}
          break;
         case 5:
          var _iN_=acc[1],switch$7=0;
          if(typeof _iN_ === "number" || ! (0 === _iN_[0]))
           switch$7 = 1;
          else
           {var _iO_=_iN_[2],switch$8=0;
            if(typeof _iO_ !== "number" && 1 === _iO_[0])
             {var p$3=_iN_[1],size$0=_iO_[2],c$0=acc[2];
              switch$0 = 1;
              switch$8 = 1}
            if(! switch$8)switch$7 = 1}
          if(switch$7){var p$2=_iN_,c=acc[2];switch$0 = 3}
          break;
         case 6:
          var f$0=acc[2],p$4=acc[1];
          output_acc$0(ppf,p$4);
          return caml_call1(f$0,ppf);
         case 7:
          var p$5=acc[1];output_acc$0(ppf,p$5);return pp_print_flush(ppf,0);
         default:
          var msg=acc[2],p$6=acc[1];
          output_acc$0(ppf,p$6);
          return invalid_arg(msg)}
      switch(switch$0)
       {case 0:output_acc$0(ppf,p$1);return pp_print_as_size(ppf,size,s$0);
        case 1:
         output_acc$0(ppf,p$3);
         return pp_print_as_size(ppf,size$0,make$0(1,c$0));
        case 2:output_acc$0(ppf,p$0);return pp_print_string(ppf,s);
        default:output_acc$0(ppf,p$2);return pp_print_char(ppf,c)}}
    function strput_acc$0(ppf,acc)
     {var switch$0=0;
      if(typeof acc === "number")
       return 0;
      else
       switch(acc[0])
        {case 0:
          var f=acc[2],p=acc[1];
          strput_acc$0(ppf,p);
          return output_formatting_lit(ppf,f);
         case 1:
          var _it_=acc[2],_iu_=acc[1];
          if(0 === _it_[0])
           {var acc$0=_it_[1];
            strput_acc$0(ppf,_iu_);
            return pp_open_stag
                    (ppf,[0,String_tag,compute_tag(strput_acc$0,acc$0)])}
          var acc$1=_it_[1];
          strput_acc$0(ppf,_iu_);
          var
           match=open_box_of_string(compute_tag(strput_acc$0,acc$1)),
           bty=match[2],
           indent=match[1];
          return pp_open_box_gen(ppf,indent,bty);
         case 2:
          var _iv_=acc[1],switch$1=0;
          if(typeof _iv_ !== "number" && 0 === _iv_[0])
           {var _iw_=_iv_[2],switch$2=0;
            if(typeof _iw_ !== "number" && 1 === _iw_[0])
             {var p$1=_iv_[1],size=_iw_[2],s$0=acc[2];
              switch$1 = 1;
              switch$2 = 1}}
          if(! switch$1){var p$0=_iv_,s=acc[2];switch$0 = 2}
          break;
         case 3:
          var _ix_=acc[1],switch$3=0;
          if(typeof _ix_ !== "number" && 0 === _ix_[0])
           {var _iy_=_ix_[2],switch$4=0;
            if(typeof _iy_ !== "number" && 1 === _iy_[0])
             {var p$3=_ix_[1],size$0=_iy_[2],c$0=acc[2];
              switch$0 = 1;
              switch$3 = 1;
              switch$4 = 1}}
          if(! switch$3){var p$2=_ix_,c=acc[2];switch$0 = 3}
          break;
         case 4:
          var _iz_=acc[1],switch$5=0;
          if(typeof _iz_ !== "number" && 0 === _iz_[0])
           {var _iA_=_iz_[2],switch$6=0;
            if(typeof _iA_ !== "number" && 1 === _iA_[0])
             {var p$1=_iz_[1],size=_iA_[2],s$0=acc[2];
              switch$5 = 1;
              switch$6 = 1}}
          if(! switch$5){var p$0=_iz_,s=acc[2];switch$0 = 2}
          break;
         case 5:
          var _iB_=acc[1],switch$7=0;
          if(typeof _iB_ === "number" || ! (0 === _iB_[0]))
           switch$7 = 1;
          else
           {var _iC_=_iB_[2],switch$8=0;
            if(typeof _iC_ !== "number" && 1 === _iC_[0])
             {var p$3=_iB_[1],size$0=_iC_[2],c$0=acc[2];
              switch$0 = 1;
              switch$8 = 1}
            if(! switch$8)switch$7 = 1}
          if(switch$7){var p$2=_iB_,c=acc[2];switch$0 = 3}
          break;
         case 6:
          var _iD_=acc[1];
          if(typeof _iD_ !== "number" && 0 === _iD_[0])
           {var _iE_=_iD_[2];
            if(typeof _iE_ !== "number" && 1 === _iE_[0])
             {var f$1=acc[2],size$1=_iE_[2],p$4=_iD_[1];
              strput_acc$0(ppf,p$4);
              return pp_print_as_size(ppf,size$1,caml_call1(f$1,0))}}
          var f$0=acc[2];
          strput_acc$0(ppf,_iD_);
          return pp_print_string(ppf,caml_call1(f$0,0));
         case 7:
          var p$5=acc[1];strput_acc$0(ppf,p$5);return pp_print_flush(ppf,0);
         default:
          var msg=acc[2],p$6=acc[1];
          strput_acc$0(ppf,p$6);
          return invalid_arg(msg)}
      switch(switch$0)
       {case 0:strput_acc$0(ppf,p$1);return pp_print_as_size(ppf,size,s$0);
        case 1:
         strput_acc$0(ppf,p$3);
         return pp_print_as_size(ppf,size$0,make$0(1,c$0));
        case 2:strput_acc$0(ppf,p$0);return pp_print_string(ppf,s);
        default:strput_acc$0(ppf,p$2);return pp_print_char(ppf,c)}}
    function kfprintf$0(k,ppf,param)
     {var fmt=param[1],_is_=0;
      return make_printf
              (function(acc){output_acc$0(ppf,acc);return caml_call1(k,ppf)},
               _is_,
               fmt)}
    function ikfprintf$0(k,ppf,param)
     {var fmt=param[1];return make_iprintf(k,ppf,fmt)}
    function ifprintf$0(ppf,param)
     {var fmt=param[1],_iq_=0;
      return make_iprintf(function(_ir_){return 0},_iq_,fmt)}
    function fprintf$0(ppf)
     {function _in_(_ip_){return 0}
      return function(_io_){return kfprintf$0(_in_,ppf,_io_)}}
    function printf$0(fmt){return caml_call1(fprintf$0(std_formatter),fmt)}
    function eprintf$0(fmt){return caml_call1(fprintf$0(err_formatter),fmt)}
    function kdprintf(k,param)
     {var fmt=param[1],_im_=0;
      return make_printf
              (function(acc)
                {return caml_call1
                         (k,function(ppf){return output_acc$0(ppf,acc)})},
               _im_,
               fmt)}
    function dprintf(fmt){return kdprintf(function(i){return i},fmt)}
    function kprintf(k,param)
     {var fmt=param[1],b=pp_make_buffer(0),ppf=formatter_of_buffer(b);
      function k$0(acc)
       {strput_acc$0(ppf,acc);
        return caml_call1(k,flush_buffer_formatter(b,ppf))}
      return make_printf(k$0,0,fmt)}
    function sprintf$0(fmt){return kprintf(id$0,fmt)}
    function kasprintf(k,param)
     {var fmt=param[1],b=pp_make_buffer(0),ppf=formatter_of_buffer(b);
      function k$0(acc)
       {output_acc$0(ppf,acc);
        return caml_call1(k,flush_buffer_formatter(b,ppf))}
      return make_printf(k$0,0,fmt)}
    function asprintf(fmt){return kasprintf(id$0,fmt)}
    function flush_standard_formatters(param)
     {pp_print_flush(std_formatter,0);return pp_print_flush(err_formatter,0)}
    at_exit(flush_standard_formatters);
    function pp_set_all_formatter_output_fu(state,f,g,h,i)
     {pp_set_formatter_output_functi(state,f,g);
      state[19] = h;
      state[20] = i;
      return 0}
    function pp_get_all_formatter_output_fu(state,param)
     {return [0,state[17],state[18],state[19],state[20]]}
    function set_all_formatter_output_funct(_ii_,_ij_,_ik_,_il_)
     {return pp_set_all_formatter_output_fu(std_formatter,_ii_,_ij_,_ik_,_il_)}
    function get_all_formatter_output_funct(_ih_)
     {return pp_get_all_formatter_output_fu(std_formatter,_ih_)}
    function bprintf$0(b,param)
     {var fmt=param[1],ppf=formatter_of_buffer(b);
      function k(acc){output_acc$0(ppf,acc);return pp_flush_queue(ppf,0)}
      return make_printf(k,0,fmt)}
    function pp_set_formatter_tag_functions(state,param)
     {var pct=param[4],pot=param[3],mct=param[2],mot=param[1];
      function stringify(f,e,param)
       {if(param[1] === String_tag){var s=param[2];return caml_call1(f,s)}
        return e}
      state[24] = function(_ig_){return stringify(mot,cst$84,_ig_)};
      state[25] = function(_if_){return stringify(mct,cst$85,_if_)};
      var _ib_=0;
      state[26] = function(_ie_){return stringify(pot,_ib_,_ie_)};
      var _ic_=0;
      state[27] = function(_id_){return stringify(pct,_ic_,_id_)};
      return 0}
    function pp_get_formatter_tag_functions(fmt,param)
     {var funs=pp_get_formatter_stag_function(fmt,0);
      function mark_open_tag(s){return caml_call1(funs[1],[0,String_tag,s])}
      function mark_close_tag(s){return caml_call1(funs[2],[0,String_tag,s])}
      function print_open_tag(s){return caml_call1(funs[3],[0,String_tag,s])}
      function print_close_tag(s){return caml_call1(funs[4],[0,String_tag,s])}
      return [0,mark_open_tag,mark_close_tag,print_open_tag,print_close_tag]}
    function set_formatter_tag_functions(_ia_)
     {return pp_set_formatter_tag_functions(std_formatter,_ia_)}
    function get_formatter_tag_functions(_h$_)
     {return pp_get_formatter_tag_functions(std_formatter,_h$_)}
    var
     Stdlib_format=
      [0,
       pp_open_box,
       open_box,
       pp_close_box,
       close_box,
       pp_open_hbox,
       open_hbox,
       pp_open_vbox,
       open_vbox,
       pp_open_hvbox,
       open_hvbox,
       pp_open_hovbox,
       open_hovbox,
       pp_print_string,
       print_string$0,
       pp_print_as,
       print_as,
       pp_print_int,
       print_int$0,
       pp_print_float,
       print_float$0,
       pp_print_char,
       print_char$0,
       pp_print_bool,
       print_bool,
       pp_print_space,
       print_space,
       pp_print_cut,
       print_cut,
       pp_print_break,
       print_break,
       pp_print_custom_break,
       pp_force_newline,
       force_newline,
       pp_print_if_newline,
       print_if_newline,
       pp_print_flush,
       print_flush,
       pp_print_newline,
       print_newline$0,
       pp_set_margin,
       set_margin,
       pp_get_margin,
       get_margin,
       pp_set_max_indent,
       set_max_indent,
       pp_get_max_indent,
       get_max_indent,
       check_geometry,
       pp_set_geometry,
       set_geometry,
       pp_safe_set_geometry,
       safe_set_geometry,
       pp_get_geometry,
       get_geometry,
       pp_set_max_boxes,
       set_max_boxes,
       pp_get_max_boxes,
       get_max_boxes,
       pp_over_max_boxes,
       over_max_boxes,
       pp_open_tbox,
       open_tbox,
       pp_close_tbox,
       close_tbox,
       pp_set_tab,
       set_tab,
       pp_print_tab,
       print_tab,
       pp_print_tbreak,
       print_tbreak,
       pp_set_ellipsis_text,
       set_ellipsis_text,
       pp_get_ellipsis_text,
       get_ellipsis_text,
       String_tag,
       pp_open_stag,
       open_stag,
       pp_close_stag,
       close_stag,
       pp_set_tags,
       set_tags,
       pp_set_print_tags,
       set_print_tags,
       pp_set_mark_tags,
       set_mark_tags,
       pp_get_print_tags,
       get_print_tags,
       pp_get_mark_tags,
       get_mark_tags,
       pp_set_formatter_out_channel,
       set_formatter_out_channel,
       pp_set_formatter_output_functi,
       set_formatter_output_functions,
       pp_get_formatter_output_functi,
       get_formatter_output_functions,
       pp_set_formatter_out_functions,
       set_formatter_out_functions,
       pp_get_formatter_out_functions,
       get_formatter_out_functions,
       pp_set_formatter_stag_function,
       set_formatter_stag_functions,
       pp_get_formatter_stag_function,
       get_formatter_stag_functions,
       formatter_of_out_channel,
       std_formatter,
       err_formatter,
       formatter_of_buffer,
       stdbuf,
       str_formatter,
       flush_str_formatter,
       make_formatter,
       formatter_of_out_functions,
       make_symbolic_output_buffer,
       clear_symbolic_output_buffer,
       get_symbolic_output_buffer,
       flush_symbolic_output_buffer,
       add_symbolic_output_item,
       formatter_of_symbolic_output_b,
       pp_print_list,
       pp_print_text,
       pp_print_option,
       pp_print_result,
       fprintf$0,
       printf$0,
       eprintf$0,
       sprintf$0,
       asprintf,
       dprintf,
       ifprintf$0,
       kfprintf$0,
       kdprintf,
       ikfprintf$0,
       kprintf,
       kasprintf,
       bprintf$0,
       kprintf,
       set_all_formatter_output_funct,
       get_all_formatter_output_funct,
       pp_set_all_formatter_output_fu,
       pp_get_all_formatter_output_fu,
       pp_open_tag,
       open_tag,
       pp_close_tag,
       close_tag,
       pp_set_formatter_tag_functions,
       set_formatter_tag_functions,
       pp_get_formatter_tag_functions,
       get_formatter_tag_functions];
    caml_register_global(760,Stdlib_format,"Stdlib__format");
    var null_char=0;
    function next_char(ib)
     {try
       {var c=caml_call1(ib[7],0);
        ib[2] = c;
        ib[3] = 1;
        ib[4] = ib[4] + 1 | 0;
        if(10 === c)ib[5] = ib[5] + 1 | 0;
        return c}
      catch(_h__)
       {_h__ = caml_wrap_exception(_h__);
        if(_h__ === End_of_file)
         {ib[2] = null_char;ib[3] = 0;ib[1] = 1;return null_char}
        throw _h__}}
    function peek_char(ib){return ib[3]?ib[2]:next_char(ib)}
    function checked_peek_char(ib)
     {var c=peek_char(ib);if(ib[1])throw End_of_file;return c}
    function end_of_input(ib){peek_char(ib);return ib[1]}
    function beginning_of_input(ib){return 0 === ib[4]?1:0}
    function name_of_input(ib)
     {var _h9_=ib[9];
      if(typeof _h9_ === "number")
       return 0 === _h9_?cst_unnamed_function:cst_unnamed_character_string;
      else
       {if(0 === _h9_[0])return cst_unnamed_Stdlib_input_chann;
        var fname=_h9_[1];
        return fname}}
    function char_count(ib){return ib[3]?ib[4] - 1 | 0:ib[4]}
    function reset_token(ib){return reset(ib[8])}
    function invalidate_current_char(ib){ib[3] = 0;return 0}
    function token_string(ib)
     {var token_buffer=ib[8],tok=contents(token_buffer);
      clear$1(token_buffer);
      ib[6] = ib[6] + 1 | 0;
      return tok}
    function skip_char(width,ib){invalidate_current_char(ib);return width}
    function ignore_char(width,ib){return skip_char(width - 1 | 0,ib)}
    function store_char(width,ib,c)
     {add_char(ib[8],c);return ignore_char(width,ib)}
    var default_token_buffer_size=1024;
    function create$4(iname,next)
     {return [0,
              0,
              null_char,
              0,
              0,
              0,
              0,
              next,
              create$2(default_token_buffer_size),
              iname]}
    function from_string$1(s)
     {var i=[0,0],len=caml_ml_string_length(s);
      function next(param)
       {if(len <= i[1])throw End_of_file;
        var c=caml_string_get(s,i[1]);
        i[1]++;
        return c}
      return create$4(1,next)}
    var _b8_=0;
    function from_function$0(_h8_){return create$4(_b8_,_h8_)}
    var len=1024;
    function scan_close_at_end(ic)
     {caml_ml_close_channel(ic);throw End_of_file}
    function scan_raise_at_end(ic){throw End_of_file}
    function from_ic(scan_close_ic,iname,ic)
     {var buf=caml_create_bytes(1024),i=[0,0],lim=[0,0],eof=[0,0];
      function next(param)
       {if(i[1] < lim[1]){var c=caml_bytes_get(buf,i[1]);i[1]++;return c}
        if(eof[1])throw End_of_file;
        lim[1] = input(ic,buf,0,len);
        return 0 === lim[1]
                ?(eof[1] = 1,caml_call1(scan_close_ic,ic))
                :(i[1] = 1,caml_bytes_get(buf,0))}
      return create$4(iname,next)}
    var stdib=from_ic(scan_raise_at_end,[1,cst$86,stdin],stdin);
    function open_in_file(open_in,fname)
     {if(caml_string_notequal(fname,cst$87))
       {var ic=caml_call1(open_in,fname);
        return from_ic(scan_close_at_end,[1,fname,ic],ic)}
      return stdib}
    function from_file(_h7_){return open_in_file(open_in,_h7_)}
    function from_file_bin(_h6_){return open_in_file(open_in_bin,_h6_)}
    function from_channel$0(ic){return from_ic(scan_raise_at_end,[0,ic],ic)}
    function close_in$0(ib)
     {var _h5_=ib[9];
      if(typeof _h5_ === "number")
       return 0;
      else
       {if(0 === _h5_[0]){var ic=_h5_[1];return caml_ml_close_channel(ic)}
        var ic$0=_h5_[2];
        return caml_ml_close_channel(ic$0)}}
    var memo=[0,0];
    function memo_from_ic(scan_close_ic,ic)
     {try
       {var _h3_=assq(ic,memo[1]);return _h3_}
      catch(_h4_)
       {_h4_ = caml_wrap_exception(_h4_);
        if(_h4_ === Not_found)
         {var ib=from_ic(scan_close_ic,[0,ic],ic);
          memo[1] = [0,[0,ic,ib],memo[1]];
          return ib}
        throw _h4_}}
    function memo_from_channel(_h2_)
     {return memo_from_ic(scan_raise_at_end,_h2_)}
    var Scan_failure=[248,cst_Stdlib_Scanf_Scan_failure,caml_fresh_oo_id(0)];
    function bad_input(s){throw [0,Scan_failure,s]}
    function bad_input_escape(c)
     {return bad_input(caml_call1(sprintf(_b9_),c))}
    function bad_token_length(message)
     {return bad_input(caml_call1(sprintf(_b__),message))}
    function bad_float(param)
     {return bad_input(cst_no_dot_or_exponent_part_fo)}
    function bad_hex_float(param)
     {return bad_input(cst_not_a_valid_float_in_hexad)}
    function character_mismatch(c,ci)
     {return bad_input(caml_call2(sprintf(_ca_),c,ci))}
    function check_this_char(ib,c)
     {var ci=checked_peek_char(ib);
      return ci === c?invalidate_current_char(ib):character_mismatch(c,ci)}
    function check_char(ib,c$0)
     {if(10 === c$0)
       {var ci=checked_peek_char(ib);
        return 10 === ci
                ?invalidate_current_char(ib)
                :13 === ci
                  ?(invalidate_current_char(ib),check_this_char(ib,10))
                  :character_mismatch(10,ci)}
      if(32 === c$0)
       for(;;)
        {var c=peek_char(ib),_h0_=1 - ib[1];
         if(_h0_)
          {var _h1_=c - 9 | 0,switch$0=0;
           if(4 < _h1_ >>> 0)
            {if(23 === _h1_)switch$0 = 1}
           else
            if(1 < (_h1_ - 2 | 0) >>> 0)switch$0 = 1;
           if(switch$0){invalidate_current_char(ib);continue}
           return 0}
         return _h0_}
      return check_this_char(ib,c$0)}
    function token_char(ib){return caml_string_get(token_string(ib),0)}
    function token_bool(ib)
     {var s=token_string(ib);
      return caml_string_notequal(s,cst_false$3)
              ?caml_string_notequal(s,cst_true$3)
                ?bad_input(caml_call1(sprintf(_cb_),s))
                :1
              :0}
    function integer_conversion_of_char(param)
     {var switcher=param - 88 | 0;
      if(! (32 < switcher >>> 0))
       switch(switcher)
        {case 10:return 0;
         case 12:return 1;
         case 17:return 2;
         case 23:return 3;
         case 29:return 4;
         case 0:
         case 32:return 5
         }
      throw [0,Assert_failure,_cc_]}
    function token_int_literal(conv,ib)
     {switch(conv)
       {case 0:var tok=symbol(cst_0b,token_string(ib));break;
        case 3:var tok=symbol(cst_0o,token_string(ib));break;
        case 4:var tok=symbol(cst_0u,token_string(ib));break;
        case 5:var tok=symbol(cst_0x,token_string(ib));break;
        default:var tok=token_string(ib)}
      var l=caml_ml_string_length(tok);
      if(0 !== l && 43 === caml_string_get(tok,0))
       return sub$0(tok,1,l - 1 | 0);
      return tok}
    function token_float(ib){return caml_float_of_string(token_string(ib))}
    function scan_decimal_digit_star(width,ib)
     {var width$0=width;
      for(;;)
       {if(0 === width$0)return width$0;
        var c=peek_char(ib);
        if(ib[1])return width$0;
        if(58 <= c)
         {if(95 === c)
           {var width$1=ignore_char(width$0,ib),width$0=width$1;continue}}
        else
         if(48 <= c)
          {var width$2=store_char(width$0,ib,c),width$0=width$2;continue}
        return width$0}}
    function scan_unsigned_decimal_int(width,ib)
     {if(0 === width)return bad_token_length(cst_decimal_digits);
      var c=checked_peek_char(ib),switcher=c - 48 | 0;
      if(9 < switcher >>> 0)return bad_input(caml_call1(sprintf(_cd_),c));
      var width$0=store_char(width,ib,c);
      return scan_decimal_digit_star(width$0,ib)}
    function scan_digit_plus(basis,digitp,width$2,ib)
     {if(0 === width$2)return bad_token_length(cst_digits);
      var c$0=checked_peek_char(ib);
      if(caml_call1(digitp,c$0))
       {var width$3=store_char(width$2,ib,c$0),width=width$3;
        for(;;)
         {if(0 === width)return width;
          var c=peek_char(ib);
          if(ib[1])return width;
          if(caml_call1(digitp,c))
           {var width$0=store_char(width,ib,c),width=width$0;continue}
          if(95 === c)
           {var width$1=ignore_char(width,ib),width=width$1;continue}
          return width}}
      return bad_input(caml_call2(sprintf(_ce_),c$0,basis))}
    function is_binary_digit(param)
     {var switcher=param - 48 | 0;return 1 < switcher >>> 0?0:1}
    function scan_binary_int(_hY_,_hZ_)
     {return scan_digit_plus(cst_binary,is_binary_digit,_hY_,_hZ_)}
    function is_octal_digit(param)
     {var switcher=param - 48 | 0;return 7 < switcher >>> 0?0:1}
    function scan_octal_int(_hW_,_hX_)
     {return scan_digit_plus(cst_octal,is_octal_digit,_hW_,_hX_)}
    function is_hexa_digit(param)
     {var _hV_=param - 48 | 0,switch$0=0;
      if(22 < _hV_ >>> 0)
       {if(! (5 < (_hV_ - 49 | 0) >>> 0))switch$0 = 1}
      else
       if(6 < (_hV_ - 10 | 0) >>> 0)switch$0 = 1;
      return switch$0?1:0}
    function scan_hexadecimal_int(_hT_,_hU_)
     {return scan_digit_plus(cst_hexadecimal,is_hexa_digit,_hT_,_hU_)}
    function scan_sign(width,ib)
     {var c=checked_peek_char(ib),switcher=c - 43 | 0;
      if(! (2 < switcher >>> 0))
       switch(switcher)
        {case 0:return store_char(width,ib,c);
         case 1:break;
         default:return store_char(width,ib,c)}
      return width}
    function scan_optionally_signed_decimal(width,ib)
     {var width$0=scan_sign(width,ib);
      return scan_unsigned_decimal_int(width$0,ib)}
    function scan_int_conversion(conv,width$1,ib)
     {switch(conv)
       {case 0:return scan_binary_int(width$1,ib);
        case 1:return scan_optionally_signed_decimal(width$1,ib);
        case 2:
         var width$0=scan_sign(width$1,ib),c=checked_peek_char(ib);
         if(48 === c)
          {var width=store_char(width$0,ib,c);
           if(0 === width)return width;
           var c$0=peek_char(ib);
           if(ib[1])return width;
           var switch$0=0;
           if(99 <= c$0)
            {if(111 === c$0)
              return scan_octal_int(store_char(width,ib,c$0),ib);
             if(120 === c$0)switch$0 = 1}
           else
            if(88 === c$0)
             switch$0 = 1;
            else
             if(98 <= c$0)return scan_binary_int(store_char(width,ib,c$0),ib);
           return switch$0
                   ?scan_hexadecimal_int(store_char(width,ib,c$0),ib)
                   :scan_decimal_digit_star(width,ib)}
         return scan_unsigned_decimal_int(width$0,ib);
        case 3:return scan_octal_int(width$1,ib);
        case 4:return scan_unsigned_decimal_int(width$1,ib);
        default:return scan_hexadecimal_int(width$1,ib)}}
    function scan_fractional_part(width,ib)
     {if(0 === width)return width;
      var c=peek_char(ib);
      if(ib[1])return width;
      var switcher=c - 48 | 0;
      return 9 < switcher >>> 0
              ?width
              :scan_decimal_digit_star(store_char(width,ib,c),ib)}
    function scan_exponent_part(width,ib)
     {if(0 === width)return width;
      var c=peek_char(ib);
      if(ib[1])return width;
      if(69 !== c && 101 !== c)return width;
      return scan_optionally_signed_decimal(store_char(width,ib,c),ib)}
    function scan_float(width$1,precision,ib)
     {var
       width=scan_sign(width$1,ib),
       width$0=scan_decimal_digit_star(width,ib);
      if(0 === width$0)return [0,width$0,precision];
      var c=peek_char(ib);
      if(ib[1])return [0,width$0,precision];
      if(46 === c)
       {var
         width$2=store_char(width$0,ib,c),
         precision$0=min(width$2,precision),
         width$3=
          width$2
          -
          (precision$0 - scan_fractional_part(precision$0,ib) | 0)
          |
          0;
        return [0,scan_exponent_part(width$3,ib),precision$0]}
      return [0,scan_exponent_part(width$0,ib),precision]}
    function check_case_insensitive_string(width,ib,error,str)
     {function lowercase(c)
       {var switcher=c - 65 | 0;
        return 25 < switcher >>> 0?c:char_of_int((c - 65 | 0) + 97 | 0)}
      var
       len=caml_ml_string_length(str),
       width$0=[0,width],
       _hQ_=len - 1 | 0,
       _hP_=0;
      if(! (_hQ_ < 0))
       {var i=_hP_;
        for(;;)
         {var c=peek_char(ib),_hR_=lowercase(caml_string_get(str,i));
          if(lowercase(c) !== _hR_)caml_call1(error,0);
          if(0 === width$0[1])caml_call1(error,0);
          width$0[1] = store_char(width$0[1],ib,c);
          var _hS_=i + 1 | 0;
          if(_hQ_ !== i){var i=_hS_;continue}
          break}}
      return width$0[1]}
    function scan_hex_float(width,precision,ib)
     {var _hC_=0 === width?1:0,_hD_=_hC_ || end_of_input(ib);
      if(_hD_)bad_hex_float(0);
      var
       width$0=scan_sign(width,ib),
       _hE_=0 === width$0?1:0,
       _hF_=_hE_ || end_of_input(ib);
      if(_hF_)bad_hex_float(0);
      var c=peek_char(ib),switch$0=0;
      if(78 <= c)
       {var switcher=c - 79 | 0;
        if(30 < switcher >>> 0)
         {if(! (32 <= switcher))
           {var
             width$1=store_char(width$0,ib,c),
             _hG_=0 === width$1?1:0,
             _hH_=_hG_ || end_of_input(ib);
            if(_hH_)bad_hex_float(0);
            return check_case_insensitive_string
                    (width$1,ib,bad_hex_float,cst_an)}}
        else
         if(26 === switcher)switch$0 = 1}
      else
       {if(48 === c)
         {var
           width$3=store_char(width$0,ib,c),
           _hK_=0 === width$3?1:0,
           _hL_=_hK_ || end_of_input(ib);
          if(_hL_)bad_hex_float(0);
          var
           width$4=
            check_case_insensitive_string(width$3,ib,bad_hex_float,cst_x$2);
          if(0 !== width$4 && ! end_of_input(ib))
           {var match=peek_char(ib),_hM_=match - 46 | 0,switch$1=0;
            if(34 < _hM_ >>> 0)
             {if(66 === _hM_)switch$1 = 1}
            else
             if(32 < (_hM_ - 1 | 0) >>> 0)switch$1 = 1;
            var width$5=switch$1?width$4:scan_hexadecimal_int(width$4,ib);
            if(0 !== width$5 && ! end_of_input(ib))
             {var c$0=peek_char(ib);
              if(46 === c$0)
               {var width$6=store_char(width$5,ib,c$0),switch$2=0;
                if(0 !== width$6 && ! end_of_input(ib))
                 {var match$0=peek_char(ib),switch$3=0;
                  if(80 !== match$0 && 112 !== match$0)
                   {var
                     precision$0=min(width$6,precision),
                     width$10=
                      width$6
                      -
                      (precision$0 - scan_hexadecimal_int(precision$0,ib) | 0)
                      |
                      0;
                    switch$3 = 1}
                  if(! switch$3)var width$10=width$6;
                  var width$7=width$10;
                  switch$2 = 1}
                if(! switch$2)var width$7=width$6;
                var width$8=width$7}
              else
               var width$8=width$5;
              if(0 !== width$8 && ! end_of_input(ib))
               {var c$1=peek_char(ib);
                if(80 !== c$1 && 112 !== c$1)return width$8;
                var
                 width$9=store_char(width$8,ib,c$1),
                 _hN_=0 === width$9?1:0,
                 _hO_=_hN_ || end_of_input(ib);
                if(_hO_)bad_hex_float(0);
                return scan_optionally_signed_decimal(width$9,ib)}
              return width$8}
            return width$5}
          return width$4}
        if(73 === c)switch$0 = 1}
      if(switch$0)
       {var
         width$2=store_char(width$0,ib,c),
         _hI_=0 === width$2?1:0,
         _hJ_=_hI_ || end_of_input(ib);
        if(_hJ_)bad_hex_float(0);
        return check_case_insensitive_string
                (width$2,ib,bad_hex_float,cst_nfinity)}
      return bad_hex_float(0)}
    function scan_caml_float_rest(width,precision,ib)
     {var _hy_=0 === width?1:0,_hz_=_hy_ || end_of_input(ib);
      if(_hz_)bad_float(0);
      var
       width$0=scan_decimal_digit_star(width,ib),
       _hA_=0 === width$0?1:0,
       _hB_=_hA_ || end_of_input(ib);
      if(_hB_)bad_float(0);
      var c=peek_char(ib),switcher=c - 69 | 0;
      if(32 < switcher >>> 0)
       {if(-23 === switcher)
         {var
           width$1=store_char(width$0,ib,c),
           precision$0=min(width$1,precision),
           width_precision=scan_fractional_part(precision$0,ib),
           frac_width=precision$0 - width_precision | 0,
           width$2=width$1 - frac_width | 0;
          return scan_exponent_part(width$2,ib)}}
      else
       {var switcher$0=switcher - 1 | 0;
        if(30 < switcher$0 >>> 0)return scan_exponent_part(width$0,ib)}
      return bad_float(0)}
    function scan_caml_float(width,precision,ib)
     {var _hk_=0 === width?1:0,_hl_=_hk_ || end_of_input(ib);
      if(_hl_)bad_float(0);
      var
       width$0=scan_sign(width,ib),
       _hm_=0 === width$0?1:0,
       _hn_=_hm_ || end_of_input(ib);
      if(_hn_)bad_float(0);
      var c=peek_char(ib);
      if(49 <= c)
       {if(! (58 <= c))
         {var
           width$1=store_char(width$0,ib,c),
           _ho_=0 === width$1?1:0,
           _hp_=_ho_ || end_of_input(ib);
          if(_hp_)bad_float(0);
          return scan_caml_float_rest(width$1,precision,ib)}}
      else
       if(48 <= c)
        {var
          width$2=store_char(width$0,ib,c),
          _hq_=0 === width$2?1:0,
          _hr_=_hq_ || end_of_input(ib);
         if(_hr_)bad_float(0);
         var c$0=peek_char(ib);
         if(88 !== c$0 && 120 !== c$0)
          return scan_caml_float_rest(width$2,precision,ib);
         var
          width$3=store_char(width$2,ib,c$0),
          _hs_=0 === width$3?1:0,
          _ht_=_hs_ || end_of_input(ib);
         if(_ht_)bad_float(0);
         var
          width$4=scan_hexadecimal_int(width$3,ib),
          _hu_=0 === width$4?1:0,
          _hv_=_hu_ || end_of_input(ib);
         if(_hv_)bad_float(0);
         var c$1=peek_char(ib),switcher=c$1 - 80 | 0,switch$0=0;
         if(32 < switcher >>> 0)
          if(-34 === switcher)
           {var width$5=store_char(width$4,ib,c$1),switch$1=0;
            if(0 !== width$5 && ! end_of_input(ib))
             {var match=peek_char(ib),switch$2=0;
              if(80 !== match && 112 !== match)
               {var
                 precision$0=min(width$5,precision),
                 width$10=
                  width$5
                  -
                  (precision$0 - scan_hexadecimal_int(precision$0,ib) | 0)
                  |
                  0;
                switch$2 = 1}
              if(! switch$2)var width$10=width$5;
              var width$6=width$10;
              switch$1 = 1}
            if(! switch$1)var width$6=width$5;
            var width$7=width$6}
          else
           switch$0 = 1;
         else
          {var switcher$0=switcher - 1 | 0;
           if(30 < switcher$0 >>> 0)var width$7=width$4;else switch$0 = 1}
         var width$8=switch$0?bad_float(0):width$7;
         if(0 !== width$8 && ! end_of_input(ib))
          {var c$2=peek_char(ib);
           if(80 !== c$2 && 112 !== c$2)return width$8;
           var
            width$9=store_char(width$8,ib,c$2),
            _hw_=0 === width$9?1:0,
            _hx_=_hw_ || end_of_input(ib);
           if(_hx_)bad_hex_float(0);
           return scan_optionally_signed_decimal(width$9,ib)}
         return width$8}
      return bad_float(0)}
    function scan_string(stp,width,ib)
     {var width$0=width;
      for(;;)
       {if(0 === width$0)return width$0;
        var c=peek_char(ib);
        if(ib[1])return width$0;
        if(stp)
         {var c$0=stp[1];
          if(c === c$0)return skip_char(width$0,ib);
          var width$1=store_char(width$0,ib,c),width$0=width$1;
          continue}
        var _hj_=c - 9 | 0,switch$0=0;
        if(4 < _hj_ >>> 0)
         {if(23 === _hj_)switch$0 = 1}
        else
         if(1 < (_hj_ - 2 | 0) >>> 0)switch$0 = 1;
        if(switch$0)return width$0;
        var width$2=store_char(width$0,ib,c),width$0=width$2;
        continue}}
    function scan_char(width,ib)
     {return store_char(width,ib,checked_peek_char(ib))}
    function hexadecimal_value_of_char(d)
     {return 97 <= d?d - 87 | 0:65 <= d?d - 55 | 0:d - 48 | 0}
    function check_next_char(message,width,ib)
     {if(0 === width)return bad_token_length(message);
      var c=peek_char(ib);
      return ib[1]?bad_input(caml_call1(sprintf(_b$_),message)):c}
    function check_next_char_for_char(_hh_,_hi_)
     {return check_next_char(cst_a_Char,_hh_,_hi_)}
    function check_next_char_for_string(_hf_,_hg_)
     {return check_next_char(cst_a_String,_hf_,_hg_)}
    function scan_backslash_char(width,ib)
     {var c0=check_next_char_for_char(width,ib),switch$0=0;
      if(40 <= c0)
       {if(58 <= c0)
         {var switcher$0=c0 - 92 | 0;
          if(! (28 < switcher$0 >>> 0))
           switch(switcher$0)
            {case 28:
              var
               get_digit=
                function(param)
                 {var c=next_char(ib),_he_=c - 48 | 0,switch$0=0;
                  if(22 < _he_ >>> 0)
                   {if(! (5 < (_he_ - 49 | 0) >>> 0))switch$0 = 1}
                  else
                   if(6 < (_he_ - 10 | 0) >>> 0)switch$0 = 1;
                  return switch$0?c:bad_input_escape(c)},
               c1=get_digit(0),
               c2=get_digit(0),
               _ha_=hexadecimal_value_of_char(c2),
               c$0=(16 * hexadecimal_value_of_char(c1) | 0) + _ha_ | 0,
               switch$1=0;
              if(0 <= c$0 && ! (255 < c$0))
               {var _hc_=char_of_int(c$0);switch$1 = 1}
              if(! switch$1)
               var _hc_=bad_input(caml_call2(sprintf(_cg_),c1,c2));
              return store_char(width - 2 | 0,ib,_hc_);
             case 0:
             case 6:
             case 18:
             case 22:
             case 24:switch$0 = 1;break
             }}
        else
         if(48 <= c0)
          {var
            get_digit$0=
             function(param)
              {var c=next_char(ib),switcher=c - 48 | 0;
               return 9 < switcher >>> 0?bad_input_escape(c):c},
            c1$0=get_digit$0(0),
            c2$0=get_digit$0(0),
            c=
             ((100 * (c0 - 48 | 0) | 0) + (10 * (c1$0 - 48 | 0) | 0) | 0)
             +
             (c2$0 - 48 | 0)
             |
             0,
            switch$2=0;
           if(0 <= c && ! (255 < c)){var _hd_=char_of_int(c);switch$2 = 1}
           if(! switch$2)
            var _hd_=bad_input(caml_call3(sprintf(_cf_),c0,c1$0,c2$0));
           return store_char(width - 2 | 0,ib,_hd_)}}
      else
       if(34 === c0 || 39 <= c0)switch$0 = 1;
      if(switch$0)
       {var switch$3=0;
        if(110 <= c0)
         if(117 <= c0)
          switch$3 = 1;
         else
          {var switcher=c0 - 110 | 0;
           switch(switcher)
            {case 0:var _hb_=10;break;
             case 4:var _hb_=13;break;
             case 6:var _hb_=9;break;
             default:switch$3 = 1}}
        else
         if(98 === c0)var _hb_=8;else switch$3 = 1;
        if(switch$3)var _hb_=c0;
        return store_char(width,ib,_hb_)}
      return bad_input_escape(c0)}
    function scan_caml_char(width,ib)
     {function find_stop(width)
       {var c=check_next_char_for_char(width,ib);
        return 39 === c?ignore_char(width,ib):character_mismatch(39,c)}
      var c=checked_peek_char(ib);
      if(39 === c)
       {var
         width$0=ignore_char(width,ib),
         c$0=check_next_char_for_char(width$0,ib);
        return 92 === c$0
                ?find_stop(scan_backslash_char(ignore_char(width$0,ib),ib))
                :find_stop(store_char(width$0,ib,c$0))}
      return character_mismatch(39,c)}
    function scan_caml_string(width,ib)
     {function find_stop$0(counter,width)
       {var width$0=width;
        for(;;)
         {var c=check_next_char_for_string(width$0,ib);
          if(34 === c)return ignore_char(width$0,ib);
          if(92 === c)
           {var
             width$1=ignore_char(width$0,ib),
             match=check_next_char_for_string(width$1,ib);
            if(10 === match)
             {var _g__=ignore_char(width$1,ib);
              if(counter < 50)
               {var counter$0=counter + 1 | 0;
                return skip_spaces(counter$0,_g__)}
              return caml_trampoline_return(skip_spaces,[0,_g__])}
            if(13 === match)
             {var
               width$3=ignore_char(width$1,ib),
               match$0=check_next_char_for_string(width$3,ib);
              if(10 === match$0)
               {var _g$_=ignore_char(width$3,ib);
                if(counter < 50)
                 {var counter$1=counter + 1 | 0;
                  return skip_spaces(counter$1,_g$_)}
                return caml_trampoline_return(skip_spaces,[0,_g$_])}
              var width$5=store_char(width$3,ib,13),width$0=width$5;
              continue}
            var width$4=scan_backslash_char(width$1,ib),width$0=width$4;
            continue}
          var width$2=store_char(width$0,ib,c),width$0=width$2;
          continue}}
      function skip_spaces(counter,width)
       {var width$0=width;
        for(;;)
         {var match=check_next_char_for_string(width$0,ib);
          if(32 === match)
           {var width$1=ignore_char(width$0,ib),width$0=width$1;continue}
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return find_stop$0(counter$0,width$0)}
          return caml_trampoline_return(find_stop$0,[0,width$0])}}
      function find_stop(width){return caml_trampoline(find_stop$0(0,width))}
      var c=checked_peek_char(ib);
      return 34 === c
              ?find_stop(ignore_char(width,ib))
              :character_mismatch(34,c)}
    function scan_chars_in_char_set(char_set,scan_indic,width,ib)
     {function scan_chars(i,stp)
       {var i$0=i;
        for(;;)
         {var c=peek_char(ib),_g6_=0 < i$0?1:0;
          if(_g6_)
           {var _g7_=1 - ib[1];
            if(_g7_)
             var _g8_=is_in_char_set(char_set,c),_g9_=_g8_?c !== stp?1:0:_g8_;
            else
             var _g9_=_g7_}
          else
           var _g9_=_g6_;
          if(_g9_)
           {store_char(max_int,ib,c);var i$1=i$0 - 1 | 0,i$0=i$1;continue}
          return _g9_}}
      if(scan_indic)
       {var c=scan_indic[1];
        scan_chars(width,c);
        var _g5_=1 - ib[1];
        if(_g5_)
         {var ci=peek_char(ib);
          return c === ci?invalidate_current_char(ib):character_mismatch(c,ci)}
        return _g5_}
      return scan_chars(width,-1)}
    function scanf_bad_input(ib,x)
     {if(x[1] === Scan_failure)
       var s=x[2];
      else
       {if(x[1] !== Failure)throw x;var s=x[2]}
      var i=char_count(ib);
      return bad_input(caml_call2(sprintf(_ci_),i,s))}
    function get_counter(ib,counter)
     {switch(counter)
       {case 0:return ib[5];case 1:return char_count(ib);default:return ib[6]}}
    function width_of_pad_opt(pad_opt)
     {if(pad_opt){var width=pad_opt[1];return width}return max_int}
    function stopper_of_formatting_lit(fmting)
     {if(6 === fmting)return _cj_;
      var
       str=string_of_formatting_lit(fmting),
       stp=caml_string_get(str,1),
       sub_str=sub$0(str,2,caml_ml_string_length(str) - 2 | 0);
      return [0,stp,sub_str]}
    function take_format_readers$0(counter,k,fmt)
     {var fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return caml_call1(k,0);
       else
        switch(fmt$0[0])
         {case 0:var fmt$1=fmt$0[1],fmt$0=fmt$1;continue;
          case 1:var fmt$2=fmt$0[1],fmt$0=fmt$2;continue;
          case 2:var fmt$3=fmt$0[2],fmt$0=fmt$3;continue;
          case 3:var fmt$4=fmt$0[2],fmt$0=fmt$4;continue;
          case 4:var fmt$5=fmt$0[4],fmt$0=fmt$5;continue;
          case 5:var fmt$6=fmt$0[4],fmt$0=fmt$6;continue;
          case 6:var fmt$7=fmt$0[4],fmt$0=fmt$7;continue;
          case 7:var fmt$8=fmt$0[4],fmt$0=fmt$8;continue;
          case 8:var fmt$9=fmt$0[4],fmt$0=fmt$9;continue;
          case 9:var fmt$10=fmt$0[2],fmt$0=fmt$10;continue;
          case 10:var fmt$11=fmt$0[1],fmt$0=fmt$11;continue;
          case 11:var fmt$12=fmt$0[2],fmt$0=fmt$12;continue;
          case 12:var fmt$13=fmt$0[2],fmt$0=fmt$13;continue;
          case 13:var fmt$14=fmt$0[3],fmt$0=fmt$14;continue;
          case 14:
           var rest=fmt$0[3],fmtty=fmt$0[2],_g3_=erase_rel(symm(fmtty));
           if(counter < 50)
            {var counter$0=counter + 1 | 0;
             return take_fmtty_format_readers$0(counter$0,k,_g3_,rest)}
           return caml_trampoline_return
                   (take_fmtty_format_readers$0,[0,k,_g3_,rest]);
          case 15:var fmt$15=fmt$0[1],fmt$0=fmt$15;continue;
          case 16:var fmt$16=fmt$0[1],fmt$0=fmt$16;continue;
          case 17:var fmt$17=fmt$0[2],fmt$0=fmt$17;continue;
          case 18:
           var _g4_=fmt$0[1];
           if(0 === _g4_[0])
            {var
              rest$0=fmt$0[2],
              match=_g4_[1],
              fmt$18=match[1],
              fmt$19=concat_fmt(fmt$18,rest$0),
              fmt$0=fmt$19;
             continue}
           var
            rest$1=fmt$0[2],
            match$0=_g4_[1],
            fmt$20=match$0[1],
            fmt$21=concat_fmt(fmt$20,rest$1),
            fmt$0=fmt$21;
           continue;
          case 19:
           var fmt_rest=fmt$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_format_readers(new_k,fmt_rest)};
          case 20:var fmt$22=fmt$0[3],fmt$0=fmt$22;continue;
          case 21:var fmt$23=fmt$0[2],fmt$0=fmt$23;continue;
          case 22:var fmt$24=fmt$0[1],fmt$0=fmt$24;continue;
          case 23:
           var rest$2=fmt$0[2],ign=fmt$0[1];
           if(typeof ign === "number")
            switch(ign)
             {case 0:var fmt$0=rest$2;continue;
              case 1:var fmt$0=rest$2;continue;
              case 2:
               return function(reader)
                {function new_k(readers_rest)
                  {return caml_call1(k,[0,reader,readers_rest])}
                 return take_format_readers(new_k,rest$2)};
              default:var fmt$0=rest$2;continue}
           else
            switch(ign[0])
             {case 0:var fmt$0=rest$2;continue;
              case 1:var fmt$0=rest$2;continue;
              case 2:var fmt$0=rest$2;continue;
              case 3:var fmt$0=rest$2;continue;
              case 4:var fmt$0=rest$2;continue;
              case 5:var fmt$0=rest$2;continue;
              case 6:var fmt$0=rest$2;continue;
              case 7:var fmt$0=rest$2;continue;
              case 8:var fmt$0=rest$2;continue;
              case 9:
               var fmtty$0=ign[2];
               if(counter < 50)
                {var counter$1=counter + 1 | 0;
                 return take_fmtty_format_readers$0
                         (counter$1,k,fmtty$0,rest$2)}
               return caml_trampoline_return
                       (take_fmtty_format_readers$0,[0,k,fmtty$0,rest$2]);
              case 10:var fmt$0=rest$2;continue;
              default:var fmt$0=rest$2;continue}
          default:var fmt$25=fmt$0[3],fmt$0=fmt$25;continue}}
    function take_fmtty_format_readers$0(counter,k,fmtty,fmt)
     {var fmtty$0=fmtty;
      for(;;)
       if(typeof fmtty$0 === "number")
        {if(counter < 50)
          {var counter$0=counter + 1 | 0;
           return take_format_readers$0(counter$0,k,fmt)}
         return caml_trampoline_return(take_format_readers$0,[0,k,fmt])}
       else
        switch(fmtty$0[0])
         {case 0:var fmtty$1=fmtty$0[1],fmtty$0=fmtty$1;continue;
          case 1:var fmtty$2=fmtty$0[1],fmtty$0=fmtty$2;continue;
          case 2:var fmtty$3=fmtty$0[1],fmtty$0=fmtty$3;continue;
          case 3:var fmtty$4=fmtty$0[1],fmtty$0=fmtty$4;continue;
          case 4:var fmtty$5=fmtty$0[1],fmtty$0=fmtty$5;continue;
          case 5:var fmtty$6=fmtty$0[1],fmtty$0=fmtty$6;continue;
          case 6:var fmtty$7=fmtty$0[1],fmtty$0=fmtty$7;continue;
          case 7:var fmtty$8=fmtty$0[1],fmtty$0=fmtty$8;continue;
          case 8:var fmtty$9=fmtty$0[2],fmtty$0=fmtty$9;continue;
          case 9:
           var
            rest=fmtty$0[3],
            ty2=fmtty$0[2],
            ty1=fmtty$0[1],
            ty=trans(symm(ty1),ty2),
            fmtty$10=concat_fmtty(ty,rest),
            fmtty$0=fmtty$10;
           continue;
          case 10:var fmtty$11=fmtty$0[1],fmtty$0=fmtty$11;continue;
          case 11:var fmtty$12=fmtty$0[1],fmtty$0=fmtty$12;continue;
          case 12:var fmtty$13=fmtty$0[1],fmtty$0=fmtty$13;continue;
          case 13:
           var fmt_rest=fmtty$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_fmtty_format_readers(new_k,fmt_rest,fmt)};
          default:
           var fmt_rest$0=fmtty$0[1];
           return function(reader)
            {function new_k(readers_rest)
              {return caml_call1(k,[0,reader,readers_rest])}
             return take_fmtty_format_readers(new_k,fmt_rest$0,fmt)}}}
    function take_format_readers(k,fmt)
     {return caml_trampoline(take_format_readers$0(0,k,fmt))}
    function take_fmtty_format_readers(k,fmtty,fmt)
     {return caml_trampoline(take_fmtty_format_readers$0(0,k,fmtty,fmt))}
    function make_scanf(ib,fmt,readers)
     {var fmt$0=fmt;
      for(;;)
       if(typeof fmt$0 === "number")
        return 0;
       else
        switch(fmt$0[0])
         {case 0:
           var rest=fmt$0[1];
           scan_char(0,ib);
           var c=token_char(ib);
           return [0,c,make_scanf(ib,rest,readers)];
          case 1:
           var rest$0=fmt$0[1];
           scan_caml_char(0,ib);
           var c$0=token_char(ib);
           return [0,c$0,make_scanf(ib,rest$0,readers)];
          case 2:
           var _gO_=fmt$0[2],_gP_=fmt$0[1];
           if(typeof _gO_ !== "number")
            switch(_gO_[0])
             {case 17:
               var
                rest$1=_gO_[2],
                fmting_lit=_gO_[1],
                match=stopper_of_formatting_lit(fmting_lit),
                str=match[2],
                stp=match[1],
                scan$0=
                 function(width,param,ib)
                  {return scan_string([0,stp],width,ib)},
                str_rest=[11,str,rest$1];
               return pad_prec_scanf
                       (ib,str_rest,readers,_gP_,0,scan$0,token_string);
              case 18:
               var _gQ_=_gO_[1];
               if(0 === _gQ_[0])
                {var
                  rest$2=_gO_[2],
                  match$0=_gQ_[1],
                  fmt$1=match$0[1],
                  scan$1=
                   function(width,param,ib){return scan_string(_ck_,width,ib)};
                 return pad_prec_scanf
                         (ib,
                          concat_fmt(fmt$1,rest$2),
                          readers,
                          _gP_,
                          0,
                          scan$1,
                          token_string)}
               var
                rest$3=_gO_[2],
                match$1=_gQ_[1],
                fmt$2=match$1[1],
                scan$2=
                 function(width,param,ib){return scan_string(_cl_,width,ib)};
               return pad_prec_scanf
                       (ib,
                        concat_fmt(fmt$2,rest$3),
                        readers,
                        _gP_,
                        0,
                        scan$2,
                        token_string)
              }
           var scan=function(width,param,ib){return scan_string(0,width,ib)};
           return pad_prec_scanf(ib,_gO_,readers,_gP_,0,scan,token_string);
          case 3:
           var
            rest$4=fmt$0[2],
            pad=fmt$0[1],
            scan$3=function(width,param,ib){return scan_caml_string(width,ib)};
           return pad_prec_scanf(ib,rest$4,readers,pad,0,scan$3,token_string);
          case 4:
           var
            rest$5=fmt$0[4],
            prec=fmt$0[3],
            pad$0=fmt$0[2],
            iconv=fmt$0[1],
            conv=integer_conversion_of_char(char_of_iconv(iconv)),
            scan$4=
             function(width,param,ib)
              {return scan_int_conversion(conv,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$5,
                    readers,
                    pad$0,
                    prec,
                    scan$4,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv,ib))});
          case 5:
           var
            rest$6=fmt$0[4],
            prec$0=fmt$0[3],
            pad$1=fmt$0[2],
            iconv$0=fmt$0[1],
            conv$0=integer_conversion_of_char(char_of_iconv(iconv$0)),
            scan$5=
             function(width,param,ib)
              {return scan_int_conversion(conv$0,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$6,
                    readers,
                    pad$1,
                    prec$0,
                    scan$5,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv$0,ib))});
          case 6:
           var
            rest$7=fmt$0[4],
            prec$1=fmt$0[3],
            pad$2=fmt$0[2],
            iconv$1=fmt$0[1],
            conv$1=integer_conversion_of_char(char_of_iconv(iconv$1)),
            scan$6=
             function(width,param,ib)
              {return scan_int_conversion(conv$1,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$7,
                    readers,
                    pad$2,
                    prec$1,
                    scan$6,
                    function(ib)
                     {return caml_int_of_string(token_int_literal(conv$1,ib))});
          case 7:
           var
            rest$8=fmt$0[4],
            prec$2=fmt$0[3],
            pad$3=fmt$0[2],
            iconv$2=fmt$0[1],
            conv$2=integer_conversion_of_char(char_of_iconv(iconv$2)),
            scan$7=
             function(width,param,ib)
              {return scan_int_conversion(conv$2,width,ib)};
           return pad_prec_scanf
                   (ib,
                    rest$8,
                    readers,
                    pad$3,
                    prec$2,
                    scan$7,
                    function(ib)
                     {return caml_int64_of_string(token_int_literal(conv$2,ib))});
          case 8:
           var _gR_=fmt$0[1];
           if(15 === _gR_)
            {var rest$9=fmt$0[4],prec$3=fmt$0[3],pad$4=fmt$0[2];
             return pad_prec_scanf
                     (ib,rest$9,readers,pad$4,prec$3,scan_caml_float,token_float)}
           if(16 <= _gR_)
            {var rest$10=fmt$0[4],prec$4=fmt$0[3],pad$5=fmt$0[2];
             return pad_prec_scanf
                     (ib,rest$10,readers,pad$5,prec$4,scan_hex_float,token_float)}
           var rest$11=fmt$0[4],prec$5=fmt$0[3],pad$6=fmt$0[2];
           return pad_prec_scanf
                   (ib,rest$11,readers,pad$6,prec$5,scan_float,token_float);
          case 9:
           var
            rest$12=fmt$0[2],
            pad$7=fmt$0[1],
            scan$8=
             function(param,_g2_,ib)
              {var
                c=checked_peek_char(ib),
                m=
                 102 === c
                  ?5
                  :116 === c?4:bad_input(caml_call1(sprintf(_ch_),c));
               return scan_string(0,m,ib)};
           return pad_prec_scanf(ib,rest$12,readers,pad$7,0,scan$8,token_bool);
          case 10:
           var rest$13=fmt$0[1];
           if(end_of_input(ib)){var fmt$0=rest$13;continue}
           return bad_input(cst_end_of_input_not_found);
          case 11:
           var rest$14=fmt$0[2],str$0=fmt$0[1];
           iter$4(function(_g1_){return check_char(ib,_g1_)},str$0);
           var fmt$0=rest$14;
           continue;
          case 12:
           var rest$15=fmt$0[2],chr=fmt$0[1];
           check_char(ib,chr);
           var fmt$0=rest$15;
           continue;
          case 13:
           var rest$16=fmt$0[3],fmtty=fmt$0[2],pad_opt=fmt$0[1];
           scan_caml_string(width_of_pad_opt(pad_opt),ib);
           var s=token_string(ib);
           try
            {var _gS_=format_of_string_fmtty(s,fmtty),fmt$3=_gS_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             if(exn[1] !== Failure)throw exn;
             var msg=exn[2],fmt$3=bad_input(msg)}
           return [0,fmt$3,make_scanf(ib,rest$16,readers)];
          case 14:
           var rest$17=fmt$0[3],fmtty$0=fmt$0[2],pad_opt$0=fmt$0[1];
           scan_caml_string(width_of_pad_opt(pad_opt$0),ib);
           var s$0=token_string(ib);
           try
            {var
              match$2=fmt_ebb_of_string(0,s$0),
              fmt$6=match$2[1],
              match$3=fmt_ebb_of_string(0,s$0),
              fmt$7=match$3[1],
              fmt$8=type_format(fmt$7,erase_rel(symm(fmtty$0))),
              _gU_=type_format(fmt$6,erase_rel(fmtty$0)),
              fmt$5=_gU_,
              fmt$4=fmt$8}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             if(exn[1] !== Failure)throw exn;
             var
              msg$0=exn[2],
              _gT_=bad_input(msg$0),
              fmt$5=_gT_[1],
              fmt$4=_gT_[2]}
           return [0,
                   [0,fmt$5,s$0],
                   make_scanf(ib,concat_fmt(fmt$4,rest$17),readers)];
          case 15:return invalid_arg(cst_scanf_bad_conversion_a);
          case 16:return invalid_arg(cst_scanf_bad_conversion_t);
          case 17:
           var
            rest$18=fmt$0[2],
            formatting_lit=fmt$0[1],
            _gV_=string_of_formatting_lit(formatting_lit);
           iter$4(function(_g0_){return check_char(ib,_g0_)},_gV_);
           var fmt$0=rest$18;
           continue;
          case 18:
           var _gW_=fmt$0[1];
           if(0 === _gW_[0])
            {var rest$19=fmt$0[2],match$4=_gW_[1],fmt$9=match$4[1];
             check_char(ib,64);
             check_char(ib,123);
             var fmt$10=concat_fmt(fmt$9,rest$19),fmt$0=fmt$10;
             continue}
           var rest$20=fmt$0[2],match$5=_gW_[1],fmt$11=match$5[1];
           check_char(ib,64);
           check_char(ib,91);
           var fmt$12=concat_fmt(fmt$11,rest$20),fmt$0=fmt$12;
           continue;
          case 19:
           var fmt_rest=fmt$0[1];
           if(readers)
            {var
              readers_rest=readers[2],
              reader=readers[1],
              x=caml_call1(reader,ib);
             return [0,x,make_scanf(ib,fmt_rest,readers_rest)]}
           return invalid_arg(cst_scanf_missing_reader);
          case 20:
           var _gX_=fmt$0[3],_gY_=fmt$0[2],_gZ_=fmt$0[1];
           if(typeof _gX_ !== "number" && 17 === _gX_[0])
            {var
              rest$21=_gX_[2],
              fmting_lit$0=_gX_[1],
              match$6=stopper_of_formatting_lit(fmting_lit$0),
              str$1=match$6[2],
              stp$0=match$6[1],
              width$0=width_of_pad_opt(_gZ_);
             scan_chars_in_char_set(_gY_,[0,stp$0],width$0,ib);
             var s$2=token_string(ib),str_rest$0=[11,str$1,rest$21];
             return [0,s$2,make_scanf(ib,str_rest$0,readers)]}
           var width=width_of_pad_opt(_gZ_);
           scan_chars_in_char_set(_gY_,0,width,ib);
           var s$1=token_string(ib);
           return [0,s$1,make_scanf(ib,_gX_,readers)];
          case 21:
           var
            rest$22=fmt$0[2],
            counter=fmt$0[1],
            count=get_counter(ib,counter);
           return [0,count,make_scanf(ib,rest$22,readers)];
          case 22:
           var rest$23=fmt$0[1],c$1=checked_peek_char(ib);
           return [0,c$1,make_scanf(ib,rest$23,readers)];
          case 23:
           var
            rest$24=fmt$0[2],
            ign=fmt$0[1],
            match$7=param_format_of_ignored_format(ign,rest$24),
            fmt$13=match$7[1],
            match$8=make_scanf(ib,fmt$13,readers);
           if(match$8){var arg_rest=match$8[2];return arg_rest}
           throw [0,Assert_failure,_cm_];
          default:return invalid_arg(cst_scanf_bad_conversion_custo)}}
    function pad_prec_scanf(ib,fmt,readers,pad,prec,scan,token)
     {if(typeof pad === "number")
       {if(typeof prec === "number")
         {if(0 === prec)
           {caml_call3(scan,max_int,max_int,ib);
            var x=caml_call1(token,ib);
            return [0,x,make_scanf(ib,fmt,readers)]}
          return invalid_arg(cst_scanf_bad_conversion)}
        var p=prec[1];
        caml_call3(scan,max_int,p,ib);
        var x$0=caml_call1(token,ib);
        return [0,x$0,make_scanf(ib,fmt,readers)]}
      else
       {if(0 === pad[0])
         {if(0 === pad[1])return invalid_arg(cst_scanf_bad_conversion$0);
          var _gN_=pad[2];
          if(typeof prec === "number")
           {if(0 === prec)
             {caml_call3(scan,_gN_,max_int,ib);
              var x$1=caml_call1(token,ib);
              return [0,x$1,make_scanf(ib,fmt,readers)]}
            return invalid_arg(cst_scanf_bad_conversion$1)}
          var p$0=prec[1];
          caml_call3(scan,_gN_,p$0,ib);
          var x$2=caml_call1(token,ib);
          return [0,x$2,make_scanf(ib,fmt,readers)]}
        return invalid_arg(cst_scanf_bad_conversion$2)}}
    function kscanf(ib,ef,param)
     {var str=param[2],fmt=param[1];
      function apply(f,args)
       {var f$0=f,args$0=args;
        for(;;)
         {if(args$0)
           {var
             r=args$0[2],
             x=args$0[1],
             f$1=caml_call1(f$0,x),
             f$0=f$1,
             args$0=r;
            continue}
          return f$0}}
      function k(readers,f)
       {reset_token(ib);
        try
         {var _gM_=[0,make_scanf(ib,fmt,readers)],_gL_=_gM_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var switch$0=0;
          if
           (exc[1]
            !==
            Scan_failure
            &&
            exc[1]
            !==
            Failure
            &&
            exc
            !==
            End_of_file)
           {if(exc[1] !== Invalid_argument)throw exc;
            var
             msg=exc[2],
             _gK_=
              invalid_arg
               (symbol
                 (msg,symbol(cst_in_format,symbol(escaped$1(str),cst$88))));
            switch$0 = 1}
          if(! switch$0)var _gK_=[1,exc];
          var _gL_=_gK_}
        if(0 === _gL_[0]){var args=_gL_[1];return apply(f,args)}
        var exc=_gL_[1];
        return caml_call2(ef,ib,exc)}
      return take_format_readers(k,fmt)}
    function bscanf(ib,fmt){return kscanf(ib,scanf_bad_input,fmt)}
    function ksscanf(s,ef,fmt){return kscanf(from_string$1(s),ef,fmt)}
    function sscanf(s,fmt)
     {return kscanf(from_string$1(s),scanf_bad_input,fmt)}
    function scanf(fmt){return kscanf(stdib,scanf_bad_input,fmt)}
    function bscanf_format(ib,format,f)
     {scan_caml_string(max_int,ib);
      var str=token_string(ib);
      try
       {var _gJ_=format_of_string_format(str,format),fmt=_gJ_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] !== Failure)throw exn;
        var msg=exn[2],fmt=bad_input(msg)}
      return caml_call1(f,fmt)}
    function sscanf_format(s,format,f)
     {return bscanf_format(from_string$1(s),format,f)}
    function format_from_string(s,fmt)
     {function _gI_(x){return x}
      return sscanf_format
              (symbol(cst$90,symbol(escaped$1(s),cst$89)),fmt,_gI_)}
    function unescaped(s)
     {function _gH_(x){return x}
      return caml_call1(sscanf(symbol(cst$92,symbol(s,cst$91)),_cn_),_gH_)}
    function kfscanf(ic,ef,fmt){return kscanf(memo_from_channel(ic),ef,fmt)}
    function fscanf(ic,fmt)
     {return kscanf(memo_from_channel(ic),scanf_bad_input,fmt)}
    var
     Stdlib_scanf=
      [0,
       [0,
        stdib,
        from_file,
        from_file_bin,
        close_in$0,
        from_file,
        from_file_bin,
        from_string$1,
        from_function$0,
        from_channel$0,
        end_of_input,
        beginning_of_input,
        name_of_input,
        stdib],
       Scan_failure,
       bscanf,
       sscanf,
       scanf,
       kscanf,
       ksscanf,
       bscanf_format,
       sscanf_format,
       format_from_string,
       unescaped,
       fscanf,
       kfscanf];
    caml_register_global(761,Stdlib_scanf,"Stdlib__scanf");
    var register=caml_register_named_value;
    function register_exception(name,exn)
     {var slot=caml_obj_tag(exn) === 248?exn:exn[1];
      return caml_register_named_value(name,slot)}
    var Stdlib_callback=[0,register,register_exception];
    caml_register_global(762,Stdlib_callback,"Stdlib__callback");
    function copy$7(o){var o$0=o.slice();return caml_set_oo_id(o$0)}
    var params$0=[0,1,1,1,3,16],initial_object_size=2,dummy_item=0;
    function public_method_label(s)
     {var accu=[0,0],_gE_=caml_ml_string_length(s) - 1 | 0,_gD_=0;
      if(! (_gE_ < 0))
       {var i=_gD_;
        for(;;)
         {var _gF_=caml_string_get(s,i);
          accu[1] = (223 * accu[1] | 0) + _gF_ | 0;
          var _gG_=i + 1 | 0;
          if(_gE_ !== i){var i=_gG_;continue}
          break}}
      accu[1] = accu[1] & 2147483647;
      var tag=1073741823 < accu[1]?accu[1] + 2147483648 | 0:accu[1];
      return tag}
    var
     compare$11=caml_string_compare,
     Vars=caml_call1(Stdlib_map[1],[0,compare$11]),
     compare$12=caml_string_compare,
     Meths=caml_call1(Stdlib_map[1],[0,compare$12]),
     compare$13=caml_int_compare,
     Labs=caml_call1(Stdlib_map[1],[0,compare$13]),
     dummy_table=[0,0,[0,dummy_item],Meths[1],Labs[1],0,0,Vars[1],0],
     table_count=[0,0],
     dummy_met=caml_obj_block(0,0);
    function fit_size(n){return 2 < n?fit_size((n + 1 | 0) / 2 | 0) * 2 | 0:n}
    function new_table(pub_labels)
     {table_count[1]++;
      var
       len=pub_labels.length - 1,
       methods=caml_make_vect((len * 2 | 0) + 2 | 0,dummy_met);
      caml_check_bound(methods,0)[1] = len;
      var _gx_=((fit_size(len) * 32 | 0) / 8 | 0) - 1 | 0;
      caml_check_bound(methods,1)[2] = _gx_;
      var _gz_=len - 1 | 0,_gy_=0;
      if(! (_gz_ < 0))
       {var i=_gy_;
        for(;;)
         {var
           _gB_=(i * 2 | 0) + 3 | 0,
           _gA_=caml_check_bound(pub_labels,i)[1 + i];
          caml_check_bound(methods,_gB_)[1 + _gB_] = _gA_;
          var _gC_=i + 1 | 0;
          if(_gz_ !== i){var i=_gC_;continue}
          break}}
      return [0,initial_object_size,methods,Meths[1],Labs[1],0,0,Vars[1],0]}
    function resize$1(array,new_size)
     {var old_size=array[2].length - 1,_gv_=old_size < new_size?1:0;
      if(_gv_)
       {var new_buck=caml_make_vect(new_size,dummy_met);
        blit$1(array[2],0,new_buck,0,old_size);
        array[2] = new_buck;
        var _gw_=0}
      else
       var _gw_=_gv_;
      return _gw_}
    var method_count=[0,0],inst_var_count=[0,0];
    function new_method(table)
     {var index=table[2].length - 1;
      resize$1(table,index + 1 | 0);
      return index}
    function get_method_label(table,name)
     {try
       {var _gt_=caml_call2(Meths[27],name,table[3]);return _gt_}
      catch(_gu_)
       {_gu_ = caml_wrap_exception(_gu_);
        if(_gu_ === Not_found)
         {var label=new_method(table);
          table[3] = caml_call3(Meths[4],name,label,table[3]);
          table[4] = caml_call3(Labs[4],label,1,table[4]);
          return label}
        throw _gu_}}
    function get_method_labels(table,names)
     {return map$5(function(_gs_){return get_method_label(table,_gs_)},names)}
    function set_method(table,label,element)
     {method_count[1]++;
      return caml_call2(Labs[27],label,table[4])
              ?(resize$1(table,label + 1 | 0),
                caml_check_bound(table[2],label)[1 + label]
                =
                element,
                0)
              :(table[6] = [0,[0,label,element],table[6]],0)}
    function get_method(table,label)
     {try
       {var _gq_=assoc(label,table[6]);return _gq_}
      catch(_gr_)
       {_gr_ = caml_wrap_exception(_gr_);
        if(_gr_ === Not_found)
         return caml_check_bound(table[2],label)[1 + label];
        throw _gr_}}
    function to_list$3(arr){return arr === 0?0:to_list$1(arr)}
    function narrow(table,vars,virt_meths,concr_meths)
     {var
       vars$0=to_list$3(vars),
       virt_meths$0=to_list$3(virt_meths),
       concr_meths$0=to_list$3(concr_meths),
       virt_meth_labs=
        map$2
         (function(_gp_){return get_method_label(table,_gp_)},virt_meths$0),
       concr_meth_labs=
        map$2
         (function(_go_){return get_method_label(table,_go_)},concr_meths$0);
      table[5]
      =
      [0,
       [0,table[3],table[4],table[6],table[7],virt_meth_labs,vars$0],
       table[5]];
      var _gf_=Vars[1],_gg_=table[7];
      function _gh_(lab,info,tvars)
       {return mem(lab,vars$0)?caml_call3(Vars[4],lab,info,tvars):tvars}
      table[7] = caml_call3(Vars[13],_gh_,_gg_,_gf_);
      var by_name=[0,Meths[1]],by_label=[0,Labs[1]];
      iter2
       (function(met,label)
         {by_name[1] = caml_call3(Meths[4],met,label,by_name[1]);
          var _gk_=by_label[1];
          try
           {var _gm_=caml_call2(Labs[27],label,table[4]),_gl_=_gm_}
          catch(_gn_)
           {_gn_ = caml_wrap_exception(_gn_);
            if(_gn_ !== Not_found)throw _gn_;
            var _gl_=1}
          by_label[1] = caml_call3(Labs[4],label,_gl_,_gk_);
          return 0},
        concr_meths$0,
        concr_meth_labs);
      iter2
       (function(met,label)
         {by_name[1] = caml_call3(Meths[4],met,label,by_name[1]);
          by_label[1] = caml_call3(Labs[4],label,0,by_label[1]);
          return 0},
        virt_meths$0,
        virt_meth_labs);
      table[3] = by_name[1];
      table[4] = by_label[1];
      var _gi_=0,_gj_=table[6];
      table[6]
      =
      fold_right
       (function(met,hm)
         {var lab=met[1];return mem(lab,virt_meth_labs)?hm:[0,met,hm]},
        _gj_,
        _gi_);
      return 0}
    function widen(table)
     {var
       match=hd(table[5]),
       vars=match[6],
       virt_meths=match[5],
       saved_vars=match[4],
       saved_hidden_meths=match[3],
       by_label=match[2],
       by_name=match[1];
      table[5] = tl(table[5]);
      table[7]
      =
      fold_left$0
       (function(s,v)
         {var _ge_=caml_call2(Vars[27],v,table[7]);
          return caml_call3(Vars[4],v,_ge_,s)},
        saved_vars,
        vars);
      table[3] = by_name;
      table[4] = by_label;
      var _gd_=table[6];
      table[6]
      =
      fold_right
       (function(met,hm)
         {var lab=met[1];return mem(lab,virt_meths)?hm:[0,met,hm]},
        _gd_,
        saved_hidden_meths);
      return 0}
    function new_slot(table)
     {var index=table[1];table[1] = index + 1 | 0;return index}
    function new_variable(table,name)
     {try
       {var _gb_=caml_call2(Vars[27],name,table[7]);return _gb_}
      catch(_gc_)
       {_gc_ = caml_wrap_exception(_gc_);
        if(_gc_ === Not_found)
         {var index=new_slot(table);
          if(caml_string_notequal(name,cst$93))
           table[7] = caml_call3(Vars[4],name,index,table[7]);
          return index}
        throw _gc_}}
    function to_array(arr){return caml_equal(arr,0)?[0]:arr}
    function new_methods_variables(table,meths,vals)
     {var
       meths$0=to_array(meths),
       nmeths=meths$0.length - 1,
       nvals=vals.length - 1,
       res=caml_make_vect(nmeths + nvals | 0,0),
       _f5_=nmeths - 1 | 0,
       _f4_=0;
      if(! (_f5_ < 0))
       {var i$0=_f4_;
        for(;;)
         {var
           _f$_=
            get_method_label(table,caml_check_bound(meths$0,i$0)[1 + i$0]);
          caml_check_bound(res,i$0)[1 + i$0] = _f$_;
          var _ga_=i$0 + 1 | 0;
          if(_f5_ !== i$0){var i$0=_ga_;continue}
          break}}
      var _f7_=nvals - 1 | 0,_f6_=0;
      if(! (_f7_ < 0))
       {var i=_f6_;
        for(;;)
         {var
           _f9_=i + nmeths | 0,
           _f8_=new_variable(table,caml_check_bound(vals,i)[1 + i]);
          caml_check_bound(res,_f9_)[1 + _f9_] = _f8_;
          var _f__=i + 1 | 0;
          if(_f7_ !== i){var i=_f__;continue}
          break}}
      return res}
    function get_variable(table,name)
     {try
       {var _f2_=caml_call2(Vars[27],name,table[7]);return _f2_}
      catch(_f3_)
       {_f3_ = caml_wrap_exception(_f3_);
        if(_f3_ === Not_found)throw [0,Assert_failure,_co_];
        throw _f3_}}
    function get_variables(table,names)
     {return map$5(function(_f1_){return get_variable(table,_f1_)},names)}
    function add_initializer(table,f){table[8] = [0,f,table[8]];return 0}
    function create_table(public_methods)
     {if(public_methods === 0)return new_table([0]);
      var
       tags=map$5(public_method_label,public_methods),
       table=new_table(tags);
      iteri$2
       (function(i,met)
         {var lab=(i * 2 | 0) + 2 | 0;
          table[3] = caml_call3(Meths[4],met,lab,table[3]);
          table[4] = caml_call3(Labs[4],lab,1,table[4]);
          return 0},
        public_methods);
      return table}
    function init_class(table)
     {inst_var_count[1] = (inst_var_count[1] + table[1] | 0) - 1 | 0;
      table[8] = rev(table[8]);
      return resize$1
              (table,
               3 + ((caml_check_bound(table[2],1)[2] * 16 | 0) / 32 | 0) | 0)}
    function inherits(cla,vals,virt_meths,concr_meths,param,top)
     {var env=param[4],super$0=param[2];
      narrow(cla,vals,virt_meths,concr_meths);
      var init=top?caml_call2(super$0,cla,env):caml_call1(super$0,cla);
      widen(cla);
      var
       _fW_=0,
       _fX_=to_array(concr_meths),
       _fY_=
        [0,
         map$5
          (function(nm){return get_method(cla,get_method_label(cla,nm))},_fX_),
         _fW_],
       _fZ_=to_array(vals);
      return caml_array_concat
              ([0,
                [0,init],
                [0,
                 map$5(function(_f0_){return get_variable(cla,_f0_)},_fZ_),
                 _fY_]])}
    function make_class(pub_meths,class_init)
     {var table=create_table(pub_meths),env_init=caml_call1(class_init,table);
      init_class(table);
      return [0,caml_call1(env_init,0),class_init,env_init,0]}
    function make_class_store(pub_meths,class_init,init_table)
     {var table=create_table(pub_meths),env_init=caml_call1(class_init,table);
      init_class(table);
      init_table[2] = class_init;
      init_table[1] = env_init;
      return 0}
    function dummy_class(loc)
     {function undef(param){throw [0,Undefined_recursive_module,loc]}
      return [0,undef,undef,undef,0]}
    function create_object(table)
     {var obj=caml_obj_block(248,table[1]);
      obj[1] = table[2];
      return caml_set_oo_id(obj)}
    function create_object_opt(obj_0,table)
     {if(obj_0)return obj_0;
      var obj=caml_obj_block(248,table[1]);
      obj[1] = table[2];
      return caml_set_oo_id(obj)}
    function iter_f(obj,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var l=param$0[2],f=param$0[1];
          caml_call1(f,obj);
          var param$0=l;
          continue}
        return 0}}
    function run_initializers(obj,table)
     {var inits=table[8],_fV_=0 !== inits?1:0;
      return _fV_?iter_f(obj,inits):_fV_}
    function run_initializers_opt(obj_0,obj,table)
     {if(obj_0)return obj;
      var inits=table[8];
      if(0 !== inits)iter_f(obj,inits);
      return obj}
    function create_object_and_run_initiali(obj_0,table)
     {if(obj_0)return obj_0;
      var obj=create_object(table);
      run_initializers(obj,table);
      return obj}
    function get_data$0(param)
     {if(param)return param[2];throw [0,Assert_failure,_cs_]}
    function build_path(n,keys,tables)
     {var res=[0,0,0,0],r=[0,res],_fR_=0;
      if(! (n < 0))
       {var i=_fR_;
        for(;;)
         {var _fT_=r[1];
          r[1] = [0,caml_check_bound(keys,i)[1 + i],_fT_,0];
          var _fU_=i + 1 | 0;
          if(n !== i){var i=_fU_;continue}
          break}}
      var _fS_=r[1];
      if(tables){tables[2] = _fS_;return res}
      throw [0,Assert_failure,_cp_]}
    function lookup_tables(root,keys)
     {var tables$2=get_data$0(root);
      if(tables$2)
       {var i$1=keys.length - 1 - 1 | 0,i=i$1,tables=tables$2;
        a:
        for(;;)
         {if(0 <= i)
           {var key=caml_check_bound(keys,i)[1 + i],tables$0=tables;
            for(;;)
             {if(tables$0)
               {if(tables$0[1] === key)
                 {var tables$1=get_data$0(tables$0);
                  if(tables$1)
                   {var i$0=i - 1 | 0,i=i$0,tables=tables$1;continue a}
                  throw [0,Assert_failure,_cu_]}
                if(tables$0)
                 {var _fQ_=tables$0[3];
                  if(_fQ_){var tables$0=_fQ_;continue}
                  var v=[0,key,0,0];
                  if(tables$0)
                   {tables$0[3] = v;return build_path(i - 1 | 0,keys,v)}
                  throw [0,Assert_failure,_cq_]}
                throw [0,Assert_failure,_ct_]}
              throw [0,Assert_failure,_cr_]}}
          return tables}}
      return build_path(keys.length - 1 - 1 | 0,keys,root)}
    function new_cache(table)
     {var n=new_method(table),switch$0=0;
      if
       (0
        !==
        (n % 2 | 0)
        &&
        !
        ((2 + ((caml_check_bound(table[2],1)[2] * 16 | 0) / 32 | 0) | 0) < n))
       {var n$0=new_method(table);switch$0 = 1}
      if(! switch$0)var n$0=n;
      caml_check_bound(table[2],n$0)[1 + n$0] = 0;
      return n$0}
    function set_methods(table,methods)
     {var len=methods.length - 1,i=[0,0];
      for(;;)
       {if(i[1] < len)
         {var
           _fK_=i[1],
           label=caml_check_bound(methods,_fK_)[1 + _fK_],
           next=
            function(param)
             {i[1]++;
              var _fP_=i[1];
              return caml_check_bound(methods,_fP_)[1 + _fP_]},
           clo=next(0);
          if(typeof clo === "number")
           switch(clo)
            {case 0:
              var
               x=next(0),
               clo$0=function(x){return function(obj){return x}}(x);
              break;
             case 1:
              var
               n=next(0),
               clo$0=function(n){return function(obj){return obj[1 + n]}}(n);
              break;
             case 2:
              var
               e=next(0),
               n$0=next(0),
               clo$0=
                function(e,n){return function(obj){return obj[1 + e][1 + n]}}
                 (e,n$0);
              break;
             case 3:
              var
               n$1=next(0),
               clo$0=
                function(n)
                  {return function(obj){return caml_call1(obj[1][1 + n],obj)}}
                 (n$1);
              break;
             case 4:
              var
               n$2=next(0),
               clo$0=
                function(n){return function(obj,x){obj[1 + n] = x;return 0}}
                 (n$2);
              break;
             case 5:
              var
               f=next(0),
               x$0=next(0),
               clo$0=
                function(f,x){return function(obj){return caml_call1(f,x)}}
                 (f,x$0);
              break;
             case 6:
              var
               f$0=next(0),
               n$3=next(0),
               clo$0=
                function(f,n)
                  {return function(obj){return caml_call1(f,obj[1 + n])}}
                 (f$0,n$3);
              break;
             case 7:
              var
               f$1=next(0),
               e$0=next(0),
               n$4=next(0),
               clo$0=
                function(f,e,n)
                  {return function(obj)
                    {return caml_call1(f,obj[1 + e][1 + n])}}
                 (f$1,e$0,n$4);
              break;
             case 8:
              var
               f$2=next(0),
               n$5=next(0),
               clo$0=
                function(f,n)
                  {return function(obj)
                    {return caml_call1(f,caml_call1(obj[1][1 + n],obj))}}
                 (f$2,n$5);
              break;
             case 9:
              var
               f$3=next(0),
               x$1=next(0),
               y=next(0),
               clo$0=
                function(f,x,y)
                  {return function(obj){return caml_call2(f,x,y)}}
                 (f$3,x$1,y);
              break;
             case 10:
              var
               f$4=next(0),
               x$2=next(0),
               n$6=next(0),
               clo$0=
                function(f,x,n)
                  {return function(obj){return caml_call2(f,x,obj[1 + n])}}
                 (f$4,x$2,n$6);
              break;
             case 11:
              var
               f$5=next(0),
               x$3=next(0),
               e$1=next(0),
               n$7=next(0),
               clo$0=
                function(f,x,e,n)
                  {return function(obj)
                    {return caml_call2(f,x,obj[1 + e][1 + n])}}
                 (f$5,x$3,e$1,n$7);
              break;
             case 12:
              var
               f$6=next(0),
               x$4=next(0),
               n$8=next(0),
               clo$0=
                function(f,x,n)
                  {return function(obj)
                    {return caml_call2(f,x,caml_call1(obj[1][1 + n],obj))}}
                 (f$6,x$4,n$8);
              break;
             case 13:
              var
               f$7=next(0),
               n$9=next(0),
               x$5=next(0),
               clo$0=
                function(f,n,x)
                  {return function(obj){return caml_call2(f,obj[1 + n],x)}}
                 (f$7,n$9,x$5);
              break;
             case 14:
              var
               f$8=next(0),
               e$2=next(0),
               n$10=next(0),
               x$6=next(0),
               clo$0=
                function(f,e,n,x)
                  {return function(obj)
                    {return caml_call2(f,obj[1 + e][1 + n],x)}}
                 (f$8,e$2,n$10,x$6);
              break;
             case 15:
              var
               f$9=next(0),
               n$11=next(0),
               x$7=next(0),
               clo$0=
                function(f,n,x)
                  {return function(obj)
                    {return caml_call2(f,caml_call1(obj[1][1 + n],obj),x)}}
                 (f$9,n$11,x$7);
              break;
             case 16:
              var
               n$12=next(0),
               x$8=next(0),
               clo$0=
                function(n,x)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,x)}}
                 (n$12,x$8);
              break;
             case 17:
              var
               n$13=next(0),
               m=next(0),
               clo$0=
                function(n,m)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,obj[1 + m])}}
                 (n$13,m);
              break;
             case 18:
              var
               n$14=next(0),
               e$3=next(0),
               m$0=next(0),
               clo$0=
                function(n,e,m)
                  {return function(obj)
                    {return caml_call2(obj[1][1 + n],obj,obj[1 + e][1 + m])}}
                 (n$14,e$3,m$0);
              break;
             case 19:
              var
               n$15=next(0),
               m$1=next(0),
               clo$0=
                function(n,m)
                  {return function(obj)
                    {var _fN_=caml_call1(obj[1][1 + m],obj);
                     return caml_call2(obj[1][1 + n],obj,_fN_)}}
                 (n$15,m$1);
              break;
             case 20:
              var
               m$2=next(0),
               x$9=next(0),
               c=new_cache(table),
               clo$0=
                function(m,x,c)
                  {return function(obj)
                    {return caml_call2(caml_get_public_method(x,m,0),x,c)}}
                 (m$2,x$9,c);
              break;
             case 21:
              var
               m$3=next(0),
               n$16=next(0),
               c$0=new_cache(table),
               clo$0=
                function(m,n,c)
                  {return function(obj)
                    {var _fM_=obj[1 + n];
                     return caml_call2(caml_get_public_method(_fM_,m,0),_fM_,c)}}
                 (m$3,n$16,c$0);
              break;
             case 22:
              var
               m$4=next(0),
               e$4=next(0),
               n$17=next(0),
               c$1=new_cache(table),
               clo$0=
                function(m,e,n,c)
                  {return function(obj)
                    {var _fL_=obj[1 + e][1 + n];
                     return caml_call2(caml_get_public_method(_fL_,m,0),_fL_,c)}}
                 (m$4,e$4,n$17,c$1);
              break;
             default:
              var
               m$5=next(0),
               n$18=next(0),
               c$2=new_cache(table),
               clo$0=
                function(m,n,c)
                  {return function(obj)
                    {var _fO_=caml_call1(obj[1][1 + n],obj);
                     return caml_call2(caml_get_public_method(_fO_,m,0),_fO_,c)}}
                 (m$5,n$18,c$2)}
          else
           var clo$0=clo;
          set_method(table,label,clo$0);
          i[1]++;
          continue}
        return 0}}
    function stats$0(param)
     {return [0,table_count[1],method_count[1],inst_var_count[1]]}
    var
     CamlinternalOO=
      [0,
       public_method_label,
       new_method,
       new_variable,
       new_methods_variables,
       get_variable,
       get_variables,
       get_method_label,
       get_method_labels,
       get_method,
       set_method,
       set_methods,
       narrow,
       widen,
       add_initializer,
       dummy_table,
       create_table,
       init_class,
       inherits,
       make_class,
       make_class_store,
       dummy_class,
       copy$7,
       create_object,
       create_object_opt,
       run_initializers,
       run_initializers_opt,
       create_object_and_run_initiali,
       lookup_tables,
       params$0,
       stats$0];
    caml_register_global(763,CamlinternalOO,"CamlinternalOO");
    var Stdlib_oo=[0,copy$7,public_method_label,public_method_label];
    caml_register_global(764,Stdlib_oo,"Stdlib__oo");
    var
     update_mod=runtime.caml_CamlinternalMod_update_mod,
     init_mod=runtime.caml_CamlinternalMod_init_mod,
     CamlinternalMod=[0,init_mod,update_mod];
    caml_register_global(765,CamlinternalMod,"CamlinternalMod");
    var
     initial_buffer=caml_create_bytes(32),
     buffer=[0,initial_buffer],
     bufpos=[0,0];
    function reset_buffer(param)
     {buffer[1] = initial_buffer;bufpos[1] = 0;return 0}
    function store(c)
     {if(caml_ml_bytes_length(buffer[1]) <= bufpos[1])
       {var newbuffer=caml_create_bytes(2 * bufpos[1] | 0);
        blit(buffer[1],0,newbuffer,0,bufpos[1]);
        buffer[1] = newbuffer}
      caml_bytes_set(buffer[1],bufpos[1],c);
      bufpos[1]++;
      return 0}
    function get_string(param)
     {var s=sub_string(buffer[1],0,bufpos[1]);
      buffer[1] = initial_buffer;
      return s}
    function make_lexer(keywords)
     {var kwd_table=caml_call2(Stdlib_hashtbl[1],0,17);
      iter$2
       (function(s){return caml_call3(Stdlib_hashtbl[5],kwd_table,s,[0,s])},
        keywords);
      function ident_or_keyword(id)
       {try
         {var _fI_=caml_call2(Stdlib_hashtbl[6],kwd_table,id);return _fI_}
        catch(_fJ_)
         {_fJ_ = caml_wrap_exception(_fJ_);
          if(_fJ_ === Not_found)return [1,id];
          throw _fJ_}}
      function keyword_or_error(c)
       {var s=make$0(1,c);
        try
         {var _fG_=caml_call2(Stdlib_hashtbl[6],kwd_table,s);return _fG_}
        catch(_fH_)
         {_fH_ = caml_wrap_exception(_fH_);
          if(_fH_ === Not_found)
           throw [0,Error,symbol(cst_Illegal_character,s)];
          throw _fH_}}
      function comment(strm)
       {a:
        for(;;)
         {var match=peek$0(strm);
          if(match)
           {var switcher=match[1] - 40 | 0;
            if(! (2 < switcher >>> 0))
             switch(switcher)
              {case 0:
                junk(strm);
                var match$0=peek$0(strm);
                if(match$0)
                 {if(42 === match$0[1]){junk(strm);comment(strm);continue}
                  junk(strm);
                  continue}
                throw Failure$0;
               case 1:break;
               default:
                junk(strm);
                for(;;)
                 {var match$1=peek$0(strm);
                  if(match$1)
                   {var _fF_=match$1[1];
                    if(41 === _fF_){junk(strm);return 0}
                    if(42 === _fF_){junk(strm);continue}
                    junk(strm);
                    continue a}
                  throw Failure$0}}
            junk(strm);
            continue}
          throw Failure$0}}
      function escape(strm)
       {var match=peek$0(strm);
        if(match)
         {var _fC_=match[1];
          if(58 <= _fC_)
           {var switcher=_fC_ - 110 | 0;
            if(! (6 < switcher >>> 0))
             switch(switcher)
              {case 0:junk(strm);return 10;
               case 4:junk(strm);return 13;
               case 6:junk(strm);return 9
               }}
          else
           if(48 <= _fC_)
            {junk(strm);
             var match$0=peek$0(strm);
             if(match$0)
              {var _fD_=match$0[1],switcher$0=_fD_ - 48 | 0;
               if(! (9 < switcher$0 >>> 0))
                {junk(strm);
                 var match$1=peek$0(strm);
                 if(match$1)
                  {var _fE_=match$1[1],switcher$1=_fE_ - 48 | 0;
                   if(! (9 < switcher$1 >>> 0))
                    {junk(strm);
                     return chr
                             ((((_fC_ - 48 | 0) * 100 | 0)
                               +
                               ((_fD_ - 48 | 0) * 10 | 0)
                               |
                               0)
                              +
                              (_fE_ - 48 | 0)
                              |
                              0)}}
                 throw [0,Error,cst$99]}}
             throw [0,Error,cst$98]}
          junk(strm);
          return _fC_}
        throw Failure$0}
      function end_exponent_part(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fB_=match[1],switcher=_fB_ - 48 | 0;
            if(! (9 < switcher >>> 0)){junk(strm);store(_fB_);continue}}
          return [0,[3,caml_float_of_string(get_string(0))]]}}
      function exponent_part(strm)
       {var match=peek$0(strm);
        if(match)
         {var _fA_=match[1],switch$0=0;
          if(43 !== _fA_ && 45 !== _fA_)switch$0 = 1;
          if(! switch$0)
           {junk(strm);store(_fA_);return end_exponent_part(strm)}}
        return end_exponent_part(strm)}
      function number(s)
       {for(;;)
         {var match=peek$0(s);
          if(match)
           {var _fx_=match[1];
            if(58 <= _fx_)
             {var switch$0=0;
              if(69 === _fx_ || 101 === _fx_)switch$0 = 1;
              if(switch$0){junk(s);store(69);return exponent_part(s)}}
            else
             {if(46 === _fx_)
               {junk(s);
                store(46);
                for(;;)
                 {var match$0=peek$0(s);
                  if(match$0)
                   {var _fy_=match$0[1],_fz_=_fy_ - 69 | 0;
                    if(32 < _fz_ >>> 0)
                     {var switcher=_fz_ + 21 | 0;
                      if(! (9 < switcher >>> 0)){junk(s);store(_fy_);continue}}
                    else
                     {var switcher$0=_fz_ - 1 | 0;
                      if(30 < switcher$0 >>> 0)
                       {junk(s);store(69);return exponent_part(s)}}}
                  return [0,[3,caml_float_of_string(get_string(0))]]}}
              if(48 <= _fx_){junk(s);store(_fx_);continue}}}
          return [0,[2,caml_int_of_string(get_string(0))]]}}
      function ident2(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fv_=match[1],switch$0=0;
            if(94 <= _fv_)
             {var _fw_=_fv_ - 95 | 0;
              if(30 < _fw_ >>> 0)
               {if(! (32 <= _fw_))switch$0 = 1}
              else
               if(29 === _fw_)switch$0 = 1}
            else
             if(65 <= _fv_)
              {if(92 === _fv_)switch$0 = 1}
             else
              if(33 <= _fv_)
               switch(_fv_ - 33 | 0)
                {case 0:
                 case 2:
                 case 3:
                 case 4:
                 case 5:
                 case 9:
                 case 10:
                 case 12:
                 case 14:
                 case 25:
                 case 27:
                 case 28:
                 case 29:
                 case 30:
                 case 31:switch$0 = 1;break
                 }
            if(switch$0){junk(strm);store(_fv_);continue}}
          return [0,ident_or_keyword(get_string(0))]}}
      function neg_number(s)
       {var match=peek$0(s);
        if(match)
         {var _fu_=match[1],switcher=_fu_ - 48 | 0;
          if(! (9 < switcher >>> 0))
           {junk(s);reset_buffer(0);store(45);store(_fu_);return number(s)}}
        reset_buffer(0);
        store(45);
        return ident2(s)}
      function ident(strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fs_=match[1],switch$0=0;
            if(91 <= _fs_)
             {var _ft_=_fs_ - 95 | 0;
              if(27 < _ft_ >>> 0)
               {if(97 <= _ft_)switch$0 = 1}
              else
               if(1 !== _ft_)switch$0 = 1}
            else
             if(48 <= _fs_)
              {if(6 < (_fs_ - 58 | 0) >>> 0)switch$0 = 1}
             else
              if(39 === _fs_)switch$0 = 1;
            if(switch$0){junk(strm);store(_fs_);continue}}
          return [0,ident_or_keyword(get_string(0))]}}
      function next_token$0(counter,strm)
       {for(;;)
         {var match=peek$0(strm);
          if(match)
           {var _fi_=match[1],switch$0=0;
            if(124 <= _fi_)
             {if(127 <= _fi_)
               {if(192 <= _fi_)switch$0 = 1}
              else
               if(125 !== _fi_)switch$0 = 2}
            else
             {var _fj_=_fi_ - 65 | 0;
              if(57 < _fj_ >>> 0)
               {if(! (58 <= _fj_))
                 {var switcher=_fj_ + 65 | 0;
                  switch(switcher)
                   {case 34:
                     junk(strm);
                     reset_buffer(0);
                     for(;;)
                      {var match$1=peek$0(strm);
                       if(match$1)
                        {var _fl_=match$1[1];
                         if(34 === _fl_){junk(strm);return [0,[4,get_string(0)]]}
                         if(92 === _fl_)
                          {junk(strm);
                           try
                            {var c$0=escape(strm)}
                           catch(_fr_)
                            {_fr_ = caml_wrap_exception(_fr_);
                             if(_fr_ === Failure$0)throw [0,Error,cst$96];
                             throw _fr_;
                             var _fo_=_fr_}
                           store(c$0);
                           continue}
                         junk(strm);
                         store(_fl_);
                         continue}
                       throw Failure$0}
                    case 39:
                     junk(strm);
                     try
                      {var match$2=peek$0(strm);
                       if(! match$2)throw Failure$0;
                       var _fm_=match$2[1];
                       if(92 === _fm_)
                        {junk(strm);
                         try
                          {var _fn_=escape(strm)}
                         catch(_fq_)
                          {_fq_ = caml_wrap_exception(_fq_);
                           if(_fq_ === Failure$0)throw [0,Error,cst$97];
                           throw _fq_}
                         var c=_fn_}
                       else
                        {junk(strm);var c=_fm_}}
                     catch(_fp_)
                      {_fp_ = caml_wrap_exception(_fp_);
                       if(_fp_ === Failure$0)throw [0,Error,cst$94];
                       throw _fp_}
                     var match$0=peek$0(strm);
                     if(match$0 && 39 === match$0[1])
                      {junk(strm);return [0,[5,c]]}
                     throw [0,Error,cst$95];
                    case 40:
                     junk(strm);
                     if(counter < 50)
                      {var counter$0=counter + 1 | 0;
                       return maybe_comment(counter$0,strm)}
                     return caml_trampoline_return(maybe_comment,[0,strm]);
                    case 45:junk(strm);return neg_number(strm);
                    case 9:
                    case 10:
                    case 12:
                    case 13:
                    case 26:
                    case 32:junk(strm);continue;
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                     junk(strm);reset_buffer(0);store(_fi_);return number(strm);
                    case 33:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 42:
                    case 43:
                    case 47:
                    case 58:
                    case 60:
                    case 61:
                    case 62:
                    case 63:
                    case 64:switch$0 = 2;break
                    }}}
              else
               {var _fk_=_fj_ - 26 | 0;
                if(5 < _fk_ >>> 0)
                 switch$0 = 1;
                else
                 switch(_fk_)
                  {case 4:switch$0 = 1;break;case 1:case 3:switch$0 = 2;break}}}
            switch(switch$0)
             {case 0:junk(strm);return [0,keyword_or_error(_fi_)];
              case 1:
               junk(strm);reset_buffer(0);store(_fi_);return ident(strm);
              default:
               junk(strm);reset_buffer(0);store(_fi_);return ident2(strm)}}
          return 0}}
      function maybe_comment(counter,strm)
       {var match=peek$0(strm);
        if(match && 42 === match[1])
         {junk(strm);
          comment(strm);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return next_token$0(counter$0,strm)}
          return caml_trampoline_return(next_token$0,[0,strm])}
        return [0,keyword_or_error(40)]}
      function next_token(strm){return caml_trampoline(next_token$0(0,strm))}
      return function(input)
       {return from(function(count){return next_token(input)})}}
    var Stdlib_genlex=[0,make_lexer];
    caml_register_global(766,Stdlib_genlex,"Stdlib__genlex");
    function MakeSeeded$0(H)
     {var prng=[246,function(_fh_){return caml_call1(_b1_[2],0)}];
      function create(opt,initial_size)
       {if(opt)
         var sth=opt[1],random=sth;
        else
         var random=caml_call1(Stdlib_hashtbl[17],0);
        var x=16;
        for(;;)
         {if(! (initial_size <= x) && ! (max_array_length < (x * 2 | 0)))
           {var x$0=x * 2 | 0,x=x$0;continue}
          if(random)
           var
            _ff_=caml_obj_tag(prng),
            _fg_=250 === _ff_?prng[1]:246 === _ff_?force_lazy_block(prng):prng,
            seed=caml_call1(_b1_[4],_fg_);
          else
           var seed=0;
          return [0,0,caml_make_vect(x,0),seed,x]}}
      function clear(h)
       {h[1] = 0;
        var len=h[2].length - 1,_fd_=len - 1 | 0,_fc_=0;
        if(! (_fd_ < 0))
         {var i=_fc_;
          for(;;)
           {caml_check_bound(h[2],i)[1 + i] = 0;
            var _fe_=i + 1 | 0;
            if(_fd_ !== i){var i=_fe_;continue}
            break}}
        return 0}
      function reset(h)
       {var len=h[2].length - 1;
        return len === h[4]
                ?clear(h)
                :(h[1] = 0,h[2] = caml_make_vect(h[4],0),0)}
      function copy(init)
       {var _e$_=init[4],_fa_=init[3],_fb_=copy$1(init[2]);
        return [0,init[1],_fb_,_fa_,_e$_]}
      function key_index(h,hkey){return hkey & (h[2].length - 1 - 1 | 0)}
      function clean(h)
       {function do_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var rest=param$0[3],c=param$0[2],hkey=param$0[1];
              if(caml_call1(H[7],c))return [0,hkey,c,do_bucket(rest)];
              h[1] = h[1] - 1 | 0;
              var param$0=rest;
              continue}
            return 0}}
        var d=h[2],_e8_=d.length - 1 - 1 | 0,_e7_=0;
        if(! (_e8_ < 0))
         {var i=_e7_;
          for(;;)
           {var _e9_=do_bucket(caml_check_bound(d,i)[1 + i]);
            caml_check_bound(d,i)[1 + i] = _e9_;
            var _e__=i + 1 | 0;
            if(_e8_ !== i){var i=_e__;continue}
            break}}
        return 0}
      function resize(h)
       {var odata=h[2],osize=odata.length - 1,nsize=osize * 2 | 0;
        clean(h);
        var
         _e1_=nsize < max_array_length?1:0,
         _e2_=_e1_?(osize >>> 1 | 0) <= h[1]?1:0:_e1_;
        if(_e2_)
         {var ndata=caml_make_vect(nsize,0);
          h[2] = ndata;
          var
           insert_bucket=
            function(param)
             {if(param)
               {var rest=param[3],data=param[2],hkey=param[1];
                insert_bucket(rest);
                var nidx=key_index(h,hkey);
                ndata[1 + nidx]
                =
                [0,hkey,data,caml_check_bound(ndata,nidx)[1 + nidx]];
                return 0}
              return 0},
           _e4_=osize - 1 | 0,
           _e3_=0;
          if(! (_e4_ < 0))
           {var i=_e3_;
            for(;;)
             {insert_bucket(caml_check_bound(odata,i)[1 + i]);
              var _e6_=i + 1 | 0;
              if(_e4_ !== i){var i=_e6_;continue}
              break}}
          var _e5_=0}
        else
         var _e5_=_e2_;
        return _e5_}
      function add(h,key,info)
       {var
         hkey=caml_call2(H[2],h[3],key),
         i=key_index(h,hkey),
         container=caml_call2(H[1],key,info),
         bucket=[0,hkey,container,caml_check_bound(h[2],i)[1 + i]];
        caml_check_bound(h[2],i)[1 + i] = bucket;
        h[1] = h[1] + 1 | 0;
        var _e0_=h[2].length - 1 << 1 < h[1]?1:0;
        return _e0_?resize(h):_e0_}
      function remove(h,key)
       {var hkey=caml_call2(H[2],h[3],key);
        function remove_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var next=param$0[3],c=param$0[2],hk=param$0[1];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                switch(match)
                 {case 0:h[1] = h[1] - 1 | 0;return next;
                  case 1:return [0,hk,c,remove_bucket(next)];
                  default:h[1] = h[1] - 1 | 0;var param$0=next;continue}}
              return [0,hk,c,remove_bucket(next)]}
            return 0}}
        var
         i=key_index(h,hkey),
         _eZ_=remove_bucket(caml_check_bound(h[2],i)[1 + i]);
        caml_check_bound(h[2],i)[1 + i] = _eZ_;
        return 0}
      function find(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _eY_=key_index(h,hkey),
         param$0=caml_check_bound(h[2],_eY_)[1 + _eY_],
         param=param$0;
        for(;;)
         {if(param)
           {var rest=param[3],c=param[2],hk=param[1];
            if(hkey === hk)
             {var match=caml_call2(H[3],c,key);
              switch(match)
               {case 0:
                 var match$0=caml_call1(H[4],c);
                 if(match$0){var d=match$0[1];return d}
                 var param=rest;
                 continue;
                case 1:var param=rest;continue;
                default:var param=rest;continue}}
            var param=rest;
            continue}
          throw Not_found}}
      function find_opt(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _eX_=key_index(h,hkey),
         param$0=caml_check_bound(h[2],_eX_)[1 + _eX_],
         param=param$0;
        for(;;)
         {if(param)
           {var rest=param[3],c=param[2],hk=param[1];
            if(hkey === hk)
             {var match=caml_call2(H[3],c,key);
              switch(match)
               {case 0:
                 var d=caml_call1(H[4],c);
                 if(d)return d;
                 var param=rest;
                 continue;
                case 1:var param=rest;continue;
                default:var param=rest;continue}}
            var param=rest;
            continue}
          return 0}}
      function find_all(h,key)
       {var hkey=caml_call2(H[2],h[3],key);
        function find_in_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var rest=param$0[3],c=param$0[2],hk=param$0[1];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                switch(match)
                 {case 0:
                   var match$0=caml_call1(H[4],c);
                   if(match$0)
                    {var d=match$0[1];return [0,d,find_in_bucket(rest)]}
                   var param$0=rest;
                   continue;
                  case 1:var param$0=rest;continue;
                  default:var param$0=rest;continue}}
              var param$0=rest;
              continue}
            return 0}}
        var _eW_=key_index(h,hkey);
        return find_in_bucket(caml_check_bound(h[2],_eW_)[1 + _eW_])}
      function replace(h,key,info)
       {var hkey=caml_call2(H[2],h[3],key);
        function replace_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var next=param$0[3],c=param$0[2],hk=param$0[1];
              if(hkey === hk)
               {var match=caml_call2(H[3],c,key);
                if(0 === match)return caml_call3(H[6],c,key,info);
                var param$0=next;
                continue}
              var param$0=next;
              continue}
            throw Not_found}}
        var i=key_index(h,hkey),l=caml_check_bound(h[2],i)[1 + i];
        try
         {var _eU_=replace_bucket(l);return _eU_}
        catch(_eV_)
         {_eV_ = caml_wrap_exception(_eV_);
          if(_eV_ === Not_found)
           {var container=caml_call2(H[1],key,info);
            caml_check_bound(h[2],i)[1 + i] = [0,hkey,container,l];
            h[1] = h[1] + 1 | 0;
            var _eT_=h[2].length - 1 << 1 < h[1]?1:0;
            return _eT_?resize(h):_eT_}
          throw _eV_}}
      function mem(h,key)
       {var
         hkey=caml_call2(H[2],h[3],key),
         _eS_=key_index(h,hkey),
         param$0=caml_check_bound(h[2],_eS_)[1 + _eS_],
         param=param$0;
        for(;;)
         {if(param)
           {var rest=param[3],c=param[2],hk=param[1];
            if(hk === hkey)
             {var match=caml_call2(H[3],c,key);
              if(0 === match)return 1;
              var param=rest;
              continue}
            var param=rest;
            continue}
          return 0}}
      function iter$0(f,h)
       {var d$0=h[2],_eQ_=d$0.length - 1 - 1 | 0,_eP_=0;
        if(! (_eQ_ < 0))
         {var i=_eP_;
          a:
          for(;;)
           {var param$0=caml_check_bound(d$0,i)[1 + i],param=param$0;
            for(;;)
             {if(param)
               {var
                 rest=param[3],
                 c=param[2],
                 match=caml_call1(H[5],c),
                 match$0=caml_call1(H[4],c),
                 switch$0=0;
                if(match && match$0)
                 {var d=match$0[1],k=match[1];caml_call2(f,k,d);switch$0 = 1}
                var param=rest;
                continue}
              var _eR_=i + 1 | 0;
              if(_eQ_ !== i){var i=_eR_;continue a}
              break}
            break}}
        return 0}
      function fold(f,h,init)
       {var d$0=h[2],accu$1=[0,init],_eM_=d$0.length - 1 - 1 | 0,_eL_=0;
        if(! (_eM_ < 0))
         {var i=_eL_;
          a:
          for(;;)
           {var
             _eN_=accu$1[1],
             b$0=caml_check_bound(d$0,i)[1 + i],
             b=b$0,
             accu=_eN_;
            for(;;)
             {if(b)
               {var
                 rest=b[3],
                 c=b[2],
                 match=caml_call1(H[5],c),
                 match$0=caml_call1(H[4],c),
                 switch$0=0;
                if(match && match$0)
                 {var d=match$0[1],k=match[1],accu$0=caml_call3(f,k,d,accu);
                  switch$0 = 1}
                if(! switch$0)var accu$0=accu;
                var b=rest,accu=accu$0;
                continue}
              accu$1[1] = accu;
              var _eO_=i + 1 | 0;
              if(_eM_ !== i){var i=_eO_;continue a}
              break}
            break}}
        return accu$1[1]}
      function filter_map_inplace(f,h)
       {function do_bucket(param)
         {var param$0=param;
          for(;;)
           {if(param$0)
             {var
               rest=param$0[3],
               c=param$0[2],
               hk=param$0[1],
               match=caml_call1(H[5],c),
               match$0=caml_call1(H[4],c);
              if(match && match$0)
               {var d=match$0[1],k=match[1],match$1=caml_call2(f,k,d);
                if(match$1)
                 {var new_d=match$1[1];
                  caml_call3(H[6],c,k,new_d);
                  return [0,hk,c,do_bucket(rest)]}
                var param$0=rest;
                continue}
              var param$0=rest;
              continue}
            return 0}}
        var d=h[2],_eI_=d.length - 1 - 1 | 0,_eH_=0;
        if(! (_eI_ < 0))
         {var i=_eH_;
          for(;;)
           {var _eJ_=do_bucket(caml_check_bound(d,i)[1 + i]);
            caml_check_bound(d,i)[1 + i] = _eJ_;
            var _eK_=i + 1 | 0;
            if(_eI_ !== i){var i=_eK_;continue}
            break}}
        return 0}
      function length(h){return h[1]}
      function bucket_length(accu,param)
       {var accu$0=accu,param$0=param;
        for(;;)
         {if(param$0)
           {var
             param$1=param$0[3],
             accu$1=accu$0 + 1 | 0,
             accu$0=accu$1,
             param$0=param$1;
            continue}
          return accu$0}}
      function stats(h)
       {var
         _eE_=h[2],
         _eF_=0,
         mbl=
          fold_left$1
           (function(m,b){return max(m,bucket_length(0,b))},_eF_,_eE_),
         histo=caml_make_vect(mbl + 1 | 0,0),
         _eG_=h[2];
        iter$5
         (function(b)
           {var l=bucket_length(0,b);
            histo[1 + l] = caml_check_bound(histo,l)[1 + l] + 1 | 0;
            return 0},
          _eG_);
        return [0,h[1],h[2].length - 1,mbl,histo]}
      function bucket_length_alive(accu,param)
       {var accu$0=accu,param$0=param;
        for(;;)
         {if(param$0)
           {var rest=param$0[3],c=param$0[2];
            if(caml_call1(H[7],c))
             {var accu$1=accu$0 + 1 | 0,accu$0=accu$1,param$0=rest;continue}
            var param$0=rest;
            continue}
          return accu$0}}
      function stats_alive(h)
       {var
         size=[0,0],
         _eB_=h[2],
         _eC_=0,
         mbl=
          fold_left$1
           (function(m,b){return max(m,bucket_length_alive(0,b))},_eC_,_eB_),
         histo=caml_make_vect(mbl + 1 | 0,0),
         _eD_=h[2];
        iter$5
         (function(b)
           {var l=bucket_length_alive(0,b);
            size[1] = size[1] + l | 0;
            histo[1 + l] = caml_check_bound(histo,l)[1 + l] + 1 | 0;
            return 0},
          _eD_);
        return [0,size[1],h[2].length - 1,mbl,histo]}
      function to_seq(tbl)
       {var tbl_data=tbl[2];
        function aux(i,buck,param)
         {var i$0=i,buck$0=buck;
          for(;;)
           {if(buck$0)
             {var
               next=buck$0[3],
               c=buck$0[2],
               match=caml_call1(H[5],c),
               match$0=caml_call1(H[4],c);
              if(match && match$0)
               {var data=match$0[1],key=match[1];
                return [0,
                        [0,key,data],
                        function(_eA_){return aux(i$0,next,_eA_)}]}
              var buck$0=next;
              continue}
            if(i$0 === tbl_data.length - 1)return 0;
            var
             buck$1=caml_check_bound(tbl_data,i$0)[1 + i$0],
             i$1=i$0 + 1 | 0,
             i$0=i$1,
             buck$0=buck$1;
            continue}}
        var _ex_=0,_ey_=0;
        return function(_ez_){return aux(_ey_,_ex_,_ez_)}}
      function to_seq_keys(m)
       {var _et_=to_seq(m);
        function _eu_(_ew_){return _ew_[1]}
        return function(_ev_){return map(_eu_,_et_,_ev_)}}
      function to_seq_values(m)
       {var _ep_=to_seq(m);
        function _eq_(_es_){return _es_[2]}
        return function(_er_){return map(_eq_,_ep_,_er_)}}
      function add_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return add(tbl,k,v)},
                 i)}
      function replace_seq(tbl,i)
       {return iter
                (function(param)
                  {var v=param[2],k=param[1];return replace(tbl,k,v)},
                 i)}
      function of_seq(i){var tbl=create(0,16);replace_seq(tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter$0,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function create$5(param){return caml_call1(_u_[1],1)}
    function get_key$0(t){return caml_call2(_u_[3],t,0)}
    function get_key_copy$0(t){return caml_call2(_u_[4],t,0)}
    function set_key$0(t,k){return caml_call3(_u_[5],t,0,k)}
    function unset_key$0(t){return caml_call2(_u_[6],t,0)}
    function check_key$0(t){return caml_call2(_u_[7],t,0)}
    function blit_key$0(t1,t2){return caml_call5(_u_[8],t1,0,t2,0,1)}
    function get_data$1(t){return caml_call1(_u_[9],t)}
    function get_data_copy(t){return caml_call1(_u_[10],t)}
    function set_data(t,d){return caml_call2(_u_[11],t,d)}
    function unset_data(t){return caml_call1(_u_[12],t)}
    function check_data(t){return caml_call1(_u_[13],t)}
    function blit_data(t1,t2){return caml_call2(_u_[14],t1,t2)}
    function MakeSeeded$1(H)
     {function create(k,d)
       {var c=create$5(0);set_data(c,d);set_key$0(c,k);return c}
      var hash=H[2];
      function equal(c,k)
       {var match=get_key$0(c);
        if(match){var k$0=match[1];return caml_call2(H[1],k,k$0)?0:1}
        return 2}
      function set_key_data(c,k,d)
       {unset_data(c);set_key$0(c,k);return set_data(c,d)}
      return MakeSeeded$0
              ([0,
                create,
                hash,
                equal,
                get_data$1,
                get_key$0,
                set_key_data,
                check_key$0])}
    function Make$1(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded$1([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _eo_=include[1];
      function create(sz){return caml_call2(_eo_,_cv_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function create$6(param){return caml_call1(_u_[1],2)}
    function get_key1(t){return caml_call2(_u_[3],t,0)}
    function get_key1_copy(t){return caml_call2(_u_[4],t,0)}
    function set_key1(t,k){return caml_call3(_u_[5],t,0,k)}
    function unset_key1(t){return caml_call2(_u_[6],t,0)}
    function check_key1(t){return caml_call2(_u_[7],t,0)}
    function get_key2(t){return caml_call2(_u_[3],t,1)}
    function get_key2_copy(t){return caml_call2(_u_[4],t,1)}
    function set_key2(t,k){return caml_call3(_u_[5],t,1,k)}
    function unset_key2(t){return caml_call2(_u_[6],t,1)}
    function check_key2(t){return caml_call2(_u_[7],t,1)}
    function blit_key1(t1,t2){return caml_call5(_u_[8],t1,0,t2,0,1)}
    function blit_key2(t1,t2){return caml_call5(_u_[8],t1,1,t2,1,1)}
    function blit_key12(t1,t2){return caml_call5(_u_[8],t1,0,t2,0,2)}
    function get_data$2(t){return caml_call1(_u_[9],t)}
    function get_data_copy$0(t){return caml_call1(_u_[10],t)}
    function set_data$0(t,d){return caml_call2(_u_[11],t,d)}
    function unset_data$0(t){return caml_call1(_u_[12],t)}
    function check_data$0(t){return caml_call1(_u_[13],t)}
    function blit_data$0(t1,t2){return caml_call2(_u_[14],t1,t2)}
    function MakeSeeded$2(H1,H2)
     {function create(param,d)
       {var k2=param[2],k1=param[1],c=create$6(0);
        set_data$0(c,d);
        set_key1(c,k1);
        set_key2(c,k2);
        return c}
      function hash(seed,param)
       {var
         k2=param[2],
         k1=param[1],
         _en_=caml_call2(H2[2],seed,k2) * 65599 | 0;
        return caml_call2(H1[2],seed,k1) + _en_ | 0}
      function equal(c,param)
       {var k2=param[2],k1=param[1],match=get_key1(c),match$0=get_key2(c);
        if(match && match$0)
         {var k2$0=match$0[1],k1$0=match[1];
          if(caml_call2(H1[1],k1,k1$0) && caml_call2(H2[1],k2,k2$0))return 0;
          return 1}
        return 2}
      function get_key(c)
       {var match=get_key1(c),match$0=get_key2(c);
        if(match && match$0)
         {var k2=match$0[1],k1=match[1];return [0,[0,k1,k2]]}
        return 0}
      function set_key_data(c,param,d)
       {var k2=param[2],k1=param[1];
        unset_data$0(c);
        set_key1(c,k1);
        set_key2(c,k2);
        return set_data$0(c,d)}
      function check_key(c)
       {var _em_=check_key1(c);return _em_?check_key2(c):_em_}
      return MakeSeeded$0
              ([0,create,hash,equal,get_data$2,get_key,set_key_data,check_key])}
    function Make$2(H1,H2)
     {var equal=H2[1];
      function hash(seed,x){return caml_call1(H2[2],x)}
      var equal$0=H1[1],_ek_=[0,equal,hash];
      function hash$0(seed,x){return caml_call1(H1[2],x)}
      var
       include=MakeSeeded$2([0,equal$0,hash$0],_ek_),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _el_=include[1];
      function create(sz){return caml_call2(_el_,_cw_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    function create$7(n){return caml_call1(_u_[1],n)}
    function length$6(k){return caml_call1(_u_[2],k)}
    function get_key$1(t,n){return caml_call2(_u_[3],t,n)}
    function get_key_copy$1(t,n){return caml_call2(_u_[4],t,n)}
    function set_key$1(t,n,k){return caml_call3(_u_[5],t,n,k)}
    function unset_key$1(t,n){return caml_call2(_u_[6],t,n)}
    function check_key$1(t,n){return caml_call2(_u_[7],t,n)}
    function blit_key$1(t1,o1,t2,o2,l)
     {return caml_call5(_u_[8],t1,o1,t2,o2,l)}
    function get_data$3(t){return caml_call1(_u_[9],t)}
    function get_data_copy$1(t){return caml_call1(_u_[10],t)}
    function set_data$1(t,d){return caml_call2(_u_[11],t,d)}
    function unset_data$1(t){return caml_call1(_u_[12],t)}
    function check_data$1(t){return caml_call1(_u_[13],t)}
    function blit_data$1(t1,t2){return caml_call2(_u_[14],t1,t2)}
    function MakeSeeded$3(H)
     {function create(k,d)
       {var c=create$7(k.length - 1);
        set_data$1(c,d);
        var _ei_=k.length - 1 - 1 | 0,_eh_=0;
        if(! (_ei_ < 0))
         {var i=_eh_;
          for(;;)
           {set_key$1(c,i,caml_check_bound(k,i)[1 + i]);
            var _ej_=i + 1 | 0;
            if(_ei_ !== i){var i=_ej_;continue}
            break}}
        return c}
      function hash(seed,k)
       {var h=[0,0],_ed_=k.length - 1 - 1 | 0,_ec_=0;
        if(! (_ed_ < 0))
         {var i=_ec_;
          for(;;)
           {var _ee_=h[1],_ef_=caml_check_bound(k,i)[1 + i];
            h[1] = (caml_call2(H[2],seed,_ef_) * 65599 | 0) + _ee_ | 0;
            var _eg_=i + 1 | 0;
            if(_ed_ !== i){var i=_eg_;continue}
            break}}
        return h[1]}
      function equal(c,k)
       {var len=k.length - 1,len$0=length$6(c);
        if(len !== len$0)return 1;
        var i$1=len - 1 | 0,i=i$1;
        for(;;)
         {if(0 <= i)
           {var match=get_key$1(c,i);
            if(match)
             {var ki=match[1],_eb_=caml_check_bound(k,i)[1 + i];
              if(caml_call2(H[1],_eb_,ki)){var i$0=i - 1 | 0,i=i$0;continue}
              return 1}
            return 2}
          return 0}}
      function get_key(c)
       {var len=length$6(c);
        if(0 === len)return [0,[0]];
        var match=get_key$1(c,0);
        if(match)
         {var k0=match[1],a=caml_make_vect(len,k0),i$1=len - 1 | 0,i=i$1;
          for(;;)
           {if(1 <= i)
             {var match$0=get_key$1(c,i);
              if(match$0)
               {var ki=match$0[1];
                caml_check_bound(a,i)[1 + i] = ki;
                var i$0=i - 1 | 0,i=i$0;
                continue}
              return 0}
            return [0,a]}}
        return 0}
      function set_key_data(c,k,d)
       {unset_data$1(c);
        var _d$_=k.length - 1 - 1 | 0,_d__=0;
        if(! (_d$_ < 0))
         {var i=_d__;
          for(;;)
           {set_key$1(c,i,caml_check_bound(k,i)[1 + i]);
            var _ea_=i + 1 | 0;
            if(_d$_ !== i){var i=_ea_;continue}
            break}}
        return set_data$1(c,d)}
      function check_key(c)
       {var i$1=length$6(c) - 1 | 0,i=i$1;
        for(;;)
         {var _d7_=i < 0?1:0;
          if(_d7_)
           var _d8_=_d7_;
          else
           {var _d9_=check_key$1(c,i);
            if(_d9_){var i$0=i - 1 | 0,i=i$0;continue}
            var _d8_=_d9_}
          return _d8_}}
      return MakeSeeded$0
              ([0,create,hash,equal,get_data$3,get_key,set_key_data,check_key])}
    function Make$3(H)
     {var equal=H[1];
      function hash(seed,x){return caml_call1(H[2],x)}
      var
       include=MakeSeeded$3([0,equal,hash]),
       clear=include[2],
       reset=include[3],
       copy=include[4],
       add=include[5],
       remove=include[6],
       find=include[7],
       find_opt=include[8],
       find_all=include[9],
       replace=include[10],
       mem=include[11],
       iter=include[12],
       filter_map_inplace=include[13],
       fold=include[14],
       length=include[15],
       stats=include[16],
       to_seq=include[17],
       to_seq_keys=include[18],
       to_seq_values=include[19],
       add_seq=include[20],
       replace_seq=include[21],
       clean=include[23],
       stats_alive=include[24],
       _d6_=include[1];
      function create(sz){return caml_call2(_d6_,_cx_,sz)}
      function of_seq(i)
       {var tbl=create(16);caml_call2(replace_seq,tbl,i);return tbl}
      return [0,
              create,
              clear,
              reset,
              copy,
              add,
              remove,
              find,
              find_opt,
              find_all,
              replace,
              mem,
              iter,
              filter_map_inplace,
              fold,
              length,
              stats,
              to_seq,
              to_seq_keys,
              to_seq_values,
              add_seq,
              replace_seq,
              of_seq,
              clean,
              stats_alive]}
    var
     Stdlib_ephemeron=
      [0,
       [0,
        create$5,
        get_key$0,
        get_key_copy$0,
        set_key$0,
        unset_key$0,
        check_key$0,
        blit_key$0,
        get_data$1,
        get_data_copy,
        set_data,
        unset_data,
        check_data,
        blit_data,
        Make$1,
        MakeSeeded$1],
       [0,
        create$6,
        get_key1,
        get_key1_copy,
        set_key1,
        unset_key1,
        check_key1,
        get_key2,
        get_key2_copy,
        set_key2,
        unset_key2,
        check_key2,
        blit_key1,
        blit_key2,
        blit_key12,
        get_data$2,
        get_data_copy$0,
        set_data$0,
        unset_data$0,
        check_data$0,
        blit_data$0,
        Make$2,
        MakeSeeded$2],
       [0,
        create$7,
        get_key$1,
        get_key_copy$1,
        set_key$1,
        unset_key$1,
        check_key$1,
        blit_key$1,
        get_data$3,
        get_data_copy$1,
        set_data$1,
        unset_data$1,
        check_data$1,
        blit_data$1,
        Make$3,
        MakeSeeded$3],
       [0,
        function(_d5_)
         {return MakeSeeded$0
                  ([0,_d5_[3],_d5_[1],_d5_[2],_d5_[5],_d5_[4],_d5_[6],_d5_[7]])}]];
    caml_register_global(767,Stdlib_ephemeron,"Stdlib__ephemeron");
    function generic_basename(is_dir_sep,current_dir_name,name)
     {if(caml_string_equal(name,cst$100))return current_dir_name;
      var n$3=caml_ml_string_length(name) - 1 | 0,n=n$3;
      for(;;)
       {if(0 <= n)
         {if(caml_call2(is_dir_sep,name,n)){var n$0=n - 1 | 0,n=n$0;continue}
          var p=n + 1 | 0,n$1=n;
          for(;;)
           {if(0 <= n$1)
             {if(caml_call2(is_dir_sep,name,n$1))
               return sub$0(name,n$1 + 1 | 0,(p - n$1 | 0) - 1 | 0);
              var n$2=n$1 - 1 | 0,n$1=n$2;
              continue}
            return sub$0(name,0,p)}}
        return sub$0(name,0,1)}}
    function generic_dirname(is_dir_sep,current_dir_name,name)
     {if(caml_string_equal(name,cst$101))return current_dir_name;
      var n$5=caml_ml_string_length(name) - 1 | 0,n=n$5;
      for(;;)
       {if(0 <= n)
         {if(caml_call2(is_dir_sep,name,n)){var n$0=n - 1 | 0,n=n$0;continue}
          var n$1=n;
          for(;;)
           {if(0 <= n$1)
             {if(caml_call2(is_dir_sep,name,n$1))
               {var n$3=n$1;
                for(;;)
                 {if(0 <= n$3)
                   {if(caml_call2(is_dir_sep,name,n$3))
                     {var n$4=n$3 - 1 | 0,n$3=n$4;continue}
                    return sub$0(name,0,n$3 + 1 | 0)}
                  return sub$0(name,0,1)}}
              var n$2=n$1 - 1 | 0,n$1=n$2;
              continue}
            return current_dir_name}}
        return sub$0(name,0,1)}}
    function is_dir_sep(s,i){return 47 === caml_string_get(s,i)?1:0}
    function is_relative(n)
     {var
       _d3_=caml_ml_string_length(n) < 1?1:0,
       _d4_=_d3_ || (47 !== caml_string_get(n,0)?1:0);
      return _d4_}
    function is_implicit(n)
     {var _dY_=is_relative(n);
      if(_dY_)
       {var
         _dZ_=caml_ml_string_length(n) < 2?1:0,
         _d0_=_dZ_ || caml_string_notequal(sub$0(n,0,2),cst$103);
        if(_d0_)
         var
          _d1_=caml_ml_string_length(n) < 3?1:0,
          _d2_=_d1_ || caml_string_notequal(sub$0(n,0,3),cst$102);
        else
         var _d2_=_d0_}
      else
       var _d2_=_dY_;
      return _d2_}
    function check_suffix(name,suff)
     {var
       _dW_=caml_ml_string_length(suff) <= caml_ml_string_length(name)?1:0,
       _dX_=
        _dW_
         ?caml_string_equal
           (sub$0
             (name,
              caml_ml_string_length(name) - caml_ml_string_length(suff) | 0,
              caml_ml_string_length(suff)),
            suff)
         :_dW_;
      return _dX_}
    function chop_suffix_opt(suffix,filename)
     {var
       len_s=caml_ml_string_length(suffix),
       len_f=caml_ml_string_length(filename);
      if(len_s <= len_f)
       {var r=sub$0(filename,len_f - len_s | 0,len_s);
        return caml_string_equal(r,suffix)
                ?[0,sub$0(filename,0,len_f - len_s | 0)]
                :0}
      return 0}
    try
     {var _cF_=caml_sys_getenv(cst_TMPDIR),_cy_=_cF_}
    catch(_dV_)
     {_dV_ = caml_wrap_exception(_dV_);
      if(_dV_ !== Not_found)throw _dV_;
      var _cy_=cst_tmp}
    function quote(s)
     {var l=caml_ml_string_length(s),b=create$2(l + 20 | 0);
      add_char(b,39);
      var _dT_=l - 1 | 0,_dS_=0;
      if(! (_dT_ < 0))
       {var i=_dS_;
        for(;;)
         {if(39 === caml_string_get(s,i))
           add_string(b,quotequote);
          else
           add_char(b,caml_string_get(s,i));
          var _dU_=i + 1 | 0;
          if(_dT_ !== i){var i=_dU_;continue}
          break}}
      add_char(b,39);
      return contents(b)}
    function basename(_dR_)
     {return generic_basename(is_dir_sep,current_dir_name,_dR_)}
    function dirname(_dQ_)
     {return generic_dirname(is_dir_sep,current_dir_name,_dQ_)}
    function is_dir_sep$0(s,i)
     {var c=caml_string_get(s,i),_dN_=47 === c?1:0;
      if(_dN_)
       var _dO_=_dN_;
      else
       var _dP_=92 === c?1:0,_dO_=_dP_ || (58 === c?1:0);
      return _dO_}
    function is_relative$0(n)
     {var
       _dH_=caml_ml_string_length(n) < 1?1:0,
       _dI_=_dH_ || (47 !== caml_string_get(n,0)?1:0);
      if(_dI_)
       {var
         _dJ_=caml_ml_string_length(n) < 1?1:0,
         _dK_=_dJ_ || (92 !== caml_string_get(n,0)?1:0);
        if(_dK_)
         var
          _dL_=caml_ml_string_length(n) < 2?1:0,
          _dM_=_dL_ || (58 !== caml_string_get(n,1)?1:0);
        else
         var _dM_=_dK_}
      else
       var _dM_=_dI_;
      return _dM_}
    function is_implicit$0(n)
     {var _dy_=is_relative$0(n);
      if(_dy_)
       {var
         _dz_=caml_ml_string_length(n) < 2?1:0,
         _dA_=_dz_ || caml_string_notequal(sub$0(n,0,2),cst$107);
        if(_dA_)
         {var
           _dB_=caml_ml_string_length(n) < 2?1:0,
           _dC_=_dB_ || caml_string_notequal(sub$0(n,0,2),cst$106);
          if(_dC_)
           {var
             _dD_=caml_ml_string_length(n) < 3?1:0,
             _dE_=_dD_ || caml_string_notequal(sub$0(n,0,3),cst$105);
            if(_dE_)
             var
              _dF_=caml_ml_string_length(n) < 3?1:0,
              _dG_=_dF_ || caml_string_notequal(sub$0(n,0,3),cst$104);
            else
             var _dG_=_dE_}
          else
           var _dG_=_dC_}
        else
         var _dG_=_dA_}
      else
       var _dG_=_dy_;
      return _dG_}
    function check_suffix$0(name,suff)
     {var _dv_=caml_ml_string_length(suff) <= caml_ml_string_length(name)?1:0;
      if(_dv_)
       var
        s=
         sub$0
          (name,
           caml_ml_string_length(name) - caml_ml_string_length(suff) | 0,
           caml_ml_string_length(suff)),
        _dw_=lowercase_ascii$1(suff),
        _dx_=caml_string_equal(lowercase_ascii$1(s),_dw_);
      else
       var _dx_=_dv_;
      return _dx_}
    function chop_suffix_opt$0(suffix,filename)
     {var
       len_s=caml_ml_string_length(suffix),
       len_f=caml_ml_string_length(filename);
      if(len_s <= len_f)
       {var
         r=sub$0(filename,len_f - len_s | 0,len_s),
         _du_=lowercase_ascii$1(suffix);
        return caml_string_equal(lowercase_ascii$1(r),_du_)
                ?[0,sub$0(filename,0,len_f - len_s | 0)]
                :0}
      return 0}
    try
     {var _cE_=caml_sys_getenv(cst_TEMP),temp_dir_name=_cE_}
    catch(_dt_)
     {_dt_ = caml_wrap_exception(_dt_);
      if(_dt_ !== Not_found)throw _dt_;
      var temp_dir_name=cst$108}
    function quote$0(s)
     {var l=caml_ml_string_length(s),b=create$2(l + 20 | 0);
      add_char(b,34);
      function add_bs(n)
       {var _dr_=1;
        if(! (n < 1))
         {var j=_dr_;
          for(;;)
           {add_char(b,92);
            var _ds_=j + 1 | 0;
            if(n !== j){var j=_ds_;continue}
            break}}
        return 0}
      function loop$0(counter,i)
       {var i$0=i;
        for(;;)
         {if(i$0 === l)return add_char(b,34);
          var c=caml_string_get(s,i$0);
          if(34 === c)
           {var _dp_=0;
            if(counter < 50)
             {var counter$1=counter + 1 | 0;
              return loop_bs(counter$1,_dp_,i$0)}
            return caml_trampoline_return(loop_bs,[0,_dp_,i$0])}
          if(92 === c)
           {var _dq_=0;
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return loop_bs(counter$0,_dq_,i$0)}
            return caml_trampoline_return(loop_bs,[0,_dq_,i$0])}
          add_char(b,c);
          var i$1=i$0 + 1 | 0,i$0=i$1;
          continue}}
      function loop_bs(counter,n,i)
       {var n$0=n,i$0=i;
        for(;;)
         {if(i$0 === l){add_char(b,34);return add_bs(n$0)}
          var match=caml_string_get(s,i$0);
          if(34 === match)
           {add_bs((2 * n$0 | 0) + 1 | 0);
            add_char(b,34);
            var _do_=i$0 + 1 | 0;
            if(counter < 50)
             {var counter$1=counter + 1 | 0;return loop$0(counter$1,_do_)}
            return caml_trampoline_return(loop$0,[0,_do_])}
          if(92 === match)
           {var i$1=i$0 + 1 | 0,n$1=n$0 + 1 | 0,n$0=n$1,i$0=i$1;continue}
          add_bs(n$0);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return loop$0(counter$0,i$0)}
          return caml_trampoline_return(loop$0,[0,i$0])}}
      function loop(i){return caml_trampoline(loop$0(0,i))}
      loop(0);
      return contents(b)}
    function drive_and_path(s)
     {var _dk_=2 <= caml_ml_string_length(s)?1:0;
      if(_dk_)
       {var param=caml_string_get(s,0),switch$0=0;
        if(91 <= param)
         {if(! (25 < (param - 97 | 0) >>> 0))switch$0 = 1}
        else
         if(65 <= param)switch$0 = 1;
        var _dl_=switch$0?1:0,_dm_=_dl_?58 === caml_string_get(s,1)?1:0:_dl_}
      else
       var _dm_=_dk_;
      if(_dm_)
       {var _dn_=sub$0(s,2,caml_ml_string_length(s) - 2 | 0);
        return [0,sub$0(s,0,2),_dn_]}
      return [0,cst$109,s]}
    function dirname$0(s)
     {var
       match=drive_and_path(s),
       path=match[2],
       drive=match[1],
       dir=generic_dirname(is_dir_sep$0,current_dir_name$0,path);
      return symbol(drive,dir)}
    function basename$0(s)
     {var match=drive_and_path(s),path=match[2];
      return generic_basename(is_dir_sep$0,current_dir_name$0,path)}
    function basename$1(_dj_)
     {return generic_basename(is_dir_sep$0,current_dir_name$1,_dj_)}
    function dirname$1(_di_)
     {return generic_dirname(is_dir_sep$0,current_dir_name$1,_di_)}
    var switch$0=0;
    if(caml_string_notequal(os_type,cst_Cygwin))
     if(caml_string_notequal(os_type,cst_Win32))
      {var
        current_dir_name$2=current_dir_name,
        parent_dir_name$2=parent_dir_name,
        dir_sep$2=dir_sep,
        is_dir_sep$1=is_dir_sep,
        is_relative$1=is_relative,
        is_implicit$1=is_implicit,
        check_suffix$1=check_suffix,
        chop_suffix_opt$1=chop_suffix_opt,
        temp_dir_name$0=_cy_,
        quote$1=quote,
        basename$2=basename,
        dirname$2=dirname;
       switch$0 = 1}
     else
      var
       _cD_=
        [0,
         current_dir_name$0,
         parent_dir_name$0,
         dir_sep$0,
         is_dir_sep$0,
         is_relative$0,
         is_implicit$0,
         check_suffix$0,
         chop_suffix_opt$0,
         temp_dir_name,
         quote$0,
         basename$0,
         dirname$0];
    else
     var
      _cD_=
       [0,
        current_dir_name$1,
        parent_dir_name$1,
        dir_sep$1,
        is_dir_sep$0,
        is_relative$0,
        is_implicit$0,
        check_suffix$0,
        chop_suffix_opt$0,
        _cy_,
        quote,
        basename$1,
        dirname$1];
    if(! switch$0)
     var
      current_dir_name$2=_cD_[1],
      parent_dir_name$2=_cD_[2],
      dir_sep$2=_cD_[3],
      is_dir_sep$1=is_dir_sep$0,
      is_relative$1=is_relative$0,
      is_implicit$1=is_implicit$0,
      check_suffix$1=check_suffix$0,
      chop_suffix_opt$1=chop_suffix_opt$0,
      temp_dir_name$0=_cD_[9],
      quote$1=_cD_[10],
      basename$2=_cD_[11],
      dirname$2=_cD_[12];
    function concat$3(dirname,filename)
     {var l=caml_ml_string_length(dirname);
      if(0 !== l && ! is_dir_sep$1(dirname,l - 1 | 0))
       return symbol(dirname,symbol(dir_sep$2,filename));
      return symbol(dirname,filename)}
    function chop_suffix(name,suff)
     {var n=caml_ml_string_length(name) - caml_ml_string_length(suff) | 0;
      return 0 <= n?sub$0(name,0,n):invalid_arg(cst_Filename_chop_suffix)}
    function extension_len(name)
     {var i$4=caml_ml_string_length(name) - 1 | 0,i$1=i$4;
      for(;;)
       {if(0 <= i$1 && ! is_dir_sep$1(name,i$1))
         {if(46 === caml_string_get(name,i$1))
           {var i$2=i$1 - 1 | 0,i=i$2;
            for(;;)
             {if(0 <= i && ! is_dir_sep$1(name,i))
               {if(46 === caml_string_get(name,i))
                 {var i$0=i - 1 | 0,i=i$0;continue}
                return caml_ml_string_length(name) - i$1 | 0}
              return 0}}
          var i$3=i$1 - 1 | 0,i$1=i$3;
          continue}
        return 0}}
    function extension(name)
     {var l=extension_len(name);
      return 0 === l?cst$110:sub$0(name,caml_ml_string_length(name) - l | 0,l)}
    function chop_extension(name)
     {var l=extension_len(name);
      return 0 === l
              ?invalid_arg(cst_Filename_chop_extension)
              :sub$0(name,0,caml_ml_string_length(name) - l | 0)}
    function remove_extension(name)
     {var l=extension_len(name);
      return 0 === l?name:sub$0(name,0,caml_ml_string_length(name) - l | 0)}
    var prng$0=[246,function(_dh_){return caml_call1(_b1_[2],0)}];
    function temp_file_name(temp_dir,prefix,suffix)
     {var
       _df_=caml_obj_tag(prng$0),
       _dg_=
        250 === _df_?prng$0[1]:246 === _df_?force_lazy_block(prng$0):prng$0,
       rnd=caml_call1(_b1_[4],_dg_) & 16777215;
      return concat$3(temp_dir,caml_call3(sprintf(_cz_),prefix,rnd,suffix))}
    var current_temp_dir_name=[0,temp_dir_name$0];
    function set_temp_dir_name(s){current_temp_dir_name[1] = s;return 0}
    function get_temp_dir_name(param){return current_temp_dir_name[1]}
    function temp_file(opt,prefix,suffix)
     {if(opt)
       var sth=opt[1],temp_dir=sth;
      else
       var temp_dir=current_temp_dir_name[1];
      function try_name(counter)
       {var counter$0=counter;
        for(;;)
         {var name=temp_file_name(temp_dir,prefix,suffix);
          try
           {runtime.caml_sys_close(caml_sys_open(name,_cA_,384));return name}
          catch(e)
           {e = caml_wrap_exception(e);
            if(e[1] === Sys_error)
             {if(1000 <= counter$0)throw e;
              var counter$1=counter$0 + 1 | 0,counter$0=counter$1;
              continue}
            throw e}}}
      return try_name(0)}
    function open_temp_file(opt,_dd_,_dc_,prefix,suffix)
     {if(opt)var sth=opt[1],mode=sth;else var mode=_cB_;
      if(_dd_)var sth$0=_dd_[1],perms=sth$0;else var perms=384;
      if(_dc_)
       var sth$1=_dc_[1],temp_dir=sth$1;
      else
       var temp_dir=current_temp_dir_name[1];
      function try_name(counter)
       {var counter$0=counter;
        for(;;)
         {var name=temp_file_name(temp_dir,prefix,suffix);
          try
           {var _de_=[0,name,open_out_gen([0,1,[0,3,[0,5,mode]]],perms,name)];
            return _de_}
          catch(e)
           {e = caml_wrap_exception(e);
            if(e[1] === Sys_error)
             {if(1000 <= counter$0)throw e;
              var counter$1=counter$0 + 1 | 0,counter$0=counter$1;
              continue}
            throw e}}}
      return try_name(0)}
    var
     Stdlib_filename=
      [0,
       current_dir_name$2,
       parent_dir_name$2,
       dir_sep$2,
       concat$3,
       is_relative$1,
       is_implicit$1,
       check_suffix$1,
       chop_suffix,
       chop_suffix_opt$1,
       extension,
       remove_extension,
       chop_extension,
       basename$2,
       dirname$2,
       temp_file,
       open_temp_file,
       get_temp_dir_name,
       set_temp_dir_name,
       temp_dir_name$0,
       quote$1];
    caml_register_global(768,Stdlib_filename,"Stdlib__filename");
    function add$1(x,y){return [254,x[1] + y[1],x[2] + y[2]]}
    function sub$4(x,y){return [254,x[1] - y[1],x[2] - y[2]]}
    function neg(x){return [254,- x[1],- x[2]]}
    function conj(x){return [254,x[1],- x[2]]}
    function mul(x,y)
     {return [254,x[1] * y[1] - x[2] * y[2],x[1] * y[2] + x[2] * y[1]]}
    function div(x,y)
     {if(Math.abs(y[2]) <= Math.abs(y[1]))
       {var r=y[2] / y[1],d=y[1] + r * y[2];
        return [254,(x[1] + r * x[2]) / d,(x[2] - r * x[1]) / d]}
      var r$0=y[1] / y[2],d$0=y[2] + r$0 * y[1];
      return [254,(r$0 * x[1] + x[2]) / d$0,(r$0 * x[2] - x[1]) / d$0]}
    function inv(x){return div(one$4,x)}
    function norm2(x){return x[1] * x[1] + x[2] * x[2]}
    function norm(x)
     {var r=Math.abs(x[1]),i=Math.abs(x[2]);
      if(r == 0.)return i;
      if(i == 0.)return r;
      if(i <= r){var q=i / r;return r * Math.sqrt(1. + q * q)}
      var q$0=r / i;
      return i * Math.sqrt(1. + q$0 * q$0)}
    function arg(x){return Math.atan2(x[2],x[1])}
    function polar(n,a){return [254,Math.cos(a) * n,Math.sin(a) * n]}
    function sqrt(x)
     {if(x[1] == 0. && x[2] == 0.)return _cC_;
      var r=Math.abs(x[1]),i=Math.abs(x[2]);
      if(i <= r)
       var
        q=i / r,
        w=Math.sqrt(r) * Math.sqrt(0.5 * (1. + Math.sqrt(1. + q * q)));
      else
       var
        q$0=r / i,
        w=Math.sqrt(i) * Math.sqrt(0.5 * (q$0 + Math.sqrt(1. + q$0 * q$0)));
      if(0. <= x[1])return [254,w,0.5 * x[2] / w];
      var w$0=0. <= x[2]?w:- w;
      return [254,0.5 * i / w,w$0]}
    function exp(x)
     {var e=Math.exp(x[1]);return [254,e * Math.cos(x[2]),e * Math.sin(x[2])]}
    function log(x)
     {var _db_=Math.atan2(x[2],x[1]);return [254,Math.log(norm(x)),_db_]}
    function pow(x,y){return exp(mul(y,log(x)))}
    var
     Stdlib_complex=
      [0,
       zero$4,
       one$4,
       i,
       neg,
       conj,
       add$1,
       sub$4,
       mul,
       inv,
       div,
       sqrt,
       norm2,
       norm,
       arg,
       polar,
       exp,
       log,
       pow];
    caml_register_global(769,Stdlib_complex,"Stdlib__complex");
    var
     Stdlib_arrayLabels=
      [0,
       init$2,
       create_matrix,
       create_matrix,
       append$0,
       concat$1,
       sub$1,
       copy$1,
       fill$0,
       blit$1,
       to_list$1,
       of_list,
       iter$5,
       map$5,
       iteri$2,
       mapi$2,
       fold_left$1,
       fold_right$0,
       iter2$0,
       map2$0,
       exists$0,
       for_all$0,
       mem$0,
       memq$0,
       make_float,
       sort,
       fast_sort$0,
       fast_sort$0,
       to_seq$4,
       to_seqi$1,
       of_seq$2,
       Floatarray];
    caml_register_global(770,Stdlib_arrayLabels,"Stdlib__arrayLabels");
    var
     Stdlib_listLabels=
      [0,
       length,
       hd,
       compare_lengths,
       compare_length_with,
       cons,
       tl,
       nth,
       nth_opt,
       rev,
       init,
       append,
       rev_append,
       flatten,
       flatten,
       iter$2,
       iteri,
       map$2,
       mapi,
       rev_map,
       filter_map$0,
       fold_left$0,
       fold_right,
       iter2,
       map2,
       rev_map2,
       fold_left2,
       fold_right2,
       for_all,
       exists,
       for_all2,
       exists2,
       mem,
       memq,
       find,
       find_opt,
       find_all,
       find_all,
       partition,
       assoc,
       assoc_opt,
       assq,
       assq_opt,
       mem_assoc,
       mem_assq,
       remove_assoc,
       remove_assq,
       split,
       combine,
       fast_sort,
       fast_sort,
       fast_sort,
       sort_uniq,
       merge,
       to_seq$1,
       of_seq];
    caml_register_global(771,Stdlib_listLabels,"Stdlib__listLabels");
    var
     Stdlib_bytesLabels=
      [0,
       make,
       init$0,
       empty$0,
       copy,
       of_string,
       to_string$1,
       sub,
       sub_string,
       extend,
       fill,
       blit,
       blit$0,
       concat,
       cat,
       iter$3,
       iteri$0,
       map$3,
       mapi$0,
       trim,
       escaped$0,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase$0,
       lowercase$0,
       capitalize,
       uncapitalize,
       uppercase_ascii$0,
       lowercase_ascii$0,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$4,
       equal$4,
       to_seq$2,
       to_seqi,
       of_seq$0,
       get_uint8,
       get_int8,
       get_uint16_ne,
       get_uint16_be,
       get_uint16_le,
       get_int16_ne,
       get_int16_be,
       get_int16_le,
       get_int32_ne,
       get_int32_be,
       get_int32_le,
       get_int64_ne,
       get_int64_be,
       get_int64_le,
       set_uint8,
       set_int8,
       set_uint16_ne,
       set_int16_be,
       set_int16_le,
       set_int16_ne,
       set_int16_be,
       set_int16_le,
       set_int32_ne,
       set_int32_be,
       set_int32_le,
       set_int64_ne,
       set_int64_be,
       set_int64_le,
       unsafe_to_string,
       unsafe_of_string];
    caml_register_global(772,Stdlib_bytesLabels,"Stdlib__bytesLabels");
    var
     Stdlib_stringLabels=
      [0,
       make$0,
       init$1,
       copy$0,
       sub$0,
       fill,
       blit$0,
       concat$0,
       iter$4,
       iteri$1,
       map$4,
       mapi$1,
       trim$0,
       escaped$1,
       index$0,
       index_opt$0,
       rindex$0,
       rindex_opt$0,
       index_from$0,
       index_from_opt$0,
       rindex_from$0,
       rindex_from_opt$0,
       contains$0,
       contains_from$0,
       rcontains_from$0,
       uppercase$1,
       lowercase$1,
       capitalize$0,
       uncapitalize$0,
       uppercase_ascii$1,
       lowercase_ascii$1,
       capitalize_ascii$0,
       uncapitalize_ascii$0,
       compare$5,
       equal$5,
       split_on_char,
       to_seq$3,
       to_seqi$0,
       of_seq$1];
    caml_register_global(773,Stdlib_stringLabels,"Stdlib__stringLabels");
    var Stdlib_moreLabels=[0,Stdlib_hashtbl,Stdlib_map,Stdlib_set];
    caml_register_global(774,Stdlib_moreLabels,"Stdlib__moreLabels");
    var Stdlib_stdLabels=[0];
    caml_register_global(775,Stdlib_stdLabels,"Stdlib__stdLabels");
    var enabled=caml_spacetime_enabled(0);
    function if_spacetime_enabled(f){return enabled?caml_call1(f,0):0}
    function create$8(path)
     {if(caml_spacetime_enabled(0))
       {var channel=open_out(path),t=[0,channel,0];
        caml_spacetime_only_works_for_(t[1]);
        return t}
      return [0,stdout,1]}
    function save_event(time,t,event_name)
     {return if_spacetime_enabled
              (function(param)
                {return caml_spacetime_only_works_for_(time,t[1],event_name)})}
    function save_and_close(time,t)
     {return if_spacetime_enabled
              (function(param)
                {if(t[2])failwith(cst_Series_is_closed);
                 caml_spacetime_only_works_for_(time,t[1]);
                 close_out(t[1]);
                 t[2] = 1;
                 return 0})}
    var Series=[0,create$8,save_event,save_and_close];
    function take$0(time,param)
     {var channel=param[1],closed=param[2];
      return if_spacetime_enabled
              (function(param)
                {if(closed)failwith(cst_Series_is_closed$0);
                 runtime.caml_gc_minor(0);
                 return caml_spacetime_only_works_for_(time,channel)})}
    var Snapshot=[0,take$0];
    function save_event_for_automatic_snaps(event_name)
     {return if_spacetime_enabled
              (function(param)
                {return caml_spacetime_only_works_for_(event_name)})}
    var
     Stdlib_spacetime=
      [0,enabled,Series,Snapshot,save_event_for_automatic_snaps];
    caml_register_global(776,Stdlib_spacetime,"Stdlib__spacetime");
    var
     float32=0,
     float64=1,
     int8_signed=2,
     int8_unsigned=3,
     int16_signed=4,
     int16_unsigned=5,
     int32$1=6,
     int64$1=7,
     int$2=8,
     nativeint$1=9,
     complex32=10,
     complex64=11,
     char$0=12;
    function kind_size_in_bytes(param)
     {switch(param)
       {case 0:return 4;
        case 1:return 8;
        case 2:return 1;
        case 3:return 1;
        case 4:return 2;
        case 5:return 2;
        case 6:return 4;
        case 7:return 8;
        case 8:return 4;
        case 9:return 4;
        case 10:return 8;
        case 11:return 16;
        default:return 1}}
    var c_layout=0,fortran_layout=1;
    function dims(a)
     {var n=caml_ba_num_dims(a),d=caml_make_vect(n,0),_c__=n - 1 | 0,_c9_=0;
      if(! (_c__ < 0))
       {var i=_c9_;
        for(;;)
         {var _c$_=runtime.caml_ba_dim(a,i);
          caml_check_bound(d,i)[1 + i] = _c$_;
          var _da_=i + 1 | 0;
          if(_c__ !== i){var i=_da_;continue}
          break}}
      return d}
    function size_in_bytes(arr)
     {var _c8_=fold_left$1(caml_mul,1,dims(arr));
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_c8_)}
    var Genarray=[0,dims,size_in_bytes];
    function create$9(kind,layout){return caml_ba_create(kind,layout,[0])}
    function get$1(arr){return runtime.caml_ba_get_generic(arr,[0])}
    function set$0(arr)
     {var _c6_=[0];
      return function(_c7_){return runtime.caml_ba_set_generic(arr,_c6_,_c7_)}}
    function size_in_bytes$0(arr)
     {return kind_size_in_bytes(caml_ba_kind(arr))}
    function of_value(kind,layout,v)
     {var a=create$9(kind,layout);caml_call1(set$0(a),v);return a}
    function create$10(kind,layout,dim)
     {return caml_ba_create(kind,layout,[0,dim])}
    function size_in_bytes$1(arr)
     {var _c5_=caml_ba_dim_1(arr);
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_c5_)}
    function slice(a,n)
     {var match=runtime.caml_ba_layout(a);
      return 0 === match?caml_ba_slice(a,[0,n]):caml_ba_slice(a,[0,n])}
    function of_array(kind,layout,data)
     {var
       ba=create$10(kind,layout,data.length - 1),
       ofs=0 === layout?0:1,
       _c3_=data.length - 1 - 1 | 0,
       _c2_=0;
      if(! (_c3_ < 0))
       {var i=_c2_;
        for(;;)
         {runtime.caml_ba_set_1
           (ba,i + ofs | 0,caml_check_bound(data,i)[1 + i]);
          var _c4_=i + 1 | 0;
          if(_c3_ !== i){var i=_c4_;continue}
          break}}
      return ba}
    function create$11(kind,layout,dim1,dim2)
     {return caml_ba_create(kind,layout,[0,dim1,dim2])}
    function size_in_bytes$2(arr)
     {var _c0_=caml_ba_dim_2(arr),_c1_=caml_ba_dim_1(arr);
      return caml_mul
              (caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_c1_),_c0_)}
    function slice_left(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right(a,n){return caml_ba_slice(a,[0,n])}
    function of_array$0(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       ba=create$11(kind,layout,dim1,dim2),
       ofs=0 === layout?0:1,
       _cV_=dim1 - 1 | 0,
       _cU_=0;
      if(! (_cV_ < 0))
       {var i=_cU_;
        for(;;)
         {var row=caml_check_bound(data,i)[1 + i];
          if(row.length - 1 !== dim2)
           invalid_arg(cst_Bigarray_Array2_of_array_n);
          var _cX_=dim2 - 1 | 0,_cW_=0;
          if(! (_cX_ < 0))
           {var j=_cW_;
            for(;;)
             {runtime.caml_ba_set_2
               (ba,i + ofs | 0,j + ofs | 0,caml_check_bound(row,j)[1 + j]);
              var _cZ_=j + 1 | 0;
              if(_cX_ !== j){var j=_cZ_;continue}
              break}}
          var _cY_=i + 1 | 0;
          if(_cV_ !== i){var i=_cY_;continue}
          break}}
      return ba}
    function create$12(kind,layout,dim1,dim2,dim3)
     {return caml_ba_create(kind,layout,[0,dim1,dim2,dim3])}
    function size_in_bytes$3(arr)
     {var
       _cR_=runtime.caml_ba_dim_3(arr),
       _cS_=caml_ba_dim_2(arr),
       _cT_=caml_ba_dim_1(arr);
      return caml_mul
              (caml_mul
                (caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_cT_),_cS_),
               _cR_)}
    function slice_left_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_right_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_left_2(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right_2(a,n){return caml_ba_slice(a,[0,n])}
    function of_array$1(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       dim3=
        0 === dim2
         ?0
         :caml_check_bound(caml_check_bound(data,0)[1],0)[1].length - 1,
       ba=create$12(kind,layout,dim1,dim2,dim3),
       ofs=0 === layout?0:1,
       _cJ_=dim1 - 1 | 0,
       _cI_=0;
      if(! (_cJ_ < 0))
       {var i=_cI_;
        for(;;)
         {var row=caml_check_bound(data,i)[1 + i];
          if(row.length - 1 !== dim2)
           invalid_arg(cst_Bigarray_Array3_of_array_n);
          var _cL_=dim2 - 1 | 0,_cK_=0;
          if(! (_cL_ < 0))
           {var j=_cK_;
            for(;;)
             {var col=caml_check_bound(row,j)[1 + j];
              if(col.length - 1 !== dim3)
               invalid_arg(cst_Bigarray_Array3_of_array_n$0);
              var _cO_=dim3 - 1 | 0,_cN_=0;
              if(! (_cO_ < 0))
               {var k=_cN_;
                for(;;)
                 {runtime.caml_ba_set_3
                   (ba,
                    i + ofs | 0,
                    j + ofs | 0,
                    k + ofs | 0,
                    caml_check_bound(col,k)[1 + k]);
                  var _cQ_=k + 1 | 0;
                  if(_cO_ !== k){var k=_cQ_;continue}
                  break}}
              var _cP_=j + 1 | 0;
              if(_cL_ !== j){var j=_cP_;continue}
              break}}
          var _cM_=i + 1 | 0;
          if(_cJ_ !== i){var i=_cM_;continue}
          break}}
      return ba}
    function array0_of_genarray(a)
     {return 0 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array0_of_genarra)}
    function array1_of_genarray(a)
     {return 1 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array1_of_genarra)}
    function array2_of_genarray(a)
     {return 2 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array2_of_genarra)}
    function array3_of_genarray(a)
     {return 3 === caml_ba_num_dims(a)
              ?a
              :invalid_arg(cst_Bigarray_array3_of_genarra)}
    function reshape_0(a){return caml_ba_reshape(a,[0])}
    function reshape_1(a,dim1){return caml_ba_reshape(a,[0,dim1])}
    function reshape_2(a,dim1,dim2){return caml_ba_reshape(a,[0,dim1,dim2])}
    function reshape_3(a,dim1,dim2,dim3)
     {return caml_ba_reshape(a,[0,dim1,dim2,dim3])}
    var
     Stdlib_bigarray=
      [0,
       float32,
       float64,
       complex32,
       complex64,
       int8_signed,
       int8_unsigned,
       int16_signed,
       int16_unsigned,
       int$2,
       int32$1,
       int64$1,
       nativeint$1,
       char$0,
       kind_size_in_bytes,
       c_layout,
       fortran_layout,
       Genarray,
       [0,create$9,caml_ba_change_layout,size_in_bytes$0,get$1,set$0,of_value],
       [0,create$10,caml_ba_change_layout,size_in_bytes$1,slice,of_array],
       [0,
        create$11,
        caml_ba_change_layout,
        size_in_bytes$2,
        slice_left,
        slice_right,
        of_array$0],
       [0,
        create$12,
        caml_ba_change_layout,
        size_in_bytes$3,
        slice_left_1,
        slice_right_1,
        slice_left_2,
        slice_right_2,
        of_array$1],
       array0_of_genarray,
       array1_of_genarray,
       array2_of_genarray,
       array3_of_genarray,
       caml_ba_reshape,
       reshape_0,
       reshape_1,
       reshape_2,
       reshape_3];
    caml_register_global(777,Stdlib_bigarray,"Stdlib__bigarray");
    return}
  (function(){return this}()));
