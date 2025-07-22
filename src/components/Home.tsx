import { motion } from 'framer-motion';
import mainLogo from '../assets/logo4.jpg';

const Home = () => {
    return (
        <div className="relative flex justify-center h-[300px] sm:h-[400px] lg:h-[512px]">
            <img
                src={mainLogo}
                alt="Main Logo"
                className="w-full sm:w-[50rem] lg:w-[70rem] object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
                >
                    Elevate Your Brand with <br /> QuantiVisionTech
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-white text-sm sm:text-lg md:text-xl max-w-sm sm:max-w-2xl"
                >
                    We specialize in Event planning, Podcast production, Website development,
                    Digital marketing, and Photography. Let us bring your vision to life.
                </motion.p>
            </div>
        </div>
    );
};

export default Home;