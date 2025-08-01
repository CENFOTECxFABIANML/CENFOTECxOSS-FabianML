import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { HomepageI18n } from "../../types";

import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Github, Rocket, TrainTrack, Code, Package, Brush } from "lucide-react";

interface PageProps {
  i18n: HomepageI18n;
}

const Home = ({ i18n }: PageProps) => {
  const { navigate } = useAppNavigation();

  const technologies = [
    { name: "rails", icon: <TrainTrack className="h-8 w-8 text-red-500" /> },
    { name: "react", icon: <Code className="h-8 w-8 text-blue-400" /> },
    {
      name: "shakapacker",
      icon: <Package className="h-8 w-8 text-yellow-500" />,
    },
    { name: "shadcn", icon: <Brush className="h-8 w-8 text-teal-400" /> },
    { name: "axios", icon: <Package className="h-8 w-8 text-green-500" /> },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground flex items-center justify-center p-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          {i18n.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {i18n.subtitle}
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <Button size="lg" onClick={() => navigate("posts")}>
            <Rocket className="mr-2 h-5 w-5" /> {i18n.posts_button}
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/Fabian-ML/Template-ReactOnRails"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" /> {i18n.source_button}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {technologies.map((tech) => (
            <Card key={tech.name}>
              <CardHeader className="flex flex-row items-center gap-4">
                {tech.icon}
                <div>
                  <CardTitle>
                    {i18n.tech[tech.name as keyof HomepageI18n["tech"]].title}
                  </CardTitle>
                  <CardDescription>
                    {
                      i18n.tech[tech.name as keyof HomepageI18n["tech"]]
                        .description
                    }
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
