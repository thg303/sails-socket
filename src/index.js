import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'

export default class SailsSocket {
  static activeSocket = null

  static connect (sailsParams = {}) {
    let io = sailsIOClient(socketIOClient)
    Object.keys(sailsParams).map(key => (io.sails[key] = sailsParams[key]))
    SailsSocket.activeSocket = io
    return io
  }

  static get (pathname, data) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }
    return new Promise((resolve, reject) => {
      SailsSocket.activeSocket.socket.get(pathname, data, (body, jwr) => {
        // Note: According to specs we can not return more than 1 argument in a Promise
        if (jwr.statusCode < 200 || jwr.statusCode >= 400) { return reject(jwr) }
        resolve(jwr)
      })
    })
  }

  static post (url, data) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }
    return new Promise((resolve, reject) => {
      SailsSocket.activeSocket.socket.post(url, data, (body, jwr) => {
        // Note: According to specs we can not return more than 1 argument in a Promise
        if (jwr.statusCode < 200 || jwr.statusCode >= 400) { return reject(jwr) }
        resolve(jwr)
      })
    })
  }

  static put (url, data) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }
    return new Promise((resolve, reject) => {
      SailsSocket.activeSocket.socket.put(url, data, (body, jwr) => {
        // Note: According to specs we can not return more than 1 argument in a Promise
        if (jwr.statusCode < 200 || jwr.statusCode >= 400) { return reject(jwr) }
        resolve(jwr)
      })
    })
  }

  static delete (url, data) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }
    return new Promise((resolve, reject) => {
      SailsSocket.activeSocket.socket.delete(url, data, (body, jwr) => {
        // Note: According to specs we can not return more than 1 argument in a Promise
        if (jwr.statusCode < 200 || jwr.statusCode >= 400) { return reject(jwr) }
        resolve(jwr)
      })
    })
  }

  static request (options) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }
    return new Promise((resolve, reject) => {
      SailsSocket.activeSocket.socket.request(options, (body, jwr) => {
        // Note: According to specs we can not return more than 1 argument in a Promise
        if (jwr.statusCode < 200 || jwr.statusCode >= 400) { return reject(jwr) }
        resolve(jwr)
      })
    })
  }

  static on (eventIdentity, cb) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }
    SailsSocket.activeSocket.socket.on(eventIdentity, cb)
  }

  static off (eventIdentity, cb) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }

    SailsSocket.activeSocket.socket.off(eventIdentity, cb)
  }

  static setHeader (headers) {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }
    SailsSocket.activeSocket.socket.headers = headers
  }

  static disconnect () {
    if (SailsSocket.activeSocket === null) {
      throw new Error('no socket is connected!')
    }

    SailsSocket.activeSocket.io.disconnect()
    SailsSocket.activeSocket = null
  }
}
