$(document).ready(function() {
    // When the user clicks on "X" button, close the modal
    $(".modal .close").on("click", function() {
        $(this).closest(".modal").hide();
    });
  
    // When the user clicks anywhere outside of the modal, close it
    $(window).on("click", function(e) {
        if ($(e.target).hasClass("modal")) {
            e.stopPropagation();
            $(e.target).hide();
        }
    });

    $(".modal").mousedown(function(e) {
        e.stopPropagation();
    });
});