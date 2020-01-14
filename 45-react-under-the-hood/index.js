const HTMLObj = {
  tagName: "div", 
  attributes: {className: "header", id: "beef"}, 
  children: [
    "Hello steak!",
    {
      tagName: "h1",
      attributes: {},
      children: ["Wat"]
    },
    {
      tagName: "div",
      attributes: {className: "container"},
      children: [
        {
          key: 0
          tagName: "p",
          attributes: {},
          children: ["What's the best food in the world?"]
        },
        {
          key: 1
          tagName: "p",
          attributes: {},
          children: ["It's beef!"]
        },
        {
          key: 2
          tagName: "p",
          attributes: {},
          children: ["It's chicken"]
        },
        {
          key: 3
          tagName: "p",
          attributes: {},
          children: ["This ain't beef!"]
        }
      ]
    }
  ] 
}




function produceNode(node){
  // use the tagName of this node to create an element
  const element = document.createElement(node.tagName)

  // assign attributes to element
  for(let key in node.attributes){
    element[key] = node.attributes[key]
  }

  // iterate over children
  // 1. it's a string in which case, simply append
  // 2. it's an object, make an element and append it to this current element
  node.children.forEach(child => {
    if (typeof child === "string"){
      element.append(child)
    } else {
      element.append(produceNode(child))
    }
  })

  return element

}

function render(htmlObj, target){
  target.append(produceNode(htmlObj))
}