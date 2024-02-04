import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersWhereInput } from "../inputs/Directus_foldersWhereInput";

@TypeGraphQL.InputType("Directus_foldersNullableRelationFilter", {})
export class Directus_foldersNullableRelationFilter {
  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  is?: Directus_foldersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  isNot?: Directus_foldersWhereInput | undefined;
}
