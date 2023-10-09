import React from "react";
import NotAuthorized from "../components/NotAuthorized";

export default function GuardedRoutes({ isAccessable, OnSucess }) {
  return isAccessable ? <OnSucess /> : <NotAuthorized />;
}
