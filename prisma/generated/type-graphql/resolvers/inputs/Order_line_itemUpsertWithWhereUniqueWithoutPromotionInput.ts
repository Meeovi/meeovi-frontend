import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutPromotionInput } from "../inputs/Order_line_itemCreateWithoutPromotionInput";
import { Order_line_itemUpdateWithoutPromotionInput } from "../inputs/Order_line_itemUpdateWithoutPromotionInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpsertWithWhereUniqueWithoutPromotionInput", {})
export class Order_line_itemUpsertWithWhereUniqueWithoutPromotionInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutPromotionInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateWithoutPromotionInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutPromotionInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutPromotionInput;
}
