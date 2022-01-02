var express = require("express");
var router = express.Router();

const saveModel = require("../model/save");

/* 초기 페이지 보여주기 */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

// DB에 데이터 저장하기
router.post("/save", async (req, res) => {
    const { title, content } = req.body;
    console.log(req.body);
    console.log(title, content);
    const save = new saveModel({
        title: title,
        content: content,
    });
    try {
        const result = await save.save();
        console.log(result);
        // res.writeHead(200, { Location: "/" });
        res.status(200, { Location: "/" }).json({
            message: "save success!",
            data: result,
        });
    } catch (error) {
        // res.writeHead(500, { Location: "/" });
        res.status(500).json({
            message: error,
        });
    }
});

// DB 내용 조회하기
// // 2. DB 데이터 조회하기
// // (1) 전체 데이터 조회
router.get("/save", async (req, res) => {
    try {
        // find: DB에 데이터 검색하기
        // find(): () 안에 조건을 적어주면 된다.
        // ex: find({ title: "first" }) -> title이 first인 데이터를 가져옴
        // ex: find({}) -> 전체 데이터 가져오기
        const result = await saveModel.find({});
        res.status(200, { Location: "/" }).json({
            message: "read success!!",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});

module.exports = router;

// res.status??
