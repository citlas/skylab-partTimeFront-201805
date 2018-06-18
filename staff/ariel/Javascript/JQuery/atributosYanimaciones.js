<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ATTS</title>
  <script src="https://code.jquery.com/jquery-2.0.3.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <style>
    body,*{
      box-sizing: content-box;
    }
    .container {
      border:1px solid #aaa;
      width: 75%;
      margin-top:30px;
      padding: 20px;
      border-radius: 10px;
      font-size: 1.5em;
    }
    .letter{
      display: inline-block;
      width: 20px;
      line-height: 20px;
      padding: 20px;
      margin-right: 10px;
      margin-bottom: 10px;
      text-align: center;
      background:lightgray;
      cursor:pointer;
    }
    .letter[data-times-clicked="1"]{ background: green; }
    .letter[data-times-clicked="2"]{ background: lightgreen; }
    .letter[data-times-clicked="3"]{ background: yellowgreen; }
    .letter[data-times-clicked="4"]{ background: yellow; }
    .letter[data-times-clicked="5"]{ background: orange; }
    .letter[data-times-clicked="6"]{ background: orangered; }
    .letter[data-times-clicked="7"]{ background: red; }
  </style>
</head>
<body>

<div class="container">
  
  
</div>

<script >
  var abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";


  for(var i=0 ; i<abecedario.length ; i++){
    var letter = abecedario[i];

    $('.container').append('<div id="letter-'+letter+'" class="letter"><p>'+letter+'</p></div>')
  }

  $('.letter p').mouseenter(function(){
    
  })

  $('.letter p').mouseleave(function(){
    
  })

  $('.letter').mouseenter(function(){
    var timesClicked = getTimesClicked(this);
    if(timesClicked <= 0){
      $(this).css("background", "lightblue");
    }
    
    var defaultFontSize = $(this).css("font-size");
    $(this).data('font-size',defaultFontSize);
    
    $(this).animate({padding:'40px','font-size':"36px"},1000,"linear",function(){
      
    });
  })

  $('.letter').mouseleave(function(){
    $(this).css("background", '');
    $(this).stop();
    var defaultFontSize = $(this).data('font-size');
    $(this).animate({padding:'20px','font-size':defaultFontSize},1000,"linear");
  })

  $('.letter').click(function(){
    var timesClicked = getTimesClicked(this);
    timesClicked++;
    $(this)
      .attr('data-times-clicked',timesClicked)
      .css("background", '');
  });
  
  $('.letter p').click(function(e){
    e.stopPropagation();
    var currentLetter = $(this).html();
    var currentLetterAtt = $(this).attr('temp-letter');
    
    if(currentLetter !== "-"){
      $(this).attr('temp-letter',currentLetter);
      $(this).html("-");
    }else{
      $(this).html(currentLetterAtt);
    }
  })

  function getTimesClicked(element){
    var timesClicked = $(element).attr('data-times-clicked');
    if(typeof timesClicked === "undefined"){
      timesClicked = 0;
    }else{
      timesClicked = parseInt(timesClicked);
    }
    return timesClicked;
  }
</script>
</body>
</html>
