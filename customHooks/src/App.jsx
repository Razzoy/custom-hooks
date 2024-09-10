import { useContext } from 'react';
import style from './App.module.scss'
import { useFetch } from './hooks/useFetch'
import { useImages } from './hooks/useImages'
import { ThemeContext } from './context/ThemeContext';

export default function App() {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/users`);
  const { images, loading } = useImages();

  const {isDarkMode, handleChangeDarkMode} = useContext(ThemeContext)

  console.log("isDarkMode", isDarkMode);
  


  return (
    <>
    <button onClick={handleChangeDarkMode}>Change Theme</button>
      <div className={isDarkMode ? style.darkMode : style.names}>
        {data?.map((item) => {
          return <h1>{item.name}</h1>;
        })}
      </div>

      <div>
        {loading ? (
          <p>Loading Images...</p>
        ) : (
          images.map((image, index) => (
            <img key={index} src={image} className={style.imagesContainer} />
          ))
          )}
      </div>
    </>
  )
}
