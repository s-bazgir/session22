import {createBrowserRouter, RouterProvider }  from 'react-router-dom';
import Main from './pages/Main/index.js';
import NotFound from './pages/NotFound/index.js';
import Product from './pages/Product/index.js';
import HomePage from './pages/HomePage/index.js';
import SingleMovie from './pages/SingleMovie/index.js';
import SingleGenre from './pages/SingleGenre/index.js';
import Enter from './pages/Enter/index.js';
import Register from './pages/Register/index.js';
import Search from './pages/Search/index.js';

const router = createBrowserRouter([
 {
  path: "/",
  element: <HomePage />,
},
{path:"/SingleMovie/:id",
 element: <SingleMovie />
},
{path:"/Genre/:id",
 element: <SingleGenre />
},
{path:"/SignIn",
 element: <Enter />
},
{path:"/Register",
 element: <Register />
},
{path:"/Search",
 element: <Search />
},
{path: "*",
 element: <NotFound />
}
]
);
export default function Router(){
    return(
        <RouterProvider router={router}/>
    )
}

