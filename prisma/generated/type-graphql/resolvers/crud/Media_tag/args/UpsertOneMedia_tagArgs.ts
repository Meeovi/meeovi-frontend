import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagCreateInput } from "../../../inputs/Media_tagCreateInput";
import { Media_tagUpdateInput } from "../../../inputs/Media_tagUpdateInput";
import { Media_tagWhereUniqueInput } from "../../../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_tagArgs {
  @TypeGraphQL.Field(_type => Media_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Media_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_tagCreateInput, {
    nullable: false
  })
  create!: Media_tagCreateInput;

  @TypeGraphQL.Field(_type => Media_tagUpdateInput, {
    nullable: false
  })
  update!: Media_tagUpdateInput;
}
