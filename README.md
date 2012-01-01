# TinyNav.js
### Responsive navigation plugin that weights just ~300bytes

TinyNav.js is a tiny jQuery plugin (350 bytes gzipped) that converts `<ul>` and `<ol>` navigations to a select boxes on small screen. It also automatically selects the current page and adds `selected="selected"` for that item.

This isn't the first plugin to help with this task and I'm not saying that it provides a lot of options that you can configure, but I think that none of the others are this small.


Usage Instructions and demo
======

Javascript:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    <script src="tinynav.min.js"></script>
    <script>
        $(function() {
            $('#nav').tinyNav();
        });
    </script>

Options:

    $('#nav').tinyNav({
        active: 'selected', // Set the "active" class that you use on your list items.
        namespace: 'tinynav' // Change the default namespace that TinyNav uses.
    });

CSS:

    /* styles for desktop */
    .tinynav { display: none }
    
    /* styles for mobile */
    @media screen and (max-width: 600px) {
        .tinynav { display: block }
        #nav { display: none }
    }

NOTE ABOUT JAVASCRIPT: If you worry how this will work when JS is disabled, then I suggest you to add class `js` for `<html>` with javascript and use that in CSS when hiding the normal navigation so that the navigation is still accessible if someone is browsing the site JavaScript disabled. Like this:

    JS:
    $('html').addClass('js');
    
    CSS:
    @media screen and (max-width: 600px) {
        .js .tinynav { display: block }
        .js #nav { display: none }
    }

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