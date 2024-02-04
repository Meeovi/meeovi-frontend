import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationUpdateInput } from "../../../inputs/Media_translationUpdateInput";
import { Media_translationWhereUniqueInput } from "../../../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationUpdateInput, {
    nullable: false
  })
  data!: Media_translationUpdateInput;

  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;
}
