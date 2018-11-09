
const hey = (result) => {
  const trimmed = result.trim()
  const yelling = result.toUpperCase() === result
  const question = trimmed.endsWith('?')
  const letters = result.match(/[a-z]/i)
  
  if (trimmed === '')
    {return 'Fine. Be that way!'}
  else if (question && yelling && letters) 
    {return 'Calm down, I know what I\'m doing!'}
  else if (yelling && letters) 
    {return 'Whoa, chill out!'}
  else if (question) 
    {return 'Sure.'}
  else 
    {return 'Whatever.'}
}


module.exports = {
  hey
}