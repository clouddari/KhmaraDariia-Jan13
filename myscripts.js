function HtmlAttribute(tagName, attributes) {
  this.tagName = tagName;
  this.attributes = attributes;

  const divForTheNewAttributes = document.querySelector(".new-attributes");

  this.getTag = () => {
    let tag = document.createElement(tagName);

    for (let attribute of attributes) {
      tag.setAttribute(attribute.split(": ")[0], attribute.split(": ")[1]);
    }

    divForTheNewAttributes.appendChild(tag);
    return tag;
  };
}

function createHeader() {
  let h3 = new HtmlAttribute("h3", [
    "class: text-class",
    "id: text-id",
  ]).getTag();
  h3.textContent = "This is the new H3 - header ";
}

function createrePElement() {
  let p = new HtmlAttribute("p", ["class: p-class", "id: p-id"]).getTag();
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

createHeader();
createrePElement();
