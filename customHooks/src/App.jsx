import './App.css'
import { useFetch } from './hooks/useFetch'

export default function App() {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/todos`);
  console.log({data});
  

  return (
    <>
      <div>
            {data?.map((item) => {
                return <h1>{item.title}</h1>;
            })}
        </div>
    </>
  )
}
