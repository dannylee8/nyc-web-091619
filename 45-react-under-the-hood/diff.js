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
          key: 0,
          tagName: "p",
          attributes: {},
          children: ["It's beef!"]
        },
        {
          key: 1,
          tagName: "p",
          attributes: {},
          children: ["It's chicken"]
        },
        {
          key: 2,
          tagName: "p",
          attributes: {},
          children: ["This ain't beef!"]
        }
      ]
    }
  ] 
}
