import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundWhereInput } from "../inputs/Order_transaction_capture_refundWhereInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundRelationFilter", {})
export class Order_transaction_capture_refundRelationFilter {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  is?: Order_transaction_capture_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  isNot?: Order_transaction_capture_refundWhereInput | undefined;
}
