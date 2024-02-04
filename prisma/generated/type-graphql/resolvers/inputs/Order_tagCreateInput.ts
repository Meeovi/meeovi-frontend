import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutOrder_tagInput } from "../inputs/OrderCreateNestedOneWithoutOrder_tagInput";
import { TagCreateNestedOneWithoutOrder_tagInput } from "../inputs/TagCreateNestedOneWithoutOrder_tagInput";

@TypeGraphQL.InputType("Order_tagCreateInput", {})
export class Order_tagCreateInput {
  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrder_tagInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrder_tagInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutOrder_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutOrder_tagInput;
}
