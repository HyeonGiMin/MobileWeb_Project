var express = require('express');
var router = express.Router();
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBRbzrbbUeRDOywyMVLhayGQm2w0zRm_9M',
    Promise: Promise
});
const {searchLoc}=require('../models');


//장소 검색 api
router.post('/',(req,res)=>{
     let body=req.body;
    //let body=req.query;
    let locationArray=[];

    console.log(body.lat);
    console.log(body.lng);

    locationArray.push([Number(body.lat),Number(body.lng)]);

    let LatLng=[body.lat,body.lng];

    let query={
        location:LatLng,
        radius:2000,  //미터단위
        name:'bowling'
    }


    //let query2= {query:"bowling"}

    //googleMapsClient.places(query2).asPromise().then( (ressultdata)=>{
    googleMapsClient.placesNearby(query).asPromise().then( (ressultdata)=>{

        let sample=ressultdata.json

        let test=sample.results

        if(test.length==0){
            console.log('404')
            res.json({
                status:404,
                msg:'근처에 볼링장이 없습니다.'
            })
        }


        for(let i=0;i<test.length;i++){
            searchLoc.create({
                location:test[i].name,
                name:'민현기',
                lat:test[i].geometry.location.lat,
                lng:test[i].geometry.location.lng
            })
        }


        res.json(test);


    }).catch((err)=>{
        res.json(err.json);
    })


})

module.exports = router;