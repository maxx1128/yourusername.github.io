function ma_offCanvasNav(a,n){function t(){}function f(){i.on("click",".js-offCanvas-toggle",function(){i.toggleClass("ma-l-default__wrapper--expanded")})}function o(){i=a("#"+n),t(),f()}var i;return o}var MA_OFFCANVASNAV_EXT={init:function(){$(".ma-l-default__wrapper").each(function(){if(n=$(this).attr("id"),void 0===n){var a=1+Math.floor(999999999*Math.random()),n="UNIQUE_ID_"+a;$(this).attr("id",n)}ma_offCanvasNav(jQuery,n)()})}};