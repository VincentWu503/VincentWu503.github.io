// Section must be imported before SkillCard so its CSS loads first (see SkillCard.css)
import Section from "../../components/Section/Section";
import SkillCard from "../../components/SkillCard/SkillCard";
import { skills } from "../../data/skills";
// @ts-expect-error CSS side-effect imports are handled by the bundler.
import "./SkillsSection.css";

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <p>Here are techstacks that I've learned or used throughout my undergraduate journey.</p>
      <div className="card-container">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </Section>
  );
}
