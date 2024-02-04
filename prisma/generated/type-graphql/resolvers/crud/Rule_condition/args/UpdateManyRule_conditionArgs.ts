import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_conditionUpdateManyMutationInput } from "../../../inputs/Rule_conditionUpdateManyMutationInput";
import { Rule_conditionWhereInput } from "../../../inputs/Rule_conditionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRule_conditionArgs {
  @TypeGraphQL.Field(_type => Rule_conditionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Rule_conditionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Rule_conditionWhereInput, {
    nullable: true
  })
  where?: Rule_conditionWhereInput | undefined;
}
