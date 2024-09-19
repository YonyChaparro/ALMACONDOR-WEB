import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from 'react-icons/io';

const ButtonSocial = ({ url, variant, icon: Icon, newPage = false }) => (
  <Button variant={variant} className='rounded-circle me-2' href={url} target={!newPage ? "_blank" : ""}>
    <Icon />
  </Button>
)
const SocialButtons = () => {
  return (
    <div className="social-buttons fixed-bottom">
      <ButtonGroup>
        <ButtonSocial url="https://www.facebook.com" variant="primary" icon={FaFacebook} />
        <ButtonSocial url="https://www.facebook.com" variant="info" icon={FaXTwitter} />
        <ButtonSocial url="https://www.facebook.com" variant="danger" icon={FaInstagram} />
        <ButtonSocial url="#home" variant="secondary" newPage={true} icon={IoIosArrowUp} />
      </ButtonGroup>
    </div>
  );
}

export default SocialButtons;
