import styles from "../../styles/CTA.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Box } from "@mui/system";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <h2>Fit more learning into your day</h2>
      <Box className={styles.box}>
        <Box
          className={styles.boxItem}
          sx={{ mr: { md: 3 }, mb: { xs: 2, md: 0 } }}
        >
          <GoogleIcon className={styles.itemIcon} />
          <p>
            <span className={styles.itemTitleSecondary}>Get it On</span>
            <span className={styles.itemTitlePrimary}>Google Play</span>
          </p>
        </Box>
        <Box className={styles.boxItem}>
          <AppleIcon className={styles.itemIcon} />
          <p>
            <span className={styles.itemTitleSecondary}>Download On the</span>
            <span className={styles.itemTitlePrimary}>App Store</span>
          </p>
        </Box>
      </Box>
    </section>
  );
};

export default CTA;
