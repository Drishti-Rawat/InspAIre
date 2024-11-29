import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {user} = await req.json();
    try {
        // if user already exit ?
        const userInfo = await db.select().from(Users)
        .where(eq(Users.email,user.primaryEmailAddress.emailAddress));
        console.log("user exist ",userInfo)

        // if not create user
        if(userInfo?.length == 0){
            const savedUser = await db.insert(Users).values({
                name:user?.fullName,
                email:user?.primaryEmailAddress?.emailAddress,
                imageUrl:user?.imageUrl
            }).returning({Users});

            return NextResponse.json({result:savedUser[0]})
        }

        return NextResponse.json({result:userInfo})

    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error})
    }

  }