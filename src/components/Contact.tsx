import { Contact } from '@models/data.model'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LocationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    //  aplica estilos a todos los elementos que no sean  el último hijo dentro del contenedor al que se está aplicando la clase LocationContent
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px dashed var(--color-alt-black);
  }
`

const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2em;
  }
`

const LocationData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LocationHeader = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  color: var(--color-alt-black);
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  gap: 1em;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const LocationAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  font-weight: 600;
  margin: 1rem 0;
  gap: 1em;
  padding: 1em 2em;
  background-color: var(--color-alt-white);
  box-shadow: var(--light-box-shadow);
  border: 2px dashed var(--color-moss-green);
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const LocationGoogleFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: var(--light-box-shadow);
  height: 250px;
  @media (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  align-items: center;
  justify-content: center;
  font-size: 11pt;
  text-align: center;
  a {
    color: var(--color-moss-green);
    text-decoration: none;
    :visited {
      color: var(--color-moss-green);
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 14pt;
  }
`

const PhoneEmaiLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
`

const PhoneEmaiLContent = styled.div`
  display: inline-block;
  margin: 10px 0;
  font-size: 11pt;
  display: flex;
  @media (min-width: 768px) {
    font-size: 14pt;
  }
`

interface ContactProps {
  contact: Contact
}

const Locations = ({ contact }: ContactProps) => {
  return (
    <ContactWrapper>
      <LocationContent>
        <Location>
          <LocationData>
            <LocationHeader>Nos encontramos en:</LocationHeader>
            <LocationAddress>{contact.address}</LocationAddress>
          </LocationData>
          <LocationGoogleFrame
            src={contact.googleMaps}
            width="540"
            height="300"
            loading="lazy"
          />
        </Location>
        <Schedule>
          <b>Horario de atención al público:&nbsp;</b>
          {contact.schedule}
        </Schedule>
      </LocationContent>
      <PhoneEmaiLWrapper>
        <PhoneEmaiLContent>
          <b>Teléfono:&nbsp;</b>
          {contact.phone}
        </PhoneEmaiLContent>
        <PhoneEmaiLContent>
          <b>Correo electrónico:&nbsp;</b>
          {contact.email}
        </PhoneEmaiLContent>
      </PhoneEmaiLWrapper>
    </ContactWrapper>
  )
}

export default Locations
