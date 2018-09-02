function fuzzyMatch (list, name) {
  let lengthOfName = partialName.length;
  return list.filter(function (drivername){
    return driverName.slice(0, lengthOfName) === partialName
  });
}