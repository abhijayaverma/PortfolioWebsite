import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Modern Calculator Web App",
      description: "A sophisticated calculator with proper order of operations, continuous calculations, and responsive design. Built with modern web technologies for optimal user experience.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
      features: [
        "Advanced mathematical operations",
        "Responsive UI design",
        "Component architecture",
        "Modern CSS styling",
        "User experience optimization"
      ],
      github: "https://github.com/abhijayaverma",
      live: "#",
      icon: <Code className="text-primary" size={24} />
    },
    {
      title: "Portfolio Website",
      description: "This modern, responsive portfolio website showcasing my skills, projects, and achievements. Features smooth animations, dark theme, and glassmorphism design.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      features: [
        "Glassmorphism design",
        "Smooth scroll navigation",
        "Responsive animations",
        "SEO optimized",
        "Performance focused"
      ],
      github: "https://github.com/abhijayaverma",
      live: "#",
      icon: <Globe className="text-primary" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that demonstrate my skills in modern web development and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card border-border/20 hover:border-primary/20 transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-70 hover:opacity-100 hover:text-primary transition-smooth"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-70 hover:opacity-100 hover:text-primary transition-smooth"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/20">
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        View Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground transition-smooth"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more projects? Check out my GitHub for additional work and contributions.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            asChild
          >
            <a href="https://github.com/abhijayaverma" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;