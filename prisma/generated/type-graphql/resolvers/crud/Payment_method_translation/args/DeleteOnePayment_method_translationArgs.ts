import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_method_translationWhereUniqueInput } from "../../../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePayment_method_translationArgs {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_method_translationWhereUniqueInput;
}
