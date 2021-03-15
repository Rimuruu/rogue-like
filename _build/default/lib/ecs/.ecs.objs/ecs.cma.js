(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Ecs_Component_MissingCompo=
      caml_string_of_jsbytes("Ecs.Component.MissingComponent"),
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib=global_data.Stdlib,
     Ecs=[0];
    caml_register_global(2,Ecs,"Ecs");
    var
     c=[0,0],
     _a_=
      [0,
       [11,caml_string_of_jsbytes("<e:"),[4,0,0,0,[12,62,0]]],
       caml_string_of_jsbytes("<e:%d>")];
    function create(param){c[1]++;return c[1]}
    function pp(ppf,e){return caml_call3(Stdlib_format[123],ppf,_a_,e)}
    function hash(i){return i}
    function equal(a,b){return a === b?1:0}
    var
     compare=runtime.caml_compare,
     Table=caml_call1(Stdlib_hashtbl[25],[0,equal,hash]),
     Ecs_Entity=[0,create,pp,hash,equal,compare,-1,Table];
    caml_register_global(5,Ecs_Entity,"Ecs__Entity");
    var
     MissingComponent=
      [248,cst_Ecs_Component_MissingCompo,runtime.caml_fresh_oo_id(0)],
     Ecs_Component=
      [0,
       function(T)
        {var elements=caml_call1(Table[1],16);
         function set(e,v){return caml_call3(Table[10],elements,e,v)}
         function get(e)
          {try
            {var _d_=caml_call2(Table[7],elements,e);return _d_}
           catch(_e_)
            {_e_ = caml_wrap_exception(_e_);
             if(_e_ === Stdlib[8])throw [0,MissingComponent,[0,e,T[1]]];
             throw _e_}}
         function members(param)
          {var _b_=0;
           function _c_(k,v,a){return [0,[0,k,v],a]}
           return caml_call3(Table[14],_c_,elements,_b_)}
         function has_component(e){return caml_call2(Table[11],elements,e)}
         function delete$0(e){return caml_call2(Table[6],elements,e)}
         return [0,set,get,members,has_component,delete$0]},
       MissingComponent];
    caml_register_global(7,Ecs_Component,"Ecs__Component");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuZWNzLm9ianMvZWNzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJjIiwiY3JlYXRlIiwicHAiLCJwcGYiLCJlIiwiaGFzaCIsImkiLCJlcXVhbCIsImEiLCJiIiwiY29tcGFyZSIsImVsZW1lbnRzIiwic2V0IiwidiIsImdldCIsIm1lbWJlcnMiLCJrIiwiaGFzX2NvbXBvbmVudCIsImRlbGV0ZSQwIl0sInNvdXJjZXMiOlsiL2hvbWUvYW50b2luZS9QRkEvUEZBLVByb2pldC1HMTAvX2J1aWxkL2RlZmF1bHQvbGliL2Vjcy9lbnRpdHkubWwiLCIvaG9tZS9hbnRvaW5lL1BGQS9QRkEtUHJvamV0LUcxMC9fYnVpbGQvZGVmYXVsdC9saWIvZWNzL2NvbXBvbmVudC5tbCJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSVFBOzs7OzthQURGQyxjQUdBLGNBRkVELElBR0E7YUFFRkUsR0FBR0MsSUFBSUMsR0FBSSxxQ0FBUkQsUUFBSUMsRUFBaUM7YUFFeENDLEtBQUtDLEdBQUksT0FBSkEsQ0FBSzthQUVWQyxNQUFNQyxFQUFFQyxHQUFJLE9BQU5ELE1BQUVDLEtBQVU7O0tBRWxCQzs0Q0FGQUgsTUFGQUY7bUJBUkFKLE9BTUFDLEdBRUFHLEtBRUFFLE1BRUFHOzs7Ozs7OztTQ1ZGLElBREVDLFNBQ0Y7a0JBRUVDLElBQUlSLEVBQUVTLEdBQUksNEJBSFZGLFNBR0lQLEVBQUVTLEVBQXFDO1NBRjdDLFNBR0VDLElBQUlWO1dBQUk7YUFDViw0QkFMRU8sU0FJSVA7OztrQ0FHTyw2QkFIUEE7dUJBRzBDO1NBTmhELFNBUUVXO1dBQWE7d0JBQXVCQyxFQUFFSCxFQUFFTCxHQUFLLGFBQVRRLEVBQUVILEdBQUVMLEVBQWdCO1dBQTNDLGdDQVRiRyxhQVNxRTtTQVJ2RSxTQVVFTSxjQUFjYixHQUFJLDRCQVhsQk8sU0FXY1AsRUFBK0I7U0FWL0MsU0FZRWMsU0FBT2QsR0FBSSwyQkFiWE8sU0FhT1AsRUFBa0M7bUJBVnpDUSxJQUNBRSxJQUtBQyxRQUVBRSxjQUVBQzs7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgRSA9IHN0cnVjdFxuICB0eXBlIHQgPSBpbnRcblxuICBsZXQgY3JlYXRlID1cbiAgICBsZXQgYyA9IHJlZiAwIGluXG4gICAgZnVuICgpIC0+XG4gICAgICBpbmNyIGM7XG4gICAgICAhY1xuXG4gIGxldCBwcCBwcGYgZSA9IEZvcm1hdC5mcHJpbnRmIHBwZiBcIjxlOiVkPlwiIGVcblxuICBsZXQgaGFzaCBpID0gaVxuXG4gIGxldCBlcXVhbCBhIGIgPSBhID09IGJcblxuICBsZXQgY29tcGFyZSBhIGIgPSBjb21wYXJlIGEgYlxuZW5kXG5cbm1vZHVsZSBUYWJsZSA9IEhhc2h0YmwuTWFrZSAoRSlcbmluY2x1ZGUgRVxuXG5sZXQgZHVtbXkgPSAtMVxuIiwiZXhjZXB0aW9uIE1pc3NpbmdDb21wb25lbnQgb2YgKEVudGl0eS50ICogc3RyaW5nKVxuXG5tb2R1bGUgTWFrZSAoVCA6IHNpZyB0eXBlIHQgdmFsIG5hbWUgOiBzdHJpbmcgZW5kKSA9XG5zdHJ1Y3RcbiAgbGV0IGVsZW1lbnRzIDogVC50IEVudGl0eS5UYWJsZS50ID1cbiAgICBFbnRpdHkuVGFibGUuY3JlYXRlIDE2XG5cbiAgbGV0IHNldCBlIHYgPSBFbnRpdHkuVGFibGUucmVwbGFjZSBlbGVtZW50cyBlIHZcbiAgbGV0IGdldCBlID0gdHJ5XG4gICAgRW50aXR5LlRhYmxlLmZpbmQgZWxlbWVudHMgZVxuICB3aXRoXG4gICAgTm90X2ZvdW5kIC0+IHJhaXNlIChNaXNzaW5nQ29tcG9uZW50KGUsIFQubmFtZSkpXG5cbiAgbGV0IG1lbWJlcnMgKCkgPSBFbnRpdHkuVGFibGUuZm9sZCAoZnVuIGsgdiBhIC0+IChrLCB2KSA6OiBhKSBlbGVtZW50cyBbXVxuXG4gIGxldCBoYXNfY29tcG9uZW50IGUgPSBFbnRpdHkuVGFibGUubWVtIGVsZW1lbnRzIGVcblxuICBsZXQgZGVsZXRlIGUgPSBFbnRpdHkuVGFibGUucmVtb3ZlIGVsZW1lbnRzIGVcbmVuZFxuIl19
