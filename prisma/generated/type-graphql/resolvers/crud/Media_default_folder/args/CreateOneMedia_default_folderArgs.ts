import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderCreateInput } from "../../../inputs/Media_default_folderCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_default_folderArgs {
  @TypeGraphQL.Field(_type => Media_default_folderCreateInput, {
    nullable: false
  })
  data!: Media_default_folderCreateInput;
}
