import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_paymentCreateInput } from "../../../inputs/Adyen_paymentCreateInput";
import { Adyen_paymentUpdateInput } from "../../../inputs/Adyen_paymentUpdateInput";
import { Adyen_paymentWhereUniqueInput } from "../../../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAdyen_paymentArgs {
  @TypeGraphQL.Field(_type => Adyen_paymentWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_paymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_paymentCreateInput, {
    nullable: false
  })
  create!: Adyen_paymentCreateInput;

  @TypeGraphQL.Field(_type => Adyen_paymentUpdateInput, {
    nullable: false
  })
  update!: Adyen_paymentUpdateInput;
}
