import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediaWhereInput } from "../../../inputs/MediaWhereInput";

@TypeGraphQL.ArgsType()
export class Cms_pageMediaArgs {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
