import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderNullableRelationFilter", {})
export class Media_folderNullableRelationFilter {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  is?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  isNot?: Media_folderWhereInput | undefined;
}
