// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
// import confetti from 'canvas-confetti'
// import {ChevronDown, Play, Pause } from 'lucide-react'
// import Button from '../ui/Button'
 
// const emojiVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 }
// }

// const imageVariants = {
//   offscreen: { y: 50, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", bounce: 0.4, duration: 0.8 }
//   }
// }

// const Birthday = () => {
//   const [isConfettiActive, setIsConfettiActive] = useState(false)
//   const [activeEmoji, setActiveEmoji] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const audioRef = useRef<HTMLAudioElement>(null)
//   const emojis = ["🎉", "🎂", "🎁", "🎈", "🥳"]

// useEffect(() => {
//   const interval = setInterval(() => {
//     setActiveEmoji((prev) => (prev + 1) % emojis.length)
//   }, 2000)
//   return () => clearInterval(interval)
// }, [])

//   const musicList = [
//     '/music/song1.mp3', // Replace with actual song paths or URLs
//     '/music/song2.mp3',
//     '/music/song3.mp3',
//     '/music/song4.mp3'
//   ]
//   const [currentTrack, setCurrentTrack] = useState(0)

//   useEffect(() => {
//     setCurrentTrack(Math.floor(Math.random() * musicList.length))
//     const interval = setInterval(() => {
//       setActiveEmoji((prev) => (prev + 1) % emojis.length)
//     }, 2000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     if (isConfettiActive) {
//       const duration = 15 * 1000
//       const animationEnd = Date.now() + duration
//       const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

//       function randomInRange(min , max ) {
//         return Math.random() * (max - min) + min
//       }

//       const interval = setInterval(function() {
//         const timeLeft = animationEnd - Date.now()

//         if (timeLeft <= 0) {
//           return clearInterval(interval)
//         }

//         const particleCount = 50 * (timeLeft / duration)
//         confetti(Object.assign({}, defaults, { 
//           particleCount, 
//           origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
//         }))
//         confetti(Object.assign({}, defaults, { 
//           particleCount, 
//           origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
//         }))
//       }, 250)

//       return () => clearInterval(interval)
//     }
//   }, [isConfettiActive])

 

//  useEffect(() => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.play()
//       } else {
//         audioRef.current.pause()
//       }
//     }
//   }, [isPlaying, currentTrack])

//   const togglePlay = () => setIsPlaying(!isPlaying)

//   const nextTrack = () => {
//     setCurrentTrack((prev) => (prev + 1) % musicList.length)
//     setIsPlaying(true)
//   }

//   const images = [
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400',
//     '/placeholder.svg?height=300&width=400'
//   ]

//   return (
//     <div className="min-h-screen bg-[#F0F4F8] text-[#1A202C] overflow-x-hidden">
//      <section className="h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-[#E6F0FF] to-[#F0F4F8]">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-center mb-8"
//       >
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-[#E53E3E] mb-2"
//           style={{ fontFamily: "'Sail', cursive" }}
//         >
//           Happy Birthday to Me!
//         </motion.h2>
//         <p className="text-lg md:text-xl font-medium text-gray-600">
//           It’s me, Sai Sree Satya! Thank you for being here to celebrate with me.
//         </p>
//       </motion.div>

//       <motion.h1
//         initial={{ opacity: 0, scale: 0.7 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-6xl md:text-8xl font-bold text-center mb-6"
//         style={{ fontFamily: "'Sail', cursive" }}
//       >
//         Happy Birthday
//         <br />
//         <span className="text-[#4299E1]">Satya!</span>
//       </motion.h1>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeEmoji}
//           variants={emojiVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           className="text-7xl md:text-9xl mb-8"
//         >
//           {emojis[activeEmoji]}
//         </motion.div>
//       </AnimatePresence>

//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="flex gap-4 mt-4"
//       >
//         <button
//           onClick={() => setIsConfettiActive((prev) => !prev)}
//           className="bg-[#4299E1] text-white hover:bg-[#3182CE] font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
//         >
//           {isConfettiActive ? 'Stop' : 'Start'} Confetti!
//         </button>
//         <button
//           onClick={togglePlay}
//           className="bg-[#48BB78] text-white hover:bg-[#38A169] font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
//         >
//           {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
//         </button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-10"
//       >
//         <ChevronDown className="w-10 h-10 animate-bounce text-[#4299E1]" />
//       </motion.div>
//     </section>

 







// <section className="py-20 px-4 bg-white relative overflow-hidden">
//   <div className="max-w-6xl mx-auto">
//     <motion.div
//       initial={{ y: 30, opacity: 0 }}
//       animate={{ y: [30, -30, 30], opacity: [0.8, 1, 0.8] }}
//       transition={{ repeat: Infinity, duration: 2 }}
//       className="absolute top-5 right-5 text-5xl text-pink-500 opacity-75"
//     >
//       ❤️
//     </motion.div>

//     <motion.h2
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2D3748]"
//       style={{ fontFamily: "'Sail', cursive" }}
//     >
//       Thank You for All Your Wishes!
//     </motion.h2>

