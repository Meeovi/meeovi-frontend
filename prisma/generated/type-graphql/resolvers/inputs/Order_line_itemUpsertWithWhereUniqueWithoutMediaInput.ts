import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutMediaInput } from "../inputs/Order_line_itemCreateWithoutMediaInput";
import { Order_line_itemUpdateWithoutMediaInput } from "../inputs/Order_line_itemUpdateWithoutMediaInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpsertWithWhereUniqueWithoutMediaInput", {})
export class Order_line_itemUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutMediaInput;
}
