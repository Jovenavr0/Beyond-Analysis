import {
  Box,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";

// STYLED COMPONENT
const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } }
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } }
  }
}));

const subscribarList = [
  {
    id: 27,
    count: 48,
    market: 1,
    rating: 5.0
  },
  {
    id: 85,
    count: 8,
    market: 1,
    rating: 5.0
  },
  {
    id: 87,
    count: 42,
    market: 4,
    rating: 5.0
  },
  {
    id: 182,
    count: 15,
    market: 1,
    rating: 5.0
  },
  {
    id: 204,
    count: 34,
    market: 3,
    rating: 5.0
  },
  {
    id: 17,
    count: 9,
    market: 1,
    rating: 4.9
  },
  {
    id: 46,
    count: 45,
    market: 2,
    rating: 4.9,
  },
  {
    id: 96,
    count: 4,
    market: 1,
    rating: 4.9
  },
  {
    id: 99,
    count: 0,
    market: 3,
    rating: 4.9
  }
];

export default function SimpleTable() {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="center">Количество товара</TableCell>
            <TableCell align="center">Маркетплейс</TableCell>
            <TableCell align="center">Рейтинг</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, id) => (
            <TableRow key={id}>
              <TableCell align="left">{subscriber.id}</TableCell>
              <TableCell align="center">{subscriber.count}</TableCell>
              <TableCell align="center">{subscriber.market}</TableCell>
              <TableCell align="center">{subscriber.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
}
