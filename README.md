# GRequire

## Description

GRequire is a simple module that allows you to use requirejs in a synchronous way.

## Features
* auto load requirejs by cdn
* return a promise
## Installation

```bash
npm install grequire
```

## Usage

```javascript
var grequire = require('grequire');
const [module1,module2] = await grequire(['module1', 'module2']);
const module3 = await grequire('module3');
```

## 描述
GRequire 是一个简单的模块，允许您以同步的方式使用 requirejs。

## 特点
* 自动加载 requirejs 通过 cdn
* 返回一个 promise

## 安装
```bash
npm install grequire
```
## 用法
javascript
```
var grequire = require('grequire');
const [module1,module2] = await grequire(['module1', 'module2']);
const module3 = await grequire('module3');
```

## License

MIT
___


