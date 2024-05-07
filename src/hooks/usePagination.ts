import { useState } from 'react';

export const usePagination = (content: unknown[]) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const move = (newDirection: number, skipTo?: number) => {
		if (page <= 0 && newDirection < 0) return;
		if (page >= content.length - 1 && newDirection > 0) return;

		skipTo != null || skipTo != undefined
			? setPage([skipTo, newDirection])
			: setPage([page + newDirection, newDirection]);
	};

	return { page, direction, move };
};
