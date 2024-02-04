import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagUpdateInput } from "../../../inputs/Media_tagUpdateInput";
import { Media_tagWhereUniqueInput } from "../../../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMedia_tagArgs {
  @TypeGraphQL.Field(_type => Media_tagUpdateInput, {
    nullable: false
  })
  data!: Media_tagUpdateInput;

  @TypeGraphQL.Field(_type => Media_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Media_tagWhereUniqueInput;
}
