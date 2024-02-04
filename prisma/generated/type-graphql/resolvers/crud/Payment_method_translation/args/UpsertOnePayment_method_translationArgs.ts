import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_method_translationCreateInput } from "../../../inputs/Payment_method_translationCreateInput";
import { Payment_method_translationUpdateInput } from "../../../inputs/Payment_method_translationUpdateInput";
import { Payment_method_translationWhereUniqueInput } from "../../../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePayment_method_translationArgs {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_method_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateInput, {
    nullable: false
  })
  create!: Payment_method_translationCreateInput;

  @TypeGraphQL.Field(_type => Payment_method_translationUpdateInput, {
    nullable: false
  })
  update!: Payment_method_translationUpdateInput;
}
