const express = require('express')
const WordRouter = express.Router()

const Word = require('../../models/Word')

WordRouter.route('/(:word)?').get( async (req, res) => {
    let words = []
    const { word } = req.params

    if(word !== "undefined" && word !== undefined){
        console.log(word)
        try{
            words = await Word.find({ r_word: word}) // 데이터베이스에서 쿼리로 단어를 검색
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