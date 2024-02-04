import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutOrder_tagInput } from "../inputs/TagCreateNestedOneWithoutOrder_tagInput";

@TypeGraphQL.InputType("Order_tagCreateWithoutOrderInput", {})
export class Order_tagCreateWithoutOrderInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutOrder_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutOrder_tagInput;
}
