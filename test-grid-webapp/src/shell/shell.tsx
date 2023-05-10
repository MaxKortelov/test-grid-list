import React from "react";
import { BrightnessHighFill, MoonFill, Outlet } from "react-bootstrap-icons";
import styles from "./shell.module.scss";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import useSettingsSelectors from "../store/selectors/settings";
import { THEME } from "../models/store/settings";
import { useActions } from "../hooks/useActions";

function Shell() {
  const { theme } = useSettingsSelectors();
  const { changeTheme } = useActions();

  const handleChangeTheme = (): void => {
    const themes = Object.keys(THEME).map((el) => el.toLowerCase());
    const nextTheme = themes[themes.indexOf(theme) + 1] as THEME;
    nextTheme ? changeTheme(nextTheme) : changeTheme(THEME.LIGHT);
  };

  return (
    <div className={classNames("d-flex justify-content-center align-items-center flex-column full-screen")}>
      <div className={classNames("d-flex justify-content-end align-items-center w-100 px-4", styles.header)}>
        <Button
          className="d-flex justify-content-center align-items-center h-50"
          variant={theme}
          onClick={handleChangeTheme}
        >
          {theme === THEME.DARK ? <MoonFill /> : <BrightnessHighFill />}
        </Button>
      </div>
      <div className={classNames("w-100 ", styles.main)}>
        <Outlet />
      </div>
      <div className={classNames("w-100", styles.footer)}></div>
    </div>
  );
}

export default Shell;
