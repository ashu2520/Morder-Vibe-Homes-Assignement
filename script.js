window.onload = function () {
  var diagram = document.getElementById("diagram");
  var line2 = document.getElementById("line2");
  var distanceDisplay = document.getElementById("distance");
  var line1Position = 50;
  var isDragging = false;
  var startMouseY;
  var startLine2Y;

  function updateDistance() {
    var line2Position = parseInt(line2.style.top) || 150;
    var distance = Math.abs(line2Position - line1Position);
    distanceDisplay.innerHTML = distance;
  }

  line2.onmousedown = function (e) {
    isDragging = true;
    startMouseY = e.clientY;
    startLine2Y = parseInt(line2.style.top) || 150;
    e.preventDefault();
  };

  document.onmousemove = function (e) {
    if (isDragging) {
      var mouseMoved = e.clientY - startMouseY;
      var newPosition = startLine2Y + mouseMoved;

      if (newPosition < line1Position) {
        newPosition = line1Position;
      }
      if (newPosition > diagram.clientHeight - 2) {
        newPosition = diagram.clientHeight - 2;
      }

      line2.style.top = newPosition + "px";
      updateDistance();
    }
  };

  document.onmouseup = function () {
    isDragging = false;
  };

  updateDistance();
};
