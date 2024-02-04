import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Directus_dashboardsScalarWhereWithAggregatesInput", {})
export class Directus_dashboardsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Directus_dashboardsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Directus_dashboardsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Directus_dashboardsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  icon?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  note?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date_created?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  user_created?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  color?: StringNullableWithAggregatesFilter | undefined;
}
