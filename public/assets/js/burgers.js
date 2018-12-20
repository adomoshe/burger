
$(function() {
    $(".change-devour").on("click", function(event) {
      const id = $(this).data("id");
      const currentValue = $(this).data("devour");
      const newDevour = { devour: currentValue };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $("#burger-submit").on("click", function(event) {
      event.preventDefault();
      const burger = $('#new-burger').val().trim();
      const newBurger = { newBurger: burger};
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  