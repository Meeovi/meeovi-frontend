import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInputEnvelope } from "../inputs/Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInputEnvelope";
import { Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_capture_refund_positionCreateWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_capture_refund_positionCreateWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_capture_refund_positionWhereUniqueInput } from "../inputs/Order_transaction_capture_refund_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_transaction_capture_refundInput", {})
export class Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_transaction_capture_refundInput {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateWithoutOrder_transaction_capture_refundInput], {
    nullable: true
  })
  create?: Order_transaction_capture_refund_positionCreateWithoutOrder_transaction_capture_refundInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_transaction_capture_refundInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_transaction_capture_refundInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_capture_refund_positionCreateManyOrder_transaction_capture_refundInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_capture_refund_positionWhereUniqueInput[] | undefined;
}
