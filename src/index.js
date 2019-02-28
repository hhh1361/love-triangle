/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var i = 0;
  var count = 0;
  
  while (preferences.length > i) {
  var a = preferences[i];
  var b = preferences[a-1];
  var c = preferences[b-1];
  if (a != b && b !=c && c != a && i + 1 == c) {
  count +=1}
  
  i++;
  }
  return (count/3)
  }
