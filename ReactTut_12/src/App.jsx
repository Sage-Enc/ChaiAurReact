import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
 return (
    <Provider store={store}>
      <AddTodos />
      <Todos />
    </Provider>
  )
}

export default App
