class EventListener {
    static celebContainerListener(celebContainer) {
        celebContainer.addEventListener("click", function (e) {
            e.stopPropagation()

            if (e.target.dataset.action === "increase") {
                EventListener.buttonClickHandler(e)
            } else if (e.target.innerText === "X") {
                console.log("clicking on X")
                e.target.parentNode.remove()
            }
        })
    }
    static buttonClickHandler(e) {
        let parent = e.target.parentNode.querySelector("h4 span")
        let num = parseInt(parent.innerText)
        num++
        parent.innerText = num
    }
}

