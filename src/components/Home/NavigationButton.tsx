import { Link, ReactNode } from '@tanstack/react-router';
import { cn } from '../../utils/cn';

type NavigationButtonProps = {
	to: string;
	iconURL: string;
	children?: ReactNode;
	className?: string;
	iconClassName?: string;
	stipesClassName?: string;
};

const NavigationButton = ({
	to,
	iconURL,
	children,
	className,
	iconClassName,
	stipesClassName,
}: NavigationButtonProps) => {
	const classes = cn(
		'group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-accent-100 py-5 sm:items-end sm:text-lg 2xl:min-h-32 2xl:text-2xl sm:max-lg:justify-start sm:max-lg:px-5',
		className
	);

	const iconClasses = cn(
		'absolute -right-5 h-20 -rotate-[20deg] text-xl transition-all duration-200 group-hover:-rotate-[25deg] group-hover:scale-150 sm:h-12 2xl:h-14 sm:top-3 sm:right-5 sm:rotate-0 sm:group-hover:rotate-0 sm:group-hover:scale-125',
		iconClassName
	);

	const stripesClass = cn(
		'absolute left-4 flex h-full -rotate-6 items-center gap-x-1.5 transition-all duration-200 group-hover:left-[20%] group-hover:opacity-0 sm:hidden',
		stipesClassName
	);

	return (
		<Link to={to} className={classes}>
			<img src={iconURL} alt="projects" className={iconClasses} />
			<div className={stripesClass}>
				<div className="h-[110%] w-3 bg-white/80"></div>
				<div className="h-[110%] w-1.5 bg-white/80"></div>
			</div>

			<p>{children}</p>
		</Link>
	);
};

export default NavigationButton;
