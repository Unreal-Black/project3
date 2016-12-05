$.noConflict();
(function($){
  $(document).ready(function() {
    function generate() {
      $number = 1 + Math.floor(Math.random() * 87);
    }
    setInterval(generate,1000);
  }
);
})(jQuery);
