import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_optionInput } from "../inputs/ProductCreateNestedOneWithoutProduct_optionInput";
import { Property_group_optionCreateNestedOneWithoutProduct_optionInput } from "../inputs/Property_group_optionCreateNestedOneWithoutProduct_optionInput";

@TypeGraphQL.InputType("Product_optionCreateInput", {})
export class Product_optionCreateInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_optionInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_optionInput;

  @TypeGraphQL.Field(_type => Property_group_optionCreateNestedOneWithoutProduct_optionInput, {
    nullable: false
  })
  property_group_option!: Property_group_optionCreateNestedOneWithoutProduct_optionInput;
}
