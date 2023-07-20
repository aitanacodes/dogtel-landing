import styled from 'styled-components'

const Wrapper = styled.section<{ firstChild: boolean }>`
  z-index: 10;
  margin-top: ${({ firstChild }) => (firstChild ? '100vh' : '0')};
  margin-bottom: 100px;
  backdrop-filter: blur(10px);
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 90ch;
    margin-left: auto;
    margin-right: auto;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--color-moss-green-translucent);
  color: var(--color-alt-white);
  top: 66px;
  border: var(--light-border);
  margin-bottom: 10px;
  box-shadow: var(--light-box-shadow);

  & span {
    position: relative;
    margin: 18px 0;
    font-family: 'Rancho', cursive;
    font-size: 9vw;
    font-weight: 600;
    z-index: 20;
    text-shadow: var(--light-text-shadow);
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  & img {
    background-color: #fff;
    border-radius: 50%;
    padding: 0.1em;
    position: relative;
    width: 9vw;
    filter: drop-shadow(var(--light-text-shadow));
    @media (min-width: 768px) {
      width: 4rem;
    }
  }

  /* Selecciona los elementos hijos que tengan una posición impar dentro de su padre */
  &:nth-child(odd) {
    background-color: var(--color-moss-green-translucent);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2em;
  border-radius: 10px;
  background-color: var(--color-isabelline-translucent);
  box-shadow: var(--light-box-shadow);
`

export interface SectionProps {
  title: string
  titleImg: string
  firstChild?: boolean
  rowReverse?: boolean
  anchorName?: string
  anchorId?: string
  children: React.ReactNode
}

const Section = ({
  title,
  titleImg,
  firstChild = false,
  children,
  anchorId,
}: SectionProps) => {
  return (
    <Wrapper firstChild={firstChild}>
      {anchorId !== undefined && <a id={anchorId} />}
      <Title className="section-title">
        <img src={titleImg} alt={title} />
        <span>{title}</span>
      </Title>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Section
