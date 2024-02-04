import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailCreateManyInput } from "../../../inputs/Media_thumbnailCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => [Media_thumbnailCreateManyInput], {
    nullable: false
  })
  data!: Media_thumbnailCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
