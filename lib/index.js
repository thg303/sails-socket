'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _sailsIo = require('sails.io.js');

var _sailsIo2 = _interopRequireDefault(_sailsIo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SailsSocket = function () {
  function SailsSocket() {
    _classCallCheck(this, SailsSocket);
  }

  _createClass(SailsSocket, null, [{
    key: 'connect',
    value: function connect(url) {
      var io = (0, _sailsIo2.default)(_socket2.default);
      io.sails.url = url;
      SailsSocket.activeSocket = io;
      return io;
    }
  }, {
    key: 'get',
    value: function get(pathname, data) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }
      return new Promise(function (resolve, reject) {
        SailsSocket.activeSocket.socket.get(pathname, data, function (body, jwr) {
          // Note: According to specs we can not return more than 1 argument in a Promise
          if (jwr.statusCode < 200 || jwr.statusCode >= 400) {
            return reject(jwr);
          }
          resolve(jwr);
        });
      });
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }
      return new Promise(function (resolve, reject) {
        SailsSocket.activeSocket.socket.post(url, data, function (body, jwr) {
          // Note: According to specs we can not return more than 1 argument in a Promise
          if (jwr.statusCode < 200 || jwr.statusCode >= 400) {
            return reject(jwr);
          }
          resolve(jwr);
        });
      });
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }
      return new Promise(function (resolve, reject) {
        SailsSocket.activeSocket.socket.put(url, data, function (body, jwr) {
          // Note: According to specs we can not return more than 1 argument in a Promise
          if (jwr.statusCode < 200 || jwr.statusCode >= 400) {
            return reject(jwr);
          }
          resolve(jwr);
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(url, data) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }
      return new Promise(function (resolve, reject) {
        SailsSocket.activeSocket.socket.delete(url, data, function (body, jwr) {
          // Note: According to specs we can not return more than 1 argument in a Promise
          if (jwr.statusCode < 200 || jwr.statusCode >= 400) {
            return reject(jwr);
          }
          resolve(jwr);
        });
      });
    }
  }, {
    key: 'request',
    value: function request(options) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }
      return new Promise(function (resolve, reject) {
        SailsSocket.activeSocket.socket.request(options, function (body, jwr) {
          // Note: According to specs we can not return more than 1 argument in a Promise
          if (jwr.statusCode < 200 || jwr.statusCode >= 400) {
            return reject(jwr);
          }
          resolve(jwr);
        });
      });
    }
  }, {
    key: 'on',
    value: function on(eventIdentity, cb) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }
      SailsSocket.activeSocket.socket.on(eventIdentity, cb);
    }
  }, {
    key: 'off',
    value: function off(eventIdentity, cb) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }

      SailsSocket.activeSocket.socket.off(eventIdentity, cb);
    }
  }, {
    key: 'setHeader',
    value: function setHeader(headers) {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }
      SailsSocket.activeSocket.socket.headers = headers;
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      if (SailsSocket.activeSocket === null) {
        throw new Error('no socket is connected!');
      }

      SailsSocket.activeSocket.io.disconnect();
      SailsSocket.activeSocket = null;
    }
  }]);

  return SailsSocket;
}();

SailsSocket.activeSocket = null;
exports.default = SailsSocket;