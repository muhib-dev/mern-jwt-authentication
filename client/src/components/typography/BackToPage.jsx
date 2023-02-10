import { Link } from "@mui/material";
import { Link as RouterLink, To } from "react-router-dom";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { Box } from "@mui/system";

function BackToPage({ title = "back to list", to, sx = [], ...rest }) {
  return (
    <Link
      sx={[
        { displayPrint: "none", display: "inline-block", marginBottom: "1rem" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
      to={to}
      component={RouterLink}
    >
      <Box sx={{ display: "inline-flex", alignItems: "center" }}>
        <IconArrowNarrowLeft stroke={1.3} /> {title}
      </Box>
    </Link>
  );
}

export default BackToPage;
