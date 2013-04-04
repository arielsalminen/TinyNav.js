/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {

    // Default settings
    var settings = $.extend({
      'active' : 'selected', // String: Set the "active" class
      'header' : '', // String: Specify text for "header" and show header instead of the active item
      'label'  : '', // String: sets the <label> text for the <select> (if not set, no label will be added)
      'depth'  : 0 // Depth of navigation to use, 0 for unlimited depth
    }, options);

    return this.each(function () {

      // Used for namespacing
      i++;

      var $nav = $(this),
        // Namespacing
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').attr("id", namespace_i).addClass(namespace + ' ' + namespace_i);

      if ($nav.is('ul,ol')) {

        if (settings.header !== '') {
          $select.append(
            $('<option/>').text(settings.header)
          );
        }

        // Build options
        var options = '';

        $nav
          .addClass('l_' + namespace_i)
          .find('a')
          .each(function () {
            if($(this).parents('ul, ol').length < settings.depth + 1 || settings.depth == 0){
              options += '<option value="' + $(this).attr('href') + '">';
              var j;
              for (j = 0; j < $(this).parents('ul, ol').length - 1; j++) {
                options += '- ';
              }
              options += $(this).text() + '</option>';
            }
          });

        // Append options into a select
        $select.append(options);

        // Select the active item
        if (!settings.header) {
            $($select.find("option").get().reverse()).each(function(){
                if($(this).attr("value") == $('ul.' + l_namespace_i + ' li.' + settings.active + ' a').attr("href")){
                    $(this).attr('selected', true);
                    return false;
                }
                var nextItem = $('ul.' + l_namespace_i + ' li.' + settings.active);
                while(nextItem.parents("li").length > 0){
                    nextItem = nextItem.parents("li");
                    if($(this).attr("value") == nextItem.children('a').attr("href")){
                        $(this).attr('selected', true);
                        return false;
                    }
                }
            });
        }

        // Change window location
        $select.change(function () {
          window.location.href = $(this).val();
        });

        // Inject select
        $(l_namespace_i).after($select);

        // Inject label
        if (settings.label) {
          $select.before(
            $("<label/>")
              .attr("for", namespace_i)
              .addClass(namespace + '_label ' + namespace_i + '_label')
              .append(settings.label)
          );
        }

      }

    });

  };
})(jQuery, this, 0);
