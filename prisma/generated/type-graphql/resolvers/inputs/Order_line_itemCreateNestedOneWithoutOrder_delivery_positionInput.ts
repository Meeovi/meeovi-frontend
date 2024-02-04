import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput } from "../inputs/Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput";
import { Order_line_itemCreateWithoutOrder_delivery_positionInput } from "../inputs/Order_line_itemCreateWithoutOrder_delivery_positionInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateNestedOneWithoutOrder_delivery_positionInput", {})
export class Order_line_itemCreateNestedOneWithoutOrder_delivery_positionInput {
  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput, {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutOrder_delivery_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput | undefined;
}
