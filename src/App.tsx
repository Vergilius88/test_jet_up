import { Route, Routes } from "react-router-dom";
import { routes } from "./Assets/Data/rautes";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";

import "./Assets/BaseStyles/normalize.css";
import "./Assets/BaseStyles/base.css";
import "./Assets/BaseStyles/fonts.css";
import DictionaryPage from "./Pages/DictionaryPage/DictionaryPage";
import AddWordsPage from "./Pages/AddWordsPage/AddWordsPage";
import ResultsPage from "./Pages/ResultsPage/ResultsPage";
import TestingPage from "./Pages/TestingPage/TestingPage";

export default function App() {
    
    return (
        <>
            <Routes>
                <Route
                    path={routes.dictionary}
                    element={
                        <><Header /><DictionaryPage/><Footer /></>
                    }
                />
                <Route
                    path={routes.addingWordsPage}
                    element={

                        <><Header /><AddWordsPage/><Footer /></>

                    }
                />
                <Route
                    path={routes.wordCheckPage}
                    element={

                        <><Header /><TestingPage/><Footer /></>

                    }
                />
                <Route
                    path={routes.resultsPage}
                    element={

                        <><Header /><ResultsPage/><Footer /></>

                    }
                />

            </Routes>
        </>
    );
}
