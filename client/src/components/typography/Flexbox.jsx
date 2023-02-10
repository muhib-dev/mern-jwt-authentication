import Box from "@mui/material/Box";

const Flexbox = (props) => {
  const { flexDirection, justifyContent, alignItems, gap, sx, children } =
    props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: flexDirection
          ? flexDirection
          : { xs: "column", sm: "row" },
        justifyContent: justifyContent
          ? justifyContent
          : { sm: "space-between" },
        alignItems: alignItems ? alignItems : { sm: "center" },
        gap: gap ? gap : { xs: 1, sm: 2 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Flexbox;
