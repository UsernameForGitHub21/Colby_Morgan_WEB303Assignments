/*
    assignment #6
*/

$(document).ready(function () {

});

$('.accordion').on('click', '.accordian-control', function(e) {
    e.preventDefault();
    $(this).nect('accordion-panel').not(':animated').slideToggle();
});

$('.tab-list').each(function() {
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.fin('a');
    var $panel = $($link.attr('href'));
    $this.on('click', '.tab-control', function(e) {
        e.preventDefault();
        var $link = $(this);
        var id = this.hash;

        if(id && !$link.parent().is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');
            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    })
});