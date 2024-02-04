import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodWhereInput } from "../../../inputs/Payment_methodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;
}
