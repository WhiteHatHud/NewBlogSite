import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: ProjectImage[];
  technologies: string[];
  implementation: string;
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  category: string;
}

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in a real app, this would be fetched based on the ID
  const project: Project = {
    id: id || "1",
    title: "Machine Learning Image Classifier",
    description: "A neural network-based image classification system",
    longDescription:
      "This project implements a convolutional neural network (CNN) for image classification. It was built using TensorFlow and Keras, and trained on the CIFAR-10 dataset. The model achieves 85% accuracy on the test set and can classify images into 10 different categories.",
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
        alt: "Project screenshot 1",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        alt: "Project screenshot 2",
      },
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        alt: "Project screenshot 3",
      },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    implementation:
      "The implementation uses a CNN architecture with 3 convolutional layers followed by max pooling, and 2 fully connected layers. Data augmentation techniques were applied to improve model generalization. The model was trained for 50 epochs using the Adam optimizer.",
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
    date: "2023-05-15",
    category: "Machine Learning",
  };

  // Mock data for next/previous projects
  const nextProject = { id: "2", title: "Web Scraping Tool" };
  const prevProject = { id: "3", title: "Database Management System" };

  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {project.date}
              </span>
              <Tag className="h-4 w-4 text-muted-foreground ml-2" />
              <Badge variant="outline">{project.category}</Badge>
            </div>
          </div>

          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-0 overflow-hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="w-full h-[400px] object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="implementation">Implementation</TabsTrigger>
                <TabsTrigger value="technologies">Technologies</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="implementation" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      {project.implementation}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="technologies" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Project Navigation</h3>
                <div className="space-y-4">
                  <Link
                    to={`/project/${prevProject.id}`}
                    className="flex items-center justify-between p-3 rounded-md border hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      <span>Previous Project</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {prevProject.title}
                    </span>
                  </Link>

                  <Link
                    to={`/project/${nextProject.id}`}
                    className="flex items-center justify-between p-3 rounded-md border hover:bg-accent transition-colors"
                  >
                    <span className="text-sm text-muted-foreground">
                      {nextProject.title}
                    </span>
                    <div className="flex items-center">
                      <span>Next Project</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </div>

                <Separator className="my-6" />

                <h3 className="text-lg font-medium mb-4">
                  Related Information
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span>{project.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technologies:</span>
                    <span>{project.technologies.length}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" asChild>
                  <Link to="/">Back to All Projects</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
