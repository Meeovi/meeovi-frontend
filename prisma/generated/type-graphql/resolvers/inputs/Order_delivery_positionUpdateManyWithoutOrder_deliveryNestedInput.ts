import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateManyOrder_deliveryInputEnvelope } from "../inputs/Order_delivery_positionCreateManyOrder_deliveryInputEnvelope";
import { Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput";
import { Order_delivery_positionCreateWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionCreateWithoutOrder_deliveryInput";
import { Order_delivery_positionScalarWhereInput } from "../inputs/Order_delivery_positionScalarWhereInput";
import { Order_delivery_positionUpdateManyWithWhereWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionUpdateManyWithWhereWithoutOrder_deliveryInput";
import { Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_deliveryInput";
import { Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_deliveryInput";
import { Order_delivery_positionWhereUniqueInput } from "../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionUpdateManyWithoutOrder_deliveryNestedInput", {})
export class Order_delivery_positionUpdateManyWithoutOrder_deliveryNestedInput {
  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateWithoutOrder_deliveryInput], {
    nullable: true
  })
  create?: Order_delivery_positionCreateWithoutOrder_deliveryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput], {
    nullable: true
  })
  connectOrCreate?: Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_deliveryInput], {
    nullable: true
  })
  upsert?: Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_deliveryInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateManyOrder_deliveryInputEnvelope, {
    nullable: true
  })
  createMany?: Order_delivery_positionCreateManyOrder_deliveryInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_deliveryInput], {
    nullable: true
  })
  update?: Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_deliveryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionUpdateManyWithWhereWithoutOrder_deliveryInput], {
    nullable: true
  })
  updateMany?: Order_delivery_positionUpdateManyWithWhereWithoutOrder_deliveryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_delivery_positionScalarWhereInput[] | undefined;
}
