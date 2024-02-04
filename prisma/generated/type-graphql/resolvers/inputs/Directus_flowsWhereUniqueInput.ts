import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Directus_flowsWhereInput } from "../inputs/Directus_flowsWhereInput";
import { Directus_usersNullableRelationFilter } from "../inputs/Directus_usersNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_flowsWhereUniqueInput", {})
export class Directus_flowsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  operation?: string | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereInput], {
    nullable: true
  })
  AND?: Directus_flowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereInput], {
    nullable: true
  })
  OR?: Directus_flowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereInput], {
    nullable: true
  })
  NOT?: Directus_flowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  icon?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  color?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  trigger?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  accountability?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  options?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_created?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  user_created?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_usersNullableRelationFilter, {
    nullable: true
  })
  directus_users?: Directus_usersNullableRelationFilter | undefined;
}
