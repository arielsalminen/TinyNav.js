# TinyNav.js
### Responsive navigation plugin that weights just ~300bytes

TinyNav.js is a tiny jQuery plugin (304 bytes gzipped) that converts UL/OL navigation to a select menu. It might not provide as many options as other similar plugins, but at least it's _very tiny_.


Usage Instructions and demo
======

Javascript:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    <script src="tinynav.min.js"></script>
    <script>
        jQuery(function() {
            $('ul').tinyNav();
        });
    </script>

Options:

    $('ul').tinyNav({ activeClass:'active' }); // Change the active class that is used on list items.

CSS:

    /* styles for desktop */
    .tinynav { display: none }
    
    /* styles for mobile */
    @media screen and (max-width: 600px) {
        .tinynav { display: block }
        ul { display: none }
    }

NOTE: You should probably add `js` class for `<html>` with javascript and use that in CSS when hiding the normal navigation so that navigation is still accessible if someone is browsing the site JavaScript disabled.

For a demo, download this repository as a ZIP file and open example.html.


License
======

Licensed under the MIT license.

Copyright (c) 2011 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Changelog
======

v1.00 (2011-12-31)
- Release