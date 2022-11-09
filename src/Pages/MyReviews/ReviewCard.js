import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewCard = ({reviews,handleDelete}) => {
    const {serviceName,userName, review,_id, state} = reviews;
    

    const {user} = useContext(AuthContext);

    

    return (
        <tr>
        
        <td>
          <div className="flex flex-wrap items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.photoURL}  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{userName}</div>
              <div className="text-sm opacity-50">{serviceName}</div>
            </div>
          </div>
        </td>
        <td>
         {review}
        </td>
        
        <th>
        <Link to={`/update/${_id}`}>
        <button className="btn btn-ghost btn-xs">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>
    );
};

export default ReviewCard;