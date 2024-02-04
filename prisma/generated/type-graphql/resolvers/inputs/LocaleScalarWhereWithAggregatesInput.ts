import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LocaleScalarWhereWithAggregatesInput", {})
export class LocaleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocaleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocaleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocaleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocaleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocaleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocaleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  code?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
