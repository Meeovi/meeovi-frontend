import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setWhereInput } from "../inputs/Product_custom_field_setWhereInput";

@TypeGraphQL.InputType("Product_custom_field_setListRelationFilter", {})
export class Product_custom_field_setListRelationFilter {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereInput, {
    nullable: true
  })
  every?: Product_custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setWhereInput, {
    nullable: true
  })
  some?: Product_custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setWhereInput, {
    nullable: true
  })
  none?: Product_custom_field_setWhereInput | undefined;
}
