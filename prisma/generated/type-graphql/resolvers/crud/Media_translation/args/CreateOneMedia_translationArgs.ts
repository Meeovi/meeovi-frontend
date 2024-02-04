import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationCreateInput } from "../../../inputs/Media_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationCreateInput, {
    nullable: false
  })
  data!: Media_translationCreateInput;
}
