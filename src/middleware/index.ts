import { sequence } from "astro:middleware";
import { validation } from "./validation";

export const onRequest = sequence(validation);
