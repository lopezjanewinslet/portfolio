import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  MessageSquare,
} from 'lucide-react'
import { useState } from 'react'
import profileImage from '@/assets/profile/profile.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'lopezjanewinslet@gmail.com',
      link: 'mailto:lopezjanewinslet@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+639514422731',
      link: 'tel:+639514422731',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'San Fernando City, La Union, Philippines',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Time Zone',
      value: 'PHT (UTC+8:00)',
    },
  ]

  const socialLinks = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      link: 'https://wa.me/639514422731',
    },
  ]

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="group"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          {info.icon}
                        </div>

                        <div>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {info.label}
                          </p>

                          <p className="text-sm sm:text-base text-white">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 p-2 sm:p-3">
                        <div className="text-gray-400">{info.icon}</div>

                        <div>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {info.label}
                          </p>

                          <p className="text-sm sm:text-base text-white">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Connect with Me
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                    }}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group flex-1 sm:flex-none justify-center sm:justify-start"
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>

                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 p-4 sm:p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="w-full h-full flex flex-col">
              <img
                src={profileImage}
                alt="Jane Lopez"
                className="w-full h-[500px] lg:h-[650px] object-cover rounded-xl shadow-lg"
              />

            
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact