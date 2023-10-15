import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const jwtGenerator = async ({ payload }) => {
  const alg = "HS256";
  return await new SignJWT({ payload })
    .setProtectedHeader({ alg })
    .setExpirationTime(process.env.NEXT_PUBLIC_JWT_EXPIRE)
    .setIssuedAt()
    .sign(new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET));
};

const jwtVerifier = async (token) => {
  try {
    const verify = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
    );
    if (verify.payload.payload.role === "admin") {
      return verify;
    }
  } catch (error) {
    console.log(error);
    cookies().delete("token");
  }
};

export { jwtGenerator, jwtVerifier };
