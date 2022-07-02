import { LinearProgress } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useClient } from "react-supabase";
import LoginScreen from "../../Auth/LoginScreen";
import ShortcutList from "../../Shortcut/ShortcutScreen";

const Root: React.FC = () => {
  const supabaseClient = useClient();
  const user = supabaseClient.auth.user();

  return (
    <>
      {user && (
        <LinearProgress color="success" variant="determinate" value={100} />
      )}
      <Routes>
        <Route path="/" element={<ShortcutList />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

export default Root;
