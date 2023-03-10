import React , { useContext } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { DataContext } from '../context/DataProvider';

const Loader = () => {

  const {loading,setLoading} = useContext(DataContext)

  return (
    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}} >
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        />
    </div>
  )
}

export default Loader
