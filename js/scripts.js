$(document).ready(function() {
  $("form.change").submit(function(event) {
    event.preventDefault();
    var selection = $('#animal').val();
    console.log(selection);
    function ohMy(selection) {
      if (selection < 5) {
        $("#lionCard").show();
        $("#tigerCard").hide();
        $("#bearCard").hide();
      }
      else if (selection === 5) {
        $("#lionCard").hide();
        $("#tigerCard").hide();
        $("#bearCard").show();
      }
      else if (selection <= 6 && selection <= 7) {
        $("#lionCard").hide();
        $("#tigerCard").show();
        $("#bearCard").hide();
      }
      else if (selection > 7) {
        $("#lionCard").hide();
        $("#tigerCard").hide();
        $("#bearCard").show();
      }
      else {
        $("#lionCard").hide();
        $("#tigerCard").hide();
        $("#bearCard").hide();
      }
    };
    ohMy(selection);
  });
});

var lion = 0;
var tiger = 0;
var bear = 0;

bear += 1;
bear = bear + 1;
