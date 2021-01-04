var express = require('express');
var router = express.Router();
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

const {User} = require('../models');
const {ChatList} = require('../models');

const crypto = require('crypto')

//JWT 토큰 저장
const token = jwt.sign({
        name: "test" // 토큰의 내용(payload)
    },
    secretObj.secret,    // 비밀 키
    {
        expiresIn: '5m'    // 유효 시간은 5분
    }
)

//채팅내용 저장
process.on('chatserver',(data)=>{


    ChatList.create({
        msg:data.msg,
        name:data.from.name
    })

})




//채팅 리스트 출
router.get('/chatlist', (req, res) => {
    ChatList.findAll({order: [['id', 'DESC']], limit: 10}).then((data) => {
        res.json(data);
    })
})



//로그인
router.post('/login', (req, res) => {
    let body = req.body.params;

    //비밀번호 암호화
    let secretPw = crypto.createHash('sha512').update(body.password).digest('base64');


    User.findOne({where: {email: body.uid, password: secretPw}})
        .then((results) => {

            if ((results != null) && (results.dataValues.email == body.uid) && (results.dataValues.password = secretPw)) {
                res.json({
                    uid: results.dataValues.name,
                    email: results.dataValues.email,
                    jwt: token,
                    status: 200
                })
            } else {
                res.json({
                    status: 500
                })
            }
        }).catch((err) => {
        res.json({
            status: 500,
            error: err.json
        })
    })

})


//사용자 회원가입
router.post('/reg', (req, res) => {


    let body = req.body.params

    //비밀번호 암호
    let secretPw = crypto.createHash('sha512').update(body.password).digest('base64');


    User.create({
        name: body.name,
        email: body.uid,
        average: body.average,
        password: secretPw,
        goal: body.goal
    }).then(() => {
        res.json({
            status: 200,
            msg: '회원가입 성공'
        })
    })
        .catch((err) => {
            console.log(err.json)

            res.json({
                status: 500,
                msg: '회원가입 실패'
            })
        })


})

//사용자 정보 조회
router.get('/info', (req, res) => {
    let body = req.query;



    User.findOne({where: {email: body.uid}})
        .then((results) => {

            //결과가 null이 아닌 경우
            if (results != null) {
                res.json({
                    name: results.dataValues.name,
                    email: results.dataValues.email,
                    average: results.dataValues.average,
                    goal: results.dataValues.goal,
                    status: 200
                })
            } else {
                res.json({
                    status: 500
                })
            }
        }).catch((err) => {
        res.json(err)
    })

})

//사용자 정보 수정
router.put('/update', (req, res) => {
    let body = req.body.params;


    //객체를 생성해 수정하는 부분만 데이터를 삽
    let user = {};
    user.name = body.name;
    user.email = body.uid;
    user.average = body.average;
    user.goal = body.goal;

    User.update(
        user,
        {where: {email: body.uid}})
        .then(() => {
            res.json({
                status: 200,
                msg: '회원수정 성공'
            })
        })
        .catch((err) => {
            if (err) {
                res.json({
                    status: 500,
                    msg: '회원수정 실패'
                })
            }

        })
})

//사용자 탈퇴
router.delete('/delete', (req, res) => {

    let body = req.query;

    User.destroy({where: {email: body.email}})
        .then(() => {
            res.json({
                status: 200,
                msg: '회원 삭제 성공'
            })
        })
        .catch(() => {
            res.json({
                status: 500,
                msg: '회원 삭제 실패'
            })
        })
})


module.exports = router;