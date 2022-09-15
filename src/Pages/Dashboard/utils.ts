import {
  DashboardMenu,
  TDashboardMenu,
  THandleMenu,
  THandleModal,
  TModal,
} from "./types";
import React, { ReactNode } from "react";

export const handleMenu = (
  setMenu: React.Dispatch<React.SetStateAction<TDashboardMenu>>
): THandleMenu => {
  const toggleMenu = () => {
    setMenu((e) => ({ ...e, status: !e.status }));
  };

  const switchMenu = (menu: DashboardMenu) => {
    setMenu((e) => ({ ...e, currentMenu: menu }));
  };

  return {
    toggleMenu,
    switchMenu,
  };
};

export const handleModal = (
  setModal: React.Dispatch<React.SetStateAction<TModal>>
): THandleModal => {
  const openModal = (content: ReactNode) => {
    setModal({ open: true, content });
  };

  const closeModal = () => {
    setModal((e) => ({ ...e, open: false }));
  };

  return { openModal, closeModal };
};
