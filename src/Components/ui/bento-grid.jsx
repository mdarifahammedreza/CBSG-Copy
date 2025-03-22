
import { cn } from "../../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4  mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};


