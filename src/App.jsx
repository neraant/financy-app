import Header from './components/common/Header'
import UserBalanceInfo from './components/profile/UserBalanceInfo'
import Statistic from './components/Statistic'
import UserActivesList from './components/UserActivesList'

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
