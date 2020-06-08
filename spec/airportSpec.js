describe("airport", function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it("when .land it adds plane to array", function() {
    expect(airport.land("plane")).toEqual("landed");
  });

});
