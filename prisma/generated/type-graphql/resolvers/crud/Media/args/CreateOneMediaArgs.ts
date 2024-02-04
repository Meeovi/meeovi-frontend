import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaCreateInput } from "../../../inputs/MediaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMediaArgs {
  @TypeGraphQL.Field(_type => MediaCreateInput, {
    nullable: false
  })
  data!: MediaCreateInput;
}
