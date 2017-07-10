var express = require("express"),
    app = express(),
    _SERVER = require("http").createServer(app);

_SERVER.listen(1337, "127.0.0.1", (err) => {
    if (err) console.log("[# Không thể khởi động máy chủ]");
    else console.log("[> Khởi động thành công máy chủ]");
});

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf88" });
    res.end("Hello, Admin");
});