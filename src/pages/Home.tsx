import { FancyButton } from '../components/ui/Button';
import GridCell from '../components/ui/GridCell';
import HomeNavigationButton from '../components/HomeNavigationButton';
import { useTranslation } from 'react-i18next';
import { TAbout } from '../types/TAbout';
import { usePagination } from '../hooks/usePagination';
import { AnimatePresence, motion } from 'framer-motion';
import CarouselButtons from '../components/ui/Pagination';
import { HiOutlineMail } from 'react-icons/hi';
import { RiSendPlaneFill } from 'react-icons/ri';

const variants = {
	enter: (direction: number) => ({ x: direction > 0 ? 500 : -500 }),
	center: { x: 0 },
	exit: (direction: number) => ({ x: direction > 0 ? -500 : 500 }),
};

const Home = () => {
	const { t } = useTranslation();
	const aboutInfo = t('about', { returnObjects: true }) as TAbout[];

	const { direction, page, move } = usePagination(aboutInfo);

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

			<GridCell className="gap-y-3 border-none bg-primary-200 p-0 text-2xl font-bold uppercase tracking-widest text-secondary-100">
				<HomeNavigationButton
					to="/projects"
					iconURL="svgs/Projects.svg"
					className="bg-gradient-to-tr from-[#4B73FF] to-[#7CF7FF]"
				>
					Projects
				</HomeNavigationButton>
				<HomeNavigationButton
					to="/skills"
					iconURL="svgs/Skills.svg"
					className="bg-gradient-to-tr from-[#FF6C6C] to-[#DD7BFF]"
					iconClassName="group-hover:-rotate-[30deg]"
					stipesClassName="left-6 opacity-90"
				>
					Skills
				</HomeNavigationButton>
				<HomeNavigationButton
					to="/experience"
					iconURL="svgs/Experience.svg"
					className="bg-gradient-to-tr from-[#44C176] to-[#E9D100]"
					stipesClassName="left-8 opacity-80"
				>
					Experience
				</HomeNavigationButton>
				<HomeNavigationButton
					to="/certificate"
					iconURL="svgs/Certificate.svg"
					className="bg-gradient-to-tr from-[#FF7A00] to-[#FFD439]"
					stipesClassName="left-10 opacity-70"
				>
					Certificate
				</HomeNavigationButton>
			</GridCell>

			<GridCell className="space-y-8 overflow-hidden">
				<AnimatePresence mode="wait" custom={direction} initial={false}>
					<motion.div
						key={page}
						variants={variants}
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

				<div className="flex w-full flex-col items-center gap-y-4">
					<div className="flex w-full items-center gap-x-2">
						<label htmlFor="name" className="w-20">
							Name
						</label>
						<input
							type="text"
							autoComplete="name"
							placeholder="John"
							name="name"
							id="name"
							className="border-silver w-full rounded-md border-2 bg-primary-100 p-2 px-4 caret-accent-100 focus:border-accent-100 focus:outline-none"
						/>
					</div>

					<div className="flex w-full items-center gap-x-2">
						<label htmlFor="email" className="w-20">
							Email
						</label>
						<input
							type="email"
							autoComplete="email"
							placeholder="example@domain.com"
							name="email"
							id="email"
							className="border-silver w-full rounded-md border-2 bg-primary-100 p-2 px-4 caret-accent-100 focus:border-accent-100 focus:outline-none"
						/>
					</div>

					<div className="w-full items-center gap-x-2">
						<textarea
							name="message"
							id="message"
							rows={5}
							placeholder="Leave me a message"
							className="border-silver w-full rounded-md border-2 bg-primary-100 p-4 caret-accent-100 focus:border-accent-100 focus:outline-none"
						></textarea>
					</div>

					<a
						href={`mailto:cetin200012@gmail.com?body=${'aaaaaaa'}`}
						className="w-full"
					>
						<FancyButton
							className="flex w-full items-center justify-center"
							parentClassName="w-full"
							noRotate
						>
							<RiSendPlaneFill className="text-4xl" />
						</FancyButton>
					</a>
				</div>
			</GridCell>
		</main>
	);
};

export default Home;
