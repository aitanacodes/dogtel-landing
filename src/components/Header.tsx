import { type Anchor } from '@models/data.model'
import { useState } from 'react'
import useScroll from 'src/hooks/useScroll'
import styled from 'styled-components'

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-moss-green-translucent);
  backdrop-filter: blur(10px);
  color: var(--color-alt-white);
  padding: 1rem;
  box-shadow: var(--light-box-shadow);
  display: flex;
  justify-content: space-between;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  border-bottom: var(--light-border);
  z-index: 100;
  &.active {
    transform: translateY(0);
    opacity: 1;
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Rancho';
  display: flex;
  align-items: center;
  gap: 1rem;
  text-shadow: var(--light-text-shadow);
  img {
    width: 2rem;
    filter: drop-shadow(var(--light-text-shadow));
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
    @media (min-width: 768px) {
      width: 3rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--color-alt-white);
  font-size: 1.5rem;
  cursor: pointer;
  img {
    width: 2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

interface MenuProps {
  open: boolean
}

const Menu = styled.ul<MenuProps>`
  position: absolute;
  color: var(--color-alt-white);
  background-color: var(--color-moss-green);
  box-shadow: var(--light-box-shadow);
  top: 150%;
  right: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  border-bottom: var(--light-border);
  border-top: var(--light-border);
  border-left: var(--light-border);
  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    transform: translateX(0);
    box-shadow: none;
    background-color: transparent;
    backdrop-filter: none;
    transition: none;
    border: none;
  }
  li {
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-shadow: var(--light-text-shadow);
    cursor: pointer;
    @media (min-width: 768px) {
      padding: 0 0.75rem;
    }
  }
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`

interface Props {
  title: string
  anchors: Anchor[]
}

const Header = ({ title, anchors }: Props) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  const handleScroll = () => {
    setActive(window.scrollY > 200)
    if (open && window.scrollY > 200) setOpen(false)
  }

  // Función que realizar un desplazamiento suave al `anchor`. Calcula la posición del
  // elemento relativa a la ventana y luego realiza el desplazamiento teniendo en cuenta el desplazamiento actual.

  const handleScrollToAnchor = (anchor: Anchor) => {
    const { top } = document
      .getElementById(anchor.id)
      ?.getBoundingClientRect() ?? { top: 0 }

    window.scrollTo({
      top: top + window.scrollY - 125,
      behavior: 'smooth',
    })
  }

  const filteredAnchors = anchors.filter((anchor) => !anchor.hidden)

  useScroll(handleScroll)

  return (
    <Wrapper className={`${active ? 'active' : ''}`}>
      <Title>
        {title}
        <img src="/vector/paw.svg" alt="rings" />
      </Title>
      <MenuButton
        onClick={() => {
          setOpen(!open)
        }}
      >
        <img src="/vector/burger.svg" alt="menu" />
      </MenuButton>
      <Menu open={open}>
        {filteredAnchors.map((anchor) => (
          <MenuItem
            key={anchor.id}
            onClick={() => {
              handleScrollToAnchor(anchor)
            }}
          >
            {anchor.name}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  )
}

export default Header
