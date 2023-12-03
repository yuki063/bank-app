/** @format */

import Link from 'next/link';
import Image from 'next/image';
import arrow_left from '/public/images/icon/arrow-left.png';

const EmailConfirm = () => {
	return (
		<section className='sign-in-up register'>
			<div className='overlay pt-120 pb-120'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='form-content'>
								<div className='section-header'>
									<h2 className='title'>EMAIL FAILED</h2>
									<h5 className='sub-title'>
										Your information is uncorrect or time is over.
									</h5>
								</div>
								<form action='#'>
									<div className='bottom-area text-center'>
										<Link href='/register/register' className='cmn-btn'>
											Try again!
										</Link>
									</div>
								</form>
								<div className='btn-back mt-60 d-flex align-items-center'>
									<Link href='/' className='back-arrow'>
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
