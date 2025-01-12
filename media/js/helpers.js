
function showtab(tabName) {
    var index;
    var tabs = document.getElementsByClassName("tab");
    console.log(tabs);
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

var size;
Promise.all([
    ...performance.getEntriesByType('resource').map(r =>
        fetch(r.name, { cache: 'force-cache' })
            .then(res => res.blob())
            .then(blob => blob.size)
            .catch(() => 0)
    ),
    Promise.resolve(new Blob([document.documentElement.outerHTML]).size)
]).then(sizes => {
    const size = (sizes.reduce((t, s) => t + s, 0) / 1024).toFixed(2);
    const iphone = (5120 / size).toFixed(2);
    document.getElementById('size').textContent = size + " Kb.";
    document.getElementById('iphone').textContent = iphone + "x";
});
