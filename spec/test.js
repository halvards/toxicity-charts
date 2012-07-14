require.config({
	baseUrl: '../src',
	paths: {
		spec: '../spec',
		fixtures: '../spec/fixtures',
		jquery: '../lib/jquery/jquery-1.7.2.min',
		text: '../lib/require-js/text',
		d3: '../lib/d3/d3.v2.min',
		bootstrap: '../lib/bootstrap/js/bootstrap.min',
		amdutils: '../lib/amd-utils/src'
	},
	shim: {
		d3: { exports: 'd3'	},
		nvd3: {
			deps: ['d3'],
			exports: 'nv'
		},
		bootstrap: [ 'jquery' ]
	}
});
require([
	'jquery',
	'spec/navigationSpec',
	'spec/fxcopParserSpec'
], function ($) {
	'use strict';
	
	$.fx.off = true;
	jasmine.getFixtures().fixturesPath = 'fixtures';
	jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
	jasmine.getEnv().execute();
});