import React from "react";

export default function Spreadsheet({ data }) {
  return <code>{JSON.stringify(data)}</code>;
}
