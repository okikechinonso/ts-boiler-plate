import { Type } from "@sinclair/typebox";

export const upgradeCustomerKYCToLevel3Schema = Type.Strict(
    Type.Object({
        Body: Type.Object({
            status: Type.Optional(Type.String()),
            eventName: Type.String(),
        }),
    }),
);