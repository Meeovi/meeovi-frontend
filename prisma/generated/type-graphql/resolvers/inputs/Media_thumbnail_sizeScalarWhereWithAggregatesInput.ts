import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Media_thumbnail_sizeScalarWhereWithAggregatesInput", {})
export class Media_thumbnail_sizeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Media_thumbnail_sizeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Media_thumbnail_sizeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Media_thumbnail_sizeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  width?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  height?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  custom_fields?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
