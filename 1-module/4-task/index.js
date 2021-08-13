function checkSpam(str) {
  return !!["1xBet", "XXX"].find( key => 
      str.toLowerCase().includes(key.toLocaleLowerCase()) ) || false
}