import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateNestedOneWithoutProduct_custom_field_setInput } from "../inputs/Custom_field_setCreateNestedOneWithoutProduct_custom_field_setInput";

@TypeGraphQL.InputType("Product_custom_field_setCreateWithoutProductInput", {})
export class Product_custom_field_setCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => Custom_field_setCreateNestedOneWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  custom_field_set!: Custom_field_setCreateNestedOneWithoutProduct_custom_field_setInput;
}
