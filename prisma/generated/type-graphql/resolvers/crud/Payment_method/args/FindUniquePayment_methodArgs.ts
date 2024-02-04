import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodWhereUniqueInput } from "../../../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;
}
