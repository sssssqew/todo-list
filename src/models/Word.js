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
// Word => words
//  Kor_dic_coll   => kor_dic_colls

module.exports = Word;