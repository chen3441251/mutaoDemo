(function($){
    'use strict'
    function dropdown(element){
        var $element=$(element);
       var dropdown_active= $element.data('active')+'_active'
        $element.hover(function(){
                     var $this=$(this);
                     $this.addClass(dropdown_active);
                },function(){
                     var $this=$(this);
                 $this.removeClass(dropdown_active);
                         });
             }
             /* 
             JQ插件使用
             由于.dropdown可能有多个，需要使用遍历方式来执行逻辑
             */
             $.fn.extend({
                 dropdown:function(){
                     return this.each(function(){
                         //此this非上面的this
                         dropdown(this);
                     })
                 }
             })
})(jQuery);