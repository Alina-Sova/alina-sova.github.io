jQuery(document).ready(function(){
// $(".dropa").hover(function () {
//     $(".sub-menu").slideDown("slow");
// }, function(){
//     $(".sub-menu").slideUp("slow");
// });
  //  $(".dropa").mouseenter(function () {
  //         $(".sub-menu").slideDown("slow");
  //   });
  //     $(".dropa").mouseleave(function () {
  //         $(".sub-menu").slideUp("slow");
  //   });
  //  $(".seconddrop").mouseenter(function () {
  //         $(".secondsub ").slideDown("slow");
  //   });
  //     $(".seconddrop").mouseleave(function () {
  //         $(".secondsub").slideUp("slow");
  //   });
   $(".dropa").mouseenter(function () {
          $(".sub-menu").animate({
              top: 40,
              backgroundColor: "#fff",
          }, 500);

      });
      $(".dropa").mouseleave(function () {
          $(".sub-menu").animate({
              top: 25,
              backgroundColor:"#F14E66",
          }, 500)
});
      $(".subdropa").mouseenter(function () {
             $(".secondsub").animate({
                 top: 0,
                 backgroundColor: "#fff",
             }, 500);

         });

         $(".subdropa").mouseleave(function () {
             $(".secondsub").animate({
                 top: 15,
                 backgroundColor:"#F14E66",
             }, 500)
      })
});
