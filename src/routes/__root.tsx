import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { lazy, Suspense } from 'react';
import Header from '../components/Header';

// const TanStackRouterDevtools =
// 	import.meta.env.MODE === 'production'
// 		? () => null // Render nothing in production
// 		: lazy(() =>
// 				// Lazy load in development
// 				import('@tanstack/router-devtools').then((res) => ({
// 					default: res.TanStackRouterDevtools,
// 					// For Embedded Mode
// 					// default: res.TanStackRouterDevtoolsPanel
// 				}))
// 			);

export const Route = createRootRoute({
	component: () => (
		<div className="flex h-screen flex-col items-center gap-y-5 overflow-x-hidden bg-primary-200 p-5 font-poppins tracking-wider text-secondary-200 scrollbar-thin scrollbar-thumb-accent-100 scrollbar-track-primary-200 hover:scrollbar-thumb-sky-500">
			<Header />
			<Outlet />
			{/* <Suspense>
				<TanStackRouterDevtools />
			</Suspense> */}
		</div>
	),
});
