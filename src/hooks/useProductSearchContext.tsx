import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ProductSearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductSearchContext = createContext<ProductSearchContextType | undefined>(undefined);

export const ProductSearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || "");

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  return (
    <ProductSearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </ProductSearchContext.Provider>
  );
};

export const useProductSearchContext = () => {
  const context = useContext(ProductSearchContext);
  if (!context) {
    throw new Error('useProductSearchContext must be used within ProductSearchProvider');
  }
  return context;
};
