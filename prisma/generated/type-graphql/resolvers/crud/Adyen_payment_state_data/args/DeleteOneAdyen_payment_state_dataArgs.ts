import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataWhereUniqueInput } from "../../../inputs/Adyen_payment_state_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAdyen_payment_state_dataArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_state_dataWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_payment_state_dataWhereUniqueInput;
}
