import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Product_optionScalarWhereWithAggregatesInput", {})
export class Product_optionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_optionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_optionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_optionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_optionScalarWhereWithAggregatesInput[] | undefined;

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
