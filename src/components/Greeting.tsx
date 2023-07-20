import { useState } from 'react'
import useScroll from 'src/hooks/useScroll'
import styled from 'styled-components'

const Wrapper = styled.div.attrs<{ grayscale: number }>((props) => ({
  style: {
    filter: `grayscale(${props.grayscale}%)`, // Atributo grayscale como prop para para aplicar un filtro de escala de grises.
  },
}))<{ grayscale: number }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  padding: 1.5rem;
  gap: 1rem;
  font-family: 'Rancho', cursive;
  animation: fade-in 1s ease-in-out;
`

const MainTitle = styled.span`
  position: relative;
  font-size: 4.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-alt-white);
  text-shadow: var(--light-text-shadow);
  z-index: 10;
  @media (min-width: 768px) {
    font-size: 9rem;
  }
`

const Subtitle = styled.span`
  position: relative;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-alt-white);
  text-shadow: var(--light-text-shadow);
  z-index: 10;
  @media (min-width: 768px) {
    font-size: 6rem;
  }
`

const DownArrow = styled.img`
  width: 2rem;
  position: relative;
  bottom: 1rem;
  top: 10%;
  z-index: 20;
  transform: translateX(-50%);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  animation: floating 1s ease-in-out infinite;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 5rem;
  }
`

interface GreetingProps {
  title: string
  subtitle: string
}
const Greeting = ({ title, subtitle }: GreetingProps) => {
  const [opacity, setOpacity] = useState(1)
  const [grayscale, setGrayscale] = useState(0)

  // Efectos para el fondo, el título y el subtítulo, usamos el hook useScroll

  const handleScroll = () => {
    // Calculamos el valor de opacidad basado en el desplazamiento vertical de la ventana.
    // Al restar este valor de 1, obtendremos un valor de opacidad decreciente mientras se hace scroll hacia abajo.
    const opacity = 1 - window.scrollY / 200
    // Calculamos el valor de escala de grises basado en el desplazamiento vertical de la ventana.
    // Esto dará como resultado un valor creciente de escala de grises mientras se hace scroll hacia abajo.
    const grayscale = window.scrollY / 10
    setOpacity(opacity)
    setGrayscale(grayscale)
  }

  useScroll(handleScroll)

  const handleScrollToFirstSection = () => {
    // Obtenemos el elemento de la primera sección en el documento
    const { top } = document
      .getElementsByTagName('section')[0]
      .getBoundingClientRect() // devuelve el tamaño y la posición de un elemento relativo a la ventana gráfica.
    window.scrollTo({ top: top - 150, behavior: 'smooth' }) // Scroll suave
  }

  return (
    <Wrapper grayscale={grayscale}>
      <MainTitle style={{ opacity }}>{title}</MainTitle>
      <Subtitle style={{ opacity }}>{subtitle}</Subtitle>
      <DownArrow
        src="/vector/down-arrow.svg"
        onClick={handleScrollToFirstSection}
        style={{ opacity }}
      />
    </Wrapper>
  )
}

export default Greeting
