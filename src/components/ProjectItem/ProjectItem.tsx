import { Fragment } from 'react';
import type { Project } from '../../types';
import { assetUrl } from '../../utils/assetUrl';
import './ProjectItem.css';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

interface ProjectItemProps {
  project: Project;
  index: number;
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const {
    title,
    description,
    contributions,
    techstacks,
    imagePaths,
    sourceCodeLink,
  } = project;

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="project-list">
      <div>
        <h3>{title}</h3>
      </div>
      <div className="project-list-content">
        <div className="project-content-text">
          <div>
            <p>{description}</p>
            <p>My Contributions:</p>
            <ul>
              {contributions.map((item, i) => (
                <li key={i}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="techstack-tag-container">
            {techstacks.map((tech) => (
              <Fragment key={tech}>
                <span className="techstack-tag">#{tech}</span>{' '}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="image-container">
          {imagePaths.length > 0 && (
            <Carousel
              setApi={setApi}
              className="project-image-carousel"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent className="project-image-track">
                {imagePaths.map((path) => (
                  <CarouselItem key={path} className="project-image-slide">
                    <img
                      src={assetUrl(path)}
                      alt={`${title}`}
                      className="project-carousel-image"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
              <div className="py-2 text-center text-sm text-muted-foreground">
                <p></p>
                Slide {current} of {count}
              </div>
            </Carousel>
          )}
          {sourceCodeLink && (
            <span className="project-link">
              <a href={sourceCodeLink} target="_blank" rel="noreferrer">
                Source code
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
