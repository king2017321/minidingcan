$(function(){
    $('.mui-switch').each(function(i){
        if($(this).attr('data-switch')=='1'){
            $(this).addClass('mui-active');
            $(this).find('.mui-switch-handle').css('left','43px');
        }
    });

    $('.mui-switch').click(function(){
        if($(this).hasClass('mui-active')){
            //关闭
            $(this).removeClass('mui-active');
            $(this).find('.mui-switch-handle').css('left','1px');
            $(this).next('input').val(0);
        }else{
            //开启
            $(this).addClass('mui-active');
            $(this).find('.mui-switch-handle').css('left','43px');
            $(this).next('input').val(1);
        }
    });
});
