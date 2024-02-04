import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_payment_request_logCreateInput } from "../../../inputs/Klarna_payment_request_logCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneKlarna_payment_request_logArgs {
  @TypeGraphQL.Field(_type => Klarna_payment_request_logCreateInput, {
    nullable: false
  })
  data!: Klarna_payment_request_logCreateInput;
}
