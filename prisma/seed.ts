import { PrismaClient } from "@prisma/client";
import Chance from "chance";
import bcrypt from "bcrypt";
import { stringify } from "querystring";

const client = new PrismaClient();
var chance = new Chance()

const seed = async () => {
    for(let i= 0; i < 1000; i++){
        const total: number = chance.integer()
        await client.transaction.create({
            data: {
                reference: chance.guid(),
                billerReference:chance.guid(),
                payloadHash: bcrypt.hashSync(chance.sentence(), 10),
                userId: chance.guid(),//
                userType: chance.gender(),
                amount: total,
                charge: 0,
                total: total,
                status: ():string => {
                    if ( i% 3 == 0 ){
                        return "pending"
                    }
                }

            }
        })
    }
}