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
  title: "replace",
  description:
    "'replace' is replace tool. it substitutes pattern with replacement.",
  created: "2024-04-13",
  updated: "2024-04-13",
  version: "0.1.0",
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
