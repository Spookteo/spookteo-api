import { createHmac, randomBytes } from "crypto";

const SALT_LENGTH = 255;

const HEX = "HEX";

const CRYPT_ALGORITHME = "sha512";

export function generateSalt(saltLength: number) {
  return (
    randomBytes(Math.ceil(saltLength / 2))
      //@ts-ignore
      .toString("HEX")
      .slice(0, saltLength)
  );
}
export function encryptString(password: string, salt: string) {
  const hash = createHmac(CRYPT_ALGORITHME, salt);
  hash.update(password);

  //@ts-ignore
  return hash.digest(HEX);
}
