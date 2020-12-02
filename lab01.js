function sum(salary){
  let toTal = 0
  for( let key in salary){
    toTal += salary[key]
  }
  return toTal
}

let salary = {
  "Black widow": 34442,
  Thor: 232,
  Hunk: 23095,
  "Iron man": 9934,
}