$.noConflict();
(function($){
  $(document).ready(function() {
    var $chars = $('#character');
    function generate() {
      $number = 1 + Math.floor(Math.random() * 87);
    }
    setInterval(generate,1000);

    $(function(){
      $("#random").click(function(){
        $.getJSON('http://swapi.co/api/people/' + $number,
        function(data) {
          $chars.empty();
          $chars.append('<li> Name: ' + data.name + '</li>');
        });
      });
    });
  }
);
})(jQuery);
