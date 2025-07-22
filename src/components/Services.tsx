import { motion } from "framer-motion";

import digitalLogo from "../assets/services/digitallogo.png";
import eventLogo from "../assets/services/eventLogo.png";
import photoLogo from "../assets/services/photoLogo.png";
import podcastLogo from "../assets/services/podcastLogo.png";
import webLogo from "../assets/services/webLogo.png";

const services = [
    {
        icon: eventLogo,
        title: "Event Planning",
        desc: "Create memorable experiences with our expert event planning services.",
    },
    {
        icon: podcastLogo,
        title: "Podcast Production",
        desc: "Produce high-quality podcasts that resonates with your audience.",
    },
    {
        icon: webLogo,
        title: "Website Development",
        desc: "Build stunning, functional websites that represent your brand.",
    },
    {
        icon: digitalLogo,
        title: "Digital Marketing",
        desc: "Reach your target audience and drive growth with our digital marketing strategies.",
    },
    {
        icon: photoLogo,
        title: "Photography",
        desc: "Capture your brand's essence with professional photography services.",
    },
];

const Services = () => {
    return (
        <div className="min-h-[400px] sm:min-h-[500px] lg:h-[545px] flex py-6 sm:py-10 justify-center px-4 sm:px-0">
            <div className="w-full sm:w-[90%] lg:w-[70rem] flex flex-col gap-3 sm:gap-5">
                <div className="text-white text-xl sm:text-2xl font-bold">Our Services</div>

                <div className="flex flex-col gap-4 sm:gap-7">
                    <h3 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Comprehensive Solutions for Your Success...
                    </h3>
                    <p className="text-white text-sm sm:text-base lg:text-lg">
                        From captivating events to engaging digital content, we offer a
                        range of services to help your brand thrive.
                    </p>

                    {/* Desktop Layout - Horizontal */}
                    <div className="hidden lg:flex h-[17rem] gap-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="h-[17rem] w-1/5 flex flex-col gap-2 bg-[#111] p-3 rounded-xl shadow-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.2,
                                        duration: 0.6,
                                        ease: [0.42, 0, 0.58, 1],
                                    },
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 },
                                }}
                                viewport={{ once: true }}
                            >
                                <img src={service.icon} alt={service.title} />
                                <h1 className="text-white text-lg font-semibold">
                                    {service.title}
                                </h1>
                                <p className="text-white text">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile & Tablet Layout - Grid */}
                    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="flex flex-col gap-3 bg-[#111] p-4 sm:p-6 rounded-xl shadow-md min-h-[200px] sm:min-h-[220px]"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.1,
                                        duration: 0.6,
                                        ease: [0.42, 0, 0.58, 1],
                                    },
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    y: -2,
                                    transition: { type: "spring", stiffness: 300 },
                                }}
                                viewport={{ once: true }}
                            >
                                <img 
                                    src={service.icon} 
                                    alt={service.title}
                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                />
                                <h1 className="text-white text-lg sm:text-xl font-semibold">
                                    {service.title}
                                </h1>
                                <p className="text-white text-sm sm:text-base">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;