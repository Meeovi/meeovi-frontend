import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentCreateManyOrder_transactionInput } from "../inputs/Adyen_paymentCreateManyOrder_transactionInput";

@TypeGraphQL.InputType("Adyen_paymentCreateManyOrder_transactionInputEnvelope", {})
export class Adyen_paymentCreateManyOrder_transactionInputEnvelope {
  @TypeGraphQL.Field(_type => [Adyen_paymentCreateManyOrder_transactionInput], {
    nullable: false
  })
  data!: Adyen_paymentCreateManyOrder_transactionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
