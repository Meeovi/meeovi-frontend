import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_method_translationCreateInput } from "../../../inputs/Payment_method_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePayment_method_translationArgs {
  @TypeGraphQL.Field(_type => Payment_method_translationCreateInput, {
    nullable: false
  })
  data!: Payment_method_translationCreateInput;
}
