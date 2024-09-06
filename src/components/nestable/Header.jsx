import React from 'react';


const Header = ({ blok }) => {



  

  return (
    <header {...storyblokEditabel(blok)}>
      {/* Rendera logotyp och menylänkar */}
      <img src={blok?.logo?.filename} alt="logo" />
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
