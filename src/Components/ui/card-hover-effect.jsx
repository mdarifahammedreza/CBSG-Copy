import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4", className)}>
      {items.map((item, idx) => (
        <Link
          to={`/Services/Organization-Development/${item.id}`}
          key={item.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full z-10 rounded-lg bg-gray-100 block "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex gap-5 h-full">
              <div>{item.images && <img src={item.images} alt={item.name} className="w-full h-40 object-cover" />}</div>
              <div className=""> <CardTitle>{item.name}</CardTitle>
                <CardDescription>
                  {item.description.replace(/<[^>]+>/g, '').length > 120 ? item.description.replace(/<[^>]+>/g, '').slice(0, 120) + "..." : item.description.replace(/<[^>]+>/g, '')}
                </CardDescription></div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-full w-full p-4 overflow-hidden shadow-lg rounded-lg bg-white  border border-gray-300 z-50",
        className
      )}
    >
      <div className="relative z-20">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-black font-bold text-lg tracking-wide mt-2 border-b border-gray-300", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <div className={cn("mt-2 text-gray-700 tracking-wide leading-relaxed text-sm", className)}>

      <div dangerouslySetInnerHTML={{ __html: { children } }} />
    </div>
  );
};
