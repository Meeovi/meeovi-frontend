import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_payment_request_logCreateInput } from "../../../inputs/Klarna_payment_request_logCreateInput";
import { Klarna_payment_request_logUpdateInput } from "../../../inputs/Klarna_payment_request_logUpdateInput";
import { Klarna_payment_request_logWhereUniqueInput } from "../../../inputs/Klarna_payment_request_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneKlarna_payment_request_logArgs {
  @TypeGraphQL.Field(_type => Klarna_payment_request_logWhereUniqueInput, {
    nullable: false
  })
  where!: Klarna_payment_request_logWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klarna_payment_request_logCreateInput, {
    nullable: false
  })
  create!: Klarna_payment_request_logCreateInput;

  @TypeGraphQL.Field(_type => Klarna_payment_request_logUpdateInput, {
    nullable: false
  })
  update!: Klarna_payment_request_logUpdateInput;
}
