import { Link } from '@tanstack/react-router';
import { cn } from '../utils/cn';
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type NavLinkProps = {
	to: string;
	children?: ReactNode;
	className?: string;
};

const NavLink = ({ to, children, className }: NavLinkProps) => {
	const classes = cn(
		'group hover:bg-accent-200 active:bg-accent-300 flex w-min items-center gap-x-2 rounded-md px-3 py-1 transition-all duration-200 overflow-hidden',
		className
	);

	return (
		<Link className={classes} to={to}>
			<AnimatePresence mode="wait">
				<motion.div
					key="fuck"
					initial={{ x: -30 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.2 }}
					className="bg-accent-400 hidden size-2 rounded-full group-data-[status=active]:inline"
				></motion.div>
			</AnimatePresence>

			{children}
		</Link>
	);
};

export default NavLink;
