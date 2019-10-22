// $(document).ready(function()  {
//   $("button#dark").click(function() {
//     $("body").addClass("dark1");
//   });
// });

$(document).ready(function(){

  $("button#dark").click(function() {
      $("body").removeClass();
      $("body").addClass("dark1");
    });

  $("button#light").click(function()  {
    $("body").removeClass();
    $("body").addClass("light1");
  });

  $("div.toHighlight").click(function(){
    $("div.toHighlight").addClass("highlight");
  });

});