//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.3 }}
//       className="text-lg md:text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto"
//     >
//       "Your kind words and heartfelt wishes have truly made my day unforgettable. Thank you for being a part of my special celebration and filling it with joy and love."
//     </motion.p>

//     <motion.div
//       className="my-8 text-center text-[#3182CE] text-xl font-semibold"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8, delay: 0.5 }}
//     >
//       <motion.div
//         className="inline-block"
//         animate={{ x: [0, -200], opacity: [1, 0, 1] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//       >
//         {[
//           "Thank you for your love and kindness!",
//           "You all made my day so special!",
//           "Grateful for each and every one of you 💖",
//         ].map((message, index) => (
//           <span key={index} className="mr-8">
//             {message}
//           </span>
//         ))}
//       </motion.div>
//     </motion.div>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//       {images.map((src, index) => (
//         <motion.div
//           key={index}
//           variants={imageVariants}
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, amount: 0.8 }}
//           className="relative h-[300px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//         >
//           <Image
//             src={src}
//             alt={`Satya's Birthday Image ${index + 1}`}
//             layout="fill"
//             objectFit="cover"
//             className="transition-transform duration-300 hover:scale-110 hover:brightness-110"
//           />
//           <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 text-sm">
//             {`"Thanks for the amazing day!" -  ${index + 1}`}
//           </div>
//         </motion.div>
//       ))}
//     </div>

//     <motion.button
//       onClick={() => alert("Thank you message sent!")}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-[#4299E1] text-white hover:bg-[#3182CE] font-bold py-3 px-6 rounded-full text-lg shadow-lg flex items-center gap-2"
//     >
//       <span>Send Thanks</span>
//       <motion.div
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ repeat: Infinity, duration: 0.8 }}
//       >
//         💖
//       </motion.div>
//     </motion.button>
//   </div>

//   <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
//     {[...Array(20)].map((_, i) => (
//       <motion.div
//         key={i}
//         className="w-3 h-3 bg-pink-500 rounded-full absolute opacity-75"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//         }}
//         animate={{
//           y: [0, 20, -20],
//           opacity: [1, 0.8, 1],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           delay: Math.random() * 2,
//         }}
//       />
//     ))}
//   </div>
// </section>



//       <section className="py-16 px-4 bg-[#E6F0FF]">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D3748]">Celebrate with Satya</h2>
//           <p className="text-xl text-[#4A5568] mb-8">Join us in making this day special for Satya. Your presence and wishes mean the world!</p>
//           <div className="flex justify-center gap-4">
//             <Button className="bg-[#ED8936] text-white hover:bg-[#DD6B20] font-bold py-3 px-6 rounded-full text-lg shadow-lg">
//               Send Wishes
//             </Button>
//             <Button className="bg-[#9F7AEA] text-white hover:bg-[#805AD5] font-bold py-3 px-6 rounded-full text-lg shadow-lg">
//               View Guestbook
//             </Button>
//           </div>
//         </div>
//       </section>

//       <footer className="text-center py-8 bg-[#2D3748] text-white">
//         <p className="text-lg">Made with ❤️ for Satya's Birthday</p>
//       </footer>
 
//       <audio ref={audioRef} src={musicList[currentTrack]} loop />

//     </div>
//   )
// }
// export default Birthday 
const Birthday = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src="https://happybirthdaysaisreesatya.vercel.app/" 
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none' 
        }} 
        title="Birthday Celebration"
      ></iframe>
    </div>
  );
}

export default Birthday;
