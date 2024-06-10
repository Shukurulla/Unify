import { useContext, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { BsCheck } from 'react-icons/bs'
import { WaiterPreviewContext } from '../../context/waiters/WaiterPreviewContext'

const WaiterCard = (props) => {
  const [isChecked, setchecked] = useState(false)
  const { setWaiterCardPreview } = useContext(WaiterPreviewContext)

  return (
    <div onClick={() => setWaiterCardPreview(props)} className='grow relative bg-white rounded-3xl flex flex-col items-center pb-8 p-4 shadow-[0_0_12px_0_#00000014]'>
        <div className='size-28 rounded-full overflow-hidden flex justify-center items-center'>
            <img src={props.image} alt="Product image" />
        </div>
        <p className='font-semibold'>{props.lastName[0] + '. ' + props.firstName}</p>
        <p className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent font-semibold'>Xizmet {props.service}%</p>
        <div onClick={e => e.stopPropagation()} className='absolute top-full -translate-y-1/2 border-8 border-[#F6F4F2] rounded-full curved'>
          <button onClick={() => setchecked(prev => !prev)} className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white rounded-full size-10 shadow-[0_0_12px_0_#77AC63]'>
            {
              isChecked ? (
                <BsCheck className='mx-auto text-2xl' />
              ) : (
                <GoPlus className='mx-auto text-2xl stroke-1' />
              )
            }
          </button>
        </div>
    </div>
  )
}

export default WaiterCard