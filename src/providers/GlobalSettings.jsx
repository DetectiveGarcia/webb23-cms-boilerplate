import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GlobalSettings({ blok }) {
  const { logo, email, phone, address, menu_links, Social_Links } = blok;

  return (
    <div className="global-settings">
      {/* Display the logo */}
      {logo && (
        <div className="logo">
          <Image
            src={logo.filename}
            alt={logo.alt || 'Logo'}
            width={150} // Adjust the width based on your requirements
            height={75} // Adjust the height based on your requirements
          />
        </div>
      )}

      {/* Contact Information */}
      <div className="contact-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>

      {/* Menu Links */}
      {menu_links && menu_links.length > 0 && (
        <nav className="menu-links">
          <ul>
            {menu_links.map(link => (
              <li key={link._uid}>
                <Link href={`/${link.linkUrl.cached_url}`}>
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Social Links */}
      {Social_Links && Social_Links.length > 0 && (
        <div className="social-links">
          <ul>
            {Social_Links.map(social => (
              <li key={social._uid}>
                <a href={social.profile_url.cached_url} target="_blank" rel="noopener noreferrer">
                  {social.platform_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
