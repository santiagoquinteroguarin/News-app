import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  // definir la categoria y noticias
  const [category, setSavedCategory] = useState('');
  const [news, setSavedNews] = useState([]);

  useEffect(() => {
    const queryAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f9608d52e51848a09497e8f83985dc88`;
      const response = await fetch(url);
      const news = await response.json();

      // guardar noticias en el state
      setSavedNews(news.articles);
    }

    queryAPI();
  },[category]);

  return (
    <Fragment>
      <Header 
        title="Buscador de Noticias"
      />

      <div className="container white">
        <Form
          setSavedCategory={setSavedCategory}
        />

        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
