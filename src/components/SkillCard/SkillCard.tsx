import { assetUrl } from "../../utils/assetUrl";
import type { Skill } from "../../types";
import "./SkillCard.css";

export default function SkillCard({ title, image, alt }: Skill) {
  return (
    <div className="card-item">
      <h2>{title}</h2>
      <img src={assetUrl(image)} className="image card-image" alt={alt} />
    </div>
  );
}
