$(document).ready(function() { 
  $("#color-button").on("click", function(){ 
    $('form').each(function() { this.reset() });
    document.getElementById("my-points").innerHTML = "<span>0</span>";
    getColor();
    blankPreview();
  }); 
  $("#check").on("click", function() {
    checkMyGuess();
  })
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
  
  document.getElementById("actual-value").innerHTML = "<span>rgb(0,0,0)</span>";
  document.getElementById("my-value").innerHTML = "<span>rgb(0,0,0)</span>";

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

function checkMyGuess() {
  
  // var diffR = 0;
//   var diffG = 0;
//   var diffB = 0;
//
//   this.diffR = diffR;
//   this.diffG = diffG;
//   this.diffB = diffB;
//
//   if(this.rValue > this.rValueGuess) {
//     this.diffR = this.rValue - this.rValueGuess;
//   }
//   else {
//     this.diffR = this.rValueGuess - this.rValue;
//   }
//
//   if(this.gValue > this.gValueGuess) {
//     this.diffG = this.gValue - this.gValueGuess;
//   }
//   else {
//     this.diffG = this.gValueGuess - this.gValue;
//   }
//
//   if(this.bValue > this.bValueGuess) {
//     this.diffB = this.bValue - this.bValueGuess;
//   }
//   else {
//     this.diffB = this.bValueGuess - this.bValue;
//   }
//
//   var totalDiff = this.diffR + this.diffG + this.diffB;
//
//   this.totalDiff = totalDiff;
  
  document.getElementById("actual-value").innerHTML = "<span>rgb(" + this.rValue + "," + this.gValue + "," + this.bValue + ")";
  document.getElementById("my-value").innerHTML = "<span>rgb(" + this.rValueGuess.value + "," + this.gValueGuess.value + "," + this.bValueGuess.value +  ")";
  // document.getElementById("points-off").innerHTML = "<span>" + this.totalDiff + "</span>";

}

function blankPreview() {
  
  $("#color-1-preview").css("background-color", "white");
  
}