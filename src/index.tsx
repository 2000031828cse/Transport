import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import { StopsProvider } from './content/applications/Stops/StopsContext';
import * as serviceWorker from 'src/serviceWorker';
import BusRoutesProvider from './content/applications/Busroutes/BusRoutesContext';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <StopsProvider>
          <BusRoutesProvider>
          <App />
          </BusRoutesProvider>
        </StopsProvider>
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
