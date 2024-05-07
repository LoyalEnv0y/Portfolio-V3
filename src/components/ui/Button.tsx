import { ReactNode, createRef, useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { HTMLMotionProps, motion } from 'framer-motion';

type FancyButtonProps = {
	offsetPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	parentClassName?: string;
	noRotate?: boolean;
	className?: string;
	children?: ReactNode;
};

const variants = {
	hover: {
		rotate: -10,
		x: -10,
		y: -5,
	},

	initial: {
		rotate: 0,
		x: 0,
		y: 0,
	},
};

export const FancyButton = ({
	offsetPosition = 'top-right',
	parentClassName,
	noRotate,
	className,
	children,
	...rest
}: FancyButtonProps & HTMLMotionProps<'button'>) => {
	const [isParentHovered, setIsParentHovered] = useState(false);
	const parentContainer = createRef<HTMLButtonElement>();
	const blurContainer = createRef<HTMLDivElement>();

	const parentClasses = cn(
		'relative rounded bg-gradient-to-r from-[#CD24D0] to-[#01A0FA] hover:from-[#CD24D0DD] hover:to-[#01A0FADD]',
		{
			'mr-1.5 mt-1.5': offsetPosition === 'top-right',
			'ml-1.5 mt-1.5': offsetPosition === 'top-left',
			'mr-1.5 mb-1.5': offsetPosition === 'bottom-right',
			'ml-1.5 mb-1.5': offsetPosition === 'bottom-left',
		},
		parentClassName
	);
	const classes = cn(
		'text-secondary-100 absolute rounded bg-white/20 px-5 py-1 font-extrabold backdrop-blur-md tracking-widest',
		{
			'bottom-1.5 left-1.5': offsetPosition === 'top-right',
			'bottom-1.5 right-1.5': offsetPosition === 'top-left',
			'top-1.5 left-1.5': offsetPosition === 'bottom-right',
			'top-1.5 right-1.5': offsetPosition === 'bottom-left',
		},
		className
	);

	useEffect(() => {
		if (blurContainer.current) {
			const { offsetWidth, offsetHeight } = blurContainer.current;
			if (!parentContainer.current) return;

			parentContainer.current.style.width = `${offsetWidth}px`;
			parentContainer.current.style.height = `${offsetHeight}px`;
		}
	}, [blurContainer, parentContainer]);

	return (
		<motion.button
			ref={parentContainer}
			className={parentClasses}
			{...rest}
			whileTap={{ scale: 0.95 }}
			whileHover={!noRotate ? { rotate: 5, x: 5, y: -5 }  : undefined}
			onMouseEnter={() => setIsParentHovered(true)}
			onMouseLeave={() => setIsParentHovered(false)}
		>
			<motion.div
				ref={blurContainer}
				className={classes}
				variants={!noRotate ? variants : undefined}
				animate={isParentHovered ? 'hover' : 'initial'}
			>
				{children}
			</motion.div>
		</motion.button>
	);
};
