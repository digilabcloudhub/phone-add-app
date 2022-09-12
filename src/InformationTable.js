import React from 'react'

const InformationTable = (props) => {
  const sorting=props.entry.sort((a,b)=>a.lastName.localeCompare(b.lastName));
  const dispInput=sorting.map((item,index)=> 
    <tr key={index}><td>{item.firstName}</td>
    <td>{item.lastName}</td>
    <td>{item.mobile}</td></tr>);

  return (
    <div className='formData'>
      <table>
        <caption>InformationTable</caption>
        <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Mobile</th>
            </tr>
        </thead>
        <tbody>
        {dispInput}
        </tbody>
      </table>
      
      
    </div>
  )
}

export default InformationTable