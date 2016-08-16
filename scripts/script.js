$(document).ready(function() { 
  $("#color-button").on("click", function(){ 
    $('form').each(function() { this.reset() });
    document.getElementById("my-points").innerHTML = "<span>0</span>";
    getColor();
    blankPreview();
  }); 
  $("#color-1-r-guess").change("change", function() {
    previewColor();
  });
  $("#color-1-g-guess").change("change", function() {
    previewColor();
  });
  $("#color-1-b-guess").change("change", function() {
    previewColor();
  });
  $('form').each(function() { this.reset() });
});

function getColor() {
 
  var rValue, gValue, bValue;
  
  this.rValue = Math.round(Math.random()*256-1);
  this.gValue = Math.round(Math.random()*256-1);
  this.bValue = Math.round(Math.random()*256-1);
  
  $("#color-1-swatch").css("background-color", "rgb(" + this.rValue + "," + this.gValue + "," + this.bValue + ")");
  
  
  var possiblePoints = this.rValue + this.gValue + this.bValue;
  this.possiblePoints = possiblePoints;
  
  
  document.getElementById("possible-points").innerHTML = "<span>" + this.possiblePoints + "</span>";

}

function previewColor() {
  
  var rValueGuess = document.getElementById('color-1-r-guess');
  var gValueGuess = document.getElementById('color-1-g-guess');
  var bValueGuess = document.getElementById('color-1-b-guess');
  
  this.rValueGuess = rValueGuess;
  this.gValueGuess = gValueGuess;
  this.bValueGuess = bValueGuess;
  
  $("#color-1-preview").css("background-color", "rgb(" + this.rValueGuess.value + "," + this.gValueGuess.value + "," + this.bValueGuess.value + ")");
  
  //var myPoints = $.add(this.rValueGuess, this.gValueGuess, this.bValueGuess);
  
  var myPoints = parseInt(this.rValueGuess.value) + parseInt(this.gValueGuess.value) + parseInt(this.bValueGuess.value);
  this.myPoints = myPoints;
  document.getElementById("my-points").innerHTML = "<span>" + this.myPoints + "</span>";
  
  //console.log(rValueGuess);
  
}

function blankPreview() {
  
  $("#color-1-preview").css("background-color", "white");
  
}