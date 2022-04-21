$(document).ready(function()
{
//$('#btn-click').click(function()
//{ 
   // $('#list').css('list-style-type','upper-alpha')
   // var txtValue=$('.txt').val();
   // $('#list').append("<li>" +txtValue+"</li>");
    //$('.txt').val('');
//})

//$('input[ type=text]').val('manpreet');
//$('input[ type=email]').css('background-color','blue');
//})
})
$('input').css('background-color','blue');
$('.circle').click(function()
{
if($(this).hasClass('bg-primary')==true)
{
    $('body').addClass('bg-primary');
}
else if($(this).hasClass('bg-danger')==true)
{
    $('body').addClass('bg-danger');
}
else if($(this).hasClass('bg-warning')==true)
{
    $('body').addClass('bg-warning');
}
else if($(this).hasClass('bg-sucess')==true)
{
    $('body').addClass('bg-sucess');
}
)
