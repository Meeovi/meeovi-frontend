import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentWhereUniqueInput } from "../../../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAdyen_paymentOrThrowArgs {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_paymentWhereUniqueInput;
}
