// Local Storage
localStorage.setItem('myDataStorage', JSON.stringify(myData));
var myData = localStorage.getItem('myDataStorage');

await fetch("/post/data/here", {
    method: "POST",
    body: JSON.stringify(data)
}).then(res => {
    console.log("Request complete! response:", res);
});


// If you are as lazy as me (or just prefer a shortcut/helper):

window.post = function (url, data) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    });
}