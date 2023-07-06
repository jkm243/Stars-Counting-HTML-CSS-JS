var res = document.getElementById("res");
var stars = document.getElementsByTagName("button");

 function changeStarColor(starNumber) {
    var star = document.getElementById("star" + starNumber);
    star.style.color = "yellow";
  }

// changeStarColor(3)


for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function () {
        this.style.color = 'blue';
        var calc = i * 1;
        res.innerHTML = i;
    });
}

