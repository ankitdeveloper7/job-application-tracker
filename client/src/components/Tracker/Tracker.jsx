import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Import the DashboardIcon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Index from './Tracker Components'; // Import other components as needed
import Profile from './Tracker Components/Profile';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Contacts from './Tracker Components/Contacts';
import ArticleIcon from '@mui/icons-material/Article';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Home from '../Home';
// import Dashboard from './Tracker Components/Dashboard';
import Jobsection from './Tracker Components/Jobsection';

const NAVIGATION = [
  { segment: 'home', title: 'Home', icon: <DashboardIcon /> },
  { segment: 'ersume', title: 'Resume Builder', icon: <ArticleIcon /> },
  
  { kind: 'divider' },
  { segment: 'profile', title: 'Profile', icon: <AccountBoxIcon /> },
  { segment: 'contacts', title: 'Contacts', icon: <PermContactCalendarIcon/> },
  { segment: 'documents', title: 'Documents', icon: <DocumentScannerIcon /> },
  {
    kind: 'header',
    title: 'My Job Trackers',
  },
  { segment: 'jobsection', title: 'Job Tracker 2024', icon: <DocumentScannerIcon /> },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => ({
    pathname,
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
}));

export default function Tracker(props) {
  const { window } = props;
  const router = useDemoRouter('/home'); // Set initial path to 'home'
  const demoWindow = window ? window() : undefined;

  // Function to render the correct component based on the current segment
  const renderComponent = () => {
    switch (router.pathname) {
      case '/home':
        return <Index />;
      case '/profile':
        return <Profile />;
      case '/contacts':
        return <Contacts />
      case '/jobsection':
        return <Jobsection />
      // Add cases for other components based on their segments...
      default:
        return <Index />; // Default component (adjust if needed)
    }
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {renderComponent()} {/* Render the current component */}
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
