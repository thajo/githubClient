describe("Test that angular loads", function() {
	
	it("Angular should load", function() {
		expect(angular).toBeDefined();
	});
});

describe("This is a test to see that a factory works", function() {

	var f;

	beforeEach(module('application'));

	beforeEach(inject(function(_testFactory_) {
		f = _testFactory_;
	}));

	it("should test that a factory is created", function() {
		var res = f.getTest();
		expect(res).toEqual("This is a test");
	});
});


