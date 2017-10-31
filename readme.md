# verdaccio-server

local npm registry proxy server

## Install

```
# $
npm install -g verdaccio-server
```

## Usage

```
# $
verdaccio-server
verdaccio-server start
verdaccio-server stop
verdaccio-server list
verdaccio-server stop-all
verdaccio-server show
# windows
verdaccio-server service-install
verdaccio-server service-uninstall
verdaccio-server service-start
verdaccio-server service-stop
verdaccio-server service-restart
```

```
// js
import * as verdaccioServer from "verdaccio-server";
verdaccioServer.start();
verdaccioServer.stop();
verdaccioServer.list();
verdaccioServer.stopAll();
verdaccioServer.show();
verdaccioServer.cli();
// windows
verdaccioServer.serviceInstall();
verdaccioServer.serviceUninstall();
verdaccioServer.serviceStart();
verdaccioServer.serviceStop();
verdaccioServer.serviceRestart();
```

### Config

```
# $
verdaccio-server show
```
config.yaml
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
# $
npm install -g nrm
nrm add local http://localhost:4873/
nrm use local
```

```
# $
npm publish
```

### Link

verdaccio
https://github.com/verdaccio/verdaccio

forever
https://github.com/foreverjs/forever

nrm
https://github.com/Pana/nrm