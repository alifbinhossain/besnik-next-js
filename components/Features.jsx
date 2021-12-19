import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../styles/Feature.module.css";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
const Features = () => {
  const features = [
    {
      id: 1,
      title: " 1000+ free best online courses",
      icon: InsertDriveFileIcon,
      iconBackground: "#01957D",
    },
    {
      id: 2,
      title: " 100+ experienced & expert mentor",
      icon: PersonIcon,
      iconBackground: "#FFA3A4",
    },
    {
      id: 3,
      title: "1M+ students rate & review",
      icon: MessageIcon,
      iconBackground: "#2B3747",
    },
  ];
  return (
    <section className={styles.features}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {features.map((feature) => (
          <Grid key={feature.id} item xs={4} md={4}>
            <Box className={styles.feature}>
              <Box
                className={styles.iconBox}
                sx={{ backgroundColor: `${feature.iconBackground}` }}
              >
                <feature.icon sx={{ fontSize: { xs: "20px", md: "30px" } }} />
              </Box>
              <h4 className={styles.title}>{feature.title}</h4>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Features;
