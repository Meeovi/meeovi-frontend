import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCreateWithoutCustom_field_setInput } from "../inputs/Product_custom_field_setCreateWithoutCustom_field_setInput";
import { Product_custom_field_setUpdateWithoutCustom_field_setInput } from "../inputs/Product_custom_field_setUpdateWithoutCustom_field_setInput";
import { Product_custom_field_setWhereUniqueInput } from "../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_custom_field_setUpsertWithWhereUniqueWithoutCustom_field_setInput", {})
export class Product_custom_field_setUpsertWithWhereUniqueWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_custom_field_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_custom_field_setUpdateWithoutCustom_field_setInput, {
    nullable: false
  })
  update!: Product_custom_field_setUpdateWithoutCustom_field_setInput;

  @TypeGraphQL.Field(_type => Product_custom_field_setCreateWithoutCustom_field_setInput, {
    nullable: false
  })
  create!: Product_custom_field_setCreateWithoutCustom_field_setInput;
}
