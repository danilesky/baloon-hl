jQuery(document).ready(function ($) {

    //HL intro
    if(JSON.parse(sessionStorage.getItem('introPlayed'))== 1){
        $('.hl_intro_overlay').hide()
    }
    var words = $('.hl_intro_word').data('words').split(",")
    let count = 1 
    $('.hl_intro_word').text(words[0])
    setInterval(() => {
        $('.hl_intro_word').text(words[count])
        count++
        if(count>3){
            $('.hl_intro_overlay').fadeOut(1000)
        }
    }, 1000);
    sessionStorage.setItem('introPlayed' , 1);
});
