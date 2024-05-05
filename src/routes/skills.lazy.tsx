import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/skills')({
  component: () => <div>Hello /skills!</div>
})