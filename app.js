const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

// post 요청 처리
const postData = JSON.stringify({
    msg: "Hello World!",
});

const options = {
    hostname: "localhost",
    port: 8080,
    path: "/save",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
    },
};

const app = http.createServer(function (req, res) {
    let url = req.url;
    if (url == "/") {
        url = "/index.html";
        // res.end("this is root page");
        res.writeHead(200);
        res.end(fs.readFileSync(__dirname + url));
    } else if (url == "/save") {
        // post 요청 처리
        let body = "";
        req.setEncoding("utf-8");
        req.on("data", function (data) {
            body += data; // post 방식으로 받은 데이터들이 query string 형식의 문자열 형태로 출력이 된다.
            dataObj = qs.parse(body); // 문자열을 JSON Obj형식으로 변환
        });
        // callback 지옥은 아닐지.. -> 수정 필요..
        req.on("end", function () {
            var textInfo = dataObj.textInfo;
            var fileName = dataObj.fileName;
            console.log(textInfo);
            // 요청받은 데이터를 이용하여 파일생성

            fs.readdir("./", (err, data) => {
                // 에러 처리는 어떻게 해야할까?
                console.log(err);
                if (!data.includes("saves")) {
                    fs.mkdir("./saves", (err) => {
                        console.log(err);
                        fs.writeFile(
                            __dirname + `/saves/${fileName}.txt`,
                            textInfo,
                            function (err) {
                                if (err) {
                                    console.log(
                                        "file write fail... : " + err.message
                                    );
                                    res.end("file write fail.....");
                                } else {
                                    // 파일작성이 에러없이 완료됬을 경우에는
                                    res.writeHead(301, { Location: "/" }); // 상태코드 301을 응답하여 redirection
                                    res.end();
                                }
                            }
                        );
                    });
                } else {
                    console.log("saves가 있습니다.");
                    fs.writeFile(
                        __dirname + `/saves/${fileName}.txt`,
                        textInfo,
                        function (err) {
                            if (err) {
                                console.log(
                                    "file write fail... : " + err.message
                                );
                                res.end("file write fail.....");
                            } else {
                                // 파일작성이 에러없이 완료됬을 경우에는
                                res.writeHead(301, { Location: "/" }); // 상태코드 301을 응답하여 redirection
                                res.end();
                            }
                        }
                    );
                }
            });
        });

        console.log(req);
        // const { textInfo } = req.body;
        // console.log(textInfo);
        res.writeHead(200);
        // res.end("request success!");
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

// drag & drop
// https://dev-gorany.tistory.com/254

// get, post 요청에 대한 서버 처리 without express
//  - https://gongbu-ing.tistory.com/10

// request.on?
// - https://0oooceanhigh.medium.com/request-on-f060659cb36e

// callback 지옥 수정해보기
