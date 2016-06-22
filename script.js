var tableSize = 0;
$(document).ready(function(){
	$('button').click(function(){
  	$('#grid-container').empty();
    var table = "<table>";
    function addTable(size){
      var tableRow = "";
      for (var i=0; i<size; i++) {
        tableRow += "<td></td>";
      }
      for (var i=0; i<size; i++) {
        table += "<tr>"+tableRow+"</tr>";
      }
      table += "</table>";
    }
  	var tableSize = prompt("How big?");
    addTable(tableSize);
    $('#grid-container').prepend(table);
    $('td').addClass("squares");
    $('.squares').mouseenter(function(){
  		$(this).css('background-color','black');
  	});
  });
});