import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Product_stream_mappingScalarWhereWithAggregatesInput", {})
export class Product_stream_mappingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_stream_mappingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_stream_mappingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_stream_mappingScalarWhereWithAggregatesInput[] | undefined;

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
  product_stream_id?: BytesWithAggregatesFilter | undefined;
}
