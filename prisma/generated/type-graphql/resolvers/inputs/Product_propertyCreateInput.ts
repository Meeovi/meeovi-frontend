import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_propertyInput } from "../inputs/ProductCreateNestedOneWithoutProduct_propertyInput";
import { Property_group_optionCreateNestedOneWithoutProduct_propertyInput } from "../inputs/Property_group_optionCreateNestedOneWithoutProduct_propertyInput";

@TypeGraphQL.InputType("Product_propertyCreateInput", {})
export class Product_propertyCreateInput {
  @TypeGraphQL.Field(_type => Property_group_optionCreateNestedOneWithoutProduct_propertyInput, {
    nullable: false
  })
  property_group_option!: Property_group_optionCreateNestedOneWithoutProduct_propertyInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_propertyInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_propertyInput;
}
