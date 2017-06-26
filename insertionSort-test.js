assert = require("chai").assert
const sortt = require('./insertionSort')

describe("insertion sort methods", function() {
  it(".sort", function(){
    test_array = [2, 5, 1, 3, 7]
    assert.deepEqual(sortt(test_array), [1, 2, 3, 5, 7])
  })
})
