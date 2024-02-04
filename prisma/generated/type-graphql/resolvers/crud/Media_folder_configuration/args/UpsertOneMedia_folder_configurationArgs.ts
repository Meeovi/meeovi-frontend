import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationCreateInput } from "../../../inputs/Media_folder_configurationCreateInput";
import { Media_folder_configurationUpdateInput } from "../../../inputs/Media_folder_configurationUpdateInput";
import { Media_folder_configurationWhereUniqueInput } from "../../../inputs/Media_folder_configurationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => Media_folder_configurationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folder_configurationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folder_configurationCreateInput, {
    nullable: false
  })
  create!: Media_folder_configurationCreateInput;

  @TypeGraphQL.Field(_type => Media_folder_configurationUpdateInput, {
    nullable: false
  })
  update!: Media_folder_configurationUpdateInput;
}
