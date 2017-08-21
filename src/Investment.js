function Investment(parameters){
    let parmas = parameters || {};
    this.shares = parmas.shares;
    this.stock = parmas.stock;
    this.sharePrice = parmas.sharePrice;
    this.cost = this.shares * this.sharePrice;
};

Investment.prototype.roi = function(){
    return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
};

Investment.prototype.isGood = function(){
    return this.roi() > 0;
}