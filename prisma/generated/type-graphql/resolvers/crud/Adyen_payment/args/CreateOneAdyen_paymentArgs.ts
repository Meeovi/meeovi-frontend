import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentCreateInput } from "../../../inputs/Adyen_paymentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAdyen_paymentArgs {
  @TypeGraphQL.Field(_type => Adyen_paymentCreateInput, {
    nullable: false
  })
  data!: Adyen_paymentCreateInput;
}
