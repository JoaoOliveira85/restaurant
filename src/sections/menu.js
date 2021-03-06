import { doc } from "prettier";

const menu = () => {
	const contentTitle = "Menu";
	const contentText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed risus hendrerit, suscipit ante id, dapibus ipsum. Sed sit amet leo ante. Nunc convallis rutrum metus finibus posuere. Aenean facilisis et quam non iaculis. Aenean sit amet ex tincidunt, condimentum dolor at, porttitor nisi. Etiam neque arcu, euismod quis felis vel, gravida tincidunt nibh. Curabitur porttitor nulla hendrerit elit interdum, in finibus turpis elementum. Sed ligula ipsum, tincidunt sit amet sagittis sit amet, rutrum ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eu tellus malesuada malesuada. Cras pulvinar a metus ut convallis. Etiam malesuada efficitur dolor vel pretium. Fusce nulla massa, dictum et erat eget, dapibus vestibulum turpis. Vivamus at mauris at neque viverra aliquam in fermentum neque. Aliquam volutpat, tortor non hendrerit mattis, lorem justo efficitur arcu, eu laoreet sem ante ut mi. Donec vel iaculis nunc. Etiam aliquet, mi eu efficitur feugiat, quam urna dignissim lorem, nec imperdiet mauris turpis vel ipsum. Aenean tempor fermentum ante eget dignissim. Pellentesque auctor iaculis nibh, nec bibendum justo. Quisque sit amet pharetra velit. Mauris dignissim purus dui, at iaculis turpis pharetra a.";

	const contentBox = document.createElement("div");
	contentBox.className = "sectionContent";
	const content = document.createElement("div");
	const title = document.createElement("h2");
	title.innerHTML = contentTitle;
	content.innerText = contentText;
	contentBox.appendChild(title);
	contentBox.appendChild(content);
	return contentBox;
};

export { menu };
