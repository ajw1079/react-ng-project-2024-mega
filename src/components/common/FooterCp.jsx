import TextAtm from "../atom/TextAtm";

const FooterCp = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="h-50 d-flex justify-content-center align-items-center">
      <TextAtm txtProp={`Copyrights &copy; National Geographic ${year}`} />
    </footer>
  );
};
export default FooterCp;
