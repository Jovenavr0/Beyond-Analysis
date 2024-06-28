import { Fragment, useState} from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Card, Grid, styled, Button } from "@mui/material";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1)
}));

export default function Analytics() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={12}>

              <StyledButton variant="contained" color="inherit">
                Сегодня
              </StyledButton>

              <StyledButton variant="contained" color="inherit">
                Вчера
              </StyledButton>

              <StyledButton variant="contained" color="inherit">
                Неделя
              </StyledButton>

              <StyledButton variant="contained" color="inherit">
                Месяц
              </StyledButton>

              <StyledButton variant="contained" color="inherit">
                Квартал
              </StyledButton>

              <StyledButton variant="contained" color="inherit">
                Полгода
              </StyledButton>

              <StyledButton variant="contained" color="inherit">
                Год
              </StyledButton>

            </Grid>
          </Grid>

            <StatCards />

            <StatCards2 />

            <H4>Маркетплейсы:</H4>
            <RowCards />

          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              
            <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            />
            </Card>

            <UpgradeCard />

          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
