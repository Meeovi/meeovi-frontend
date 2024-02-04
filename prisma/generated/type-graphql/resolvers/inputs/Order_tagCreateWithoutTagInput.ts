import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutOrder_tagInput } from "../inputs/OrderCreateNestedOneWithoutOrder_tagInput";

@TypeGraphQL.InputType("Order_tagCreateWithoutTagInput", {})
export class Order_tagCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrder_tagInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrder_tagInput;
}
