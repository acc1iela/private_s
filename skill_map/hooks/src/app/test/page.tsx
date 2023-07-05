import { ThemeProvider } from '../../../contexts/themeContext.client'
import ThemeToggleButton from '../../../components/toggleButton.client'

const Page = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
    </ThemeProvider>
  );
};

export default Page
