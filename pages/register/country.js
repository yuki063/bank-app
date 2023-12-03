/** @format */

import ShortNavbar from '../../components/common/ShortNavbar';
import Country from '../../components/Register/Country';

export default function Register() {
	return (
		<>
			<ShortNavbar step={3} />
			<Country />
		</>
	);
}

Register.getLayout = function getLayout(page) {
	return <>{page}</>;
};
