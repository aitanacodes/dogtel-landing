import { useEffect, useState } from 'react'
import styled from 'styled-components'

const ArticleWrapper = styled.div<{ rowReverse: boolean }>`
  display: flex;
  border-top: none;
  overflow: hidden;
  align-items: center;
  flex-direction: column; // Eje principal como columna
  margin: 10px;
  gap: 2em;
  color: var(--color-alt-black);

  @media (min-width: 768px) {
    flex-direction: ${({ rowReverse }) => (rowReverse ? 'row-reverse' : 'row')};
    /* 
    Si 'rowReverse' es true, cambia la dirección del eje principal a 'row-reverse', 
    disponiendo los elementos hijos en una fila, pero en orden inverso.
    Si 'rowReverse' es false o no se proporciona, la dirección del eje principal se establecerá como 'row',
    lo que dispone los elementos hijos en una fila en su orden original.
    */
  }
`

const TextContainer = styled.div<{ hasImages: boolean }>`
  line-height: 1.5;
  text-align: justify;
  /* Si 'hasImages' es falso (o no se proporciona), se aplica la siguiente regla: 'width: 100%;'
  Si 'hasImages' es verdadero, la regla no se aplicará y el ancho del contenedor se calculará automáticamente */
  ${({ hasImages }) => !hasImages && 'width: 100%;'}
`

const ImageContainer = styled.div`
  position: relative;
  margin: 10px;
  width: calc(100% - 20px);
  height: 100%;
  box-shadow: var(--light-box-shadow);
  border-radius: 10px;

  @media (min-width: 768px) {
    min-width: 35%;
    margin-top: 0;
  }
  & img {
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.5s ease-in-out; // Transición de opacidad 1.5s ease-in-out (aceleración-desaceleración)
    border-radius: 10px;

    &.active {
      opacity: 1;
    }
  }
`

interface ArticleProps {
  paragraphs: string[] // Textos de los artículos
  bodyImgs: string[] // Imágenes de los artículos
  rowReverse?: boolean // Opcional: Si se proporciona, cambiará el orden de los elementos en el artículo.
}
const Article = ({
  paragraphs,
  bodyImgs,
  rowReverse = false,
}: ArticleProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  // Cada vez que 'currentImgIndex' cambia, se ejecuta este efecto.
  useEffect(() => {
    // Crea un intervalo que cambia el valor de 'currentImgIndex' cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImgIndex((currentImgIndex + 1) % bodyImgs.length)
    }, 5000)
    // Devuelve una función de limpieza que detiene el intervalo cuando el componente se desmonta.
    return () => {
      clearInterval(interval)
    }
  }, [currentImgIndex])

  return (
    <ArticleWrapper rowReverse={rowReverse}>
      <TextContainer hasImages={bodyImgs.length > 0}>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </TextContainer>
      {bodyImgs.length > 0 && (
        <ImageContainer>
          <img src={`/img/placeholder.webp`} alt="placeholder" />
          {bodyImgs.map((img, index) => (
            <img
              key={index}
              src={`/img/${img}.webp`}
              alt={img}
              style={{ position: 'absolute', top: 0, left: 0 }}
              className={index === currentImgIndex ? 'active' : ''}
            />
          ))}
        </ImageContainer>
      )}
    </ArticleWrapper>
  )
}

export default Article
