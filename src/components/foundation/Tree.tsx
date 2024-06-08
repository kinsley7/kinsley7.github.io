import React, { useRef, useState, useEffect, ReactNode } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { IComponent } from '../IComponent'
/*
interface TreeProps extends IComponent{
	defaultOpen : boolean
	name : string
  children : TreeChild[]
}

type TreeChild = {
  name: ReactNode
  type : Types
  icon : ReactNode
}

type Types = {
  'pdf' : 'pdf icon',
  'text' : 'text icon',
  'email' : 'email icon'
}


function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}




//https://codesandbox.io/p/sandbox/tree-list-nlzui?file=%2Fsrc%2FApp.tsx%3A40%2C12 
//oh jeez........
const Tree = 
//on click?
React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
    name: string | JSX.Element
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [ref, { height: viewHeight }] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  })

  //how to get it to react with scroll.
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      {child.map((child) => (
        <div
          style={{
            fontWeight: activeSection === child.name ? 'bold' : 'semibold',
          }}
        >
          {child.name}
        </div>
      ))}
    </nav>
  );



  // @ts-ignore
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame> //card
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style}>{name}</Title>
      <Content //children
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  )
})
}

export default Tree
*/