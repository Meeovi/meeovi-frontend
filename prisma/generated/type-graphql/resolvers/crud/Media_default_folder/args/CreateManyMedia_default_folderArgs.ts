import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_default_folderCreateManyInput } from "../../../inputs/Media_default_folderCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_default_folderArgs {
  @TypeGraphQL.Field(_type => [Media_default_folderCreateManyInput], {
    nullable: false
  })
  data!: Media_default_folderCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
