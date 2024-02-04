import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationWhereUniqueInput } from "../../../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;
}
