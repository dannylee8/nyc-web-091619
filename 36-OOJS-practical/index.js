
let parentUl = document.getElementsByTagName("ul")[0]
let adapter = new Adapter("http://localhost:3000/celebrities")
// let eventListener = new EventListener

// Should fetch all of our celebrities and append them to the DOM


adapter.getRequest().then(data => data.forEach((celeb) => {
    let celebrity = new Celebrity(celeb)
    celebrity.appendCeleb(parentUl)
}))

function addCelebrity(obj) {
    console.log("adding", obj)
    //send a POST request
    fetch(api, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(function (resp) { return resp.json() })
        .then(function (resp) { appendCelebrity(resp) })
}


let celebrityContainer = document.getElementById("image-container")
EventListener.celebContainerListener(celebrityContainer)

let addButton = document.getElementsByTagName("BUTTON")[0]





addButton.addEventListener("click", function (e) {
    e.stopPropagation()
    let oldChild = e.target
    console.log("old child: ", oldChild)
    let form = document.createElement("form")
    form.innerHTML = '<input type="text" placeholder="enter name" data-id="name"/><input type = "text" placeholder="enter image" data-id="image"/><input type="submit" value="Add Celeb" />'

    console.log("parent: ", e.target.parentNode)
    e.target.parentNode.replaceChild(form, oldChild)

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = e.target[0].value
        let image = e.target[1].value
        console.log(name)

        let obj = {
            name: name,
            image: image
        }
        addCelebrity(obj)
        // appendCelebrity(obj)
        form.reset()

    })

})


// 1. Celebrity Class
//     - Append Celebrity
// 2. Fetch Requests
// 3. Event Listeners
