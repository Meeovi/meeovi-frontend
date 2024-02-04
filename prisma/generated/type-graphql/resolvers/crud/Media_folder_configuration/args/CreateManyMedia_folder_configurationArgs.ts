import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configurationCreateManyInput } from "../../../inputs/Media_folder_configurationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_folder_configurationArgs {
  @TypeGraphQL.Field(_type => [Media_folder_configurationCreateManyInput], {
    nullable: false
  })
  data!: Media_folder_configurationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
