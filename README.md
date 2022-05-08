### Instalation

Required: nodejs >= 16.x

During installation, the executable is installed using the `npm link` command.

```bash
$ git clone https://github.com/AlexanderAverin/tracker.git
$ cd tracker
$ make install
```

#### Usage

Tool have 3 option: root directory (default: <current dir>), recursively (default: false ) and output format (default: "arrow style").

##### Launch tool examples:

```bash
$ tracker -d /usr/currentDir -r true "<keyword>"
```

```bash
$ tracker -rootDirectory /urs/currentDir --recursively true --format list "<keyword>"
```
