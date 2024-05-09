import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import { Toaster } from 'sonner';

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
		<div className="flex h-screen flex-col items-center gap-y-5 overflow-x-hidden bg-primary-200 p-5 font-poppins tracking-wider text-secondary-200 scrollbar-thin scrollbar-track-primary-200 scrollbar-thumb-accent-100 hover:scrollbar-thumb-sky-500">
			<Header />
			<Outlet />
			<Toaster
				visibleToasts={5}
				richColors
				position="top-center"
				closeButton
				toastOptions={{
					classNames: {
						closeButton: 'shadow-lg size-6',
					},
				}}
				duration={4 * 1000}
			/>
			{/* <Suspense>
				<TanStackRouterDevtools />
			</Suspense> */}
		</div>
	),
});
