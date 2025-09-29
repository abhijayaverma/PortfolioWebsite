import React from 'react';
import { Code2, Database, Wrench, Brain, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-primary" size={24} />,
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript"]
    },
    {
      icon: <Code2 className="text-primary" size={24} />,
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"]
    },
    {
      icon: <Wrench className="text-primary" size={24} />,
      title: "Tools & Platforms",
      skills: ["Vite", "Visual Studio Code", "Git/GitHub", "Netlify"]
    },
    {
      icon: <Database className="text-primary" size={24} />,
      title: "Databases & Backend",
      skills: ["SQL (Basic)", "Supabase"]
    },
    {
      icon: <Brain className="text-primary" size={24} />,
      title: "Other Skills",
      skills: ["Responsive UI Design", "Component Architecture", "Problem-solving", "Deployment"]
    }
  ];

  const hackathons = [
    {
      title: "Smart India Hackathon 2025",
      status: "Selected Participant",
      description: "Selected among top teams in the university internal round",
      organization: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
      date: "September 2025"
    }
  ];

  const certifications = [
    "AI Appreciate & AI Aware Badges (CBSE & Intel) - July 2025",
    "Fundamentals of Digital Marketing (Google) - April 2025", 
    "Data Analysis with Python (IBM) - April 2025",
    "Data Engineering on AWS – Foundations (AWS) - April 2025",
    "IBM Cybersecurity Certifications - April – March 2025",
    "Programming in Python (SWAYAM) - January 2025"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-glow">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card border-border/20 hover:border-primary/20 transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hackathons Section */}
        <section id="hackathons" className="mb-16">
          <Card className="glass-card border-border/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Hackathons & Competitions</h3>
              </div>
              
              <div className="space-y-4">
                {hackathons.map((hackathon, index) => (
                  <div 
                    key={hackathon.title}
                    className="p-6 rounded-lg bg-card/30 border border-border/10 hover:border-primary/20 transition-smooth"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground">{hackathon.title}</h4>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {hackathon.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">{hackathon.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{hackathon.organization}</span>
                      <span>•</span>
                      <span>{hackathon.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <Card className="glass-card border-border/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((certification, index) => (
                  <div 
                    key={certification}
                    className="flex items-start gap-3 p-3 rounded-lg bg-card/30 border border-border/10 hover:border-primary/20 transition-smooth"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{certification}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
};

export default Skills;