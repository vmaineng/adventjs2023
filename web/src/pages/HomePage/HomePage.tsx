import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp } = useAuth()

  return (
    <>
      <p>{JSON.stringify({ isAuthenticated })}</p>
      <button onClick={signUp}>sign up</button>
    </>
  )
}

export default HomePage
