import { Box, Card, Grid, IconButton, styled, Tooltip } from "@mui/material";
import { AttachMoney, ShoppingCart, ArrowRightAlt, AutoGraph, Sell } from "@mui/icons-material";
import { ExpandLess, StarOutline, TrendingUp } from "@mui/icons-material";
import { Fab, lighten, useTheme } from "@mui/material";
import { Small } from "app/components/Typography";

// STYLED COMPONENTS
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const ContentBox = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
}));

const FabIcon = styled(Fab)(() => ({
  width: "44px !important",
  height: "44px !important",
  boxShadow: "none !important"
}));

const H3 = styled("h3")(() => ({
  margin: 0,
  fontWeight: "500",
  marginLeft: "12px"
}));

const H1 = styled("h1")(({ theme }) => ({

  flexGrow: 1,
}));

const Span = styled("span")(() => ({
  fontSize: "13px",
  marginLeft: "4px"
}));

const IconBox = styled("div")(() => ({
  width: 16,
  height: 16,
  color: "#fff",
  display: "flex",
  overflow: "hidden",
  borderRadius: "300px ",
  justifyContent: "center",
  "& .icon": { fontSize: "14px" }
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main
}));

export default function StatCards() {
  const cardList = [
    { name: "Продажи", categoryF: "Сумма", allTimeF: 12352, nowDurationF: 2342, nowDurationPercentF: 5, categoryS: "Количество", allTimeS: 12352, nowDurationS: 2342, nowDurationPercentS: 5 ,Icon: Sell},
    { name: "Продажи - возврат", categoryF: "Сумма", allTimeF: 12352, nowDurationF: 2342, nowDurationPercentF: 5, categoryS: "Количество", allTimeS: 12352, nowDurationS: 2342, nowDurationPercentS: 5, Icon: AttachMoney },
    { name: "Выручка и прибыль", categoryF: "Сумма", allTimeF: 12352, nowDurationF: 2342, nowDurationPercentF: 5, categoryS: "Количество", allTimeS: 12352, nowDurationS: 2342, nowDurationPercentS: 5, Icon: AutoGraph},
    { name: "Товарный остаток", categoryF: "Сумма", allTimeF: 12352, nowDurationF: 2342, nowDurationPercentF: 5, categoryS: "Количество", allTimeS: 12352, nowDurationS: 2342, nowDurationPercentS: 5, Icon: ShoppingCart }
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {cardList.map(({amount, categoryF, allTimeF, nowDurationF, nowDurationPercentF, categoryS, allTimeS, nowDurationS, nowDurationPercentS, Icon, name }) => (
        <Grid item xs={12} md={6}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>

            <Icon className="icon" />
            <H3 color="#08ad6c"> {name} </H3>

          </ContentBox>

          <ContentBox>

            <H1 style={{margin: "0" + "em"}}>
              <Box ml="12px" >
                  <Small>{categoryF}</Small>
                  <Heading>+{allTimeF} руб</Heading>
                  <Heading>+{nowDurationF} руб</Heading>
                  <Heading> +{nowDurationPercentF}%</Heading>
              </Box>
            </H1>
            

            <Box ml="12px">
                <Small>{categoryS}</Small>
                <Heading>+{allTimeS} у.е.</Heading>
                <Heading>+{nowDurationS} у.е.</Heading>
                <Heading> +{nowDurationPercentS}%</Heading>
            </Box>

          </ContentBox>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}
