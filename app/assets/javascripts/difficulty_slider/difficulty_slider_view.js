ReddyReader.DifficultySliderView = function(difficultyModalSelector) {
  this.$difficultyModal = $(difficultyModalSelector);
  this.$difficultySlider = this.$difficultyModal.find("#difficulty_slider");
  this.DEFAULT_DIFFICULTY = 3;
  this.showDifficultyImage(this.DEFAULT_DIFFICULTY);
}

ReddyReader.DifficultySliderView.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
    this.$difficultySlider.slider();
    this.$difficultySlider.on("slide", this.handleSliderMove.bind(this));
    this.$difficultyModal.find("#difficulty_done").on("click", this.handleDoneClick.bind(this));
    this.$difficultyModal.find("#difficulty_unknown").on("click", this.handleUnknownClick.bind(this));
  },

  showModal: function() {
    this.$difficultyModal.modal({show: true, keyboard: false, backdrop: 'static'});
  },

  hideModal: function() {
    this.$difficultyModal.modal("hide");
  },

  handleSliderMove: function(slideEvt) {
    this.showDifficultyImage(slideEvt.value);
  },

  showDifficultyImage: function(index) {
    $("#difficulty_images img").hide();
    $("#difficulty_images img:nth-child(" + index + ")").show();
  },

  handleDoneClick: function() {
    this.controller.sendDifficulty(this.getDifficulty());
    this.hideModal();
  },

  handleUnknownClick: function() {
    this.controller.sendDifficulty(this.DEFAULT_DIFFICULTY);
    this.hideModal();
  },

  getDifficulty: function() {
    return parseInt(this.$difficultySlider.val());
  }
}
