##Prerequisites for local testing
Create a database

```psql -d template1```

```template1=# CREATE DATABASE massive WITH OWNER demorole;```

```template1=# GRANT ALL PRIVILEGES ON DATABASE massive TO demorole;```

```template1=# \q```

```hostmachine:path user$ psql massive < schema.sql```
##Installation
```npm install massive --save```

Babel comes with a second CLI which works exactly the same as Node.js's CLI, only it will compile ES6 code before running it.

```npm install --save-dev babel-cli```

Then follow the [tutorial](https://raw.githubusercontent.com/robconery/massive-js/master/README.md)

Express example requires

```npm install express --save```

##Run connection test
```babel-node dbtest```

##Run express app
```babel-node expresstest```


