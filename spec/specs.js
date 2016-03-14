describe('wordCount', function() {
  it("should return the number of words", function() {
    var wordString = "This is a bogus test";
    expect(wordCount(wordString)).to.equal(5);
  });
});
