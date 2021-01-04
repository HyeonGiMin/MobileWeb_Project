var express = require('express');
var router = express.Router();
const { User } = require('../models');
const { GameList } =require('../models');



//Average 계산
router.post('/insert',(req,res)=>{
    let body=req.body.params;
    console.log(body);
    let uavger=0;
    let count=1;

    User.findOne({where:{email:body.email}}).then((data)=>{
        uavger+=data.average;
        console.log(data.average);
        console.log(body.score);

        GameList.create({
            name:body.name,
            score:body.score
        }).then(()=>{
            GameList.findAll({where:{name:body.name}}).then((data)=>{
                console.log(typeof(data));
                console.log(data[0].name)
                for(let i=0;i<data.length;i++){
                    uavger+=data[i].score;
                    count++;
                }
            }).then(()=>{
                User.update({average:(uavger/count)},{where:{name:body.name}}).then(()=>{
                    res.json({
                        status:200,
                        msg:"점수 등록 완료"
                    })
                })
            })
        })

    })




})


router.get('/test',(req,res)=>{
    let sendData=new Array();
  GameList.findAll().then((data)=>{
     data.forEach((gamelist)=>{
          let a =String(gamelist.dataValues.createdAt)
          let year=new Date(gamelist.dataValues.createdAt).getFullYear()
          let month=new Date(gamelist.dataValues.createdAt).getMonth()
          let day=new Date(gamelist.dataValues.createdAt).getDate()
          let hour=a.substring(16,18);
          let min=a.substring(19,21);
          let sec=a.substring(22,24);
          let time=year+"년"+month+"월"+day+"일 "+hour+"시"+min+"분"+sec+"초"


         sendData.push({

             score:gamelist.dataValues.score,
             year:year+"년",
             date:month+"월"+day+"일",
             time:hour+"시"+min+"분"+sec+"초"

         })
      })
      res.json(sendData);;
  })
})

//정보출력
router.get('/info',(req,res)=>{

    let body=req.query;


    GameList.findAll({where:{name:body.name},order: [['id', 'DESC']],limit: 10 }).then((response)=>{

        let sendData=new Array();

        response.forEach((gamelist)=>{
            //시간 변
            let a =String(gamelist.dataValues.createdAt)
            let year=new Date(gamelist.dataValues.createdAt).getFullYear()
            let month=new Date(gamelist.dataValues.createdAt).getMonth()+1
            let day=new Date(gamelist.dataValues.createdAt).getDate()
            let hour=a.substring(16,18);
            let min=a.substring(19,21);
            let sec=a.substring(22,24);
            let time=year+"년 "+month+"월 "+day+"일  "+hour+"시 "+min+"분 "+sec+"초 "
            console.log(time);

            sendData.push({
                id:gamelist.dataValues.id,
                score:gamelist.dataValues.score,
                year:year+"년",
                date:month+"월"+day+"일",
                time:hour+"시"+min+"분"+sec+"초"

            })

        })
        res.json(sendData);
    }).catch(()=>{
        res.json({
            status:500,
            msg:"출력 오류"
        })
    })
})

//사용자 스코어 조회
router.get("/userScore",(req,res)=>{
    let body=req.query;

    User.findOne({where:{name:body.name}}).then((data)=>{
        let user=data.dataValues
        res.json({
            status:200,
            msg:'출력성공',
            name:user.name,
            average:user.average,
            goal:user.goal

        })
    }).catch((err)=>{
        console.log(err)
        res.json({
            status:500,
            msg:"출력 오류"
        })
    })

})

//사용자 점수 기록 삭제
router.delete("/delscore",(req,res)=>{
    let body=req.query;
    GameList.destroy({where:{id:Number(body.id)}}).then((data)=>{
        res.json({
            status:200,
            msg:'삭제 성공'

        })
    }).catch((err)=>{
        console.log(err)
        res.json({
            status:500,
            msg:"삭제 오류",
            error:err.json
        })
    })

})


module.exports = router;