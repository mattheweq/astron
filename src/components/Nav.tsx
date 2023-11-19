import {motion} from 'framer-motion'
import { useState } from 'react';
import { useMediaQuery } from '../utils/useMediaQuery';
import NavItems from './NavItems'

interface Props {
	txtcol?: string;
}

export default function Nav(props: Props) {
  const {txtcol} = props;
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery("(min-width: 1280px)")
  
  return (
    
<nav className="container mx-auto px-4">
    <div className={`fixed right-2 top-0 text-center flex justify-end px-0 my-3 mx-[0px] ${txtcol}`}>
    {matches ? (
      <div>
        <NavItems toggled={toggled} itemClasses="flex gap-2 justify-center" />
      </div>
    ) : (
      <div className="relative z-10 h-fit space-y-1.5 my-3 cursor-pointer" onClick={() => setToggled((prevToggle:boolean) => !prevToggle)}>
        <motion.span 
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className="block h-0.5 w-8 bg-white">
        </motion.span>
        <motion.span 
          animate={{ visibility: toggled ? 'hidden' : 'visible'}} className="block h-0.5 w-6 bg-white">
        </motion.span>
        <motion.span 
          animate={{ rotateZ: toggled ? -50 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 8 }} className="block h-0.5 w-4 bg-white">
        </motion.span>
      </div>
    )}
    
    {toggled && !matches && (
      <motion.div 
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        className="bg-blak fixed left-0 bottom-0 z-1 h-screen w-full flex items-center justify-center"
      >
        <NavItems toggled={toggled} itemClasses="flex flex-col gap-8"/>
      </motion.div>
    )}
    </div>
</nav>
)
}

