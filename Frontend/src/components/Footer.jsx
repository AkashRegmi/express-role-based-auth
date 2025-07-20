const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 bg-gray-100 text-sm text-gray-600 mt-10">
      © {currentYear} Akash Regmi
    </footer>
  );
};

export default Footer;
