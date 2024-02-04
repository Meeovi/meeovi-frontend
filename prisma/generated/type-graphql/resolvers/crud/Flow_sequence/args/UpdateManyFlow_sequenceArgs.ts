import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceUpdateManyMutationInput } from "../../../inputs/Flow_sequenceUpdateManyMutationInput";
import { Flow_sequenceWhereInput } from "../../../inputs/Flow_sequenceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: Flow_sequenceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  where?: Flow_sequenceWhereInput | undefined;
}
