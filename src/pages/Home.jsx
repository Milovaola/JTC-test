import React from "react";
import { Table, TableRow, TableCol } from "../components/MainTable";

export const Home = () => {
  return (
    <>
      <Table>
        <TableRow>
          <TableCol colHeader>Исполнитель</TableCol>
          <TableCol>Миловидова Ольга Андреевна</TableCol>
        </TableRow>
        <TableRow>
          <TableCol colHeader>Ссылка на GitHub</TableCol>
          <TableCol>
            <a href="https://github.com/Milovaola">
              https://github.com/Milovaola
            </a>
          </TableCol>
        </TableRow>
      </Table>
    </>
  );
};
