function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (drivername) {
    return driverName.slice(0, lengthOfName) === partialName
  });
}
