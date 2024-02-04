import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaCreateManyInput } from "../../../inputs/MediaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMediaArgs {
  @TypeGraphQL.Field(_type => [MediaCreateManyInput], {
    nullable: false
  })
  data!: MediaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
