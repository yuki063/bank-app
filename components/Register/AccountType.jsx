/** @format */

import Link from 'next/link';
import Image from 'next/image';
import arrow_left from '/public/images/icon/arrow-left.png';

const AccountType = () => {
	return (
		<section className='sign-in-up register'>
			<div className='overlay pt-120 pb-120'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='form-content'>
								<div className='section-header'>
									<h2 className='title'>
										What kind of account would you like to open today?
									</h2>
									<h5 className='sub-title'>
										You can add another account later on, too
									</h5>
								</div>
								<form action='#'>
									<div className='bottom-area text-center'>
										<div className='bottom-area'>
											<Link href='/register/country' className='cmn-btn mr-3'>
												Account personal
											</Link>
											<Link href='/register/country' className='cmn-btn second'>
												Account business
											</Link>
										</div>
									</div>
								</form>
								<div className='btn-back mt-60 d-flex align-items-center'>
									<Link href='/register/email-confirm' className='back-arrow'>
										<Image src={arrow_left} alt='icon' />
										Back
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AccountType;
