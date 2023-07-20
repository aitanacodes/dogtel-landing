import styled from 'styled-components'

const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 1em;
  padding: 1em 2em;
  background-color: var(--color-moss-green-translucent);
  box-shadow: var(--light-box-shadow);
  border-top: var(--light-border);
  color: var(--color-alt-white);
  z-index: 20;
`

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

interface FooterProps {
  text: string
  linkedin?: string
  github?: string
}

const Footer = ({ text, linkedin, github }: FooterProps) => {
  return (
    <FooterWrapper>
      <span>{text}</span>
      {linkedin !== undefined && (
        <a href={linkedin} target="_blank" rel="noreferrer">
          <Icon src="/vector/linkedin.svg" />
        </a>
      )}
      {github !== undefined && (
        <a href={github} target="_blank" rel="noreferrer">
          <Icon src="/vector/github.svg" />
        </a>
      )}
    </FooterWrapper>
  )
}

export default Footer
