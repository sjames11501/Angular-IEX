//Home page

// A $( document ).ready() block.
$( document ).ready(function() {


    $('.alphaonly').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-z]/g,'') ); }
    );


});


