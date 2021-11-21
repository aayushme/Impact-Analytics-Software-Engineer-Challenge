import * as actionTypes from './actionsTypes'
import axios from 'axios'

export const memberGetSuccess = (dataA) =>{
    return {
        type :actionTypes.MEMBER_GET_SUCCESS,
        data : dataA
    }
}

export const memberGetFail = (error) =>{
    return {
        type :actionTypes.MEMBER_GET_FAIL,
        error : error
    }
}

export const getMember = () =>{
    return dispatch =>{
    console.log("Done");
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    axios
      .get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",axiosConfig
      )
      .then((res) => {
        dispatch(memberGetSuccess(res.data));
        
      })
      .catch((err) => {
        dispatch(memberGetFail(err));
      })

    }
}
