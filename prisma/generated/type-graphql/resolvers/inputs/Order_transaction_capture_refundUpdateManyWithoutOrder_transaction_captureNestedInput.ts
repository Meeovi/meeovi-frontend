import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundCreateManyOrder_transaction_captureInputEnvelope } from "../inputs/Order_transaction_capture_refundCreateManyOrder_transaction_captureInputEnvelope";
import { Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_captureInput";
import { Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput";
import { Order_transaction_capture_refundScalarWhereInput } from "../inputs/Order_transaction_capture_refundScalarWhereInput";
import { Order_transaction_capture_refundUpdateManyWithWhereWithoutOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundUpdateManyWithWhereWithoutOrder_transaction_captureInput";
import { Order_transaction_capture_refundUpdateWithWhereUniqueWithoutOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundUpdateWithWhereUniqueWithoutOrder_transaction_captureInput";
import { Order_transaction_capture_refundUpsertWithWhereUniqueWithoutOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundUpsertWithWhereUniqueWithoutOrder_transaction_captureInput";
import { Order_transaction_capture_refundWhereUniqueInput } from "../inputs/Order_transaction_capture_refundWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundUpdateManyWithoutOrder_transaction_captureNestedInput", {})
export class Order_transaction_capture_refundUpdateManyWithoutOrder_transaction_captureNestedInput {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput], {
    nullable: true
  })
  create?: Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_captureInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_captureInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundUpsertWithWhereUniqueWithoutOrder_transaction_captureInput], {
    nullable: true
  })
  upsert?: Order_transaction_capture_refundUpsertWithWhereUniqueWithoutOrder_transaction_captureInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateManyOrder_transaction_captureInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_capture_refundCreateManyOrder_transaction_captureInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundWhereUniqueInput], {
    nullable: true
  })
  set?: Order_transaction_capture_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_transaction_capture_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_transaction_capture_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_capture_refundWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundUpdateWithWhereUniqueWithoutOrder_transaction_captureInput], {
    nullable: true
  })
  update?: Order_transaction_capture_refundUpdateWithWhereUniqueWithoutOrder_transaction_captureInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundUpdateManyWithWhereWithoutOrder_transaction_captureInput], {
    nullable: true
  })
  updateMany?: Order_transaction_capture_refundUpdateManyWithWhereWithoutOrder_transaction_captureInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_transaction_capture_refundScalarWhereInput[] | undefined;
}
