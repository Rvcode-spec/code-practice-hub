"use client"

import { db } from '@/configs/db';
import Users from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import { eq } from 'drizzle-orm'; // ✅ Correct import

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      isNewUser();
    }
  }, [user]);

  const isNewUser = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) {
      console.log("Email not found");
      return;
    }

    console.log("Checking user with email:", email);

    const result = await db.select().from(Users).where(eq(Users.email, email));

    console.log("User DB result:", result);

    if (!result[0]) {
      await db.insert(Users).values({
        name: user.fullName,
        email: email,
        imageUrl: user?.imageUrl
      });
      console.log("New user inserted");
    }
  };

  return <div>{children}</div>;
}

export default Provider;
