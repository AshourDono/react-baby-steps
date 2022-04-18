import { Route, Routes } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Register/RegisterForm';
import TodoApp from './TodoApp/TodoApp';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/todo' element={<TodoApp />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
