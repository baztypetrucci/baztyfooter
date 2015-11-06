(function($) {
  $.baztyFooter = function(options) {
    var bfSettings = $.extend({
      header: '.header',
      content: '.content',
      footer: '.footer',
      spacer: '.spaceFooter'
    }, options);

    if (bfSettings.spacer.length > 0) {
      function bf() {
        var aw = $(window).outerHeight();
        var af = jQuery(bfSettings.footer).outerHeight();
        var ah = jQuery(bfSettings.header).outerHeight();
        jQuery(bfSettings.content).css('height','auto');
        jQuery(bfSettings.spacer).css('height','0px');
        var ac = jQuery(bfSettings.content).outerHeight();
        var fs = jQuery(bfSettings.spacer).outerHeight();
        var totalH = ac + ah + af;
        //console.log('ac :'+ac+', ah: '+ah+', af: '+af);
        if (totalH < aw) {
          var nuevoAlto = aw - totalH;
          jQuery(bfSettings.spacer).height(nuevoAlto);
        }
      }
      bf();
      jQuery(window).resize(function() {
        bf();
      });
    }
    };
}( jQuery ));
