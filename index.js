function theBeatlesPlay(musicians,instruments){
  let temp = [];
  for(var i = 0; i < musicians.length; i++){
    temp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return temp;
}

function johnLennonFacts(facts){
  var count = 0;
  while(count < facts.length){
    facts[count] += '!!!';
    count++;
  }
  return facts;
}