import { useContext, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { BsCheck } from 'react-icons/bs'
import { WaiterPreviewContext } from '../../context/waiters/WaiterPreviewContext'

const WaiterCard = (props) => {
  const [isChecked, setchecked] = useState(false)
  const { setWaiterCardPreview } = useContext(WaiterPreviewContext)

  return (
    <div onClick={() => setWaiterCardPreview(props)} className='grow h-fit relative bg-white rounded-[20px] flex flex-col items-center pb-10 p-4'>
        <div className='size-28 rounded-full overflow-hidden flex justify-start items-center'>
            <img src={`./waiter-images/${props.image}`} alt="Product image" />
        </div>
        <p className='font-semibold pt-2'>{props.lastName[0] + '. ' + props.firstName}</p>
        <p className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent font-semibold'>Xizmet {props.service}%</p>
        <div onClick={e => e.stopPropagation()} className='absolute top-full -translate-y-1/2 rounded-full size-16 flex justify-center items-center wrapper'>
          <div className="rounded-br-[20px] shadow-[4px_6px_0_0_#F6F4F2] size-5 absolute left-[-16px] top-[12px]"></div>
          <button onClick={() => setchecked(prev => !prev)} className='z-[1] bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white rounded-full size-10 shadow-[0_0_8px_2px_#77AC63]'>
            {
              isChecked ? (
                <BsCheck className='mx-auto text-2xl' />
              ) : (
                <GoPlus className='mx-auto text-2xl stroke-1' />
              )
            }
          </button>
          <div className="rounded-bl-[20px] shadow-[-4px_6px_0_0_#F6F4F2] size-5 absolute right-[-16px] top-[12px]"></div>
        </div>
    </div>
  )
}

export default WaiterCard