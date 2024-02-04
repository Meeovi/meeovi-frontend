import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureCreateInput } from "../../../inputs/Adyen_payment_captureCreateInput";
import { Adyen_payment_captureUpdateInput } from "../../../inputs/Adyen_payment_captureUpdateInput";
import { Adyen_payment_captureWhereUniqueInput } from "../../../inputs/Adyen_payment_captureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_payment_captureWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_payment_captureCreateInput, {
    nullable: false
  })
  create!: Adyen_payment_captureCreateInput;

  @TypeGraphQL.Field(_type => Adyen_payment_captureUpdateInput, {
    nullable: false
  })
  update!: Adyen_payment_captureUpdateInput;
}
