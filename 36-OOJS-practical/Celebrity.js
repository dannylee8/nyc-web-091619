


class Celebrity {
    // Create a celebrity
    constructor(celeb) {
        this.id = celeb.id
        this.name = celeb.name
        this.image = celeb.image
        this.likes = celeb.likes
        Celebrity.all.push(this)
    }

    // Create a celebrity element to append to the DOM
    createElement = () => {
        let li = document.createElement("li")
        li.dataset.id = this.id

        li.innerHTML = `
        <h3>${this.name}</h3>
        <h4>Score: <span>${this.likes}</span></h4>
        <img alt="" src=${this.image}/>
        <button class="upButton" data-action="increase" data-celeb=${this.id}>Up Vote</button>
        <button class="downButton">Down Vote</button>
        <button>X</button>
        `
        this.element = li
        return li
    }

    // Append that element to the DOM
    appendCeleb(element) {
        element.append(this.createElement())
    }
}
Celebrity.all = []
