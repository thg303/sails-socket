# Sails Socket
A Promise-based implementation of Sails Socket library inspired by axios.

## Install
simply install it with node or yarn:

```
npm install sails-socket
```
## Usage
You have to provide socket `url` to the `connect` method and you're off to go.

```
import SailsSocket from 'sails-socket'
...

SailsSocket.connect('http://your-socket-server/');
SailsSocket.get('/hello').then(function(jwr) {
  console.log(jwr.body);
}).catch(function(jwr) {
  console.log(jwr.error);
})

```

## API
The implemented methods are:
connect, disconnect, get, post, put, delete, request, on, off, setHeader

### connect
It has to be called before using any other functions, it would throw an error if there was already another socket connection. 
```
socket = SailsSocket.connect('url')
```
it returns the created socket. although it can be accessible later via static `SailsSocket.activeSocket` property.

### disconnect
it disconnects current active socket.
```
SailsSocket.disconnect()
```

### get
it sends a get request corresponding to `io.socket.get()` and returns a promise.
```
SailsSocket.get(url, data)
```

### post
it sends a post request corresponding to `io.socket.post()` and returns a promise.
```
SailsSocket.post(url, data)
```

### put
it sends a put request corresponding to `io.socket.put()` and returns a promise.
```
SailsSocket.put(url, data)
```

### delete
it sends a delete request corresponding to `io.socket.delete()` and returns a promise.
```
SailsSocket.delete(url, data)
```

### request
it sends a customizable request corresponding to `io.socket.request()` and returns a promise.
```
SailsSocket.request(options)
```

### on
it starts listening for server-sent events from Sails with specified `eventIdentity` corresponding to `io.socket.on()`.
```
SailsSocket.on(url, callback)
```

### off
unbind the specified event handler corresponding to `io.socket.off()`.
```
SailsSocket.off(url, callback)
```

### setHeader
sets header to the active socket
```
SailsSocket.setHeader(headers)
```
headers object

## Contributions
please check for closed issues before opening new issues.

