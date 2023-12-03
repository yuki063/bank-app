/** @format */

import ShortNavbar from '../../components/common/ShortNavbar';
import RegisterForm from '../../components/Register/RegisterForm';

export default function Register() {
	return (
		<>
			<ShortNavbar step={1} />
			<RegisterForm />
		</>
	);
}

Register.getLayout = function getLayout(page) {
	return <>{page}</>;
};
