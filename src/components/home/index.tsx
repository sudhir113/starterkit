import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home =()=>{
    const [startDate, setStartDate] = useState(new Date());
    return(
        <>
            <h1>Home</h1>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showYearPicker />
        </>
    )
}
export default Home;