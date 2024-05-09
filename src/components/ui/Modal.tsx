import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

type ModelProps = {
	handleClose: () => void;
	className?: string;
	children?: ReactNode;
};

const Model = ({ handleClose, className, children }: ModelProps) => {
	const classes = cn(
		'absolute inset-0 bg-black/30 z-10 backdrop-blur-xs cursor-pointer',
		className
	);

	return createPortal(
		<div className="absolute inset-0 flex items-center justify-center">
			<div className={classes} onClick={handleClose}></div>
			{children}
		</div>,
		document.querySelector('#custom-portal')!
	);
};

export default Model;
