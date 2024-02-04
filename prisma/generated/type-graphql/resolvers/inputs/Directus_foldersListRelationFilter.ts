import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersWhereInput } from "../inputs/Directus_foldersWhereInput";

@TypeGraphQL.InputType("Directus_foldersListRelationFilter", {})
export class Directus_foldersListRelationFilter {
  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  every?: Directus_foldersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  some?: Directus_foldersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  none?: Directus_foldersWhereInput | undefined;
}
