import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementWhereInput } from "../../../inputs/IncrementWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIncrementArgs {
  @TypeGraphQL.Field(_type => IncrementWhereInput, {
    nullable: true
  })
  where?: IncrementWhereInput | undefined;
}
