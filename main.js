document.addEventListener("DOMContentLoaded", run);

function run() {
    const appElement = document.querySelector("#app")
    for (let i=0; i<100; i++) {
       const node = document.createElement("div")
       node.setAttribute("class", "box")
       node.onmouseenter = node.onmousedown = setActive
       node.ontouchstart = setActive
       appElement.appendChild(node)
    } 

    console.log("running...")
}

function setActive(e) {
    if (e.buttons == 0 && e.touches == undefined) {
        return
    }
    const node = e.target
    const classes = node.classList

    if (classes.contains("active")) {
        classes.remove("active")
    } else {
        classes.add("active")
    }

    return false
}