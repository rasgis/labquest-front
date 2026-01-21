import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import { getAnalyses } from "../api/get-analyses";

export function useAnalyses(city: string) {
  return useQuery({
    queryKey: queryKeys.analyses.list({ city }),
    queryFn: () => getAnalyses(city),
  });
}