import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataUpdateManyMutationInput } from "../../../inputs/Adyen_payment_state_dataUpdateManyMutationInput";
import { Adyen_payment_state_dataWhereInput } from "../../../inputs/Adyen_payment_state_dataWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdyen_payment_state_dataArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_state_dataUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_payment_state_dataUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Adyen_payment_state_dataWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_state_dataWhereInput | undefined;
}
