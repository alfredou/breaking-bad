import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Episodes = ({id, img, name ,nickname ,occupation ,status})=>{
    return(
        <div className='imgContent' key={`#${id}`}>
            <LazyLoadImage className='img' effect='blur' src={img}/>
            <span className='name'>{`Name: ${name}`}</span>
            <span className='nickname'>{`Nickname: ${nickname}`}</span>
            <span className='occupations'>{`Occupation: ${occupation[0]}`}</span>
            <span className='status'>{`Status: ${status}`}</span>
        </div>
    )
}
export default Episodes; 