import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Header></Header></>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

/*
 <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route exact path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":indexId" element={<UserPage />} />
        </Route>

      // <Route path="*" element={<Navigate to="/" replace />} />
     
      // </Route>
    // </Routes>
//*/
