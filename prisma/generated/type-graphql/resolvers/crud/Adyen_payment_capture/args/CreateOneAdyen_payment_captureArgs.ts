import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureCreateInput } from "../../../inputs/Adyen_payment_captureCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_captureCreateInput, {
    nullable: false
  })
  data!: Adyen_payment_captureCreateInput;
}
