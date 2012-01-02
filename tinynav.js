/*! TinyNav.js v1.0. (c) 2011-2012 Viljami Salminen. MIT License. http://tinynav.viljamis.com */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {
    var settings = {
      'active' : 'selected',
      'namespace' : 'tinynav'
    };
    return this.each(function () {
      i++;
      var $nav = $(this),
        namespace = settings.namespace,
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').addClass(namespace, namespace_i);
      if (options) {
        $.extend(settings, options);
      }
      if ($nav.is('ul,ol')) {
        $nav.addClass('l_' + namespace_i);
        $(this).find('a').each(function () {
          $select.append(
            $('<option/>')
             .text($(this).text())
             .val($(this).attr('href'))
          );
        });
        $select
          .find(':eq(' + $(l_namespace_i + ' li')
          .index($(l_namespace_i + ' li.' + settings.active)) + ')')
          .attr('selected', 'selected');
        $select.bind('change', function () {
          window.location.href = $(this).val();
        });
        $(l_namespace_i).after($select);
      }
    });
  };
})(jQuery, this, 0);