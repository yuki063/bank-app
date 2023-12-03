/** @format */

import ShortNavbar from '../components/common/ShortNavbar';
import LoginForm from '../components/login/LoginForm';

export default function Login() {
	return (
		<>
			<ShortNavbar step={5} />
			<LoginForm />
		</>
	);
}

Login.getLayout = function getLayout(page) {
	return <>{page}</>;
};
