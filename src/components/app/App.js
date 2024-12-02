import { lazy , Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import {MainPage, ComicsPage, SingleComicPage} from "../pages";
// import Page404 from "../pages/404";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/spinner";
const Page404 = lazy(() => import('../pages/404'));
const MainPage= lazy(() => import('../pages/MainPage'));
const ComicsPage= lazy(() => import('../pages/ComicsPage'));
const SingleComicPage= lazy(() => import('../pages/SingleComicPage'));
const CharacterPage= lazy(() => import('../pages/CharacterPage'))



const App = () => {


    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/Marvel-project" exact  element={<MainPage/>}/>
                            <Route path="/Marvel-project/comics" element={<ComicsPage/>}/>
                            <Route path="/Marvel-project/comics/:comicId" element={<SingleComicPage/>}/>
                            <Route path="/Marvel-project/:characterId" element={<CharacterPage/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
    
}

export default App;