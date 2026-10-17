import type { ContactLink } from "../../types";
import PillButton from "../PillButton/PillButton";
import "./Footer.css";

interface FooterProps {
  owner: string;
  contacts: ContactLink[];
}

export default function Footer({ owner, contacts }: FooterProps) {
  const handleClick = (contact: ContactLink) => {
    if (contact.href) window.location.href = contact.href;
    else if (contact.message) alert(contact.message);
  };

  return (
    <footer>
      <div className="footer-container">
        <h3>Contact Me</h3>
        <div className="contact-wrapper">
          {contacts.map((contact) => (
            <PillButton
              key={contact.id}
              variant="logo"
              aria-label={contact.label}
              onClick={() => handleClick(contact)}
            >
              <i className={contact.icon}></i>
            </PillButton>
          ))}
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} {owner}. All rights reserved.</p>
    </footer>
  );
}
