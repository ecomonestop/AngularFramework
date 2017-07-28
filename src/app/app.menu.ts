
import { MenuItem } from "../fw/services/menu.service";

export let initialMenuItems: Array<MenuItem> = [
    {icon: "glyphicon-dashboard", route: "/dashboard", submenu: null, text: "Dashboard"},
    {icon: "glyphicon-flag", route: "/countries", submenu: null, text: "Countries"},
    {icon: "glyphicon-wrench", route: "/settings", submenu: null, text: "Settings"}
];