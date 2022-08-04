"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const upgrade_kyc_level_3_1 = require("../../../services/customer/upgrade-kyc-level-3");
const tsyringe_1 = require("tsyringe");
class CustomerController {
    constructor() {
        this.metaMapWebHook = (request, res) => __awaiter(this, void 0, void 0, function* () {
            const upgradeCustomerlevel = tsyringe_1.container.resolve(upgrade_kyc_level_3_1.UpgradeCustomerKYCToLevel3);
            yield upgradeCustomerlevel.execute({
                userId: 1,
                status: request.body.status,
                eventName: request.body.eventName,
            });
            return res.send("Successfull");
        });
    }
}
exports.CustomerController = CustomerController;
