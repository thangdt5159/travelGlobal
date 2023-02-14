



$(".btn").on("click", function(){
    $(".btn").toggleClass("close-btn");
    $(".menu").toggleClass("open-menu");
  });
  
  
  $(document).ready(function ()  {
  
    $(".close_").on("click", function () {
  
      var leg=$('#videoId').attr("src");
      $('#videoId').attr("src",leg);
  
          $("#play_box_").css("display", "none");
  
      });
  
    $("#metaverse").on("click", function () {
          $("#play_box_").css("display", "block")
      });
  
  });
  
  
  /***************************************
    Back top
  *****************************************/
  window.onscroll = function() {
      scrollfunction();
  }
  
  function scrollfunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("progress").style.width = scrolled + "%";
      if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
          document.getElementById("back_top").style.display = "block";
      } else {
          document.getElementById("back_top").style.display = "none";
      }
  }
  
  function backtop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  