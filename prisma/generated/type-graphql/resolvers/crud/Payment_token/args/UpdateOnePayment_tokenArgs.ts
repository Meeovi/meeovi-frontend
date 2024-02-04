import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenUpdateInput } from "../../../inputs/Payment_tokenUpdateInput";
import { Payment_tokenWhereUniqueInput } from "../../../inputs/Payment_tokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePayment_tokenArgs {
  @TypeGraphQL.Field(_type => Payment_tokenUpdateInput, {
    nullable: false
  })
  data!: Payment_tokenUpdateInput;

  @TypeGraphQL.Field(_type => Payment_tokenWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_tokenWhereUniqueInput;
}
