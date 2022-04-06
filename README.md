### Instalation

```bash
$ git clone https://github.com/AlexanderAverin/tracker.git
$ cd tracker
$ make install
```

#### Usage

Tool have 3 option: root directory (default: <current dir>), recursively (default: false ) and output format (default: "arrow style").

```bash
$ tracker -d /usr/currentDir -r true "<keyword>"
```

To be:

```
file.js ===> 
<first matching line>
<secons matching line>...
```

Or 

```bash
$ tracker -rootDirectory /urs/currentDir --recursively true --format list "<keyword>"
```

To be:

```
<first matching line>
<second matching line>...
```
