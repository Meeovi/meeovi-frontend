import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateManyOrder_deliveryInputEnvelope } from "../inputs/Order_delivery_positionCreateManyOrder_deliveryInputEnvelope";
import { Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput";
import { Order_delivery_positionCreateWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionCreateWithoutOrder_deliveryInput";
import { Order_delivery_positionWhereUniqueInput } from "../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionCreateNestedManyWithoutOrder_deliveryInput", {})
export class Order_delivery_positionCreateNestedManyWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateWithoutOrder_deliveryInput], {
    nullable: true
  })
  create?: Order_delivery_positionCreateWithoutOrder_deliveryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput], {
    nullable: true
  })
  connectOrCreate?: Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateManyOrder_deliveryInputEnvelope, {
    nullable: true
  })
  createMany?: Order_delivery_positionCreateManyOrder_deliveryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_delivery_positionWhereUniqueInput[] | undefined;
}
