import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutOrder_line_itemInput } from "../inputs/OrderUpdateWithoutOrder_line_itemInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutOrder_line_itemInput", {})
export class OrderUpdateToOneWithWhereWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutOrder_line_itemInput;
}
