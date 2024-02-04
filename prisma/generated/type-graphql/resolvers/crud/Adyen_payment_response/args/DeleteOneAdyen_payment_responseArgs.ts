import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_responseWhereUniqueInput } from "../../../inputs/Adyen_payment_responseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAdyen_payment_responseArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_responseWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_payment_responseWhereUniqueInput;
}
