import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundCreateManyOrder_transactionInput } from "../inputs/Adyen_refundCreateManyOrder_transactionInput";

@TypeGraphQL.InputType("Adyen_refundCreateManyOrder_transactionInputEnvelope", {})
export class Adyen_refundCreateManyOrder_transactionInputEnvelope {
  @TypeGraphQL.Field(_type => [Adyen_refundCreateManyOrder_transactionInput], {
    nullable: false
  })
  data!: Adyen_refundCreateManyOrder_transactionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
