import { Box, Card, Grid, styled, Checkbox} from "@mui/material";
import { Store} from "@mui/icons-material";
import { Small } from "app/components/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main }
}));

export default function RowCards() {
  const cardList = [
    { name: "Wildberries", Icon: Store},
    { name: "OZON", Icon: Store},
    { name: "Яндекс Маркет", Icon: Store},
    { name: "СберМаркет", Icon: Store},
    { name: "AliExpress", Icon: Store}
  ];

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {cardList.map(({Icon, name }) => (
        <Grid item xs={1} md={6} key={name}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon" />

              <Box ml="12px">
                <Small>{name}</Small>
              </Box>
            </ContentBox>

            <Checkbox />
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}