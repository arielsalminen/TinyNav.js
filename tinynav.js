/*! TinyNav.js v1.0. (c) 2011 Viljami Salminen. MIT License. github.com/viljami/TinyNav.js */
(function ($) {
  $.fn.tinyNav = function (options) {

    // Settings
    var settings = {
      'activeClass' : 'active'
    };

    $('html').addClass('tinynav');

    return this.each(function () {
      var $this = $(this),
        $sel = $('<select></select>');

      if (options) {
        $.extend(settings, options);
      }

      // Create select if $this is a list
      if ($this.is('ul,ol')) {

        o = '';

        $this.find('a').each(function () {
          o +=
            '<option value="' + $(this).attr('href') + '">' +
            $(this).text() +
            '</option>';
        });

        $sel
          .append(o)
          .find(':eq(' + $('li').index($('li.' + settings.activeClass)) + ')')
          .attr('selected', 'selected');

        $sel.bind('change', function () {
          document.location.href = $(this).val();
        });

        $this.after($sel);

      }

    });
  };
})(jQuery);