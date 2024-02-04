import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodCreateInput } from "../../../inputs/Payment_methodCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodCreateInput, {
    nullable: false
  })
  data!: Payment_methodCreateInput;
}
