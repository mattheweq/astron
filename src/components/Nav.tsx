import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import NavItems from './NavItems'

interface Props {
	txtcol?: string;
}

export default function Nav(props: Props) {
  const {txtcol} = props;
  const [toggled, setToggled] = useState(false)
  const [isChartsPage, setisChartsPage] = useState(false)
  const [matches, setMatches] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled)
  }

  useEffect(() => {
    // Use the window.matchMedia API to get the initial matches value
    const initialMatches = window.matchMedia("(min-width: 1280px)").matches

    // Update the state with the initial value
    setMatches(initialMatches)

    // Add a listener to update the state when the window is resized
    const mediaQuery = window.matchMedia("(min-width: 1280px)")
    const handleResize = () => setMatches(mediaQuery.matches)

    mediaQuery.addEventListener('change',handleResize);

    // Clean up the listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  useEffect(() => {
    const { pathname } = window.location
    const onChartsPage = pathname.startsWith('/astron/charts/')
    onChartsPage && setisChartsPage(true)
  }, [])

return (    
<nav>

    <div className={`${!matches ? 'text-white' : txtcol} slideRight`}>
    {matches && <div>
        <NavItems toggled={toggled} itemClasses="relative mt-2 flex gap-2 justify-center" />
      </div>
    }    
    </div>

    {/* BURGER ICON */}
    <div className={`fixed right-2 top-0 text-center flex justify-end px-0 my-3 mx-[0px] ${!matches ? 'text-white' : txtcol}`}>
    
    {!matches && (
      <a href="#" onClick={handleToggle}>
      <div className="slideRight relative z-10 h-fit space-y-1.5 my-0 cursor-pointer">
        <motion.span 
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className={`block h-0.5 w-8 ${!isChartsPage ? 'bg-white' : 'bg-black'}`}>
        </motion.span>
        <motion.span 
          animate={{ visibility: toggled ? 'hidden' : 'visible'}} className={`block h-0.5 w-8 ${!isChartsPage ? 'bg-white' : 'bg-black'}`}>
        </motion.span>
        <motion.span 
          animate={{ rotateZ: toggled ? -50 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 8 }} className={`block h-0.5 w-8 ${!isChartsPage ? 'bg-white' : 'bg-black'}`}>
        </motion.span>
      </div>
      </a>
    )}
    
    {/* BURGER MENU/OVERLAY */}
    {toggled && !matches && (
      <motion.div 
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 525 }}
        className="bg-blak fixed left-0 bottom-0 z-1 h-screen w-full flex items-center justify-center"
      >
        <NavItems toggled={toggled} itemClasses="flex flex-col gap-8"/>
      </motion.div>
    )}
    </div>

</nav>
)
}

