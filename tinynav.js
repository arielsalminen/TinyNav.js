/*! http://tinynav.viljamis.com v1.03 by @viljamis */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {

    // Default settings
    var settings = $.extend({
      'active' : 'selected', // String: Set the "active" class
      'header' : false, // Boolean: Show header instead of the active item
      'headerTitle' : 'Navigation' // String: Set header title
    }, options);

    return this.each(function () {

      // Used for namespacing
      i++;

      var $nav = $(this),
        // Namespacing
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').addClass(namespace + ' ' + namespace_i);

      if ($nav.is('ul,ol')) {

        if (settings.header) {
          $select.append(
            $('<option/>').text(settings.headerTitle)
          );
        }

        // Build options
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

        // Append options into a select
        $select.append(options);

        // Index of selected item
  	    $selected = $select.find(':eq(' + $(l_namespace_i + ' li').index($(l_namespace_i + ' li.' + settings.active)) + ')');
		
		    // Select the active item
        if (!settings.header) {
          $selected.attr('selected', true);
        }
		    else {
          // Header is index 0. Push index of selected item.
		      $selectedNew = $selected.index()+1;
		      if($selectedNew > 0){
            $select.find(':eq(' + $selectedValue + ')').attr('selected', true);
		      }
        }

        // Change window location
        $select.change(function () {
          window.location.href = $(this).val();
        });

        // Inject select
        $(l_namespace_i).after($select);

      }

    });

  };
})(jQuery, this, 0);