import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodUpdateInput } from "../../../inputs/Payment_methodUpdateInput";
import { Payment_methodWhereUniqueInput } from "../../../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodUpdateInput, {
    nullable: false
  })
  data!: Payment_methodUpdateInput;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;
}
