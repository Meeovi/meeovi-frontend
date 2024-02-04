import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput", {})
export class Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_cross_selling_assigned_productsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  cross_selling_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  position?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
