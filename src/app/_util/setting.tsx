import { cookies, headers } from "next/headers";

export async function getOrigin() {
  const h = await headers();
  const proto = h.get("x-forwarded-proto") || "http";
  const host = h.get("host");
  return `${proto}://${host}`;
}



export async function  getCookieCustom(name: string) {
  const cookie = await cookies();

  return cookie.get(name)?.value;
}

export async function setCookieCustom(name: string, value: string, day:number = 30) {
  const cookie = await cookies();
  const maxAge = day * 24 * 60 * 60;
  cookie.set(name, value, {
    httpOnly: true,
    path: "/",
    maxAge,
  });
}

export async function deleteCookie(name: string) {
  (await cookies()).delete(name);
}