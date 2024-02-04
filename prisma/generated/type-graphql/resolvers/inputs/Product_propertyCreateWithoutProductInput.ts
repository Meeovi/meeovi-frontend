import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Property_group_optionCreateNestedOneWithoutProduct_propertyInput } from "../inputs/Property_group_optionCreateNestedOneWithoutProduct_propertyInput";

@TypeGraphQL.InputType("Product_propertyCreateWithoutProductInput", {})
export class Product_propertyCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => Property_group_optionCreateNestedOneWithoutProduct_propertyInput, {
    nullable: false
  })
  property_group_option!: Property_group_optionCreateNestedOneWithoutProduct_propertyInput;
}
