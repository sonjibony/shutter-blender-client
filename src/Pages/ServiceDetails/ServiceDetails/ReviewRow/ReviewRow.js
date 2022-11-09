import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const ReviewRow = ({reviews}) => {

    const {serviceName,userName, review,img} = reviews;
    // console.log(reviews);

    const {user} = useContext(AuthContext);

    return (
        <tr>
        
        <td>
          <div className="flex flex-wrap items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              {img?
    <img src={img} alt="" />
    : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJoaqh-Ehrbg2Qf6Nk_XiblTuvyyiOwsc2g&usqp=CAU" alt="" />
}
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
        
        
      </tr>
    );
};

export default ReviewRow;