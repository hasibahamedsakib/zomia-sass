import FooterContent from "./FooterContent";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer className="bg-[url('/photo/footer-img.png')] bg-no-repeat pt-20 pb-4 md:pt-[120px] lg:pt-[165px] lg:pb-[20px] bg-center bg-cover">
      <div className="Container">
        <FooterForm />
        <FooterContent />
        <hr className="h-[2px] bg-white" />
        <p className="text-center pt-5 pb-2 text-white">
          © 2022 Zomia . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
