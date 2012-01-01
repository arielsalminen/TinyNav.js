/*! TinyNav.js v1.0. (c) 2011 Viljami Salminen. MIT License. github.com/viljami/TinyNav.js */
(function ($) {
  var inst = 0;
  $.fn.tinyNav = function (options) {
    var settings = {
      'active' : 'selected',
      'namespace' : 'tinynav'
    };
    return this.each(function () {
      inst = inst + 1;
      var $this = $(this),
        namespace = settings.namespace,
        $select = $('<select class="' + namespace + ' ' + namespace + inst + '"></select>');
      if (options) {
        $.extend(settings, options);
      }
      if ($this.is('ul,ol')) {
        $this.addClass('l_' + namespace + inst);
        o = '';
        $('.l_' + namespace + inst).find('a').each(function () {
          o +=
            '<option value="' + $(this).attr('href') + '">' +
            $(this).text() +
            '</option>';
        });
        $select
          .append(o)
          .find(':eq(' + $('.l_' + namespace + inst + ' li')
          .index($('.l_' + namespace + inst + ' li.' + settings.active)) + ')')
          .attr('selected', 'selected');
        $select.bind('change', function () {
          document.location.href = $(this).val();
        });
        $('.l_' + namespace + inst).after($select);
      }
    });
  };
})(jQuery);