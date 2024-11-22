import { motion } from "framer-motion";

const AnimatedText = ({ text, el: Wrapper = "p", once = true, className = "" }) => {
 
  const words = text.split(' ');

  const wordAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05, 
        duration: 0.4, 
        ease: "easeOut",
      },
    }),
  };

  const splitText = words.map((word, index) => (
    <motion.span
      key={index}
      variants={wordAnimation}
      custom={index}
      whileInView="visible" 
      initial="hidden" 
      viewport={{ once: once }} 
    >
      {word}{" "}
    </motion.span>
  ));

  return (
    <Wrapper className={className}>
      {splitText}
    </Wrapper>
  );
};

export default AnimatedText;
