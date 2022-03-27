import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import wevis_logo from "assets/images/wevis_logo.svg";
import map_logo from "assets/images/map_logo.svg";
import stb_logo from "assets/images/stb_logo.svg";
import cu_thai_logo from "assets/images/cu_thai_logo.svg";
import { isMobile, isMobileOnly } from "react-device-detect";
import WvNavButton from '@wevisdemo/ui/components/nav-button';
import WvNavDropdown from '@wevisdemo/ui/components/nav-dropdown';
import WvNavDropdownItem from '@wevisdemo/ui/components/nav-dropdown-item';
import hamburger from 'assets/images/hamburger.svg'
import close from 'assets/images/close.svg'

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const dashboardData = [
    {
      name: "น้ำท่วมถนน",
      color: '#1570FF'
    },
    {
      name: "พื้นที่สีเขียว",
      color: '#00C853'
    },
    {
      name: "มลพิษในคลอง",
      color: '#D6AD6D'
    },
    {
      name: "ขยะมูลฝอย",
      color: '#DF3A6B'
    },
    {
      name: "ฝุ่นควันเกินมาตรฐาน",
      color: '#476A8B'
    },
  ]

  useEffect(() => {
    const span = document.querySelector('.wv_nav-dropdown .wv_nav-button span')
    if (router.pathname === '/dashboard/[title]') {
      if (span) span.style.textDecoration = 'underline'
    }
    if (span) span.style.whiteSpace = 'nowrap'
    setIsOpen(false)
  }, [router]);

  const selectMenu = (page) => {
    router.push(`/?slide=${page}`, undefined, { shallow: true });
    router.push('/', undefined, { shallow: true });
  };

  const selectDashboard = (name) => {
    router.push('/dashboard/' + name, undefined, { shallow: false });
  }



  const insideMenu = () => (
    <div className="relative z-10 flex flex-col items-center space-y-3 right md:flex-row md:space-y-0">
      <div className='w-full mx-2 md:w-max'>
        <WvNavButton onClick={() => selectMenu(1)} active={router.pathname === '/'}>สรุปงบประมาณกทม.</WvNavButton>
      </div>
      <div className='w-full mx-2 md:w-max'>
        <WvNavDropdown label="สำรวจแผนที่ตามประเด็น">
          {dashboardData.map((dashboard, index) =>
            < WvNavDropdownItem key={index}>
              <div className='flex items-center WvNavDropdownItem ' onClick={() => selectDashboard(dashboard.name)} >
                <div style={{ width: '15px', height: '15px', background: dashboard.color }} className='mr-2 rounded-full ' />
                {dashboard.name}
              </div>
            </WvNavDropdownItem>
          )}
        </WvNavDropdown>
      </div >
      <div className='flex items-center flex-1'>
        <div className="mr-4 md:hidden p3 lg:block whitespace-nowrap" >
          In collaboration with
        </div>

        <a
          href="http://www.kpi.ac.th/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 md:hidden lg:block"
        >
          <img src={stb_logo} alt={stb_logo} />
        </a>

        <a
          href="https://www.polsci.chula.ac.th/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-8 md:hidden lg:block"
        >
          <img src={cu_thai_logo} alt={cu_thai_logo} />
        </a>
      </div>
    </div >
  )



  return (
    <div id="header" className="relative ">
      <div style={{ height: "60px" }} className="sticky z-20 flex items-center justify-between px-3 shadow-xl bg-white-default lg:px-5 ">
        <div className="flex items-center left">
          <a
            href="https://wevis.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img
              width={isMobileOnly ? 75 : 110}
              src={wevis_logo}
            />
          </a>

          <div
            className="inset-x-0 flex items-center justify-center cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <img src={map_logo} alt={map_logo} />

            <h5 className="ml-2 d5">
              <span
                className="text-green-default"
                style={{ fontFamily: "KondolarThai" }}
              >
                OPEN
              </span>
              BANGKOK
            </h5>
          </div>
        </div>
        <div className=" md:hidden">
          {isOpen ? <img src={close} onClick={() => setIsOpen(false)} width={20} /> : <img src={hamburger} onClick={() => setIsOpen(true)} width={20} />}
        </div>
        {!isMobileOnly && insideMenu()}
      </div>
      {isOpen && <div className='absolute left-0 z-10 w-screen py-5 bg-white-default' >
        {isMobileOnly && insideMenu()}
      </div>}
    </div>
  );
}
