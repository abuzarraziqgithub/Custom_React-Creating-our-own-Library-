// function customRender(reactElement, container) {
//   //* First Version(Hard coded Attributes)
//   // The problem with this is we need to set attributes for every element separatly and we don't know if the element need attribute or not.
//   //  So there is better way which is to loop over the props object property.
//   const domElement1 = document.createElement(reactElement.type);
//   domElement1.innerHTML = reactElement.children;
//   domElement1.setAttribute("href", reactElement.props.href);
//   domElement1.setAttribute("target", reactElement.props.target);

//   container.appendChild(domElement1);

const mainContainer = document.getElementById("root");

function reactCustomElement(elementType, elementProps, elementChild) {
  const reactElement = {
    type: elementType,
    props: {
      href: elementProps,
      target: "_blank",
    },
    children: elementChild,
  };
  const documentElement = document.createElement(reactElement.type);
  documentElement.innerHTML = reactElement.children;
  if (reactElement.type == "a") {
    documentElement.setAttribute("href", reactElement.props.href);
    documentElement.setAttribute("target", reactElement.props.target);
  }
  mainContainer.appendChild(documentElement);
}

reactCustomElement(
  "a",
  "https://www.github.com/abuzarraziqgithub",
  "Click here to see my Github (:"
);

reactCustomElement("h1", "", "I'm Abuzar");
reactCustomElement("a", "https://www.google.com", "Hello Google");
