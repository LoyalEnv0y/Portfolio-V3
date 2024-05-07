import { Link, ReactNode } from '@tanstack/react-router';
import { cn } from '../utils/cn';

type HomeNavigationButtonProps = {
	to: string;
	iconURL: string;
	children?: ReactNode;
	className?: string;
	iconClassName?: string;
	stipesClassName?: string;
};

const HomeNavigationButton = ({
	to,
	iconURL,
	children,
	className,
	iconClassName,
	stipesClassName,
}: HomeNavigationButtonProps) => {
	const classes = cn(
		'group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-accent-100 py-5',
		className
	);

	const iconClasses = cn(
		'absolute -right-5 h-20 -rotate-[20deg] text-xl transition-all duration-200 group-hover:-rotate-[25deg] group-hover:scale-150',
		iconClassName
	);

	const stripesClass = cn(
		'absolute left-4 flex h-full -rotate-6 items-center gap-x-1.5 transition-all duration-200 group-hover:left-[20%] group-hover:opacity-0',
		stipesClassName
	);

	return (
		<Link to={to} className={classes}>
			<div className={stripesClass}>
				<div className="h-[110%] w-3 bg-white/80"></div>
				<div className="h-[110%] w-1.5 bg-white/80"></div>
			</div>

			<p>{children}</p>

			<img src={iconURL} alt="projects" className={iconClasses} />
		</Link>
	);
};

export default HomeNavigationButton;
