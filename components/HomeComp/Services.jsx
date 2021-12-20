import styles from "../../styles/Services.module.css";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import GroupIcon from "@mui/icons-material/Group";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
const Services = () => {
  const services = [
    {
      id: 1,
      serviceTitle: "Get Certificate",
      serviceDetails:
        "We are providing a certificate after completing you course & this will help you in future.",
      icon: MilitaryTechIcon,
      iconBackground: "#F0A502",
    },
    {
      id: 2,
      serviceTitle: "Get Membership",
      serviceDetails:
        "We are providing a certificate after completing you course & this will help you in future.",
      icon: GroupIcon,
      iconBackground: "#01957D",
    },
    {
      id: 3,
      serviceTitle: "Become a teacher",
      serviceDetails:
        "We are providing a certificate after completing you course & this will help you in future.",
      icon: BorderColorIcon,
      iconBackground: "#FFA3A4",
    },
  ];
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Why Choose Besnik?</h2>
      <p className={styles.subTitle}>
        We offer a wide range opportunity for you. <br />
        See what you will get & your benefits
      </p>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => (
          <Grid key={service.id} item xs={4} md={4}>
            <Box className={styles.service}>
              <Box
                className={styles.iconBox}
                sx={{ backgroundColor: `${service.iconBackground}` }}
              >
                <service.icon sx={{ fontSize: "60px" }} />
              </Box>
              <h4 className={styles.serviceTitle}>{service.serviceTitle}</h4>
              <p className={styles.serviceDetails}>{service.serviceDetails}</p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Services;
