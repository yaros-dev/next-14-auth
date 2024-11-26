"use server";
import React, { FC } from "react";
import { auth } from "@/auth";
import { logout } from "@/actions/logout";

interface SettingsProps {}

const Settings: FC<SettingsProps> = async ({}) => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form action={logout}>
        <button type="submit" className="bg-yellow-500">
          log out
        </button>
      </form>
    </div>
  );
};

export default Settings;
