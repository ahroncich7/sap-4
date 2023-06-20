/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"prueba/pre_examen/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
