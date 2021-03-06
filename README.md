[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/rsomlette/next-practice/tree/master/)

# TypeScript Next.js example

This is a really simple project that show the usage of:
* [Next.js ](https://github.com/zeit/next.js/)
* [TypeScript](https://www.typescriptlang.org/index.html)
* [Styled Components](https://www.styled-components.com/)

## How to use it?

### Clone `git@github.com:rsomlette/next-practice.git`

--OR--

### Download manually

Download the example:

```
cd next-practice
```

Install it and run it with:

```bash
yarn install
yarn dev
```

## The idea behind the example

Use the [@zeit/next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript) plugin to inject [@babel/preset-typescript](https://github.com/babel/babel/tree/master/packages/babel-preset-typescript) into Next.js, allowing for fast TypeScript transpilation. It also implements a `tsconfig.json` as recommended by [the @zeit/next-typescript plugin page](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript/#readme).

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this in your `test` scripts, say, for your CI process.

## Cons: 

The project isn't using typescript compiler. Therefore as quoted above only your IDE or the script `yarn tsc` will provide typescript errors.