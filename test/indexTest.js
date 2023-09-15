describe("Your Test Suite", function() {
  let element;

  beforeEach(function() {
    element = document.createElement("div");
    document.body.appendChild(element);
  });

  afterEach(function() {
    document.body.removeChild(element);
  });

  it("should bind an event listener", function() {
  });
});