import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemUpdateWithoutOrderInput } from "../inputs/Order_line_itemUpdateWithoutOrderInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpdateWithWhereUniqueWithoutOrderInput", {})
export class Order_line_itemUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: Order_line_itemUpdateWithoutOrderInput;
}
