import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInputEnvelope", {})
export class Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInput], {
    nullable: false
  })
  data!: Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
