let app1 = new Vue ({
    el: "#app1",
    data: {
       message: "Hello Vue!"
    }
})

let app2 = new Vue({
    el:"app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "http://bbc.in/2LAnJs8",
        linkText: "Google is down!"
    }
})