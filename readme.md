SALIENT POINTS ON JQUERY
Jquery is a lightweight library that simplifies programming with javascript. 
=>Compressed version of jquery is suitable for production ends with min.js
=>while uncompressed version is suitable for development


## $(document).ready vs $(window).load
=> $(document).ready is a Jquery event that fires as soon as the DOM is loaded and ready to be manipulated by the script.
*This load first and faster

=> $(window).load it fires when all the contents(images, css, etc) and DOm is fully loaded

what is cdn?

What are jQuery selectors?
One of the most important concept in jQuery is selectors. jQuery selectors allow you to select and manipulate HTML elements.
Different selectors in jQuery
jQuery selectors allow you to select html elements in the DOM by
1. Element ID
2. Element Tag Name
3. Element Class Name
4. Element attribute
5. Element Attribute values and many more

Important points to remember about jQuery #id selector
1. jQuery #id selector uses the JavaScript document.getElementById() function 
2. jQuery #id selector is the most efficient among all jQuery selectors. If you know the id of an element that you want to find, then always use the #id selector.
5. JavaScript's document.getElementById() and jQuery(#id) selector are not the same. document.getElementById() returns a raw DOM object where as jQuery('#id') selector returns a jQuery object that wraps the DOM object and provides jQuery methods. This is the reason you are able to call jQuery methods like css(), click() on the object returned by jQuery. To get the underlying DOM object from a jQuery object write $('#id')[0]
6. document.getElementById() is faster than jQuery('#id') selector. Use document.getElementById() over jQuery('#id') selector unless you need the extra functionality provided by the jQuery object.


