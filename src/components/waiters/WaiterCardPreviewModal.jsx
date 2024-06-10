import { useContext } from 'react'
import { WaiterPreviewContext } from '../../context/waiters/WaiterPreviewContext'
import { FaRegStar, FaStar } from 'react-icons/fa'

const WaiterCardPreviewModal = () => {
    const { waiterCardPreview, setWaiterCardPreview } = useContext(WaiterPreviewContext)

  return (
    <div onClick={() => setWaiterCardPreview(null)} className={waiterCardPreview ? 'z-20 bg-black/20 backdrop-blur-sm fixed size-full flex justify-center items-center' : 'hidden'}>
        <div onClick={e => e.stopPropagation()} className='w-fit bg-white rounded-3xl flex flex-col items-center p-4 px-6'>
            <div className='size-28 rounded-full overflow-hidden flex justify-center items-center'>
                <img src={waiterCardPreview?.image} alt="Product image" />
            </div>
            <p className='font-semibold'>{waiterCardPreview?.lastName + ' ' + waiterCardPreview?.firstName}</p>
            <div className='flex gap-1'>
                {
                    Array(5).fill(0).map((item, index) => (
                        index < waiterCardPreview?.stars ? (
                            <FaStar key={index} fill='#F7CD53' />
                        ) : (
                            <FaRegStar key={index} fill='#F7CD53' />
                        )
                    ))
                }
            </div>
            <p className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent font-semibold'>{waiterCardPreview?.stars}/5</p>
        </div>
    </div>
  )
}

export default WaiterCardPreviewModal