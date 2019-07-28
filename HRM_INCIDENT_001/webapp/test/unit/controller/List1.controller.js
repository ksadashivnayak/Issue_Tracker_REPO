/*global QUnit*/

sap.ui.define([
	"com/hrm/i/HRM_INCIDENT_001/controller/List1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("List1 Controller");

	QUnit.test("I should test the List1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});