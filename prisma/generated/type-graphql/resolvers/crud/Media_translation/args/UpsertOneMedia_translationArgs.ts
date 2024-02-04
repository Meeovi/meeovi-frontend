import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationCreateInput } from "../../../inputs/Media_translationCreateInput";
import { Media_translationUpdateInput } from "../../../inputs/Media_translationUpdateInput";
import { Media_translationWhereUniqueInput } from "../../../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_translationCreateInput, {
    nullable: false
  })
  create!: Media_translationCreateInput;

  @TypeGraphQL.Field(_type => Media_translationUpdateInput, {
    nullable: false
  })
  update!: Media_translationUpdateInput;
}
