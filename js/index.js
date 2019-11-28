// $('.dropdown').hover(function(){
//     var $dropdown=$(this);
//     /* 切换按钮背景 */
//     $dropdown.find('.dropdown_toggle').css({"background-color":'#fff','border-color':'#cdd0d4'});
//     /* 切换箭头背景 */
//     $dropdown.find('.dropdown_arrow').css({'background-image':'url(img/dropdown-arrow-active.png)'});
//     /* 下拉菜单显示 */
//     $dropdown.find('.dropdown_layer').show();
// },function(){
//     var $dropdown=$(this);
//     /* 切换按钮背景 */
//     $dropdown.find('.dropdown_toggle').css({"background-color":'','border-color':'#f3f5f7'});
//     /* 切换箭头背景 */
//     $dropdown.find('.dropdown_arrow').css({'background-image':'url(img/dropdown-arrow.png)'});
//     /* 下拉菜单显示 */
//     $dropdown.find('.dropdown_layer').hide();
// })
$('.dropdown').hover(function(){
    $(this).addClass('dropdown_active');
},function(){
    $(this).removeClass('dropdown_active');
});