$(document).ready(function()
{ 
$('#btn-click').click(function()
{ 
var txtValue=$('.txt').val();
$('#list').append("<li>" +txtValue+"</li>");
$('.txt').val('');
})
}
)