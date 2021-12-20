import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import styles from "../../styles/Mentors.module.css";
import banner from "../../public/images/Online learning-bro.svg";
import Image from "next/image";

const Mentors = () => {
  return (
    <section className={styles.mentors}>
      <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
        <Grid item xs={4} md={6}>
          <Image src={banner} alt="" className={styles.bannerImage} />
        </Grid>

        {/* -------------------------------------------------------------------------- */
        /*                             MENTORS DETAIL ITEM                            */
        /* -------------------------------------------------------------------------- */}
        <Grid
          item
          xs={4}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              component="h3"
              fontWeight={800}
              lineHeight={1.4}
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Get trained by the worlds best teachers
            </Typography>
            <Typography
              variant="body1"
              component="p"
              my={3}
              color="textSecondary"
              sx={{ width: "80%" }}
            >
              Here guiding and teaching some experienced and prolific bunch of
              teachers
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#555658", mr: 4 }}
              startIcon={<CheckIcon />}
            >
              Get in Touch
            </Button>
            <Button
              variant="text"
              sx={{ color: "#555658" }}
              startIcon={<CheckIcon />}
            >
              Sharing Experience
            </Button>

            <button className="btn-learn">Learn More</button>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Mentors;
