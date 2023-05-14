import { FaBeer } from 'react-icons/fa';
import { VscBug } from 'react-icons/vsc';

export const Post = () => {
    return <button onClick={ () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error) )
    }} >

        Execute fetch <VscBug />
    </button>
}