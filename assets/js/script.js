$(function(){
        $('#twitter').click(function(){window.open('http://twitter.com/septerr')});
        $('#pen').click(function(){window.open('mailto:swapna.sony@gmail.com')});
        $('#linkedin').click(function(){window.open('http://www.linkedin.com/profile/view?id=53208911&trk=tab_pro')});
        $('#github').click(function(){window.open('https://github.com/septerr')});
        $('#rss').click(function(){window.open('/feed/feed.xml')});
        $('#dribbble').click(function(){
            $('#i-need-invite').fadeIn();
            window.open('http://dribbble.com/septerr')
            $('#i-need-invite').fadeOut(10000);
        });
        $('.social-icon').mouseenter(function(){
            $(this).effect('bounce', {}, 3500);
        })
    }
);