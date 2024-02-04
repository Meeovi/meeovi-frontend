import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenWhereUniqueInput } from "../../../inputs/Payment_tokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePayment_tokenArgs {
  @TypeGraphQL.Field(_type => Payment_tokenWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_tokenWhereUniqueInput;
}
