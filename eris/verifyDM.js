async function verifyDM(user)
{
  if (!user || !user.id)
  {
    return new Error("Please provide a valid <User>")
  }
  const userDM = await user.getDMChannel()
  return userDM.createMessage('').catch(error =>
  {
    return error.message != 'Cannot send messages to this user'
  })

}


//Example 1
verifyDM(message.author)
//Example 2
console.log(await verifyDM(message.author))

// if true dm is open otherwise dm is closed
