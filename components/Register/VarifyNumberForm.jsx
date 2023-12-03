/** @format */

import Link from 'next/link';
import Image from 'next/image';
import arrow_left from '/public/images/icon/arrow-left.png';
import { PhoneInput } from 'react-international-phone';
import { useState } from 'react';
import 'react-international-phone/style.css';

const EmailConfirm = () => {
	const [phone, setPhone] = useState('');
	return (
		<section className='sign-in-up register'>
			<div className='overlay pt-120 pb-120'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='form-content'>
								<div className='section-header'>
									<h2 className='title'>
										What’s the best number to reach you on?
									</h2>
									<h5 className='sub-title'>
										We don’t send spam, just important information you must know
									</h5>
								</div>
								<form action='#'>
									<div className='row'>
										<div className='col-12'>
											<div className='single-input'>
												<label htmlFor='mobileNum'>Mobile Number</label>
												<PhoneInput
													defaultCountry='ua'
													value={phone}
													onChange={(phone) => setPhone(phone)}
												/>
											</div>
										</div>
									</div>
									<div className='bottom-area text-center'>
										<Link href='/login' className='cmn-btn'>
											Continue
										</Link>
									</div>
								</form>
								<div className='btn-back mt-60 d-flex align-items-center'>
									<Link href='/register/country' className='back-arrow'>
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

export default EmailConfirm;
