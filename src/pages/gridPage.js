"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridPage = void 0;
class GridPage {
    static get mainGrid() {
        return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
    }
    static get sideBar() {
        return $('[ref="eRootWrapper"] .ag-side-bar');
    }
    static get gridContainer() {
        return $('[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]');
    }
    static get colName() {
        return $$('[ref="eCenterContainer"] [col-id="name"]');
    }
    static get colDecember() {
        return $$('[ref="eCenterContainer"] [col-id="dec"]');
    }
    static get columnHeader() {
        return $$('[aria-rowindex="1"] > [role="columnheader"]');
    }
    static get primaryColumnHeaders() {
        return $$('//*[@id="myGrid"]//child::div[@class="ag-header-group-cell ag-focus-managed ag-header-group-cell-with-group"]//div[@ref="agContainer"]//span[@ref="agLabel"]');
    }
    static get secondaryColumnHeaders() {
        return $$('(//*[@id="myGrid"]//child::div[@class="ag-header-row ag-header-row-column"])[2]//div[@ref="eLabel"]//span[@ref="eText"]');
    }
    static get primaryColumnSideBarOptions() {
        return $$('//*[@id="myGrid"]//child::div[@class="ag-column-select-column-group ag-column-select-indent-0"]//span[@ref="eLabel"]');
    }
    static get secondaryColumnSideBarOptions() {
        return $$('//*[@id="myGrid"]//child::div[@class="ag-column-select-column ag-column-select-add-group-indent ag-column-select-indent-1"]//span[@ref="eLabel"]');
    }
    static get sideBarOptions() {
        return $$('//*[@ref="sideBar"]//child::div[@ref="primaryColsListPanel"]//span[@ref="eLabel"]');
    }
}
exports.GridPage = GridPage;
//# sourceMappingURL=gridPage.js.map