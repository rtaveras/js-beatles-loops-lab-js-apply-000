function theBeatlesPlay(musicians, instruments)
{
  var counter = [];
  for (var x = 0; x < 4; x++)
  counter.push (musicians[x] +' plays ' + instruments[x]);
  return counter;
}

function johnLennonFacts(facts)
{
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + '!!!';
  i++;
  
  }
  return facts;
}


function iLoveTheBeatles(n)
{
  var emptyArray = [];
  do {emptyArray.push('I love the Beatles!');
  n++;}
  while(n < 15);
  return emptyArray;
}