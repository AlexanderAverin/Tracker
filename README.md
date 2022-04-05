### Instalation

```bash
$ brew install tracker
```

#### Usage

Tool have 3 option: root directory (default: <current dir>), recursively (default: false ) and output format (default: "arrow style").

```bash
$ tracker -d /usr/currentDir -r true -f list
```

Or 

```bash
$ tracker -rootDirectory /urs/currentDir --recursively true --format list
```

Tool have api (return parsed files list with mathing lines).



A list of things to come in the future:

​	>  highlighting of relevant words and expressions

​	>  keywords lists (arrays)

​	>  regexp search