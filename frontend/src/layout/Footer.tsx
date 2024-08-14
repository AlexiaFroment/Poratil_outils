export const Footer = () => {
  return (
    <footer className='bg-dark text-center p-3 '>
      <span className='text-light'>
        Nous contacter :{" "}
        <a
          className='text-light'
          href='mailto:dsr_automation@carrefour.com'
          target='_blank'
          rel='noreferrer'>
          dsr_automation@carrefour.com
        </a>{" "}
      </span>{" "}
      <br />
      <span className='text-light'>
        @2024 Carrefour_Portail outils. All rights reserved{" "}
      </span>{" "}
      <br />
      <span className='text-light'>version 1.00</span>
    </footer>
  );
};
