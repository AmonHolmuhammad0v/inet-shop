import { createRoot } from 'react-dom/client'
import './scss/main.scss'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import {  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
)
