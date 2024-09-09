import Table from './components/Table'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Table />
      </div>
    </QueryClientProvider>
  )
}

export default App
