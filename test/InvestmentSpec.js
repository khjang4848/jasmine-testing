describe("주식 투자는 ", () => {
    let stock, investment;
    beforeEach(() => {
        stock = new Stock();
        investment = new Investment({
            stock : stock,
            shares : 100,
            sharePrice : 20
        });
    });

    it("대상이 주식이어야 한다", () => {
        expect(investment.stock).toBe(stock);
    });

    it("매수 수량이 있어야 한다", () => {
        expect(investment.shares).toEqual(100);
    });

    it("매수 단가가 있어야 한다", () => {
        expect(investment.sharePrice).toEqual(20);
    });

    it("비용이 수반된다", () => {
        expect(investment.cost).toEqual(2000);
    })
});