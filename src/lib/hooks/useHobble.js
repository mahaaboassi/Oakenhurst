import { useEffect } from "react";
import $ from "jquery";

function hobbleEffect() {
  $(document)
    .on("mousemove", ".td_hobble", function (event) {
      var halfW = this.clientWidth / 2;
      var halfH = this.clientHeight / 2;
      var coorX = halfW - (event.pageX - $(this).offset().left);
      var coorY = halfH - (event.pageY - $(this).offset().top);
      var degX1 = (coorY / halfH) * 8 + "deg";
      var degY1 = (coorX / halfW) * -8 + "deg";
      var degX2 = (coorY / halfH) * -50 + "px";
      var degY2 = (coorX / halfW) * 70 + "px";
      var degX3 = (coorY / halfH) * -15 + "px";
      var degY3 = (coorX / halfW) * 20 + "px";
      var degX4 = (coorY / halfH) * 15 + "deg";
      var degY4 = (coorX / halfW) * -15 + "deg";
      var degX5 = (coorY / halfH) * -20 + "px";
      var degY5 = (coorX / halfW) * 35 + "px";

      $(this)
        .find(".td_hover_layer_1")
        .css("transform", function () {
          return (
            "perspective( 800px ) translate3d( 0, 0, 0 ) rotateX(" +
            degX1 +
            ") rotateY(" +
            degY1 +
            ")"
          );
        });
      $(this)
        .find(".td_hover_layer_2")
        .css("transform", function () {
          return (
            "perspective( 800px ) translateY(" +
            degX2 +
            ") translateX(" +
            degY2 +
            ")"
          );
        });
      $(this)
        .find(".td_hover_layer_3")
        .css("transform", function () {
          return (
            "perspective( 800px ) translateX(" +
            degX3 +
            ") translateY(" +
            degY3 +
            ")"
          );
        });
      $(this)
        .find(".td_hover_layer_4")
        .css("transform", function () {
          return (
            "perspective( 800px ) translate3d( 0, 0, 0 ) rotateX(" +
            degX4 +
            ") rotateY(" +
            degY4 +
            ")"
          );
        });
      $(this)
        .find(".td_hover_layer_5")
        .css("transform", function () {
          return (
            "perspective( 800px ) translateY(" +
            degX5 +
            ") translateX(" +
            degY5 +
            ")"
          );
        });
    })
    .on("mouseout", ".td_hobble", function () {
      $(this).find(".td_hover_layer_1").removeAttr("style");
      $(this).find(".td_hover_layer_2").removeAttr("style");
      $(this).find(".td_hover_layer_3").removeAttr("style");
      $(this).find(".td_hover_layer_4").removeAttr("style");
      $(this).find(".td_hover_layer_5").removeAttr("style");
    });
}

export const useHobble = () => {
  useEffect(() => {
    try {
      hobbleEffect();
    } catch (error) {
      console.error("Error in hobble effect:", error);
    }
  }, []);
};
