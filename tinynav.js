/*! TinyNav.js v1.02. (c)2011-2012 Viljami Salminen. MIT License. http://tinynav.viljamis.com */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {

    var settings = $.extend({
      'active' : 'selected'
    }, options);

    return this.each(function () {
      i++;

      var $nav = $(this),
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').addClass(namespace + ' ' + namespace_i);

      if ($nav.is('ul,ol')) {

        var options = '';

        $nav
          .addClass('l_' + namespace_i)
          .find('a')
          .each(function () {
            options +=
              '<option value="' + $(this).attr('href') + '">' +
              $(this).text() +
              '</option>';
          });

        $select
          .append(options)
          .find(':eq(' + $(l_namespace_i + ' li')
          .index($(l_namespace_i + ' li.' + settings.active)) + ')')
          .attr('selected', true);

        $select.change(function () {
          window.location.href = $(this).val();
        });

        $(l_namespace_i).after($select);

      }

    });

  };
})(jQuery, this, 0);