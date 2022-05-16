import { useState } from 'react';
import './App.css';
import { Banner, LocationInfo, ResidentsList, SearchBox } from './components';
import { useFetch } from './hooks';
import { getLocationUrl, getRandomNumber } from './utils';

const id = getLocationUrl({ id: getRandomNumber({ limit: 126 }) });

function App() {
   const [url, setUrl] = useState(id);
   const { data: location, isLoading, error } = useFetch(url);

   const handleChangeUrl = (url) => setUrl(url);

   return (
      <div className='App'>
         <Banner />
         <SearchBox handleChangeUrl={handleChangeUrl} />
         <LocationInfo
            location={location}
            isLoading={isLoading}
            error={error}
         />
         <ResidentsList
            url={url}
            location={location}
            isLoading={isLoading}
            error={error}
         />
      </div>
   );
}

export default App;
