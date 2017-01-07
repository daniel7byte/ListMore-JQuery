/* -----------------------------------------------------------
*  Algoritmo actualizado para jQuery v3.1.1 modificando la 
*  función size() por la propiedad length.
*  -----------------------------------------------------------
*/
$(document).ready(function () {
  size_li = $("#myList div").length;
  x=3;
  $('#myList div:lt('+x+')').show();
  $('#loadMore').click(function () {
      x= (x+5 <= size_li) ? x+5 : size_li;
      $('#myList div:lt('+x+')').show();
       $('#showLess').show();
      if(x == size_li){
          $('#loadMore').hide();
      }
  });
  $('#showLess').click(function () {
      x=(x-5<0) ? 3 : x-5;
      $('#myList div').not(':lt('+x+')').hide();
      $('#loadMore').show();
       $('#showLess').show();
      if(x == 3){
          $('#showLess').hide();
      }
  });
});
