import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCreateWithoutProductInput } from "../inputs/Product_custom_field_setCreateWithoutProductInput";
import { Product_custom_field_setWhereUniqueInput } from "../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_custom_field_setCreateOrConnectWithoutProductInput", {})
export class Product_custom_field_setCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_custom_field_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_custom_field_setCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_custom_field_setCreateWithoutProductInput;
}
