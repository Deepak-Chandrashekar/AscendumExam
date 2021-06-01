import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get gridContainer() {
    return $(
      '[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]'
    );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }
  public static get primaryColumnHeaders() {
    return $$('//*[@id="myGrid"]//child::div[@class="ag-header-group-cell ag-focus-managed ag-header-group-cell-with-group"]//div[@ref="agContainer"]//span[@ref="agLabel"]');
  }

  public static get secondaryColumnHeaders() {
    return $$('(//*[@id="myGrid"]//child::div[@class="ag-header-row ag-header-row-column"])[2]//div[@ref="eLabel"]//span[@ref="eText"]')
  }

  public static get primaryColumnSideBarOptions() {
    return $$('//*[@id="myGrid"]//child::div[@class="ag-column-select-column-group ag-column-select-indent-0"]//span[@ref="eLabel"]')
  }

  public static get secondaryColumnSideBarOptions() {
    return $$('//*[@id="myGrid"]//child::div[@class="ag-column-select-column ag-column-select-add-group-indent ag-column-select-indent-1"]//span[@ref="eLabel"]');
  }

  public static get sideBarOptions() {
    return $$('//*[@ref="sideBar"]//child::div[@ref="primaryColsListPanel"]//span[@ref="eLabel"]');
  }
}
