import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationWhereUniqueInput } from "../../../inputs/Media_folder_configurationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => Media_folder_configurationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folder_configurationWhereUniqueInput;
}
