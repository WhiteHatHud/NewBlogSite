import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Grid3X3, List, Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ProjectGallery from "./projects/ProjectGallery";
import BlogImg   from "@/assets/images/BlogImage.jpg";
import vloggingImg   from "@/assets/images/vlogging.jpeg";
import travellingImg from "@/assets/images/travelling.jpeg";
import learningImg   from "@/assets/images/learning.jpg";
import cookingImg    from "@/assets/images/cooking.jpeg";
import gymmingImg    from "@/assets/images/gymming.jpg";
import wfhubbylogo from "@/assets/images/wfhlogo1.png";

const Home = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleViewTypeChange = (type: "grid" | "list") => {
    setViewType(type);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="min-h-screen"
      >
        {/* Navigation Bar */}
        <header className="sticky top-0 z-10 bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <img src={wfhubbylogo} alt="logo" className="w-12 h-12 rounded-full" />
              @wfhubby
            </motion.div>
              <TabsList className="flex flex-wrap gap-4 justify-center w-full md:w-auto">
                {[
                  { value: "projects", label: "Projects" },
                  { value: "about",    label: "About Me" },
                  { value: "faq",      label: "FAQ" },
                  { value: "hobbies",  label: "Hobbies" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`
                      px-4 py-1 rounded-lg 
                      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                      hover:bg-gray-50
                    `}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <TabsContent value="projects" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h1 className="text-3xl font-bold">My 3 hours Blogsite</h1>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  {/* <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search prsojects..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  /> */}
                </div>

                {/* <Select
                  value={categoryFilter}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-full sm:w-40">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Apps</SelectItem>
                    <SelectItem value="ai">AI/ML</SelectItem>
                    <SelectItem value="game">Game Development</SelectItem>
                  </SelectContent>
                </Select> */}

                {/* <div className="flex gap-2">
                  <Button
                    variant={viewType === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handleViewTypeChange("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewType === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handleViewTypeChange("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div> */}
              </div>
            </div>

            <ProjectGallery
              viewType={viewType}
              searchQuery={searchQuery}
              categoryFilter={categoryFilter}
            />
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">About Me</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <div className="rounded-lg overflow-hidden bg-card">
                    <img
                      src={BlogImg}
                      alt="Profile"
                      className="w-full h-auto object-cover aspect-square"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">Hudzaifah Bin Muhammad Taufiq</h2>
                      <p className="text-muted-foreground">Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 space-y-4">
                  <p>
                    Hey there!
                    My name is Hudzaifah bin Muhammad Taufiq, and it’s a pleasure to meet you. I’m passionate about technology! <br></br>
                    I love exploring and creating new solutions to real world problems. From artificial intelligence to web development, I’m open to any opportunity to innovate.  <br></br>
                    Please feel free to reach out if you’d like to learn more.
                  </p>
                  <p>
                    Outside of tech, I enjoy: <br></br>

                    Cooking for my family (Alhamdullilah I have a big family!) <br></br>

                    Working out at the gym (For the gains) <br></br>

                    Studying Islamic education (ps I am also a part‑time asatizah at my local mosque) <br></br>
                  </p>
                  <p>
I look forward to connecting and exploring potential opportunities together. Peace!
                  </p>
                  <h3 className="text-xl font-semibold mt-6">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Node.js",
                      "Python",
                      "AWS",
                      "Docker",
                      "MongoDB",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <div className="space-y-6 bg-muted rounded-xl p-6 mb-8">
              <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
              <div className="space-y-4">
                {[
                  {
                    question: "Where did I learn how to cook?",
                    answer:
                      "My mother, my mother and my mother.",
                  },
                  {
                    question: "What am I trying to achieve?",
                    answer:
                      "Sharing useful knowledge, experiences and insights with myself, my family and the world!",
                  },
                  {
                    question: "How to contact?",
                    answer:
                      "Honestly just dm.",
                  },
                  {
                    question: "What's my passion?",
                    answer:
                      "I want to fulfill my purpose by setting an example through hard work and dedication, to do good and inspire others to do the same.",
                  },
                  {
                    question: "What is my dream?",
                    answer:
                      "Peace for everyone.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hobbies" className="mt-6">
            <div className="space-y-6 bg-muted rounded-xl p-6 mb-8">
              <h1 className="text-3xl font-bold">My Hobbies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Vlogging",
                      description: "Ya ya je ni.",
                      image: vloggingImg,
                    },
                    {
                      title: "Traveling",
                      description: "Travel and explore new cultures, cuisines, and people",
                      image: travellingImg,
                    },
                    {
                      title: "Learning",
                      description: "I feel like I learn more than I teach.",
                      image: learningImg,
                    },
                    {
                      title: "Cooking",
                      description: "I wanna be a wfh hubbs so bad tho fr fr.",
                      image: cookingImg,
                    },
                    {
                      title: "Gym",
                      description: "If I don't go to the gym, I will be fat.",
                      image: gymmingImg,
                    },
                ].map((hobby, index) => (
                  <div
                    key={index}
                    className="bg-card border rounded-lg overflow-hidden"
                  >
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {hobby.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </main>

        <footer className="bg-muted py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                    href="https://github.com/WhiteHatHud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hudzaifah-muhammad-taufiq-5184351b2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:thiswhitecap@gmail.com"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
            </div>
          </div>
        </footer>
      </Tabs>
    </div>
  );
};

export default Home;
