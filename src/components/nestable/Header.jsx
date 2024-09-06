import React from 'react';
import Image from 'next/image';

const Header = ({ blok }) => {



  

  return (
    <header {...storyblokEditabel(blok)}>
      {/* Rendera logotyp och menylänkar */}
      <Image src={blok?.logo?.filename} alt="logo" width={300} height={150}  />
      <nav>
        <ul>
          {blok.menu_links.map((link) => (
            <li key={link._uid}>
              <a href={link.linkUrl.cached_url}>{link.linkName}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
