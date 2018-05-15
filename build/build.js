'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const fs = require('fs')
const fixStaticPath = require('./fix-static-path');

const spinner = ora('我开始玩命打包了,我的口号是"没有BUG"...今天一天过得不错吧？梦想是不是更远了？')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    fixStaticPath();

    if (stats.hasErrors()) {
      console.log(chalk.red(' 天哪，出错了.\n'))
      process.exit(1)
    }
    
    console.log(chalk.cyan('我打包完成了，累死小哥哥了，我要去加个鸡腿...\n'));
    console.log(chalk.cyan('稳住！快下班了。下班咱们跟产品经理干一架吧...\n'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
