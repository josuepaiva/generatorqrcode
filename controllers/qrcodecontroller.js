/**
 * Created by Josué Paiva on 17/05/18.
 */

'use strict';
const qr = require('qr-image');
const fs = require('fs');
const q = require('q');

exports.gerarQRCode = (req, res, next) => {
  
  const number = Math.floor(Math.random() * global.pessoas.length);
  const url = 'http://localhost:3000/qrcode/exibe/';

  gravar_versao1(number, url)
    .then(function(conteudo){
    return gravar_versao40(number, url);
  }).then(function(conteudo){
    res.render('generatorqrcode', { idqrcode : number});
  }); 
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

function gravar_versao1(number, url){

  var deferred = q.defer();

  var qr_versao1 = qr.imageSync(url + number, { type: 'png' });

  fs.writeFile('public/images/qr_versao1.png', qr_versao1, function(err){
    deferred.resolve(true);
  });

  return deferred.promise;
}

function gravar_versao40(number){

  var deferred = q.defer();

  var qr_versao1 = qr.imageSync(JSON.stringify(global.pessoas[number]), { type: 'png', size: 40 });

  fs.writeFile('public/images/qr_versao40.png', qr_versao1, function(err){
    deferred.resolve(true);
  });

  return deferred.promise;
}