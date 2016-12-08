$.noConflict();
(function($){
  $(document).ready(function() {
    var $bio = $('#bio');

    function generate() {
       $number = 1 + Math.floor(Math.random() * 87);
    }
    setInterval(generate,1000);

    $('#swapi-form').on('submit', function(e) {
      var $char = $('#chars').val();
      $.getJSON('https://swapi.co/api/people/?search=' + $char,
      function(info) {
        $bio.empty();
        $bio.append('<li> Name: ' + info.results[0].name + '</li>');
        $bio.append('<li> Birth year: ' + info.results[0].birth_year + '</li>');
        $bio.append('<li> Height: ' + info.results[0].height + ' cm </li>');
        $bio.append('<li> Weight: ' + info.results[0].mass + ' kg </li>');
        $bio.append('<li> Gender: ' + info.results[0].gender + '</li>');
        $bio.append('<li> Hair color: ' + info.results[0].hair_color + '</li>');
        $bio.append('<li> Skin color: ' + info.results[0].skin_color +'</li>');
        $bio.append('<li> Eye color: ' + info.results[0].eye_color + '</li>');
      });
    });


    $(function(){
      $('#random').click(function(){
        $.getJSON('http://swapi.co/api/people/' + $number,
        function(data) {
          $bio.empty();
          $bio.append('<li> Name: ' + data.name + '</li>');
          $bio.append('<li> Birth year: ' + data.birth_year + '</li>');
          $bio.append('<li> Height: ' + data.height + ' cm </li>');
          $bio.append('<li> Weight: ' + data.mass + ' kg </li>');
          $bio.append('<li> Gender: ' + data.gender + '</li>');
          $bio.append('<li> Hair color: ' + data.hair_color + '</li>');
          $bio.append('<li> Eye color: ' + data.eye_color + '</li>');
          $bio.append('<li> Skin color: ' + data.skin_color +'</li>');
        });
      });
    });
  }
);
})(jQuery);
