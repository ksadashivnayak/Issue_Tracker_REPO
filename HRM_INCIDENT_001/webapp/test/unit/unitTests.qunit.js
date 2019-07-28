/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/hrm/i/HRM_INCIDENT_001/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});