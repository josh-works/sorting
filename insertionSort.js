

function sortt(array) {
  if(array.length <= 1){
    return array
  }
  let pivot = array[Math.floor(Math.random () * array.length)];
  let index = array.indexOf(pivot)
  array.splice(index, 1)
  var smaller = array.filter(n => {
    return n < pivot
  })

  var larger = array.filter(n => {
    return n > pivot
  })
  results = []
  results.push(sortt(smaller))
  results.push(pivot)
  results.push(sortt(larger))

  var final = [].concat.apply([], results)

  return final
}

module.exports = sortt
