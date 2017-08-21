describe("NewInvestmentView는", () => {
    let view;
    beforeEach(() => {
        jasmine.getFixtures().fixturesPath = "base/test/fixtures";
        loadFixtures("NewInvestmentView.html");

        view = new NewInvestmentView({selector : '#new-investment'});
    });

    it("DOM 앨리먼트를 프로퍼티로 노출해야한다", () => {
        expect(view.$el).toExist();
    });

    it("빈 종목 코드를 가지고 있어야 한다", () => {
        expect(view.getSymbolInput()).toHaveValue("");
    })

    it("종목 코드를 입력받어야 한다", () => {

    });

    it("매수 수량을 입력받어야 한다", () => {

    });

    it("매수 단가를 입력받어야 한다", () => {

    });
});