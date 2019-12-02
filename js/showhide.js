var slient={
    init:function($element){
        if($element.is(':hidden')){//隐藏状态
            $element.data('status','hidden');    
        }else{//显示状态
            $element.data('status','shown');
        }
    },
    show:function($element){
        if($element.data('status')==='show')return;
        if($element.data('status')==='shown')return;
        //通过发布订阅
        $element.data('status','show').trigger('show');
        $element.show();
        $element.data('status','shown').trigger('shown');
    },
    hide:function($element){
        if($element.data('status')==='hide')return;
        if($element.data('status')==='hidden')return;
        $element.data('status','hide').trigger('hide');
        $element.hide();
        $element.data('status','hidden').trigger('hidden');

    }
   }
var css3={
    //淡入淡出
    fade:{
        init:function($element){
            if($element.is(':hidden')){//隐藏状态
                $element.data('status','hidden');    
            }else{//显示状态
                $element.data('status','shown');
            }
        },
        show:function($element){
            console.log('showbefore'+$element.data('status'));
            //防止重复点击
            if($element.data('status')==='show')return;
            if($element.data('status')==='shown')return;
        //通过发布订阅
        $element.data('status','show').trigger('show');
            $element.one('transitionend',function(){
                $element.data('status','shown').trigger('shown');
            });
            $element.show();
            setTimeout(function(){
                $element.removeClass('fadeOut');
            },20);
            console.log('showafter'+$element.data('status'));
        },
        hide:function($element){
            console.log('hidebefore'+$element.data('status'));
            //防止重复点击
            if($element.data('status')==='hide')return;
            if($element.data('status')==='hidden')return;
            $element.data('status','hide').trigger('hide');
            $element.one('transitionend',function(){
                $element.hide();
                $element.data('status','hidden').trigger('hidden');
            });
           
            $element.addClass('fadeOut');
            console.log('hideafter'+$element.data('status'));
        }
    },
    //上下卷帘
    slideUpDown:{
        show:function($element){
            
            },
        hide:function(){
           
            }
    },
    //左右卷帘
    slideLeftRight:{
        show:function(){

        },
        hide:function(){

        }
    },
    //上下淡入淡出
    fadeUpDown:{
        show:function(){

            },
            hide:function(){

            }
    },
    //左右淡入淡出
    fadeLeftRight:{
        show:function(){

        },
        hide:function(){

        }
    }
   }
   var js={
    //淡入淡出
    fade:{
        show:function(){

        },
        hide:function(){

        }
    },
    //上下卷帘
    slideUpDown:{
        show:function(){

            },
            hide:function(){

            }
    },
    //左右卷帘
    slideLeftRight:{
        show:function(){

        },
        hide:function(){

        }
    },
    //上下淡入淡出
    fadeUpDown:{
        show:function(){

            },
            hide:function(){

            }
    },
    //左右淡入淡出
    fadeLeftRight:{
        show:function(){

        },
        hide:function(){

        }
    }
   }
     