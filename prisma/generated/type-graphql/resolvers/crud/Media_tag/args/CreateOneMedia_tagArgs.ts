import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagCreateInput } from "../../../inputs/Media_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_tagArgs {
  @TypeGraphQL.Field(_type => Media_tagCreateInput, {
    nullable: false
  })
  data!: Media_tagCreateInput;
}
