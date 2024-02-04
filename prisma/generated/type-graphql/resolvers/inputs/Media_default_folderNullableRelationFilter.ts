import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_default_folderWhereInput } from "../inputs/Media_default_folderWhereInput";

@TypeGraphQL.InputType("Media_default_folderNullableRelationFilter", {})
export class Media_default_folderNullableRelationFilter {
  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  is?: Media_default_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderWhereInput, {
    nullable: true
  })
  isNot?: Media_default_folderWhereInput | undefined;
}
