// worker.js

self.onmessage = function(event) {

    const n = event.data;

    for (let i = 0; i < n; i++) {
        console.log(i);
    }
};