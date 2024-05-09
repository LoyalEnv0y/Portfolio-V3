import { cn } from '../../utils/cn';
import Modal from '../ui/Modal';
import { ReactNode } from 'react';

type ConfirmDialogProps = {
	handleClose: () => void;
	className?: string;
	children?: ReactNode;
};

type DialogTitleProps = {
	children?: ReactNode;
	className?: string;
};

type DialogDescriptionProps = {
	children?: ReactNode;
	className?: string;
};

type DialogActionsProps = {
	children?: ReactNode;
	className?: string;
};

export const ConfirmDialog = ({
	handleClose,
	className,
	children,
}: ConfirmDialogProps) => {
	const classes = cn(
		'z-20 flex flex-col gap-y-2 rounded-xl bg-secondary-100 p-5',
		className
	);

	return (
		<Modal handleClose={handleClose}>
			<div className={classes}>{children}</div>
		</Modal>
	);
};

export const DialogTitle = ({ className, children }: DialogTitleProps) => {
	const classes = cn('text-2xl font-semibold', className);

	return <div className={classes}>{children}</div>;
};

export const DialogDescription = ({
	className,
	children,
}: DialogDescriptionProps) => {
	const classes = cn(className);

	return <div className={classes}>{children}</div>;
};

export const DialogActions = ({ className, children }: DialogActionsProps) => {
	const classes = cn('flex items-center w-full gap-x-4', className);

	return <div className={classes}>{children}</div>;
};
