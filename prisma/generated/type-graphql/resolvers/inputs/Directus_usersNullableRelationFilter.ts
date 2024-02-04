import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";

@TypeGraphQL.InputType("Directus_usersNullableRelationFilter", {})
export class Directus_usersNullableRelationFilter {
  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  is?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  isNot?: Directus_usersWhereInput | undefined;
}
