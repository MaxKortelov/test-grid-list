import React, { ReactElement } from "react";
import { BoxArrowLeft, BrightnessHighFill, MoonFill } from "react-bootstrap-icons";
import styles from "./shell.module.scss";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import useSettingsSelectors from "../store/selectors/settings";
import { THEME } from "../models/store/settings";
import { useActions } from "../hooks/useActions";
import { Outlet, useNavigate } from "react-router-dom";
import { removeStorageItem } from "../services/localStorageService";
import { LOGIN_ROUTE } from "../models/routes";

function ShellWrap({ children }: { children: ReactElement }) {
  const { theme } = useSettingsSelectors();
  const { changeTheme } = useActions();
  const navigate = useNavigate();

  const handleChangeTheme = (): void => {
    const themes = Object.keys(THEME).map((el) => el.toLowerCase());
    const nextTheme = themes[themes.indexOf(theme) + 1] as THEME;
    nextTheme ? changeTheme(nextTheme) : changeTheme(THEME.LIGHT);
  };

  const handleExitProfile = () => {
    removeStorageItem("token");
    navigate(LOGIN_ROUTE);
    window.location.reload();
  };

  return (
    <div
      className={classNames("d-flex justify-content-start align-items-center flex-column full-screen overflow-hidden")}
    >
      <div className={classNames("d-flex justify-content-end align-items-center w-100 px-4 gap-3", styles.header)}>
        <Button
          className="d-flex justify-content-center align-items-center h-50"
          variant={theme}
          onClick={handleChangeTheme}
        >
          {theme === THEME.DARK ? <MoonFill /> : <BrightnessHighFill />}
        </Button>
        <Button
          className="d-flex justify-content-center align-items-center h-50"
          variant={theme}
          onClick={handleExitProfile}
        >
          <BoxArrowLeft />
        </Button>
      </div>
      <div className={classNames("w-100 ", styles.main)}>{children}</div>
      <div className={classNames("d-flex  justify-content-end align-items-center w-100 px-4", styles.footer)}>
        Created by Max Kortelov
      </div>
    </div>
  );
}

function Shell() {
  return (
    <ShellWrap>
      <Outlet />
    </ShellWrap>
  );
}

export default Shell;
