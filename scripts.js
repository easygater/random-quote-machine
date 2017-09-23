var url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';
var currentQuote = '', currentAuthor = '';

function getQuote() {
  $.ajax({
    url: url,
    cache: false,
    dataType: 'json',
    success: function(data) {
      var filtered = data[0].content;
      currentQuote = filtered.substring(3, filtered.length - 5);
      currentAuthor = data[0].title;
      $('#quote').html(currentQuote);
      $('#author').html(currentAuthor);
      $('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                        encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor));
    }
  });
}

$(document).ready(function () {
  getQuote();
  $('#btn-quote').on('click', function() { getQuote() });
});
