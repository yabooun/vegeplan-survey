$(function(){
    var screenSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    $('.cell1')
        .css('width', screenSize.width + 'px')
        .css('height', (screenSize.height * 0.1) + 'px');
    $('.cell2')
        .css('width', screenSize.width + 'px')
        .css('height', (screenSize.height * 0.2) + 'px');
    $('.cell3')
        .css('width', screenSize.width + 'px')
        .css('height', (screenSize.height * 0.2) + 'px');
    $('.cell4')
        .css('width', screenSize.width + 'px')
        .css('height', (screenSize.height * 0.3) + 'px');
    
    $('.start-button').click(function() {
        location.href = "/survey/consumer";
    });
});
