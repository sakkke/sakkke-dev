import { Metadata } from "next";
import ToolLayout from "../tool-layout";
import Tool from "./tool";

export const metadata: Metadata & {
  title: string;
  description: string;
  created: string;
  updated: string;
  version: string;
} = {
  title: "noblanks",
  description: "'noblanks' is a tool to remove blank lines automatically.",
  created: "2024-04-26",
  updated: "2024-04-26",
  version: "0.1.0",
};

export default function Wc() {
  return (
    <ToolLayout
      title={metadata.title}
      description={metadata.description}
      created={metadata.created}
      updated={metadata.updated}
      version={metadata.version}
    >
      <Tool />
    </ToolLayout>
  );
}
