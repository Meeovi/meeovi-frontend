import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";

@TypeGraphQL.InputType("Media_folderListRelationFilter", {})
export class Media_folderListRelationFilter {
  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  every?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  some?: Media_folderWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderWhereInput, {
    nullable: true
  })
  none?: Media_folderWhereInput | undefined;
}
