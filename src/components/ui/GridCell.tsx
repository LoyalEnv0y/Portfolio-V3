import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type GridCellProps = {
	className?: string;
	children?: ReactNode;
};

const GridCell = ({ className, children }: GridCellProps) => {
	const classes = cn(
		'bg-primary-100 w-full rounded-md border border-gray-400 p-5',
		className
	);
	return <section className={classes}>{children}</section>;
};

export default GridCell;
