const body = document.querySelector("body");

setInterval(() => {
    // generate 3 random numbers between 0 255
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}, 1000)