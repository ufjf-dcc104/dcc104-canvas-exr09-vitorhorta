function Map(rows, collumns) {
  this.SIZE = 32;
  this.enemies = [];
  this.cells = [];
  for (var r = 0; r < rows; r++) {
    this.cells[r] = [];
    for (var c = 0; c < collumns; c++) {
      this.cells[r][c] = 0;
    }
  }
}

Map.prototype.desenhar = function (ctx) {
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==1){
        ctx.fillStyle = "brown";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].desenhar(ctx);
  }
};

Map.prototype.setCells = function (newCells) {
  for (var i = 0; i < newCells.length; i++) {
    for (var j = 0; j < newCells[i].length; j++) {
      switch (newCells[i][j]) {
        case 1:
          this.cells[i][j] = 1;
          break;
        case 2:
          this.cells[i][j] = 2;
          // newEnemy = new Sprite();
          // newEnemy.images = this.images;
          // newEnemy.y = (i+0.5)*this.SIZE;
          // newEnemy.x = (j+0.5)*this.SIZE;
          // this.enemies.push(newEnemy);
          break;
       case 3:
           coin = new Coin();
           coin.sprite.images = this.images;
           coin.sprite.imgKey = "coin";
           coin.sprite.SIZE = 4;
           coin.sprite.poses = [{row: 0, col:0, frames:8, v: 1}];
           coin.sprite.imgSizes = [-20,-15,32];
           console.log((i+0.5)*this.SIZE);
           coin.sprite.y = (i+0.5)*this.SIZE;
           coin.sprite.g = 0;
           coin.sprite.x = (j+0.5)*this.SIZE;
           this.cells[i][j] = coin;
           this.enemies.push(coin);
          break;
        default:
          // this.cells[i][j] = 0;
          break;
      }
    }
  }
};

Map.prototype.mover = function (dt) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].mover(this,dt);
  }
};
Map.prototype.perseguir = function (alvo) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].perseguir(alvo);
  }
};
