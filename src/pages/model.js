import React from "react";
//Components
import { motion, useTransform, useViewportScroll } from "framer-motion";
import ScrollForMore from "../components/scrollForMore";
//Ease

const transition = {
  duration: 1.4,
  ease: [0.6, 0.03, -0.05, 0.9],
};

const transitionDelay = {
  duration: 1.4,
  ease: [0.6, 0.03, -0.05, 0.9],
  transition: { delay: 1.5 },
};

const firstName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const first = {
  initial: { opacity: 0 },
  animate: { opacity: 1, ...transitionDelay },
};

const last = {
  initial: { opacity: 0 },
  animate: { opacity: 1, ...transitionDelay },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <motion.div
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              className="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, ...transition },
              }}
            >
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className="mua">MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className="model">
              <motion.span variants={firstName} className="first">
                <motion.span variants={letter}>P</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>r</motion.span>
              </motion.span>
              <motion.span variants={lastName} className="last">
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>b</motion.span>
                <motion.span variants={letter}>y</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: "5%",
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <div className="frame-single">
                  <motion.img
                    style={{ scale: scale }}
                    initial={{ scale: 1.1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -100 : -200,
                    }}
                    src={require("../images/PeterUncompressed.jpg")}
                    alt="an image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              libero. <br />
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam eum aut laudantium nemo. Aspernatur possimus pariatur
              odit cupiditate, obcaecati eum rerum repellat corrupti illum non,
              ea commodi consequuntur dolorem sed hic libero doloribus! A
              cupiditate, neque possimus doloremque sed nam voluptates mollitia
              excepturi earum repellat repellendus ratione exercitationem labore
              et nobis non dolor magni cum facilis alias provident odio. At, quo
              veritatis ducimus labore quis sequi corporis, iure quia molestiae
              numquam dicta assumenda dignissimos voluptates eos eum fuga
              excepturi quod? Blanditiis exercitationem officiis beatae
              repudiandae ipsam cupiditate distinctio molestias corporis
              assumenda sequi laudantium cumque accusamus corrupti laborum
              recusandae, explicabo neque dolor, perspiciatis nemo temporibus
              aliquam fugit minus! Vel, at a ducimus, tenetur assumenda suscipit
              ratione alias repudiandae quam natus commodi fuga accusantium
              libero voluptates expedita id ipsum quisquam. Explicabo aliquam
              facilis, consequatur, eaque ullam non voluptatibus accusamus
              blanditiis eum fugit quod deserunt saepe aperiam repudiandae
              voluptatem quasi tempore molestiae porro sapiente exercitationem
              amet atque ipsa culpa doloribus. Ullam ab adipisci consequatur
              necessitatibus eos! Nulla numquam atque molestiae esse ducimus
              nesciunt! Ad quis voluptates asperiores quam ea alias repellendus?
              Libero, recusandae illum? Autem reprehenderit voluptatem, possimus
              maiores exercitationem ratione sit temporibus vitae illo deleniti
              ex ut. Saepe repudiandae ratione odio voluptas.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
