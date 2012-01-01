/*! TinyNav.js v1.0. (c) 2011-2012 Viljami Salminen. MIT License. github.com/viljami/TinyNav.js */
(function ($) {
  var i = 0;
  $.fn.tinyNav = function (options) {
    var settings = {
      'active' : 'selected',
      'namespace' : 'tinynav'
    };
    return this.each(function () {
      i = i + 1;
      var $this = $(this),
        namespace = settings.namespace,
        $select = $('<select class="' + namespace + ' ' + namespace + i + '"></select>');
      if (options) {
        $.extend(settings, options);
      }
      if ($this.is('ul,ol')) {
        $this.addClass('l_' + namespace + i);
        o = '';
        $('.l_' + namespace + i + ' a').each(function () {
          o +=
            '<option value="' + $(this).attr('href') + '">' +
            $(this).text() +
            '</option>';
        });
        $select
          .append(o)
          .find(':eq(' + $('.l_' + namespace + i + ' li')
          .index($('.l_' + namespace + i + ' li.' + settings.active)) + ')')
          .attr('selected', 'selected');
        $select.bind('change', function () {
          document.location.href = $(this).val();
        });
        $('.l_' + namespace + i).after($select);
      }
    });
  };
})(jQuery);