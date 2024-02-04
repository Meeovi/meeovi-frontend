import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenWhereInput } from "../../../inputs/Refresh_tokenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRefresh_tokenArgs {
  @TypeGraphQL.Field(_type => Refresh_tokenWhereInput, {
    nullable: true
  })
  where?: Refresh_tokenWhereInput | undefined;
}
