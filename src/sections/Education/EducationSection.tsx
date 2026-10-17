import Section from '../../components/Section/Section';
import { assetUrl } from '../../utils/assetUrl';
import './EducationSection.css';
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="image-container">
        <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="education-content">
        <h2 className="school-name">
          Universitas Tarumanagara (2024 &ndash; present)
        </h2>
        <p className="school-activity-info">
          Throughout my first two years of undergraduate journey, I've managed
          to maintain a steady level of GPA. At my fourth semester, I became an
          assistant lecturer responsible for assisting students in understanding
          core computer science and web development subjects, such as
          programming, data structures, and backend development using Express.js
          &amp; Laravel.
        </p>
        <div className="image-container school-logo">
          <img
            src={assetUrl('images/Logo-Untar-new.png')}
            alt=""
            className="image"
          />
        </div>
      </div>
    </Section>
  );
}
