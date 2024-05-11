import { ReactNode } from '@tanstack/react-router';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

type MediaLinkButtonsProps = {
	to?: string;
	onClick?: () => void;
	stabile?: boolean;
	children: ReactNode;
	className?: string;
};

const MediaLinkButtons = ({
	to,
	onClick,
	stabile,
	children,
	className,
}: MediaLinkButtonsProps) => {
	const classes = cn(
		'flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-black text-4xl text-white xs:text-6xl sm:text-4xl lg:text-6xl',
		className
	);
	return (
		<motion.a
			href={to}
			target="_blank"
			onClick={onClick}
			className={classes}
			whileHover={!stabile ? { scale: 1.1, rotate: 5 } : undefined}
			whileTap={{ scale: 0.9, rotate: 0 }}
		>
			{children}
		</motion.a>
	);
};

export default MediaLinkButtons;
