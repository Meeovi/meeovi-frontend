import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationWhereInput } from "../inputs/Media_folder_configurationWhereInput";

@TypeGraphQL.InputType("Media_folder_configurationRelationFilter", {})
export class Media_folder_configurationRelationFilter {
  @TypeGraphQL.Field(_type => Media_folder_configurationWhereInput, {
    nullable: true
  })
  is?: Media_folder_configurationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationWhereInput, {
    nullable: true
  })
  isNot?: Media_folder_configurationWhereInput | undefined;
}
