/*! TinyNav.js v1.0. (c) 2011 Viljami Salminen. MIT License. github.com/viljami/TinyNav.js */
(function ($) {
  $.fn.tinyNav = function (options) {
    var settings = {
      'active' : 'selected'
    };
    return this.each(function () {
      var $this = $(this),
        $select = $('<select class="tinynav"></select>');
      if (options) {
        $.extend(settings, options);
      }
      if ($this.is('ul,ol')) {
        o = '';
        $this.find('a').each(function () {
          o +=
            '<option value="' + $(this).attr('href') + '">' +
            $(this).text() +
            '</option>';
        });
        $select.append(o)
          .find(':eq(' + $('li').index($('li.' + settings.active)) + ')')
          .attr('selected', 'selected');
        $select.bind('change', function () {
          document.location.href = $(this).val();
        });
        $this.after($select);
      }
    });
  };
})(jQuery);