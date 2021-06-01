"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const gridPage_1 = require("../pages/gridPage");
const page_1 = require("../pages/page");
describe("Load AG Grid", () => {
    before(() => {
        page_1.Page.open();
        page_1.Page.maximize();
    });
    it("Should display the grids", () => {
        gridPage_1.GridPage.mainGrid.waitForDisplayed();
        gridPage_1.GridPage.columnHeader.forEach((el) => {
            chai_1.expect(el.isDisplayed()).to.eql(true);
        });
    });
    it("Checking for the Primary Column Headers having a particular text", () => {
        gridPage_1.GridPage.mainGrid.waitForDisplayed();
        gridPage_1.GridPage.primaryColumnHeaders.forEach((value) => {
            if (value.getText() === 'Participant') {
                chai_1.expect(value.getText()).to.eql('Participant');
            }
            else if (value.getText() === 'Game of Choice') {
                chai_1.expect(value.getText()).to.eql('Game of Choice');
            }
            else if (value.getText() === 'Performance') {
                chai_1.expect(value.getText()).to.eql('Performance');
            }
            else {
                chai_1.expect(value.getText()).to.eql('Monthly Breakdown');
            }
        });
    });
    it('Checking for Primary Column Headers are available in the Columns Sidebar options', () => {
        let resultArray = [];
        gridPage_1.GridPage.mainGrid.waitForDisplayed();
        gridPage_1.GridPage.primaryColumnSideBarOptions.forEach((value) => {
            resultArray.push(value.getText());
        });
        chai_1.expect(resultArray).to.have.members(["Game of Choice", "Participant"]);
    });
});
//# sourceMappingURL=grid.test.js.map