import React, {useRef} from 'react'
import { easeInOut, motion, useInView } from 'framer-motion';

type motionProps = {
    from: 'bottom' | 'top' | 'right' | 'left' | null | undefined,
    children: React.ReactNode,
    className?: string
}

function MotionContainer({
    from,
    children,
    className
}: Readonly<motionProps>) {

    const  divRef = useRef<HTMLDivElement>(null);
    const isInview = useInView(divRef);

  return (
    <motion.div ref={divRef}
        initial={from === 'bottom' ? {y: 20, opacity: 0} : from === 'top'? {y: -20, opacity: 0} : from === 'right' ? {x: 20, opacity: 0} : from === 'left'? {x: -20, opacity: 0} : {}}
        animate={from === 'bottom' ? {y: isInview? 0 : 20, opacity: isInview? 1 : 0} : from === 'top' ? {y: isInview? 0 : -20, opacity: isInview? 1 : 0} : from === 'right' ? {x: isInview? 0 : 20, opacity: isInview? 1 : 0} : from === 'left' ? {x: isInview? 0 : -20, opacity: isInview? 1 : 0} : {}}
        transition={{ duration: 1, ease: easeInOut }}
        className={className}
    >
        {children}
    </motion.div>
  )
}

export default MotionContainer