import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
AOS.init();
AOS.refresh();
  }, [])
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
