# eslint-config-paprika

> Just my spiced up ESLint shareable config to be used with [XO](1)


## Install

```
$ npm install --save-dev xo eslint-config-paprika
```


## Usage

Add some XO config to your package.json:

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": ["paprika"]
	}
}
```

Or to .eslintrc:

```json
{
	"extends": ["xo", "paprika"]
}
```

Use the `vue` sub-config if you are working with `*.vue` files:

```json
{
	"extends": ["paprika/vue"]
}
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
- [XO](1)


## License

MIT © Federico Giovagnoli

[1]: https://github.com/sindresorhus/xo
