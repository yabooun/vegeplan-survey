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
        window.showNext($(this).data('index'), elem.attr('name'));
    });

    // 星
    $('.star-range-group').each(function() {
        for (var i = 0; i < 5; i ++) {
            $(this).append('<a>');
        }
    });
    function starSetting(index) {
        $('.star-range-group > a').removeClass('on');
        for (var i = 0; i < index; i++) {
            $('.star-range-group').find('a').eq(i).addClass('on'); 
        }
        $('.star-input-range').attr('value', index);
    }
    $('.star-range-group>a').on('click', function() { starSetting($(this).index()); });
    starSetting(0 + $('.input-star-range').val());

    // 非表示にする
    var count = window.vegeplan.survey.count;
    for (i = 1;i <= count; i ++) {
        $('.question-' + i).css('display', 'none');
    }

    function indexMigration() {
        var minus = 0;
        $('.question-duration').each(function() {
            var defaultIndex = 0 + $(this).data('index');
            var nowIndex = (defaultIndex - minus);
            $(this).text(nowIndex + ' / ' + window.vegeplan.duration);
            $('.title-count-' + defaultIndex).text(nowIndex);
            if (window.vegeplan.skippable.indexOf(defaultIndex) >= 0) {
                minus++;
            }
        });
    }

    window.showNext = function (index, content) {
        if (index == 1) {
            if (content == '初めて') {
                window.vegeplan.skip = true;
                window.vegeplan.duration -= window.vegeplan.skippableCount;
                indexMigration();
            } else {
                window.vegeplan.skip = false;
            }
        }
        $('.question-' + index).css('display', 'none');
        if (window.vegeplan.skip && window.vegeplan.skippable.indexOf(index) >= 0) {
            window.showNext(index + 1);
            return;
        }
        $('.question-' + (index + 1)).css('display', 'block');
    };

    window.showNext(0);
});
