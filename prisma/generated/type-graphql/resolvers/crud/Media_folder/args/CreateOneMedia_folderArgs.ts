import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderCreateInput } from "../../../inputs/Media_folderCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_folderArgs {
  @TypeGraphQL.Field(_type => Media_folderCreateInput, {
    nullable: false
  })
  data!: Media_folderCreateInput;
}
