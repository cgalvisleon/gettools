npm i -D babel-core babel-cli babel-preset-es2015

```
  "scripts": {
    "lint": "standard",
    "build": "npx babel src -d lib && cp package.json ./lib/package.json && cp README.md ./lib/README.md"
  },
  "babel": {
    "presets": [
      "es2015"
    ],
    "plugins": []
  },
```

npm login

npm version 1.0.1 -f && npm run build && npm publish lib
