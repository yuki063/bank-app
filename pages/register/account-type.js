/** @format */

import ShortNavbar from '../../components/common/ShortNavbar';
import AccountType from '../../components/Register/AccountType';

export default function Register() {
	return (
		<>
			<ShortNavbar step={2} />
			<AccountType />
		</>
	);
}

Register.getLayout = function getLayout(page) {
	return <>{page}</>;
};
