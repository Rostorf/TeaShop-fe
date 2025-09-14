import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from './MainLayout/MainLayout'
import { Provider } from 'react-redux'
import { store } from './stores'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MainLayout/>
  </Provider>,
)
