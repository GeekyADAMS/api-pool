import { clsx } from "clsx";

import { Button } from "antd";
import AppLogo from "../base/AppLogo";

function Header() {
  return (
    <div
      className={clsx(
        "align-row py-4 px-24 bg-dark justify-between items-center",
        ""
      )}
    >
      <AppLogo />

      <Button
        className={clsx("bg-primary text-dark text-lg leading-relaxed", "")}
        type="ghost"
        shape="round"
        icon=""
        size="large"
      >
        Login
      </Button>
    </div>
  );
}

export default Header;
