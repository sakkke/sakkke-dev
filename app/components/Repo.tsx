"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface RepoInfo {
  description: string;
  stargazers_count: number;
}

function useGitHubRepoInfo(owner: string, repo: string) {
  const [repoInfo, setRepoInfo] = useState<RepoInfo>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => res.json())
      .then((data: RepoInfo) => {
        setRepoInfo({
          description: data.description,
          stargazers_count: data.stargazers_count,
        });
      })
      .catch(console.error);
  }, [owner, repo]);

  return repoInfo;
}

interface Props {
  owner: string;
  repo: string;
}

export default function Repo({ owner, repo }: Props) {
  const repoInfo = useGitHubRepoInfo(owner, repo);

  return (
    <>
      <strong>
        <Link href={`https://github.com/${owner}/${repo}`}>
          {owner}/{repo}
        </Link>
      </strong>
      :{" "}
      {repoInfo?.description ? repoInfo.description : "loading description..."}{" "}
      <span className="text-[var(--ctp-macchiato-overlay2)]">
        (stars:{" "}
        <span>
          {repoInfo?.stargazers_count
            ? repoInfo.stargazers_count
            : "loading stars..."}
        </span>
        )
      </span>
    </>
  );
}
