import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateOrConnectWithoutOrder_line_item_downloadInput } from "../inputs/Order_line_itemCreateOrConnectWithoutOrder_line_item_downloadInput";
import { Order_line_itemCreateWithoutOrder_line_item_downloadInput } from "../inputs/Order_line_itemCreateWithoutOrder_line_item_downloadInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateNestedOneWithoutOrder_line_item_downloadInput", {})
export class Order_line_itemCreateNestedOneWithoutOrder_line_item_downloadInput {
  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutOrder_line_item_downloadInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateOrConnectWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutOrder_line_item_downloadInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput | undefined;
}
