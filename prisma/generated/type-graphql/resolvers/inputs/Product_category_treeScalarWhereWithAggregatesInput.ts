import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Product_category_treeScalarWhereWithAggregatesInput", {})
export class Product_category_treeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_category_treeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_category_treeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_category_treeScalarWhereWithAggregatesInput[] | undefined;

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
  category_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  category_version_id?: BytesWithAggregatesFilter | undefined;
}
