import { doc } from "prettier";

const contacts = () => {
	const contentTitle = "Contactos";
	const contentText =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed risus hendrerit, suscipit ante id, dapibus ipsum. Sed sit amet leo ante. Nunc convallis rutrum metus finibus posuere. Aenean facilisis et quam non iaculis. Aenean sit amet ex tincidunt, condimentum dolor at, porttitor nisi. Etiam neque arcu, euismod quis felis vel, gravida tincidunt nibh. Curabitur porttitor nulla hendrerit elit interdum, in finibus turpis elementum. Sed ligula ipsum, tincidunt sit amet sagittis sit amet, rutrum ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br><div id="mapFrame"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48059.70954765192!2d-8.656973027442447!3d41.16220226536975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto!5e0!3m2!1sen!2spt!4v1609592900944!5m2!1sen!2spt" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>';

	const contentBox = document.createElement("div");
	contentBox.className = "sectionContent";
	const content = document.createElement("div");
	const title = document.createElement("h2");
	title.innerText = contentTitle;
	content.innerHTML = contentText;
	contentBox.appendChild(title);
	contentBox.appendChild(content);
	return contentBox;
};

export { contacts };
