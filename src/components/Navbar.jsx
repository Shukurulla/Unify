import React from 'react'

const Navbar = () => {
  return (
    <nav className='z-10 sticky top-0 flex items-center justify-between bg-[#F6F4F2] p-4 font-bold rounded-br-3xl'>
        <div className='flex items-center gap-2'>
            <img src="./unify-logo.svg" alt="logo" className='w-8' />
            <span className='uppercase'>unify</span>
        </div>
        <ul className='flex items-center gap-2'>
            <li className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white rounded px-2'>
                <a href="tel:+998 90 702 53 29">+998 90 702 53 29</a>
            </li>
            <li>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1136 2.16667C15.3324 2.16992 15.951 2.17642 16.4851 2.19158L16.6952 2.19917C16.9379 2.20783 17.1773 2.21867 17.4666 2.23167C18.6192 2.28583 19.4057 2.46783 20.0958 2.73542C20.8108 3.01058 21.4131 3.38325 22.0155 3.9845C22.5663 4.52605 22.9926 5.18114 23.2646 5.90417C23.5321 6.59425 23.7141 7.38075 23.7683 8.5345C23.7813 8.82267 23.7921 9.06208 23.8008 9.30583L23.8073 9.516C23.8236 10.049 23.8301 10.6676 23.8322 11.8863L23.8333 12.6945V14.1137C23.836 14.9039 23.8277 15.694 23.8084 16.484L23.8019 16.6942C23.7932 16.9379 23.7824 17.1773 23.7694 17.4655C23.7152 18.6192 23.5311 19.4047 23.2646 20.0958C22.9934 20.8193 22.567 21.4745 22.0155 22.0155C21.4738 22.5662 20.8187 22.9924 20.0958 23.2646C19.4057 23.5322 18.6192 23.7142 17.4666 23.7683C17.2095 23.7804 16.9524 23.7913 16.6952 23.8008L16.4851 23.8073C15.951 23.8225 15.3324 23.8301 14.1136 23.8322L13.3055 23.8333H11.8874C11.0968 23.8361 10.3063 23.8278 9.51597 23.8084L9.30581 23.8019C9.04864 23.7922 8.79152 23.781 8.53447 23.7683C7.38181 23.7142 6.59531 23.5322 5.90414 23.2646C5.1812 22.9931 4.52638 22.5667 3.98556 22.0155C3.43419 21.4741 3.00755 20.819 2.73539 20.0958C2.46781 19.4057 2.28581 18.6192 2.23164 17.4655C2.21957 17.2084 2.20874 16.9513 2.19914 16.6942L2.19372 16.484C2.17376 15.694 2.16473 14.9039 2.16664 14.1137V11.8863C2.16362 11.0961 2.17156 10.306 2.19047 9.516L2.19806 9.30583C2.20672 9.06208 2.21756 8.82267 2.23056 8.5345C2.28472 7.38075 2.46672 6.59533 2.73431 5.90417C3.00635 5.1804 3.43384 4.52511 3.98664 3.9845C4.52732 3.4336 5.18171 3.00732 5.90414 2.73542C6.59531 2.46783 7.38072 2.28583 8.53447 2.23167C8.82264 2.21867 9.06314 2.20783 9.30581 2.19917L9.51597 2.19267C10.3059 2.17342 11.0961 2.16511 11.8863 2.16775L14.1136 2.16667ZM13 7.58333C11.5634 7.58333 10.1856 8.15402 9.16981 9.16984C8.15399 10.1857 7.58331 11.5634 7.58331 13C7.58331 14.4366 8.15399 15.8143 9.16981 16.8302C10.1856 17.846 11.5634 18.4167 13 18.4167C14.4366 18.4167 15.8143 17.846 16.8301 16.8302C17.846 15.8143 18.4166 14.4366 18.4166 13C18.4166 11.5634 17.846 10.1857 16.8301 9.16984C15.8143 8.15402 14.4366 7.58333 13 7.58333ZM13 9.75C13.4268 9.74993 13.8494 9.83392 14.2437 9.99718C14.6381 10.1604 14.9964 10.3998 15.2982 10.7015C15.6001 11.0033 15.8395 11.3615 16.0029 11.7558C16.1663 12.1501 16.2504 12.5727 16.2505 12.9995C16.2506 13.4263 16.1666 13.8489 16.0033 14.2432C15.8401 14.6376 15.6007 14.9959 15.299 15.2977C14.9973 15.5996 14.639 15.839 14.2447 16.0024C13.8505 16.1658 13.4279 16.2499 13.0011 16.25C12.1391 16.25 11.3125 15.9076 10.703 15.2981C10.0935 14.6886 9.75106 13.862 9.75106 13C9.75106 12.138 10.0935 11.3114 10.703 10.7019C11.3125 10.0924 12.1391 9.75 13.0011 9.75M18.6886 5.95833C18.3294 5.95833 17.985 6.101 17.731 6.35496C17.4771 6.60891 17.3344 6.95335 17.3344 7.3125C17.3344 7.67165 17.4771 8.01608 17.731 8.27004C17.985 8.52399 18.3294 8.66667 18.6886 8.66667C19.0477 8.66667 19.3921 8.52399 19.6461 8.27004C19.9001 8.01608 20.0427 7.67165 20.0427 7.3125C20.0427 6.95335 19.9001 6.60891 19.6461 6.35496C19.3921 6.101 19.0477 5.95833 18.6886 5.95833Z" fill="url(#paint0_linear_141_141)"/>
                    <defs>
                    <linearGradient id="paint0_linear_141_141" x1="2.16602" y1="13.0003" x2="23.8338" y2="13.0003" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8CD23C"/>
                    <stop offset="1" stopColor="#417A00"/>
                    </linearGradient>
                    </defs>
                </svg>
            </li>
            <li>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2.16667C7.01996 2.16667 2.16663 7.02 2.16663 13C2.16663 18.98 7.01996 23.8333 13 23.8333C18.98 23.8333 23.8333 18.98 23.8333 13C23.8333 7.02 18.98 2.16667 13 2.16667ZM18.0266 9.53333C17.8641 11.245 17.16 15.405 16.8025 17.3225C16.6508 18.135 16.3475 18.4058 16.0658 18.4383C15.4375 18.4925 14.9608 18.0267 14.3541 17.6258C13.4008 16.9975 12.8591 16.6075 11.9383 16.0008C10.8658 15.2967 11.5591 14.9067 12.1766 14.2783C12.3391 14.1158 15.1125 11.5917 15.1666 11.3642C15.1741 11.3297 15.1731 11.2939 15.1637 11.26C15.1543 11.226 15.1367 11.1948 15.1125 11.1692C15.0475 11.115 14.9608 11.1367 14.885 11.1475C14.7875 11.1692 13.2708 12.1767 10.3133 14.17C9.87996 14.4625 9.48996 14.6142 9.14329 14.6033C8.75329 14.5925 8.01663 14.3867 7.46413 14.2025C6.78163 13.9858 6.25079 13.8667 6.29413 13.4875C6.31579 13.2925 6.58663 13.0975 7.09579 12.8917C10.2591 11.5158 12.3608 10.6058 13.4116 10.1725C16.4233 8.91583 17.0408 8.69917 17.4525 8.69917C17.5391 8.69917 17.745 8.72083 17.875 8.82916C17.9833 8.91583 18.0158 9.035 18.0266 9.12167C18.0158 9.18667 18.0375 9.38167 18.0266 9.53333Z" fill="url(#paint0_linear_141_143)"/>
                    <defs>
                    <linearGradient id="paint0_linear_141_143" x1="2.16663" y1="13" x2="23.8333" y2="13" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8CD23C"/>
                    <stop offset="1" stopColor="#417A00"/>
                    </linearGradient>
                    </defs>
                </svg>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar