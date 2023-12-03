/** @format */

import ShortNavbar from '../../components/common/ShortNavbar';
import VarifyNumberForm from '../../components/Register/VarifyNumberForm';

export default function VarifyNumber() {
	return (
		<>
			<ShortNavbar step={4} />
			<VarifyNumberForm />
		</>
	);
}

VarifyNumber.getLayout = function getLayout(page) {
	return <>{page}</>;
};
