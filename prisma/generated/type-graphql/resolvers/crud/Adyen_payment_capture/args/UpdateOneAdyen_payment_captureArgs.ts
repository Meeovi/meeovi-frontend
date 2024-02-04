import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureUpdateInput } from "../../../inputs/Adyen_payment_captureUpdateInput";
import { Adyen_payment_captureWhereUniqueInput } from "../../../inputs/Adyen_payment_captureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_captureUpdateInput, {
    nullable: false
  })
  data!: Adyen_payment_captureUpdateInput;

  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_payment_captureWhereUniqueInput;
}
