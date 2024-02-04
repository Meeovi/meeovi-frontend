import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateManyOrder_line_itemInputEnvelope } from "../inputs/Order_delivery_positionCreateManyOrder_line_itemInputEnvelope";
import { Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput";
import { Order_delivery_positionCreateWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionCreateWithoutOrder_line_itemInput";
import { Order_delivery_positionScalarWhereInput } from "../inputs/Order_delivery_positionScalarWhereInput";
import { Order_delivery_positionUpdateManyWithWhereWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionUpdateManyWithWhereWithoutOrder_line_itemInput";
import { Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_delivery_positionWhereUniqueInput } from "../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionUpdateManyWithoutOrder_line_itemNestedInput", {})
export class Order_delivery_positionUpdateManyWithoutOrder_line_itemNestedInput {
  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateWithoutOrder_line_itemInput], {
    nullable: true
  })
  create?: Order_delivery_positionCreateWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput], {
    nullable: true
  })
  connectOrCreate?: Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  upsert?: Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateManyOrder_line_itemInputEnvelope, {
    nullable: true
  })
  createMany?: Order_delivery_positionCreateManyOrder_line_itemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereUniqueInput], {
    nullable: true
  })
  set?: Order_delivery_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_delivery_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_delivery_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_delivery_positionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  update?: Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionUpdateManyWithWhereWithoutOrder_line_itemInput], {
    nullable: true
  })
  updateMany?: Order_delivery_positionUpdateManyWithWhereWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_delivery_positionScalarWhereInput[] | undefined;
}
