function testFetch() {
    fetch("http://192.168.1.101") 
    .then(response => response.text())
    .then(console.log(response));
}