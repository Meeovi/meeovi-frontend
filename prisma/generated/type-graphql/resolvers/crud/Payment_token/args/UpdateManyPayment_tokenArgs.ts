import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenUpdateManyMutationInput } from "../../../inputs/Payment_tokenUpdateManyMutationInput";
import { Payment_tokenWhereInput } from "../../../inputs/Payment_tokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPayment_tokenArgs {
  @TypeGraphQL.Field(_type => Payment_tokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: Payment_tokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Payment_tokenWhereInput, {
    nullable: true
  })
  where?: Payment_tokenWhereInput | undefined;
}
