import Section from "../../components/Section/Section";
import { assetUrl } from "../../utils/assetUrl";
// @ts-expect-error CSS side-effect imports are handled by the bundler.
import "./EducationSection.css";

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="education-content">
        <h2 className="school-name">Universitas Tarumanagara (2024 &ndash; present)</h2>
        <p className="school-activity-info">
          Throughout my first two years of undergraduate journey, I've managed to maintain a steady
          level of GPA. At my fourth semester, I became an assistant lecturer responsible for
          assisting students in understanding core computer science and web development subjects,
          such as programming, data structures, and backend development using Express.js &amp;
          Laravel.
        </p>
        <div className="image-container school-logo">
          <img src={assetUrl("images/Logo-Untar-new.png")} alt="" className="image" />
        </div>
      </div>
    </Section>
  );
}
