import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutOrder_line_item_downloadInput } from "../inputs/Order_line_itemCreateWithoutOrder_line_item_downloadInput";
import { Order_line_itemUpdateWithoutOrder_line_item_downloadInput } from "../inputs/Order_line_itemUpdateWithoutOrder_line_item_downloadInput";
import { Order_line_itemWhereInput } from "../inputs/Order_line_itemWhereInput";

@TypeGraphQL.InputType("Order_line_itemUpsertWithoutOrder_line_item_downloadInput", {})
export class Order_line_itemUpsertWithoutOrder_line_item_downloadInput {
  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateWithoutOrder_line_item_downloadInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutOrder_line_item_downloadInput;

  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  where?: Order_line_itemWhereInput | undefined;
}
