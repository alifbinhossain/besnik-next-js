import { Box, Grid } from "@mui/material";
import Image from "next/image";
import banner from "../public/images/banner.png";
import styles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* -------------------------------------------------------------------------- */
        /*                                HERO CONTENT                                */
        /* -------------------------------------------------------------------------- */}
        <Grid className={styles.content} item xs={4} sm={4} md={6}>
          <h1>
            An excellence <br /> center for education
          </h1>
          <p>
            Besnik is the online learning platform that offers various courses
            for your development.
          </p>
          <Box className={styles.inputBox}>
            <input type="text" placeholder="Enter Your Email" />
            <button>Get Started</button>
          </Box>
        </Grid>
        {/* -------------------------------------------------------------------------- */
        /*                                 HERO BANNER                                */
        /* -------------------------------------------------------------------------- */}
        <Grid item xs={4} sm={4} md={6} className={styles.banner}>
          <Image src={banner} alt="" className={styles.bannerImage} />
          <Box className={styles.students}>
            <p>100K</p>
            <span>Active Students</span>
          </Box>
          <Box className={styles.members}>
            <p>27K</p>
            <span>Members Joined</span>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
