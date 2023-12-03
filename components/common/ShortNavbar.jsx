/** @format */

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '/public/images/logo.png';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Email', 'Account type', 'Country', '2FA', 'Password'];
const ShortNavbar = ({ step }) => {
	const [windowHeight, setWindowHeight] = useState(0);

	const navBarTop = () => {
		if (window !== undefined) {
			let height = window.scrollY;
			setWindowHeight(height);
		}
	};
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	useEffect(() => {
		window.addEventListener('scroll', navBarTop);
		return () => {
			window.removeEventListener('scroll', navBarTop);
		};
	}, []);

	return (
		<header
			className={`header-section register login ${
				windowHeight > 50 && 'header-fixed animated fadeInDown'
			}`}
		>
			<div className='overlay'>
				<div className='container'>
					<div className='row d-flex header-area'>
						<nav className='navbar d-flex justify-content-between navbar-expand-lg navbar-dark'>
							<Link className='navbar-brand' href='/'>
								<Image src={logo} className='logo' alt='logo' />
							</Link>
							<div className='d-flex align-items-center justify-content-end'>
								<Box sx={{ width: '100%' }}>
									<Stepper nonLinear activeStep={step - 1}>
										{steps.map((label, index) => (
											<Step key={label} completed={completed[index]}>
												<StepButton color='inherit' onClick={handleStep(index)}>
													{label}
												</StepButton>
											</Step>
										))}
									</Stepper>
									{/* <div>
										{allStepsCompleted() ? (
											<React.Fragment>
												<Typography sx={{ mt: 2, mb: 1 }}>
													All steps completed - you&apos;re finished
												</Typography>
												<Box
													sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
												>
													<Box sx={{ flex: '1 1 auto' }} />
													<Button onClick={handleReset}>Reset</Button>
												</Box>
											</React.Fragment>
										) : (
											<React.Fragment>
												<Typography sx={{ mt: 2, mb: 1, py: 1 }}>
													Step {activeStep + 1}
												</Typography>
												<Box
													sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
												>
													<Button
														color='inherit'
														disabled={activeStep === 0}
														onClick={handleBack}
														sx={{ mr: 1 }}
													>
														Back
													</Button>
													<Box sx={{ flex: '1 1 auto' }} />
													<Button onClick={handleNext} sx={{ mr: 1 }}>
														Next
													</Button>
													{activeStep !== steps.length &&
														(completed[activeStep] ? (
															<Typography
																variant='caption'
																sx={{ display: 'inline-block' }}
															>
																Step {activeStep + 1} already completed
															</Typography>
														) : (
															<Button onClick={handleComplete}>
																{completedSteps() === totalSteps() - 1
																	? 'Finish'
																	: 'Complete Step'}
															</Button>
														))}
												</Box>
											</React.Fragment>
										)}
									</div> */}
								</Box>
								<ul className='navbar-nav'>
									{/* <li className='nav-item'>Don&#39;t have an account</li> */}
								</ul>
								<div className='right-area header-action d-flex align-items-center'>
									<Link href='/register' className='cmn-btn'>
										Register
									</Link>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default ShortNavbar;
