import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionCreateWithoutOrder_line_itemInput";
import { Order_delivery_positionUpdateWithoutOrder_line_itemInput } from "../inputs/Order_delivery_positionUpdateWithoutOrder_line_itemInput";
import { Order_delivery_positionWhereUniqueInput } from "../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput", {})
export class Order_delivery_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_delivery_positionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  update!: Order_delivery_positionUpdateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: Order_delivery_positionCreateWithoutOrder_line_itemInput;
}
