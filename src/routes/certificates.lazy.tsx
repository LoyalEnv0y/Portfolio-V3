import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/certificates')({
	component: () => <div>Hello /certificates!</div>,
});
