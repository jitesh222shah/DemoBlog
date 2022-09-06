import React from 'react'
import { UserContext,ChannelText } from './App'
import { useContext } from 'react'
const Personal = () => {
  const userName = useContext(UserContext)
  const channelText = useContext(ChannelText)
  return (
    <div>
        {userName}-{channelText}
        <h1> i am personal</h1>
   
    </div>
  )
}

export default Personal