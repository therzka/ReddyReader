var ReddyReader = {};

$(document).ready(function(){
  var chartWidgets = [new ReddyReader.Bestsellers("#chart_area", "bestsellers_chart")];

  // create page widgets
  var randomBookCarousel = new ReddyReader.BookCarousel('#random_books_carousel', $('#random_book_template').html());
  var userBooksCarousel = new ReddyReader.BookCarousel('#user_books_carousel', $('#user_book_template').html());
  var userBooksGrabber = new ReddyReader.UserBooksGrabber(userBooksCarousel);

  var testResults = new ReddyReader.TestResults('#resultsarea', chartWidgets);
  var randomBooksGrabber = new ReddyReader.RandomBooksGrabber(randomBookCarousel);
  var speedTester = new ReddyReader.SpeedTester('#speedtest', testResults, randomBooksGrabber);
  var difficultySlider = new ReddyReader.DifficultySlider('#difficulty_modal', speedTester)
  var bookSearchCarousel = new ReddyReader.BookCarousel('#search_results_carousel', $('#search_book_template').html(), difficultySlider)
  var searchField = new ReddyReader.SearchField('#searchfield', bookSearchCarousel);
  new ReddyReader.LoginFormValidator("#login_form");
  new ReddyReader.RegisterFormValidator("#register_form");
  
  new ReddyReader.WPMHistoryChart('WPMHistoryChart');


  $('#logo').click(function(){
    document.location.reload(true);
  });
});
