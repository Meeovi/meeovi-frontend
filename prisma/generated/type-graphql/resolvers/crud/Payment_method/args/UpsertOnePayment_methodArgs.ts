import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodCreateInput } from "../../../inputs/Payment_methodCreateInput";
import { Payment_methodUpdateInput } from "../../../inputs/Payment_methodUpdateInput";
import { Payment_methodWhereUniqueInput } from "../../../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateInput, {
    nullable: false
  })
  create!: Payment_methodCreateInput;

  @TypeGraphQL.Field(_type => Payment_methodUpdateInput, {
    nullable: false
  })
  update!: Payment_methodUpdateInput;
}
