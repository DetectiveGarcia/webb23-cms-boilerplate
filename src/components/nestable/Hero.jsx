import Image from 'next/image';

export default function Hero({ blok }) {



  return (
    <section className="w-full bg-blue">
      <div className="heroSection">
        <div className="heroTexts">
          <h1 style={{ fontWeight: '500', fontSize: '40px' }}>{blok?.title}</h1>
          <p>{blok?.text}</p>
          
          {blok?.button?.map((button) => (
            <button key={button._uid} className="heroBtn">
              {button.button_text}
            </button>
          ))}
        </div>
 
          <Image src={blok?.image?.filename} alt="" className="heroImg" />

      </div>
    </section>
  );
}
