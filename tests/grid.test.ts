import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
    Page.maximize();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });

  it("Checking for the Primary Column Headers having a particular text", () => {

    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here to dynamically create the 
     * length of the element array and iterating through the 
     * element array and checking for a particular text.
     */

    GridPage.primaryColumnHeaders.forEach((value) => {

      if (value.getText() === 'Participant') {
        expect(value.getText()).to.eql('Participant');
      }
      else if (value.getText() === 'Game of Choice') {
        expect(value.getText()).to.eql('Game of Choice');
      }
      else if (value.getText() === 'Performance') {
        expect(value.getText()).to.eql('Performance');
      }
      else {
        expect(value.getText()).to.eql('Monthly Breakdown');
      }

    });

  });

  it('Checking for Primary Column Headers are available in the Columns Sidebar options', () => {
    let resultArray = [];

    GridPage.mainGrid.waitForDisplayed();
    GridPage.primaryColumnSideBarOptions.forEach((value) => {
      resultArray.push(value.getText());
    });

    expect(resultArray).to.have.members(["Game of Choice", "Participant", "Performance", "Monthly Breakdown"]);

  });

});
