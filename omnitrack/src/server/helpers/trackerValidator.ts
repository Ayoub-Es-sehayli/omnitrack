import { z } from "zod";

export const TrackerSchema = z.object({
  name: z.string({ message: "Le nom du tracker est obligatoire" }).min(3, "Le nom doit contenir 3+ characteres"),
  speed: z.coerce.number().default(4.0).optional(),
  longtitude: z.number().nullable(),
  latitude: z.number().nullable(),
  imei: z.coerce.number({ message: "L'imei est obligatoire" }),
});

export type TrackerType = z.infer<typeof TrackerSchema>;
