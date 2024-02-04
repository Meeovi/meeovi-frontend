import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Product_custom_field_setScalarWhereWithAggregatesInput", {})
export class Product_custom_field_setScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_custom_field_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_custom_field_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_custom_field_setScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  custom_field_set_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_version_id?: BytesWithAggregatesFilter | undefined;
}
