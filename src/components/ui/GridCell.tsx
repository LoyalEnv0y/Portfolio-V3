import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type GridCellProps = {
	clean?: boolean;
	className?: string;
	children?: ReactNode;
};

const GridCell = ({ clean, className, children }: GridCellProps) => {
	const classes = cn(
		'bg-primary-100 border-2 border-silver flex flex-col w-full rounded-xl p-5',
		{ 'bg-primary-200 border-none p-0': clean },
		className
	);
	return <section className={classes}>{children}</section>;
};

export default GridCell;
