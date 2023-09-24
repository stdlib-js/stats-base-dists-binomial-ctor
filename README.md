<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Binomial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Binomial distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Binomial = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-ctor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Binomial = require( 'path/to/vendor/umd/stats-base-dists-binomial-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Binomial;
})();
</script>
```

#### Binomial( \[n, p] )

Returns a [binomial][binomial-distribution] distribution object.

```javascript
var binomial = new Binomial();

var mu = binomial.mean;
// returns 0.5
```

By default, `n = 1` and `p = 0.5`, which corresponds to a [Bernoulli][bernoulli-distribution] distribution. To create a distribution having a different `n` (number of trials) and `p` (success probability), provide the corresponding arguments.

```javascript
var binomial = new Binomial( 4, 0.2 );

var mu = binomial.mean;
// returns 0.8
```

* * *

## binomial

A [binomial][binomial-distribution] distribution object has the following properties and methods...

### Writable Properties

#### binomial.n

Number of trials of the distribution. `n` **must** be a positive integer.

```javascript
var binomial = new Binomial();

var n = binomial.n;
// returns 1.0

binomial.n = 4;

n = binomial.n;
// returns 4.0
```

#### binomial.p

Success probability of the distribution. `p` **must** be a number between 0 and 1.

```javascript
var binomial = new Binomial( 4, 0.2 );

var p = binomial.p;
// returns 0.2

binomial.p = 0.7;

p = binomial.p;
// returns 0.7
```

* * *

### Computed Properties

#### Binomial.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var binomial = new Binomial( 12, 0.4 );

var kurtosis = binomial.kurtosis;
// returns ~-0.153
```

#### Binomial.prototype.mean

Returns the [expected value][expected-value].

```javascript
var binomial = new Binomial( 12, 0.4 );

var mu = binomial.mean;
// returns ~4.8
```

#### Binomial.prototype.median

Returns the [median][median].

```javascript
var binomial = new Binomial( 12, 0.4 );

var median = binomial.median;
// returns 5.0
```

#### Binomial.prototype.mode

Returns the [mode][mode].

```javascript
var binomial = new Binomial( 12, 0.4 );

var mode = binomial.mode;
// returns 5.0
```

#### Binomial.prototype.skewness

Returns the [skewness][skewness].

```javascript
var binomial = new Binomial( 12, 0.4 );

var skewness = binomial.skewness;
// returns ~0.118
```

#### Binomial.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var binomial = new Binomial( 12, 0.4 );

var s = binomial.stdev;
// returns ~1.697
```

#### Binomial.prototype.variance

Returns the [variance][variance].

```javascript
var binomial = new Binomial( 12, 0.4 );

var s2 = binomial.variance;
// returns ~2.88
```

* * *

### Methods

#### Binomial.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.cdf( 0.5 );
// returns ~0.41
```

#### Binomial.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.logpmf( 2.0 );
// returns ~-1.873
```

#### Binomial.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.mgf( 0.5 );
// returns ~1.629
```

#### Binomial.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.pmf( 2.0 );
// returns ~0.154
```

#### Binomial.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var binomial = new Binomial( 4, 0.2 );

var y = binomial.quantile( 0.5 );
// returns 1.0

y = binomial.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var binomial = new Binomial( 10, 0.4 );

var mu = binomial.mean;
// returns 4.0

var mode = binomial.mode;
// returns 4.0

var s2 = binomial.variance;
// returns 2.4

var y = binomial.cdf( 0.8 );
// returns ~0.006

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-ctor/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-ctor/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-binomial-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-ctor/main/LICENSE

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
