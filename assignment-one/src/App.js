
import { Routes, Route, Navigate } from 'react-router-dom'
import ActionBtn from './Components/ActionBtn';
import AddressDetails from './Components/AddressDetails';
import FinalData from './Components/FinalData';
import PaymentDetails from './Components/PaymentDetails';
import PersonalDetails from './Components/PersonalDetails';

const FormComponent = () => {

  return (
    <Routes>
    
      <Route path='/' element={<Navigate to="/personal" />} />
      <Route path='/personal' element={<PersonalDetails />} />
      <Route path='/address' element={<AddressDetails />} />
      <Route path='/payment' element={<PaymentDetails />} />
      <Route path='/FinalPage' element={<FinalData />} />
    </Routes>
  )
}

const App = () => {
  return (
    <>
      <h1 className="mainHead">Multi Page Form</h1>
      <form className="container">
        <FormComponent />
      </form>
    </>
  );
}

export default App;
