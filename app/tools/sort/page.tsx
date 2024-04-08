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
  title: "sakkke sort",
  description: "'sakkke sort' is sort tool. it sorts lines of text.",
  created: "2024-04-04",
  updated: "2024-04-08",
  version: "0.5.0",
};

export default function Sort() {
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
