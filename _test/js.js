var aggre = $('.sliderTop');
var items = aggre.find('.entry');
var aggreTitle;
var count = items.length;
var slide = '';
var el = null;

for (i = 0; i < count; i++) {
  el = items.eq(i);
  aggreTitle = aggre.find('.aggregator_title').text();
  href = el
    .find('h4')
    .find('a')
    .attr('href');
  title = el.find('h4').text();
  img = el.find('img').attr('src');
  description = el
    .find('.entrycontent')
    .find('p')
    .text();
  slide +=
    '' +
    '<div data-rel="#st-item-' +
    i +
    '"><a href="' +
    href +
    '"><div class="slide-item" style="background: url(' +
    img +
    ')">/><div class="inslider-wrapper"><div class="inslider-container"><p class="aggre-title">' +
    aggreTitle +
    '</p><h2>' +
    title +
    '</h2><div>' +
    description +
    '</div></div></div>' +
    '</div></a></div>';
}
console.log(aggreTitle);
// aggre.html('');
$('.slider').html(slide);

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  autoplay: true,
  swipe: false
});

$('.inslider-container').addClass('lol');
$('.slider').on('afterChange', function(event, slick, direction) {
  $('.inslider-container').addClass('lol');
});
$('.slider').on('beforeChange', function(event, slick, direction) {
  $('.inslider-container').removeClass('lol');
});
