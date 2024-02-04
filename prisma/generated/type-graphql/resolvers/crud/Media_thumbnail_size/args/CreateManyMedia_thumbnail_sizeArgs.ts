import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeCreateManyInput } from "../../../inputs/Media_thumbnail_sizeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeCreateManyInput], {
    nullable: false
  })
  data!: Media_thumbnail_sizeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
