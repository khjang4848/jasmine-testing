beforeEach(() => {
    const toBeAGoodInvestment = () => {
        return {
            compare : (actual, expected) => {
                let investment = actual;
                return {
                    pass : investment.isGood(),
                    message : investment.isGood() + "~Test Fail"
                }
            }
        }
    };

    jasmine.addMatchers({toBeAGoodInvestment : toBeAGoodInvestment});
});