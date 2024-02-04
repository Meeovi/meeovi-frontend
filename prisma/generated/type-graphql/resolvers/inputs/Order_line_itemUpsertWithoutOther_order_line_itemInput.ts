import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutOther_order_line_itemInput } from "../inputs/Order_line_itemCreateWithoutOther_order_line_itemInput";
import { Order_line_itemUpdateWithoutOther_order_line_itemInput } from "../inputs/Order_line_itemUpdateWithoutOther_order_line_itemInput";
import { Order_line_itemWhereInput } from "../inputs/Order_line_itemWhereInput";

@TypeGraphQL.InputType("Order_line_itemUpsertWithoutOther_order_line_itemInput", {})
export class Order_line_itemUpsertWithoutOther_order_line_itemInput {
  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutOther_order_line_itemInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateWithoutOther_order_line_itemInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOther_order_line_itemInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutOther_order_line_itemInput;

  @TypeGraphQL.Field(_type => Order_line_itemWhereInput, {
    nullable: true
  })
  where?: Order_line_itemWhereInput | undefined;
}
