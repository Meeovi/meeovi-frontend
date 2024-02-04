import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Product_categoryScalarWhereWithAggregatesInput", {})
export class Product_categoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_categoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_categoryScalarWhereWithAggregatesInput[] | undefined;

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
