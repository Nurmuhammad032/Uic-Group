import { Link } from 'react-router-dom';
import './SubmitBtn.scss'

const SubmitBtn = ({link, children}) => {
    return (
        <Link to={link} className='single-btn'>
          {children}
          <span>
            <i className="bi bi-arrow-right-short"></i>
          </span>
        </Link>
    )
}

export default SubmitBtn;