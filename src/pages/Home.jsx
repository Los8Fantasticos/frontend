import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { dropdownData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';



export function Home() {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      
    </div>
  );
};