const http = require("http");
const fs = require("fs");

const app = http.createServer(function (req, res) {
    let url = req.url;
    if (url == "/") {
        url = "/index.html";
        // res.end("this is root page");
        res.writeHead(200);
        res.end(fs.readFileSync(__dirname + url));
    } else if (url == "/save") {
        console.log(req.body);
    } else {
        res.writeHead(404);
        res.end("NotFound");
    }
});

app.listen(8080);

//  기능 정리
//  1. 텍스트 쓰기 기능
//  2. 이미지 첨부 기능
//  3. 파일 저장 기능(자동으로 될 것 같기는 하다)
//  4. 파일 불러오기 기능??
//  5. 서버에 저장 기능? 한번 생각 해볼 것
//  6. ctrl + v, 이미지 drag & drop 으로 이미지 파일 추가하기

// 참고 사이트

// 예시 사이트
// https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/373420/%EC%98%A8%EB%9D%BC%EC%9D%B8-%EB%A9%94%EB%AA%A8%EC%9E%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%BD%94%EB%93%9C
// data:text/html, <html contenteditable>

// 클립보드 기능
//https://www.delftstack.com/ko/howto/javascript/javascript-copy-to-clipboard/
