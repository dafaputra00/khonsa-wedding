import config from '@/config/config'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Stories() {
    return (
        <>
            {/* Event Section */}
            <section id="stories" className="min-h-screen relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4 py-20"
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-rose-500 font-medium mb-2"
                        >
                            Awal mula
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
                        >
                            Perjalanan kami berdua
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 max-w-md mx-auto"
                        >
                            hehe
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center gap-4 mt-6"
                        >
                            <div className="h-[1px] w-12 bg-rose-200" />
                            <div className="text-rose-400">
                                <Heart className="w-4 h-4" fill="currentColor" />
                            </div>
                            <div className="h-[1px] w-12 bg-rose-200" />
                        </motion.div>
                        <div>
                            {config.data.stories.map((story, index) => (
                                <div key={index} className='mb-6 p-3 rounded-xl shadow-lg bg-white dark:bg-neutral-900 flex flex-col items-center max-w-3xl mx-auto'>
                                    <motion.div 
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 1 }}
                                        className='flex items-center justify-center w-full lg:w-1/4'>
                                        <img 
                                            src={story.image} 
                                            width={150}
                                            height={150}
                                            alt={story.title} 
                                            className='mb-6 rounded w-64 h-64 object-cover'
                                        />
                                    </motion.div>
                                    <motion.div 
                                        whileInView={{ opacity: 1, x: 0 }}
                                        initial={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 1 }}
                                        className='w-full max-w-xl lg:w-3/4'>
                                        <h6 className='mb-2 font-semibold'>{story.title}</h6>
                                        <p className='mb-4 text-neutral-400'>{story.description}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}