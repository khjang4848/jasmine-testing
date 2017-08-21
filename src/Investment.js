function Investment(parameters){
    let parmas = parameters || {};
    this.shares = parmas.shares;
    this.stock = parmas.stock;
    this.sharePrice = parmas.sharePrice;
    this.cost = this.shares * this.sharePrice;
}