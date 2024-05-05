import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/experience')({
  component: () => <div>Hello /experience!</div>
})