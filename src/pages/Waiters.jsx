import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { waiters } from '../data/db'
import WaiterCard from '../components/waiters/WaiterCard'
import WaiterCardPreviewModal from '../components/waiters/WaiterCardPreviewModal'

const Waiters = () => {
  return (
    <div className='h-screen flex flex-col'>
        <div className='z-10 sticky top-0 flex justify-center items-center bg-gradient-to-r from-[#8CD23C] to-[#417A00] rounded-bl-[25px] py-4 text-white text-xl font-bold'>
            <Link to='/' className='absolute right-4'>
                <IoCloseOutline size={30} />
            </Link>
            <p>&#8470; 19</p>
        </div>
        <div className='grow bg-[#F6F4F2]'>
            <p className='text-center text-xl py-4 px-2 font-bold'>Oficiantlar:</p>
            <div className="flex flex-wrap gap-4 gap-y-9 justify-between px-4">
              {
                waiters.map(waiter => (
                  <WaiterCard key={waiter.id} {...waiter} />
                ))
              }
            </div>
        </div>
        
        <WaiterCardPreviewModal />
    </div>
  )
}

export default Waiters