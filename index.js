
function findMatching(drivers, obj) {
  return drivers.filter ((element ) => {
    return element.toLowerCase().startsWith(obj.toLowerCase());
  })
}

function fuzzyMatch(drivers, obj) {
  return drivers.filter ((element ) => {
    return element.toLowerCase().startsWith(obj.toLowerCase());
  })
}

function matchName(drivers, hometown) {
return drivers.filter((element) => element.name === hometown) 

}
matchName(drivers, hometown);
