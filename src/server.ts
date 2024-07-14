import cors from "@fastify/cors";
import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmParticipants } from "./routes/confirm-participant";
import { confirmTrip } from "./routes/confirm-trip";
import { createActivity } from "./routes/create-activity";
import { createLink } from "./routes/create-link";
import { createTrip } from "./routes/create-trip";
import { getActivites } from "./routes/get-activities";
import { getLinks } from "./routes/get-links";
import { getParticipants } from "./routes/get-participants";
import { createInvite } from "./routes/create-invite";
import { updateTrip } from "./routes/update-trip";
import { getTripDetails } from "./routes/get-trip-details";
import { getParticipant } from "./routes/get-participant";

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip)
app.register(confirmTrip)
app.register(updateTrip)
app.register(getTripDetails)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivites)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(getParticipant)
app.register(createInvite)

const port = process.env.PORT || 3333
app.listen({ port: Number(port) }).then(() => {
  console.log(`Server is running on port ${port}`)
})