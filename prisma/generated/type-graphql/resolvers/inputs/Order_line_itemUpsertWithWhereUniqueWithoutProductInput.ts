import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutProductInput } from "../inputs/Order_line_itemCreateWithoutProductInput";
import { Order_line_itemUpdateWithoutProductInput } from "../inputs/Order_line_itemUpdateWithoutProductInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpsertWithWhereUniqueWithoutProductInput", {})
export class Order_line_itemUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutProductInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutProductInput;
}
