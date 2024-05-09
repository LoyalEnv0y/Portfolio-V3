import { FancyButton } from '../components/ui/Button';
import GridCell from '../components/ui/GridCell';
import NavigationButton from '../components/Home/NavigationButton';
import { useTranslation } from 'react-i18next';
import { TAbout } from '../types/TAbout';
import { usePagination } from '../hooks/usePagination';
import { AnimatePresence, motion } from 'framer-motion';
import CarouselButtons from '../components/ui/Pagination';
import { HiOutlineMail } from 'react-icons/hi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import MediaLinkButtons from '../components/Home/MediaLinkButtons';
import { useCopyClipboard } from '../hooks/useCopyClipboard';

const aboutVariants = {
	enter: (direction: number) => ({ x: direction > 0 ? 500 : -500 }),
	center: { x: 0 },
	exit: (direction: number) => ({ x: direction > 0 ? -500 : 500 }),
};

const copyVariants = {
	enter: {
		width: '0%',
		height: '0%',
		borderRadius: 100,
	},
	center: {
		width: '100%',
		height: '100%',
		borderRadius: 10,
	},
	exit: {
		width: '0%',
		height: '0%',
		borderRadius: 100,
	},
};

const Home = () => {
	const { isCopied, copy } = useCopyClipboard('+905456184372');
	const form = useRef<HTMLFormElement>(null);

	const { t } = useTranslation();
	const aboutInfo = t('about', { returnObjects: true }) as TAbout[];
	const { direction, page, move } = usePagination(aboutInfo);

	const sendEmail = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		if (!form.current) return;

		emailjs.init({
			publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			blockHeadless: true,
			limitRate: {
				id: 'app',
				throttle: 1000 * 10,
			},
		});

		const email = emailjs.sendForm(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			form.current
		);

		toast.promise(email, {
			loading: 'Sending the Email Please Wait',
			success: () => 'Successfully Sent Your Email!',
			error: (err) => {
				console.error('err => ', err);
				return "Couldn't sent the email. Please try again.\n" + err;
			},
		});
	};

	return (
		<main className="flex flex-col items-center gap-y-7 text-xl font-medium">
			<GridCell className="text-2xl">
				<img src="svgs/Avatar.svg" alt="Avatar" className="w-20" />

				<div className="space-y-5">
					<p>
						<span className="text-secondary-100">Hi, I'm Çetin.</span> I
						am a web developer and I build cool websites like this one.
					</p>
					<FancyButton className="w-32" offsetPosition="top-left">
						CV
					</FancyButton>
				</div>
			</GridCell>

			<GridCell
				clean
				className="gap-y-3 text-2xl font-bold uppercase tracking-widest text-secondary-100"
			>
				<NavigationButton
					to="/projects"
					iconURL="svgs/Projects.svg"
					className="bg-gradient-to-tr from-[#4B73FF] to-[#7CF7FF]"
				>
					Projects
				</NavigationButton>
				<NavigationButton
					to="/skills"
					iconURL="svgs/Skills.svg"
					className="bg-gradient-to-tr from-[#FF6C6C] to-[#DD7BFF]"
					iconClassName="group-hover:-rotate-[30deg]"
					stipesClassName="left-6 opacity-90"
				>
					Skills
				</NavigationButton>
				<NavigationButton
					to="/experience"
					iconURL="svgs/Experience.svg"
					className="bg-gradient-to-tr from-[#44C176] to-[#E9D100]"
					stipesClassName="left-8 opacity-80"
				>
					Experience
				</NavigationButton>
				<NavigationButton
					to="/certificate"
					iconURL="svgs/Certificate.svg"
					className="bg-gradient-to-tr from-[#FF7A00] to-[#FFD439]"
					stipesClassName="left-10 opacity-70"
				>
					Certificate
				</NavigationButton>
			</GridCell>

			<GridCell className="space-y-8 overflow-hidden">
				<AnimatePresence mode="wait" custom={direction} initial={false}>
					<motion.div
						key={page}
						variants={aboutVariants}
						custom={direction}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							duration: 0.24,
						}}
						className="w-full space-y-3"
					>
						<span className="text-secondary-100">
							{aboutInfo[page].title}
						</span>
						<div className="flex flex-col gap-y-3">
							{aboutInfo[page].content.map((about, i) => (
								<p
									key={i}
									dangerouslySetInnerHTML={{ __html: about }}
								></p>
							))}
						</div>
					</motion.div>
				</AnimatePresence>

				<CarouselButtons
					content={aboutInfo}
					page={page}
					move={move}
					restricted={false}
					hideNavigationButtons={true}
				/>
			</GridCell>

			<GridCell className="items-center gap-y-5 text-base font-normal">
				<p className="flex items-center gap-x-2 text-xl font-medium text-secondary-100">
					Contact Me
					<HiOutlineMail className="text-3xl subpixel-antialiased" />
				</p>

				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex w-full flex-col items-center gap-y-4"
				>
					<div className="flex w-full items-center gap-x-2">
						<label htmlFor="from_name" className="w-20">
							Name
						</label>
						<input
							type="text"
							autoComplete="name"
							placeholder="John"
							name="from_name"
							required
							id="from_name"
							className="w-full rounded-md border-2 border-silver bg-primary-100 p-2 px-4 text-secondary-100 caret-accent-100 placeholder:text-secondary-400 focus:border-accent-100 focus:outline-none"
						/>
					</div>

					<div className="flex w-full items-center gap-x-2">
						<label htmlFor="reply_to" className="w-20">
							Email
						</label>
						<input
							type="email"
							autoComplete="email"
							placeholder="example@domain.com"
							name="reply_to"
							required
							id="reply_to"
							className="w-full rounded-md border-2 border-silver bg-primary-100 p-2 px-4 text-secondary-100 caret-accent-100 placeholder:text-secondary-400 focus:border-accent-100 focus:outline-none"
						/>
					</div>

					<div className="w-full items-center gap-x-2">
						<textarea
							name="message"
							id="message"
							rows={5}
							required
							placeholder="Leave me a message"
							className="w-full rounded-md border-2 border-silver bg-primary-100 p-4 text-secondary-100 caret-accent-100 placeholder:text-secondary-400 focus:border-accent-100 focus:outline-none"
						></textarea>
					</div>

					<FancyButton
						className="flex w-full items-center justify-center"
						parentClassName="w-full"
						noRotate
					>
						<RiSendPlaneFill className="text-4xl" />
					</FancyButton>
				</form>
			</GridCell>

			<GridCell clean className="grid grid-cols-4 gap-5">
				<MediaLinkButtons
					to="https://github.com/LoyalEnv0y"
					className="bg-white text-black"
				>
					<FaGithub />
				</MediaLinkButtons>
				<MediaLinkButtons
					to="https://www.linkedin.com/in/%C3%A7etin-tekin-loyalenv0y/"
					className="bg-blue-600"
				>
					<FaLinkedin />
				</MediaLinkButtons>
				<MediaLinkButtons
					to="https://www.instagram.com/cetin.tekinn/"
					className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
				>
					<FaInstagram />
				</MediaLinkButtons>
				<MediaLinkButtons
					className="relative overflow-hidden bg-green-600"
					onClick={copy}
				>
					<FaPhoneAlt />
					<AnimatePresence mode="wait">
						{isCopied && (
							<motion.div
								key="copied"
								variants={copyVariants}
								initial="enter"
								animate="center"
								exit="exit"
								className="absolute flex h-full w-full select-none items-center justify-center overflow-hidden bg-accent-100 text-base font-bold text-secondary-100"
							>
								Copied!
							</motion.div>
						)}
					</AnimatePresence>
				</MediaLinkButtons>
			</GridCell>
		</main>
	);
};

export default Home;
