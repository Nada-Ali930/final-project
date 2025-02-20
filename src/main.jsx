import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/flowbite/dist/flowbite.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import App from './App.jsx'
import CounterContectProvider from './Context/CounterContext.jsx';
import UserTokenProvider from './Context/UserToken.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import NumberItemContextProvider from './Context/NumCartContext.jsx';
import { Provider } from 'react-redux';
import { store } from './libs/store.js';


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <NumberItemContextProvider>
    <QueryClientProvider client={queryClient}>
    <UserTokenProvider>
    <CounterContectProvider>
        < Toaster></Toaster>
        <App />
    <ReactQueryDevtools initialIsOpen={false} />
    </CounterContectProvider>
    </UserTokenProvider>
    </QueryClientProvider>
    </NumberItemContextProvider>
    </Provider>
)
