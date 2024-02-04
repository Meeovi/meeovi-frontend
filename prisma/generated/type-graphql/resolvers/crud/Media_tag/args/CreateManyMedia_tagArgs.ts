import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagCreateManyInput } from "../../../inputs/Media_tagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_tagArgs {
  @TypeGraphQL.Field(_type => [Media_tagCreateManyInput], {
    nullable: false
  })
  data!: Media_tagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
