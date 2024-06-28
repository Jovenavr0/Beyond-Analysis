import { Box, styled } from "@mui/material";

import SimpleCard from "app/components/SimpleCard";

import SaleInDay from "./saleinday";
import PieSaLe from "./salemarketPie";
import SaleCategory from "./saleincategory";

// STYLED COMPONENT
const Container = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": { marginBottom: 30, [theme.breakpoints.down("sm")]: { marginBottom: 16 } }
}));

export default function AppEchart() {

  return (
    <Container>
      
      <SimpleCard title="Выручка со всех маркетплейсов">
        <SaleInDay/>
      </SimpleCard>

      <Box sx={{ py: "12px" }} />

      <SimpleCard title="Выручка Со Всех Маркетплейсов">
        <PieSaLe/>
      </SimpleCard>

      <Box sx={{ py: "12px" }} />

      <SimpleCard title="Продажи по тарифам">
        <SaleCategory/>
      </SimpleCard>

    </Container>
  );
}
