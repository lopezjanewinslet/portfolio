import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import UPICT_1 from "@/assets/files/certificates_pdf/UPICT_1.png";
import UPICT_2 from "@/assets/files/certificates_pdf/UPICT_2.png";
import UPICT_3 from "@/assets/files/certificates_pdf/UPICT_3.png";
import CYLC_1 from "@/assets/files/certificates_pdf/CYLC_1.png";
import CYLC_2 from "@/assets/files/certificates_pdf/CYLC_2.png";
import CYLC_3 from "@/assets/files/certificates_pdf/CYLC_3.png";
import SM_1 from "@/assets/files/certificates_pdf/SM_1.pdf";
import SM_2 from "@/assets/files/certificates_pdf/SM_2.pdf";
import SM_3 from "@/assets/files/certificates_pdf/SM_3.pdf";
import SM_4 from "@/assets/files/certificates_pdf/SM_4.pdf";
import dict from "@/assets/files/certificates_pdf/dict.pdf";
import javascriptPdf from "@/assets/files/certificates_pdf/javascript.pdf";
import dockerPdf from "@/assets/files/certificates_pdf/docker_fundamentals.pdf";
import pythonPdf from "@/assets/files/certificates_pdf/python.pdf";
import cybersecurityPdf from "@/assets/files/certificates_pdf/cybersecurity_virtual_program.pdf";

const certificates = [
  {
    title: "Reskills, Unlocking the Secrets of Cybersecurity",
    issuer: "UPICT",
    link: UPICT_1,
    description:
      "Participated in a webinar focused on cybersecurity awareness, online safety practices, and protecting digital information from cyber threats.",
    skills: [
      "Cybersecurity Awareness",
      "Online Safety Practices",
      "Data Protection",
      "Risk Identification",
      "Digital Security Fundamentals",
    ],
  },
  {
    title: "Boost Your Career & Business through Digital Creativity",
    issuer: "UPICT",
    link: UPICT_2,
    description:
      "Learned strategies for leveraging digital creativity to enhance professional growth, personal branding, and business opportunities.",
    skills: ["Digital Content Creation", "Personal Branding", "Creative Thinking", "Marketing Fundamentals", "Career Development"],
  },
  {
    title: "Start-up 101",
    issuer: "UPICT",
    link: UPICT_3,
    description:
      "Gained knowledge on entrepreneurship, business planning, and the fundamentals of launching and managing a startup.",
    skills: ["Entrepreneurship", "Business Planning", " Strategic Thinking", " Innovation Management", "Startup Fundamentals"],
  },
  {
    title: "Photoshop for Branding and Marketing: Creating Your Own Brand with Photoshop",
    issuer: "CYLC",
    link: CYLC_1,
    description:
      "Explored branding principles and learned how to create visual brand identities using Adobe Photoshop.",
    skills: ["Brand Development", "Graphic Design", "Adobe Photoshop", "Visual Communication", "Marketing Design"],
  },
  {
    title: "Photoshop for Branding and Marketing: Introduction to Adobe Photoshop",
    issuer: "CYLC",
    link: CYLC_2,
    description:
      "Received foundational training on Adobe Photoshop tools, features, and design techniques.",
    skills: ["Adobe Photoshop Fundamentals", "Image Editing", "Photo Manipulation", "Layout Design", "Digital Art Basics"],
  },
  {
    title: "Photoshop for Branding and Marketing: Market Trends in Graphic Designing",
    issuer: "CYLC",
    link: CYLC_3,
    description:
      "Studied current industry trends, emerging design styles, and market demands in graphic design.",
    skills: ["Trend Analysis", "Graphic Design Principles", "Creative Adaptability", "Market Awareness", "Visual Design Strategy"],
  },
{
    title: "Business Forum: Technology and Knowledge Transfer for Digital Payment Approaches, Online Platforms, and Product Branding",
    issuer: "",
    description:
      "Participated in discussions on digital payment systems, online business platforms, and modern product branding strategies.",
    skills: ["Digital Payment Knowledge", "E-Commerce Fundamentals", "Product Branding", "Business Technology Awareness", "Digital Marketing"],
  },
{
    title: "Educational and Cultural Immersion Program in Universitas Kristen Indonesia, Jakarta, Indonesia",
    issuer: "Universitas Kristen Indonesia",
    description:
      "Engaged in cross-cultural learning experiences, academic exchanges, and international collaboration activities.",
    skills: ["Cross-Cultural Communication", "Global Awareness", "Adaptability", "Interpersonal Skills", "International Collaboration"],
  },
  {
    title: "Data Privacy for New Employee",
    issuer: "",
    link: SM_3,
    description:
      "Completed training on data privacy regulations, responsible data handling, and organizational compliance requirements.",
    skills: ["Data Privacy Compliance", "Information Security", "Confidentiality Management", "Data Protection Practices", "Regulatory Awareness"],
  },
  {
    title: "Understanding Money",
    issuer: "",
    link: SM_1,
    description:
      "Learned the fundamentals of personal finance, budgeting, saving, and responsible money management.",
    skills: ["Financial Literacy", "Budgeting", "Saving Strategies", "Personal Finance Management", "Financial Planning"],
  },
  {
    title: "Knowing Your Role and Responsibilities",
    issuer: "",
    link: SM_2,
    description:
      "Participated in orientation training that emphasized workplace expectations, accountability, and professional conduct.",
    skills: ["Professional Responsibility", "Workplace Ethics", "Accountability", "Time Management", "Team Collaboration"],
  },
  {
    title: "Consumer Protection and Anti-Fraud Compliance Programs",
    issuer: "",
    link: SM_4,
    description:
      "Learned consumer protection principles, fraud prevention measures, and compliance requirements within business operations",
    skills: ["Fraud Prevention", "Consumer Protection Awareness", "Compliance Management", "Risk Mitigation", "Ethical Business Practices"],
  },
   {
    title: "Know Your Money",
    issuer: "BSP",
    description:
      "Attended a financial literacy seminar by the Bangko Sentral ng Pilipinas focused on identifying genuine currency and preventing counterfeit transactions.",
    skills: ["Currency Authentication", "Financial Literacy", "Fraud Detection", "Cash Handling", "Consumer Awareness"],
  },
  {
    title: "Basic PC Troubleshooting Training",
    issuer: "DICT",
    link: dict,
    description:
      "Received hands-on training in diagnosing and resolving common computer hardware and software issues.",
    skills: ["Computer Troubleshooting", "Hardware Diagnostics", "Software Installation", "System Maintenance", "Technical Problem Solving"],
  },

];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
