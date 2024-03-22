import { useState } from "react";
import {getData} from "./emp_service";

function EmpComponent() {
    const [employees, setEmployees] = useState([]);
    function handleGetData() {
        getData().then(data => {
            setEmployees(data);
        });
    }

    let resultArray = employees.map((item,index) => {
        return <tr key={index}>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
        </tr>
    });
    return <div>
            <h2>Welcome</h2>
            <hr/>
            <button onClick={handleGetData}>Get Data</button>
            <hr/>
            <table border="2" cellPadding="5" cellSpacing="0" width="700">
                <tr>
                    <th>empno</th>
                    <th>ename</th>
                    <th>job</th>
                    <th>sal</th>
                    <th>deptno</th>
                </tr>
                {resultArray}
            </table>
        </div>
}

export default EmpComponent;