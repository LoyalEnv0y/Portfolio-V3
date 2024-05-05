import { useEffect } from 'react';

export const useOutsideClick = (
	parentRef: React.RefObject<HTMLElement>,
	outsideClick: React.Dispatch<React.SetStateAction<boolean>>
) => {
	useEffect(() => {
		const handleOutsideClick = (evt: MouseEvent) => {
			if (!parentRef.current) return;
			if (parentRef.current.contains(evt.target as Node)) return;
			outsideClick(false);
		};

		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [parentRef, outsideClick]);
};
