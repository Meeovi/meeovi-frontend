import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenCreateInput } from "../../../inputs/Payment_tokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePayment_tokenArgs {
  @TypeGraphQL.Field(_type => Payment_tokenCreateInput, {
    nullable: false
  })
  data!: Payment_tokenCreateInput;
}
