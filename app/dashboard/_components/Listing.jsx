"use client";
import { UserDetailsContext } from "@/app/_context/UserDetailsContext";
import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import EmpthList from "./EmpthList";
import Link from "next/link";

const Listing = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const [userRoomList, setUserRoomList] = useState([]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Hey! {userDetails?.name}</h2>
        <Link href="/dashboard/create-new">
        <Button  className="bg-primary hover:bg-primary/90  text-white rounded-xl ">
          + Redesign Room
        </Button>
        </Link>
      </div>
      {/* empth list */}
      {userRoomList.length === 0 ? (
        <EmpthList />
      ) : (
        // lists
       <div>
        </div>
      )}
    </div>
  );
};

export default Listing;
