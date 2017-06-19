/**
 * Created by vitor on 19/06/17.
 */
function Coin(){
    this.sprite = new Sprite();
    this.player = null;
}


Coin.prototype.desenhar = function(ctx){
    this.sprite.desenhar(ctx)};

Coin.prototype.desenharImg = function(ctx, img){
    this.sprite.desenharImg(ctx, img);
};

Coin.prototype.desenharQuadrado = function (ctx) {
    this.sprite.desenharQuadrado(ctx)
};

Coin.prototype.desenharPose = function (ctx) {
    this.sprite.desenharPose(ctx)
};

Coin.prototype.mover = function(map,dt){
    this.sprite.mover(map,dt);
};

Coin.prototype.moverAng = function(dt){this.sprite.moverAng(dt)};

Coin.prototype.colidiuCom = function(alvo){
    this.sprite.colidiuCom(alvo);
};

Coin.prototype.perseguir = function (alvo, dt) {this.sprite.perseguir(alvo, dt)};
Coin.prototype.perseguirAng = function (alvo, dt){this.sprite.perseguirAng(alvo, dt)};
