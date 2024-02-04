import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaUpdateInput } from "../../../inputs/MediaUpdateInput";
import { MediaWhereUniqueInput } from "../../../inputs/MediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMediaArgs {
  @TypeGraphQL.Field(_type => MediaUpdateInput, {
    nullable: false
  })
  data!: MediaUpdateInput;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;
}
