import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionWhereInput } from "../inputs/Order_transaction_capture_refund_positionWhereInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionListRelationFilter", {})
export class Order_transaction_capture_refund_positionListRelationFilter {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereInput, {
    nullable: true
  })
  every?: Order_transaction_capture_refund_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereInput, {
    nullable: true
  })
  some?: Order_transaction_capture_refund_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereInput, {
    nullable: true
  })
  none?: Order_transaction_capture_refund_positionWhereInput | undefined;
}
