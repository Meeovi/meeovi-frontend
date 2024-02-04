import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentUpdateManyMutationInput } from "../../../inputs/Adyen_paymentUpdateManyMutationInput";
import { Adyen_paymentWhereInput } from "../../../inputs/Adyen_paymentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdyen_paymentArgs {
  @TypeGraphQL.Field(_type => Adyen_paymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_paymentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Adyen_paymentWhereInput, {
    nullable: true
  })
  where?: Adyen_paymentWhereInput | undefined;
}
