import './Page404.css'
import { Link } from 'react-router-dom';

const Page404 = () => {
    return ( 
        <div className="page404_wrap">
          <h2>404</h2>
          <h3>PAGE NOT FOUND !</h3>
          <p> YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
          <Link to="/"><button>Back to Home</button></Link>
        </div>
     );
}
 
export default Page404;