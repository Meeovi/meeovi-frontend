import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Promotion } from "../models/Promotion";

@TypeGraphQL.ObjectType("Promotion_persona_customer", {})
export class Promotion_persona_customer {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  promotion_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_id!: Buffer;

  customer?: Customer;

  promotion?: Promotion;
}
