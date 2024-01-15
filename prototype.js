

function Point(x, y) {
   this.x = x;
   this.y = y;
}

Point.prototype.add = function () {
   return this.x + this.y;
}

Point.prototype.create = function (x, y) {
   return {
      x,
      y
   }
}

let myP = new Point(1, 2)
console.log(myP.add())

