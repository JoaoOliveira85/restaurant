import { doc } from "prettier";
import Tabby from "tabbyjs";
import { itemList } from "./sections/itemList.js";
import { siteInfo } from "/siteInfo.js";
import { createDivs } from "./createDivs.js";

const contentWindow = document.querySelector("#content");

const header = document.createElement("header");
header.id = "header";
contentWindow.appendChild(header);
createDivs(header, "div", 3, ["logo", "navBar", "filler"], "headerDivs");

const logoImg = document.createElement("img");
logoImg.setAttribute("src", "/images/logo.png");
const logoTxt = document.createElement("div");
logoTxt.innerText = siteInfo.NAME;
document.querySelector("#logo").appendChild(logoImg);
document.querySelector("#logo").appendChild(logoTxt);

const menu = document.createElement("ul");

menu.setAttribute("data-tabs", "");

itemList.map((listItem) => {
	const currentItem = document.createElement("li");

	if (itemList.indexOf(listItem) === 0) {
		currentItem.setAttribute("data-tabby-default", "");
	}
	const currentLink = document.createElement("a");
	currentLink.setAttribute("href", `#${listItem.id}`);
	currentLink.innerText = `${listItem.title}`;
	currentItem.appendChild(currentLink);
	menu.appendChild(currentItem);
});

const pageContent = document.createElement("div");
pageContent.id = "pageContent";

itemList.map((listItem) => {
	const currentItemIndex = itemList.indexOf(listItem);
	pageContent.appendChild(itemList[currentItemIndex].function);
	pageContent.getElementsByClassName("sectionContent")[
		currentItemIndex
	].id = `${listItem.id}`;
});

document.querySelector("#navBar").appendChild(menu);

contentWindow.appendChild(pageContent);

const footer = document.createElement("footer");
footer.id = "footer";
contentWindow.appendChild(footer);
createDivs(
	footer,
	"div",
	3,
	["footerContacts", "hours", "social"],
	"footerDivs"
);

footer.querySelector("#footerContacts").innerText = siteInfo.address;
footer.querySelector("#hours").innerText = siteInfo.businessHours;
footer.querySelector("#social").innerText = siteInfo.socialNetworks;
var tabs = new Tabby("[data-tabs]");
