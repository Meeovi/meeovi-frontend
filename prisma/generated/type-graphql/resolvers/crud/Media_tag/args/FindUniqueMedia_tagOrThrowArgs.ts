import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagWhereUniqueInput } from "../../../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMedia_tagOrThrowArgs {
  @TypeGraphQL.Field(_type => Media_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Media_tagWhereUniqueInput;
}
