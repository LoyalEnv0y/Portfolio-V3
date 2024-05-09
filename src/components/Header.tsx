import { createRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { FancyButton } from './ui/Button';
import NavLink from './NavLink';
import {
	ConfirmDialog,
	DialogActions,
	DialogDescription,
	DialogTitle,
} from './ui/Dialog';

const variants = {
	open: {
		width: '250px',
		height: '350px',
		top: 0,
		right: 0,
		borderRadius: '20px',
	},

	initial: {
		borderRadius: '100px',
		top: 16
	},
};

const Header = () => {
	const [isCVModalOpen, setIsCVModalOpen] = useState(false);
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const navRef = createRef<HTMLElement>();
	useOutsideClick(navRef, setIsNavbarOpen);

	return (
		<header className="relative flex h-16 w-full items-center justify-between">
			{isCVModalOpen && (
				<ConfirmDialog
					handleClose={() => setIsCVModalOpen(false)}
					className="w-96 gap-y-4"
				>
					<DialogTitle>Language</DialogTitle>
					<DialogDescription>
						Please choose which version you want to download
					</DialogDescription>

					<DialogActions className="grid grid-cols-2">
						<a
							href="cvs/Cetin-Tekin-CV-TR.pdf"
							download={'Çetin-Tekin-CV-TR'}
						>
							<button className="translate-all flex w-full flex-col items-center rounded-md border-3 border-slate-200 p-1 text-lg shadow-xl duration-150 active:translate-y-0.5 active:shadow-none">
								<img src="svgs/Turkish-Flag.svg" className="w-20" />
							</button>
						</a>
						<a
							href="cvs/Cetin-Tekin-CV-ENG.pdf"
							download={'Çetin-Tekin-CV-ENG'}
						>
							<button className="translate-all flex w-full flex-col items-center rounded-md border-3 border-slate-200 p-1 text-lg shadow-xl duration-150 active:translate-y-0.5 active:shadow-none">
								<img src="svgs/UK-Flag.svg" className="w-20" />
							</button>
						</a>
					</DialogActions>
				</ConfirmDialog>
			)}

			<img
				src="svgs/Logo-Big.svg"
				alt="Logo"
				className="h-12 fill-accent-100"
			/>

			<nav
				className={cn(
					'z-10 cursor-pointer rounded-full bg-primary-100 px-4 py-2 font-bold tracking-widest text-secondary-100 fixed right-7',
					{ 'cursor-default': isNavbarOpen }
				)}
				onClick={() => !isNavbarOpen && setIsNavbarOpen(true)}
				ref={navRef}
			>
				<div className="flex items-center pl-4">
					<div className="z-10 cursor-pointer select-none overflow-hidden">
						<AnimatePresence mode="wait">
							{!isNavbarOpen && (
								<motion.p
									key="menu-text"
									initial={{ y: -20 }}
									animate={{ y: 0 }}
									exit={{ y: -20 }}
									transition={{ duration: 0.1 }}
								>
									MENU
								</motion.p>
							)}

							{isNavbarOpen && (
								<motion.p
									key="close-text"
									initial={{ y: 20 }}
									animate={{ y: 0 }}
									exit={{ y: 20 }}
									transition={{ duration: 0.1 }}
									onClick={() => setIsNavbarOpen(false)}
									className="text-primary-100"
								>
									CLOSE
								</motion.p>
							)}
						</AnimatePresence>
					</div>

					<motion.div
						variants={variants}
						animate={isNavbarOpen ? 'open' : 'initial'}
						transition={{}}
						className={cn(
							'absolute right-20 size-2 overflow-hidden bg-accent-100 text-primary-100'
						)}
					>
						<AnimatePresence>
							{isNavbarOpen && (
								<motion.div
									key="test-1"
									initial={{
										scale: 0.1,
										opacity: 0,
									}}
									animate={{
										scale: 1,
										opacity: 100,
									}}
									exit={{
										scale: 0.1,
										opacity: 0,
									}}
									className="flex size-full flex-col gap-y-2 p-10 px-5 text-xl font-medium"
								>
									<NavLink to={'/'}>Home</NavLink>
									<NavLink to={'/projects'}>Projects</NavLink>
									<NavLink to={'/skills'}>Skills</NavLink>
									<NavLink to={'/experience'}>Experience</NavLink>
									<NavLink to={'/certificates'}>
										Certificates
									</NavLink>

									<FancyButton
										className="w-36"
										parentClassName="ml-3 mt-3"
										onClick={() => setIsCVModalOpen(true)}
									>
										CV
									</FancyButton>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
