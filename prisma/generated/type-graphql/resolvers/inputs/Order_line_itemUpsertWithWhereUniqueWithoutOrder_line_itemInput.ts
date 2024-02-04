import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutOrder_line_itemInput } from "../inputs/Order_line_itemCreateWithoutOrder_line_itemInput";
import { Order_line_itemUpdateWithoutOrder_line_itemInput } from "../inputs/Order_line_itemUpdateWithoutOrder_line_itemInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpsertWithWhereUniqueWithoutOrder_line_itemInput", {})
export class Order_line_itemUpsertWithWhereUniqueWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutOrder_line_itemInput;
}
