import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

// Page components
import Home from './pages/Home';
import Compare from './pages/Compare';
import About from './pages/About';
import Statistics from './pages/Statistics';
import Bookmarks from './pages/Bookmarks';
import MyPokemons from './pages/MyPokemons';
import Evolutions from './pages/Evolutions';
import Types from './pages/Types';
import EggGroups from './pages/EggGroups';
import Gmax from './pages/Gmax';
import Mega from './pages/Mega';
import GuessPokemon from './pages/GuessPokemon';
import Tcg from './pages/Tcg';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/compare"
        element={
          <Layout>
            <Compare />
          </Layout>
        }
      />
      <Route
        path="/statistics/types"
        element={
          <Layout>
            <Statistics />
          </Layout>
        }
      />
      <Route
        path="/bookmarks"
        element={
          <Layout>
            <Bookmarks />
          </Layout>
        }
      />
      <Route
        path="/my-pokemons"
        element={
          <Layout>
            <MyPokemons />
          </Layout>
        }
      />
      <Route
        path="/evolutions"
        element={
          <Layout>
            <Evolutions />
          </Layout>
        }
      />
      <Route
        path="/types"
        element={
          <Layout>
            <Types />
          </Layout>
        }
      />
      <Route
        path="/egg-groups"
        element={
          <Layout>
            <EggGroups />
          </Layout>
        }
      />
      <Route
        path="/gmax"
        element={
          <Layout>
            <Gmax />
          </Layout>
        }
      />
      <Route
        path="/mega"
        element={
          <Layout>
            <Mega />
          </Layout>
        }
      />
      <Route
        path="/guess-pokemon"
        element={
          <Layout>
            <GuessPokemon />
          </Layout>
        }
      />
      <Route
        path="/tcg"
        element={
          <Layout>
            <Tcg />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      {/* not found page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
