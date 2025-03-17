import React, { useState, useRef } from 'react';
import DataTable from 'react-data-table-component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { useReactToPrint } from 'react-to-print';
import 'tailwindcss/tailwind.css';

const columns = [
  { name: 'Name', selector: row => row.name, sortable: true },
  { name: 'Age', selector: row => row.age, sortable: true },
  { name: 'Email', selector: row => row.email, sortable: true },
  // Add more columns as needed
];

const generateDummyData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    data.push({ id: i, name: `Name ${i}`, age: 20 + i, email: `name${i}@example.com` });
  }
  return data;
};

const data = generateDummyData();

const DataTableComponent = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [columnFilters, setColumnFilters] = useState({
    name: '',
    age: '',
    email: '',
  });
  const componentRef = useRef();

  const filteredItems = data.filter(
    item =>
      (!columnFilters.name || item.name.toLowerCase().includes(columnFilters.name.toLowerCase())) &&
      (!columnFilters.age || item.age.toString().includes(columnFilters.age.toString())) &&
      (!columnFilters.email || item.email.toLowerCase().includes(columnFilters.email.toLowerCase()))
  );

  const handleFilterChange = (e) => {
    setColumnFilters({
      ...columnFilters,
      [e.target.name]: e.target.value,
    });
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Data Table', 20, 10);
    const tableColumn = columns.map(col => col.name);
    const tableRows = filteredItems.map(item => columns.map(col => item[col.selector(item)]));
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save('data-table.pdf');
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredItems);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    XLSX.writeFile(workbook, 'data-table.xlsx');
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const subHeaderComponent = (
    <div className="w-full flex justify-between items-center mb-4">
      <div className="flex">
        <button
          className="bg-blue-500 text-white p-2 rounded mr-2"
          onClick={() => setModalOpen(true)}
        >
          Filter
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded mr-2"
          onClick={exportPDF}
        >
          Export PDF
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded mr-2"
          onClick={exportExcel}
        >
          Export Excel
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText('');
          setColumnFilters({ name: '', age: '', email: '' });
        }}
      >
        Reset
      </button>
    </div>
  );

  return (
    <div className="p-4">
      <div ref={componentRef}>
        <DataTable
          title="Data Table"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponent}
          persistTableHead
        />
      </div>
      {modalOpen && (
        <div className="fixed top-0 right-0 h-full flex items-start justify-end bg-gray-500 bg-opacity-100">
          <div className="bg-white p-8 shadow-lg h-full w-75">
            <h2 className="text-xl mb-4">Filter Columns</h2>
            <div className="mb-4">
              <label className="block">Name</label>
              <input
                type="text"
                name="name"
                value={columnFilters.name}
                onChange={handleFilterChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block">Age</label>
              <input
                type="text"
                name="age"
                value={columnFilters.age}
                onChange={handleFilterChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                type="text"
                name="email"
                value={columnFilters.email}
                onChange={handleFilterChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white p-2 rounded mr-2"
                onClick={() => setModalOpen(false)}
              >
                Apply
              </button>
              <button
                className="bg-gray-500 text-white p-2 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTableComponent;
