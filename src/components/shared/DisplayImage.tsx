import classNames from "classnames";
import Image from "next/image";
import React from "react";
function DisplayImage({
  path,
  alt = "chillo tech",
  classes,
  local = false,
  wrapperClasses = "h-56 rounded-t-lg ",
  imageClasses = "",
  positionRelative = true,
  width = 500,
  heigth = 400,
  fill = true,
}: any) {
  return (
    <>
      {path ? (
        <span
          className={classNames(
            wrapperClasses,
            "overflow-hidden block",
            { relative: positionRelative },
            classes
          )}
        >
          <Image
            fill={true}
            unoptimized
            src={`${local ? path : `${process.env.SITE_URL}/assets/${path}`}`}
            alt={alt && alt.length ? alt : "chillo tech"}
            className={classNames(imageClasses)}
          />
        </span>
      ) : null}
    </>
  );
}

export default DisplayImage;
