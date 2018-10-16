$('#clickmeMore').click(function(){
  result=$('#test').val();
  result ++;
  $('#test').val(result);
});
$('#clickmeLess').click(function(){
  result=$('#test').val();
  result --;
  $('#test').val(result);
});
