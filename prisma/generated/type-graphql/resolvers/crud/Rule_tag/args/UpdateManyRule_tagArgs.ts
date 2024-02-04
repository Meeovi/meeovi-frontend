import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagUpdateManyMutationInput } from "../../../inputs/Rule_tagUpdateManyMutationInput";
import { Rule_tagWhereInput } from "../../../inputs/Rule_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Rule_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Rule_tagWhereInput, {
    nullable: true
  })
  where?: Rule_tagWhereInput | undefined;
}
