import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementUpdateManyMutationInput } from "../../../inputs/IncrementUpdateManyMutationInput";
import { IncrementWhereInput } from "../../../inputs/IncrementWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIncrementArgs {
  @TypeGraphQL.Field(_type => IncrementUpdateManyMutationInput, {
    nullable: false
  })
  data!: IncrementUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IncrementWhereInput, {
    nullable: true
  })
  where?: IncrementWhereInput | undefined;
}
