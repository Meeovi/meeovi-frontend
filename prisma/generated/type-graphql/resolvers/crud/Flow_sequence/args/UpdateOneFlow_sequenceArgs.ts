import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceUpdateInput } from "../../../inputs/Flow_sequenceUpdateInput";
import { Flow_sequenceWhereUniqueInput } from "../../../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceUpdateInput, {
    nullable: false
  })
  data!: Flow_sequenceUpdateInput;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;
}
