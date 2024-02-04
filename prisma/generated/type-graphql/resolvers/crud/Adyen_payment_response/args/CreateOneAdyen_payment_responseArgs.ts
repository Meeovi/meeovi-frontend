import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_responseCreateInput } from "../../../inputs/Adyen_payment_responseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAdyen_payment_responseArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_responseCreateInput, {
    nullable: false
  })
  data!: Adyen_payment_responseCreateInput;
}
