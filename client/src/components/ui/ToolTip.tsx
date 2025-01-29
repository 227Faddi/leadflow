import Tippy from "@tippyjs/react";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  text: string;
};

const ToolTip = ({ children, text }: Props) => {
  return (
    <Tippy
      content={text}
      delay={[300, 0]}
      arrow={true}
      animation={"perspective"}
      className="bg-gray-50 text-sm px-3 py-2 rounded-lg shadow-md border border-slate-300 dark:text-white dark:bg-gray-700 dark:border-slate-700"
    >
      {children}
    </Tippy>
  );
};

export default ToolTip;
