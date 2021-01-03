import { home } from "./home.js";
import { menu } from "./menu.js";
import { aboutUs } from "./aboutUs.js";
import { contacts } from "./contacts.js";

const itemList = [
	{
		title: "Home",
		id: "home",
		function: home()
	},
	{
		title: "Menu",
		id: "menu",
		function: menu()
	},
	{
		title: "Quem Somos",
		id: "aboutUs",
		function: aboutUs()
	},
	{
		title: "Contactos",
		id: "contacts",
		function: contacts()
	}
];

export { itemList };
