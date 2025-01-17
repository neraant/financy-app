import Header from './components/common/Header'
import UserBalanceInfo from './components/profile/UserBalanceInfo'
import Statistic from './components/Statistic'
import UserActivesList from './components/UserActivesList'

const calculateMonthlySpent = () => {
  const allPayments = loadFromLocalStorage('paymentsList') || [];
  
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyPayments = allPayments.filter(({ nonFormatedDate: date }) => {
    const paymentDate = new Date(date);
    return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;
  });

  return (monthlyPayments.reduce((acc, { total }) => acc + Number(total), 0)).toFixed(2);
};

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
