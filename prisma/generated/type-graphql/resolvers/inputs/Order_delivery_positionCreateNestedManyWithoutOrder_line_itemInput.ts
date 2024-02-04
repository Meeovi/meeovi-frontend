import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateManyOrder_line_itemInputEnvelope } from "../inputs/Order_delivery_positionCreateManyOrder_line_itemInputEnvelope";
import { Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput";
import { Order_delivery_positionCreateWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionCreateWithoutOrder_line_itemInput";
import { Order_delivery_positionWhereUniqueInput } from "../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionCreateNestedManyWithoutOrder_line_itemInput", {})
export class Order_delivery_positionCreateNestedManyWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateWithoutOrder_line_itemInput], {
    nullable: true
  })
  create?: Order_delivery_positionCreateWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput], {
    nullable: true
  })
  connectOrCreate?: Order_delivery_positionCreateOrConnectWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateManyOrder_line_itemInputEnvelope, {
    nullable: true
  })
  createMany?: Order_delivery_positionCreateManyOrder_line_itemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_delivery_positionWhereUniqueInput[] | undefined;
}
