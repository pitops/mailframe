<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/VLr2Gs8.png" alt="Messageraft"></a>
</p>

<h2 align="center">Mailframe</h3>

<div align="center">

![Status](https://img.shields.io/badge/status-active-success.svg)
[![Version](https://img.shields.io/npm/v/@mailframe/mailframe.svg)](https://npmjs.org/package/@mailframe/cli)
[![License](https://img.shields.io/npm/l/@mailframe/mailframe)](https://github.com/pitops/mailframe/blob/main/package.json)
[![GitHub Issues](https://img.shields.io/github/issues/pitops/mailframe.svg)](https://github.com/pitops/mailframe/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/pitops/mailframe.svg)](https://github.com/pitops/mailframe/pulls)
</div>

## <p align = "center">💡 Small library that makes it super easy to manage and dispatch emails</p>

## 📝 Table of Contents

<!-- toc -->
- [About](#about)
- [Getting Started](#getting-started)
<!-- tocstop -->

<!-- about -->
## 🧐 About <a name = "about"></a>
Mailframe is a small library that helps organize email templates, and easily dispatch emails with dynamic templating built-in retries, and more.

It was originally developed for use with [MessageRaft](https://github.com/messageraft/cli) but it can also be used without (check the custom dispatcher example)

* [mustache.js](https://github.com/janl/mustache.js/) template syntax
* Automatic retries on **408, 413, 429, 500, 502, 503, 504** status codes (using  [ky](https://github.com/sindresorhus/ky))
* Automatic conversion of html to text and dispatch both

> [MessageRaft](https://github.com/messageraft/cli) needs to be setup separately if using the built-in method of dispatching emails

<!-- aboutstop -->

## 🏁 Getting Started <a name ="getting-started"></a>

### Step 1 - Setup Messageraft

Follow the instructions found [here](https://github.com/messageraft/cli) to install and setup MessageRaft.

### Step 2 - Install Mailframe

```sh-session
$ npm install @mailframe/mailframe

OR

$ yarn add mailframe 
```

### Step 3 - Usage

Please checkout the example [here](https://github.com/pitops/mailframe/tree/main/examples/default-usage) for usage.

### Step 3.1 - Custom dispatcher

In case you don't want to use MessageRaft and instead you prefer to use an email provider directly you can do that. Please check the example [here](https://github.com/pitops/mailframe/tree/main/examples/custom-dispatcher) for details

## 🤝 Contributions welcome
