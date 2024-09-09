import style from './App.module.scss'
import { useFetch } from './hooks/useFetch'
import { useImages } from './hooks/useImages'

export default function App() {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/users`);
  const { images, loading } = useImages();


  return (
    <>
      <div>
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
