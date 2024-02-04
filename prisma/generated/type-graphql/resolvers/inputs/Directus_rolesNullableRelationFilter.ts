import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesWhereInput } from "../inputs/Directus_rolesWhereInput";

@TypeGraphQL.InputType("Directus_rolesNullableRelationFilter", {})
export class Directus_rolesNullableRelationFilter {
  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  is?: Directus_rolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  isNot?: Directus_rolesWhereInput | undefined;
}
