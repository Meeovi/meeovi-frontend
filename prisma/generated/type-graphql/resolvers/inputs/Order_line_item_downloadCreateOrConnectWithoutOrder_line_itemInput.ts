import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadCreateWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadCreateWithoutOrder_line_itemInput";
import { Order_line_item_downloadWhereUniqueInput } from "../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput", {})
export class Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => Order_line_item_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_item_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: Order_line_item_downloadCreateWithoutOrder_line_itemInput;
}
