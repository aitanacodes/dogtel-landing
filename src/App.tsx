import Article from '@components/Article'
import Footer from '@components/Footer'
import Greeting from '@components/Greeting'
import Header from '@components/Header'
import Section from '@components/Section'
import data from '@data/db.json'
import { type Anchor, type SiteData } from '@models/data.model'
import Contact from '@components/Contact'

function App() {
  const siteData: SiteData = data

  const { appTitle, sections, footer, subtitle } = siteData

  const anchors = sections
    .filter((s) => s.anchor !== undefined)
    .map((s) => s.anchor as Anchor)

  return (
    <>
      <Greeting title={appTitle} subtitle={subtitle}></Greeting>
      <Header title={appTitle} anchors={anchors}></Header>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          titleImg={section.titleImg}
          anchorId={section.anchor?.id}
          firstChild={index === 0}
          rowReverse={index % 2 === 0}
        >
          {section.article !== undefined && (
            <Article
              paragraphs={section.article.paragraphs}
              bodyImgs={section.article.bodyImgs}
              rowReverse={index % 2 === 0}
            />
          )}
          {section.contact !== undefined && (
            <Contact contact={section.contact} />
          )}
        </Section>
      ))}
      <Footer
        text={footer.text}
        github={footer.github}
        linkedin={footer.linkedin}
      />
    </>
  )
}

export default App
