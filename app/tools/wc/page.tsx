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
  title: "sakkke wc",
  description:
    "'sakkke wc' is word count tool. it counts lines, words, and bytes.",
  created: "2024-04-03",
  updated: "2024-04-03",
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
