import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyUpdateWithoutProperty_group_optionInput } from "../inputs/Product_propertyUpdateWithoutProperty_group_optionInput";
import { Product_propertyWhereUniqueInput } from "../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.InputType("Product_propertyUpdateWithWhereUniqueWithoutProperty_group_optionInput", {})
export class Product_propertyUpdateWithWhereUniqueWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => Product_propertyWhereUniqueInput, {
    nullable: false
  })
  where!: Product_propertyWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_propertyUpdateWithoutProperty_group_optionInput, {
    nullable: false
  })
  data!: Product_propertyUpdateWithoutProperty_group_optionInput;
}
