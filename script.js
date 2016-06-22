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

    //Make the thing
    var tableSize = prompt("How big?");
    addTable(tableSize);
    $('#grid-container').prepend(table);
    $('td').addClass("squares");
    $('#container').css('visibility','visible');

    //Define them variables
    var frameWidth = $('#frame').width();
    console.log(frameWidth);
    var sqWidth = frameWidth / tableSize;
    var sqHeight = sqWidth;

    //Size the thang
    $('#frame').css({
      'height': frameWidth
    });
    $('#canvas').css({
      'width': frameWidth*.8,
      'height': frameWidth*.8
    });    
    $('#grid-container').css({
      'width':frameWidth*.8,
      'height':frameWidth*.8
    });
    $('table').css({
      'width':frameWidth*.8,
      'height':frameWidth*.8
    })
    $('.circles').css({
      'width':frameWidth/12,
      'height':frameWidth/12
    });
    $('p').css('font-size',frameWidth/11);

    //Mouseover Definition
    $('.squares').mouseenter(function(){
  	$(this).css('background-color','black');
    });
  });
});
