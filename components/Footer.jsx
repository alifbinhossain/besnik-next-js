import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// const useStyles = makeStyles({
//   footer: {
//     padding: "6rem",
//   },
// });

const Footer = () => {
  //   const classes = useStyles();

  const icons = [
    {
      id: 1,
      icon: FacebookIcon,
    },

    {
      id: 2,
      icon: TwitterIcon,
    },

    {
      id: 3,
      icon: LinkedInIcon,
    },
  ];

  const services = [
    {
      id: 1,
      title: "Company",
      sections: ["About", "Careers", "Mobile", "How it works", "Contact us"],
    },
    {
      id: 2,
      title: "Support",
      sections: ["Support Career", "24h Service", "Quick Chat", "Blog"],
    },
    {
      id: 3,
      title: "Contact Us",
      sections: ["Our Office", "Our Center", "Press", "Resources"],
    },
  ];

  return (
    <footer className={styles.footer}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 13 }}
      >
        <Grid item xs={4} md={4}>
          <Typography variant="h5" component="h6" fontWeight={700}>
            Besnik
          </Typography>
          <Typography
            width="90%"
            variant="body1"
            color="#555658"
            sx={{ my: { xs: 2, md: 4 } }}
          >
            We are giving our students the best & suitable services for building
            their bright future.
          </Typography>
          <Box className={styles.iconBox} sx={{ mb: { xs: 3 } }}>
            {icons.map((icon, index) => (
              <icon.icon key={index} className={styles.icon} />
            ))}
          </Box>
        </Grid>

        {/* -------------------------------------------------------------------------- */
        /*                                SERVICE LIST                                */
        /* -------------------------------------------------------------------------- */}
        {services.map((service) => (
          <Grid key={service.id} item xs={4} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {service.title}
            </Typography>

            <ul className={styles.sectionList}>
              {service.sections.map((section, index) => (
                <a key={index}> {section} </a>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>

      <Typography textAlign="center" variant="subtitle2" mt={5} color="#555658">
        Copyright &copy; 2021 All Right Reserved by Besnik Agency
      </Typography>
    </footer>
  );
};

export default Footer;
