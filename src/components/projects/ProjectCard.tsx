import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Technology {
  name: string;
  color?: "default" | "secondary" | "destructive" | "outline";
}

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  technologies: Technology[];
  date?: string;
}

const ProjectCard = ({
  id = "1",
  title = "Project Title",
  description = "A brief description of the project and what it accomplishes. This gives users a quick overview of what to expect.",
  thumbnailUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = [
    { name: "React", color: "default" },
    { name: "TypeScript", color: "secondary" },
    { name: "Tailwind", color: "outline" },
  ],
  date = "April 2023",
}: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg bg-card">
      <div className="aspect-[0.70] w-full h-100 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={`${title} thumbnail`}
          className="aspect-square w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {date && (
            <span className="text-xs text-muted-foreground">{date}</span>
          )}
        </div>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant={tech.color || "default"}
              className="text-xs"
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button asChild variant="ghost" className="ml-auto group">
          <Link to={`/project/${id}`}>
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
