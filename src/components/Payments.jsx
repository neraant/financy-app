import Header from './Header'
import PaymentsList from './PaymentsList'

const Payments = () => {
	return (
		<>
			<main>
				<Header page="payments"/>
				<PaymentsList />
			</main>
		</>
	)
}

export default Payments