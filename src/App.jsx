import Header from './components/Header'
import Statistic from './components/Statistic'
import UserActivesList from './components/UserActivesList'
import UserBalanceInfo from './components/userBalanceInfo'

const App = () => {
  return (
    <main>
      <Header />
      <UserBalanceInfo />
      <UserActivesList />
      <Statistic />
    </main>
  )
}

export default App
