import { useUpdateTheme } from '../context/';

const Footer = () => {
  const setTheme = useUpdateTheme();

  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
