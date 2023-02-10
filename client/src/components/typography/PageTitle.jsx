import { Box } from "@mui/material";

export default function PageTitle({ title, children, sx = [], ...props }) {
  return (
    <Box
      mt={0}
      mb={0}
      component="h2"
      {...props}
      sx={[{ color: "secondary.title" }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {title || children}
    </Box>
  );
}
