import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer bridging the gap between materials science and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm currently pursuing B.Tech in Material Science and Metallurgical Engineering at 
                Chhatrapati Shahu Ji Maharaj University, Kanpur. My passion for technology led me 
                to explore web development, where I've discovered the perfect blend of creativity 
                and technical problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Campus Ambassador at Physics Wallah, I help bridge the gap between education 
                and students, while continuously expanding my skills in modern web technologies 
                like React, TypeScript, and full-stack development.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="text-primary" size={18} />
                  <span>Based in Kanpur, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="text-primary" size={18} />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Award className="text-primary" size={18} />
                  <span>Smart India Hackathon Participant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">
            <Card className="glass-card border-border/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h4 className="text-lg font-semibold text-foreground">
                      B.Tech in Material Science & Metallurgical Engineering
                    </h4>
                    <p className="text-primary font-medium">
                      Chhatrapati Shahu Ji Maharaj University, Kanpur
                    </p>
                    <p className="text-sm text-muted-foreground">July 2025 – Present</p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h4 className="text-lg font-semibold text-foreground">
                      Secondary & Senior Secondary Education
                    </h4>
                    <p className="text-primary font-medium">
                      Mount Litera Zee School, Etawah (CBSE)
                    </p>
                    <p className="text-sm text-muted-foreground">April 2012 – March 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Experience</h3>
                
                <div className="border-l-2 border-primary/30 pl-6">
                  <h4 className="text-lg font-semibold text-foreground">Campus Ambassador</h4>
                  <p className="text-primary font-medium">Physics Wallah</p>
                  <p className="text-sm text-muted-foreground mb-3">September 2025 – Present</p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Selected as brand representative to promote PW courses and initiatives</li>
                    <li>• Share updates, opportunities, and exclusive benefits with peers</li>
                    <li>• Enhance campus engagement and student community building</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;