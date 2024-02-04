import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_payment_request_logWhereUniqueInput } from "../../../inputs/Klarna_payment_request_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueKlarna_payment_request_logArgs {
  @TypeGraphQL.Field(_type => Klarna_payment_request_logWhereUniqueInput, {
    nullable: false
  })
  where!: Klarna_payment_request_logWhereUniqueInput;
}
