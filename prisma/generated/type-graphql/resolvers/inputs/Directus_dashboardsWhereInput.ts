import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Directus_usersNullableRelationFilter } from "../inputs/Directus_usersNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_dashboardsWhereInput", {})
export class Directus_dashboardsWhereInput {
  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereInput], {
    nullable: true
  })
  AND?: Directus_dashboardsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereInput], {
    nullable: true
  })
  OR?: Directus_dashboardsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereInput], {
    nullable: true
  })
  NOT?: Directus_dashboardsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => Directus_usersNullableRelationFilter, {
    nullable: true
  })
  directus_users?: Directus_usersNullableRelationFilter | undefined;
}
