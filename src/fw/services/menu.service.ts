
import { Injectable } from "@angular/core";

export interface MenuItem{
    text: string,
    icon: string,
    route: string,
    submenu: Array<MenuItem>
}

@Injectable()
export class MenuService{
    items: Array<MenuItem>;
    isVertical = false;
    showLeftSideMenu = false;

    toggleLeftSideMenu(): void {
        this.isVertical = true;
        this.showLeftSideMenu = !this.showLeftSideMenu;
    }

    toggleOrientation(): void{
        this.isVertical = !this.isVertical;
    }
}