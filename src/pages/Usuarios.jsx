import {useState, useEffect, Fragment, React} from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { userServices } from '../services/userServices';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

export function Usuarios () {
  const selectionsettings = { persistSelection: true };
  // const toolbarOptions = ['Delete', 'Search', 'Edit', 'Update', 'Cancel' ];
  // const toolbarOptions = ['Add', 'Edit', 'Update', 'Delete', 'Cancel','Search'];
  const toolbarOptions = [{ text: 'Add', tooltipText: 'Add', prefixIcon: 'e-add', id: 'Add' }];
  const editing = { allowDeleting: true, allowEditing: true, allowPaging: true, allowSorting: true, allowAdding: true };
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers =()=>{
    userServices.getAll().then((users) => {
      console.log(users);
      setLoading(false);
      setUsers(users);
    });
  };


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Usuarios" />
      <GridComponent
        dataSource={users}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

