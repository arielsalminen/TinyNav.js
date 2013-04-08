# TinyNav.js
### Responsive navigation plugin that weighs just 443 bytes

[TinyNav.js](http://tinynav.viljamis.com/) is a tiny jQuery plugin (443 bytes minified and gzipped) that converts `<ul>` and `<ol>` navigations to a select boxes for small screen. It also automatically selects the current page and adds `selected="selected"` for that item. There's also a Wordpress plugin available, [here](http://wordpress.org/extend/plugins/tinynav/).

This isn't the first plugin to do this and it doesn't provides a lot of options, but it might be the smallest (file size).

Check out also the new version called [Responsive Nav](http://responsive-nav.com).

Usage Instructions and demo
======

For instructions and demo go to [http://tinynav.viljamis.com](http://tinynav.viljamis.com/)


License
======

Licensed under the MIT license.

Copyright (c) 2011-2012 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Changelog
======

v1.1 (2012-11-14) - Adds an optional "label" tag before the "select" tag, thanks to [@larcher](https://github.com/larcher)

v1.05 (2012-10-19) - Adds the support for multiple navigation depths, thanks to [@nicoandrade](https://github.com/nicoandrade)

v1.04 (2012-10-19) - Adds the possibility to change the text of the header. Notice that there seems to be a bug in jQuery 1.8.0 which prevents this script from working correctly if there is no selected item in the navigation (the plugin does work with older and newer versions correctly though, currently tested up to 1.8.2).

v1.03 (2012-03-15) - Adds new option called "header", thanks to [@jorde](https://github.com/jorde)

v1.02 (2012-03-07) - Some performance improvements and a bug fix

v1.01 (2012-01-04) - Code Refactoring

v1.00 (2011-12-31) - Release


Want to do a pull request?
======

Great! New ideas are more than welcome, but please check the [Pull Request Guidelines](https://github.com/viljamis/TinyNav.js/wiki/Pull-Request-Guidelines) first before doing so.
