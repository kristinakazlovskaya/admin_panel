import React from "react";

const Column: React.FC<{
  label: string;
  dataKey: string;
  render?: (value: string, record?: Record<string, unknown>) => React.ReactNode;
}> = () => {
  return null;
};

export default Column;
