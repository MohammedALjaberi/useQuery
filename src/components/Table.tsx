import { useState, useEffect, FC } from 'react'
import axios from 'axios'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Table: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        setTodos(response.data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }

    getTodos()
  }, [])

  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
              userId
            </th>
            <th className="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
              id
            </th>
            <th className="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
              title
            </th>
            <th className="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
              completed
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="px-4 py-4 text-xl text-gray-800">{todo.userId}</td>
              <td className="px-4 py-4 text-xl text-gray-800">{todo.id}</td>
              <td className="px-4 py-4 text-xl text-gray-800">{todo.title}</td>
              <td className="px-4 py-4 text-xl text-gray-800">{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
