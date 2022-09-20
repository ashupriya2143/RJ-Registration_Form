import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({forms,deleteForm}) => {
    
    return forms.map(form=>(
        
        <tr key={form.name}>
            <td>{form.name}</td>
            <td>{form.email}</td>
            <td>{form.phoneno}</td>
            <td>{form.state}</td>
            <td>{form.country}</td>
            <td>{form.skills}</td>
            <td>{form.degree}</td>
            <td>{form.experience}</td>
            <td>{form.contact}</td>
            <td className='delete-btn' onClick={()=>deleteForm(form.name)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
