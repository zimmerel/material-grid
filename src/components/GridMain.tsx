import type { StyledComponent } from "@emotion/styled";
import { styled } from "@mui/material";
import { type RowData, type Table } from "@tanstack/react-table";
import {
  type ComponentPropsWithoutRef,
  type JSXElementConstructor,
} from "react";
import { COMPONENT_NAME } from "../constants";
import GridAutoSizer from "./GridAutoSizer";
import GridBody from "./GridBody";
import { type GridColumnHeadersProps } from "./GridColumnHeaders";
import GridOverlays from "./GridOverlays";

const GridMainContainer: StyledComponent<ComponentPropsWithoutRef<"div">> =
  styled("div", {
    name: COMPONENT_NAME,
    slot: "Main",
  })({
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  });

export interface GridMainProps<TData extends RowData> {
  table: Table<TData>;
  ColumnHeaders: JSXElementConstructor<GridColumnHeadersProps<TData>>;
}

export default function GridMain<TData extends RowData>({
  table,
  ColumnHeaders,
}: GridMainProps<TData>) {
  const { rows } = table.getRowModel();
  const { headHeight = 0 } = table.options.meta ?? {};

  return (
    <GridMainContainer>
      <GridOverlays rows={rows} />
      <ColumnHeaders table={table} />
      <GridAutoSizer>
        {({ height, width }) => (
          <GridBody
            table={table}
            style={{
              width,
              height: height ? height - headHeight : "auto",
              marginTop: headHeight,
            }}
          />
        )}
      </GridAutoSizer>
    </GridMainContainer>
  );
}
