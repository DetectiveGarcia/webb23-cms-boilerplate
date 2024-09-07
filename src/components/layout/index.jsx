import Link from "next/link";
import Image from "next/image";
//Uses config set global components for the layout
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  console.log(config);

  return (
    <>

        <header className="site-header">
          <img
            className="logo"
            style={{ mixBlendMode: "multiply" }}
            src={config?.content?.logo.filename}
            alt=""
          />
          <nav className="main-nav">
            <ul>
              {config?.content?.menu_links.map((link) => {
                return (
                  <li key={link._uid}>
                    <Link href={link.linkUrl.cached_url}>{link.linkName}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="foot-container">
            <p>{config?.content?.email}</p>
            <p>{config?.content?.phone}</p>
            <p>{config?.content?.address}</p>
          </div>
        </footer>

    </>
  );
}
