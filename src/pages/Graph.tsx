import React from 'react';
import CovidTracker from '../components/CovidTracker';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


const Graph = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <CovidTracker/>
      </div>
    </QueryClientProvider>
  );
};

export default Graph;
