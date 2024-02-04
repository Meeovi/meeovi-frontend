import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_payment_request_logWhereInput } from "../../../inputs/Klarna_payment_request_logWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyKlarna_payment_request_logArgs {
  @TypeGraphQL.Field(_type => Klarna_payment_request_logWhereInput, {
    nullable: true
  })
  where?: Klarna_payment_request_logWhereInput | undefined;
}
