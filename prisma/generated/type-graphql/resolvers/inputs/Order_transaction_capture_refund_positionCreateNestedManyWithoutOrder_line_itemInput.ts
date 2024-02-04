import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope } from "../inputs/Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope";
import { Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionWhereUniqueInput } from "../inputs/Order_transaction_capture_refund_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_line_itemInput", {})
export class Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput], {
    nullable: true
  })
  create?: Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_capture_refund_positionWhereUniqueInput[] | undefined;
}
