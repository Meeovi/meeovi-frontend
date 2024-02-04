import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodUpdateManyMutationInput } from "../../../inputs/Payment_methodUpdateManyMutationInput";
import { Payment_methodWhereInput } from "../../../inputs/Payment_methodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: Payment_methodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}
