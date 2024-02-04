import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Product_propertyScalarWhereWithAggregatesInput", {})
export class Product_propertyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_propertyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_propertyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_propertyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  property_group_option_id?: BytesWithAggregatesFilter | undefined;
}
