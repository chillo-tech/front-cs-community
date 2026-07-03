import React from "react";

function Debug({ data }: any) {
  return (
    <div className="bg-gray-200 p-4">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Debug;
