describe("Raises x to the power n", function() {
   if('5 in power of 1 equal to 5 ', function(){
   assert.equal(pow(5, 1), 5);
  });

  it("5 in the power of 2 equal 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equal 125", function() {
    assert.equal(pow(5, 3), 125);
  });
  
});