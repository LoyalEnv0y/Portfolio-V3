import { Link } from '@tanstack/react-router';
import { cn } from '../utils/cn';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
type NavLinkProps = {
	to: string;
	children?: ReactNode;
	className?: string;
};

const NavLink = ({ to, children, className }: NavLinkProps) => {
	const classes = cn(
		'group hover:bg-accent-100/50 active:bg-accent-100 flex w-min items-center gap-x-2 rounded-md px-3 py-1 transition-all duration-200 overflow-hidden',
		className
	);

	return (
		<Link className={classes} to={to}>
			<motion.div
				initial={{ x: -30 }}
				animate={{ x: 0 }}
				transition={{ delay: 0.2 }}
				className="hidden size-2 rounded-full bg-accent-400 group-data-[status=active]:inline"
			></motion.div>

			{children}
		</Link>
	);
};

export default NavLink;
