import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentUpdateInput } from "../../../inputs/Adyen_paymentUpdateInput";
import { Adyen_paymentWhereUniqueInput } from "../../../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAdyen_paymentArgs {
  @TypeGraphQL.Field(_type => Adyen_paymentUpdateInput, {
    nullable: false
  })
  data!: Adyen_paymentUpdateInput;

  @TypeGraphQL.Field(_type => Adyen_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_paymentWhereUniqueInput;
}
