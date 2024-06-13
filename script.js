
//using
// window.onload = function () {
//     document.getElementById('button1').addEventListener('click', function () {
//         alert('Button clicked')
//     })
// }


//This is deprecated
$(document).ready(function () {
    $('#button1').css("background-color", "green")
});

//using jquery
// $(function () {
//     // DOM Ready - do your stuff
//     $('#button1').on('click', function () {
//         alert('Let us go');
//     })

// });


//$(window).load for jquery
//This not working as expected
// $(window).load(function () {
//     alert('Window Loaded')
// });

// $(document).ready(function () {
//     alert('dom Loaded')
// });


$(document).ready(function () {
    $('#div1').html("Height = " + $('img1').height() + "<br>" + "Width = " + $('img1').width())
});



