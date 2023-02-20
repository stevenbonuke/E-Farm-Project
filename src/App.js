import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MasterLayout } from './layouts/admin/index';

const App = () => {
  return (
    <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path="/admin" render={(props) => <MasterLayout {...props} />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App