import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope } from "../inputs/Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope";
import { Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionScalarWhereInput } from "../inputs/Order_transaction_capture_refund_positionScalarWhereInput";
import { Order_transaction_capture_refund_positionUpdateManyWithWhereWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionUpdateManyWithWhereWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionWhereUniqueInput } from "../inputs/Order_transaction_capture_refund_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionUpdateManyWithoutOrder_line_itemNestedInput", {})
export class Order_transaction_capture_refund_positionUpdateManyWithoutOrder_line_itemNestedInput {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput], {
    nullable: true
  })
  create?: Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_capture_refund_positionCreateOrConnectWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  upsert?: Order_transaction_capture_refund_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_capture_refund_positionCreateManyOrder_line_itemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereUniqueInput], {
    nullable: true
  })
  set?: Order_transaction_capture_refund_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_transaction_capture_refund_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_transaction_capture_refund_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_capture_refund_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  update?: Order_transaction_capture_refund_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionUpdateManyWithWhereWithoutOrder_line_itemInput], {
    nullable: true
  })
  updateMany?: Order_transaction_capture_refund_positionUpdateManyWithWhereWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_transaction_capture_refund_positionScalarWhereInput[] | undefined;
}
