/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-binomial-quantile' );
var logpmf = require( '@stdlib/stats-base-dists-binomial-logpmf' );
var cdf = require( '@stdlib/stats-base-dists-binomial-cdf' );
var mgf = require( '@stdlib/stats-base-dists-binomial-mgf' );
var pmf = require( '@stdlib/stats-base-dists-binomial-pmf' );
var kurtosis = require( '@stdlib/stats-base-dists-binomial-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-binomial-skewness' );
var stdev = require( '@stdlib/stats-base-dists-binomial-stdev' );
var variance = require( '@stdlib/stats-base-dists-binomial-variance' );
var median = require( '@stdlib/stats-base-dists-binomial-median' );
var mode = require( '@stdlib/stats-base-dists-binomial-mode' );
var mean = require( '@stdlib/stats-base-dists-binomial-mean' );
var Binomial = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Binomial, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `n` argument which is not a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Binomial( value, 0.3 );
		};
	}
});

tape( 'the function throws an error if provided a `p` argument which is not a probability', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		-0.1,
		1.1,
		5.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Binomial( 8, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `n` and `p`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Binomial( 8 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var binomial = new Binomial();
	t.strictEqual( binomial instanceof Binomial, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var binomial = new Binomial( 4, 0.5 );
	t.strictEqual( binomial instanceof Binomial, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var binomial = Binomial();
	t.strictEqual( binomial instanceof Binomial, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	binomial = Binomial( 4, 0.5 );
	t.strictEqual( binomial instanceof Binomial, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `n`', function test( t ) {
	var binomial;

	binomial = new Binomial( 2, 0.4 );
	t.strictEqual( hasOwnProp( binomial, 'n' ), true, 'has property' );
	t.strictEqual( binomial.n, 2, 'returns expected value' );

	binomial.n = 9;
	t.strictEqual( binomial.n, 9, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `n` to a value which is not a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		4.3,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var binomial = new Binomial();
			binomial.n = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `p`', function test( t ) {
	var binomial;

	binomial = new Binomial( 10, 0.4 );
	t.strictEqual( hasOwnProp( binomial, 'p' ), true, 'has property' );
	t.strictEqual( binomial.p, 0.4, 'returns expected value' );

	binomial.p = 0.8;
	t.strictEqual( binomial.p, 0.8, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `p` to a value which is not a probability', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		-0.1,
		1.1,
		5.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var binomial = new Binomial();
			binomial.p = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var binomial;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'kurtosis' ), true, 'has property' );

	binomial = new Binomial( 8, 0.4 );
	t.strictEqual( binomial.kurtosis, kurtosis( 8, 0.4 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var binomial;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'mean' ), true, 'has property' );

	binomial = new Binomial( 2, 0.9 );
	t.strictEqual( binomial.mean, mean( 2, 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var binomial;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'median' ), true, 'has property' );

	binomial = new Binomial( 20, 0.4 );
	t.strictEqual( binomial.median, median( 20, 0.4 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var binomial;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'mode' ), true, 'has property' );

	binomial = new Binomial( 3, 0.4 );
	t.strictEqual( binomial.mode, mode( 3, 0.4 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var binomial;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'skewness' ), true, 'has property' );

	binomial = new Binomial( 9, 0.3 );
	t.strictEqual( binomial.skewness, skewness( 9, 0.3 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var binomial;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'stdev' ), true, 'has property' );

	binomial = new Binomial( 9, 0.3 );
	t.strictEqual( binomial.stdev, stdev( 9, 0.3 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var binomial;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'variance' ), true, 'has property' );

	binomial = new Binomial( 5, 0.8 );
	t.strictEqual( binomial.variance, variance( 5, 0.8 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var binomial;
	var y;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Binomial.prototype.cdf ), true, 'has method' );

	binomial = new Binomial();
	y = binomial.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability mass function (PMF)', function test( t ) {
	var binomial;
	var y;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'logpmf' ), true, 'has property' );
	t.strictEqual( isFunction( Binomial.prototype.logpmf ), true, 'has method' );

	binomial = new Binomial();
	y = binomial.logpmf( 0.0 );

	t.strictEqual( y, logpmf( 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var binomial;
	var y;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Binomial.prototype.mgf ), true, 'has method' );

	binomial = new Binomial();
	y = binomial.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var binomial;
	var y;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( Binomial.prototype.pmf ), true, 'has method' );

	binomial = new Binomial();
	y = binomial.pmf( 0.0 );

	t.strictEqual( y, pmf( 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var binomial;
	var y;

	t.strictEqual( hasOwnProp( Binomial.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Binomial.prototype.quantile ), true, 'has method' );

	binomial = new Binomial();
	y = binomial.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});
