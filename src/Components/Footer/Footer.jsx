import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer className="bg-[url('/photo/footer-img.png')] bg-no-repeat py-20 lg:pt-[165px] lg:pb-[25px] bg-cover">
      <div className="Container">
        <FooterForm />
      </div>
    </footer>
  );
};

export default Footer;
