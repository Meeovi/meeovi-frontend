import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Dead_messageUpdateManyMutationInput } from "../../../inputs/Dead_messageUpdateManyMutationInput";
import { Dead_messageWhereInput } from "../../../inputs/Dead_messageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDead_messageArgs {
  @TypeGraphQL.Field(_type => Dead_messageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Dead_messageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Dead_messageWhereInput, {
    nullable: true
  })
  where?: Dead_messageWhereInput | undefined;
}
