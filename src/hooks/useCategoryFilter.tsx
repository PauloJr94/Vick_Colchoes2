import { createContext, useContext, useState, ReactNode } from 'react';

interface CategoryFilterContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilterContext = createContext<CategoryFilterContextType | undefined>(undefined);

export const CategoryFilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <CategoryFilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryFilterContext.Provider>
  );
};

export const useCategoryFilter = () => {
  const context = useContext(CategoryFilterContext);
  if (!context) {
    throw new Error('useCategoryFilter must be used within CategoryFilterProvider');
  }
  return context;
};
