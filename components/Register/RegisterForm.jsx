/** @format */

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import arrow_left from '/public/images/icon/arrow-left.png';
import ReactCodeInput from 'react-code-input';
import { useRouter } from 'next/router';

const CORRECT_PIN_CODE = '111222';

const RegisterForm = () => {
	const [next, setNext] = useState(false);
	const [email, setEmail] = useState('');
	const [remaindTime, setRemaindTime] = useState(0);
	const router = useRouter();

	const [isPinCodeValid, setIsPinCodeValid] = useState(true);
	const [pinCode, setPinCode] = useState('');
	const [btnIsPressed, setBtnIsPressed] = useState(false);

	const checkPinCode = () => {
		const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

		setBtnIsPressed(true);
		setIsPinCodeValid(isPinCodeValid);
		if (!isPinCodeValid) setPinCode('');
		if (isPinCodeValid && btnIsPressed) {
			router.push('/register/email-confirm');
		}
		if (!isPinCodeValid && btnIsPressed) {
			router.push('/register/email-failed');
		}
	};

	const handlePinChange = (pinCode) => {
		setPinCode(pinCode);
		setBtnIsPressed(false);
	};

	// Effect to set up the interval when the component mounts
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (remaindTime > 0) setRemaindTime(remaindTime - 1);
			else {
				const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

				if (!isPinCodeValid && next) {
					router.push('/register/email-failed');
				}
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [remaindTime]);

	const props = {
		inputStyle: {
			fontFamily: 'monospace',
			margin: '4px',
			MozAppearance: 'textfield',
			width: '40px',
			height: '40px',
			textAlign: 'center',
			borderRadius: '10px',
			borderColor: '#ddd',
			fontSize: '18px',
			paddingLeft: '7px',
			backgroundColor: 'white',
		},
		inputStyleInvalid: {
			fontFamily: 'monospace',
			margin: '4px',
			MozAppearance: 'textfield',
			width: '40px',
			borderRadius: '3px',
			fontSize: '14px',
			height: '26px',
			paddingLeft: '7px',
			backgroundColor: 'black',
			color: 'red',
			border: '1px solid red',
		},
	};

	const onClickNext = () => {
		const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		if (!regex.test(email)) {
			alert('Please enter a valid email address.');
			return false;
		} else {
			// axios
			// 	.post('http://localhost:2000/api/auth/login', { email })
			// 	.then((res) => {
			// 		console.log(res.data);
			// 	})
			// 	.catch((err) => console.log(err));
			setNext(true);
			setRemaindTime(10);
		}
	};

	return (
		<>
			{!next ? (
				<section className='sign-in-up register'>
					<div className='overlay pt-120 pb-120'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-8'>
									<div className='form-content'>
										<div className='section-header'>
											<h2 className='title'>
												Create your wise business account
											</h2>
											<h5 className='sub-title'>
												Aleady have an account?
												<a href='/login'> Log in</a>
											</h5>
											<p>
												Please Enter your Email Address to Start your Online
												Application
											</p>
										</div>
										<form action='#'>
											<div className='row'>
												<div className='single-input'>
													<label htmlFor='email'>
														First, enter your work email address
													</label>
													<input
														type='text'
														id='email'
														value={email}
														placeholder='Your email address here'
														required
														onChange={(e) => setEmail(e.target.value)}
													/>
												</div>
											</div>
											<div className='bottom-area text-center'>
												<Link
													href='URL:void(0)'
													onClick={onClickNext}
													className='cmn-btn'
												>
													Next
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
			) : (
				<section className='sign-in-up register'>
					<div className='overlay pt-120 pb-120'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-8'>
									<div className='form-content'>
										<div className='section-header'>
											{/* <h5 className='sub-title'></h5> */}
											<h2 className='title'>CONFIRM YOUR EMAIL ADDRESS</h2>
											<p>Follow the link in the email we send to</p>
											<p>
												<bold>{email}.</bold>
											</p>
											<p>The email can take up to {remaindTime}s to arrive.</p>
											<div className=''>
												<ReactCodeInput
													id='pinCode'
													type='number'
													isValid={isPinCodeValid}
													fields={6}
													onChange={handlePinChange}
													value={pinCode}
													{...props}
												/>
												{/* <label>
													{isPinCodeValid && btnIsPressed && 'Valid'}
												</label>
												<label>
													{!isPinCodeValid && btnIsPressed && 'Not valid'}
												</label> */}
												{/* <button onClick={checkPinCode}>Check pin</button> */}
											</div>
										</div>
										<form action='#'>
											<div className='bottom-area text-center'>
												{/* {!remaindTime ? (
													// router.push('/register/email-failed');
													<Link
														href='URL:void(0)'
														// onClick={checkPinCode}
														className='cmn-btn'
													>
														Continue
													</Link>
												) : ( */}
												<Link
													href='URL:void(0)'
													onClick={checkPinCode}
													className='cmn-btn'
												>
													Continue
												</Link>
												{/* )} */}
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
			)}
		</>
	);
};

export default RegisterForm;
