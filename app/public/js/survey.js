$(function(){
    var screenSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    $('.question')
        .css('width', screenSize.width + 'px')
        .css('height', screenSize.height + 'px');
    $('.question-cell')
        .css('width', screenSize.width + 'px')
        .css('min-width', screenSize.width + 'px')
        .css('max-width', screenSize.width + 'px');
    $('.question-answer').css('height', screenSize.height - 250);

    // ラジオボタンの制御
    $('.select-button').click(function() {
        var elem = $(this);
        $('#form-' + elem.attr('id')).val(elem.attr('name'));
        // 次のページへ
        window.showNext($(this).data('index'));
    });

    // 非表示にする
    var count = window.vegeplan.survey.count;
    for (i = 1;i <= count; i ++) {
        $('.question-' + i).css('display', 'none');
    }

    window.showNext = function (index) {
        $('.question-' + index).css('display', 'none');
        $('.question-' + (index + 1)).css('display', 'block');
    };

    window.showNext(0);
});
