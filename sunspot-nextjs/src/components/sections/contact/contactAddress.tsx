import { useEffect, useState } from "react";
import { fetchContactContent } from "@/lib/api";

interface ContactType {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

const defaultContact: ContactType = {
  phone: '+91-9094179527/9103',
  email: 'sunspotengineering@gmail.com',
  address: 'S.No 8, Ponneri High Road, Manali New Town, Tamil Nadu-600 103',
  workingHours: 'Call Us 7/24',
};

const ContactAddress = () => {
  const [contact, setContact] = useState<ContactType>(defaultContact);

  const loadContact = () => {
    fetchContactContent().then((data) => {
      if (data) {
        setContact({
          phone: data.phone || defaultContact.phone,
          email: data.email || defaultContact.email,
          address: data.address || defaultContact.address,
          workingHours: data.workingHours || defaultContact.workingHours,
        });
      }
    });
  };

  useEffect(() => {
    loadContact();
    const interval = setInterval(loadContact, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contact-left-items">
      <div className="contact-info-area-2">
        {/* Phone */}
        <div className="contact-info-items">
          <div className="icon">
            <i className="fa-solid fa-phone" />
          </div>
          <div className="content">
            <p>Call Us 7/24</p>
            <h3>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </h3>
          </div>
        </div>

        {/* Email */}
        <div className="contact-info-items">
          <div className="icon">
            <i className="fa-solid fa-envelope" />
          </div>
          <div className="content">
            <p>Make a Quote</p>
            <h3>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </h3>
          </div>
        </div>

        {/* Location */}
        <div className="contact-info-items">
          <div className="icon">
            <i className="fa-solid fa-location-dot" />
          </div>
          <div className="content">
            <p>Location</p>
            <h3>{contact.address}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
