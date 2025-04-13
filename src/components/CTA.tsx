import React from "react";

function CTA({
  type = "link",
  label = "Je m'inscris",
  href = "#hero",
  color = "#2563EB",
}: any) {
  return (
    <p className="flex items-center justify-center clear-both mt-6 mb-0">
      {type === "link" ? (
        <a
          href={href}
          className={`bg-[${color}] rounded-full font-extralight px-24 !text-white text-xl py-2 gap-1 flex items-center justify-center`}
        >
          {label}
        </a>
      ) : (
        <button></button>
      )}
    </p>
  );
}

export default CTA;
