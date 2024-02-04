import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutOrderInput } from "../inputs/Order_line_itemCreateWithoutOrderInput";
import { Order_line_itemUpdateWithoutOrderInput } from "../inputs/Order_line_itemUpdateWithoutOrderInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpsertWithWhereUniqueWithoutOrderInput", {})
export class Order_line_itemUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: Order_line_itemUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutOrderInput;
}
