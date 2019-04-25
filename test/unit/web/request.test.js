require('../../vm/web/index');
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('请求数据', function () {
  var url = 'http://abc.com/api/user/1';
  var data = { name: 'vava' };
  var header = { 'Accept-Encoding': 'testAE' };
  var resDataType = 'json';

  it('get', function () {
    return cml.get({
      url,
      header
    }).then(function (res) {
      expect(res.errno).to.equal('0');
    }, function(err) {
      expect(typeof err.data).to.equal('object');
      expect(typeof err.headers).to.equal('object');
      expect(typeof err.status).to.equal('number');
    })
  })

  it('post', function () {
    return cml.post({
      url,
      data,
      header,
      resDataType
    }).then(function (res) {
      expect(res.name).to.equal('vava');
    }, function(err) {
      expect(typeof err.data).to.equal('object');
      expect(typeof err.headers).to.equal('object');
      expect(typeof err.status).to.equal('number');
    })
  })


  it('put', function () {
    return cml.request({
      url,
      data,
      method: 'put',
      header,
      resDataType
    }).then(function (res) {
      expect(res.name).to.equal('vava');
    }, function(err) {
      expect(typeof err.data).to.equal('object');
      expect(typeof err.headers).to.equal('object');
      expect(typeof err.status).to.equal('number');
    })
  })

  it('delete', function () {
    return cml.request({
      url,
      data,
      method: 'delete',
      header,
      resDataType
    }).then(function (res) {
      expect(res.name).to.equal('vava');
    }, function(err) {
      expect(typeof err.data).to.equal('object');
      expect(typeof err.headers).to.equal('object');
      expect(typeof err.status).to.equal('number');
    })
  })

  it('request', function () {
    return cml.request({
      url,
      data,
      header,
      resDataType
    }).then(function (res) {
      expect(res.errno).to.equal('0');
    }, function(err) {
      expect(typeof err.data).to.equal('object');
      expect(typeof err.headers).to.equal('object');
      expect(typeof err.status).to.equal('number');
    })
  })

  it('jsonp', function () {
    return cml.get({
      url,
      header,
      resDataType,
      setting: { jsonp: true }
    }).then(function (res) {
      expect(res.errno).to.equal('0');
    })
  }, function(err) {
    expect(typeof err.data).to.equal('object');
    expect(typeof err.headers).to.equal('object');
    expect(typeof err.status).to.equal('number');
  })

})
