import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundCreateManyOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundCreateManyOrder_transaction_captureInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundCreateManyOrder_transaction_captureInputEnvelope", {})
export class Order_transaction_capture_refundCreateManyOrder_transaction_captureInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundCreateManyOrder_transaction_captureInput], {
    nullable: false
  })
  data!: Order_transaction_capture_refundCreateManyOrder_transaction_captureInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
