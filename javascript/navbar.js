$(document).ready(function() {   
 $('.logoCentre').fadeIn(4000);

$("#menuToggle").click(function() {
    $("#blackishBackground").toggle();
});
    
(function() {

    var quotes = $(".textePresentation");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2500)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();
    
});