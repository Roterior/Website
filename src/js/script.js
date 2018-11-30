function someData() {
	var data = "";
	if (document.forms["select"]["mType"].value != "Select Type")
		data += document.forms["select"]["mType"].value;
	if (document.forms["select"]["genre"].value != "Select Genre")
		data += document.forms["select"]["genre"].value;
	if (document.forms["select"]["year"].value != "Select Year")
		data += document.forms["select"]["year"].value;
	data += document.forms["select"]["title"].value;
	alert(data);
}
// function findAll() {
//     $.ajax({
//         type: 'GET',
//         url: rootURL,
//         dataType: "json", // data type of response
//         success: renderList
//     });
// }
$('document').ready(function(){
	// $('body').append('<a target="_blank" href="https://vk.com/roterior" new>Моя страничка ВК</a>');
	//$('#b1').on('click', function(){
	//	var v1=jQuery('#v1').val(), v2=jQuery('#v2').val(), v3;
	//	v1=parseInt(v1);
	//	v2=parseInt(v2);
	//	v3=v1+v2;
	//	alert(v3);
	//});
	//jQuery('#b2').on('click', function(){
	//	var v1=jQuery('#v1').val(), v2=jQuery('#v2').val(), v3;
	//	v1=parseInt(v1);
	//	v2=parseInt(v2);
	//	v3=v1-v2;
	//	alert(v3);
	//});
	// $('#v1').on('keyup', function(){
	// 	var v1=jQuery('#v1').val(), v2=jQuery('#v2').val(), v3;
	// 	v1=parseInt(v1);
	// 	v2=parseInt(v2);
	// 	v3=v1+v2;
	// 	jQuery('#v3').html(v3); 
	// });
	// $('#v2').on('keyup', function(){
	// 	var v1=jQuery('#v1').val(), v2=jQuery('#v2').val(), v3;
	// 	v1=parseInt(v1);
	// 	v2=parseInt(v2);
	// 	v3=v1+v2;
	// 	jQuery('#v3').html(v3); 
	// });
	//$('button').css('background-color','blue').height(30).width(30);
	//$("div p").detach();
});