import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceCreateInput } from "../../../inputs/Flow_sequenceCreateInput";
import { Flow_sequenceUpdateInput } from "../../../inputs/Flow_sequenceUpdateInput";
import { Flow_sequenceWhereUniqueInput } from "../../../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateInput;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateInput, {
    nullable: false
  })
  update!: Flow_sequenceUpdateInput;
}
