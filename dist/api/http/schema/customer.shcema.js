"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpSchema = exports.upgradeCustomerKYCToLevel3Schema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.upgradeCustomerKYCToLevel3Schema = typebox_1.Type.Strict(typebox_1.Type.Object({
    Body: typebox_1.Type.Object({
        status: typebox_1.Type.Optional(typebox_1.Type.String()),
        eventName: typebox_1.Type.String(),
    }),
}));
exports.SignUpSchema = typebox_1.Type.Object({
    Body: typebox_1.Type.Object({
        name: typebox_1.Type.String(),
    }),
});
