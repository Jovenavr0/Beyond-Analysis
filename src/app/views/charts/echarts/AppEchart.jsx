import { Box, styled, useTheme } from "@mui/material";

import Breadcrumb from "app/components/Breadcrumb";
import SimpleCard from "app/components/SimpleCard";

import AreaChart from "./AreaChart";
import LineChart from "./LineChart";
import SaleInDay from "./saleinday";
import PieSaLe from "./salemarketPie";
import SaleCategory from "./saleincategory";
import ComparisonChart from "./ComparisonChart";

// STYLED COMPONENT
const Container = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": { marginBottom: 30, [theme.breakpoints.down("sm")]: { marginBottom: 16 } }
}));

export default function AppEchart() {
  const theme = useTheme();

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
