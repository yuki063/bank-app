/** @format */

import ShortNavbar from '../../components/common/ShortNavbar';
import FailedEmail from '../../components/Register/FailedEmail';

export default function Register() {
	return (
		<>
			<ShortNavbar step={1} />
			<FailedEmail />
		</>
	);
}

Register.getLayout = function getLayout(page) {
	return <>{page}</>;
};
