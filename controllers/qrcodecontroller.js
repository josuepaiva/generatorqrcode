/**
 * Created by Josué Paiva on 17/05/18.
 */

'use strict';
// const pessoas = require("../models/pessoas");
const qr = require('qr-image');
const fs = require('fs');
const path = require('path')

exports.gerarQRCode = (req, res, next) => {
  // res.send("Gerando qrcode");
  const number = Math.floor(Math.random() * global.pessoas.length);
  const url = 'http://localhost:3000/qrcode/exibe/';
  const code = qr.image(url, { type: 'png'});
  res.type('png');

  code.pipe(res);

  var svg_string = qr.imageSync('kdjksjdksdka', { type: 'png' });

  // res.render('generatorqrcode', { idqrcode : number} ); 
  
}

exports.exibe = (req, res, next ) => {

  if (req.params.id !== null) {
    console.log(global.pessoas[req.params.id]);
    res.render('usuario', { usuario: global.pessoas[req.params.id]} );
  }else{
    res.render('error', { message: 'Id invalido'});
  }
}

exports.index = (req, res, next) => {
  res.render('index', { title : 'Gerador qrcode'} );
}