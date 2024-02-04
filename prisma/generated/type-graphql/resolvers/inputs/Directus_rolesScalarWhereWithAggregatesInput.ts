import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Directus_rolesScalarWhereWithAggregatesInput", {})
export class Directus_rolesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Directus_rolesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Directus_rolesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Directus_rolesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Directus_rolesScalarWhereWithAggregatesInput[] | undefined;

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
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ip_access?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  enforce_tfa?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  admin_access?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  app_access?: BoolWithAggregatesFilter | undefined;
}
