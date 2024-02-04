import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folderCreateManyInput } from "../../../inputs/Media_folderCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_folderArgs {
  @TypeGraphQL.Field(_type => [Media_folderCreateManyInput], {
    nullable: false
  })
  data!: Media_folderCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
