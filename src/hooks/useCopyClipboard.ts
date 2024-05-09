import { useEffect, useState } from 'react';

export const useCopyClipboard = (text: string = 'copied', timeOutTimer = 2000) => {
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		if (!isCopied) return;

		const timer = setTimeout(() => {
			setIsCopied(false);
		}, timeOutTimer);

		return () => clearTimeout(timer);
	}, [isCopied, timeOutTimer]);

	const copy = () => {
		navigator.clipboard.writeText(text);
		if (!isCopied) setIsCopied(true);
	};

	return { isCopied, copy };
};
