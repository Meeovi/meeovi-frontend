import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_dashboardsScalarWhereInput", {})
export class Directus_dashboardsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarWhereInput], {
    nullable: true
  })
  AND?: Directus_dashboardsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarWhereInput], {
    nullable: true
  })
  OR?: Directus_dashboardsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarWhereInput], {
    nullable: true
  })
  NOT?: Directus_dashboardsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  icon?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  note?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_created?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  user_created?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  color?: StringNullableFilter | undefined;
}
