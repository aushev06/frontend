import React, { useContext } from 'react';
import {Color} from "@material-ui/lab/Alert";

export type AlertContextProps = {
  alertInfo: { text: React.ReactNode; status: Color; opened: boolean };
  openAlert: (text: React.ReactNode, status?: string) => void;
  closeAlert: () => void;
};

export const AlertContext = React.createContext({} as AlertContextProps);

export const useAlert = (): AlertContextProps => {
  return useContext(AlertContext);
};
