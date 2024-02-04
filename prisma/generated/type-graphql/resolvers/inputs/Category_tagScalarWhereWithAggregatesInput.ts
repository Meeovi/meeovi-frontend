import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Category_tagScalarWhereWithAggregatesInput", {})
export class Category_tagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Category_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Category_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Category_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Category_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  category_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  category_version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  tag_id?: BytesWithAggregatesFilter | undefined;
}
