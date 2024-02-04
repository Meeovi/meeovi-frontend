import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Property_group_optionCreateNestedOneWithoutProduct_optionInput } from "../inputs/Property_group_optionCreateNestedOneWithoutProduct_optionInput";

@TypeGraphQL.InputType("Product_optionCreateWithoutProductInput", {})
export class Product_optionCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => Property_group_optionCreateNestedOneWithoutProduct_optionInput, {
    nullable: false
  })
  property_group_option!: Property_group_optionCreateNestedOneWithoutProduct_optionInput;
}
