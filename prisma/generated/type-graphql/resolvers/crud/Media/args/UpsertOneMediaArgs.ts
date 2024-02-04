import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaCreateInput } from "../../../inputs/MediaCreateInput";
import { MediaUpdateInput } from "../../../inputs/MediaUpdateInput";
import { MediaWhereUniqueInput } from "../../../inputs/MediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMediaArgs {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateInput, {
    nullable: false
  })
  create!: MediaCreateInput;

  @TypeGraphQL.Field(_type => MediaUpdateInput, {
    nullable: false
  })
  update!: MediaUpdateInput;
}
