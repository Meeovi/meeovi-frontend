import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateManyOrder_transactionInput } from "../inputs/Order_transaction_captureCreateManyOrder_transactionInput";

@TypeGraphQL.InputType("Order_transaction_captureCreateManyOrder_transactionInputEnvelope", {})
export class Order_transaction_captureCreateManyOrder_transactionInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateManyOrder_transactionInput], {
    nullable: false
  })
  data!: Order_transaction_captureCreateManyOrder_transactionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
