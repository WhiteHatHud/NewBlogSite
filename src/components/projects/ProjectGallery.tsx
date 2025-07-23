import React, { useState } from "react";
import { Search, Grid, List, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProjectCard from "./ProjectCard";
import chocEggsImg        from "@/assets/images/2ChocEggs.png";
import baksoInstantImg     from "@/assets/images/13BaksoInstant.png";
import supKambingImg       from "@/assets/images/14SupKambing.png";
import koreanChickenImg    from "@/assets/images/16KoreanChicken.png";
import turkishPideImg      from "@/assets/images/17TurkishPide.png";
import thaiGreenCurryImg   from "@/assets/images/18ThaiGreenCurry.png";


interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  category: string;
}

interface ProjectGalleryProps {
  projects?: Project[];
}

const ProjectGallery = ({ projects = [] }: ProjectGalleryProps) => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Default projects if none are provided
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Chocolate Eggs",
    description: "Rich and creamy chocolate egg dessert with a melt-in-your-mouth center.",
    thumbnail: chocEggsImg,
    technologies: [],
    category: "Dessert",
  },
  {
    id: "2",
    title: "Bakso Instant",
    description: "Quick Indonesian meatball soup made with instant seasoning.",
    thumbnail: baksoInstantImg,
    technologies: [],
    category: "Soup",
  },
  {
    id: "3",
    title: "Sup Kambing",
    description: "Hearty mutton soup slow-cooked with spices for tender meat and deep flavor.",
    thumbnail: supKambingImg,
    technologies: [],
    category: "Soup",
  },
  {
    id: "4",
    title: "Korean Fried Chicken",
    description: "Crispy Korean-style fried chicken glazed in a spicy-sweet sauce.",
    thumbnail: koreanChickenImg,
    technologies: [],
    category: "Main Course",
  },
  {
    id: "5",
    title: "Turkish Pide",
    description: "Flatbread topped with seasoned lamb and cheese, baked to golden perfection.",
    thumbnail: turkishPideImg,
    technologies: [],
    category: "Bread",
  },
  {
    id: "6",
    title: "Thai Green Curry",
    description: "Creamy Thai curry simmered with coconut milk, green chilies, and vegetables.",
    thumbnail: thaiGreenCurryImg,
    technologies: [],
    category: "Curry",
  },
];


  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Get unique categories for filter dropdown
  const categories = [
    "all",
    ...new Set(displayProjects.map((project) => project.category)),
  ];

  // Filter projects based on search query and selected category
  const filteredProjects = displayProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My humble food</h1>
        <p className="text-muted-foreground">
          Browse through to look at the food I made and ate. You can filter by category, search for specific foods, and switch between grid and list views.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <SelectValue placeholder="Filter by category" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Tabs
            defaultValue="grid"
            className="w-auto"
            onValueChange={(value) => setViewType(value as "grid" | "list")}
          >
            <TabsList className="grid w-[100px] grid-cols-2">
              <TabsTrigger
                value="grid"
                className="flex items-center justify-center"
              >
                <Grid className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="flex items-center justify-center"
              >
                <List className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-xl text-muted-foreground">No projects found</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div
          className={
            viewType === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              thumbnailUrl={project.thumbnail}
              technologies={project.technologies}
              viewType={viewType}
              category={project.category}
            />
          ))}
        </div>
      )}

      {filteredProjects.length > 0 && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {displayProjects.length} projects
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
