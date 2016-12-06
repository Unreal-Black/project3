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
        $.getJSON('https://swapi.co/api/people/' + $number,
        function(data) {
          $chars.empty();
          $chars.append('<li> Name: ' + data.name + '</li>');
          $chars.append('<li> Birth year: ' + data.birth_year + '</li>');
          $chars.append('<li> Height: ' + data.height + ' cm </li>');
          $chars.append('<li> Weight: ' + data.weight + ' kg </li>');
          $chars.append('<li> Gender: ' + data.gender + '</li>');
          $chars.append('<li> Hair color: ' + data.hair_color + '</li>');
          $chars.append('<li> Skin color: ' + data.skin_color +'</li>');
          $chars.append('<li> Eye color: ' + data.eye_color + '</li>');

        });
      });
    });
  }
);
})(jQuery);
