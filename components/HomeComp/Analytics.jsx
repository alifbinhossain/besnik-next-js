import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import styles from "../../styles/Analytics.module.css";
import banner from "../../public/images/Presentation-cuate.svg";
import Image from "next/image";

const Analytics = () => {
  return (
    <section className={styles.analytics}>
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, md: 12 }}
        sx={{
          display: { xs: "flex" },
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
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
              Analytics your daily, weekly and monthly activities
            </Typography>
            <Typography
              variant="body1"
              component="p"
              my={3}
              color="textSecondary"
              sx={{ width: "80%" }}
            >
              We help you to track your study in lesson and task as well as
              other think
            </Typography>
            <Button
              variant="text"
              sx={{ color: "#555658", mr: 4 }}
              startIcon={<CheckIcon />}
            >
              Get updates
            </Button>
            <Button
              variant="text"
              sx={{ color: "#555658" }}
              startIcon={<CheckIcon />}
            >
              Track Activity
            </Button>

            <button className="btn-learn">Learn More</button>
          </Box>
        </Grid>

        <Grid item xs={4} md={6}>
          <Image src={banner} alt="" className={styles.bannerImage} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Analytics;
