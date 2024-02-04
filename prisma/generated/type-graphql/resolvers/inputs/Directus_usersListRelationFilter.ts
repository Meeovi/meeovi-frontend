import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";

@TypeGraphQL.InputType("Directus_usersListRelationFilter", {})
export class Directus_usersListRelationFilter {
  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  every?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  some?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  none?: Directus_usersWhereInput | undefined;
}
