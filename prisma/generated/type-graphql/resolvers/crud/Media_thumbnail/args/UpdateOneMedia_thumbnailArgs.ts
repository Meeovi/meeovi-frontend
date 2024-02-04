import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnailUpdateInput } from "../../../inputs/Media_thumbnailUpdateInput";
import { Media_thumbnailWhereUniqueInput } from "../../../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMedia_thumbnailArgs {
  @TypeGraphQL.Field(_type => Media_thumbnailUpdateInput, {
    nullable: false
  })
  data!: Media_thumbnailUpdateInput;

  @TypeGraphQL.Field(_type => Media_thumbnailWhereUniqueInput, {
    nullable: false
  })
  where!: Media_thumbnailWhereUniqueInput;
}
