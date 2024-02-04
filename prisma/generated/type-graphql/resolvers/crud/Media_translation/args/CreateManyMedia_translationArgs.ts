import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationCreateManyInput } from "../../../inputs/Media_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_translationArgs {
  @TypeGraphQL.Field(_type => [Media_translationCreateManyInput], {
    nullable: false
  })
  data!: Media_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
