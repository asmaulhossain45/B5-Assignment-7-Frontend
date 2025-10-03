"use client";

import { cn } from "@/lib/utils";
import { TMeta } from "@/types/TMeta";
import { Button } from "../ui/button";

type Props = {
  meta: TMeta;
  setPage: (page: number) => void;
  isLoading?: boolean;
  isFetching?: boolean;
  align?: "justify-start" | "justify-center" | "justify-end";
};

export const AppPagintation = ({
  meta,
  setPage,
  isLoading,
  isFetching,
  align = "justify-start",
}: Props) => {
  const isDisabled = isLoading || isFetching;
  return (
    <div className={cn("flex items-center gap-2", align)}>
      <Button
        variant={"outline"}
        onClick={() => setPage(meta.page - 1)}
        disabled={meta.page === 1 || isDisabled}
      >
        Prev
      </Button>
      <Button
        variant={"outline"}
        onClick={() => setPage(meta.page + 1)}
        disabled={meta.page === meta.totalPage || isDisabled}
      >
        Next
      </Button>
    </div>
  );
};
