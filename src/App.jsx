import { useState } from 'react';
import './App.css';

const companies = [
  {
    _id: "1",
    name: "Grameenphone",
    sector: "Telecommunications",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Grameenphone_Logo_GP_Logo.svg/504px-Grameenphone_Logo_GP_Logo.svg.png",
    headquarters: "Dhaka, Bangladesh",
    founded: 1997
  },
  {
    _id: "2",
    name: "BRAC",
    sector: "Non-profit, Development",
    logo: "https://adsofbd.com/wp-content/uploads/2019/05/Brac-Bank-Vector-Logo.jpg",
    headquarters: "Dhaka, Bangladesh",
    founded: 1972
  },
  {
    _id: "3",
    name: "Airtel Bangladesh",
    sector: "Telecommunications",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCXIdX_Bccn4BjpgFNl0I4aSBfPBJaLurRw&s",
    headquarters: "Dhaka, Bangladesh",
    founded: 2010
  },
  {
    _id: "4",
    name: "Bashundhara Group",
    sector: "Conglomerate (Real Estate, Cement, etc.)",
    logo: "https://adsofbd.com/wp-content/uploads/2019/05/Bashundhara-Group-Logo.jpg",
    headquarters: "Dhaka, Bangladesh",
    founded: 1987
  },
  {
    _id: "5",
    name: "Dutch-Bangla Bank",
    sector: "Banking and Financial Services",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPINsZ01oBEqTlwMIFgsNEBLqJM2qh1zaVw&s",
    headquarters: "Dhaka, Bangladesh",
    founded: 1996
  },
  {
    _id: "6",
    name: "Robi Axiata Limited",
    sector: "Telecommunications",
    logo: "https://webapi.robi.com.bd/uploads/2022/05/84f60a29-b168-4472-b706-bea931549608.jpg",
    headquarters: "Dhaka, Bangladesh",
    founded: 1995
  },
  {
    _id: "7",
    name: "City Group",
    sector: "Food & Beverages",
    logo: "https://images.seeklogo.com/logo-png/47/1/city-group-logo-png_seeklogo-473242.png",
    headquarters: "Dhaka, Bangladesh",
    founded: 1972
  },
  {
    _id: "8",
    name: "Walton Group",
    sector: "Electronics and Home Appliances",
    logo: "https://images.seeklogo.com/logo-png/25/1/walton-logo-png_seeklogo-251022.png",
    headquarters: "Dhaka, Bangladesh",
    founded: 1977
  },
  {
    _id: "9",
    name: "Jamuna Group",
    sector: "Conglomerate (Real Estate, Textile, etc.)",
    logo: "https://jamunagroup.com.bd/images/logo/1662050814-company-logo.png",
    headquarters: "Dhaka, Bangladesh",
    founded: 1974
  },
  {
    _id: "10",
    name: "Madhur Bansuri",
    sector: "Food Products (Rice)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZV9F6lv5ncCRwieIbGDhZ-f0seq2PvOLfnA&s",
    headquarters: "Dhaka, Bangladesh",
    founded: 2000
  }
];

function App() {
  const [companiesState] = useState(companies);

  return (
    <div className="App">
      <h1>Top Bangladeshi Companies (Table View)</h1>
      <table className="company-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Sector</th>
            <th>Headquarters</th>
            <th>Founded</th>
          </tr>
        </thead>
        <tbody>
          {companiesState.map(company => (
            <tr key={company._id}>
              <td><img src={company.logo} alt={company.name} width="50" /></td>
              <td>{company.name}</td>
              <td>{company.sector}</td>
              <td>{company.headquarters}</td>
              <td>{company.founded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
