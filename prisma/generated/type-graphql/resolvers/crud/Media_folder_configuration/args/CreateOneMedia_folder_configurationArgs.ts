import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationCreateInput } from "../../../inputs/Media_folder_configurationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => Media_folder_configurationCreateInput, {
    nullable: false
  })
  data!: Media_folder_configurationCreateInput;
}
