import { useState, useEffect } from 'react';

interface GetGithubRepoResponseData {
  description: string;
}

export function useGithubRepo(owner: string, repo: string): GetGithubRepoResponseData | null {
  const [repository, setRespository] = useState<GetGithubRepoResponseData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        setRespository(data as GetGithubRepoResponseData);
      });
  }, [owner, repo]);

  return repository;
}
