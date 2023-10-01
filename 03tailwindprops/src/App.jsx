import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>Hi Tailwind</h1>
      <div className='flex'>
      <Card src='https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60' name='Deba' className='mr-10'/>
      <Card src='https://media.licdn.com/dms/image/C5603AQF-KHuXOev8FQ/profile-displayphoto-shrink_800_800/0/1590076084914?e=2147483647&v=beta&t=irTMSZYOwEKR_3sRcbUi2qVO7HqHx3wkd29281xs4hc&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8' name='Manjil'/>
      </div>
    </>
  )
}

export default App
