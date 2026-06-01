import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Briefcase, GraduationCap, Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import profileImg from "@/assets/profile/profile.jpg";
import cvPdf from "@/assets/files/cv_pdf/cv.pdf";

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "1 Project",
      description: "Completed full-stack web applications",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "2 Internships",
      description: "Professional work experience",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "4 Work Experiences",
      description: "Professional work experience",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "1.75 CGPA",
    },
  ];

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Data Management",
    "Data Analytics",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column: Profile image + Quick Facts */}
        <div className="space-y-6">
          <ScrollAnimation>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={profileImg}
                alt="Jane Winslet L. Pacpaco"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
  <div className="pt-4">
    <h3 className="text-2xl font-semibold mb-4 gradient-text">
      Quick Facts
    </h3>

    <ul className="list-none space-y-3">
      {[
        "Based in San Fernando City, La Union, Philippines",
        "Bachelor of Science in Information Systems specialized in Business Analytics",
        "CGPA: 1.75",
      ].map((fact) => (
        <motion.li
          key={fact}
          className="flex items-center space-x-2 text-gray-300"
        >
          <span className="w-2 h-2 bg-white rounded-full" />
          <span>{fact}</span>
        </motion.li>
      ))}
    </ul>
<br></br>
<br></br>
    {/* Buttons Below Quick Facts */}
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <a
        href={cvPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-center"
      >
        Download CV
      </a>

      <Link
        to="/skills"
        className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors text-center"
      >
        My Skills
      </Link>
    </div>
  </div>
</ScrollAnimation>

        </div>

        {/* Right column: Bio + Buttons */}
        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Jane Winslet Pacpaco, an Information Systems graduate
              specializing in Business Analytics with a passion for developing
              efficient and user-focused web applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey into technology began during my academic years, where I
              combined analytical thinking with software development to create
              practical solutions for real-world challenges. During my
              internship with BJMP Regional Office I, I developed a property
              management website, strengthening my skills in web development,
              database management, and system design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I have experience working across various industries, including IT,
              human resources, finance, administration, and executive support.
              This diverse background has helped me develop a unique perspective
              on how technology can streamline business operations, improve
              efficiency, and solve organizational challenges.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise includes full-stack web development, database
              management, business analytics, and data-driven problem-solving. I
              enjoy building modern, scalable applications and continuously
              expanding my knowledge of emerging technologies to deliver
              impactful digital solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, improving
              my development skills, and finding innovative ways to bridge the
              gap between business needs and technology solutions.
            </p>
          </div>

        
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-white mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
