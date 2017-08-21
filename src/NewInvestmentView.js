function NewInvestmentView(params){
    this.$el = $(params.selector);
};

NewInvestmentView.prototype = {
    getSymbolInput : () => {
        return $(".new-investment-stock-symbol");
    }
};