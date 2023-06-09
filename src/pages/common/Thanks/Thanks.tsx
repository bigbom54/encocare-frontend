import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button/Button';
import NormalInput from '../../../components/common/NormalInput/NormalInput';
import thanksImage from '../../../assets/images/thankyou.png';
import './Thanks.scss';

const Thanks = () => {
    return (
        <div className="thanks">
            <img src={thanksImage} alt="" />
            <h1>
                You're amazing! <br className="mobile-only" />
                Thank you
            </h1>
            <p>
                Thank you for your support in curing blindness! If you wish to subscribe to our latest{' '}
                <br className="desktop-only" />
                updates and news please enter your email below!
            </p>
            <div>
                <NormalInput placeHolder="Email Address" />
            </div>
            <div>
                <Button title="Subscribe" type="primary" arrow />
            </div>
            <div>
                <Link to="/">Return to homepage</Link>
            </div>
        </div>
    );
};

export default Thanks;
