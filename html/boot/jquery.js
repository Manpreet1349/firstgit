$(document).ready(function()
{ 
$('#btn-click').click(function()
{ 
var txtValue=$('.txt').val();
$('#list').append("<li>" +txtValue+"</li>");
$('.txt').val('');
})

$('input[ type=Text]').val('manpreet');
$('input[ type=password]').css('background-color','blue');
}
)