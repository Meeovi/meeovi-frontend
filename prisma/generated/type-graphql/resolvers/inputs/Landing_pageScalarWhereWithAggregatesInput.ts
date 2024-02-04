import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";

@TypeGraphQL.InputType("Landing_pageScalarWhereWithAggregatesInput", {})
export class Landing_pageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Landing_pageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Landing_pageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Landing_pageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Landing_pageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  active?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  cms_page_id?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  cms_page_version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
