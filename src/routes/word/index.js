const express = require('express')
const WordRouter = express.Router()

const Word = require('../../models/Word')

WordRouter.route('/(:word)?').get( async (req, res) => {
    let words = []
    const { word } = req.params

    if(word !== "undefined" && word !== undefined){
        console.log(word)
        try{
            // words = await Word.find({ r_word: word}) // Word 모델의 r_word 필드에서 쿼리와 일치하는 단어 검색
            words = await Word.find({ r_word: { $regex: `^${word}`}}) // Word 모델의 r_word 필드에서 쿼리로 시작하는 단어 검색
            // words = await Word.find({ r_word: { $regex: `${word}$`}}) // Word 모델의 r_word 필드에서 쿼리로 끝나는 단어 검색
            // words = await Word.find({ r_des: { $regex: `${word}`}}) // Word 모델의 r_des 필드에서 쿼리를 포함하는 단어 검색
            
            // words = await Word.find({ $or: [      // Word 모델의 r_word 필드와 r_des 필드에서 쿼리를 포함하는 단어 검색
            //     {r_word: {$regex: `${word}`}},
            //     {r_des: {$regex: `${word}`}} 
            // ]})

            // words = await Word.find({ $or: [      // Word 모델의 r_word 필드와 r_des 필드에서 쿼리를 포함하는 단어 검색후 최신순으로 정렬하고 3개만 가져오기
            //         {r_word: {$regex: `${word}`}},
            //         {r_des: {$regex: `${word}`}} 
            //     ]})
            //     .sort({"_id": -1})
            //     .limit(6)
           
            
        }catch(e){
            console.log(e)
        }
    }else{
        console.log(word)
        try{
            words = await Word.find() // 데이터베이스에서 전체 단어 검색
        }catch(e){
            console.log(e) 
        }
    }
    res.json({status: 200, words})
})

module.exports = WordRouter