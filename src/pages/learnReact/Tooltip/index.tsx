import { FiSettings, FiSmartphone } from "react-icons/fi";

import "./style.scss";
export default function TooltipPage() {
  return (
    <div>
      <span className="tooltip" data-tooltip="设置" data-postion="left">
        <FiSettings size={28} />
      </span>
      <span className="tooltip" data-tooltip="设置" data-postion="left">
        <FiSettings size={28} />
      </span>
      <span className="tooltip" data-tooltip="设置" data-postion="left">
        <FiSmartphone size={28} />
      </span>

      <span className="tooltip" data-tooltip="设置" data-postion="left">
        <FiSettings size={28} />
      </span>
      <Tooltip>
        <h1>ddd</h1>
      </Tooltip>
    </div>
  );
}

function Tooltip({ children }: { children: JSX.Element }) {
  return <div className="tooltip" data-tooltip="设置">{children}</div>;
}
