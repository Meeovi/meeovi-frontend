import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_method_translationWhereInput } from "../../../inputs/Payment_method_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPayment_method_translationArgs {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereInput, {
    nullable: true
  })
  where?: Payment_method_translationWhereInput | undefined;
}
