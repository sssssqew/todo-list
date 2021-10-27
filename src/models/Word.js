const mongoose = require('mongoose')

const wordSchema = mongoose.Schema({
    r_seq: { type: String, trim: true },
    r_word: { type: String, trim: true },
    r_link: { type: String, trim: true },
    r_chi: { type: String, trim: true },
    r_des: { type: String, trim: true },
    r_pos: { type: String, trim: true },
})

const Word = mongoose.model('Word', wordSchema, 'kor_dic_coll') 

module.exports = Word;