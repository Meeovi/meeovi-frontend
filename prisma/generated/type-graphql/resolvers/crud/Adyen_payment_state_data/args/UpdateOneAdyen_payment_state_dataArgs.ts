import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataUpdateInput } from "../../../inputs/Adyen_payment_state_dataUpdateInput";
import { Adyen_payment_state_dataWhereUniqueInput } from "../../../inputs/Adyen_payment_state_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAdyen_payment_state_dataArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_state_dataUpdateInput, {
    nullable: false
  })
  data!: Adyen_payment_state_dataUpdateInput;

  @TypeGraphQL.Field(_type => Adyen_payment_state_dataWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_payment_state_dataWhereUniqueInput;
}
