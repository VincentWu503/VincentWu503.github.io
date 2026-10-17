import Section from '../../components/Section/Section';
import PillButton from '../../components/PillButton/PillButton';
import { assetUrl } from '../../utils/assetUrl';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <Section id="about">
      <div id="about-container">
        <div id="about-contents">
          <div>
            <h1>Hello There!</h1>
          </div>
          <div>
            <p>
              My name is Vincent. I'm a fifth semester Informatics Engineering
              undergraduate student at Universitas Tarumanagara who likes to
              explore new things. My current field of interests in Information
              Technology are Software Engineering and Data Science. Check out
              this portfolio source code{' '}
              <a
                href="https://github.com/VincentWu503/portfolio-web"
                className="underlined-link"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div>
            <PillButton
              onClick={() => window.open(assetUrl('cv/535240039_CV.pdf'))}
            >
              Download CV
            </PillButton>
          </div>
        </div>
        <div id="pas-foto-container">
          <img
            src={assetUrl('images/pas_foto.jpg')}
            alt="Pas Foto Saya"
            id="pas-foto"
          />
        </div>
      </div>
    </Section>
  );
}
