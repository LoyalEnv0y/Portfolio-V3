import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { cn } from '../../utils/cn';

type CarouselButtonsProps = {
	content: unknown[];
	page: number;
	move: (newDirection: number, skipTo?: number) => void;
	restricted?: boolean;
	hideNavigationButtons?: boolean;
	className?: string;
};

const CarouselButtons = ({
	content,
	page,
	move,
	restricted,
	hideNavigationButtons,
	className,
}: CarouselButtonsProps) => {
	const classes = cn(
		'flex items-center justify-center gap-x-4 text-secondary-100',
		className
	);

	return (
		<div className={classes}>
			{!hideNavigationButtons && (
				<button
					className="disabled:text-secondary-400 text-2xl transition-transform duration-200 hover:text-secondary-200 active:-translate-x-0.5 disabled:active:translate-x-0"
					disabled={page < 1}
					onClick={() => move(-1)}
				>
					<MdKeyboardArrowLeft />
				</button>
			)}

			<div className="flex items-center gap-x-4">
				{content.map((_, i) => (
					<button
						key={i}
						disabled={restricted && i > page}
						className={cn(
							'group relative flex size-5 items-center justify-center rounded-full border-3 border-secondary-200 transition-all duration-200',
							{
								'border-accent-100 bg-accent-100 hover:enabled:border-accent-300 hover:enabled:bg-accent-300':
									page === i,
								'hover:enabled:border-secondary-300': page !== i,
							}
						)}
						onClick={() => move(i < page ? -1 : 1, i)}
					></button>
				))}
			</div>

			{!hideNavigationButtons && (
				<button
					className="disabled:text-secondary-400 text-2xl transition-transform duration-200 hover:text-secondary-200 active:translate-x-0.5 disabled:active:translate-x-0"
					disabled={page >= content.length - 1 || restricted}
					onClick={() => move(1)}
				>
					<MdKeyboardArrowRight />
				</button>
			)}
		</div>
	);
};

export default CarouselButtons;
