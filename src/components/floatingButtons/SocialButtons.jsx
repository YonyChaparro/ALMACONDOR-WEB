import { ButtonGroup, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from 'react-icons/io';

const ButtonSocial = ({ classname, url, variant, icon: Icon, newPage = false }) => (
  <Button variant={variant} className={`rounded-circle me-2 no-hover ${classname}`} href={url} target={!newPage ? "_blank" : ""}>
    <Icon />
  </Button>
)
const SocialButtons = () => {
  return (
    <div className="social-buttons fixed-bottom">
      <ButtonGroup className='buttons-group'>
        <ButtonSocial classname='facebook' url="https://www.facebook.com" variant="primary" icon={FaFacebook} />
        <ButtonSocial classname='x' url="https://www.facebook.com" variant="dark" icon={FaXTwitter} />
        <ButtonSocial classname='gradientInstagram' url="https://www.facebook.com" variant="danger" icon={FaInstagram} />
        <ButtonSocial classname='up' url="#home" variant="light" newPage={true} icon={IoIosArrowUp} />
      </ButtonGroup>
    </div>
  );
}

export default SocialButtons;
