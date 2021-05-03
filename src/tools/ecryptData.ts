import { createHmac, randomBytes } from "crypto";

const SALT_LENGTH = 255;

const HEX = "HEX";

const CRYPT_ALGORITHME = "sha512";

/**
 * @param saltLength 
 * @returns 
 */
export function generateRandomString(size: number) {
  return (
    randomBytes(Math.ceil(size / 2))
      //@ts-ignore
      .toString("HEX")
      .slice(0, size)
  );
}
export function encryptString(password: string, salt: string) {
  const hash = createHmac(CRYPT_ALGORITHME, salt);
  hash.update(password);

  //@ts-ignore
  return hash.digest(HEX);
}
