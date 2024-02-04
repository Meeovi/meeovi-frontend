import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataCreateInput } from "../../../inputs/Adyen_payment_state_dataCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAdyen_payment_state_dataArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_state_dataCreateInput, {
    nullable: false
  })
  data!: Adyen_payment_state_dataCreateInput;
}
