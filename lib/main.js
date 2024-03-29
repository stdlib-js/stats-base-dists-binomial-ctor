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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var isProbability = require( '@stdlib/assert-is-probability' ).isPrimitive;
var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var kurtosis = require( '@stdlib/stats-base-dists-binomial-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-binomial-mean' );
var median = require( '@stdlib/stats-base-dists-binomial-median' );
var mode = require( '@stdlib/stats-base-dists-binomial-mode' );
var skewness = require( '@stdlib/stats-base-dists-binomial-skewness' );
var stdev = require( '@stdlib/stats-base-dists-binomial-stdev' );
var variance = require( '@stdlib/stats-base-dists-binomial-variance' );
var cdf = require( '@stdlib/stats-base-dists-binomial-cdf' );
var logpmf = require( '@stdlib/stats-base-dists-binomial-logpmf' );
var mgf = require( '@stdlib/stats-base-dists-binomial-mgf' );
var pmf = require( '@stdlib/stats-base-dists-binomial-pmf' );
var quantile = require( '@stdlib/stats-base-dists-binomial-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function binomialCDF( x ) {
	return cdf( x, this.n, this.p );
}

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPMF
*/
function binomialLogPMF( x ) {
	return logpmf( x, this.n, this.p );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function binomialMGF( t ) {
	return mgf( t, this.n, this.p );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PMF
*/
function binomialPMF( x ) {
	return pmf( x, this.n, this.p );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function binomialQuantile( p ) {
	return quantile( p, this.n, this.p );
}


// MAIN //

/**
* Binomial distribution constructor.
*
* @constructor
* @param {PositiveInteger} [n=1] - number of trials
* @param {Probability} [p=0.5] - success probability
* @throws {TypeError} `n` must be a positive integer
* @throws {TypeError} `p` must be a number between 0 and 1
* @returns {Binomial} distribution instance
*
* @example
* var binomial = new Binomial( 5, 0.1 );
*
* var y = binomial.cdf( 0.8 );
* // returns ~0.59
*
* var v = binomial.mode;
* // returns 0.0
*/
function Binomial() {
	var n;
	var p;
	if ( !(this instanceof Binomial) ) {
		if ( arguments.length === 0 ) {
			return new Binomial();
		}
		return new Binomial( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		n = arguments[ 0 ];
		p = arguments[ 1 ];
		if ( !isPositiveInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Number of trials must be a positive integer. Value: `%s`.', n ) );
		}
		if ( !isProbability( p ) ) {
			throw new TypeError( format( 'invalid argument. Success probability must be a number between 0 and 1. Value: `%s`.', p ) );
		}
	} else {
		n = 1;
		p = 0.5;
	}
	defineProperty( this, 'n', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return n;
		},
		'set': function set( value ) {
			if ( !isPositiveInteger( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive integer. Value: `%s`.', value ) );
			}
			n = value;
		}
	});
	defineProperty( this, 'p', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return p;
		},
		'set': function set( value ) {
			if ( !isProbability( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number on the interval: [0, 1]. Value: `%s`.', value ) );
			}
			p = value;
		}
	});
	return this;
}

/**
* Binomial distribution excess kurtosis.
*
* @name kurtosis
* @memberof Binomial.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var binomial = new Binomial( 12, 0.4 );
*
* var v = binomial.kurtosis;
* // returns ~-0.153
*/
setReadOnlyAccessor( Binomial.prototype, 'kurtosis', function get() {
	return kurtosis( this.n, this.p );
});

/**
* Binomial distribution expected value.
*
* @name mean
* @memberof Binomial.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var binomial = new Binomial( 12, 0.4 );
*
* var v = binomial.mean;
* // returns ~4.8
*/
setReadOnlyAccessor( Binomial.prototype, 'mean', function get() {
	return mean( this.n, this.p );
});

/**
* Binomial distribution median.
*
* @name median
* @memberof Binomial.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var binomial = new Binomial( 12, 0.4 );
*
* var v = binomial.median;
* // returns 5.0
*/
setReadOnlyAccessor( Binomial.prototype, 'median', function get() {
	return median( this.n, this.p );
});

/**
* Binomial distribution mode.
*
* @name mode
* @memberof Binomial.prototype
* @type {NonNegativeInteger}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var binomial = new Binomial( 12, 0.4 );
*
* var v = binomial.mode;
* // returns 5.0
*/
setReadOnlyAccessor( Binomial.prototype, 'mode', function get() {
	return mode( this.n, this.p );
});

/**
* Binomial distribution skewness.
*
* @name skewness
* @memberof Binomial.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var binomial = new Binomial( 12, 0.4 );
*
* var v = binomial.skewness;
* // returns ~0.118
*/
setReadOnlyAccessor( Binomial.prototype, 'skewness', function get() {
	return skewness( this.n, this.p );
});

/**
* Binomial distribution standard deviation.
*
* @name stdev
* @memberof Binomial.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var binomial = new Binomial( 12, 0.4 );
*
* var v = binomial.stdev;
* // returns ~1.697
*/
setReadOnlyAccessor( Binomial.prototype, 'stdev', function get() {
	return stdev( this.n, this.p );
});

/**
* Binomial distribution variance.
*
* @name variance
* @memberof Binomial.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var binomial = new Binomial( 12, 0.4 );
*
* var v = binomial.variance;
* // returns ~2.88
*/
setReadOnlyAccessor( Binomial.prototype, 'variance', function get() {
	return variance( this.n, this.p );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Binomial.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var binomial = new Binomial( 4, 0.2 );
*
* var v = binomial.cdf( 0.5 );
* // returns ~0.41
*/
setReadOnly( Binomial.prototype, 'cdf', binomialCDF );

/**
* Evaluates the natural logarithm of the probability density function (PMF).
*
* @name logpmf
* @memberof Binomial.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var binomial = new Binomial( 4, 0.2 );
*
* var v = binomial.logpmf( 2.0 );
* // returns ~-1.873
*/
setReadOnly( Binomial.prototype, 'logpmf', binomialLogPMF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Binomial.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var binomial = new Binomial( 4, 0.2 );
*
* var v = binomial.mgf( 0.5 );
* // returns ~1.629
*/
setReadOnly( Binomial.prototype, 'mgf', binomialMGF );

/**
* Evaluates the probability density function (PMF).
*
* @name pmf
* @memberof Binomial.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var binomial = new Binomial( 4, 0.2 );
*
* var v = binomial.pmf( 2.0 );
* // returns ~0.154
*/
setReadOnly( Binomial.prototype, 'pmf', binomialPMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Binomial.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var binomial = new Binomial( 4, 0.2 );
*
* var v = binomial.quantile( 0.5 );
* // returns 1.0
*/
setReadOnly( Binomial.prototype, 'quantile', binomialQuantile );


// EXPORTS //

module.exports = Binomial;
