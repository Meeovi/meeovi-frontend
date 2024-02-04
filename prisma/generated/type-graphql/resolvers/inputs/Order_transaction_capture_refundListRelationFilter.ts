import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundWhereInput } from "../inputs/Order_transaction_capture_refundWhereInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundListRelationFilter", {})
export class Order_transaction_capture_refundListRelationFilter {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  every?: Order_transaction_capture_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  some?: Order_transaction_capture_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  none?: Order_transaction_capture_refundWhereInput | undefined;
}
