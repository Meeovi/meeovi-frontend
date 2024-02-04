import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenCreateInput } from "../../../inputs/Payment_tokenCreateInput";
import { Payment_tokenUpdateInput } from "../../../inputs/Payment_tokenUpdateInput";
import { Payment_tokenWhereUniqueInput } from "../../../inputs/Payment_tokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePayment_tokenArgs {
  @TypeGraphQL.Field(_type => Payment_tokenWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_tokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_tokenCreateInput, {
    nullable: false
  })
  create!: Payment_tokenCreateInput;

  @TypeGraphQL.Field(_type => Payment_tokenUpdateInput, {
    nullable: false
  })
  update!: Payment_tokenUpdateInput;
}
