import LoginForm from "./components/LoginForm"
import LoginInfo from "./components/LoginInfo"


function App() {

  return (
    <>
      <div className='w-full h-screen grid grid-cols-2'>
        <LoginInfo />
        <LoginForm />
      </div>
    </>
  )
}

export default App
