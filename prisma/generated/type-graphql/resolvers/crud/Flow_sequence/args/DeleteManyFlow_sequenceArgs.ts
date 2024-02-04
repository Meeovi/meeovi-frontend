import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceWhereInput } from "../../../inputs/Flow_sequenceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  where?: Flow_sequenceWhereInput | undefined;
}
