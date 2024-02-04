import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Product_custom_field_setScalarWhereInput", {})
export class Product_custom_field_setScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarWhereInput], {
    nullable: true
  })
  AND?: Product_custom_field_setScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarWhereInput], {
    nullable: true
  })
  OR?: Product_custom_field_setScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_custom_field_setScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  custom_field_set_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;
}
