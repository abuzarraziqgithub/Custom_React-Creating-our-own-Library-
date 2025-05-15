function customRender(reactElement, container) {
  //* First Version(Hard coded Attributes)
  /*
    ? The problem with this is we need to set attributes for every element separatly and we don't know if the element need attribute or not.
    ? So there is better way which is to loop over the props object property.
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */

  //* Second Version:(Loop over  Props(Attribtues)
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (prop in reactElement.props) {
    //* Sometimes there would be a children inside prop so we would need to ignore that
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",

  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

customRender(reactElement, mainContainer);
