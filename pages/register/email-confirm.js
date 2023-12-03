/** @format */

import ShortNavbar from '../../components/common/ShortNavbar';
import EmailConfirm from '../../components/Register/EmailConfirm';

export default function Register() {
	return (
		<>
			<ShortNavbar step={1} />
			<EmailConfirm />
		</>
	);
}

Register.getLayout = function getLayout(page) {
	return <>{page}</>;
};
