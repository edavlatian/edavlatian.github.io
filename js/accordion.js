/* From here 
    https://stackoverflow.com/questions/10918801/twitter-bootstrap-adding-a-class-to-the-open-accordion-title/37120600#37120600
*/
$(document).ready(function() {
    $('#accordion')
    .on('show.bs.collapse', function (e) {
        $(e.target).parent('.panel').addClass('panel-primary');
    })
    .on('hide.bs.collapse', function (e) {
        $(e.target).parent('.panel').removeClass('panel-primary');
    });
});