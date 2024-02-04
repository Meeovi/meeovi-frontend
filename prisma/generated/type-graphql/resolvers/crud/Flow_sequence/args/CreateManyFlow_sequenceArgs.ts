import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceCreateManyInput } from "../../../inputs/Flow_sequenceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlow_sequenceArgs {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateManyInput], {
    nullable: false
  })
  data!: Flow_sequenceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
