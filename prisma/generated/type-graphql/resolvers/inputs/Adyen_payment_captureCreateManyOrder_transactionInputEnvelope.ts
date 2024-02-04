import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureCreateManyOrder_transactionInput } from "../inputs/Adyen_payment_captureCreateManyOrder_transactionInput";

@TypeGraphQL.InputType("Adyen_payment_captureCreateManyOrder_transactionInputEnvelope", {})
export class Adyen_payment_captureCreateManyOrder_transactionInputEnvelope {
  @TypeGraphQL.Field(_type => [Adyen_payment_captureCreateManyOrder_transactionInput], {
    nullable: false
  })
  data!: Adyen_payment_captureCreateManyOrder_transactionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
