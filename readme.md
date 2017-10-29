# verdaccio-server

verdaccio server

## Install

```
npm install -g verdaccio-server
```

## Usage

```
verdaccio-server
```

```
verdaccio-server start
verdaccio-server stop
verdaccio-server list
verdaccio-server stopall
verdaccio-server show
```

### Config

```
verdaccio-server show
```
edit config.yaml

```
...
uplinks:
  npmjs:
    url: https://registry.npm.taobao.org/
...
listen: 0.0.0.0:4873
```

### Client

```
npm install -g nrm
nrm add local http://localhost:4873/
nrm use local
```

```
npm publish
```

### Link

verdaccio
https://github.com/verdaccio/verdaccio

forever
https://github.com/foreverjs/forever

nrm
https://github.com/Pana/nrm